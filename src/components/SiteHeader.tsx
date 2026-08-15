'use client';
import { useState } from 'react';
import Link from 'next/link';

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
  { label: 'Pet Waste Removal Software', href: '/pet-waste-removal-software' },
  { label: "Soft Washing Software", href: '/soft-washing-software' },
  { label: "Pressure Washing Software", href: '/pressure-washing-software' },
  { label: "Window Cleaning Software", href: '/window-cleaning-software' },
  { label: "Junk Removal Software", href: '/junk-removal-software' },
  { label: 'Garage Door Service Software', href: '/garage-door-service-software' },
  { label: 'Carpet Cleaning Software', href: '/carpet-cleaning-software' },
  { label: 'Fire Inspection Software', href: '/fire-inspection-software' },
  { label: 'Hood Cleaning Software', href: '/hood-cleaning-software' },
];

const COMPARE = [
  { label: 'vs. Jobber', href: '/vs/jobber' },
  { label: 'vs. ServiceTitan', href: '/vs/servicetitan' },
  { label: 'vs. Housecall Pro', href: '/vs/housecall-pro' },
  { label: 'vs. FieldEdge', href: '/vs/fieldedge' },
  { label: 'vs. Workiz', href: '/vs/workiz' },
  { label: 'vs. ServiceM8', href: '/vs/servicem8' },
  { label: 'vs. RealGreen', href: '/vs/realgreen' },
  { label: 'vs. Service Autopilot', href: '/vs/service-autopilot' },
  { label: 'vs. SingleOps', href: '/vs/singleops' },
  { label: 'vs. Aspire', href: '/vs/aspire' },
  { label: 'vs. LMN', href: '/vs/lmn' },
  { label: 'vs. Kickserv', href: '/vs/kickserv' },
  { label: 'vs. mHelpDesk', href: '/vs/mhelp-desk' },
  { label: 'vs. Commusoft', href: '/vs/commusoft' },
];

export default function SiteHeader({ onOpenModal }: { onOpenModal: () => void }) {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  const toggleMenu = (val: boolean) => {
    setOpen(val);
    document.body.style.overflow = val ? 'hidden' : '';
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <Link href="/" onClick={() => toggleMenu(false)}>
              {/* The same mark as the tab icon and the app: black tile, gold ring, jewelled crown.
                  The header was still a flat white crown on orange, so the logo at the top of the
                  page and the icon in the browser tab were two different marks. */}
              <svg width="30" height="30" viewBox="0 0 100 100" style={{ flexShrink: 0 }} aria-hidden="true">
                <defs>
                  <linearGradient id="hcg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c1a18"/><stop offset="100%" stopColor="#000000"/>
                  </linearGradient>
                  <linearGradient id="hcm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fde68a"/><stop offset="100%" stopColor="#c79a09"/>
                  </linearGradient>
                  <linearGradient id="hcb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e2b508"/><stop offset="100%" stopColor="#917005"/>
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="24" fill="url(#hcg)"/>
                <rect x="2.5" y="2.5" width="95" height="95" rx="21.5" fill="none" stroke="#facc15" strokeWidth="5"/>
                <path d="M19 50 L34 63 L50 39 L66 63 L81 50 L81 74 L19 74 Z" fill="url(#hcm)"/>
                <rect x="17" y="74" width="66" height="10" rx="3" fill="url(#hcb)"/>
                <circle cx="19" cy="46.4" r="4" fill="#fffaf0"/>
                <circle cx="50" cy="35.4" r="4.6" fill="#fffaf0"/>
                <circle cx="81" cy="46.4" r="4" fill="#fffaf0"/>
                <circle cx="50" cy="56" r="6" fill="#e11d48"/>
                <circle cx="31" cy="63.5" r="4" fill="#22c55e"/>
                <circle cx="69" cy="63.5" r="4" fill="#38bdf8"/>
              </svg>
              <span className="navbar-name">IndustryBoss<span>Pro</span></span>
            </Link>
          </div>

          <div className="navbar-links">
            <Link href="/">Home</Link>
            <div className="nav-dropdown">
              <span className="nav-dropdown-trigger">Industries ▾</span>
              <div className="nav-dropdown-menu">
                <div className="nav-dropdown-inner">
                  {INDUSTRIES.map(s => (
                    <Link key={s.href} href={s.href} className="nav-dropdown-item">{s.label}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-dropdown">
              <span className="nav-dropdown-trigger">Compare ▾</span>
              <div className="nav-dropdown-menu">
                <div className="nav-dropdown-inner">
                  {COMPARE.map(c => (
                    <Link key={c.href} href={c.href} className="nav-dropdown-item">{c.label}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <a href="https://my.industrybosspro.com" target="_blank" rel="noreferrer">Log In</a>
            <button className="navbar-cta" onClick={onOpenModal}>
              Start Free Trial
            </button>
          </div>

          <button className="nav-hamburger" onClick={() => toggleMenu(!open)} aria-label="Menu">
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', marginBottom: '5px', transition: 'transform .2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', marginBottom: '5px', transition: 'opacity .2s', opacity: open ? 0 : 1 }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform .2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}></span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-mobile-menu">
          <Link href="/" className="nav-mobile-link" onClick={() => toggleMenu(false)}>Home</Link>
          <div className="nav-mobile-section">
            <div className="nav-mobile-group-trigger" onClick={() => setIndustriesOpen(!industriesOpen)}>
              Industries {industriesOpen ? '▴' : '▾'}
            </div>
            {industriesOpen && INDUSTRIES.map(s => (
              <Link key={s.href} href={s.href} className="nav-mobile-item" onClick={() => toggleMenu(false)}>{s.label}</Link>
            ))}
          </div>
          <div className="nav-mobile-section">
            <div className="nav-mobile-group-trigger" onClick={() => setCompareOpen(!compareOpen)}>
              Compare {compareOpen ? '▴' : '▾'}
            </div>
            {compareOpen && COMPARE.map(c => (
              <Link key={c.href} href={c.href} className="nav-mobile-item" onClick={() => toggleMenu(false)}>{c.label}</Link>
            ))}
          </div>
          <Link href="/features" className="nav-mobile-link" onClick={() => toggleMenu(false)}>Features</Link>
          <Link href="/pricing" className="nav-mobile-link" onClick={() => toggleMenu(false)}>Pricing</Link>
          <a href="https://my.industrybosspro.com" target="_blank" rel="noreferrer" className="nav-mobile-link" onClick={() => toggleMenu(false)}>Log In</a>
          <button className="nav-mobile-cta" onClick={() => { toggleMenu(false); onOpenModal(); }}>
            Start Free Trial
          </button>
        </div>
      )}
    </>
  );
}
