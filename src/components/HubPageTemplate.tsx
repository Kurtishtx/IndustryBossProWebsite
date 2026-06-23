'use client';
import { useState } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import TrialModal from './TrialModal';
import type { HubPageData } from '../lib/hub-data';

const S = {
  navy1: '#030b15', navy2: '#050e1e', navy3: '#071224', navy4: '#0a1628', navy5: '#0d1f3c',
  elec: '#00b8ff', elecDark: '#0094d0', muted: 'rgba(232,244,255,0.55)',
  border: 'rgba(0,184,255,0.18)', text: '#e8f4ff',
};

const INDUSTRIES = ['Snow & Ice Management','Pool Service','Landscaping','Irrigation','Lawn Care Chemicals','Pest Control','Mosquito Control','Fence','Mowing'];

const HOW_STEPS = [
  { n: '1', title: 'Add Your Clients & Properties', body: 'Import or add your client list with property details, notes, and service history. Up and running in under an hour.' },
  { n: '2', title: 'Build Your Schedules & Routes', body: 'Set up recurring schedules, one-time jobs, and seasonal work. Routes optimize automatically.' },
  { n: '3', title: 'Deploy Your Crew', body: 'Crews see their full day on their phone — stops, notes, and navigation. You see progress in real time.' },
  { n: '4', title: 'Get Paid Automatically', body: 'Invoices fire on job completion. Clients pay by card on file. Money moves without you touching it.' },
];

export default function HubPageTemplate({ page, stateName }: { page: HubPageData; stateName?: string }) {
  const [modal, setModal] = useState(false);
  const geoSuffix = stateName ? ` in ${stateName}` : '';
  const h1 = stateName
    ? `${page.industry} Software${geoSuffix} — Run Your Routes, Get Paid, Grow Faster`
    : page.h1;
  const keyword = page.slug
    .replace(/-software$/, '')
    .split('-')
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') + ' Software';

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModal(true)} />
      <TrialModal open={modal} onClose={() => setModal(false)} />

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: `linear-gradient(180deg, #050e1e 0%, #030b15 100%)` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          {stateName && (
            <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.12)', border: `1px solid rgba(0,184,255,0.3)`, borderRadius: 20, padding: '4px 14px', fontSize: 13, color: S.elec, fontWeight: 600, marginBottom: 20 }}>
              {page.industry} · {stateName}
            </div>
          )}
          {!stateName && (
            <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.12)', border: `1px solid rgba(0,184,255,0.3)`, borderRadius: 20, padding: '4px 14px', fontSize: 13, color: S.elec, fontWeight: 600, marginBottom: 20 }}>
              {page.industry}
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, color: S.text, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1px' }}>
            {h1}
          </h1>
          <p style={{ fontSize: 18, color: S.muted, lineHeight: 1.6, marginBottom: 36, maxWidth: 700, margin: '0 auto 36px' }}>
            {stateName
              ? `IndustryBossPro gives ${page.industry.toLowerCase()} businesses${geoSuffix} the tools to manage schedules, track work, invoice clients, and grow — all for $199/month.`
              : page.subtitle}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 40px', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {page.heroPoints.map((pt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: S.text, fontSize: 15, textAlign: 'left' }}>
                <span style={{ color: S.elec, fontSize: 18, lineHeight: 1, flexShrink: 0 }}>✓</span>
                {pt}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setModal(true)} style={{ background: S.elec, color: S.navy1, border: 'none', borderRadius: 10, padding: '16px 36px', fontSize: 17, fontWeight: 800, cursor: 'pointer' }}>
              Start 14-Day Free Trial
            </button>
            <a href="/#pricing" style={{ background: 'transparent', color: S.elec, border: `2px solid ${S.elec}`, borderRadius: 10, padding: '14px 28px', fontSize: 16, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
              See Pricing →
            </a>
          </div>
          <p style={{ color: S.muted, fontSize: 13, marginTop: 16 }}>No credit card required · $199/month after trial · Cancel anytime</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: S.navy3, borderTop: `1px solid ${S.border}`, borderBottom: `1px solid ${S.border}`, padding: '18px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 32 }}>
          {['9 Industries', '$199/Month — 100 Auto Routes Included', 'Calendar & Dispatch Views', 'Live Crew Tracking', '14-Day Free Trial', 'Unlimited Users', 'No Contracts'].map(t => (
            <span key={t} style={{ color: S.elec, fontWeight: 700, fontSize: 13 }}>✓ {t}</span>
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ padding: '80px 24px', background: S.navy2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 48 }}>
            Sound Familiar?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {page.painPoints.map((pp, i) => (
              <div key={i} style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 12, padding: 28 }}>
                <div style={{ color: '#ff6b6b', fontSize: 15, fontWeight: 700, marginBottom: 10 }}>❌ {pp.problem}</div>
                <div style={{ width: 32, height: 2, background: S.elec, marginBottom: 10 }} />
                <div style={{ color: S.elec, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>✓ With IndustryBossPro:</div>
                <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.6 }}>{pp.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENDING JOB BOARD SPOTLIGHT */}
      <section style={{ padding: '80px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.12)', border: `1px solid rgba(0,184,255,0.3)`, borderRadius: 20, padding: '4px 14px', fontSize: 12, color: S.elec, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
              The Killer Feature
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: S.text, marginBottom: 16, lineHeight: 1.2 }}>
              The Pending Job Board
            </h2>
            <p style={{ color: S.muted, fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
              {page.pendingBoard}
            </p>
            <button onClick={() => setModal(true)} style={{ background: 'transparent', color: S.elec, border: `2px solid ${S.elec}`, borderRadius: 10, padding: '12px 28px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
              See It in Action
            </button>
          </div>
          <div style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ background: S.navy5, padding: '12px 20px', borderBottom: `1px solid ${S.border}`, fontSize: 13, fontWeight: 600, color: S.elec }}>
              Pending Job Board
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 220 }}>
              <div style={{ padding: '16px', borderRight: `1px solid ${S.border}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#34d399', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Scheduled — Assigned Date</div>
                {['Mon Jun 23', 'Tue Jun 24', 'Wed Jun 25'].map((d, i) => (
                  <div key={i} style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 6, padding: '8px 10px', marginBottom: 8, fontSize: 12 }}>
                    <div style={{ color: '#34d399', fontWeight: 600 }}>{d}</div>
                    <div style={{ color: S.muted }}>Client {i + 1} · {page.industry.split(' ')[0]} Service</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Waiting List — No Date</div>
                {['Client A', 'Client B', 'Client C'].map((c, i) => (
                  <div key={i} style={{ background: 'rgba(0,184,255,0.08)', border: '1px solid rgba(0,184,255,0.2)', borderRadius: 6, padding: '8px 10px', marginBottom: 8, fontSize: 12 }}>
                    <div style={{ color: S.elec, fontWeight: 600 }}>{c}</div>
                    <div style={{ color: S.muted }}>Awaiting scheduling</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '80px 24px', background: S.navy2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 12 }}>
            Everything You Need to Run Your {page.industry} Business
          </h2>
          <p style={{ color: S.muted, textAlign: 'center', fontSize: 16, marginBottom: 48 }}>
            All features included at $199/month. No add-ons, no feature tiers.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {page.features.map((feat, i) => (
              <div key={i} style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 12, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{feat.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: S.text, marginBottom: 8 }}>{feat.title}</div>
                <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.6 }}>{feat.desc}</div>
              </div>
            ))}
          </div>
          {page.blogSiloIndustry && page.blog1Slug && (
            <p style={{ color: S.muted, fontSize: 15, textAlign: 'center', marginTop: 48, lineHeight: 1.8 }}>
              Not sure what to look for? Our in-depth{' '}
              <a
                href={`/blog/${page.blogSiloIndustry}/${page.blog1Slug}`}
                style={{ color: S.elec, fontWeight: 700, textDecoration: 'none' }}
              >
                {keyword} guide
              </a>
              {' '}walks you through everything — from choosing the right platform to getting your crew live in the field.
            </p>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 48 }}>
            Up and Running in One Day
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {HOW_STEPS.map(s => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(0,184,255,0.12)', border: `2px solid ${S.elec}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 20, fontWeight: 800, color: S.elec }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: S.text, marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: S.muted, lineHeight: 1.6 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM POWER FEATURES */}
      <section style={{ padding: '80px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.12)', border: `1px solid rgba(0,184,255,0.3)`, borderRadius: 20, padding: '4px 14px', fontSize: 12, color: S.elec, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
              Platform Power
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: S.text, marginBottom: 12 }}>
              Features No Other Field Service Software Has
            </h2>
            <p style={{ color: S.muted, fontSize: 16, maxWidth: 620, margin: '0 auto' }}>
              These aren&apos;t checkboxes. They&apos;re the reason operators switch to IndustryBossPro and never go back.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { icon: '🗓️', title: 'Calendar View', desc: 'See every job across every crew and every service type on one calendar. Filter by crew, industry, or date. Your whole operation at a glance.' },
              { icon: '🚀', title: 'Dispatch View', desc: 'Live dispatch board showing every crew, their current stop, and real-time job status as they work through the day. No calls to find out where anyone is.' },
              { icon: '📍', title: 'Live Crew Tracking', desc: 'Every tech and truck on a live map, all day long. Know exactly who is where, which stop they\'re on, and when they complete — from your phone or desk.' },
              { icon: '🤖', title: 'Auto Route (100 Included)', desc: '100 auto-optimized routes included every month. The system sequences stops by geography to cut drive time and fit more stops per crew per day. +$10 per 100 more.' },
              { icon: '⭕', title: 'Lasso / Circle-to-Schedule', desc: 'Draw a zone on the map. See every property inside with total square footage by service type. Schedule them all at once. No other software does this.' },
              { icon: '📋', title: 'Two-Tier Job Board', desc: 'Scheduled jobs with assigned dates on one side. Spray/chemical/maintenance waiting list on the other — grouped by service type with sq ft totals. Your entire workload, always visible.' },
            ].map((f, i) => (
              <div key={i} style={{ background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: S.text, marginBottom: 8 }}>{f.title}</div>
                <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES TRUST */}
      <section style={{ padding: '60px 24px', background: S.navy3, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: S.muted, marginBottom: 20 }}>BUILT FOR ALL 9 FIELD SERVICE INDUSTRIES</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {INDUSTRIES.map(ind => (
              <span key={ind} style={{ background: ind === page.industry ? 'rgba(0,184,255,0.15)' : 'rgba(255,255,255,0.04)', border: `1px solid ${ind === page.industry ? 'rgba(0,184,255,0.4)' : S.border}`, borderRadius: 20, padding: '6px 14px', fontSize: 13, color: ind === page.industry ? S.elec : S.muted, fontWeight: ind === page.industry ? 700 : 400 }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 8 }}>Simple, Flat Pricing</h2>
          <p style={{ color: S.muted, textAlign: 'center', marginBottom: 40 }}>One price. Everything included. No surprises.</p>
          <div style={{ background: S.navy4, border: `2px solid ${S.elec}`, borderRadius: 20, padding: '40px 36px', boxShadow: `0 0 60px rgba(0,184,255,0.15)`, textAlign: 'center' }}>
            <div style={{ fontSize: 15, color: S.elec, fontWeight: 700, marginBottom: 8 }}>IndustryBossPro</div>
            <div style={{ fontSize: 60, fontWeight: 900, color: S.text, lineHeight: 1 }}>$199</div>
            <div style={{ color: S.muted, fontSize: 16, marginBottom: 12 }}>/month · everything included</div>
            <div style={{ background: 'rgba(0,184,255,0.1)', border: '1px solid rgba(0,184,255,0.3)', borderRadius: 8, padding: '8px 16px', marginBottom: 24, fontSize: 13, color: S.elec, fontWeight: 700 }}>
              100 Auto Routes Included · +$10 per 100 More
            </div>
            {['Unlimited Users', '14-Day Free Trial', 'All 9 Industries', 'Pending Job Board', 'Calendar & Dispatch Views', 'Live Crew Tracking', '100 Auto Routes Included', '+$10 per 100 more routes', 'Chemical Compliance Logging', 'Mobile App for Crews', 'Card Payments (Stripe)', 'No Setup Fees', 'No Contracts'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, textAlign: 'left' }}>
                <span style={{ color: S.elec }}>✓</span>
                <span style={{ color: S.text, fontSize: 14 }}>{item}</span>
              </div>
            ))}
            <button onClick={() => setModal(true)} style={{ width: '100%', background: S.elec, color: S.navy1, border: 'none', borderRadius: 10, padding: '16px', fontSize: 17, fontWeight: 800, cursor: 'pointer', marginTop: 24 }}>
              Start Free Trial — No Card Required
            </button>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ padding: '80px 24px', background: `linear-gradient(135deg, #071224 0%, #050e1e 100%)`, borderTop: `1px solid ${S.border}`, textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, color: S.text, marginBottom: 16, letterSpacing: '-0.5px' }}>
            Ready to Stop Managing Your Business on Paper?
          </h2>
          <p style={{ color: S.muted, fontSize: 17, marginBottom: 36, lineHeight: 1.6 }}>
            Join {page.industry.toLowerCase()} businesses already running IndustryBossPro. 14-day free trial, no credit card needed.
          </p>
          <button onClick={() => setModal(true)} style={{ background: S.elec, color: S.navy1, border: 'none', borderRadius: 12, padding: '18px 48px', fontSize: 18, fontWeight: 800, cursor: 'pointer' }}>
            Start Your Free Trial Today
          </button>
          <p style={{ color: S.muted, fontSize: 13, marginTop: 16 }}>$199/month after trial · Cancel anytime · Unlimited users</p>
        </div>
      </section>

      {/* ── BLOG SILO LINK ── */}
      {page.blogSiloIndustry && page.blog1Slug && (
        <section style={{ background: S.navy3, padding: '64px 40px', borderTop: `1px solid ${S.border}` }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>Free Resource</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10 }}>
                The Complete {keyword} Guide
              </h3>
              <p style={{ color: S.muted, fontSize: 15, maxWidth: 540 }}>
                30 in-depth articles covering pricing, routing, crew management, billing, and scaling — everything a {page.industry.toLowerCase()} business owner needs to run a tighter operation.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <a href={`/blog/${page.blogSiloIndustry}/${page.blog1Slug}`} style={{ display: 'inline-block', background: S.elec, color: S.navy1, borderRadius: 8, padding: '13px 28px', fontSize: 14, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Read the {keyword} Guide →
              </a>
              <a href={`/blog/${page.blogSiloIndustry}`} style={{ display: 'inline-block', color: S.elec, fontSize: 13, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
                Browse all 30 articles →
              </a>
            </div>
          </div>
        </section>
      )}

      <SiteFooter onOpenModal={() => setModal(true)} />
    </div>
  );
}
