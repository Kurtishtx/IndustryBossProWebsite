'use client';
import { useState } from 'react';
import type { BlogPost } from '../lib/blog-snow-data';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import TrialModal from './TrialModal';

const S = {
  navy1: '#0a0a0a', navy2: '#0a0a0a', navy3: '#111111', navy4: '#1a1a1a',
  elec: '#ff6a00', text: '#f5f5f5', muted: 'rgba(245,245,245,0.65)',
  border: '#e63000',
};

// Renders markdown-style [anchor](/url) links inside body prose as real links.
function renderInline(text: string) {
  const rx = /\[([^\]]+)\]\(([^)]+)\)/g;
  const out: (string | React.ReactNode)[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <a key={key++} href={m[2]} style={{ color: S.elec, textDecoration: 'none', fontWeight: 600 }}>
        {m[1]}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

interface Props {
  post: BlogPost;
  prevPost?: BlogPost;
  nextPost?: BlogPost;
  industry: string;
}

export default function BlogPostTemplate({ post, industry }: Props) {
  const [modal, setModal] = useState(false);

  const industryLabel = industry
    .split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModal(true)} />
      <TrialModal open={modal} onClose={() => setModal(false)} />
      <main>
      {/* ── HERO ── */}
      <div style={{ background: `linear-gradient(160deg, #0a0a0a 0%, #111111 60%, #1a1a1a 100%)`, padding: '64px 24px 48px', borderBottom: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
            <a href="/blog" style={{ color: S.muted, fontSize: 13, textDecoration: 'none' }}>Blog</a>
            <span style={{ color: S.muted, fontSize: 13 }}>›</span>
            <a href={`/blog/${industry}`} style={{ color: S.muted, fontSize: 13, textDecoration: 'none' }}>{industryLabel}</a>
            <span style={{ color: S.muted, fontSize: 13 }}>›</span>
            <span style={{ color: S.elec, fontSize: 13, fontWeight: 600 }}>{post.title}</span>
          </div>
          <div style={{ display: 'inline-block', background: 'rgba(255,106,0,0.1)', border: `1px solid #e63000`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            {industryLabel}
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', marginBottom: 20, letterSpacing: '-0.5px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: S.muted, fontSize: 14 }}>{formatDate(post.date)}</span>
            <span style={{ color: S.muted, fontSize: 14 }}>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'start' }}>

        {/* Main Article */}
        <article>
          {/* Intro */}
          <p style={{ fontSize: 18, lineHeight: 1.85, color: S.text, marginBottom: 32, fontWeight: 400 }}>
            {renderInline(post.intro)}
          </p>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.25, letterSpacing: '-0.3px' }}>
                {section.h2}
              </h2>
              {section.content.split('\n\n').map((para, pi) => (
                <p key={pi} style={{ fontSize: 16, lineHeight: 1.85, color: S.muted, marginBottom: 16 }}>
                  {renderInline(para)}
                </p>
              ))}
            </div>
          ))}

          {/* Bottom CTA */}
          <div style={{ background: `linear-gradient(135deg, ${S.navy4}, #1a1a1a)`, border: `1px solid ${S.border}`, borderRadius: 16, padding: '36px 32px', marginTop: 16, textAlign: 'center' }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
              Ready to Run a Tighter {industryLabel} Operation?
            </h3>
            <p style={{ color: S.muted, fontSize: 15, marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>
              IndustryBossPro gives you everything in this guide — and every other tool your business needs — for $199/month flat.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{ background: S.elec, color: '#fff', border: 'none', borderRadius: 8, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}
            >
              Start Your 14-Day Free Trial
            </button>
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ position: 'sticky', top: 88 }}>
          {/* Trial CTA */}
          <div style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 14, padding: '28px 24px', marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.elec, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>Start Free Today</div>
            <p style={{ color: S.text, fontSize: 15, fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>
              IndustryBossPro — $199/month, everything included.
            </p>
            <p style={{ color: S.muted, fontSize: 13, lineHeight: 1.65, marginBottom: 20 }}>
              Unlimited users, unlimited clients, all industries. 14-day free trial, no card required.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{ width: '100%', background: S.elec, color: '#fff', border: 'none', borderRadius: 8, padding: '12px', fontSize: 14, fontWeight: 800, cursor: 'pointer' }}
            >
              Start Free Trial
            </button>
          </div>
        </aside>
      </div>

      </main>
      <SiteFooter onOpenModal={() => setModal(true)} />
    </div>
  );
}
