'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SiteHeader from '../components/SiteHeader';
import HeroDemo from '../components/HeroDemo';
import PlanCompare from '../components/PlanCompare';

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
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <HeroDemo />
        </div>
      </div>

      {/* Plans, directly under the demo. Someone who has just used the software asks what it
          costs next, and the answer should not be a scroll away. */}
      <PlanCompare />

      {/* HERO */}
      <div className="hero" style={{ paddingTop: 52 }}>
        <div className="hero-badge">Built for Every Field Service Industry · Since Day One</div>
        <h1>One Platform.<br /><span>Every Industry.</span><br />Zero Compromises.</h1>
        <div className="hero-sub">
          Snow removal, pool service, landscaping, irrigation, lawn care, pest control, mosquito control, fence, mowing, pet waste removal, garage door, carpet cleaning, fire inspection, and hood cleaning — IndustryBossPro runs them all from a single dashboard. The most powerful pending job board in field service.
        </div>
        <div className="hero-btns">
          <button onClick={openModal} className="btn-primary">Start Free — 14 Days, No Card</button>
          <a href="#features" className="btn-ghost">See All Features →</a>
        </div>
        <p style={{ textAlign:'center', color:'rgba(245,245,245,.72)', fontSize:15, fontWeight:600, marginTop:18 }}>No credit card required &middot; 14-day free trial &middot; <b style={{ color:'#ff6a00' }}>from $49/mo</b> after &middot; <b style={{ color:'#ff6a00' }}>demo needs no signup</b></p>
        <div className="hero-proof">
          <div className="proof-item"><div className="proof-val">$49</div><div className="proof-lbl">To Start</div></div>
          <div className="proof-item"><div className="proof-val">Unlimited</div><div className="proof-lbl">Clients &amp; Properties</div></div>
          <div className="proof-item"><div className="proof-val">14</div><div className="proof-lbl">Industries. One Platform.</div></div>
          <div className="proof-item"><div className="proof-val">14 Days</div><div className="proof-lbl">Free Trial, No Card Required</div></div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <span className="trust-label">All Industries Covered</span>
          {[['❄️','Snow & Ice'],['🏊','Pool Service'],['🌿','Landscaping'],['💧','Irrigation'],['🌱','Lawn Care'],['🐛','Pest Control'],['🦟','Mosquito Control'],['🏗️','Fence'],['🌾','Mowing'],['💩','Pet Waste'],['🚪','Garage Door'],['🧽','Carpet Cleaning'],['🧯','Fire Inspection'],['🍳','Hood Cleaning']].map(([icon,name]) => (
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
          We built what the enterprise platforms couldn&apos;t — one platform for every field service trade. Route intelligence, chemical compliance, automated billing, role-based access, and a mobile app — priced for real businesses.
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
          <span className="section-label">Built for Your Industry</span>
          <h2 className="section-title">One Software. Every Season. Every Service.</h2>
          <p className="section-sub">Every industry below is fully supported — not just partially. Scheduling, billing, compliance, and mobile app built for each trade.</p>
        </div>
        <div className="industry-grid">
          {[
            ['❄️','Snow & Ice Management','Route scheduling, per-push vs seasonal contracts, salt tracking, trigger alerts, event logging, and client snow reports.'],
            ['🏊','Pool Service','Route-based pool maintenance, chemical dose tracking, equipment service history, filter logs, and seasonal opening/closing.'],
            ['🌿','Landscaping','Crew scheduling, job site notes, photo documentation, package programs, estimate follow-ups, and automated billing.'],
            ['💧','Irrigation','Startup and winterization waiting lists, zone documentation, backflow tracking, service history, and seasonal scheduling.'],
            ['🌱','Lawn Care & Treatments','Sq ft waiting lists, chemical application logs, pesticide compliance reports, round tracking, and treatment follow-up.'],
            ['🐛','Pest Control','Service frequency management, chemical logs, technician license tracking, completion alerts, and customer service reports.'],
            ['🦟','Mosquito Control','Barrier spray route management, season-long subscription billing, re-treatment scheduling, and automated reminders.'],
            ['🏗️','Fence Installation','Estimate-to-install workflows, material tracking, job phase management, permit documentation, and follow-up programs.'],
            ['🌾','Lawn Mowing','Recurring mowing routes, cut frequency management, seasonal start/stop, rain-delay rescheduling, and automated billing.'],
            ['💩','Pet Waste Removal','Weekly and bi-weekly recurring routes, auto-billing, on-property arrival alerts, night-before reminders, and customer communication — all automated.'],
            ['🚪','Garage Door Service','Estimate-to-install scheduling, spring & opener repair tracking, parts inventory, service agreements, and automated maintenance reminders.'],
            ['🧽','Carpet Cleaning','Route-based job scheduling, room & sq-ft job details, before/after photos, recurring cleaning plans, and automated invoicing.'],
            ['🧯','Fire Inspection','Recurring inspection scheduling, code-compliance reporting, deficiency tracking, certificate management, and automated renewal reminders.'],
            ['🍳','Hood Cleaning','NFPA-compliant cleaning schedules, before/after photos, certificate & sticker tracking, frequency management, and automated reminders.'],
          ].map(([icon,name,desc]) => (
            <div key={name} className="industry-card">
              <div style={{ fontSize:36, marginBottom:14 }}>{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
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
            <p className="section-sub" style={{ marginLeft:'auto', marginRight:'auto' }}>IndustryBossPro does everything ServiceTitan and Jobber do — and adds features they don&apos;t have — at a fraction of the cost. And it covers every field service trade, not just one.</p>
          </div>
          <table className="vs-table">
            <thead>
              <tr>
                <th></th>
                <th className="ibp-col">IndustryBossPro</th>
                <th className="other-col">ServiceTitan / Jobber</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monthly Price','$49 – $199','$400–$800+'],
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
          <div className="price-amount"><sup>$</sup>49</div>
          <div className="price-period">per month to start · Pro $89 · Crew $199 · cancel anytime · no contracts</div>

          {/* Only what is true on every plan. What scales by plan is spelled out below. */}
          <ul className="price-includes">
            {['Unlimited Clients & Properties','Waiting List (Spray Applications)','All 14 Industries Covered','Pending Job Board','Package Plans & Recurring Services','Estimates & Invoices','Card Payments (Stripe)','Mobile App','Client App for Customers','Live Crew Tracking','Calendar & Dispatch Views','Free Onboarding'].map(li => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p style={{ color:'rgba(245,245,245,.65)', fontSize:13, lineHeight:1.7, marginBottom:18 }}>
            Scales by plan: <b style={{ color:'#fff' }}>users</b> 2 / 3 / Unlimited &middot; <b style={{ color:'#fff' }}>trucks</b> 1 / 2 / Unlimited &middot; <b style={{ color:'#fff' }}>outbound texts</b> 100 / 500 / 1,000 a month. Inbound replies are always free. <b style={{ color:'#ff6a00' }}>500 extra outbound texts for $15</b> on any plan.
          </p>
          <button onClick={openModal} className="btn-primary" style={{ width:'100%', fontSize:16, padding:16 }}>
            Start Your 14-Day Free Trial
          </button>
          <p style={{ textAlign:'center', color:'rgba(245,245,245,.65)', fontSize:13, marginTop:14 }}>No credit card required &middot; 14-day free trial &middot; <b style={{ color:'#fff' }}>from $49/mo</b> after &middot; No contracts.</p>
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
              <p style={{ color:'rgba(245,245,245,.70)', fontSize:13, lineHeight:1.7 }}>The all-in-one field service platform built for businesses that run every trade. Snow, landscape, irrigation, lawn care, pest control — one dashboard, one price.</p>
              <a href="tel:+16828997304" style={{ display:'inline-block', marginTop:16, color:'#ff6a00', fontSize:16, fontWeight:800, textDecoration:'none' }}>&#9742;&nbsp;(682) 899-7304</a>
            </div>
            {[
              { title:'Product', links:[{label:'Features',href:'/features'},{label:'BossPro Family',href:'/bosspro-family'},{label:'Pricing',href:'/pricing'},{label:'Login',href:'https://my.industrybosspro.com'},{label:'Start Free Trial',href:'/pricing'}] },
              { title:'Industries', links:[{label:'Snow & Ice',href:'/snow-removal-software'},{label:'Landscaping',href:'/landscaping-software'},{label:'Irrigation',href:'/irrigation-software'},{label:'Lawn Care',href:'/lawn-care-software'},{label:'Pest Control',href:'/pest-control-software'}] },
              { title:'Company', links:[{label:'Terms of Service',href:'/terms'},{label:'Privacy Policy',href:'/privacy'},{label:'Contact Us',href:'mailto:Support@bossprohq.com'}] },
              { title:'Blog', links:[{label:'All Articles',href:'/blog'},{label:'Snow Removal',href:'/blog/snow-removal'},{label:'Landscaping',href:'/blog/landscaping'},{label:'Irrigation',href:'/blog/irrigation'},{label:'Lawn Care',href:'/blog/lawn-care'}] },
              { title:'BossPro Family', links:[{label:'SprayBossPro',href:'https://spraybosspro.com'},{label:'LandscapeBossPro',href:'https://landscapebosspro.com'},{label:'MowBossPro',href:'https://mowbosspro.com'},{label:'PoolBossPro',href:'https://poolbosspro.com'},{label:'FenceBossPro',href:'https://fencebosspro.com'},{label:'IrrigationBossPro',href:'https://irrigationbosspro.com'},{label:'PoopBossPro',href:'https://poopbosspro.com'}] },
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
