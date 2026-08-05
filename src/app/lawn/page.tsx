'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SiteHeader from '../../components/SiteHeader';

const HomeTrialModal = dynamic(() => import('../../components/HomeTrialModal'), { ssr: false });

export default function Lawn() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);

  return (
    <>
      <SiteHeader onOpenModal={openModal} />

      <main>
        {/* MOCKUP IMAGE */}
        <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 55%, #1a1a1a 100%)', padding: 'clamp(80px,8vw,96px) clamp(14px,4vw,24px) 0', textAlign: 'center' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <img src="/industrybosspro-cover.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="Lawn and landscape software on a laptop and phone — map-based route building on desktop and the crew mobile app" style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 32px 80px rgba(0,0,0,.5)', display: 'block' }} />
          </div>
        </div>

        {/* HERO — lawn / whole-business angle */}
        <div className="hero" style={{ paddingTop: 52 }}>
          <div className="hero-badge">For Lawn, Spray, Fertilization &amp; Landscape Businesses</div>
          <h1>Run Your <span>Whole</span> Business.<br />Not Just the Spraying.</h1>
          <div className="hero-sub">
            Spraying is one part of your day. Mowing, fertilization, cleanups, estimates, invoices, crews, and getting paid are the rest — and most software only handles a slice. IndustryBossPro runs <b>your entire lawn &amp; landscape operation</b> from one dashboard: map-based routing, a crew mobile app, automated billing, and the most powerful pending-job board in field service.
          </div>
          <div className="hero-btns">
            <button onClick={openModal} className="btn-primary">Start Free — 14 Days, No Card</button>
            <a href="https://my.industrybosspro.com/demo.html" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,.22)' }} />
              Try the Live Demo
            </a>
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(245,245,245,.72)', fontSize: 15, fontWeight: 600, marginTop: 18 }}>No credit card required &middot; 14-day free trial &middot; <b style={{ color: '#ff6a00' }}>$199/mo</b> after &middot; <b style={{ color: '#ff6a00' }}>demo needs no signup</b></p>
          <div className="hero-proof">
            <div className="proof-item"><div className="proof-val">Spray + Mow + Fert</div><div className="proof-lbl">All in one login</div></div>
            <div className="proof-item"><div className="proof-val">Unlimited</div><div className="proof-lbl">Users, Clients &amp; Properties</div></div>
            <div className="proof-item"><div className="proof-val">$199</div><div className="proof-lbl">Flat Monthly</div></div>
            <div className="proof-item"><div className="proof-val">14 Days</div><div className="proof-lbl">Free Trial, No Card</div></div>
          </div>
        </div>

        {/* NOT JUST SPRAY */}
        <div style={{ background: '#0d0d0d', padding: 'clamp(56px,7vw,88px) clamp(16px,4vw,24px)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Spray software handles one slice. You run the whole yard.</h2>
            <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>If you do more than spray, a spray-only tool leaves you juggling a second app for everything else. IndustryBossPro puts it all under one roof:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16, marginTop: 32, textAlign: 'left' }}>
              {[
                ['🌱', 'Spray & pest', 'Chemical logs, route management, re-treatment scheduling, license & compliance tracking.'],
                ['🌾', 'Mowing', 'Recurring routes, cut-frequency management, seasonal start/stop, rain-delay rescheduling.'],
                ['🧪', 'Fertilization', 'Multi-round programs, per-property notes, and automated visit reminders.'],
                ['🌿', 'Cleanups & landscaping', 'Estimate-to-job workflows, crews, material tracking, and follow-ups.'],
                ['🧾', 'Estimates & invoices', 'Quote in seconds, auto-send invoices, and auto-charge the card on file.'],
                ['📱', 'Crew mobile app', 'Your techs see the route, mark jobs done, and it bills itself.'],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{ background: '#151515', border: '1px solid #222', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontSize: 26 }}>{icon}</div>
                  <div style={{ fontWeight: 800, color: '#f5f5f5', margin: '8px 0 5px', fontSize: 16 }}>{title}</div>
                  <div style={{ color: 'rgba(245,245,245,.6)', fontSize: 13.5, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <button onClick={openModal} className="btn-primary">Start Your Free 14-Day Trial</button>
            </div>
          </div>
        </div>
      </main>

      {modal && <HomeTrialModal onClose={() => setModal(false)} />}
    </>
  );
}
