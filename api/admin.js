const allowedTypes=new Set(['events','sermons','announcements','ministries','testimonies','house_fellowships','leadership','service_schedules','gallery']);
const canViewPrivate=(role)=>['super_admin','area_pastor','pastoral','pastoral_support'].includes(role);
const canApproveContent=(role)=>['super_admin','area_pastor'].includes(role);
const canManage=(role,type)=>['super_admin','editor','content_admin'].includes(role)||(role==='media_admin'&&['sermons','gallery'].includes(type))||(role==='event_admin'&&type==='events');
const supa=()=>({url:(process.env.SUPABASE_URL||'').replace(/\/$/,''),anon:process.env.SUPABASE_ANON_KEY,service:process.env.SUPABASE_SERVICE_ROLE_KEY});
async function authUser(token,cfg) {
 const r=await fetch(cfg.url+'/auth/v1/user',{headers:{apikey:cfg.anon,Authorization:'Bearer '+token}});
 if(!r.ok) return null;return await r.json();
}
async function db(cfg,path,method='GET',body) {
 const r=await fetch(cfg.url+'/rest/v1/'+path,{method,headers:{apikey:cfg.service,Authorization:'Bearer '+cfg.service,'Content-Type':'application/json',Prefer:method==='GET'?'count=exact':'return=representation'},...(body?{body:JSON.stringify(body)}:{})});
 const text=await r.text();if(!r.ok)throw new Error('Database operation failed: '+text.slice(0,250));return text?JSON.parse(text):[];
}
async function audit(cfg,actorId,action,entityType,entityId,details={}) {
 await db(cfg,'admin_audit_logs','POST',{
  actor_id:actorId,action,entity_type:entityType,entity_id:entityId||null,
  details,created_at:new Date().toISOString()
 });
}
export default async function handler(req,res) {
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed.'});}
 const cfg=supa();if(!cfg.url||!cfg.anon||!cfg.service)return res.status(503).json({error:'Administrator access is not configured. Ask the project administrator to complete the secure setup.'});
 try {
  const body=typeof req.body==='string'?JSON.parse(req.body):(req.body||{});
  if(body.action==='sign_in') {
   const email=String(body.email||'').trim().slice(0,180),password=String(body.password||'');
   if(!email||!password)return res.status(400).json({error:'Email and password are required.'});
   const login=await fetch(cfg.url+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:cfg.anon,'Content-Type':'application/json'},body:JSON.stringify({email,password})});
   const auth=await login.json();if(!login.ok||!auth.access_token)return res.status(401).json({error:'Email or password is incorrect, or this account is not authorised.'});
   const user=await authUser(auth.access_token,cfg);if(!user?.id)return res.status(401).json({error:'Could not verify this account.'});
   const rows=await db(cfg,'admin_users?id=eq.'+encodeURIComponent(user.id)+'&active=eq.true&select=id,role,active');
   if(!rows.length)return res.status(403).json({error:'This account has not been approved for website administration.'});
   return res.status(200).json({access_token:auth.access_token,user:{id:user.id,email:user.email},role:rows[0].role});
  }
  const token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');
  if(!token)return res.status(401).json({error:'Sign in is required.'});
  const user=await authUser(token,cfg);if(!user?.id)return res.status(401).json({error:'Your session has expired. Please sign in again.'});
  const admins=await db(cfg,'admin_users?id=eq.'+encodeURIComponent(user.id)+'&active=eq.true&select=id,role');
  if(!admins.length)return res.status(403).json({error:'Administrator access has been revoked.'});
  const role=admins[0].role;
  if(body.action==='dashboard') {
   const canViewPrivateSubmissions=canViewPrivate(role);
   const [content,submissions,events,sermons]=await Promise.all([
    db(cfg,'site_content?select=id'),
    canViewPrivateSubmissions
      ? db(cfg,'form_submissions?select=id,submission_type,created_at,status&order=created_at.desc&limit=8')
      : Promise.resolve([]),
    db(cfg,'site_content?content_type=eq.events&published=eq.true&select=id'),
    db(cfg,'site_content?content_type=eq.sermons&published=eq.true&select=id')
   ]);
   return res.status(200).json({
    user:{email:user.email},role,
    permissions:{content:['super_admin','editor','content_admin','media_admin','event_admin'].includes(role),private_submissions:canViewPrivateSubmissions,content_approval:canApproveContent(role)},
    counts:{content:content.length,new_submissions:canViewPrivateSubmissions?submissions.filter(x=>x.status==='new').length:null,events:events.length,sermons:sermons.length},
    recent_submissions:submissions
   });
  }
  const contentActions=['list_content','save_content','delete_content'];
  const privateActions=['list_submissions','update_submission_status'];
  const approvalActions=['list_review_content','approve_content'];
  if(approvalActions.includes(body.action) && !canApproveContent(role))
    return res.status(403).json({error:'Your role does not permit content approval.'});
  if(body.action==='list_review_content') {
   const items=await db(cfg,'site_content?published=eq.false&select=id,content_type,title,slug,summary,created_at,updated_at&order=updated_at.desc&limit=100');
   return res.status(200).json({items});
  }
  if(body.action==='approve_content') {
   const id=String(body.id||'');
   if(!id)return res.status(400).json({error:'Content ID is required.'});
   const result=await db(cfg,'site_content?id=eq.'+encodeURIComponent(id)+'&select=id,content_type,title,published','PATCH',{published:true,updated_at:new Date().toISOString()});
   if(!result.length)return res.status(404).json({error:'Draft content was not found.'});
   await audit(cfg,user.id,'content.approved',result[0].content_type,id,{role});
   return res.status(200).json({approved:true,item:result[0]});
  }
  if(['list_content','save_content'].includes(body.action) && !canManage(role,String(body.content_type||body.type||'')))
    return res.status(403).json({error:'Your role does not permit this content type.'});
  if(body.action==='delete_content' && !['super_admin','editor','content_admin','media_admin','event_admin'].includes(role))
    return res.status(403).json({error:'Your role does not permit website content deletion.'});
  if(privateActions.includes(body.action) && !canViewPrivate(role))
    return res.status(403).json({error:'Your role does not permit access to private pastoral submissions.'});
  if(body.action==='list_content') {
   const type=String(body.type||'');if(!allowedTypes.has(type))return res.status(400).json({error:'Invalid content type.'});
   const items=await db(cfg,'site_content?content_type=eq.'+encodeURIComponent(type)+'&select=*&order=updated_at.desc&limit=100');
   return res.status(200).json({items});
  }
  if(body.action==='save_content') {
   const type=String(body.content_type||'');if(!allowedTypes.has(type))return res.status(400).json({error:'Invalid content type.'});
   const title=String(body.title||'').trim().slice(0,180);if(!title)return res.status(400).json({error:'A title is required.'});
   const startValue=String(body.starts_at||'').trim();
   const startDate=startValue?new Date(startValue):null;
   if(startValue&&(!startDate||Number.isNaN(startDate.getTime())))return res.status(400).json({error:'Please provide a valid start date and time.'});
   const requestedPublish=body.published===true;
   const approvedToPublish=canApproveContent(role);
   const record={content_type:type,title,slug:String(body.slug||title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')).slice(0,180),summary:String(body.summary||'').slice(0,600),body:String(body.body||'').slice(0,10000),data:body.data&&typeof body.data==='object'&&!Array.isArray(body.data)?body.data:{},published:approvedToPublish&&requestedPublish,starts_at:startDate?startDate.toISOString():null,updated_at:new Date().toISOString()};
   if(body.id) {
    const existing=await db(cfg,'site_content?id=eq.'+encodeURIComponent(String(body.id))+'&select=id,content_type');
    if(!existing.length)return res.status(404).json({error:'Content item not found.'});
    if(!canManage(role,existing[0].content_type))return res.status(403).json({error:'Your role cannot edit this content type.'});
   }
   const result=body.id?await db(cfg,'site_content?id=eq.'+encodeURIComponent(String(body.id)), 'PATCH',record):await db(cfg,'site_content','POST',{...record,created_by:user.id});
   const savedId=result[0]?.id||body.id||null;
   await audit(cfg,user.id,body.id?'content.updated':'content.created',type,savedId,{role});
   return res.status(200).json({saved:true,awaiting_approval:requestedPublish&&!approvedToPublish,item:result[0]||null});
  }
  if(body.action==='delete_content') {
   const id=String(body.id||'');if(!id)return res.status(400).json({error:'Content ID is required.'});
   const existing=await db(cfg,'site_content?id=eq.'+encodeURIComponent(id)+'&select=id,content_type');
   if(!existing.length)return res.status(404).json({error:'Content item not found.'});
   if(!canManage(role,existing[0].content_type))return res.status(403).json({error:'Your role cannot delete this content type.'});
   await db(cfg,'site_content?id=eq.'+encodeURIComponent(id),'DELETE');
   await audit(cfg,user.id,'content.deleted',existing[0].content_type,id,{role});
   return res.status(200).json({deleted:true});
  }
  if(body.action==='list_submissions') {
   const type=String(body.type||'');const filter=type?'&submission_type=eq.'+encodeURIComponent(type):'';
   const items=await db(cfg,'form_submissions?select=*&order=created_at.desc&limit=100'+filter);
   return res.status(200).json({items});
  }
  if(body.action==='update_submission_status') {
   const id=String(body.id||''),status=String(body.status||'');
   if(!id||!['new','in_review','responded','closed'].includes(status))return res.status(400).json({error:'Invalid submission update.'});
   await db(cfg,'form_submissions?id=eq.'+encodeURIComponent(id),'PATCH',{status,updated_at:new Date().toISOString()});
   await audit(cfg,user.id,'submission.status_updated','form_submission',id,{status,role});
   return res.status(200).json({updated:true});
  }
  return res.status(400).json({error:'Unknown administrator action.'});
 } catch(err) {console.error('Admin API error:',err.message);return res.status(502).json({error:'The administrator service could not complete this request.'});}
};