const allowed = new Set(['prayer_request','counselling','visitor','event_registration','testimony','contact','newsletter']);
const clean = (v, max=4000) => typeof v === 'string' ? v.trim().slice(0,max) : '';
module.exports = async function handler(req,res) {
  res.setHeader('Cache-Control','no-store');
  if(req.method !== 'POST') { res.setHeader('Allow','POST'); return res.status(405).json({error:'Method not allowed.'}); }
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if(!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return res.status(503).json({error:'Online submissions are not configured yet.'});
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    if(clean(body.website,200)) return res.status(200).json({ok:true});
    const type=clean(body.type,40);
    if(!allowed.has(type)) return res.status(400).json({error:'Invalid submission type.'});
    const name=clean(body.full_name,120);
    const email=clean(body.email,180);
    const phone=clean(body.phone,40);
    const message=clean(body.message,4000);
    if(['prayer_request','counselling','visitor','event_registration','testimony','contact'].includes(type) && !name)
      return res.status(400).json({error:'Please provide your name.'});
    if(['prayer_request','counselling','testimony','contact'].includes(type) && message.length < 3)
      return res.status(400).json({error:'Please add a little more detail to your message.'});
    const record = {
      submission_type:type, full_name:name || null, email:email || null, phone:phone || null,
      message:message || null, response_method:clean(body.response_method,30) || null,
      payload:Object.fromEntries(Object.entries(body).filter(([k])=>!['type','website','full_name','email','phone','message','consent','password'].includes(k)).map(([k,v])=>[k,clean(String(v),300)])),
      status:'new'
    };
    const response=await fetch(SUPABASE_URL.replace(/\/$/, '')+'/rest/v1/form_submissions',{
      method:'POST',headers:{apikey:SUPABASE_SERVICE_ROLE_KEY,Authorization:'Bearer '+SUPABASE_SERVICE_ROLE_KEY,'Content-Type':'application/json',Prefer:'return=minimal'},
      body:JSON.stringify(record)
    });
    if(!response.ok) {
      const detail=await response.text();
      console.error('Submission storage failed:',response.status,detail.slice(0,300));
      return res.status(502).json({error:'The submission could not be stored. Please try again later or contact the church office.'});
    }
    return res.status(201).json({ok:true});
  } catch(err) {
    console.error('Submission handler error:',err.message);
    return res.status(400).json({error:'Please check the information and try again.'});
  }
};