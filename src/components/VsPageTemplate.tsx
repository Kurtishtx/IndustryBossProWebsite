'use client';
import { useState } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import TrialModal from './TrialModal';
import type { VsPageData } from '../lib/vs-data';

const S = {
  navy1: '#0a0a0a', navy2: '#0a0a0a', navy3: '#111111', navy4: '#1a1a1a',
  elec: '#ff6a00', muted: 'rgba(245,245,245,0.55)', border: 'rgba(255,106,0,0.18)', text: '#f5f5f5',
};

export default function VsPageTemplate({ page }: { page: VsPageData }) {
  const [modal, setModal] = useState(false);
  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModal(true)} />
      <TrialModal open={modal} onClose={() => setModal(false)} />
      <main>
      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 72, background: S.navy1, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.3)', borderRadius: 20, padding: '4px 14px', fontSize: 13, color: S.elec, fontWeight: 600, marginBottom: 20 }}>
            Comparison
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 900, color: S.text, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-1px' }}>{page.h1}</h1>
          <p style={{ color: S.muted, fontSize: 17, lineHeight: 1.6, marginBottom: 36 }}>{page.subtitle}</p>
          <button onClick={() => setModal(true)} style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '14px 36px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
            Try IndustryBossPro Free for 14 Days
          </button>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '72px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 40 }}>Feature Comparison</h2>
          <div style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', background: S.navy3, padding: '16px 24px', borderBottom: `1px solid ${S.border}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Feature</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: S.elec, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>IndustryBossPro</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>{page.competitor}</div>
            </div>
            {page.tableRows.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '14px 24px', borderBottom: i < page.tableRows.length - 1 ? `1px solid ${S.border}` : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                <div style={{ fontSize: 14, color: S.text, fontWeight: 500 }}>{row.feature}</div>
                <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: row.usBetter ? '#34d399' : S.muted }}>{row.us}</div>
                <div style={{ textAlign: 'center', fontSize: 13, color: row.usBetter ? '#ff6b6b' : S.muted }}>{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE WIN */}
      <section style={{ padding: '72px 24px', background: S.navy2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 40 }}>
            Why Operators Choose IndustryBossPro Over {page.competitor}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {page.ourWins.map((w, i) => (
              <div key={i} style={{ background: S.navy4, border: `1px solid rgba(52,211,153,0.2)`, borderRadius: 12, padding: 24 }}>
                <div style={{ color: '#34d399', fontSize: 18, marginBottom: 10 }}>✓</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: S.text, marginBottom: 8 }}>{w.title}</div>
                <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.6 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE THEY WIN */}
      <section style={{ padding: '72px 24px', background: S.navy1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: S.text, textAlign: 'center', marginBottom: 8 }}>Where {page.competitor} Has the Edge</h2>
          <p style={{ color: S.muted, textAlign: 'center', marginBottom: 36, fontSize: 15 }}>We believe in honest comparisons. Here's where they genuinely do better.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {page.theirWins.map((w, i) => (
              <div key={i} style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: S.text, marginBottom: 8 }}>{w.title}</div>
                <div style={{ color: S.muted, fontSize: 14, lineHeight: 1.6 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT COMPETITOR */}
      <section style={{ padding: '60px 24px', background: S.navy3, borderTop: `1px solid ${S.border}`, borderBottom: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: S.text, marginBottom: 12 }}>About {page.competitor}</h2>
          <p style={{ color: S.muted, fontSize: 15, lineHeight: 1.7 }}>{page.competitorDesc}</p>
        </div>
      </section>

      {/* BOTTOM LINE */}
      <section style={{ padding: '72px 24px', background: S.navy2 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: S.text, marginBottom: 20 }}>The Bottom Line</h2>
          <p style={{ color: S.muted, fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>{page.bottomLine}</p>
          <button onClick={() => setModal(true)} style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '16px 40px', fontSize: 17, fontWeight: 800, cursor: 'pointer' }}>
            Start Your Free 14-Day Trial
          </button>
          <p style={{ color: S.muted, fontSize: 13, marginTop: 12 }}>$199/month after trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      </main>
      <SiteFooter onOpenModal={() => setModal(true)} />
    </div>
  );
}
