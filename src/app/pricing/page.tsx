'use client';
import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import TrialModal from '../../components/TrialModal';

const S = {
  navy1: '#1e1208', navy2: '#1e1208', navy3: '#241508', navy4: '#2a1a0a',
  elec: '#c47d0a', text: '#f5ece0', muted: 'rgba(245,236,224,0.65)',
  border: 'rgba(196,125,10,0.15)',
};
const e = (a: string) => `rgba(196,125,10,${a})`;

const INCLUDED = [
  'Unlimited Users', 'Unlimited Clients', 'Unlimited Properties',
  'Waiting List (Spray Applications)', 'All 9 Industries Covered', 'Pending Job Board',
  'Calendar & Dispatch Views', 'Live Crew Tracking',
  'Chemical Compliance Logging', 'Estimates & Invoices',
  '300 Auto Routes Included', '500 SMS/month included',
  '+$10 per 300 more', '+$10 per 250 more SMS',
  'Card Payments (Stripe)', 'Mobile App for Techs',
  'Two-Way SMS', 'Free Onboarding Call',
];

const COMPARE = [
  { feature: 'Monthly Price', us: '$199 flat', them: '$400–$800+' },
  { feature: 'Users Included', us: 'Unlimited', them: 'Limited by plan' },
  { feature: 'Industries Covered', us: '9 specific trades', them: 'Generic / 1–2 trades' },
  { feature: 'Pending Job Board (Two-Tier)', us: 'Built-in', them: 'Not available' },
  { feature: 'Spray / Chemical Waiting List', us: 'Yes', them: 'No' },
  { feature: 'Calendar View', us: 'Yes', them: 'Yes' },
  { feature: 'Dispatch View', us: 'Yes', them: 'Limited' },
  { feature: 'Live Crew Tracking', us: 'Yes', them: 'Add-on / Extra' },
  { feature: 'Auto Route (300 Included)', us: 'Yes', them: 'Add-on' },
  { feature: 'Lasso / Circle-to-Schedule', us: 'Yes', them: 'No' },
  { feature: 'Chemical Compliance', us: 'Yes — EPA compliant', them: 'No' },
  { feature: 'Mobile App', us: 'Yes', them: 'Yes (some)' },
  { feature: 'Free Trial', us: '14 days, no card', them: 'Varies' },
  { feature: 'Setup Fee', us: 'None', them: 'Often $500–$2,000' },
  { feature: 'Contracts', us: 'Month-to-month', them: 'Annual required (many)' },
];

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Hero */}
      <div style={{ paddingTop: 66 }}>
        <div style={{ background: `linear-gradient(160deg, #1e1208, #241508)`, padding: '90px 24px 70px', textAlign: 'center', borderBottom: `1px solid ${S.border}` }}>
          <div style={{ display: 'inline-block', background: e('.1'), border: `1px solid ${e('.3')}`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            Simple Pricing
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1, letterSpacing: '-1.5px' }}>
            One Price. Everything.
          </h1>
          <p style={{ color: S.muted, fontSize: 18, maxWidth: 560, margin: '0 auto' }}>
            No tiers. No add-ons. No per-user fees. $199/month gets you every feature, every industry, unlimited everything.
          </p>
        </div>
      </div>

      {/* Pricing Card */}
      <div style={{ maxWidth: 620, margin: '0 auto', padding: '80px 24px 0' }}>
        <div style={{ background: S.navy4, border: `3px solid ${S.elec}`, borderRadius: 20, padding: '52px 48px', position: 'relative', boxShadow: `0 0 60px ${e('.2')}, 0 0 0 8px ${e('.06')}` }}>
          <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: S.elec, color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '6px 22px', borderRadius: 20, whiteSpace: 'nowrap', boxShadow: `0 0 20px ${e('.5')}` }}>
            Everything Included — No Tiers
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>IndustryBossPro</div>
          <div style={{ fontSize: 72, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>
            <sup style={{ fontSize: 28, verticalAlign: 'super' }}>$</sup>199
          </div>
          <div style={{ color: S.muted, fontSize: 14, marginTop: 6, marginBottom: 32 }}>per month · cancel anytime · no contracts</div>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: 36 }}>
            {INCLUDED.map(li => (
              <li key={li} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: S.text }}>
                <span style={{ color: S.elec, fontWeight: 700, fontSize: 14 }}>✓</span>{li}
              </li>
            ))}
          </ul>
          <button onClick={() => setModalOpen(true)} style={{ width: '100%', background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '18px', fontSize: 17, fontWeight: 700, cursor: 'pointer', boxShadow: `0 0 30px ${e('.4')}` }}>
            Start Your 14-Day Free Trial
          </button>
          <p style={{ textAlign: 'center', color: S.muted, fontSize: 13, marginTop: 14 }}>No credit card required. No contracts.</p>
        </div>
      </div>

      {/* Compare Table */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>How We Compare</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>IndustryBossPro vs. The Rest</h2>
          <p style={{ color: S.muted, fontSize: 16 }}>Most field service platforms charge enterprise rates for features we include at $199/month.</p>
        </div>
        <div style={{ background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: S.navy2, padding: '14px 24px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
            <span style={{ color: S.muted }}>Feature</span>
            <span style={{ color: S.elec }}>IndustryBossPro</span>
            <span style={{ color: S.muted }}>Other Platforms</span>
          </div>
          {COMPARE.map((row, i) => (
            <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 24px', borderTop: `1px solid ${S.border}`, background: i % 2 === 0 ? 'transparent' : 'rgba(196,125,10,0.02)' }}>
              <span style={{ color: S.muted, fontSize: 14, fontWeight: 600 }}>{row.feature}</span>
              <span style={{ color: S.elec, fontSize: 14, fontWeight: 700 }}>{row.us}</span>
              <span style={{ color: 'rgba(245,236,224,0.35)', fontSize: 14 }}>{row.them}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 700, margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 32, textAlign: 'center' }}>Common Questions</h2>
        {[
          { q: 'Is there really no setup fee?', a: 'None. Sign up, get access, and we\'ll do a free onboarding call to get you configured. No contracts, no implementation fees.' },
          { q: 'What happens after the 14-day trial?', a: 'You\'re billed $199/month, month-to-month. Cancel anytime before the trial ends and you won\'t be charged.' },
          { q: 'How many users can I add?', a: 'Unlimited. Add your whole crew — techs, office staff, managers — at no extra cost.' },
          { q: 'Do I need a credit card to start?', a: 'No. Enter your name, email, and company. You get full access for 14 days before any billing info is needed.' },
          { q: 'What industries are supported?', a: 'Snow removal, pool service, landscaping, irrigation, lawn care, pest control, mosquito control, fence, lawn mowing, and pet waste removal — all on one platform.' },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: 20, background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 12, padding: '22px 24px' }}>
            <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{item.q}</div>
            <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: `linear-gradient(135deg, ${S.navy1} 0%, #3d2510 100%)`, textAlign: 'center', padding: '80px 24px 100px' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
          Try It Free — No Card Required
        </h2>
        <p style={{ color: S.muted, fontSize: 17, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
          14 days, full access, cancel anytime.
        </p>
        <button onClick={() => setModalOpen(true)} style={{ background: S.elec, color: '#fff', padding: '18px 52px', borderRadius: 10, fontSize: 17, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
          Start Free Trial
        </button>
      </div>

      <SiteFooter onOpenModal={() => setModalOpen(true)} />
    </div>
  );
}
