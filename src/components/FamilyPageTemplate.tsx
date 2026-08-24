'use client';
import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import TrialModal from './TrialModal';
import { familyApps } from '../lib/family-data';

const S = {
  navy1: '#0a0a0a', navy2: '#0a0a0a', navy4: '#1a1a1a',
  elec: '#ff6a00', text: '#f5f5f5', muted: 'rgba(245,245,245,0.65)',
  border: '#e63000',
};
const e = (a: string) => `rgba(255,106,0,${a})`;

export default function FamilyPageTemplate() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <div style={{ paddingTop: 66 }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(160deg, #0a0a0a, #111111)`, padding: '90px 24px 70px', textAlign: 'center', borderBottom: `1px solid ${S.border}` }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: `1px solid #e63000`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            The BossPro Family
          </div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,58px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1, letterSpacing: '-1px' }}>
            One Platform. Built for Your Trade.
          </h1>
          <p style={{ color: S.muted, fontSize: 18, maxWidth: 640, margin: '0 auto 16px', lineHeight: 1.6 }}>
            <strong style={{ color: S.text }}>IndustryBossPro</strong> is the all-in-one field service platform that runs every trade on a single system. The BossPro Family is that same engine, focused and branded for one trade at a time — so you get software that speaks your industry&apos;s language out of the box.
          </p>
          <p style={{ color: S.muted, fontSize: 15, maxWidth: 620, margin: '0 auto 36px' }}>
            Same scheduling, routing, invoicing, mobile app, and the same three plans from $49/month. Pick the one built for what you do — or run everything from IndustryBossPro.
          </p>
          <button onClick={() => setModalOpen(true)} style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '14px 36px', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
            Start Free Trial
          </button>
        </div>

        {/* Family app cards */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>Purpose-Built Editions</div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#fff' }}>Find the One Built for Your Business</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 22 }}>
            {familyApps.map(app => (
              <div key={app.domain} style={{ background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 16, padding: '30px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'inline-block', alignSelf: 'flex-start', background: app.accent, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, marginBottom: 16 }}>
                  {app.trade}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{app.name}</h3>
                <p style={{ color: S.text, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{app.tagline}</p>
                <p style={{ color: S.muted, fontSize: 14, lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>{app.desc}</p>
                <a href={app.url} style={{ display: 'inline-block', background: S.elec, color: '#fff', textDecoration: 'none', borderRadius: 8, padding: '11px 20px', fontSize: 14, fontWeight: 700, textAlign: 'center', marginBottom: 12 }}>
                  Visit {app.domain} →
                </a>
                <Link href={app.hubHref} style={{ color: S.elec, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                  Or see {app.hubLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why one platform */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ background: S.navy2, border: `1px solid ${S.border}`, borderRadius: 16, padding: '48px 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>One Engine, Every Trade</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>Run More Than One Service?</h2>
              <p style={{ color: S.muted, fontSize: 15, marginTop: 10, maxWidth: 620, margin: '10px auto 0', lineHeight: 1.7 }}>
                If you mow, spray, and plow — or do landscaping and irrigation under one roof — run it all from <Link href="/" style={{ color: S.elec, textDecoration: 'none', fontWeight: 600 }}>IndustryBossPro</Link>. Every BossPro Family app is the same platform, so you never outgrow it. Add a service line and it&apos;s already built in.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
              {familyApps.map(app => (
                <Link key={app.hubHref} href={app.hubHref} style={{ display: 'flex', alignItems: 'center', gap: 10, color: S.text, fontSize: 14, textDecoration: 'none', background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 10, padding: '12px 16px' }}>
                  <span style={{ color: S.elec, fontWeight: 700 }}>→</span>{app.hubLabel.replace(' on IndustryBossPro', '')}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '20px 24px 100px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 900, marginBottom: 16 }}>
            One Price Across the Whole Family
          </h2>
          <p style={{ color: S.muted, fontSize: 17, marginBottom: 32 }}>Three plans from $49/month. No credit card to start. 14-day free trial.</p>
          <button onClick={() => setModalOpen(true)} style={{ background: S.elec, color: '#fff', padding: '16px 48px', borderRadius: 10, fontSize: 17, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
            Start Free Trial
          </button>
        </div>
      </div>

      <SiteFooter onOpenModal={() => setModalOpen(true)} />
    </div>
  );
}
