import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { snowPosts } from '../../../lib/blog-snow-data';
import { snowPlowingPosts, iceManagementPosts, snowSchedulingPosts } from '../../../lib/blog-snow-sub-data';
import { poolServicePosts, poolCleaningPosts, poolMaintenancePosts, poolRoutePosts } from '../../../lib/blog-pool-data';

const SILO_DATA: Record<string, typeof snowPosts> = {
  'snow-removal': snowPosts,
  'snow-plowing': snowPlowingPosts,
  'ice-management': iceManagementPosts,
  'snow-removal-scheduling': snowSchedulingPosts,
  'pool-service': poolServicePosts,
  'pool-cleaning': poolCleaningPosts,
  'pool-maintenance': poolMaintenancePosts,
  'pool-route': poolRoutePosts,
};

const SILO_META: Record<string, { title: string; description: string; hubSlug: string }> = {
  'snow-removal': { title: 'Snow Removal Business Tips & Guides', description: '30 in-depth guides for snow removal business owners covering pricing, routing, dispatching, crews, and software.', hubSlug: 'snow-removal-software' },
  'snow-plowing': { title: 'Snow Plowing Business Tips & Guides', description: 'Guides for snow plowing operators covering fleet management, route optimization, contracts, and software.', hubSlug: 'snow-plowing-software' },
  'ice-management': { title: 'Ice Management Business Tips & Guides', description: 'Guides for ice management operators covering liquid application, salt tracking, contracts, and compliance.', hubSlug: 'ice-management-software' },
  'snow-removal-scheduling': { title: 'Snow Removal Scheduling Tips & Guides', description: 'Guides for snow removal companies on trigger-based dispatch, storm scheduling, and crew management.', hubSlug: 'snow-removal-scheduling-software' },
  'pool-service': { title: 'Pool Service Business Tips & Guides', description: 'Guides for pool service operators covering route management, billing, retention, and software.', hubSlug: 'pool-service-software' },
  'pool-cleaning': { title: 'Pool Cleaning Business Tips & Guides', description: 'Guides for pool cleaning companies on chemical tracking, scheduling, reporting, and crew management.', hubSlug: 'pool-cleaning-software' },
  'pool-maintenance': { title: 'Pool Maintenance Business Tips & Guides', description: 'Guides for pool maintenance operators covering seasonal scheduling, repairs, upsells, and contracts.', hubSlug: 'pool-maintenance-software' },
  'pool-route': { title: 'Pool Route Business Tips & Guides', description: 'Guides on building, optimizing, buying, and managing pool service routes profitably.', hubSlug: 'pool-route-software' },
};

export async function generateStaticParams() {
  return Object.keys(SILO_DATA).map(industry => ({ industry }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ industry: string }> }
): Promise<Metadata> {
  const { industry } = await params;
  const meta = SILO_META[industry];
  if (!meta) return {};
  return { title: `${meta.title} | IndustryBossPro Blog`, description: meta.description };
}

const S = {
  navy1: '#030b15', navy2: '#050e1e', navy4: '#0a1628',
  elec: '#00b8ff', text: '#e8f4ff', muted: 'rgba(232,244,255,0.65)',
  border: 'rgba(0,184,255,0.15)',
};

export default async function SiloIndexPage(
  { params }: { params: Promise<{ industry: string }> }
) {
  const { industry } = await params;
  const posts = SILO_DATA[industry];
  const meta = SILO_META[industry];
  if (!posts || !meta) notFound();

  const label = industry.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <div style={{ background: `linear-gradient(160deg, #030b15, #060f1f)`, padding: '72px 24px 48px', borderBottom: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.1)', border: `1px solid rgba(0,184,255,0.3)`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            {label}
          </div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
            {meta.title}
          </h1>
          <p style={{ color: S.muted, fontSize: 17, maxWidth: 640 }}>{meta.description}</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          {posts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${industry}/${post.slug}`}
              style={{ display: 'block', background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 14, padding: '28px 28px', textDecoration: 'none', transition: 'border-color .2s' }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0,184,255,0.12)', border: `1px solid rgba(0,184,255,0.25)`, borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: S.elec, fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: S.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{post.description}</p>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span style={{ color: 'rgba(232,244,255,0.35)', fontSize: 12 }}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span style={{ color: 'rgba(232,244,255,0.35)', fontSize: 12 }}>{post.readTime} min read</span>
                    <span style={{ color: S.elec, fontSize: 13, fontWeight: 600, marginLeft: 'auto' }}>Read →</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: '32px', background: S.navy2, border: `1px solid ${S.border}`, borderRadius: 14, textAlign: 'center' }}>
          <p style={{ color: S.muted, fontSize: 15, marginBottom: 16 }}>
            Looking for software built specifically for {label.toLowerCase()} businesses?
          </p>
          <a href={`/${meta.hubSlug}`} style={{ color: S.elec, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            Explore {label} Software →
          </a>
        </div>
      </div>
    </div>
  );
}
