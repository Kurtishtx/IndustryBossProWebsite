'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import HeroDemo from '../../components/HeroDemo';
import PlanCompare from '../../components/PlanCompare';
import { CANADA_FEATURES, CANADA_FAQS } from './canada-data';

const HomeTrialModal = dynamic(() => import('../../components/HomeTrialModal'), { ssr: false });

/* Long-form Canada landing page, structured like the homepage: demo up top, then deep sections.
   The angle the whole page hangs on: most Canadian field service companies are really TWO
   businesses in one — summer services May–October, snow and ice November–April — and
   IndustryBossPro being multi-vertical means one platform carries both halves of the year. */

export default function CanadaPageClient() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);

  return (
    <>
      <SiteHeader onOpenModal={openModal} />

      <main>
      {/* ═══ PRICE + LIVE DEMO AT THE TOP OF THE FOLD ═══
          Same reasoning as the homepage: the first screen is the whole decision. Price, trial
          terms, and the running product go first; the argument reads underneath. */}
      <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 55%, #1a1a1a 100%)', padding: 'clamp(80px,8vw,96px) clamp(14px,4vw,24px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(20px,3vw,30px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', justifyContent: 'center', color: '#fff' }}>
              <span style={{ fontSize: 'clamp(30px,4.6vw,46px)', fontWeight: 800, lineHeight: 1 }}>$59<span style={{ fontSize: '.46em', fontWeight: 700, color: 'rgba(245,245,245,.6)' }}> USD/month</span></span>
              <span style={{ fontSize: 'clamp(16px,2.2vw,22px)', fontWeight: 800, color: '#ff6a00' }}>&middot; 14-Day Free Trial</span>
            </div>
            <div style={{ color: 'rgba(245,245,245,.6)', fontSize: 13, fontWeight: 600, marginTop: 7, letterSpacing: '.3px' }}>No credit card required &middot; Your customers are invoiced in CAD</div>
          </div>
          <HeroDemo />
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <div className="hero" style={{ paddingTop: 52 }}>
        <div className="hero-badge">🇨🇦 For Canadian Field Service Companies · CAD Invoicing Built In</div>
        <h1>Field Service Software<br /><span>For Canada</span></h1>
        <div className="hero-sub">
          A lot of Canadian companies are really two businesses wearing one uniform — lawn, landscape and exterior work from May to October, then plows and salt from November to April. IndustryBossPro is multi-vertical, so <b>one platform carries both halves of your year</b>: the same customers, the same crew app, the same invoices in Canadian dollars. Nobody re-enters 400 clients when the leaves come down.
        </div>
        <div className="hero-btns">
          <button onClick={openModal} className="btn-primary">Start Free — 14 Days, No Card</button>
          <a href="https://my.industrybosspro.com/demo.html" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,.22)' }} />
            Try the Live Demo
          </a>
        </div>
        <p style={{ textAlign: 'center', color: 'rgba(245,245,245,.72)', fontSize: 15, fontWeight: 600, marginTop: 18 }}>No credit card required &middot; 14-day free trial &middot; <b style={{ color: '#ff6a00' }}>from $59 USD/mo</b> after &middot; <b style={{ color: '#ff6a00' }}>demo needs no signup</b></p>
        <div className="hero-proof">
          <div className="proof-item"><div className="proof-val">CAD</div><div className="proof-lbl">Customer Invoicing, Native</div></div>
          <div className="proof-item"><div className="proof-val">May–April</div><div className="proof-lbl">Summer &amp; Winter, One Login</div></div>
          <div className="proof-item"><div className="proof-val">Unlimited</div><div className="proof-lbl">Clients &amp; Properties</div></div>
          <div className="proof-item"><div className="proof-val">14 Days</div><div className="proof-lbl">Free Trial, No Card</div></div>
        </div>
      </div>

      {/* ═══ TRUST BAR — the trades a Canadian year is made of ═══ */}
      <div className="trust-bar">
        <div className="trust-inner">
          <span className="trust-label">One Canadian Year, Covered</span>
          {[['❄️','Snow & Ice'],['🌿','Landscaping'],['🌾','Mowing'],['🌱','Lawn Care'],['💧','Irrigation'],['🐛','Pest Control'],['🦟','Mosquito Control'],['🏊','Pool Service'],['🏗️','Fence']].map(([icon, name]) => (
            <div key={name} className="trust-item"><span>{icon}</span><span>{name}</span></div>
          ))}
        </div>
      </div>

      {/* ═══ SEASONAL WHIPLASH — the signature Canada section ═══ */}
      <section style={{ background: '#0a0a0a' }}>
        <div className="row">
          <div className="row-text">
            <span className="section-label">The Canadian Reality</span>
            <h2 className="section-title">Two Businesses.<br />One Platform.</h2>
            <p style={{ color: 'rgba(245,245,245,.72)', fontSize: 16, lineHeight: 1.8, marginBottom: 8 }}>
              Single-trade software forces a choice every Canadian operator knows too well: run the summer book in one system and the winter book in another, or shoehorn snow contracts into a lawn platform that has never heard of a per-push billing model. Both roads end in double data entry and a fall week lost to admin.
            </p>
            <ul className="check-list">
              <li>The same client record holds a mowing schedule and a snow contract</li>
              <li>Per-service recurrence — weekly cuts in July, event response in January</li>
              <li>Crews use the same app in a heat wave and in a whiteout</li>
              <li>Billing never changes systems — every invoice in CAD, year round</li>
              <li>Your service history survives the seasons instead of splitting across two tools</li>
              <li>No second subscription for the winter half of your revenue</li>
            </ul>
          </div>
          <div className="row-visual">
            <div style={{ color: 'rgba(245,245,245,.65)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>One Property — Both Seasons</div>
            {[
              { label: 'Weekly Mowing', sub: 'May – October · recurring route', badge: 'Summer', cls: 'green' },
              { label: 'Fertilization Program', sub: '5 rounds · waiting list by sq ft', badge: 'Summer', cls: 'green' },
              { label: 'Fall Cleanup', sub: 'One-time · estimate approved', badge: 'Fall', cls: '' },
              { label: 'Snow & Ice Contract', sub: 'November – April · per-event', badge: 'Winter', cls: 'purple' },
            ].map(item => (
              <div key={item.label} className="mock-item">
                <div><div className="mock-label">{item.label}</div><div className="mock-sub">{item.sub}</div></div>
                <div className={`mock-badge ${item.cls}`}>{item.badge}</div>
              </div>
            ))}
            <div style={{ marginTop: 14, background: 'rgba(255,255,255,.06)', borderRadius: 8, padding: '14px', textAlign: 'center' }}>
              <div style={{ color: '#ff6a00', fontSize: 14, fontWeight: 700 }}>Same client. Same crew app. Same invoice thread.</div>
              <div style={{ color: 'rgba(245,245,245,.65)', fontSize: 12, marginTop: 4 }}>The season turns; the software just keeps going.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAD BILLING DEEP DIVE ═══ */}
      <section style={{ background: '#111111' }}>
        <div className="row reverse">
          <div className="row-text">
            <span className="section-label">Canadian Dollars, Natively</span>
            <h2 className="section-title">Your Customers Never See a USD Invoice</h2>
            <p style={{ color: 'rgba(245,245,245,.72)', fontSize: 16, lineHeight: 1.8 }}>
              This is where most US platforms quietly fall apart in Canada. In IndustryBossPro, currency is a company setting, not a workaround: choose Canada on the Company Info page, connect your own Canadian Stripe account, and everything your customers touch bills in CAD from that moment on.
            </p>
            <ul className="check-list">
              <li>Every invoice goes out in Canadian dollars</li>
              <li>Card-on-file charges run in CAD through your own Canadian Stripe account</li>
              <li>Pay Now links and the customer app both show CAD</li>
              <li>Automated payment reminders chase unpaid invoices for you</li>
              <li>Estimates convert to jobs, jobs convert to invoices — nothing retyped</li>
              <li>Accept e-transfer, cheque or cash and log it against the same invoice</li>
            </ul>
          </div>
          <div className="row-visual">
            <div style={{ color: 'rgba(245,245,245,.65)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Billing — Country: Canada</div>
            {[
              { label: 'Invoice #1847 — $146.90 CAD', sub: 'Sent on job completion · email + app', badge: 'Sent' },
              { label: 'Card on file charged', sub: 'Your Canadian Stripe account', badge: 'Paid', cls: 'green' },
              { label: 'Pay Now link — $210.00 CAD', sub: 'One tap from the customer app', badge: 'Open' },
              { label: 'Payment reminder', sub: 'Automatic follow-up · no chasing', badge: 'Auto', cls: 'purple' },
            ].map(item => (
              <div key={item.label} className="mock-item">
                <div><div className="mock-label">{item.label}</div><div className="mock-sub">{item.sub}</div></div>
                <div className={`mock-badge ${item.cls ?? ''}`}>{item.badge}</div>
              </div>
            ))}
            <div style={{ marginTop: 14, background: 'rgba(255,255,255,.06)', borderRadius: 8, padding: '14px', textAlign: 'center' }}>
              <div style={{ color: '#ff6a00', fontSize: 14, fontWeight: 700 }}>Plain Canadian dollars on every statement.</div>
              <div style={{ color: 'rgba(245,245,245,.65)', fontSize: 12, marginTop: 4 }}>No conversion complaints. No awkward phone calls.</div>
            </div>
          </div>
        </div>

        {/* Real product screenshot — an actual Stripe payment page generated by the platform for a
            Canada-set company. Uncropped and unedited; the caption claims only what it shows. */}
        <figure style={{ maxWidth: 900, margin: '64px auto 0', textAlign: 'center' }}>
          <img
            src="/cad-checkout.png"
            width={1366}
            height={950}
            loading="lazy"
            decoding="async"
            alt="Stripe checkout page reading Hamann Lawn Care — Invoice #459, CA$9.74, with card fields and a Pay button"
            style={{ width: '100%', height: 'auto', borderRadius: 14, border: '1px solid #e63000', boxShadow: '0 24px 60px rgba(0,0,0,.5)', display: 'block', background: '#fff' }}
          />
          <figcaption style={{ color: 'rgba(245,245,245,.65)', fontSize: 13.5, lineHeight: 1.6, marginTop: 16, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            A real payment page from the platform — a Canada-set company&apos;s customer pays in Canadian dollars. (The founder&apos;s own company.)
          </figcaption>
        </figure>
      </section>

      {/* ═══ ROUTING & SCHEDULING DEEP DIVE ═══ */}
      <section>
        <div className="row">
          <div className="row-text">
            <span className="section-label">Routing &amp; Scheduling</span>
            <h2 className="section-title">Routes That Fit Canadian Streets — Dense or an Hour Apart</h2>
            <p style={{ color: 'rgba(245,245,245,.72)', fontSize: 16, lineHeight: 1.8 }}>
              A tight suburban grid and a rural run where stops sit twenty minutes apart are different problems, and Canadian companies usually have both. Build routes on a live map, let auto-routing sequence the stops by geography, and watch your crews move through the day in real time.
            </p>
            <ul className="check-list">
              <li>Full map-based route building across Canada</li>
              <li>Auto-routing sequences stops in drive order to cut windshield time</li>
              <li>Draw a circle around a neighbourhood and schedule everything inside it</li>
              <li>Waiting list grouped by service type with square-footage totals</li>
              <li>Live crew tracking — every truck on a map, all day, no GPS hardware</li>
              <li>Calendar, list, and dispatch views of the same day</li>
            </ul>
          </div>
          <div className="row-visual">
            <div style={{ color: 'rgba(245,245,245,.65)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Dispatch — Tuesday</div>
            {[
              { label: 'Crew 1 — North Route', sub: '14 stops · in drive order · stop 6 of 14', badge: 'On Route', cls: 'green' },
              { label: 'Crew 2 — Rural Run', sub: '7 stops · 68 km · stop 2 of 7', badge: 'On Route', cls: 'green' },
              { label: 'Lawn Program — Waiting', sub: '38 properties · 296,400 ft²', badge: 'Waiting' },
              { label: 'Circle-to-Schedule', sub: 'Drew a zone · 12 properties selected', badge: 'Ready', cls: 'purple' },
            ].map(item => (
              <div key={item.label} className="mock-item">
                <div><div className="mock-label">{item.label}</div><div className="mock-sub">{item.sub}</div></div>
                <div className={`mock-badge ${item.cls ?? ''}`}>{item.badge}</div>
              </div>
            ))}
            <div style={{ marginTop: 14, background: 'rgba(255,255,255,.06)', borderRadius: 8, padding: '14px', textAlign: 'center' }}>
              <div style={{ color: '#ff6a00', fontSize: 14, fontWeight: 700 }}>More stops per crew per day. Less driving between them.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE CARDS — built for the Canadian year ═══ */}
      <section style={{ background: '#0a0a0a' }}>
        <div className="centered" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">Built for the Canadian Year</span>
          <h2 className="section-title">What Working in Canada Actually Requires</h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Not a US product with the spelling changed — the parts of the platform that matter most north of the border, and how each one behaves when your country is set to Canada.</p>
        </div>
        <div className="feat-grid">
          {CANADA_FEATURES.map(f => (
            <div key={f.title} className="feat-card">
              <span className="feat-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CREW APP + CUSTOMER APP ═══ */}
      <section style={{ background: '#111111' }}>
        <div className="centered" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span className="section-label">Two Apps Included</span>
          <h2 className="section-title">Your Crew Gets an App. So Do Your Customers.</h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Both ship with the platform, both work anywhere in Canada, and both are in the live demo at the top of this page — flip the picker and try them.</p>
        </div>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '14px 40px' }}>
          {[
            'Crew: today’s stop list with property notes, gate codes, and navigation',
            'Crew: one tap to mark complete, log materials, or upload before/after photos',
            'Crew: works the same on a July mowing route and a 4 a.m. snow run',
            'Customers: see upcoming visits, full service history, and tech notes',
            'Customers: view and pay invoices from their phone — in Canadian dollars',
            'Customers: pick their own alerts — email, app pop-up, or text once texting is set up',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'rgba(245,245,245,.82)', fontSize: 15, lineHeight: 1.6 }}>
              <span style={{ color: '#ff6a00', fontWeight: 800, flexShrink: 0 }}>✓</span><span>{t}</span>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: 900, margin: '34px auto 0', textAlign: 'center', color: '#fff', fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>A stop your crew finishes shows up in the office and on the customer&apos;s phone — one backend, three views of it.</p>
      </section>

      {/* ═══ THE CANADA TEST — comparison framing ═══ */}
      <div className="vs-band" style={{ background: '#0a0a0a' }}>
        <div className="vs-inner">
          <div className="centered" style={{ marginBottom: 48 }}>
            <span className="section-label">The Canada Test</span>
            <h2 className="section-title">Questions to Ask Any Field Service Platform<br />Before You Move Your Book Into It</h2>
            <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Most field service software is built for a US company running one trade in one season. Here is how the answers usually come back.</p>
          </div>
          <table className="vs-table">
            <thead>
              <tr>
                <th></th>
                <th className="ibp-col">IndustryBossPro</th>
                <th className="other-col">Typical US Platform</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Customer invoices in CAD', '✓ Native — a country setting', 'Workarounds, or USD'],
                ['Summer + winter in one system', '✓ Yes — multi-vertical', 'Second product or plugin'],
                ['See the software before buying', '✓ Live demo on this page', 'Book a sales call'],
                ['Free trial', '✓ 14 days, no card', 'Card up front, or none'],
                ['Contracts', '✓ Month-to-month', 'Annual, often'],
                ['Price', '$59–$199 USD/month', '$400–$800+/month'],
              ].map(([q, us, them]) => (
                <tr key={q}>
                  <td>{q}</td>
                  <td className="ibp-col">{us}</td>
                  <td className="other-col">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══ PRICING — the real three plans, from the same component the homepage uses ═══ */}
      <div style={{ background: '#0a0a0a', paddingTop: 48 }}>
        <div className="centered" style={{ maxWidth: 620, margin: '0 auto', padding: '0 24px' }}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Three Plans. Priced in USD — Said Plainly.</h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Your customers are billed in CAD. The subscription itself is billed in US dollars and your card&apos;s bank converts — we&apos;d rather tell you here than let a statement tell you first.
          </p>
        </div>
      </div>
      <PlanCompare />

      {/* ═══ FAQ — same array feeds the FAQPage JSON-LD in the server component ═══ */}
      <section style={{ background: '#111111' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="centered">
            <span className="section-label">Straight Answers</span>
            <h2 className="section-title">Canada Questions, Answered Honestly</h2>
          </div>
          <div style={{ marginTop: 40 }}>
            {CANADA_FAQS.map(f => (
              <div key={f.q} style={{ marginBottom: 20, background: '#1a1a1a', border: '1px solid #e63000', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.q}</h3>
                <p style={{ color: 'rgba(245,245,245,.65)', fontSize: 14, lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <div className="cta-band">
        <h2>Run the Whole Canadian Year<br /><span style={{ color: '#ff6a00' }}>From One Login.</span></h2>
        <p>The demo above is the same software you get. Set your country to Canada during the trial and your first invoice already bills in CAD. 14 days free, no card required.</p>
        <div className="hero-btns" style={{ justifyContent: 'center' }}>
          <button onClick={openModal} className="btn-primary" style={{ fontSize: 17, padding: '18px 48px' }}>Start Your Free 14-Day Trial</button>
        </div>
      </div>

      </main>

      <SiteFooter onOpenModal={openModal} />

      {modal && <HomeTrialModal onClose={() => setModal(false)} />}
    </>
  );
}
