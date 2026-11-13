module.exports = function handler(req,res) {
  res.setHeader('Cache-Control','no-store');
  const configured=Boolean(process.env.SUPABASE_URL&&process.env.SUPABASE_ANON_KEY&&process.env.SUPABASE_SERVICE_ROLE_KEY);
  return res.status(200).json({configured,authConfigured:Boolean(process.env.SUPABASE_URL&&process.env.SUPABASE_ANON_KEY)});
};