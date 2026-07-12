'use client';
import { useState } from 'react';

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const APP_URL       = process.env.NEXT_PUBLIC_APP_URL || 'https://my.industrybosspro.com/dashboard.html';

type Step = 'info' | 'pass' | 'done';
interface FormData { first: string; last: string; company: string; email: string; password: string; confirm: string; agree: boolean; }

export default function HomeTrialModal({ onClose }: { onClose: () => void }) {
  const [step, setStep]   = useState<Step>('info');
  const [form, setForm]   = useState<FormData>({ first:'', last:'', company:'', email:'', password:'', confirm:'', agree:false });
  const [err, setErr]     = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(4);

  const f = (k: keyof FormData) => (ev: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [k]: ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value }));

  const nextStep = () => {
    if (!form.first || !form.last) return setErr('Please enter your first and last name.');
    if (!form.company) return setErr('Please enter your company name.');
    if (!form.email.includes('@')) return setErr('Please enter a valid email address.');
    setErr(''); setStep('pass');
  };

  const createAccount = async () => {
    if (form.password.length < 8) return setErr('Password must be at least 8 characters.');
    if (form.password !== form.confirm) return setErr('Passwords do not match.');
    if (!form.agree) return setErr('Please agree to the Terms of Service and Privacy Policy.');
    setLoading(true); setErr('');
    try {
      const res = await fetch(SUPABASE_URL + '/functions/v1/manage-users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + SUPABASE_ANON, 'apikey': SUPABASE_ANON },
        body: JSON.stringify({ action: 'create', email: form.email, password: form.password }),
      });
      const result = await res.json();
      if (result.error) throw new Error(result.error);
      const { createClient } = await import('@supabase/supabase-js');
      const sb = createClient(SUPABASE_URL, SUPABASE_ANON);
      const { data: signInData, error: signInErr } = await sb.auth.signInWithPassword({ email: form.email, password: form.password });
      if (signInErr) throw new Error(signInErr.message);
      const uid = signInData.user.id;
      const trialEnd = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();
      await sb.auth.updateUser({ data: { full_name: form.first + ' ' + form.last, product: 'fieldbosspro' } });
      await sb.from('user_profiles').upsert({ id: uid, email: form.email, role: 'full_access', is_primary_owner: true, tenant_id: null, trial_ends_at: trialEnd, product: 'fieldbosspro' }, { onConflict: 'id' });
      await sb.from('company_info').insert({ user_id: uid, company_name: form.company, display_name: form.company });
      await sb.from('platform_accounts').insert({ user_id: uid, email: form.email, plan: 'Monthly Subscription', monthly_amount: 199, trial_ends_at: trialEnd, active: false });
      const _ho = signInData.session ? ('#access_token=' + encodeURIComponent(signInData.session.access_token) + '&refresh_token=' + encodeURIComponent(signInData.session.refresh_token)) : '';
      setStep('done');
      let secs = 4;
      const iv = setInterval(() => {
        secs--; setCountdown(secs);
        if (secs <= 0) { clearInterval(iv); window.location.href = APP_URL + _ho; }
      }, 1000);
    } catch(e: any) {
      setErr(e.message || 'Something went wrong. Please try again.');
    } finally { setLoading(false); }
  };

  return (
    <>
      <div onClick={onClose} style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,.6)', zIndex:99990 }} />
      <div style={{ position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:99999, width:440, maxWidth:'calc(100vw - 24px)', background:'#111111', borderRadius:14, border:'3px solid #ff6a00', boxShadow:'0 0 0 4px rgba(255,106,0,.2), 0 16px 60px rgba(0,0,0,.6)', maxHeight:'calc(100vh - 40px)', overflowY:'auto' }}>
        <div style={{ background:'linear-gradient(135deg,#0a0a0a,#111111)', padding:'28px 28px 22px', position:'relative', borderBottom:'1px solid rgba(255,106,0,.15)' }}>
          <div style={{ color:'#fff', fontSize:20, fontWeight:800, paddingRight:36 }}>Start Your 14-Day Free Trial</div>
          <div style={{ color:'rgba(245,245,245,.72)', fontSize:13, marginTop:5 }}>No credit card required. Full access. Cancel anytime.</div>
          <button onClick={onClose} style={{ position:'absolute', top:16, right:16, background:'rgba(255,255,255,.1)', border:'none', color:'#fff', width:32, height:32, borderRadius:'50%', cursor:'pointer', fontSize:20, display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
        </div>

        {step === 'info' && (
          <div style={{ padding:'24px 28px' }}>
            {err && <div style={{ background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.3)', color:'#fca5a5', borderRadius:6, padding:'10px 12px', fontSize:13, marginBottom:14 }}>{err}</div>}
            <div style={{ display:'flex', gap:12, marginBottom:14 }}>
              {(['first','last'] as const).map((k,i) => (
                <div key={k} style={{ flex:1 }}>
                  <label style={{ fontSize:11, fontWeight:700, color:'rgba(245,245,245,.70)', textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>{i===0?'First Name':'Last Name'}</label>
                  <input type="text" value={form[k]} onChange={f(k)} placeholder={i===0?'John':'Smith'} style={{ width:'100%', background:'#1a1a1a', border:'1px solid rgba(255,106,0,.2)', borderRadius:6, padding:'10px 12px', fontSize:14, color:'#f5f5f5', fontFamily:'inherit' }} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom:14 }}>
              <label style={{ fontSize:11, fontWeight:700, color:'rgba(245,245,245,.70)', textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>Company Name</label>
              <input type="text" value={form.company} onChange={f('company')} placeholder="Smith Landscaping Co." style={{ width:'100%', background:'#1a1a1a', border:'1px solid rgba(255,106,0,.2)', borderRadius:6, padding:'10px 12px', fontSize:14, color:'#f5f5f5', fontFamily:'inherit' }} />
            </div>
            <div style={{ marginBottom:22 }}>
              <label style={{ fontSize:11, fontWeight:700, color:'rgba(245,245,245,.70)', textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>Email Address</label>
              <input type="email" value={form.email} onChange={f('email')} placeholder="you@yourcompany.com" style={{ width:'100%', background:'#1a1a1a', border:'1px solid rgba(255,106,0,.2)', borderRadius:6, padding:'10px 12px', fontSize:14, color:'#f5f5f5', fontFamily:'inherit' }} />
            </div>
            <button onClick={nextStep} className="btn-primary" style={{ width:'100%', fontSize:15, padding:13 }}>Next: Create Password →</button>
          </div>
        )}

        {step === 'pass' && (
          <div style={{ padding:'24px 28px' }}>
            {err && <div style={{ background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.3)', color:'#fca5a5', borderRadius:6, padding:'10px 12px', fontSize:13, marginBottom:14 }}>{err}</div>}
            <div style={{ background:'rgba(74,222,128,.08)', border:'1px solid rgba(74,222,128,.25)', borderRadius:6, padding:'10px 14px', marginBottom:16 }}>
              <div style={{ fontSize:12, color:'#4ade80', fontWeight:700 }}>14-Day Free Trial — No Credit Card Required</div>
              <div style={{ fontSize:12, color:'rgba(245,245,245,.70)', marginTop:2 }}>Full access to every feature. $199/month after trial.</div>
            </div>
            <div style={{ marginBottom:14 }}>
              <label style={{ fontSize:11, fontWeight:700, color:'rgba(245,245,245,.70)', textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>Login Email</label>
              <input type="email" value={form.email} readOnly style={{ width:'100%', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,106,0,.15)', borderRadius:6, padding:'10px 12px', fontSize:14, color:'rgba(245,245,245,.70)', fontFamily:'inherit' }} />
            </div>
            {(['password','confirm'] as const).map((k,i) => (
              <div key={k} style={{ marginBottom:14 }}>
                <label style={{ fontSize:11, fontWeight:700, color:'rgba(245,245,245,.70)', textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>{i===0?'Password':'Confirm Password'}</label>
                <input type="password" value={form[k]} onChange={f(k)} placeholder={i===0?'At least 8 characters':'Repeat password'} style={{ width:'100%', background:'#1a1a1a', border:'1px solid rgba(255,106,0,.2)', borderRadius:6, padding:'10px 12px', fontSize:14, color:'#f5f5f5', fontFamily:'inherit' }} />
              </div>
            ))}
            <div style={{ marginBottom:20, display:'flex', alignItems:'flex-start', gap:10 }}>
              <input type="checkbox" id="ibp-agree" checked={form.agree} onChange={f('agree')} style={{ width:16, height:16, accentColor:'#ff6a00', cursor:'pointer', flexShrink:0, marginTop:3 }} />
              <label htmlFor="ibp-agree" style={{ fontSize:13, color:'rgba(245,245,245,.70)', cursor:'pointer', lineHeight:1.5 }}>
                I agree to the <a href="/terms" style={{ color:'#ff6a00' }}>Terms of Service</a> and <a href="/privacy" style={{ color:'#ff6a00' }}>Privacy Policy</a>
              </label>
            </div>
            <button onClick={createAccount} disabled={loading} className="btn-primary" style={{ width:'100%', fontSize:15, padding:13, opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Creating your account…' : 'Create My Account'}
            </button>
            <button onClick={() => { setStep('info'); setErr(''); }} style={{ width:'100%', background:'none', border:'none', color:'rgba(245,245,245,.70)', fontSize:13, cursor:'pointer', marginTop:10, padding:6, fontFamily:'inherit', textDecoration:'underline' }}>← Back</button>
          </div>
        )}

        {step === 'done' && (
          <div style={{ padding:'52px 28px', textAlign:'center' }}>
            <div style={{ width:70, height:70, background:'#16a34a', borderRadius:'50%', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:32, color:'#fff', marginBottom:18 }}>✓</div>
            <div style={{ fontSize:24, fontWeight:800, color:'#fff', marginBottom:12 }}>You&apos;re In!</div>
            <div style={{ fontSize:15, color:'rgba(245,245,245,.72)', lineHeight:1.7 }}>Your 14-day free trial has started.<br />Taking you to your dashboard…</div>
            <div style={{ fontSize:12, color:'rgba(245,245,245,.70)', marginTop:10 }}>Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}…</div>
          </div>
        )}
      </div>
    </>
  );
}
