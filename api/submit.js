const allowed = new Set(['prayer_request','counselling','visitor','event_registration','testimony','contact','newsletter']);
const responseMethods = new Set(['email','phone','whatsapp','no-response']);
const clean = (value, max=4000) => typeof value === 'string' ? value.trim().slice(0,max) : '';
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(req,res) {
  res.setHeader('Cache-Control','no-store');
  if(req.method !== 'POST') {res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed.'});}
  const {SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY}=process.env;
  if(!SUPABASE_URL||!SUPABASE_SERVICE_ROLE_KEY)return res.status(503).json({error:'Online submissions are not configured yet.'});
  let body;
  try {body=typeof req.body==='string'?JSON.parse(req.body):(req.body||{});}
  catch {return res.status(400).json({error:'The submitted information is not valid. Please review the form and try again.'});}
  if(!body||typeof body!=='object'||Array.isArray(body))return res.status(400).json({error:'Please submit a valid form.'});
  if(clean(body.website,200))return res.status(200).json({ok:true});
  if(body.consent!=='on'&&body.consent!==true)return res.status(400).json({error:'Please confirm the privacy notice before submitting.'});
  const type=clean(body.type,40);
  if(!allowed.has(type))return res.status(400).json({error:'Invalid submission type.'});
  const name=clean(body.full_name,120),email=clean(body.email,180),phone=clean(body.phone,40),message=clean(body.message,4000),responseMethod=clean(body.response_method,30);
  if(['visitor','event_registration','contact'].includes(type)&&!name)return res.status(400).json({error:'Please provide your name.'});
  if(['prayer_request','counselling','testimony','contact'].includes(type)&&message.length<3)return res.status(400).json({error:'Please add a little more detail to your message.'});
  if(email&&!validEmail(email))return res.status(400).json({error:'Please provide a valid email address.'});
  if(responseMethod&&!responseMethods.has(responseMethod))return res.status(400).json({error:'Please choose a valid response method.'});
  if(responseMethod==='email'&&!email)return res.status(400).json({error:'Please provide your email address or choose another response method.'});
  if(['phone','whatsapp'].includes(responseMethod)&&!phone)return res.status(400).json({error:'Please provide your phone number or choose another response method.'});
  if(type==='event_registration'){
    if(!phone)return res.status(400).json({error:'Please provide a phone number for event registration.'});
    const count=Number(body.attendee_count);
    if(!Number.isInteger(count)||count<1||count>20)return res.status(400).json({error:'Please choose a valid number of attendees (1–20).'});
  }
  const excluded=new Set(['type','website','full_name','email','phone','message','consent','password']);
  const payload=Object.fromEntries(Object.entries(body).filter(([key])=>!excluded.has(key)).map(([key,value])=>[key,clean(typeof value==='string'?value:String(value),300)]));
  const record={submission_type:type,full_name:name||null,email:email||null,phone:phone||null,message:message||null,response_method:responseMethod||null,payload,status:'new'};
  let response;
  try{
    response=await fetch(SUPABASE_URL.replace(/\/$/,'')+'/rest/v1/form_submissions',{method:'POST',headers:{apikey:SUPABASE_SERVICE_ROLE_KEY,Authorization:'Bearer '+SUPABASE_SERVICE_ROLE_KEY,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(record)});
  }catch(err){
    console.error('Submission storage request failed:',err.message);
    return res.status(502).json({error:'The church submission service could not be reached. Please try again later or contact the church office.'});
  }
  if(!response.ok){
    // Do not log form contents or provider response bodies, which may contain personal data.
    console.error('Submission storage failed with status:',response.status);
    return res.status(502).json({error:'The submission could not be stored. Please try again later or contact the church office.'});
  }
  return res.status(201).json({ok:true});
};
