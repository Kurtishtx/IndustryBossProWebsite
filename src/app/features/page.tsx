'use client';
import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import TrialModal from '../../components/TrialModal';

const S = {
  navy1: '#1e1208', navy2: '#1e1208', navy4: '#2a1a0a',
  elec: '#c47d0a', text: '#f5ece0', muted: 'rgba(245,236,224,0.65)',
  border: 'rgba(196,125,10,0.15)',
};
const e = (a: string) => `rgba(196,125,10,${a})`;

const FEATURES = [
  {
    icon: '📅',
    title: 'Scheduling',
    desc: 'Drag-and-drop job scheduling with recurring jobs, crew assignments, and real-time dispatch. Build daily routes and manage your calendar from one view.',
    href: '/features/field-service-scheduling-software',
  },
  {
    icon: '🗺️',
    title: 'Route Optimization',
    desc: 'Auto-optimize routes by zip code, neighborhood, or drawn map area. Lasso-select a region on a map and instantly see all properties due — sorted by drive time.',
    href: '/features/service-route-optimization-software',
  },
  {
    icon: '🧾',
    title: 'Invoicing',
    desc: 'Auto-generate invoices after job completion. Email or text them to clients with one click. Track open balances, send reminders, and collect faster.',
    href: '/features/field-service-invoicing-software',
  },
  {
    icon: '📋',
    title: 'Pending Job Board',
    desc: 'A split-panel board showing scheduled jobs vs. waiting-list jobs side by side. Purpose-built for businesses running recurring routes with on-demand work mixed in.',
    href: '/features/pending-job-board-software',
  },
  {
    icon: '📱',
    title: 'Mobile App',
    desc: 'Field techs get their stop list, job details, chemical log, and status updates from their phone. Big buttons, clear info, built for people in trucks.',
    href: '/features/field-service-mobile-app',
  },
  {
    icon: '💳',
    title: 'Payment Processing',
    desc: 'Collect payments via Stripe — card on file, online portal, or manual entry. Auto-charge recurring clients after job completion. Built-in decline handling.',
    href: '/features/field-service-payment-processing',
  },
  {
    icon: '👥',
    title: 'CRM',
    desc: 'Client profiles with service history, notes, custom fields, tags, and contact info. Track every interaction, schedule follow-ups, and manage your full client base.',
    href: '/features/field-service-crm-software',
  },
  {
    icon: '📊',
    title: 'Reporting & Analytics',
    desc: 'Revenue by service, technician performance, route efficiency, chemical usage, and more. Real-time dashboards with exportable reports for your records.',
    href: '/features/field-service-reporting-analytics',
  },
];

const ALL_INCLUDED = [
  'Two-Way SMS', 'Automated Client Alerts', 'Estimates', 'Chemical Compliance Logging',
  'Team Permissions & Roles', 'Waiting List Management', 'QuickBooks Export', 'Import Tool',
  'Custom Fields', 'Service Templates', 'Discount Codes', 'Sales Tax',
];

export default function FeaturesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <div style={{ paddingTop: 66 }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(160deg, #1e1208, #241508)`, padding: '90px 24px 70px', textAlign: 'center', borderBottom: `1px solid ${S.border}` }}>
          <div style={{ display: 'inline-block', background: e('.1'), border: `1px solid ${e('.3')}`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            Every Feature Included
          </div>
          <h1 style={{ fontSize: 'clamp(30px,5vw,58px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1, letterSpacing: '-1px' }}>
            Everything Your Field Service<br />Business Needs. Built In.
          </h1>
          <p style={{ color: S.muted, fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>
            Scheduling, routing, invoicing, payments, CRM, mobile app, SMS, chemical compliance — all included at $199/month. No add-ons.
          </p>
          <button onClick={() => setModalOpen(true)} style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 10, padding: '14px 36px', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
            Start Free Trial
          </button>
        </div>

        {/* Core Feature Cards */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>Core Features</div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, color: '#fff' }}>The Tools That Run Your Operation</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {FEATURES.map(f => (
              <Link key={f.href} href={f.href} style={{ display: 'block', background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 14, padding: '28px 26px', textDecoration: 'none', transition: 'border-color .2s' }}
                onMouseEnter={e2 => (e2.currentTarget.style.borderColor = S.elec)}
                onMouseLeave={e2 => (e2.currentTarget.style.borderColor = S.border)}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: S.muted, fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
                <div style={{ marginTop: 16, color: S.elec, fontSize: 13, fontWeight: 600 }}>Learn more →</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Also Included */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ background: S.navy2, border: `1px solid ${S.border}`, borderRadius: 16, padding: '48px 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>Also Included</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>Everything Else You Need</h2>
              <p style={{ color: S.muted, fontSize: 15, marginTop: 8 }}>These aren&apos;t add-ons — they&apos;re all part of your $199/month.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px 24px' }}>
              {ALL_INCLUDED.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: S.text, fontSize: 14 }}>
                  <span style={{ color: S.elec, fontWeight: 700 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '20px 24px 100px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 900, marginBottom: 16 }}>
            All of This for $199/Month
          </h2>
          <p style={{ color: S.muted, fontSize: 17, marginBottom: 32 }}>No credit card. No contracts. 14-day free trial.</p>
          <button onClick={() => setModalOpen(true)} style={{ background: S.elec, color: '#fff', padding: '16px 48px', borderRadius: 10, fontSize: 17, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
            Start Free Trial
          </button>
        </div>
      </div>

      <SiteFooter onOpenModal={() => setModalOpen(true)} />
    </div>
  );
}
