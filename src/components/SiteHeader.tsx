'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const S = {
  bg: '#030b15',
  border: 'rgba(0,184,255,0.18)',
  text: '#e8f4ff',
  muted: 'rgba(232,244,255,0.65)',
  elec: '#00b8ff',
  dropBg: '#050e1e',
  dropBorder: 'rgba(0,184,255,0.15)',
};

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

const CrownLogo = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="hcg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00b8ff"/>
        <stop offset="100%" stopColor="#0055a5"/>
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#hcg)"/>
    <path d="M6 22 L8 12 L13 18 L16 9 L19 18 L24 12 L26 22 Z" fill="white"/>
    <rect x="6" y="22" width="20" height="3" rx="1.5" fill="white"/>
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Dropdown({ label, items, wide }: { label: string; items: { label: string; href: string }[]; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: open ? S.text : S.muted, fontSize: 14, fontWeight: 500,
        display: 'flex', alignItems: 'center', gap: 5, padding: '4px 0',
        transition: 'color .15s', fontFamily: 'inherit',
      }}
        onMouseEnter={e => (e.currentTarget.style.color = S.text)}
        onMouseLeave={e => { if (!open) e.currentTarget.style.color = S.muted; }}>
        {label}
        <ChevronDown open={open} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 10px)', left: '50%',
          transform: 'translateX(-50%)',
          background: S.dropBg, border: `1px solid ${S.dropBorder}`,
          borderRadius: 12, padding: '8px 0',
          minWidth: wide ? 240 : 220, zIndex: 200,
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
        }}>
          {items.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'block', color: S.muted, textDecoration: 'none',
              fontSize: 14, padding: '9px 20px', transition: 'color .12s, background .12s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.background = 'rgba(0,184,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.muted; e.currentTarget.style.background = 'transparent'; }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const NAV_LINK_STYLE = {
  color: S.muted, textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color .15s',
};

export default function SiteHeader({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCompareOpen, setMobileCompareOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: `rgba(3,11,21,0.97)`, backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${S.border}`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <CrownLogo />
            <span style={{ fontSize: 18, fontWeight: 800, color: S.text, letterSpacing: '-0.4px' }}>
              IndustryBoss<span style={{ color: S.elec }}>Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            <Dropdown label="Industries" items={INDUSTRIES} />
            <Dropdown label="Compare" items={COMPARE} wide />
            <Link href="/features" style={NAV_LINK_STYLE}
              onMouseEnter={e => (e.currentTarget.style.color = S.text)}
              onMouseLeave={e => (e.currentTarget.style.color = S.muted)}>
              Features
            </Link>
            <Link href="/pricing" style={NAV_LINK_STYLE}
              onMouseEnter={e => (e.currentTarget.style.color = S.text)}
              onMouseLeave={e => (e.currentTarget.style.color = S.muted)}>
              Pricing
            </Link>
            <Link href="/blog" style={NAV_LINK_STYLE}
              onMouseEnter={e => (e.currentTarget.style.color = S.text)}
              onMouseLeave={e => (e.currentTarget.style.color = S.muted)}>
              Blog
            </Link>
            <a href="https://my.industrybosspro.com" style={NAV_LINK_STYLE}
              onMouseEnter={e => (e.currentTarget.style.color = S.text)}
              onMouseLeave={e => (e.currentTarget.style.color = S.muted)}>
              Log In
            </a>
            <button onClick={onOpenModal} style={{
              background: S.elec, color: '#030b15', border: 'none',
              borderRadius: 10, padding: '10px 22px', fontSize: 14, fontWeight: 700,
              cursor: 'pointer', transition: 'opacity .15s', whiteSpace: 'nowrap',
              fontFamily: 'inherit',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              Start Free Trial
            </button>
          </nav>

          {/* Hamburger */}
          <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" stroke={S.text} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="20" y1="4" x2="4" y2="20" stroke={S.text} strokeWidth="2" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" stroke={S.text} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="21" y2="12" stroke={S.text} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="17" x2="21" y2="17" stroke={S.text} strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: '#040d1a', borderTop: `1px solid ${S.border}`, paddingBottom: 16, maxHeight: 'calc(100vh - 66px)', overflowY: 'auto' }}>

            {/* Industries accordion */}
            <button onClick={() => setMobileIndustriesOpen(o => !o)} style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              color: S.muted, fontSize: 15, fontWeight: 500, padding: '13px 24px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: `1px solid rgba(0,184,255,0.08)`, fontFamily: 'inherit',
            }}>
              Industries
              <ChevronDown open={mobileIndustriesOpen} />
            </button>
            {mobileIndustriesOpen && (
              <div style={{ background: 'rgba(0,0,0,0.2)' }}>
                {INDUSTRIES.map(item => (
                  <Link key={item.href} href={item.href} onClick={closeMenu} style={{
                    display: 'block', color: 'rgba(232,244,255,0.5)', textDecoration: 'none',
                    fontSize: 14, padding: '10px 24px 10px 40px', borderBottom: `1px solid rgba(0,184,255,0.05)`,
                  }}>{item.label}</Link>
                ))}
              </div>
            )}

            {/* Compare accordion */}
            <button onClick={() => setMobileCompareOpen(o => !o)} style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              color: S.muted, fontSize: 15, fontWeight: 500, padding: '13px 24px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: `1px solid rgba(0,184,255,0.08)`, fontFamily: 'inherit',
            }}>
              Compare
              <ChevronDown open={mobileCompareOpen} />
            </button>
            {mobileCompareOpen && (
              <div style={{ background: 'rgba(0,0,0,0.2)' }}>
                {COMPARE.map(item => (
                  <Link key={item.href} href={item.href} onClick={closeMenu} style={{
                    display: 'block', color: 'rgba(232,244,255,0.5)', textDecoration: 'none',
                    fontSize: 14, padding: '10px 24px 10px 40px', borderBottom: `1px solid rgba(0,184,255,0.05)`,
                  }}>{item.label}</Link>
                ))}
              </div>
            )}

            {[
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Blog', href: '/blog' },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={closeMenu} style={{
                display: 'block', color: S.muted, textDecoration: 'none', fontSize: 15,
                fontWeight: 500, padding: '13px 24px', borderBottom: `1px solid rgba(0,184,255,0.08)`,
              }}>{l.label}</Link>
            ))}
            <a href="https://my.industrybosspro.com" style={{
              display: 'block', color: S.muted, textDecoration: 'none', fontSize: 15,
              fontWeight: 500, padding: '13px 24px', borderBottom: `1px solid rgba(0,184,255,0.08)`,
            }}>Log In</a>

            <div style={{ padding: '16px 24px 4px' }}>
              <button onClick={() => { closeMenu(); onOpenModal(); }} style={{
                width: '100%', background: S.elec, color: '#030b15', border: 'none',
                borderRadius: 10, padding: '15px 20px', fontSize: 16, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
