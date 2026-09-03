import Link from 'next/link';

const S = { navy2: '#0a0a0a', elec: '#ff6a00', muted: 'rgba(245,245,245,0.5)', border: '#e63000', text: '#f5f5f5' };

const INDUSTRIES = [
  { label: 'Snow Removal Software', href: '/snow-removal-software' },
  { label: 'Pool Service Software', href: '/pool-service-software' },
  { label: 'Landscaping Software', href: '/landscaping-software' },
  { label: 'Irrigation Software', href: '/irrigation-software' },
  { label: 'Lawn Care Software', href: '/lawn-care-software' },
  { label: 'Pest Control Software', href: '/pest-control-software' },
  { label: 'Mosquito Control Software', href: '/mosquito-control-software' },
  { label: 'Fence Company Software', href: '/fence-company-software' },
  { label: 'Lawn Mowing Software', href: '/lawn-mowing-software' },
];

const FEATURES = [
  { label: 'Scheduling', href: '/features/field-service-scheduling-software' },
  { label: 'Route Optimization', href: '/features/service-route-optimization-software' },
  { label: 'Invoicing', href: '/features/field-service-invoicing-software' },
  { label: 'Pending Job Board', href: '/features/pending-job-board-software' },
  { label: 'Mobile App', href: '/features/field-service-mobile-app' },
  { label: 'Payment Processing', href: '/features/field-service-payment-processing' },
  { label: 'CRM', href: '/features/field-service-crm-software' },
  { label: 'Reporting', href: '/features/field-service-reporting-analytics' },
];

const BLOG_LINKS = [
  { label: 'All Articles', href: '/blog' },
  { label: 'Snow Removal Tips', href: '/blog/snow-removal' },
];

export default function SiteFooter({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer style={{ background: S.navy2, borderTop: `1px solid ${S.border}`, paddingTop: 64, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: S.text, marginBottom: 12 }}>
              IndustryBoss<span style={{ color: S.elec }}>Pro</span>
            </div>
            <p style={{ color: S.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              All-in-one field service software for snow, landscaping, irrigation, lawn care, pest control, mosquito, pool, fence, mowing, and pet waste removal. Three plans from $59/month.
            </p>
            <button onClick={onOpenModal} style={{
              background: S.elec, color: '#fff', border: 'none', borderRadius: 8,
              padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>
              Start Free Trial
            </button>
            <div style={{ marginTop: 18 }}>
              <a href="tel:+16828997304" style={{ display: 'block', color: S.elec, fontSize: 16, fontWeight: 800, textDecoration: 'none', marginBottom: 6 }}>&#9742;&nbsp;(682) 899-7304</a>
              <a href="mailto:Support@bossprohq.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none' }}>Support@bossprohq.com</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: S.elec, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Industries</div>
            {INDUSTRIES.map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: S.elec, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Features</div>
            {FEATURES.map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: S.elec, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Blog</div>
            {BLOG_LINKS.map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: S.elec, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
            <Link href="/#pricing" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>Pricing</Link>
            <Link href="/terms" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>Terms of Service</Link>
            <Link href="/privacy" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>Privacy Policy</Link>
          </div>
          <div>
            <Link href="/bosspro-family" style={{ display: 'block', fontSize: 12, fontWeight: 700, color: S.elec, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16, textDecoration: 'none' }}>BossPro Family →</Link>
            <a href="https://spraybosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>SprayBossPro — Spray &amp; Lawn Treatment Software</a>
            <a href="https://landscapebosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>LandscapeBossPro — Landscaping Software</a>
            <a href="https://mowbosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>MowBossPro — Lawn Mowing Software</a>
            <a href="https://poolbosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>PoolBossPro — Pool Service Software</a>
            <a href="https://fencebosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>FenceBossPro — Fence Contractor Software</a>
            <a href="https://irrigationbosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>IrrigationBossPro — Irrigation Software</a>
            <a href="https://poopbosspro.com" style={{ display: 'block', color: S.muted, fontSize: 13, textDecoration: 'none', marginBottom: 8, lineHeight: 1.4 }}>PoopBossPro — Dog Waste Removal Software</a>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: S.muted, fontSize: 13 }}>© {new Date().getFullYear()} IndustryBossPro. All rights reserved.</p>
          <p style={{ color: S.muted, fontSize: 13 }}>$199/mo · 14-day free trial · No contracts</p>
        </div>
      </div>
    </footer>
  );
}
