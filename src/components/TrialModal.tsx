'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://my.industrybosspro.com/dashboard.html';

const S = {
  navy1: '#0a0a0a', navy4: '#1a1a1a', navy5: '#1a1a1a',
  elec: '#ff6a00', border: 'rgba(255,106,0,0.2)', text: '#f5f5f5',
  muted: 'rgba(245,245,245,0.55)',
};

type Step = 'info' | 'pass' | 'done';
interface FormData { first: string; last: string; company: string; email: string; password: string; confirm: string; agree: boolean }

export default function TrialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<Step>('info');
  const [form, setForm] = useState<FormData>({ first: '', last: '', company: '', email: '', password: '', confirm: '', agree: false });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const hoRef = useRef('');

  useEffect(() => {
    if (!open) { setStep('info'); setErr(''); setForm({ first: '', last: '', company: '', email: '', password: '', confirm: '', agree: false }); }
  }, [open]);

  useEffect(() => {
    if (step !== 'done') return;
    const t = setInterval(() => setCountdown(c => { if (c <= 1) { clearInterval(t); window.location.href = APP_URL + hoRef.current; return 0; } return c - 1; }), 1000);
    return () => clearInterval(t);
  }, [step]);

  const f = (k: keyof FormData) => (ev: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [k]: ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value }));

  async function submitInfo(e: React.FormEvent) {
    e.preventDefault(); setErr('');
    if (!form.first || !form.last || !form.company || !form.email) { setErr('All fields are required.'); return; }
    if (!form.email.includes('@')) { setErr('Enter a valid email.'); return; }
    setStep('pass');
  }

  async function submitPass(e: React.FormEvent) {
    e.preventDefault(); setErr('');
    if (form.password.length < 8) { setErr('Password must be at least 8 characters.'); return; }
    if (form.password !== form.confirm) { setErr('Passwords do not match.'); return; }
    if (!form.agree) { setErr('Please accept the terms.'); return; }
    if (!SUPABASE_URL || !SUPABASE_ANON) { setErr('Account creation not configured. Contact support.'); return; }
    setLoading(true);
    try {
      const res = await fetch(SUPABASE_URL + '/functions/v1/manage-users', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + SUPABASE_ANON, 'apikey': SUPABASE_ANON }, body: JSON.stringify({ action: 'create', email: form.email, password: form.password }) });
      const result = await res.json();
      if (result.error) { setErr(result.error); setLoading(false); return; }
      const { createClient } = await import('@supabase/supabase-js');
      const sb = createClient(SUPABASE_URL, SUPABASE_ANON);
      const { data: signInData, error: signInErr } = await sb.auth.signInWithPassword({ email: form.email, password: form.password });
      if (signInErr) { setErr(signInErr.message); setLoading(false); return; }
      const uid = signInData.user.id;
      const trialEnd = new Date(Date.now() + 14 * 86400000).toISOString();
      await sb.auth.updateUser({ data: { full_name: form.first + ' ' + form.last, product: 'fieldbosspro' } });
      await sb.from('user_profiles').upsert({ id: uid, email: form.email, role: 'full_access', is_primary_owner: true, tenant_id: null, trial_ends_at: trialEnd, product: 'fieldbosspro' }, { onConflict: 'id' });
      await sb.from('company_info').insert({ user_id: uid, company_name: form.company, display_name: form.company });
      await sb.from('platform_accounts').insert({ user_id: uid, email: form.email, plan: 'Monthly Subscription', monthly_amount: 199, trial_ends_at: trialEnd, active: false });
      hoRef.current = signInData.session ? ('#access_token=' + encodeURIComponent(signInData.session.access_token) + '&refresh_token=' + encodeURIComponent(signInData.session.refresh_token)) : '';
      setStep('done'); setCountdown(4);
    } catch { setErr('Something went wrong. Please try again.'); }
    setLoading(false);
  }

  if (!open) return null;

  const inp: React.CSSProperties = {
    width: '100%', background: 'rgba(255,106,0,0.06)', border: `1px solid ${S.border}`,
    borderRadius: 8, padding: '12px 14px', color: S.text, fontSize: 15, outline: 'none', boxSizing: 'border-box',
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)' }} />
      <div style={{ position: 'relative', background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 16, padding: '36px 32px', width: '100%', maxWidth: 440 }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 16, background: 'none', border: 'none', color: S.muted, fontSize: 22, cursor: 'pointer', lineHeight: 1 }}>×</button>

        {step === 'info' && (
          <form onSubmit={submitInfo}>
            <div style={{ fontSize: 22, fontWeight: 800, color: S.text, marginBottom: 4 }}>Start Your 14-Day Free Trial</div>
            <div style={{ color: S.muted, fontSize: 14, marginBottom: 24 }}>No credit card required. Cancel anytime.</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <input style={inp} placeholder="First name" value={form.first} onChange={f('first')} />
              <input style={inp} placeholder="Last name" value={form.last} onChange={f('last')} />
            </div>
            <input style={{ ...inp, marginBottom: 12 }} placeholder="Company name" value={form.company} onChange={f('company')} />
            <input style={{ ...inp, marginBottom: 20 }} placeholder="Work email" type="email" value={form.email} onChange={f('email')} />
            {err && <div style={{ color: '#ff6b6b', fontSize: 13, marginBottom: 12 }}>{err}</div>}
            <button type="submit" style={{ width: '100%', background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '14px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
              Continue →
            </button>
          </form>
        )}

        {step === 'pass' && (
          <form onSubmit={submitPass}>
            <div style={{ fontSize: 22, fontWeight: 800, color: S.text, marginBottom: 4 }}>Create Your Password</div>
            <div style={{ color: S.muted, fontSize: 14, marginBottom: 24 }}>Setting up account for <strong style={{ color: S.elec }}>{form.email}</strong></div>
            <input style={{ ...inp, marginBottom: 12 }} placeholder="Password (min 8 chars)" type="password" value={form.password} onChange={f('password')} />
            <input style={{ ...inp, marginBottom: 16 }} placeholder="Confirm password" type="password" value={form.confirm} onChange={f('confirm')} />
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: S.muted, fontSize: 13, marginBottom: 20, cursor: 'pointer' }}>
              <input type="checkbox" checked={form.agree} onChange={f('agree')} style={{ marginTop: 2, accentColor: S.elec }} />
              I agree to the <Link href="/terms" style={{ color: S.elec }}>Terms</Link> and <Link href="/privacy" style={{ color: S.elec }}>Privacy Policy</Link>
            </label>
            {err && <div style={{ color: '#ff6b6b', fontSize: 13, marginBottom: 12 }}>{err}</div>}
            <button type="submit" disabled={loading} style={{ width: '100%', background: loading ? 'rgba(255,106,0,0.4)' : S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '14px', fontSize: 16, fontWeight: 800, cursor: loading ? 'default' : 'pointer' }}>
              {loading ? 'Creating Account...' : 'Start Free Trial'}
            </button>
          </form>
        )}

        {step === 'done' && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: S.text, marginBottom: 8 }}>You're in, {form.first}!</div>
            <div style={{ color: S.muted, fontSize: 15, marginBottom: 24 }}>Your 14-day free trial is active. Redirecting to your dashboard in <strong style={{ color: S.elec }}>{countdown}s</strong>…</div>
            <button onClick={() => { window.location.href = APP_URL + hoRef.current; }} style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
              Go to Dashboard Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
