import type { Metadata } from 'next';
import { snowPosts } from '../../lib/blog-snow-data';
import { snowPlowingPosts, iceManagementPosts, snowSchedulingPosts } from '../../lib/blog-snow-sub-data';
import { poolServicePosts, poolCleaningPosts, poolMaintenancePosts, poolRoutePosts } from '../../lib/blog-pool-data';
import { landscapingPosts, landscapeBusinessPosts, landscapeSchedulingPosts, lawnLandscapePosts, landscapeMaintenancePosts } from '../../lib/blog-landscaping-data';

export const metadata: Metadata = {
  title: 'Field Service Business Blog | IndustryBossPro',
  description: 'In-depth guides for field service business owners covering snow removal, landscaping, pest control, irrigation, lawn care, and more.',
};

const S = {
  navy1: '#030b15', navy2: '#050e1e', navy4: '#0a1628',
  elec: '#00b8ff', text: '#e8f4ff', muted: 'rgba(232,244,255,0.65)',
  border: 'rgba(0,184,255,0.15)',
};

const silos = [
  { industry: 'snow-removal', label: 'Snow Removal', posts: snowPosts, hubSlug: 'snow-removal-software' },
  { industry: 'snow-plowing', label: 'Snow Plowing', posts: snowPlowingPosts, hubSlug: 'snow-plowing-software' },
  { industry: 'ice-management', label: 'Ice Management', posts: iceManagementPosts, hubSlug: 'ice-management-software' },
  { industry: 'snow-removal-scheduling', label: 'Snow Removal Scheduling', posts: snowSchedulingPosts, hubSlug: 'snow-removal-scheduling-software' },
  { industry: 'pool-service', label: 'Pool Service', posts: poolServicePosts, hubSlug: 'pool-service-software' },
  { industry: 'pool-cleaning', label: 'Pool Cleaning', posts: poolCleaningPosts, hubSlug: 'pool-cleaning-software' },
  { industry: 'pool-maintenance', label: 'Pool Maintenance', posts: poolMaintenancePosts, hubSlug: 'pool-maintenance-software' },
  { industry: 'pool-route', label: 'Pool Route', posts: poolRoutePosts, hubSlug: 'pool-route-software' },
  { industry: 'landscaping', label: 'Landscaping Software', posts: landscapingPosts, hubSlug: 'landscaping-software' },
  { industry: 'landscape-business', label: 'Landscape Business', posts: landscapeBusinessPosts, hubSlug: 'landscape-business-software' },
  { industry: 'landscape-scheduling', label: 'Landscape Scheduling', posts: landscapeSchedulingPosts, hubSlug: 'landscape-scheduling-software' },
  { industry: 'lawn-landscape', label: 'Lawn & Landscape', posts: lawnLandscapePosts, hubSlug: 'lawn-landscape-software' },
  { industry: 'landscape-maintenance', label: 'Landscape Maintenance', posts: landscapeMaintenancePosts, hubSlug: 'landscape-maintenance-software' },
];

export default function BlogIndex() {
  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <div style={{ background: `linear-gradient(160deg, #030b15, #060f1f)`, padding: '80px 24px 56px', borderBottom: `1px solid ${S.border}`, textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(0,184,255,0.1)', border: `1px solid rgba(0,184,255,0.3)`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
          The IndustryBossPro Blog
        </div>
        <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
          Field Service Business Guides
        </h1>
        <p style={{ color: S.muted, fontSize: 18, maxWidth: 640, margin: '0 auto' }}>
          In-depth articles for business owners running snow removal, landscaping, pest control, irrigation, lawn care, and every other field service trade.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        {silos.map(silo => (
          <div key={silo.industry} style={{ marginBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: S.elec, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 6 }}>Industry Guide Series</div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>{silo.label}</h2>
              </div>
              <a href={`/blog/${silo.industry}`} style={{ color: S.elec, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                View all {silo.posts.length} posts →
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {silo.posts.slice(0, 6).map((post, i) => (
                <a
                  key={post.slug}
                  href={`/blog/${silo.industry}/${post.slug}`}
                  style={{ display: 'block', background: S.navy4, border: `1.5px solid ${S.border}`, borderRadius: 12, padding: '24px', textDecoration: 'none' }}
                >
                  <div style={{ fontSize: 11, color: 'rgba(232,244,255,0.35)', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {silo.label} · {post.readTime} min
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 10 }}>
                    {post.title}
                  </h3>
                  <p style={{ color: S.muted, fontSize: 13, lineHeight: 1.6 }}>
                    {post.description.slice(0, 100)}…
                  </p>
                  <div style={{ marginTop: 16, color: S.elec, fontSize: 13, fontWeight: 600 }}>Read →</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
