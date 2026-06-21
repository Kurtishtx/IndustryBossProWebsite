'use client';
import { useState } from 'react';
import type { BlogPost } from '../lib/blog-snow-data';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import TrialModal from './TrialModal';

const S = {
  navy1: '#030b15', navy2: '#050e1e', navy3: '#071224', navy4: '#0a1628',
  elec: '#00b8ff', text: '#e8f4ff', muted: 'rgba(232,244,255,0.65)',
  border: 'rgba(0,184,255,0.15)',
};

interface Props {
  post: BlogPost;
  prevPost: BlogPost;
  industry: string;
}

export default function BlogPostTemplate({ post, prevPost, industry }: Props) {
  const [modal, setModal] = useState(false);

  const industryLabel = industry
    .split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModal(true)} />
      <TrialModal open={modal} onClose={() => setModal(false)} />

      {/* ── HERO ── */}
      <div style={{ background: `linear-gradient(160deg, #030b15 0%, #040d1a 60%, #060f1f 100%)`, padding: '64px 24px 48px', borderBottom: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
            <a href="/blog" style={{ color: S.muted, fontSize: 13, textDecoration: 'none' }}>Blog</a>
            <span style={{ color: S.muted, fontSize: 13 }}>›</span>
            <a href={`/blog/${industry}`} style={{ color: S.muted, fontSize: 13, textDecoration: 'none' }}>{industryLabel}</a>
            <span style={{ color: S.muted, fontSize: 13 }}>›</span>
            <span style={{ color: S.elec, fontSize: 13, fontWeight: 600 }}>{post.title}</span>
          </div>
          <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.1)', border: `1px solid rgba(0,184,255,0.3)`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
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
            {post.intro}
          </p>

          {/* Silo chain link — naturally woven in after intro */}
          <p style={{ fontSize: 15, lineHeight: 1.8, color: S.muted, marginBottom: 40, padding: '16px 20px', background: 'rgba(0,184,255,0.05)', borderLeft: `3px solid ${S.elec}`, borderRadius: '0 8px 8px 0' }}>
            If you&apos;re exploring how to build a stronger {industryLabel.toLowerCase()} operation, our guide on{' '}
            <a href={`/blog/${industry}/${prevPost.slug}`} style={{ color: S.elec, textDecoration: 'none', fontWeight: 600 }}>
              {prevPost.title}
            </a>{' '}
            covers the foundational concepts you&apos;ll want in place first.
          </p>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.25, letterSpacing: '-0.3px' }}>
                {section.h2}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: S.muted }}>
                {/* Hub link woven naturally into section 2 */}
                {i === 1 ? (
                  <>
                    {section.content.replace(
                      post.hubKeyword,
                      `[HUB_LINK]`
                    ).split('[HUB_LINK]').map((part, j, arr) =>
                      j < arr.length - 1 ? (
                        <span key={j}>
                          {part}
                          <a href={`/${post.hubSlug}`} style={{ color: S.elec, textDecoration: 'none', fontWeight: 600 }}>
                            {post.hubKeyword}
                          </a>
                        </span>
                      ) : <span key={j}>{part}</span>
                    )}
                  </>
                ) : section.content}
              </p>
            </div>
          ))}

          {/* Bottom CTA */}
          <div style={{ background: `linear-gradient(135deg, ${S.navy4}, #0d1f3c)`, border: `1px solid ${S.border}`, borderRadius: 16, padding: '36px 32px', marginTop: 16, textAlign: 'center' }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
              Ready to Run a Tighter {industryLabel} Operation?
            </h3>
            <p style={{ color: S.muted, fontSize: 15, marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>
              IndustryBossPro gives you everything in this guide — and every other tool your business needs — for $199/month flat.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{ background: S.elec, color: '#030b15', border: 'none', borderRadius: 8, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}
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
              style={{ width: '100%', background: S.elec, color: '#030b15', border: 'none', borderRadius: 8, padding: '12px', fontSize: 14, fontWeight: 800, cursor: 'pointer' }}
            >
              Start Free Trial
            </button>
          </div>

          {/* Hub page link */}
          <div style={{ background: S.navy4, border: `1px solid ${S.border}`, borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: S.elec, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>Related</div>
            <p style={{ color: S.muted, fontSize: 13, marginBottom: 14, lineHeight: 1.6 }}>
              Explore all the tools built for {industryLabel.toLowerCase()} businesses:
            </p>
            <a
              href={`/${post.hubSlug}`}
              style={{ display: 'block', background: 'rgba(0,184,255,0.08)', border: `1px solid ${S.border}`, borderRadius: 8, padding: '12px 16px', color: S.elec, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
            >
              {industryLabel} Software →
            </a>
          </div>
        </aside>
      </div>

      <SiteFooter onOpenModal={() => setModal(true)} />
    </div>
  );
}
