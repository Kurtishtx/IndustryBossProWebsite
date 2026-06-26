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
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
                <defs>
                  <linearGradient id="hcg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#c47d0a"/>
                    <stop offset="100%" stopColor="#8a5a08"/>
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="url(#hcg)"/>
                <path d="M6 22 L8 12 L13 18 L16 9 L19 18 L24 12 L26 22 Z" fill="white"/>
                <rect x="6" y="22" width="20" height="3" rx="1.5" fill="white"/>
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
            <Link href="/blog">Blog</Link>
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
          <Link href="/blog" className="nav-mobile-link" onClick={() => toggleMenu(false)}>Blog</Link>
          <a href="https://my.industrybosspro.com" target="_blank" rel="noreferrer" className="nav-mobile-link" onClick={() => toggleMenu(false)}>Log In</a>
          <button className="nav-mobile-cta" onClick={() => { toggleMenu(false); onOpenModal(); }}>
            Start Free Trial
          </button>
        </div>
      )}
    </>
  );
}
