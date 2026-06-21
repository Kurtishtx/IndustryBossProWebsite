'use client';
import { useState } from 'react';

const SUPABASE_URL  = 'https://YOUR_PROJECT.supabase.co'; // TODO: replace with IndustryBossPro Supabase URL
const SUPABASE_ANON = 'YOUR_ANON_KEY';                    // TODO: replace with IndustryBossPro anon key
const APP_URL       = 'https://my.industrybosspro.com/dashboard.html';

const e = (c: string) => `rgba(0,184,255,${c})`;

const S = {
  navy1: '#030b15', navy2: '#050e1e', navy3: '#071224', navy4: '#0a1628', navy5: '#0d1f3c',
  elec: '#00b8ff', elecDark: '#0094d0', muted: 'rgba(232,244,255,0.55)', border: e('.18'),
  text: '#e8f4ff',
};

type Step = 'info' | 'pass' | 'done';
interface FormData { first: string; last: string; company: string; email: string; password: string; confirm: string; agree: boolean; }

export default function Home() {
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState<Step>('info');
  const [form, setForm] = useState<FormData>({ first:'', last:'', company:'', email:'', password:'', confirm:'', agree:false });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(4);

  const openModal = () => { setModal(true); setStep('info'); setErr(''); setForm({ first:'', last:'', company:'', email:'', password:'', confirm:'', agree:false }); };
  const closeModal = () => setModal(false);
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
      const sb = (window as any).supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
      const { data: signInData, error: signInErr } = await sb.auth.signInWithPassword({ email: form.email, password: form.password });
      if (signInErr) throw new Error(signInErr.message);
      const uid = signInData.user.id;
      const trialEnd = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();
      await sb.auth.updateUser({ data: { full_name: form.first + ' ' + form.last } });
      await sb.from('user_profiles').upsert({ id: uid, email: form.email, role: 'full_access', is_primary_owner: true, tenant_id: null, trial_ends_at: trialEnd }, { onConflict: 'id' });
      await sb.from('company_info').insert({ user_id: uid, company_name: form.company, display_name: form.company });
      setStep('done');
      let secs = 4;
      const iv = setInterval(() => {
        secs--;
        setCountdown(secs);
        if (secs <= 0) { clearInterval(iv); window.location.href = APP_URL; }
      }, 1000);
    } catch(e: any) {
      setErr(e.message || 'Something went wrong. Please try again.');
    } finally { setLoading(false); }
  };

  return (
    <>
      {/* ── HEADER ── */}
      <header style={{ position:'sticky', top:0, zIndex:1000, background:'rgba(3,11,21,0.96)', backdropFilter:'blur(12px)', borderBottom:`1px solid ${e('.12')}` }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px', height:68, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:8, background:`linear-gradient(135deg, ${S.elec}, #0055a5)`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 16px ${e('.4')}` }}>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13h18M2 13L0 4l5 4 5-7 5 7 5-4-2 9H2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" fill="white" fillOpacity="0.15"/>
                <path d="M2 13L0.5 4.5L5.5 8.5L10 1.5L14.5 8.5L19.5 4.5L18 13H2Z" fill="white"/>
                <rect x="2" y="13.5" width="16" height="2" rx="1" fill="white"/>
              </svg>
            </div>
            <span style={{ fontSize:18, fontWeight:800, letterSpacing:'-0.5px' }}>
              <span style={{ color:'#fff' }}>Industry</span><span style={{ color:'#fff' }}>Boss</span><span style={{ color:S.elec }}>Pro</span>
            </span>
          </a>
          <nav style={{ display:'flex', alignItems:'center', gap:32 }}>
            {[['#features','Features'],['#industries','Industries'],['#pricing','Pricing']].map(([href,label]) => (
              <a key={href} href={href} style={{ color:S.muted, fontSize:14, fontWeight:600, textDecoration:'none', transition:'color .2s' }}
                onMouseEnter={e2 => (e2.target as HTMLElement).style.color = '#fff'}
                onMouseLeave={e2 => (e2.target as HTMLElement).style.color = S.muted}>
                {label}
              </a>
            ))}
            <a href={APP_URL} style={{ color:S.muted, fontSize:14, fontWeight:600, textDecoration:'none' }}>Login</a>
            <button onClick={openModal} style={{ background:S.elec, color:'#fff', border:'none', borderRadius:7, padding:'10px 22px', fontSize:14, fontWeight:700, cursor:'pointer', boxShadow:`0 0 20px ${e('.35')}` }}>
              Start Free Trial
            </button>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <div style={{ background:`linear-gradient(160deg, #030b15 0%, #040d1a 45%, #060f1f 100%)`, padding:'120px 40px 100px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-200px', left:'50%', transform:'translateX(-50%)', width:900, height:900, borderRadius:'50%', background:`radial-gradient(circle, ${e('.10')} 0%, transparent 65%)`, pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'inline-block', background:e('.1'), border:`1px solid ${e('.35')}`, color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', padding:'7px 22px', borderRadius:24, marginBottom:32 }}>
            Built for Every Field Service Industry · Since Day One
          </div>
          <h1 style={{ color:'#fff', fontSize:'clamp(36px,5.5vw,68px)', fontWeight:900, lineHeight:1.05, maxWidth:980, margin:'0 auto 28px', letterSpacing:'-1.5px' }}>
            One Platform.<br /><span style={{ color:S.elec }}>Every Industry.</span><br />Zero Compromises.
          </h1>
          <p style={{ color:S.muted, fontSize:'clamp(16px,2vw,20px)', maxWidth:680, margin:'0 auto 52px', lineHeight:1.75 }}>
            Snow removal, landscaping, irrigation, lawn care, pest control — IndustryBossPro runs them all from a single dashboard. The most powerful pending job board in field service, built for businesses that do it all.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap', marginBottom:72 }}>
            <button onClick={openModal} style={{ background:S.elec, color:'#fff', padding:'18px 44px', borderRadius:8, fontSize:17, fontWeight:700, border:'none', cursor:'pointer', boxShadow:`0 0 30px ${e('.4')}, 0 4px 20px rgba(0,0,0,.3)`, transition:'transform .15s' }}
              onMouseEnter={e2 => (e2.currentTarget).style.transform='translateY(-2px)'}
              onMouseLeave={e2 => (e2.currentTarget).style.transform='translateY(0)'}>
              Start Free — 14 Days, No Card
            </button>
            <a href="#features" style={{ background:'transparent', color:'rgba(255,255,255,.8)', border:`2px solid ${e('.3')}`, padding:'16px 40px', borderRadius:8, fontSize:17, fontWeight:600, textDecoration:'none', display:'inline-block' }}>
              See All Features →
            </a>
          </div>
          <div style={{ display:'flex', justifyContent:'center', gap:56, flexWrap:'wrap', paddingTop:56, borderTop:`1px solid ${e('.1')}` }}>
            {[['$199','Flat Monthly — Everything Included'],['Unlimited','Users, Clients & Properties'],['6+','Industries. One Platform.'],['14 Days','Free Trial, No Card']].map(([v,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ color:S.elec, fontSize:34, fontWeight:900, letterSpacing:'-1px' }}>{v}</div>
                <div style={{ color:S.muted, fontSize:13, marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INDUSTRY TRUST BAR ── */}
      <div style={{ background:S.navy3, padding:'32px 40px', borderTop:`1px solid ${e('.08')}`, borderBottom:`1px solid ${e('.08')}` }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', gap:48, flexWrap:'wrap' }}>
          <span style={{ color:S.muted, fontSize:12, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase' }}>Covering Every Industry</span>
          {[['❄️','Snow & Ice'],['🌿','Landscaping'],['💧','Irrigation'],['🌱','Lawn Care'],['🐛','Pest Control'],['🌳','Tree & Shrub'],['🏡','Property Maintenance']].map(([icon,name]) => (
            <div key={name} style={{ display:'flex', alignItems:'center', gap:8, color:'rgba(232,244,255,0.7)', fontSize:14, fontWeight:600 }}>
              <span>{icon}</span><span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PENDING JOB BOARD ── */}
      <section style={{ background:S.navy2, padding:'100px 40px' }}>
        <div style={{ maxWidth:1160, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>The Feature That Changes Everything</span>
            <h2 style={{ color:'#fff', fontSize:'clamp(28px,4vw,50px)', fontWeight:900, lineHeight:1.1, marginBottom:18, letterSpacing:'-1px' }}>
              Meet the <span style={{ color:S.elec }}>Pending Job Board.</span><br />Your Business Brain.
            </h2>
            <p style={{ color:S.muted, fontSize:17, maxWidth:680, margin:'0 auto', lineHeight:1.75 }}>
              No other field service software has this. A two-tier job system that separates <strong style={{ color:S.text }}>scheduled work with assigned dates</strong> from your <strong style={{ color:S.text }}>chemical &amp; maintenance waiting list</strong> — so you always know exactly what's ready to go and what's waiting to be scheduled.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
            {/* Scheduled Panel */}
            <div style={{ background:S.navy4, border:`1.5px solid ${e('.2')}`, borderRadius:16, padding:'28px 28px', boxShadow:`0 0 40px ${e('.06')}` }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:22 }}>
                <div style={{ width:10, height:10, borderRadius:'50%', background:S.elec, boxShadow:`0 0 8px ${e('.8')}` }} />
                <span style={{ color:S.elec, fontSize:11, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase' }}>Scheduled — Assigned Date</span>
              </div>
              <p style={{ color:S.muted, fontSize:13, marginBottom:20, lineHeight:1.6 }}>Recurring services with a confirmed date, tech, and crew. These are on the board and ready to run.</p>
              {[
                { date:'Mon Jan 15', icon:'❄️', service:'Snow Removal', client:'Johnson Estate', detail:'Route A · Mike T.', color:'#38bdf8' },
                { date:'Mon Jan 15', icon:'🌿', service:'Lawn Maintenance', client:'Davis Residence', detail:'Crew 2 · 4 stops', color:'#22c55e' },
                { date:'Tue Jan 16', icon:'💧', service:'Irrigation Startup', client:'Park Ave Property', detail:'Tech: Sarah · 2hr', color:S.elec },
                { date:'Tue Jan 16', icon:'🌱', service:'Lawn Treatment', client:'Metro Business Park', detail:'Chemical: Lawn Care 4', color:'#a78bfa' },
              ].map((j, i) => (
                <div key={i} style={{ background:'rgba(255,255,255,.04)', border:`1px solid ${e('.1')}`, borderRadius:10, padding:'12px 14px', marginBottom:10, display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ background:`${j.color}22`, border:`1px solid ${j.color}44`, borderRadius:6, padding:'6px 10px', fontSize:11, fontWeight:700, color:j.color, whiteSpace:'nowrap' }}>{j.date}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ color:'rgba(232,244,255,.9)', fontSize:13, fontWeight:700 }}>{j.icon} {j.service}</div>
                    <div style={{ color:S.muted, fontSize:11, marginTop:2 }}>{j.client} · {j.detail}</div>
                  </div>
                  <div style={{ background:'#16a34a22', border:'1px solid #16a34a44', borderRadius:6, padding:'3px 10px', fontSize:11, fontWeight:700, color:'#4ade80' }}>Scheduled</div>
                </div>
              ))}
            </div>
            {/* Waiting List Panel */}
            <div style={{ background:S.navy4, border:`1.5px solid rgba(168,139,250,0.2)`, borderRadius:16, padding:'28px 28px', boxShadow:'0 0 40px rgba(168,139,250,0.05)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:22 }}>
                <div style={{ width:10, height:10, borderRadius:'50%', background:'#a78bfa', boxShadow:'0 0 8px rgba(167,139,250,0.8)' }} />
                <span style={{ color:'#a78bfa', fontSize:11, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase' }}>Waiting List — No Date Assigned</span>
              </div>
              <p style={{ color:S.muted, fontSize:13, marginBottom:20, lineHeight:1.6 }}>Chemical treatments and maintenance services waiting to be scheduled. Know your sq ft, product needs, and stop count before you make one call.</p>
              {[
                { icon:'🧪', service:'Lawn Insect Program', count:'47 properties', sqft:'384,200 sq ft', badge:'Chemical' },
                { icon:'🌺', service:'Fertilizer Round 3', count:'38 properties', sqft:'296,800 sq ft', badge:'Chemical' },
                { icon:'🌿', service:'Spring Cleanup', count:'23 properties', sqft:'Ready to Book', badge:'Landscape' },
                { icon:'💧', service:'Irrigation Winterization', count:'31 properties', sqft:'Season End', badge:'Irrigation' },
              ].map((j, i) => (
                <div key={i} style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(168,139,250,0.12)', borderRadius:10, padding:'12px 14px', marginBottom:10, display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ fontSize:22 }}>{j.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ color:'rgba(232,244,255,.9)', fontSize:13, fontWeight:700 }}>{j.service}</div>
                    <div style={{ color:S.muted, fontSize:11, marginTop:2 }}>{j.count} · {j.sqft}</div>
                  </div>
                  <div style={{ background:'rgba(168,139,250,.15)', border:'1px solid rgba(168,139,250,.3)', borderRadius:6, padding:'3px 10px', fontSize:11, fontWeight:700, color:'#a78bfa' }}>{j.badge}</div>
                </div>
              ))}
              <div style={{ marginTop:16, background:e('.06'), border:`1px solid ${e('.15')}`, borderRadius:8, padding:'12px 14px', textAlign:'center' }}>
                <div style={{ color:S.elec, fontSize:14, fontWeight:700 }}>Know before you mix. Know before you load.</div>
                <div style={{ color:S.muted, fontSize:12, marginTop:3 }}>No other software gives you this two-tier view.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" style={{ background:S.navy3, padding:'100px 40px' }}>
        <div style={{ textAlign:'center', marginBottom:64, maxWidth:1100, margin:'0 auto 64px' }}>
          <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Built for Your Industry</span>
          <h2 style={{ color:'#fff', fontSize:'clamp(28px,4vw,48px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1px' }}>One Software. Every Season. Every Service.</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:20, maxWidth:1160, margin:'0 auto' }}>
          {[
            { icon:'❄️', name:'Snow & Ice Management', desc:'Route scheduling, per-push vs seasonal contracts, salt tracking, trigger alerts, event logging, and client snow reports. Run your plow operation like a pro.' },
            { icon:'🌿', name:'Landscaping', desc:'Crew scheduling, job site notes, before/after photo documentation, package programs, estimate follow-ups, and automated billing. Scale your landscape operation.' },
            { icon:'💧', name:'Irrigation', desc:'Startup and winterization waiting lists, zone documentation, backflow tracking, service history, and seasonal scheduling. Full irrigation lifecycle managed.' },
            { icon:'🌱', name:'Lawn Care & Treatments', desc:'Sq ft–based waiting lists, chemical application logs, pesticide compliance reports, round tracking, and treatment follow-up programs.' },
            { icon:'🐛', name:'Pest Control', desc:'Service frequency management, chemical logs, technician license tracking, completion alerts, and customer-facing service reports built in.' },
            { icon:'🌳', name:'Tree & Shrub Care', desc:'Property-level service history, chemical application tracking, seasonal program management, and automatic customer communication.' },
          ].map((ind) => (
            <div key={ind.name} style={{ background:S.navy4, border:`1.5px solid ${e('.1')}`, borderRadius:14, padding:'28px 24px', transition:'border-color .2s' }}
              onMouseEnter={el => el.currentTarget.style.borderColor = e('.35')}
              onMouseLeave={el => el.currentTarget.style.borderColor = e('.1')}>
              <div style={{ fontSize:36, marginBottom:14 }}>{ind.icon}</div>
              <h3 style={{ color:'#fff', fontSize:17, fontWeight:700, marginBottom:10 }}>{ind.name}</h3>
              <p style={{ color:S.muted, fontSize:13, lineHeight:1.65 }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PREMIUM BAND ── */}
      <div style={{ background:S.navy1, padding:'100px 40px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-100px', left:'50%', transform:'translateX(-50%)', width:800, height:800, borderRadius:'50%', background:`radial-gradient(circle, ${e('.07')} 0%, transparent 65%)`, pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Enterprise Power</span>
          <h2 style={{ color:'#fff', fontSize:'clamp(28px,4vw,50px)', fontWeight:900, lineHeight:1.1, maxWidth:860, margin:'0 auto 20px', letterSpacing:'-1px' }}>
            Affordable Doesn&apos;t Mean Cheap.<br /><span style={{ color:S.elec }}>This Is Enterprise-Grade Software.</span>
          </h2>
          <p style={{ color:S.muted, fontSize:17, maxWidth:700, margin:'0 auto 64px', lineHeight:1.8 }}>
            We built what the enterprise platforms couldn&apos;t — a single platform that handles every field service trade at once. Route intelligence, chemical compliance, automated billing, role-based access, and a mobile app — built from the ground up, priced for real businesses.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20, maxWidth:1100, margin:'0 auto' }}>
            {[
              { icon:'📋', title:'Pending Job Board', desc:'Two-tier job system: scheduled with assigned dates for recurring, and chemical/maintenance waiting list with sq ft totals.' },
              { icon:'🗺️', title:'Live Route Maps', desc:'Interactive maps with drag-and-drop stop ordering, circle-to-schedule selection, and real-time crew tracking.' },
              { icon:'🧪', title:'Chemical Compliance Engine', desc:'Application logs, technician license tracking, weather conditions, and state-inspector-ready compliance reports.' },
              { icon:'💬', title:'Automated Communication Suite', desc:'10+ SMS alert types, two-way texting inbox, estimate and payment follow-up sequences — all running without you.' },
              { icon:'💳', title:'Stripe Payment Processing', desc:'Card-on-file, post-service billing, partial payments, and automated payment reminders built in.' },
              { icon:'👑', title:'Role-Based Access', desc:'Owner, Manager, Office, Technician, and Mobile roles with granular permissions across every module.' },
            ].map((c) => (
              <div key={c.title} style={{ background:`rgba(255,255,255,.04)`, border:`1px solid ${e('.12')}`, borderRadius:14, padding:'28px 22px', textAlign:'left', transition:'border-color .2s' }}
                onMouseEnter={el => el.currentTarget.style.borderColor = e('.35')}
                onMouseLeave={el => el.currentTarget.style.borderColor = e('.12')}>
                <div style={{ fontSize:28, marginBottom:12 }}>{c.icon}</div>
                <h4 style={{ color:'#fff', fontSize:15, fontWeight:700, marginBottom:8 }}>{c.title}</h4>
                <p style={{ color:S.muted, fontSize:13, lineHeight:1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURE DEEP DIVES ── */}
      <section id="features" style={{ background:S.navy2, padding:'100px 40px' }}>
        {/* Row 1 */}
        <div style={{ display:'flex', alignItems:'center', gap:64, maxWidth:1140, margin:'0 auto 96px', flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Client Management</span>
            <h2 style={{ color:'#fff', fontSize:'clamp(24px,3.5vw,42px)', fontWeight:900, lineHeight:1.15, marginBottom:16, letterSpacing:'-0.5px' }}>Every Client. Every Property. Every Detail.</h2>
            <p style={{ color:S.muted, fontSize:16, lineHeight:1.8, marginBottom:8 }}>Complete client profiles with property specs, service history, custom fields, notes, and documents. Your entire client base organized exactly how a field service business needs it.</p>
            <ul style={{ listStyle:'none', marginTop:20 }}>
              {['Client and contact management with full history','Property profiles with sq ft, service zones, and notes','Custom fields for any industry-specific data','Document storage — contracts, maps, photos, reports','Service history and chemical application records per property'].map(li => (
                <li key={li} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:14, color:S.muted, marginBottom:12 }}>
                  <span style={{ background:S.elec, color:'#fff', borderRadius:'50%', width:20, height:20, display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, flexShrink:0, marginTop:2, boxShadow:`0 0 8px ${e('.5')}` }}>✓</span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex:1, minWidth:300, background:S.navy1, borderRadius:16, padding:'32px 28px', border:`2px solid ${e('.2')}`, boxShadow:`0 0 40px ${e('.08')}` }}>
            <div style={{ color:S.muted, fontSize:11, textTransform:'uppercase', letterSpacing:1, marginBottom:14 }}>Client Profile — Smith Residence</div>
            {[['Property Size','12,400 sq ft'],['Services','Lawn Care 4 · Mosquito · Insect'],['Status','Active — Season 3'],['Balance','$0.00 — Auto-Pay On']].map(([k,v]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid ${e('.08')}` }}>
                <span style={{ color:S.muted, fontSize:13 }}>{k}</span>
                <span style={{ color:S.text, fontSize:13, fontWeight:600 }}>{v}</span>
              </div>
            ))}
            <div style={{ marginTop:16, background:e('.07'), border:`1px solid ${e('.2')}`, borderRadius:8, padding:'12px', textAlign:'center', color:S.elec, fontSize:13, fontWeight:700 }}>
              Last Service: Jan 12 · Lawn Care 4 · ✓ Complete
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div style={{ display:'flex', alignItems:'center', gap:64, maxWidth:1140, margin:'0 auto', flexWrap:'wrap', flexDirection:'row-reverse' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Estimates & Sales</span>
            <h2 style={{ color:'#fff', fontSize:'clamp(24px,3.5vw,42px)', fontWeight:900, lineHeight:1.15, marginBottom:16, letterSpacing:'-0.5px' }}>Estimates That Close Themselves.</h2>
            <p style={{ color:S.muted, fontSize:16, lineHeight:1.8, marginBottom:8 }}>Build professional estimates, send them automatically, and let 3-step follow-up sequences do the selling for you. No estimate falls through the cracks.</p>
            <ul style={{ listStyle:'none', marginTop:20 }}>
              {['Build and send estimates in minutes','Automatic 3-step email follow-up sequence','Customer acceptance portal — sign from their phone','Auto-convert accepted estimates to scheduled jobs','Track open, accepted, and declined estimates in one view'].map(li => (
                <li key={li} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:14, color:S.muted, marginBottom:12 }}>
                  <span style={{ background:S.elec, color:'#fff', borderRadius:'50%', width:20, height:20, display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, flexShrink:0, marginTop:2, boxShadow:`0 0 8px ${e('.5')}` }}>✓</span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex:1, minWidth:300, background:S.navy1, borderRadius:16, padding:'32px 28px', border:`2px solid ${e('.2')}`, boxShadow:`0 0 40px ${e('.08')}` }}>
            <div style={{ color:S.muted, fontSize:11, textTransform:'uppercase', letterSpacing:1, marginBottom:14 }}>Estimate Pipeline</div>
            {[
              { label:'New Lawn Program — Davis', status:'Sent', statusColor:'#38bdf8', bg:'rgba(56,189,248,.1)' },
              { label:'Irrigation Startup — Park Ave', status:'Follow-Up 2', statusColor:'#f59e0b', bg:'rgba(245,158,11,.1)' },
              { label:'Snow Contract — Metro Office', status:'Accepted ✓', statusColor:'#4ade80', bg:'rgba(74,222,128,.1)' },
              { label:'Pest Program — Johnson', status:'Scheduled', statusColor:S.elec, bg:e('.08') },
            ].map((item) => (
              <div key={item.label} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', background:'rgba(255,255,255,.04)', border:`1px solid ${e('.1')}`, borderRadius:8, padding:'10px 14px', marginBottom:8 }}>
                <span style={{ color:S.text, fontSize:13, fontWeight:600 }}>{item.label}</span>
                <span style={{ background:item.bg, border:`1px solid ${item.statusColor}44`, borderRadius:6, padding:'3px 10px', fontSize:11, fontWeight:700, color:item.statusColor }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL FEATURE GRID ── */}
      <section style={{ background:S.navy3, padding:'100px 40px' }}>
        <div style={{ textAlign:'center', maxWidth:1200, margin:'0 auto 64px' }}>
          <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Full Platform</span>
          <h2 style={{ color:'#fff', fontSize:'clamp(28px,4vw,48px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1px' }}>Everything You Need. Nothing You Don&apos;t.</h2>
          <p style={{ color:S.muted, fontSize:16, marginTop:12 }}>Every feature below is included in your $199/month. No tiers, no add-ons, no surprises.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:18, maxWidth:1200, margin:'0 auto' }}>
          {[
            ['📋','Pending Job Board','Two-tier system — scheduled with dates and chemical/maintenance waiting list.'],
            ['🗺️','Live Route Maps','Drag-and-drop stop ordering with real-time map view for every crew.'],
            ['⭕','Circle-to-Schedule','Draw a zone on the map, see all sq ft and services inside, schedule at once.'],
            ['🧪','Chemical Compliance','Full application logs, license tracking, weather data, and compliance reports.'],
            ['📅','Calendar View','See your entire schedule across all crews and services in one calendar.'],
            ['💬','Two-Way SMS Inbox','Send and receive texts with customers directly in the platform.'],
            ['🔔','10+ Automated Alerts','Scheduled, completed, skipped, estimate, payment, review — fully automatic.'],
            ['💰','Estimates & Follow-Ups','Build, send, and auto-follow-up on estimates without leaving the app.'],
            ['💳','Stripe Payments','Card-on-file, invoices, partial payments, and automated payment reminders.'],
            ['📱','Mobile App for Techs','Stop list, chemical logging, photos, and status updates from any device.'],
            ['👥','Employee Management','Time tracking, employee hours, role-based access, and crew assignments.'],
            ['📦','Service Programs','Multi-treatment packages with renewal alerts and full treatment tracking.'],
            ['📄','Document Management','Contracts, maps, photos, and reports stored per client and property.'],
            ['⭐','Review Requests','Automated Google review requests after every completed service.'],
            ['🔧','Custom Fields','Add any field to any record — fully customizable for your operation.'],
            ['👑','Role-Based Access','Owner, Manager, Office, Tech, and Mobile roles with granular permissions.'],
            ['📊','Admin Dashboard','Full business overview — revenue, jobs, staff, and performance at a glance.'],
            ['📧','Email Alert Templates','Fully customizable email alerts for every event in your workflow.'],
          ].map(([icon,title,desc]) => (
            <div key={title as string} style={{ background:S.navy4, border:`1.5px solid ${e('.1')}`, borderRadius:12, padding:'24px 22px', transition:'border-color .2s, transform .15s' }}
              onMouseEnter={el => { el.currentTarget.style.borderColor = e('.35'); el.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={el => { el.currentTarget.style.borderColor = e('.1'); el.currentTarget.style.transform='translateY(0)'; }}>
              <span style={{ fontSize:26, display:'block', marginBottom:10 }}>{icon}</span>
              <h3 style={{ color:'#fff', fontSize:15, fontWeight:700, marginBottom:7 }}>{title}</h3>
              <p style={{ color:S.muted, fontSize:13, lineHeight:1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background:S.navy2, padding:'100px 40px' }}>
        <div style={{ textAlign:'center', maxWidth:1100, margin:'0 auto 64px' }}>
          <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Built Different</span>
          <h2 style={{ color:'#fff', fontSize:'clamp(28px,4vw,48px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1px' }}>Powerful Software. Simple on Day One.</h2>
          <p style={{ color:S.muted, fontSize:17, maxWidth:620, margin:'16px auto 0', lineHeight:1.75 }}>The big platforms take weeks to configure. IndustryBossPro is built so any owner can be running real jobs within hours of signing up.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:24, maxWidth:1100, margin:'0 auto' }}>
          {[
            ['01','Set Up in One Afternoon','Add your services, import your clients, configure your alerts. Most businesses are scheduling live jobs on day one. No implementation fee, no onboarding call needed.'],
            ['02','One Board Runs Your Day','The Pending Job Board shows your scheduled jobs with dates and your waiting list side by side. Your crew gets their stops on their phone. No switching between 6 apps.'],
            ['03','Techs Learn It in Minutes','The mobile view is built for people in trucks. Big buttons, clear stops, one tap to mark complete, log chemicals, or skip. No manual required.'],
            ['04','Automation Does the Rest','Set your alert templates once. IndustryBossPro texts your customers, follows up on estimates, chases invoices, and requests reviews — automatically, every time.'],
          ].map(([num,title,desc]) => (
            <div key={title} style={{ background:S.navy4, border:`1.5px solid ${e('.1')}`, borderRadius:14, padding:'30px 26px' }}>
              <div style={{ fontSize:42, fontWeight:900, color:S.elec, opacity:.2, lineHeight:1, marginBottom:14 }}>{num}</div>
              <h3 style={{ color:'#fff', fontSize:17, fontWeight:700, marginBottom:10 }}>{title}</h3>
              <p style={{ color:S.muted, fontSize:14, lineHeight:1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VS TABLE ── */}
      <section style={{ background:S.navy3, padding:'100px 40px' }}>
        <div style={{ maxWidth:1060, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>How We Compare</span>
            <h2 style={{ color:'#fff', fontSize:'clamp(26px,4vw,46px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1px' }}>Everything the Big Platforms Have.<br />None of the Price.</h2>
          </div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign:'left', padding:'14px 20px', color:S.muted, fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:1 }}></th>
                  <th style={{ padding:'14px 20px', background:S.navy1, color:S.elec, fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:1, borderRadius:'10px 10px 0 0', boxShadow:`0 0 20px ${e('.15')}` }}>IndustryBossPro</th>
                  <th style={{ padding:'14px 20px', color:S.muted, fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:1 }}>ServiceTitan / Jobber</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly Price','$199 flat','$400–$800+'],
                  ['Per-User Fees','✓ None','$50–$150/user'],
                  ['Covers All Field Service Trades','✓ Yes','No — one trade'],
                  ['Pending Job Board (Two-Tier)','✓ Yes','No'],
                  ['Chemical Compliance Reports','✓ Yes','Add-on / Extra'],
                  ['Sq Ft Waiting List','✓ Yes','No'],
                  ['Circle-to-Schedule Map Tool','✓ Yes','No'],
                  ['Automated SMS Alerts (10+ types)','✓ Yes','Limited / Extra'],
                  ['Two-Way SMS Inbox','✓ Yes','Add-on'],
                  ['Stripe Payments Built In','✓ Yes','Yes'],
                  ['Mobile App for Field Techs','✓ Yes','Yes'],
                  ['Contracts Required','✓ None','Annual contracts'],
                  ['Setup Time','✓ Same day','Weeks + fee'],
                ].map(([feature, ibp, comp], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'transparent' }}>
                    <td style={{ padding:'13px 20px', borderBottom:`1px solid ${e('.06')}`, fontSize:14, color:S.text, fontWeight:600 }}>{feature}</td>
                    <td style={{ padding:'13px 20px', borderBottom:`1px solid ${e('.06')}`, fontSize:15, color:S.elec, fontWeight:700, textAlign:'center', background:'rgba(0,184,255,.04)' }}>{ibp}</td>
                    <td style={{ padding:'13px 20px', borderBottom:`1px solid ${e('.06')}`, fontSize:14, color:'rgba(232,244,255,.35)', textAlign:'center' }}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ background:S.navy1, padding:'100px 40px' }}>
        <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto 56px' }}>
          <span style={{ display:'inline-block', color:S.elec, fontSize:12, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:14 }}>Pricing</span>
          <h2 style={{ color:'#fff', fontSize:'clamp(28px,4vw,48px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1px' }}>One Price. Everything.</h2>
          <p style={{ color:S.muted, fontSize:16, marginTop:14, lineHeight:1.75 }}>We were paying $600/month for software that covered one trade and still didn&apos;t fit the way we worked. We built the pricing we always wished existed.</p>
        </div>
        <div style={{ background:S.navy4, border:`3px solid ${S.elec}`, borderRadius:20, padding:'52px 48px', maxWidth:600, margin:'0 auto', position:'relative', boxShadow:`0 0 60px ${e('.2')}, 0 0 0 8px ${e('.06')}` }}>
          <div style={{ position:'absolute', top:-16, left:'50%', transform:'translateX(-50%)', background:S.elec, color:'#fff', fontSize:11, fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', padding:'6px 22px', borderRadius:20, whiteSpace:'nowrap', boxShadow:`0 0 20px ${e('.5')}` }}>Everything Included — No Tiers</div>
          <div style={{ fontSize:12, fontWeight:700, color:S.muted, textTransform:'uppercase', letterSpacing:'1px', marginBottom:10 }}>IndustryBossPro</div>
          <div style={{ fontSize:72, fontWeight:900, color:'#fff', lineHeight:1, letterSpacing:'-2px' }}><sup style={{ fontSize:28, verticalAlign:'super' }}>$</sup>199</div>
          <div style={{ color:S.muted, fontSize:14, marginTop:6, marginBottom:32 }}>per month · cancel anytime · no contracts</div>
          <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px 24px', marginBottom:36 }}>
            {['Unlimited Users','Unlimited Clients','Unlimited Properties','All Features Included','All Industries Covered','Pending Job Board','Chemical Compliance','Estimates & Invoices','Stripe Payments','Two-Way SMS','Mobile App','500 SMS/month','+$15/500 extra SMS','Free Onboarding'].map(li => (
              <li key={li} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:S.text }}>
                <span style={{ color:S.elec, fontWeight:700, fontSize:14 }}>✓</span>{li}
              </li>
            ))}
          </ul>
          <button onClick={openModal} style={{ width:'100%', background:S.elec, color:'#fff', border:'none', borderRadius:10, padding:'18px', fontSize:17, fontWeight:700, cursor:'pointer', boxShadow:`0 0 30px ${e('.4')}` }}>
            Start Your 14-Day Free Trial
          </button>
          <p style={{ textAlign:'center', color:S.muted, fontSize:13, marginTop:14 }}>No credit card required. No contracts.</p>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div style={{ background:`linear-gradient(135deg, ${S.navy1} 0%, #040f1f 100%)`, textAlign:'center', padding:'120px 40px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', bottom:'-120px', left:'50%', transform:'translateX(-50%)', width:800, height:800, borderRadius:'50%', background:`radial-gradient(circle, ${e('.09')} 0%, transparent 70%)`, pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <h2 style={{ color:'#fff', fontSize:'clamp(30px,4.5vw,54px)', fontWeight:900, marginBottom:20, lineHeight:1.1, letterSpacing:'-1.5px' }}>
            Stop Duct-Taping Together<br /><span style={{ color:S.elec }}>Five Different Software Tools.</span>
          </h2>
          <p style={{ color:S.muted, fontSize:18, marginBottom:48, maxWidth:580, marginLeft:'auto', marginRight:'auto', lineHeight:1.8 }}>
            IndustryBossPro is built for businesses that do it all — snow, landscape, irrigation, lawn, pest, and everything in between. One platform. One price. Try it free for 14 days.
          </p>
          <button onClick={openModal} style={{ background:S.elec, color:'#fff', padding:'20px 56px', borderRadius:10, fontSize:18, fontWeight:700, border:'none', cursor:'pointer', boxShadow:`0 0 40px ${e('.45')}, 0 4px 24px rgba(0,0,0,.4)` }}>
            Start Free — No Card Required
          </button>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background:'#020810', borderTop:`1px solid ${e('.1')}`, padding:'56px 40px 40px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:40, marginBottom:48 }}>
            <div style={{ maxWidth:280 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                <div style={{ width:34, height:34, borderRadius:8, background:`linear-gradient(135deg, ${S.elec}, #0055a5)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="18" height="15" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 13L0.5 4.5L5.5 8.5L10 1.5L14.5 8.5L19.5 4.5L18 13H2Z" fill="white"/>
                    <rect x="2" y="13.5" width="16" height="2" rx="1" fill="white"/>
                  </svg>
                </div>
                <span style={{ fontSize:17, fontWeight:800 }}><span style={{ color:'#fff' }}>IndustryBoss</span><span style={{ color:S.elec }}>Pro</span></span>
              </div>
              <p style={{ color:S.muted, fontSize:13, lineHeight:1.7 }}>The all-in-one field service platform built for businesses that run every trade. Snow, landscape, irrigation, lawn care, pest control — one dashboard, one price.</p>
            </div>
            {[
              { title:'Product', links:['Features','Industries','Pricing','Login','Start Free Trial'] },
              { title:'Industries', links:['Snow & Ice','Landscaping','Irrigation','Lawn Care','Pest Control'] },
              { title:'Company', links:['Terms of Service','Privacy Policy','Contact Us'] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ color:'#fff', fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', marginBottom:16 }}>{col.title}</h4>
                <ul style={{ listStyle:'none' }}>
                  {col.links.map(link => (
                    <li key={link} style={{ marginBottom:10 }}>
                      <a href="#" style={{ color:S.muted, fontSize:14, textDecoration:'none' }}
                        onMouseEnter={el => (el.target as HTMLElement).style.color = S.elec}
                        onMouseLeave={el => (el.target as HTMLElement).style.color = S.muted}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop:`1px solid ${e('.08')}`, paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
            <p style={{ color:'rgba(232,244,255,.3)', fontSize:13 }}>© {new Date().getFullYear()} IndustryBossPro. All rights reserved.</p>
            <p style={{ color:'rgba(232,244,255,.3)', fontSize:13 }}>$199/month · Everything Included · No Contracts</p>
          </div>
        </div>
      </footer>

      {/* ── MODAL BACKDROP ── */}
      {modal && (
        <div onClick={closeModal} style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,.7)', zIndex:99990, backdropFilter:'blur(4px)' }} />
      )}

      {/* ── SIGNUP MODAL ── */}
      {modal && (
        <div style={{ position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:99999, width:440, maxWidth:'calc(100vw - 24px)', background:S.navy3, borderRadius:16, border:`2px solid ${S.elec}`, boxShadow:`0 0 60px ${e('.3')}, 0 0 0 6px ${e('.08')}, 0 20px 60px rgba(0,0,0,.6)`, maxHeight:'calc(100vh - 40px)', overflowY:'auto' }}>
          {/* Modal Header */}
          <div style={{ background:`linear-gradient(135deg, ${S.navy1}, #041020)`, padding:'28px 28px 22px', position:'relative', borderBottom:`1px solid ${e('.15')}` }}>
            <div style={{ color:'#fff', fontSize:20, fontWeight:800, paddingRight:36 }}>Start Your 14-Day Free Trial</div>
            <div style={{ color:S.muted, fontSize:13, marginTop:5 }}>No credit card required. Full access. Cancel anytime.</div>
            <button onClick={closeModal} style={{ position:'absolute', top:16, right:16, background:'rgba(255,255,255,.1)', border:'none', color:'#fff', width:32, height:32, borderRadius:'50%', cursor:'pointer', fontSize:20, display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
          </div>

          {/* Step 1 */}
          {step === 'info' && (
            <div style={{ padding:'24px 28px' }}>
              {err && <div style={{ background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.3)', color:'#fca5a5', borderRadius:6, padding:'10px 12px', fontSize:13, marginBottom:14 }}>{err}</div>}
              <div style={{ display:'flex', gap:12, marginBottom:14 }}>
                {(['first','last'] as const).map((k, i) => (
                  <div key={k} style={{ flex:1 }}>
                    <label style={{ fontSize:11, fontWeight:700, color:S.muted, textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>{i===0?'First Name':'Last Name'}</label>
                    <input type="text" value={form[k]} onChange={f(k)} placeholder={i===0?'John':'Smith'} style={{ width:'100%', background:S.navy4, border:`1px solid ${e('.2')}`, borderRadius:6, padding:'10px 12px', fontSize:14, color:S.text, fontFamily:'inherit' }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:11, fontWeight:700, color:S.muted, textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>Company Name</label>
                <input type="text" value={form.company} onChange={f('company')} placeholder="Smith Landscaping Co." style={{ width:'100%', background:S.navy4, border:`1px solid ${e('.2')}`, borderRadius:6, padding:'10px 12px', fontSize:14, color:S.text, fontFamily:'inherit' }} />
              </div>
              <div style={{ marginBottom:22 }}>
                <label style={{ fontSize:11, fontWeight:700, color:S.muted, textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>Email Address</label>
                <input type="email" value={form.email} onChange={f('email')} placeholder="you@yourcompany.com" style={{ width:'100%', background:S.navy4, border:`1px solid ${e('.2')}`, borderRadius:6, padding:'10px 12px', fontSize:14, color:S.text, fontFamily:'inherit' }} />
              </div>
              <button onClick={nextStep} style={{ width:'100%', background:S.elec, color:'#fff', border:'none', borderRadius:8, padding:'13px', fontSize:15, fontWeight:700, cursor:'pointer', boxShadow:`0 0 20px ${e('.35')}`, fontFamily:'inherit' }}>
                Next: Create Password →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 'pass' && (
            <div style={{ padding:'24px 28px' }}>
              {err && <div style={{ background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.3)', color:'#fca5a5', borderRadius:6, padding:'10px 12px', fontSize:13, marginBottom:14 }}>{err}</div>}
              <div style={{ background:'rgba(74,222,128,.08)', border:'1px solid rgba(74,222,128,.25)', borderRadius:6, padding:'10px 14px', marginBottom:16 }}>
                <div style={{ fontSize:12, color:'#4ade80', fontWeight:700 }}>14-Day Free Trial — No Credit Card Required</div>
                <div style={{ fontSize:12, color:S.muted, marginTop:2 }}>Full access to every feature. $199/month after trial.</div>
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:11, fontWeight:700, color:S.muted, textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>Login Email</label>
                <input type="email" value={form.email} readOnly style={{ width:'100%', background:'rgba(255,255,255,.05)', border:`1px solid ${e('.15')}`, borderRadius:6, padding:'10px 12px', fontSize:14, color:S.muted, fontFamily:'inherit' }} />
              </div>
              {(['password','confirm'] as const).map((k, i) => (
                <div key={k} style={{ marginBottom:14 }}>
                  <label style={{ fontSize:11, fontWeight:700, color:S.muted, textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:5 }}>{i===0?'Password':'Confirm Password'}</label>
                  <input type="password" value={form[k]} onChange={f(k)} placeholder={i===0?'At least 8 characters':'Repeat password'} style={{ width:'100%', background:S.navy4, border:`1px solid ${e('.2')}`, borderRadius:6, padding:'10px 12px', fontSize:14, color:S.text, fontFamily:'inherit' }} />
                </div>
              ))}
              <div style={{ marginBottom:20, display:'flex', alignItems:'flex-start', gap:10 }}>
                <input type="checkbox" id="ibp-agree" checked={form.agree} onChange={f('agree')} style={{ width:16, height:16, accentColor:S.elec, cursor:'pointer', flexShrink:0, marginTop:3 }} />
                <label htmlFor="ibp-agree" style={{ fontSize:13, color:S.muted, cursor:'pointer', lineHeight:1.5 }}>
                  I agree to the <a href="/terms" style={{ color:S.elec }}>Terms of Service</a> and <a href="/privacy" style={{ color:S.elec }}>Privacy Policy</a>
                </label>
              </div>
              <button onClick={createAccount} disabled={loading} style={{ width:'100%', background:S.elec, color:'#fff', border:'none', borderRadius:8, padding:'13px', fontSize:15, fontWeight:700, cursor:'pointer', boxShadow:`0 0 20px ${e('.35')}`, fontFamily:'inherit', opacity:loading?.7:1 }}>
                {loading ? 'Creating your account…' : 'Create My Account'}
              </button>
              <button onClick={() => { setStep('info'); setErr(''); }} style={{ width:'100%', background:'none', border:'none', color:S.muted, fontSize:13, cursor:'pointer', marginTop:10, padding:6, fontFamily:'inherit', textDecoration:'underline' }}>
                ← Back
              </button>
            </div>
          )}

          {/* Success */}
          {step === 'done' && (
            <div style={{ padding:'52px 28px', textAlign:'center' }}>
              <div style={{ width:70, height:70, background:'#16a34a', borderRadius:'50%', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:32, color:'#fff', marginBottom:18, boxShadow:'0 0 30px rgba(22,163,74,.5)' }}>✓</div>
              <div style={{ fontSize:24, fontWeight:800, color:'#fff', marginBottom:12 }}>You&apos;re In!</div>
              <div style={{ fontSize:15, color:S.muted, lineHeight:1.7, marginBottom:6 }}>Your 14-day free trial has started.<br />Taking you to your dashboard…</div>
              <div style={{ fontSize:12, color:'rgba(232,244,255,.35)', marginTop:10 }}>Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}…</div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
