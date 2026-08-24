'use client';
import { useState } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import TrialModal from './TrialModal';
import type { FeaturePageData } from '../lib/feature-data';

const S = {
  navy1: '#0a0a0a', navy2: '#0a0a0a', navy3: '#111111', navy4: '#1a1a1a',
  elec: '#ff6a00', muted: 'rgba(245,245,245,0.55)', border: '#e63000', text: '#f5f5f5',
};

export default function FeaturePageTemplate({ page }: { page: FeaturePageData }) {
  const [modal, setModal] = useState(false);
  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModal(true)} />
      <TrialModal open={modal} onClose={() => setModal(false)} />
      <main>
      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: S.navy1, textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid #e63000', borderRadius: 20, padding: '4px 14px', fontSize: 13, color: S.elec, fontWeight: 600, marginBottom: 20 }}>
            Feature Deep Dive
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: 900, color: S.text, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1px' }}>{page.h1}</h1>
          <p style={{ color: S.muted, fontSize: 17, lineHeight: 1.6, marginBottom: 36 }}>{page.subtitle}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 36px', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
            {page.heroPoints.map((pt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: S.text }}>
                <span style={{ color: S.elec, fontSize: 18, flexShrink: 0 }}>✓</span>{pt}
              </li>
            ))}
          </ul>
          <button onClick={() => setModal(true)} style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '15px 40px', fontSize: 17, fontWeight: 800, cursor: 'pointer' }}>
            Start 14-Day Free Trial
          </button>
          <p style={{ color: S.muted, fontSize: 13, marginTop: 14 }}>From $49/month · Three plans · No credit card required</p>
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <section style={{ padding: '80px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {page.sections.map((sec, i) => (
              <div key={i} style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 14, padding: 32 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{sec.icon}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: S.text, marginBottom: 12 }}>{sec.title}</h3>
                <p style={{ color: S.muted, fontSize: 14, lineHeight: 1.7 }}>{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: '60px 24px', background: S.navy2, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: S.text, marginBottom: 8 }}>Available for All 14 Field Service Industries</h2>
          <p style={{ color: S.muted, marginBottom: 28, fontSize: 15 }}>One platform. One price. Every industry.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {page.industries.map(ind => (
              <span key={ind} style={{ background: 'rgba(255,255,255,0.08)', border: `1px solid ${S.border}`, borderRadius: 20, padding: '7px 16px', fontSize: 13, color: S.elec, fontWeight: 600 }}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: '80px 24px', background: S.navy1, textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: S.text, marginBottom: 8 }}>One Platform, Three Plans</h2>
          <p style={{ color: S.muted, marginBottom: 36 }}>No feature tiers. No per-user fees. No surprises.</p>
          <div style={{ background: S.navy4, border: `2px solid ${S.elec}`, borderRadius: 20, padding: '36px 32px', boxShadow: '0 0 60px rgba(255,106,0,0.12)' }}>
            <div style={{ fontSize: 56, fontWeight: 900, color: S.text, lineHeight: 1 }}>$199</div>
            <div style={{ color: S.muted, fontSize: 15, marginBottom: 28 }}>/month · cancel anytime</div>
            <button onClick={() => setModal(true)} style={{ width: '100%', background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '15px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
              Start Free Trial — No Card Required
            </button>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter onOpenModal={() => setModal(true)} />
    </div>
  );
}
