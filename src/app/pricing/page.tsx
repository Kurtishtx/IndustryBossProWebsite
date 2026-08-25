'use client';
import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import TrialModal from '../../components/TrialModal';
import PlanCompare from '../../components/PlanCompare';

const S = {
  navy1: '#0a0a0a', navy2: '#0a0a0a', navy3: '#111111', navy4: '#1a1a1a',
  elec: '#ff6a00', text: '#f5f5f5', muted: 'rgba(245,245,245,0.65)',
  border: '#e63000',
};
const e = (a: string) => `rgba(255,106,0,${a})`;

const COMPARE = [
  { feature: 'Monthly Price', us: '$59 – $199', them: '$400–$800+' },
  { feature: 'Users Included', us: '2 / 3 / Unlimited', them: 'Limited by plan' },
  { feature: 'Industries Covered', us: 'All 14 trades', them: 'Generic / 1–2 trades' },
  { feature: 'Pending Job Board (Two-Tier)', us: 'Built-in', them: 'Not available' },
  { feature: 'Spray / Chemical Waiting List', us: 'Yes', them: 'No' },
  { feature: 'Calendar View', us: 'Yes', them: 'Yes' },
  { feature: 'Dispatch View', us: 'Yes', them: 'Limited' },
  { feature: 'Live Crew Tracking', us: 'Yes', them: 'Add-on / Extra' },
  { feature: 'Auto-routing', us: '10 / 50 / Unlimited', them: 'Add-on' },
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
        <div style={{ background: `linear-gradient(160deg, #0a0a0a, #111111)`, padding: '90px 24px 70px', textAlign: 'center', borderBottom: `1px solid ${S.border}` }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: `1px solid #e63000`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            Simple Pricing
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1, letterSpacing: '-1.5px' }}>
            Pick the size you actually are.
          </h1>
          <p style={{ color: S.muted, fontSize: 18, maxWidth: 560, margin: '0 auto' }}>
            Three plans, same software. Start at $59 for a one-person operation, up to $199 for unlimited crews and trucks. No per-user fees inside your plan.
          </p>
        </div>
      </div>

      {/* The three real plans, from the same component the homepage uses, so these numbers can
          never drift from plan_limits the way the hand-written $199 card did. */}
      <PlanCompare />

      {/* Compare Table */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>How We Compare</div>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>IndustryBossPro vs. The Rest</h2>
          <p style={{ color: S.muted, fontSize: 16 }}>Most field service platforms charge enterprise rates for features we include from $59/month.</p>
        </div>
        <div style={{ background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: S.navy2, padding: '14px 24px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
            <span style={{ color: S.muted }}>Feature</span>
            <span style={{ color: S.elec }}>IndustryBossPro</span>
            <span style={{ color: S.muted }}>Other Platforms</span>
          </div>
          {COMPARE.map((row, i) => (
            <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 24px', borderTop: `1px solid ${S.border}`, background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
              <span style={{ color: S.muted, fontSize: 14, fontWeight: 600 }}>{row.feature}</span>
              <span style={{ color: S.elec, fontSize: 14, fontWeight: 700 }}>{row.us}</span>
              <span style={{ color: 'rgba(245,245,245,0.35)', fontSize: 14 }}>{row.them}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 700, margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 32, textAlign: 'center' }}>Common Questions</h2>
        {[
          { q: 'Is there really no setup fee?', a: 'None. Sign up, get access, and we\'ll do a free onboarding call to get you configured. No contracts, no implementation fees.' },
          { q: 'What happens after the 14-day trial?', a: 'You\'re billed for the plan you pick — $59, $89 or $199 — month-to-month. Cancel anytime before the trial ends and you won\'t be charged.' },
          { q: 'How many users can I add?', a: 'Start includes 2 office users and 2 crew-app seats, Pro includes 3 of each, and Crew is unlimited on both. Clients and properties are unlimited on every plan.' },
          { q: 'Do I need a credit card to start?', a: 'No. Enter your name, email, and company. You get full access for 14 days before any billing info is needed.' },
          { q: 'What industries are supported?', a: 'Snow removal, pool service, landscaping, irrigation, lawn care, pest control, mosquito control, fence, lawn mowing, pet waste removal, garage door, carpet cleaning, fire inspection, and hood cleaning — all 14 on one platform.' },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: 20, background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 12, padding: '22px 24px' }}>
            <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{item.q}</div>
            <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: `linear-gradient(135deg, ${S.navy1} 0%, #1a1a1a 100%)`, textAlign: 'center', padding: '80px 24px 100px' }}>
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
