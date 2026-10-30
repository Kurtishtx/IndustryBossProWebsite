'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SiteHeader from '../components/SiteHeader';
import PlanCompare from '../components/PlanCompare';
import SeeItInAction from '../components/SeeItInAction';
import SiteScore from '@/components/SiteScore';
import { pixelDemoStarted } from '../components/MetaPixel';

const HomeTrialModal = dynamic(() => import('../components/HomeTrialModal'), { ssr: false });

export default function Home() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);

  return (
    <>
      <SiteHeader onOpenModal={openModal} />

      <main>
      {/* LIVE INTERACTIVE DEMO — replaces the static cover image. Pick Desktop / Client / Crew and use the real apps. */}
      <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 55%, #1a1a1a 100%)', padding: 'clamp(80px,8vw,96px) clamp(14px,4vw,24px) 0', textAlign: 'center' }}>
        {/* ═══ AI ANSWERING — headline feature ═══ */}
        <style>{`
          @keyframes aiGlow { 0%,100% { box-shadow: 0 0 0 1px rgba(255,106,0,.55), 0 12px 40px rgba(255,106,0,.25); } 50% { box-shadow: 0 0 0 1px rgba(255,190,90,.9), 0 14px 56px rgba(255,106,0,.45); } }
          @keyframes aiStar { 0%,100% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(18deg) scale(1.15); } }
          .ai-card { max-width: 900px; margin: 0 auto clamp(28px,4vw,40px); text-align: left; border-radius: 18px; padding: clamp(20px,3vw,30px) clamp(18px,3.4vw,34px); background: linear-gradient(135deg, rgba(255,106,0,.16) 0%, rgba(30,10,53,.9) 55%, rgba(255,106,0,.10) 100%); animation: aiGlow 3.2s ease-in-out infinite; position: relative; }
          .ai-top { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
          .ai-star { font-size: 26px; display: inline-block; animation: aiStar 2.4s ease-in-out infinite; filter: drop-shadow(0 0 8px rgba(255,190,90,.8)); }
          .ai-tag { font-size: 11px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; color: #fff; background: #c75300; border-radius: 20px; padding: 4px 11px; }
          .ai-soon { font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: #ffd28a; border: 1px solid rgba(255,210,138,.5); border-radius: 20px; padding: 3px 10px; }
          .ai-h { color: #fff; font-size: clamp(24px,3.6vw,38px); font-weight: 800; line-height: 1.15; margin: 0 0 8px; }
          .ai-h b { color: #ff6a00; }
          .ai-p { color: rgba(255,255,255,.82); font-size: clamp(15px,1.8vw,17px); line-height: 1.55; margin: 0 0 16px; max-width: 760px; }
          .ai-chips { display: flex; flex-wrap: wrap; gap: 8px; }
          .ai-chip { color: #fff; font-size: 13px; font-weight: 700; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); border-radius: 20px; padding: 6px 12px; }
          .top-h { color: #fff; font-size: clamp(24px,3.6vw,40px); font-weight: 800; line-height: 1.15; margin: 0 auto clamp(14px,2vw,20px); max-width: 900px; }
          .top-h span { color: #ff6a00; }
          .addons-label { color: rgba(255,255,255,.55); font-size: 12px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin: 6px 0 12px; }
          .top-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin: 4px 0 clamp(26px,4vw,40px); }
          .cta-demo { background: #c75300; color: #fff; font-weight: 800; font-size: 17px; padding: 15px 28px; border-radius: 10px; text-decoration: none; box-shadow: 0 10px 30px rgba(255,106,0,.45); }
          .cta-trial { background: transparent; color: #fff; font-weight: 800; font-size: 17px; padding: 14px 26px; border-radius: 10px; text-decoration: none; border: 2px solid rgba(255,255,255,.5); }
          /* Add-ons sit last in the dark band here (the picture is above them), so the grid carries the band's bottom padding. */
          .addons { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; max-width: 1200px; margin: 0 auto; padding-bottom: clamp(40px,6vw,80px); align-items: stretch; }
          .addons .ai-card { margin: 0; max-width: none; }
          .addons .ai-h { font-size: clamp(22px,2.4vw,28px); }
          @media (max-width: 900px) { .addons { grid-template-columns: 1fr; } }
          .ss-btn { margin-top: 4px; background: #c75300; color: #fff; border: none; border-radius: 10px; padding: 12px 18px; font-weight: 800; font-size: 15px; cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,.35); }
          .ss-go { background: #c75300; }
          .hero-mock { display: block; width: 100%; max-width: 1200px; height: auto; margin: 0 auto; }
          .ai-pill { display: inline-flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; max-width: 900px; margin: 0 auto clamp(18px,3vw,26px); padding: 8px 16px 8px 12px; border-radius: 30px; background: rgba(255,255,255,.06); color: rgba(255,255,255,.9); font-size: clamp(13px,1.6vw,15px); line-height: 1.35; animation: aiGlow 3.2s ease-in-out infinite; }
          .ai-pill .ai-star { font-size: 18px; }
          .ai-pill b { color: #fff; } .ai-pill .ai-price { color: #ff6a00; }
        `}</style>
        <h2 className="top-h">CRM &amp; Scheduling Software for <span>Lawn Care &amp; Home Service Companies</span></h2>

        {/* Price, up top — same order sprayboss-website uses. */}
        <div style={{textAlign:'center', marginBottom:'clamp(22px,3vw,32px)'}}>
          <div style={{display:'inline-flex', alignItems:'baseline', gap:'12px', flexWrap:'wrap', justifyContent:'center', color:'#fff'}}>
            <span style={{fontSize:'clamp(30px,4.6vw,46px)', fontWeight:800, lineHeight:1}}><span style={{fontSize:'.46em', fontWeight:700, color:'rgba(255,255,255,.6)'}}>CRM Software starting at </span>$59<span style={{fontSize:'.46em', fontWeight:700, color:'rgba(255,255,255,.6)'}}>/month</span></span>
            <span style={{fontSize:'clamp(16px,2.2vw,22px)', fontWeight:800, color:'#ff6a00'}}>&middot; 14-Day Free Trial</span>
          </div>
          <div style={{color:'rgba(255,255,255,.6)', fontSize:'13px', fontWeight:600, marginTop:'7px', letterSpacing:'.3px'}}>No credit card required &middot; Cancel anytime</div>
        </div>
        <div className="top-cta"><a href="https://my.industrybosspro.com/demo.html" target="_blank" rel="noopener" className="cta-demo" onClick={(e) => { if (typeof window !== 'undefined' && screen.availWidth > 900) { e.preventDefault(); window.open((e.currentTarget as HTMLAnchorElement).href, 'bossprodemo', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',left=0,top=0,resizable=yes,scrollbars=yes'); }  try { if (localStorage.getItem('bp_notrack') !== '1') pixelDemoStarted(); } catch (e) { pixelDemoStarted(); } }}>&#9654; Try the Live Demo</a><a href="#" onClick={(e) => { e.preventDefault(); openModal(); }} className="cta-trial">Start Free Trial</a></div>
        <link rel="preload" as="image" href="/hero-mockup.webp" fetchPriority="high" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="integ-strip" style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'10px 14px', maxWidth:1000, margin:'0 auto clamp(26px,4vw,40px)', color:'rgba(255,255,255,.82)', fontSize:'clamp(14px,1.7vw,16px)', textAlign:'center'}}>
          <span style={{fontWeight:800, color:'#fff'}}>Integrates with</span>
          <span style={{display:'inline-flex', alignItems:'center', gap:7, background:'#fff', color:'#1f1f1f', borderRadius:20, padding:'6px 14px', fontWeight:800}}><span aria-hidden="true" style={{width:10, height:10, borderRadius:'50%', background:'#ff4f00'}}></span>Zapier</span>
          <span style={{display:'inline-flex', alignItems:'center', gap:7, background:'#fff', color:'#1f1f1f', borderRadius:20, padding:'6px 14px', fontWeight:800}}><span aria-hidden="true" style={{width:10, height:10, borderRadius:'50%', background:'#6d00cc'}}></span>Make</span>
          <span style={{fontWeight:800, color:'#fff', marginLeft:6}}>Payroll</span>
          <span style={{display:'inline-flex', alignItems:'center', gap:7, background:'#fff', color:'#1f1f1f', borderRadius:20, padding:'6px 14px', fontWeight:800}}><span aria-hidden="true" style={{width:10, height:10, borderRadius:'50%', background:'#f45d48'}}></span>Gusto</span>
          <span style={{display:'inline-flex', alignItems:'center', gap:7, background:'#fff', color:'#1f1f1f', borderRadius:20, padding:'6px 14px', fontWeight:800}}><span aria-hidden="true" style={{width:10, height:10, borderRadius:'50%', background:'#2ca01c'}}></span>QuickBooks</span>
          <span style={{display:'inline-flex', alignItems:'center', gap:7, background:'#fff', color:'#1f1f1f', borderRadius:20, padding:'6px 14px', fontWeight:800}}><span aria-hidden="true" style={{width:10, height:10, borderRadius:'50%', background:'#d0271d'}}></span>ADP</span>
          <span style={{display:'inline-flex', alignItems:'center', gap:7, background:'#fff', color:'#1f1f1f', borderRadius:20, padding:'6px 14px', fontWeight:800}}><span aria-hidden="true" style={{width:10, height:10, borderRadius:'50%', background:'#004b8d'}}></span>Paychex</span>
          <span>Connect to thousands of apps, and run payroll: hours, overtime, tips &amp; bonuses</span>
        </div>
        <img src="/hero-mockup.webp" srcSet="/hero-mockup-640.webp 640w, /hero-mockup.webp 1200w" sizes="(max-width: 700px) 100vw, 1200px" fetchPriority="high" decoding="async" alt="IndustryBossPro software on a laptop with the client app and crew app on phones" className="hero-mock" width={1600} height={880} />
        <div className="addons-label" style={{marginTop:'clamp(28px,4vw,44px)'}}>Add-ons</div>
        <div className="addons">
        <div className="ai-card">
          <div className="ai-top">
            <span className="ai-star" aria-hidden="true">&#11088;</span>
            <span className="ai-tag">AI Answering</span>
            <span className="ai-soon">New Add-On</span>
          </div>
          <h2 className="ai-h">An AI receptionist for only <b>29&cent; a minute</b></h2>
          <p className="ai-p ai-vol" style={{ fontWeight: 700, marginTop: 4 }}>Answering 100+ calls a day? Email <a href="mailto:Support@bossprohq.com" style={{ color: 'inherit', textDecoration: 'underline' }}>Support@bossprohq.com</a> for a volume rate.</p>
          <p className="ai-p">The most real, human-sounding AI on the market &mdash; and it&apos;s built into IndustryBossPro, so it doesn&apos;t just take messages. It knows your customers and your CRM, tells them when you&apos;re coming, skips and reschedules services, tells existing customers your pricing and adds new services, sends a secure form to update their card, and takes down new customers for you. 24/7. You only pay when it answers.</p>
          <div className="ai-chips">
            <span className="ai-chip">&#128222; Answers every call, 24/7</span>
            <span className="ai-chip">&#129504; Knows your customers &amp; CRM</span>
            <span className="ai-chip">&#128197; Skips &amp; reschedules</span>
            <span className="ai-chip">&#128178; Quotes &amp; adds services</span>
            <span className="ai-chip">&#128179; Sends card-update form</span>
            <span className="ai-chip">&#128221; Takes new leads</span>
            <span className="ai-chip">&#9989; No monthly fee</span>
          </div>
        </div>
        <div className="ai-card">
          <div className="ai-top">
            <span className="ai-star" aria-hidden="true">&#127760;</span>
            <span className="ai-tag">Free Website</span>
            <span className="ai-soon">Included</span>
          </div>
          <h2 className="ai-h">A professional website, <b>free</b> with any paid plan</h2>
          <p className="ai-p">We build it for you &mdash; a perfectly built 200&ndash;300 page website with a free domain, or use your own. Built to score 90+ on Google, and 100 on SEO, and we send you the score report once it&apos;s built. Fast on every phone, and every form on it goes straight into IndustryBossPro as a new lead.</p>
          <div className="ai-chips">
            <span className="ai-chip">&#127760; Free domain (or use yours)</span>
            <span className="ai-chip">&#128196; 200&ndash;300 pages</span>
            <span className="ai-chip">&#128200; 90+ and 100 on SEO</span>
            <span className="ai-chip">&#128221; Forms flow into your CRM</span>
            <span className="ai-chip">&#128241; Mobile-perfect</span>
            <span className="ai-chip">&#128736; We build it for you</span>
          </div>
          <p className="ai-p" style={{margin:'14px 0 10px'}}>Compare our score to any other website you&apos;ve been quoted &mdash; or the one you have now.</p>
          <SiteScore />
        </div>
        </div>
      </div>

      {/* Plans, directly under the demo. Someone who has just used the software asks what it
          costs next, and the answer should not be a scroll away. */}
      {/* The 3 plans, right after the top picture and before the real-picture sections (owner, 10/30). */}
      <PlanCompare />

      {/* ═══ BILLING: the owner's real branded estimate + invoice (10/29) ═══ */}
      <section id="billing" aria-label="Branded estimates and invoices" style={{ background: '#ffffff', padding: 'clamp(44px,7vw,80px) 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <span style={{ display: 'inline-block', color: '#ff6a00', fontWeight: 900, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>Billing</span>
            <h2 style={{ color: '#111827', fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 900, lineHeight: 1.12, margin: '0 0 14px' }}>Get Paid Faster. Chase Less.</h2>
            <p style={{ color: '#4b5563', fontSize: 'clamp(15px,1.9vw,18px)', lineHeight: 1.7, margin: '0 0 18px' }}>Send estimates and invoices that look like they came from a big company &mdash; your logo, your colors, your photo. Customers approve the estimate and add a card in one click, and invoices charge the card on file when the job is marked complete.</p>
            <p style={{ color: '#4b5563', fontSize: 'clamp(15px,1.9vw,18px)', lineHeight: 1.7, margin: '0 0 18px' }}><strong>Fully customizable, top to bottom.</strong> Change every color, choose exactly what shows and what doesn&apos;t, and pick from over 100 preloaded header photos &mdash; or upload your own photos and logos.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {[
                'Branded or classic email, picked when you send',
                'Approve online and add a card in one click',
                'Approved estimates become scheduled jobs',
                'Invoices with line items, sales tax and Pay Now',
                'Card-on-file auto-billing when the job is done',
                'Past-due follow-up on unpaid invoices',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, color: '#374151', fontSize: 15.5, lineHeight: 1.5 }}><span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ flex: '1 1 440px', minWidth: 0, background: '#7d838c', borderRadius: 16, padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
            <figure style={{ margin: 0 }}>
              <figcaption style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, textAlign: 'center', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Branded Estimate</figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/branded-estimate-v5.webp" width={900} height={2399} loading="lazy" decoding="async" alt="Branded estimate email with the company logo, a header photo, service badges and an Approve Estimate button" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,.35)', border: '3px solid #ffffff' }} />
            </figure>
            <figure style={{ margin: 0 }}>
              <figcaption style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, textAlign: 'center', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Branded Invoice</figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/branded-invoice-v5.webp" width={900} height={1683} loading="lazy" decoding="async" alt="Branded invoice email with line items, sales tax, amount due and a Pay Now button" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,.35)', border: '3px solid #ffffff' }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ═══ MEETINGS: real screenshots of the Meetings page and Meeting Alerts (10/29) ═══ */}
      <section id="meetings" aria-label="Meetings and booking link" style={{ background: '#f6f7f9', padding: 'clamp(44px,7vw,80px) 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto clamp(22px,3.5vw,36px)' }}>
            <span style={{ display: 'inline-block', color: '#ff6a00', fontWeight: 900, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>Meetings</span>
            <h2 style={{ color: '#111827', fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 900, lineHeight: 1.12, margin: '0 0 12px' }}>Book Meetings. Get a YES Back by Text.</h2>
            <p style={{ color: '#4b5563', fontSize: 'clamp(15px,1.9vw,18px)', lineHeight: 1.7, margin: 0 }}>Estimate walkthroughs, phone calls or video meetings &mdash; your customers pick a day and time from your booking link, or you and your staff set it up for them. IndustryBossPro texts them right away and sends reminders before, and when they reply YES or NO the meeting marks itself Confirmed or Can&apos;t make it.</p>
          </div>
          <div style={{ background: '#7d838c', borderRadius: 16, padding: 'clamp(14px,2.5vw,24px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 18, alignItems: 'start' }}>
            <figure style={{ margin: 0 }}>
              <figcaption style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, textAlign: 'center', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Your Meetings Page</figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/meetings-list.webp" width={1200} height={617} loading="lazy" decoding="async" alt="Meetings page: upcoming meetings by day with Confirmed, Waiting on reply and Booked online tags, a Copy booking link button and New Meeting" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,.35)', border: '3px solid #ffffff' }} />
            </figure>
            <figure style={{ margin: 0 }}>
              <figcaption style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, textAlign: 'center', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>The Texts They Get</figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/meetings-alerts.webp" width={1000} height={921} loading="lazy" decoding="async" alt="Meeting Alerts: reminders 1 day and 1 hour before, a Reply YES to confirm option, and the booked text with a live preview" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,.35)', border: '3px solid #ffffff' }} />
            </figure>
            <figure style={{ margin: 0, gridColumn: '1 / -1' }}>
              <figcaption style={{ color: '#ffffff', fontWeight: 700, fontSize: 12, textAlign: 'center', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Turn Each One On or Off Under Alerts</figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/meetings-toggles.webp" width={1400} height={439} loading="lazy" decoding="async" alt="Alerts page, Client Meeting Alerts: Meeting Booked, Reminder, Moved and Canceled, each with its own Text and Email switch" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,.35)', border: '3px solid #ffffff' }} />
            </figure>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 'clamp(20px,3vw,30px) auto 0', maxWidth: 1000, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px 28px' }}>
            {[
              'Customers book themselves from your link',
              'Or you and your staff book it for them',
              'In person, phone or video',
              'Booked, moved and canceled texts',
              'Reminders whenever you want them',
              'YES / NO replies confirm on their own',
              'Assign each meeting to someone on your team',
              'Turn it on any time in Settings › Add-ons',
            ].map((t) => (
              <li key={t} style={{ display: 'flex', gap: 10, color: '#374151', fontSize: 15.5, lineHeight: 1.5 }}><span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Our promise" style={{ background: '#0b0b12', padding: 'clamp(40px,6vw,64px) 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(24px,3.4vw,38px)', fontWeight: 800, lineHeight: 1.2, margin: '0 auto 12px', maxWidth: 900 }}>We give you everything you need to succeed, <span style={{ color: 'var(--orange)' }}>because we want you to win.</span></h2>
        <p style={{ color: 'rgba(255,255,255,.82)', fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.6, margin: '0 auto', maxWidth: 760 }}>Software, a free website, AI answering, and a real owner who&apos;ll move your data and pick up the phone.</p>
      </section>
      <section aria-label="Your data is yours" style={{ background: '#f6f7f9', padding: 'clamp(40px,6vw,70px) 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#111827', fontSize: 'clamp(26px,3.6vw,40px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 10px' }}>Your data is yours. Period.</h2>
          <p style={{ color: '#4b5563', fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.6, margin: '0 auto 28px', maxWidth: 720 }}>Moving your business into new software is a big deal. Here is our promise, in writing.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14, textAlign: 'left' }}>
            {[
              ['\u{1F512}', 'We never sell your data', 'Not your info, not your customers\u2019. Not ever, to anyone.'],
              ['\u{1F91D}', 'Your customers are yours', 'We never contact, market to, or sell to your customers.'],
              ['\u{1F6AB}', 'Never used against you', 'We won\u2019t use your data to compete with you or hand it to anyone in your industry.'],
              ['\u{1F4E4}', 'Take it with you anytime', 'Export your customers, properties, invoices and history whenever you want.'],
              ['\u{1F5D1}\uFE0F', 'Leave and it\u2019s deleted', 'Cancel and we delete it within 90 days, or sooner if you ask.'],
              ['\u{1F440}', 'Nobody snoops', 'We only open your account when you ask us for help. Your data never trains AI.'],
            ].map(([ic, h, t]) => (
              <div key={h} style={{ background: '#fff', borderRadius: 12, padding: '18px 18px 16px', boxShadow: '0 1px 3px rgba(0,0,0,.07)' }}>
                <div aria-hidden="true" style={{ fontSize: 24, marginBottom: 6 }}>{ic}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: '#111827', marginBottom: 4 }}>{h}</div>
                <div style={{ fontSize: 14.5, color: '#4b5563', lineHeight: 1.5 }}>{t}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#374151', fontSize: 15, margin: '24px 0 0', lineHeight: 1.6 }}>
            <b>Larger company?</b> We&apos;ll sign a Data Protection Agreement with you, already signed on our side. <a href="mailto:Support@bossprohq.com?subject=Data%20Protection%20Agreement%20request" style={{ color: '#1d4ed8', fontWeight: 700 }}>Request it</a>
            <span style={{ color: '#6b7280' }}> &middot; <a href="/privacy-policy" style={{ color: '#4b5563' }}>Privacy Policy</a> &middot; <a href="/terms" style={{ color: '#4b5563' }}>Terms</a></span>
          </p>
        </div>
      </section>
      <section aria-label="Tech reviews, tips and bonuses" style={{ background: '#ffffff', padding: 'clamp(44px,7vw,80px) 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(22px,3.5vw,36px)' }}>
            <span style={{ display: 'inline-block', background: '#16a34a', color: '#fff', fontWeight: 900, fontSize: 12, letterSpacing: 1.5, borderRadius: 20, padding: '5px 12px', marginBottom: 12 }}>NEW</span>
            <h2 style={{ color: '#111827', fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 900, lineHeight: 1.12, margin: '0 0 12px' }}>Tech reviews, tips &amp; crew bonuses</h2>
            <p style={{ color: '#4b5563', fontSize: 'clamp(15px,1.9vw,19px)', lineHeight: 1.6, margin: '0 auto', maxWidth: 780 }}>Your customers rate the tech who did the job and can leave a tip. Your crew sees their stars, their tips and exactly how close they are to their next bonus. Included on every IndustryBossPro plan.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,3vw,36px)', alignItems: 'center', justifyContent: 'center' }}>
          <figure style={{ flex: '0 0 auto', width: 'min(290px, 82vw)', margin: 0, textAlign: 'center' }}>
            <div style={{ background: '#0b0b0f', borderRadius: 38, padding: 10, boxShadow: '0 24px 60px rgba(15,23,42,.28), 0 0 0 2px #26262c' }}>
              <img src="/crew-bonus.webp" width={600} height={1055} loading="lazy" decoding="async" alt="Crew app Bonus &amp; Tips screen: the tech's star rating, tips owed, how close they are to their bonus, and what customers said" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 29 }} />
            </div>
            <figcaption style={{ color: '#4b5563', fontSize: 13.5, fontWeight: 600, marginTop: 10 }}>What your tech sees in the crew app</figcaption>
          </figure>
          <div style={{ flex: '1 1 520px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
            {[
              ['\u2B50', 'Customers rate their tech', 'After every job, a text, email or app alert asks \u201cHow did Jake do?\u201d One tap for stars and a comment.'],
              ['\u{1F49A}', 'Tips go to the crew', 'Customers tip on their card on file or a new card. Every tip is tracked per employee, minus processing.'],
              ['\u{1F69A}', 'Fair crew splits', 'Set the split per truck, give drivers a bigger share, or change any single job. Drag your crew between trucks.'],
              ['\u{1F3AF}', 'Bonuses they can see', 'Set goals by gross, jobs or rating. Techs see \u201cYou\u2019re $200 away from your bonus\u201d in the crew app.'],
              ['\u{1F44B}', 'Meet your tech', 'Customers see who\u2019s coming, with a photo, rating, reviews and an \u201cabout me\u201d before the visit.'],
              ['\u{1F4B8}', 'Run payroll in one click', 'Hours and overtime from the crew time clock, plus tips and bonuses, ready for Gusto, QuickBooks, ADP or Paychex. By hand or automatically.'],
            ].map(([ic, h, t]) => (
              <div key={h} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 14, padding: '18px 18px 16px' }}>
                <div aria-hidden="true" style={{ fontSize: 26, marginBottom: 6 }}>{ic}</div>
                <div style={{ fontWeight: 800, fontSize: 16.5, color: '#111827', marginBottom: 4 }}>{h}</div>
                <div style={{ fontSize: 14.5, color: '#4b5563', lineHeight: 1.5 }}>{t}</div>
              </div>
            ))}
          </div>
          </div>
          <p style={{ textAlign: 'center', color: '#374151', fontSize: 15, margin: '22px 0 0', lineHeight: 1.6 }}>Happy customers can share it on Google or Facebook too, and private feedback comes straight to you.</p>
        </div>
      </section>

      {/* Video sits BELOW the demo and plans - for the visitor who scrolled past without
          clicking. Renders nothing until the YouTube IDs are filled in. */}
      <SeeItInAction onOpenModal={openModal} />

      {/* HERO */}
      <div className="hero" style={{ paddingTop: 52 }}>
        <div className="hero-badge">Lawn Care Business Software · Plus Every Service You Add On</div>
        <h1>Lawn Care Software.<br /><span>Plus Everything You Add On.</span><br />One Login.</h1>
        <div className="hero-sub">
          Built for lawn care companies — and the services lawn companies add on: mowing, landscaping, pest and mosquito control, irrigation, pool service, snow removal, pressure washing, pet waste, gutter cleaning and junk removal. Run all of it from one dashboard, with the most powerful pending job board in the business.
        </div>
        <div className="hero-btns">
          <button onClick={openModal} className="btn-primary">Start Free — 14 Days, No Card</button>
          <a href="#features" className="btn-ghost">See All Features →</a>
        </div>
        <p style={{ textAlign:'center', color:'rgba(245,245,245,.72)', fontSize:15, fontWeight:600, marginTop:18 }}>No credit card required &middot; 14-day free trial &middot; <b style={{ color:'#ff6a00' }}>CRM Software starting at $59/mo</b> after &middot; <b style={{ color:'#ff6a00' }}>demo needs no signup</b></p>
        <p style={{ textAlign:'center', color:'rgba(245,245,245,.72)', fontSize:14, marginTop:8 }}>Works in the US, Canada, Australia, New Zealand and the UK — bills your customers in your own currency.</p>
        <div className="hero-proof">
          <div className="proof-item"><div className="proof-val">$59</div><div className="proof-lbl">To Start</div></div>
          <div className="proof-item"><div className="proof-val">Unlimited</div><div className="proof-lbl">Clients &amp; Properties</div></div>
          <div className="proof-item"><div className="proof-val">15</div><div className="proof-lbl">Lawn &amp; Outdoor Services. One Account.</div></div>
          <div className="proof-item"><div className="proof-val">14 Days</div><div className="proof-lbl">Free Trial, No Card Required</div></div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <span className="trust-label">Lawn Companies Run</span>
          {[["🌱","Lawn Care"],["🌾","Mowing"],["🌿","Landscaping"],["🐛","Pest & Mosquito Control"],["💧","Irrigation"],["🌳","Tree Service"],["🐕","Pet Waste Removal"],["🏊","Pool Service"],["🍂","Cleanups"],["🏠","Gutter Cleaning"],["💦","Pressure Washing"],["💡","Landscape Lighting"],["🗑️","Junk Removal"],["❄️","Snow & Ice"],["🎄","Christmas Lights"]].map(([icon,name]) => (
            <div key={name} className="trust-item"><span>{icon}</span><span>{name}</span></div>
          ))}
        </div>
      </div>

      {/* PREMIUM BAND */}
      <div className="premium-band">
        <span className="section-label">Enterprise Power</span>
        <h2 className="section-title" style={{ maxWidth:860, margin:'0 auto 20px' }}>
          Affordable Doesn&apos;t Mean Cheap.<br /><span style={{ color:'#ff6a00' }}>This Is Enterprise-Grade Software.</span>
        </h2>
        <p style={{ color:'rgba(245,245,245,.65)', fontSize:17, maxWidth:700, margin:'0 auto 0', lineHeight:1.8 }}>
          We built what the enterprise platforms couldn&apos;t — one platform for a lawn company and every service its customers ask for. Route intelligence, chemical compliance, automated billing, role-based access, and a mobile app — priced for real businesses.
        </p>
      </div>

      {/* PENDING JOB BOARD */}
      <section>
        <div className="row">
          <div className="row-text">
            <span className="section-label">The Feature That Changes Everything</span>
            <h2 className="section-title">The Pending Job Board.<br />Your Business Brain.</h2>
            <p style={{ color:'rgba(245,245,245,.72)', fontSize:16, lineHeight:1.8, marginBottom:8 }}>No other field service software has this. A two-tier job system that separates scheduled work with assigned dates from your chemical &amp; maintenance waiting list — so you always know exactly what&apos;s ready and what&apos;s waiting.</p>
            <ul className="check-list">
              <li>Scheduled board: jobs with assigned dates, tech, and crew</li>
              <li>Waiting list: chemical treatments grouped by service type with sq ft totals</li>
              <li>Know your chemical needs before you load a single truck</li>
              <li>Schedule directly from the list or from the map</li>
              <li>Circle a geographic area and schedule all properties inside at once</li>
              <li>No other software gives you this two-tier view</li>
            </ul>
          </div>
          <div className="row-visual">
            <div style={{ color:'rgba(245,245,245,.65)', fontSize:11, textTransform:'uppercase', letterSpacing:1, marginBottom:14 }}>Waiting List — By Service Type</div>
            {[
              { label:'Lawn Care 4', sub:'47 properties waiting', badge:'384,200 ft²', cls:'green' },
              { label:'Mosquito Barrier', sub:'31 properties waiting', badge:'246,500 ft²', cls:'' },
              { label:'Pest Control', sub:'22 properties waiting', badge:'118,000 ft²', cls:'purple' },
              { label:'Irrigation Startup', sub:'15 properties waiting', badge:'42,300 ft²', cls:'green' },
            ].map(item => (
              <div key={item.label} className="mock-item">
                <div><div className="mock-label">{item.label}</div><div className="mock-sub">{item.sub}</div></div>
                <div className={`mock-badge ${item.cls}`}>{item.badge}</div>
              </div>
            ))}
            <div style={{ marginTop:14, background:'rgba(255,255,255,.06)', borderRadius:8, padding:'14px', textAlign:'center' }}>
              <div style={{ color:'#ff6a00', fontSize:15, fontWeight:700 }}>Know before you dial. Know before you mix.</div>
              <div style={{ color:'rgba(245,245,245,.65)', fontSize:12, marginTop:4 }}>No other software shows you this.</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" style={{ background:'#0a0a0a' }}>
        <div className="centered" style={{ maxWidth:1200, margin:'0 auto' }}>
          <span className="section-label">Built for Lawn Companies</span>
          <h2 className="section-title">Your Lawn Customers Buy More Than Lawn Care.</h2>
          <p className="section-sub">Run every service below from one account — scheduling, routes, repeat programs, estimates, billing, the crew app and the customer app. Only do one of these? It has its own dedicated BossPro app, linked on its card.</p>
        </div>
        <div className="industry-grid">
          {([["🌱","Lawn Care & Treatments","Fertilizer and weed control rounds that come due on their own, aeration and overseeding, chemical application records, and round-by-round billing.","SprayBossPro","https://spraybosspro.com"],
            ["🌾","Mowing","Weekly and every-other-week routes, auto-routing by closeness, season start and stop, rescheduling, and billing per cut or monthly.","MowBossPro","https://mowbosspro.com"],
            ["🌿","Landscaping","Mulch, beds, shrub trimming and sod quoted on estimates customers approve online, then scheduled to the right crew with photos and notes.","LandscapeBossPro","https://landscapebosspro.com"],
            ["🐛","Pest & Mosquito Control","Repeat treatments on a set number of days, barrier spray routes, chemical records, and season-long programs billed per visit or monthly.","PestBossPro","https://pestbosspro.com"],
            ["💧","Irrigation","Spring startups and fall winterizations on a waiting list, repair calls from estimates, and service notes kept on every property.","IrrigationBossPro","https://irrigationbosspro.com"],
            ["🌳","Tree Service","Trimming and removal quoted on estimates, approved online, then scheduled with crew notes and before/after photos.","TreeBossPro","https://treebosspro.com"],
            ["🐕","Pet Waste Removal","Weekly yard cleanups on fixed routes, auto-charged to the card on file, with on-the-way texts so the gate is open.","PoopBossPro","https://poopbosspro.com"],
            ["🏊","Pool Service","Weekly pool routes, openings and closings on a waiting list, service notes on each property, and monthly billing.","PoolBossPro","https://poolbosspro.com"],
            ["🍂","Leaf Removal & Cleanups","Fall and spring cleanups booked onto the same customers you already mow and treat, quoted on estimates and billed when done.",null,null],
            ["🏠","Gutter Cleaning","Gutter cleanings added to lawn customers each fall or spring, routed with the rest of the day and billed on completion.",null,null],
            ["💦","Pressure Washing","Driveways, walks and house washes sold to your lawn customers, quoted on estimates and scheduled into your routes.","PressureWashingBossPro","https://pressurewashingbosspro.com"],
            ["💡","Landscape Lighting","Lighting installs from approved estimates, plus yearly check-ups that come due on their own.",null,null],
            ["🗑️","Junk Removal","Yard debris and junk haul-offs booked from estimates and billed when the truck leaves.","JunkBossPro","https://junkbosspro.com"],
            ["❄️","Snow & Ice","Winter routes for the same customers, per-visit or seasonal billing, and on-the-way texts when the crew heads out.","SnowBossPro","https://snowbosspro.com"],
            ["🎄","Christmas Lights","Holiday light installs in the fall and takedowns in January, booked onto lawn customers and billed once or per visit.",null,null]] as (string | null)[][]).map(([icon,name,desc,app,url]) => (
            <div key={name as string} className="industry-card">
              <div style={{ fontSize:36, marginBottom:14 }}>{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
              {app && url ? <a href={url as string} target="_blank" rel="noopener" style={{ display:'inline-block', marginTop:10, color:'#ff6a00', fontSize:13, fontWeight:700, textDecoration:'none' }}>Only do this? See {app} &rarr;</a> : null}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background:'#111111' }}>
        <div className="centered" style={{ maxWidth:1100, margin:'0 auto' }}>
          <span className="section-label">Built Different</span>
          <h2 className="section-title">Powerful Software. Simple on Day One.</h2>
          <p className="section-sub">The big platforms take weeks to configure. IndustryBossPro is built so any owner can be running real jobs within hours of signing up.</p>
        </div>
        <div className="simple-grid">
          {[
            ['01','Set Up in One Afternoon','Add your services, import your clients, configure your alerts. Most businesses are scheduling live jobs on day one. No implementation fee, no onboarding call needed.'],
            ['02','One Board Runs Your Day','The Pending Job Board shows your scheduled jobs and your waiting list side by side. Your crew gets their stops on their phone. No switching between 6 apps.'],
            ['03','Techs Learn It in Minutes','The mobile view is built for people in trucks. Big buttons, clear stops, one tap to mark complete, log chemicals, or skip. No manual required.'],
            ['04','Automation Does the Rest','Set your alert templates once. IndustryBossPro texts your customers, follows up on estimates, chases invoices, and requests reviews — automatically, every time.'],
          ].map(([num,title,desc]) => (
            <div key={title} className="simple-card">
              <div className="simple-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULING DEEP DIVE */}
      <section>
        <div className="row reverse">
          <div className="row-text">
            <span className="section-label">Scheduling Intelligence</span>
            <h2 className="section-title">Know Exactly What You Have Waiting Before You Book a Single Stop</h2>
            <p style={{ color:'rgba(245,245,245,.72)', fontSize:16, lineHeight:1.8 }}>The waiting list is the feature that changes how you run your day. Instead of scheduling on gut feel, you see the exact sq ft waiting for every service type — so you know your chemical needs before you make a single call or mix a single gallon.</p>
            <ul className="check-list">
              <li>Waiting list grouped by service type with sq ft totals</li>
              <li>Schedule directly from the list or from the map</li>
              <li>Circle a geographic area and schedule all properties at once</li>
              <li>Assign date, tech, and truck at scheduling time</li>
              <li>Stops appear on the dispatch board with a full route map instantly</li>
              <li>Know your chemical needs for the day before you load a single truck</li>
            </ul>
          </div>
          <div className="row-visual">
            <div style={{ color:'rgba(245,245,245,.65)', fontSize:11, textTransform:'uppercase', letterSpacing:1, marginBottom:14 }}>Scheduled Board — Today</div>
            {[
              { label:'Snow Removal — Route A', sub:'Mike T. · 8 stops · 6am', badge:'Scheduled' },
              { label:'Lawn Mowing — Crew 2', sub:'4 stops · 8am start', badge:'Scheduled' },
              { label:'Pest Control — Davis', sub:'Tech: Sarah · 10am', badge:'Scheduled' },
              { label:'Pool Service — Route B', sub:'3 pools · PM route', badge:'Scheduled' },
            ].map(item => (
              <div key={item.label} className="mock-item">
                <div><div className="mock-label">{item.label}</div><div className="mock-sub">{item.sub}</div></div>
                <div className="mock-badge green">{item.badge}</div>
              </div>
            ))}
            <div style={{ marginTop:14, background:'rgba(255,255,255,.06)', borderRadius:8, padding:'14px', textAlign:'center' }}>
              <div style={{ color:'#ff6a00', fontSize:14, fontWeight:700 }}>Every crew. Every industry. One board.</div>
            </div>
          </div>
        </div>
      </section>

      {/* VS TABLE */}
      <div className="vs-band">
        <div className="vs-inner">
          <div className="centered" style={{ marginBottom:48 }}>
            <span className="section-label">How We Compare</span>
            <h2 className="section-title">Everything the Big Platforms Have.<br />None of the Price.</h2>
            <p className="section-sub" style={{ marginLeft:'auto', marginRight:'auto' }}>IndustryBossPro covers what lawn and outdoor companies use ServiceTitan and Jobber for — and adds features they don&apos;t have — at a fraction of the cost. And it runs a lawn company plus every service its customers buy, not just one.</p>
          </div>
          <table className="vs-table">
            <thead>
              <tr>
                <th><span style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)', whiteSpace:'nowrap' }}>Feature</span></th>
                <th className="ibp-col">IndustryBossPro</th>
                <th className="other-col">ServiceTitan / Jobber</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monthly Price','$59 – $199','$400–$800+'],
                ['Per-User Fees','✓ None','$50–$150/user'],
                ['Covers All Field Service Trades','✓ Yes','No — one trade'],
                ['Pending Job Board (Two-Tier)','✓ Yes','No'],
                ['Spray / Chemical Waiting List (Sq Ft)','✓ Yes','No'],
                ['Calendar View','✓ Yes','Yes'],
                ['List View','✓ Yes','No'],
                ['Dispatch View','✓ Yes','Limited'],
                ['Live Crew Tracking (Map)','✓ Yes','Add-on / Extra'],
                ['Auto Route (300 Included)','✓ Yes','Add-on'],
                ['Lasso / Circle-to-Schedule Map Tool','✓ Yes','No'],
                ['Chemical Compliance Reports','✓ Yes','Add-on / Extra'],
                ['Automated SMS Alerts (10+ types)','✓ Yes','Limited / Extra'],
                ['Two-Way SMS Inbox','✓ Yes','Add-on'],
                ['Card Payments Built In','✓ Yes','Yes'],
                ['Mobile App for Field Techs','✓ Yes','Yes'],
                ['Contracts Required','✓ None','Annual contracts'],
                ['Setup Time','✓ Same day','Weeks + fee'],
              ].map(([feat,ibp,comp]) => (
                <tr key={feat}>
                  <td>{feat}</td>
                  <td className="ibp-col">{ibp}</td>
                  <td className="other-col">{comp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features">
        <div className="centered" style={{ maxWidth:1200, margin:'0 auto' }}>
          <span className="section-label">Full Platform</span>
          <h2 className="section-title">Everything You Need. Nothing You Don&apos;t.</h2>
          <p className="section-sub" style={{ marginLeft:'auto', marginRight:'auto' }}>Three plans, same software - the bigger ones lift the limits and turn on the automation. Every feature below is on the $199 Crew plan; most are on all three.</p>
        </div>
        <div className="feat-grid">
          {[
            ['📋','Pending Job Board','Two-tier system — scheduled jobs with dates on one side, chemical/maintenance waiting list on the other.'],
            ['🗓️','Calendar View','See every job across every crew and every industry on one calendar. Filter by crew, service type, or date range.'],
            ['📝','List View','All jobs listed in order for the day. Map above shows the full route so crews know exactly where they\'re going before they leave.'],
            ['🚀','Dispatch View','Real-time dispatch board showing every crew, their current stop, and job status as it happens.'],
            ['📍','Live Crew Tracking','See every tech and truck on a live map in real time. Know exactly who is where, all day long.'],
            ['🤖','Auto Route','System sequences stops by geography automatically, cutting drive time and fitting more stops per crew per day.'],
            ['⭕','Lasso / Circle-to-Schedule','Draw a zone on the map, see every property and all sq ft inside, schedule them all at once.'],
            ['🧪','Chemical Compliance','Full application logs, license tracking, weather data, and state-inspector-ready compliance reports.'],
            ['⚗️','Daily Mix Calculator','See exactly how much of each mix every truck needs each morning — per-product amounts, and tank math that recalculates what\'s still needed from what\'s already mixed.'],
            ['💬','Two-Way SMS Inbox','Send and receive texts with customers directly in the platform. 10+ automated alert types included.'],
            ['💰','Estimates & Follow-Ups','Build, send, and auto-follow-up on estimates. Approved estimates convert to jobs automatically.'],
            ['💳','Card Payments','Card-on-file, post-service billing, partial payments, and automated payment reminders. Card or check/cash.'],
            ['📱','Mobile App for Techs','Stop list, chemical logging, photos, GPS clock-in, and status updates from any phone.'],
            ['👥','Employee Management','Time tracking, GPS clock-in, role-based access, and crew assignments.'],
            ['📦','Service Programs','Multi-treatment packages with renewal alerts and full treatment tracking. Round-based programs built in.'],
            ['🔔','Night Before Alerts','Automated SMS to customers the evening before their service. They know you\'re coming without you having to call.'],
            ['📍','On-Property Alerts','Customer gets a text the moment your tech arrives at their property. No guessing, no missed appointments.'],
            ['⭐','Review Requests','Automated Google review requests after every completed service — running without you.'],
            ['🔧','Custom Fields','Add any field to any record — fully customizable for your operation.'],
            ['👑','Role-Based Access','Owner, Manager, Office, Tech, and Mobile roles with granular permissions across every module.'],
            ['📊','Admin Dashboard','Full business overview — revenue, jobs, staff, and performance at a glance.'],
            ['📞','AI Receptionist','A human-sounding AI answers your phone 24/7, knows your customers, books and reschedules, and takes new leads. 29¢ a minute, only when it answers.'],
            ['⭐','Tech Reviews & Tips','After every job, customers rate the tech who did it and can leave a tip. Every tip is tracked per employee.'],
            ['🎯','Crew Bonuses & Splits','Set bonus goals by gross, jobs or rating. Give drivers a bigger share. Techs see “You’re $200 away from your bonus” in the crew app.'],
            ['💸','One-Click Payroll','Hours and overtime from the time clock, plus tips and bonuses, ready for Gusto, QuickBooks, ADP or Paychex. By hand or on a schedule.'],
            ['👋','Meet Your Tech','Customers see who is coming before the visit, with a photo, star rating, reviews and an “about me.”'],
            ['🔗','Zapier & Make','Connect IndustryBossPro to thousands of apps like Google Sheets, Mailchimp and Slack with instant webhooks and an API key.'],
            ['📱','Social Inbox (Soon)','Facebook and Instagram messages, comments and lead forms plus Google reviews in one inbox, and post to all of them plus TikTok. Launching soon.'],
            ['⚡','Fast Setup','Trucks, crew, products, services, pricing and packages in about 10 minutes. Upload what you already have.'],
            ['🌐','Free Website','A 200–300 page website built for Google, with a free domain. Every form goes straight into IndustryBossPro as a new lead.'],
            ['🎨','Make It Yours','Pick any colors for your software and choose exactly what shows in your sidebar, in any order.'],
            ['📝','Estimates from the Field','Techs write and send estimates from the crew app on the spot, even with no signal.'],
            ['🔒','Your Data Is Yours','Never sold, never shared. Export anytime. Bigger companies get a signed data protection agreement.'],
          ].map(([icon,title,desc]) => (
            <div key={title} className="feat-card">
              <span className="feat-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CUSTOMER APP ═══ */}
      <section style={{background:'linear-gradient(135deg,#1c0a33,#12061f)'}}>
        <div className="centered" style={{maxWidth:'1100px', margin:'0 auto'}}>
          <span className="section-label">Your Customers Get an App, Too</span>
          <h2 className="section-title" style={{color:'#fff'}}>Give Every Customer Their Own App —<br />And You Decide What They See.</h2>
          <p className="section-sub" style={{color:'rgba(255,255,255,.7)'}}>Most software this powerful stops at you and your crew. IndustryBossPro gives your customers their own branded app they install right on their phone — no app store, no password, just a secure text-link login. It&apos;s the kind of thing platforms charging 5× more don&apos;t even offer.</p>
        </div>
        <div style={{maxWidth:'1000px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'14px 40px'}}>
          {[
            'See upcoming visits and full history — what was done, tech notes, and before/after photos',
            'View and pay invoices right from their phone — card on file, one-tap Pay Now',
            'Sign up for new services with live pricing figured from their own property — and see what they already have',
            'Update their card, reschedule or skip a visit, contact you, or refer a friend',
            'Get alerts their way — text, email, or app pop-up — and pick which ones they receive',
            'Leave a review — or a private “Rate Us” that sends only your happy customers to Google & Facebook',
          ].map((t, i) => (
            <div key={i} style={{display:'flex', gap:'10px', alignItems:'flex-start', color:'rgba(255,255,255,.82)', fontSize:'15px', lineHeight:1.6}}>
              <span style={{color:'var(--orange)', fontWeight:800, flexShrink:0}}>✓</span><span>{t}</span>
            </div>
          ))}
        </div>
        <p style={{maxWidth:'900px', margin:'34px auto 0', textAlign:'center', color:'#fff', fontSize:'19px', fontWeight:700, lineHeight:1.5}}>You choose exactly what each customer can see — flip any feature on or off with a single switch.</p>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background:'#0a0a0a' }}>
        <div className="centered" style={{ maxWidth:580, margin:'0 auto 48px' }}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Pick the size you actually are.</h2>
          <p className="section-sub" style={{ marginLeft:'auto', marginRight:'auto' }}>We were paying $600/month for software that covered one trade and still didn&apos;t fit the way we worked. We built the pricing we always wished existed.</p>
        </div>
        <div className="price-card">
          <div className="price-badge">Three Plans — Pick Your Size</div>
          <div style={{ fontSize:13, fontWeight:700, color:'rgba(245,245,245,.70)', textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>IndustryBossPro</div>
          <div className="price-amount"><sup>$</sup>59</div>
          <div className="price-period">per month to start · Pro $89 · Crew $199 · cancel anytime · no contracts</div>

          {/* Only what is true on every plan. What scales by plan is spelled out below. */}
          <ul className="price-includes">
            {['Unlimited Clients & Properties','Waiting List (Spray Applications)','All 9 Industries Covered','Pending Job Board','Package Plans & Recurring Services','Estimates & Invoices','Built-In Card Payments','Mobile App','Client App for Customers','Live Crew Tracking','Calendar & Dispatch Views','Free Onboarding'].map(li => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p style={{ color:'rgba(245,245,245,.65)', fontSize:13, lineHeight:1.7, marginBottom:18 }}>
            Scales by plan: <b style={{ color:'#fff' }}>users</b> 2 / 3 / Unlimited &middot; <b style={{ color:'#fff' }}>trucks</b> 1 / 2 / Unlimited &middot; <b style={{ color:'#fff' }}>texts</b> 500 / 1,000 / 2,000 a month, sent and received (US &amp; Canada). <b style={{ color:'#ff6a00' }}>500 extra texts for $15</b> on any plan &middot; <b style={{ color:'#fff' }}>auto-routes</b> 50 / 100 / 1,000 a month, <b style={{ color:'#ff6a00' }}>250 extra for $5</b>.
          </p>
          <button onClick={openModal} className="btn-primary" style={{ width:'100%', fontSize:16, padding:16 }}>
            Start Your 14-Day Free Trial
          </button>
          <p style={{ textAlign:'center', color:'rgba(245,245,245,.65)', fontSize:13, marginTop:14 }}>No credit card required &middot; 14-day free trial &middot; <b style={{ color:'#fff' }}>from $59/mo</b> after &middot; No contracts.</p>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Stop Duct-Taping Together<br /><span style={{ color:'#ff6a00' }}>Five Different Software Tools.</span></h2>
        <p>IndustryBossPro is built for businesses that do it all — snow, landscape, irrigation, lawn, pest, and everything in between. One platform. One price. Try it free for 14 days.</p>
        <div className="hero-btns" style={{ justifyContent:'center' }}>
          <button onClick={openModal} className="btn-primary" style={{ fontSize:17, padding:'18px 48px' }}>Start Free — No Card Required</button>
        </div>
      </div>

      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-cols">
            <div style={{ maxWidth:280 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                <span style={{ fontSize:17, fontWeight:800, color:'#f5f5f5' }}>IndustryBoss<span style={{ color:'#ff6a00' }}>Pro</span></span>
              </div>
              <p style={{ color:'rgba(245,245,245,.70)', fontSize:13, lineHeight:1.7 }}>The all-in-one platform for lawn companies and every service their customers buy — treatments, mowing, landscaping, pest, irrigation, snow and more. One dashboard, one price.</p>
              <a href="tel:+16828997304" style={{ display:'inline-block', marginTop:16, color:'#ff6a00', fontSize:16, fontWeight:800, textDecoration:'none' }}>&#9742;&nbsp;(682) 899-7304</a>
            </div>
            {[
              { title:'Product', links:[{label:'Features',href:'/features'},{label:'BossPro Family',href:'/bosspro-family'},{label:'Pricing',href:'/pricing'},{label:'Login',href:'https://my.industrybosspro.com'},{label:'Start Free Trial',href:'/pricing'}] },
              { title:'Industries', links:[{label:'Snow & Ice',href:'/snow-removal-software'},{label:'Landscaping',href:'/landscaping-software'},{label:'Irrigation',href:'/irrigation-software'},{label:'Lawn Care',href:'/lawn-care-software'},{label:'Pest Control',href:'/pest-control-software'}] },
              { title:'Company', links:[{label:'Terms of Service',href:'/terms'},{label:'Privacy Policy',href:'/privacy'},{label:'Contact Us',href:'mailto:Support@bossprohq.com'}] },
              { title:'Blog', links:[{label:'All Articles',href:'/blog'},{label:'Snow Removal',href:'/blog/snow-removal'},{label:'Landscaping',href:'/blog/landscaping'},{label:'Irrigation',href:'/blog/irrigation'},{label:'Lawn Care',href:'/blog/lawn-care'}] },
              { title:'BossPro Family', links:[{label:'SprayBossPro',href:'https://spraybosspro.com'},{label:'LandscapeBossPro',href:'https://landscapebosspro.com'},{label:'MowBossPro',href:'https://mowbosspro.com'},{label:'PoolBossPro',href:'https://poolbosspro.com'},{label:'FenceBossPro',href:'https://fencebosspro.com'},{label:'IrrigationBossPro',href:'https://irrigationbosspro.com'},{label:'PoopBossPro',href:'https://poopbosspro.com'},{label:'SepticBossPro',href:'https://septicbosspro.com'},{label:'TreeBossPro',href:'https://treebosspro.com'},{label:'SnowBossPro',href:'https://snowbosspro.com'},{label:'IceBossPro',href:'https://icebosspro.com'},{label:'TowingBossPro',href:'https://towingbosspro.com'},{label:'DumpsterBossPro',href:'https://dumpsterbosspro.com'},{label:'PortaPottyBossPro',href:'https://portapottybosspro.com'},{label:'TrashCanBossPro',href:'https://trashcanbosspro.com'},{label:'WindowBossPro',href:'https://windowbosspro.com'},{label:'SolarCleaningBossPro',href:'https://solarcleaningbosspro.com'},{label:'HVACBossPro',href:'https://hvacbosspro.com'},{label:'PlumbingBossPro',href:'https://plumbingbosspro.com'},{label:'PressureWashingBossPro',href:'https://pressurewashingbosspro.com'},{label:'MaidBossPro',href:'https://maidbosspro.com'},{label:'PestBossPro',href:'https://pestbosspro.com'},{label:'ElectricalBossPro',href:'https://electricalbosspro.com'},{label:'JunkBossPro',href:'https://junkbosspro.com'},{label:'CarpetBossPro',href:'https://carpetbosspro.com'},{label:'GarageDoorBossPro',href:'https://garagedoorbosspro.com'},{label:'PetGroomBossPro',href:'https://petgroombosspro.com'}] },
            ].map(col => (
              <div key={col.title}>
                <h3 style={{ color:'#fff', fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:1, marginBottom:16 }}>{col.title}</h3>
                <ul style={{ listStyle:'none' }}>
                  {col.links.map(link => (
                    <li key={link.label} style={{ marginBottom:10 }}>
                      <a href={link.href} style={{ color:'rgba(245,245,245,.70)', fontSize:14, textDecoration:'none' }}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop:'1px solid #e63000', paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
            <p style={{ color:'rgba(245,245,245,.70)', fontSize:13 }}>© {new Date().getFullYear()} IndustryBossPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {modal && <HomeTrialModal onClose={() => setModal(false)} />}
    </>
  );
}
