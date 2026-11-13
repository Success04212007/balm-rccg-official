module.exports = async function handler(req,res) {
  res.setHeader('Cache-Control','public, s-maxage=60, stale-while-revalidate=300');
  if(req.method!=='GET') return res.status(405).json({error:'Method not allowed.'});
  const {SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY}=process.env;
  if(!SUPABASE_URL||!SUPABASE_SERVICE_ROLE_KEY) return res.status(200).json({configured:false,items:[]});
  const permitted=new Set(['events','sermons','announcements','ministries','testimonies','house_fellowships','leadership','service_schedules']);
  const type=String(req.query?.type||'').slice(0,40);
  if(!permitted.has(type)) return res.status(400).json({error:'Invalid content type.'});
  try {
    const url=SUPABASE_URL.replace(/\/$/,'')+'/rest/v1/site_content?content_type=eq.'+encodeURIComponent(type)+'&published=eq.true&select=id,title,slug,summary,body,data,starts_at,created_at&order=starts_at.asc.nullslast,created_at.desc&limit=30';
    const r=await fetch(url,{headers:{apikey:SUPABASE_SERVICE_ROLE_KEY,Authorization:'Bearer '+SUPABASE_SERVICE_ROLE_KEY}});
    if(!r.ok) throw new Error('Content query failed: '+r.status);
    return res.status(200).json({configured:true,items:await r.json()});
  } catch(err) {
    console.error(err.message);return res.status(502).json({error:'Content is temporarily unavailable.'});
  }
};