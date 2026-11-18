const allowedTypes=new Set(['events','sermons','announcements','ministries','testimonies','house_fellowships','leadership','service_schedules','gallery']);
const supa=()=>({url:(process.env.SUPABASE_URL||'').replace(/\/$/,''),anon:process.env.SUPABASE_ANON_KEY,service:process.env.SUPABASE_SERVICE_ROLE_KEY});
async function authUser(token,cfg) {
 const r=await fetch(cfg.url+'/auth/v1/user',{headers:{apikey:cfg.anon,Authorization:'Bearer '+token}});
 if(!r.ok) return null;return await r.json();
}
async function db(cfg,path,method='GET',body) {
 const r=await fetch(cfg.url+'/rest/v1/'+path,{method,headers:{apikey:cfg.service,Authorization:'Bearer '+cfg.service,'Content-Type':'application/json',Prefer:method==='GET'?'count=exact':'return=representation'},...(body?{body:JSON.stringify(body)}:{})});
 const text=await r.text();if(!r.ok)throw new Error('Database operation failed: '+text.slice(0,250));return text?JSON.parse(text):[];
}
module.exports=async function handler(req,res) {
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
   const canViewPrivateSubmissions=['super_admin','pastoral'].includes(role);
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
    permissions:{content:['super_admin','editor'].includes(role),private_submissions:canViewPrivateSubmissions},
    counts:{content:content.length,new_submissions:canViewPrivateSubmissions?submissions.filter(x=>x.status==='new').length:null,events:events.length,sermons:sermons.length},
    recent_submissions:submissions
   });
  }
  const contentActions=['list_content','save_content','delete_content'];
  const privateActions=['list_submissions','update_submission_status'];
  if(contentActions.includes(body.action) && !['super_admin','editor'].includes(role))
    return res.status(403).json({error:'Your role does not permit website content management.'});
  if(privateActions.includes(body.action) && !['super_admin','pastoral'].includes(role))
    return res.status(403).json({error:'Your role does not permit access to private pastoral submissions.'});
  if(body.action==='list_content') {
   const type=String(body.type||'');if(!allowedTypes.has(type))return res.status(400).json({error:'Invalid content type.'});
   const items=await db(cfg,'site_content?content_type=eq.'+encodeURIComponent(type)+'&select=*&order=updated_at.desc&limit=100');
   return res.status(200).json({items});
  }
  if(body.action==='save_content') {
   const type=String(body.content_type||'');if(!allowedTypes.has(type))return res.status(400).json({error:'Invalid content type.'});
   const title=String(body.title||'').trim().slice(0,180);if(!title)return res.status(400).json({error:'A title is required.'});
   const record={content_type:type,title,slug:String(body.slug||title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')).slice(0,180),summary:String(body.summary||'').slice(0,600),body:String(body.body||'').slice(0,10000),data:body.data&&typeof body.data==='object'?body.data:{},published:body.published===true,updated_at:new Date().toISOString()};
   const result=body.id?await db(cfg,'site_content?id=eq.'+encodeURIComponent(String(body.id)), 'PATCH',record):await db(cfg,'site_content','POST',{...record,created_by:user.id});
   return res.status(200).json({saved:true,item:result[0]||null});
  }
  if(body.action==='delete_content') {
   const id=String(body.id||'');if(!id)return res.status(400).json({error:'Content ID is required.'});
   await db(cfg,'site_content?id=eq.'+encodeURIComponent(id),'DELETE');return res.status(200).json({deleted:true});
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
   return res.status(200).json({updated:true});
  }
  return res.status(400).json({error:'Unknown administrator action.'});
 } catch(err) {console.error('Admin API error:',err.message);return res.status(502).json({error:'The administrator service could not complete this request.'});}
};