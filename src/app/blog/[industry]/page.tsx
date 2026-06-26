import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { poolServicePosts } from '../../../lib/blog-pool-data';
import { poolRoutePosts } from '../../../lib/blog-pool-data';
import { landscapeBusinessPosts } from '../../../lib/blog-landscaping-data';
import { landscapingPosts } from '../../../lib/blog-landscaping-data';
import { landscapeSchedulingPosts } from '../../../lib/blog-landscaping-data';
import { iceManagementPosts } from '../../../lib/blog-snow-sub-data';
import { weedControlPosts } from '../../../lib/blog-lawn-care-data';
import { poolCleaningPosts } from '../../../lib/blog-pool-data';
import { poolMaintenancePosts } from '../../../lib/blog-pool-data';
import { landscapeMaintenancePosts } from '../../../lib/blog-landscaping-data';
import { fertilizerPosts } from '../../../lib/blog-lawn-care-data';
import { snowPlowingPosts } from '../../../lib/blog-snow-sub-data';
import { lawnChemicalPosts } from '../../../lib/blog-lawn-care-data';
import { lawnTreatmentPosts } from '../../../lib/blog-lawn-care-data';
import { snowPosts } from '../../../lib/blog-snow-data';
import { lawnCarePosts } from '../../../lib/blog-lawn-care-data';
import { irrigationPosts, sprinklerSystemPosts, irrigationBusinessPosts, irrigationSchedulingPosts } from '../../../lib/blog-irrigation-data';
import { pestControlPosts, exterminatorPosts, pestManagementPosts, pestSchedulingPosts } from '../../../lib/blog-pest-data';
import { mosquitoControlPosts, mosquitoSprayPosts, mosquitoTreatmentPosts, mosquitoBusinessPosts } from '../../../lib/blog-mosquito-data';
import { fenceCompanyPosts, fenceInstallationPosts, fenceBusinessPosts } from '../../../lib/blog-fence-data';
import { lawnMowingPosts, mowingBusinessPosts, grassCuttingPosts, lawnMowingSchedulingPosts } from '../../../lib/blog-mowing-data';

const SILO_DATA: Record<string, typeof poolServicePosts> = {
  'pool-service': poolServicePosts,
  'pool-route': poolRoutePosts,
  'landscape-business': landscapeBusinessPosts,
  'landscaping': landscapingPosts,
  'landscape-scheduling': landscapeSchedulingPosts,
  'ice-management': iceManagementPosts,
  'weed-control': weedControlPosts,
  'pool-cleaning': poolCleaningPosts,
  'pool-maintenance': poolMaintenancePosts,
  'landscape-maintenance': landscapeMaintenancePosts,
  'fertilizer': fertilizerPosts,
  'snow-plowing': snowPlowingPosts,
  'lawn-chemical-application': lawnChemicalPosts,
  'lawn-treatment': lawnTreatmentPosts,
  'snow-removal': snowPosts,
  'lawn-care': lawnCarePosts,
  'irrigation': irrigationPosts,
  'sprinkler-system': sprinklerSystemPosts,
  'irrigation-business': irrigationBusinessPosts,
  'irrigation-scheduling': irrigationSchedulingPosts,
  'pest-control': pestControlPosts,
  'exterminator': exterminatorPosts,
  'pest-management': pestManagementPosts,
  'pest-control-scheduling': pestSchedulingPosts,
  'mosquito-control': mosquitoControlPosts,
  'mosquito-spray': mosquitoSprayPosts,
  'mosquito-treatment': mosquitoTreatmentPosts,
  'mosquito-business': mosquitoBusinessPosts,
  'fence-company': fenceCompanyPosts,
  'fence-installation': fenceInstallationPosts,
  'fence-business': fenceBusinessPosts,
  'lawn-mowing': lawnMowingPosts,
  'mowing-business': mowingBusinessPosts,
  'grass-cutting': grassCuttingPosts,
  'lawn-mowing-scheduling': lawnMowingSchedulingPosts,
};

const SILO_META: Record<string, { title: string; description: string; hubSlug: string }> = {
  'pool-service': { title: 'Pool Service Business Tips & Guides', description: 'Guides for pool service operators covering route management, billing, retention, and software.', hubSlug: 'pool-service-software' },
  'pool-route': { title: 'Pool Route Software Tips & Guides', description: 'Guides for pool route operators on route optimization, density, billing, GPS tracking, and software.', hubSlug: 'pool-route-software' },
  'landscape-business': { title: 'Landscape Business Software Tips & Guides', description: 'Guides for landscape business owners on CRM, estimating, job costing, financials, and software.', hubSlug: 'landscape-business-software' },
  'landscaping': { title: 'Landscaping Software Tips & Guides', description: 'Guides for landscaping businesses on estimating, scheduling, crews, job costing, billing, and software.', hubSlug: 'landscaping-software' },
  'landscape-scheduling': { title: 'Landscape Scheduling Software Tips & Guides', description: 'Guides for landscape companies on crew scheduling, recurring visits, dispatch, and software.', hubSlug: 'landscape-scheduling-software' },
  'ice-management': { title: 'Ice Management Software Tips & Guides', description: 'Guides for ice management companies on deicing logs, anti-icing scheduling, liability records, and software.', hubSlug: 'ice-management-software' },
  'weed-control': { title: 'Weed Control Software Tips & Guides', description: 'Guides for weed control businesses on treatment scheduling, application records, billing, and software.', hubSlug: 'weed-control-software' },
  'pool-cleaning': { title: 'Pool Cleaning Software Tips & Guides', description: 'Guides for pool cleaning businesses on routes, chemical logging, scheduling, billing, and software.', hubSlug: 'pool-cleaning-software' },
  'pool-maintenance': { title: 'Pool Maintenance Software Tips & Guides', description: 'Guides for pool maintenance companies on seasonal scheduling, repairs, contracts, and software.', hubSlug: 'pool-maintenance-software' },
  'landscape-maintenance': { title: 'Landscape Maintenance Software Tips & Guides', description: 'Guides for landscape maintenance companies on recurring contracts, scheduling, billing, and software.', hubSlug: 'landscape-maintenance-software' },
  'fertilizer': { title: 'Fertilizer Software Tips & Guides', description: 'Guides for lawn fertilization companies on programs, scheduling, billing, renewals, and software.', hubSlug: 'fertilizer-software' },
  'snow-plowing': { title: 'Snow Plowing Software Tips & Guides', description: 'Guides for snow plowing contractors on dispatch, routing, fleet tracking, billing, and software.', hubSlug: 'snow-plowing-software' },
  'lawn-chemical-application': { title: 'Lawn Chemical Application Software Tips & Guides', description: 'Guides for licensed applicators on records, compliance, scheduling, billing, and software.', hubSlug: 'lawn-chemical-application-software' },
  'lawn-treatment': { title: 'Lawn Treatment Software Tips & Guides', description: 'Guides for lawn treatment companies on program scheduling, billing, renewals, and software.', hubSlug: 'lawn-treatment-software' },
  'snow-removal': { title: 'Snow Removal Software Tips & Guides', description: 'Guides for snow removal businesses on dispatch, routing, billing, salt tracking, and software.', hubSlug: 'snow-removal-software' },
  'lawn-care': { title: 'Lawn Care Business Tips & Guides', description: 'Guides for lawn care business owners on routes, chemical programs, billing, and software.', hubSlug: 'lawn-care-software' },
  'irrigation': { title: 'Irrigation Business Tips & Guides', description: 'Guides for irrigation contractors on scheduling, winterization, backflow, and software.', hubSlug: 'irrigation-software' },
  'sprinkler-system': { title: 'Sprinkler System Business Tips & Guides', description: 'Guides for sprinkler system installers and service companies on operations and software.', hubSlug: 'sprinkler-system-software' },
  'irrigation-business': { title: 'Irrigation Business Tips & Guides', description: 'Guides on growing and managing an irrigation business profitably.', hubSlug: 'irrigation-business-software' },
  'irrigation-scheduling': { title: 'Irrigation Scheduling Tips & Guides', description: 'Guides on scheduling irrigation startup, winterization, and service visits efficiently.', hubSlug: 'irrigation-scheduling-software' },
  'pest-control': { title: 'Pest Control Business Tips & Guides', description: 'Guides for pest control operators on scheduling, compliance, chemicals, and software.', hubSlug: 'pest-control-software' },
  'exterminator': { title: 'Exterminator Business Tips & Guides', description: 'Guides for exterminator businesses on operations, scheduling, and software.', hubSlug: 'exterminator-software' },
  'pest-management': { title: 'Pest Management Tips & Guides', description: 'Guides for pest management companies on programs, compliance, and software.', hubSlug: 'pest-management-software' },
  'pest-control-scheduling': { title: 'Pest Control Scheduling Tips & Guides', description: 'Guides on scheduling pest control routes, recurring visits, and technician dispatch.', hubSlug: 'pest-control-scheduling-software' },
  'mosquito-control': { title: 'Mosquito Control Business Tips & Guides', description: 'Guides for mosquito control operators on barrier spray routes, billing, and software.', hubSlug: 'mosquito-control-software' },
  'mosquito-spray': { title: 'Mosquito Spray Business Tips & Guides', description: 'Guides on running barrier spray programs, scheduling, and customer communication.', hubSlug: 'mosquito-spray-software' },
  'mosquito-treatment': { title: 'Mosquito Treatment Tips & Guides', description: 'Guides on mosquito treatment programs, product tracking, and client retention.', hubSlug: 'mosquito-treatment-software' },
  'mosquito-business': { title: 'Mosquito Business Tips & Guides', description: 'Guides on growing and managing a mosquito control business profitably.', hubSlug: 'mosquito-business-software' },
  'fence-company': { title: 'Fence Company Business Tips & Guides', description: 'Guides for fence companies on estimates, installs, project management, and software.', hubSlug: 'fence-company-software' },
  'fence-installation': { title: 'Fence Installation Tips & Guides', description: 'Guides on managing fence installation projects, crews, and materials efficiently.', hubSlug: 'fence-installation-software' },
  'fence-business': { title: 'Fence Business Management Tips & Guides', description: 'Guides on growing and managing a fence company profitably.', hubSlug: 'fence-business-management-software' },
  'lawn-mowing': { title: 'Lawn Mowing Business Tips & Guides', description: 'Guides for lawn mowing operators on routes, scheduling, billing, and software.', hubSlug: 'lawn-mowing-software' },
  'mowing-business': { title: 'Mowing Business Tips & Guides', description: 'Guides on growing and managing a lawn mowing business profitably.', hubSlug: 'mowing-business-software' },
  'grass-cutting': { title: 'Grass Cutting Business Tips & Guides', description: 'Guides for grass cutting operators on routes, scheduling, and software.', hubSlug: 'grass-cutting-software' },
  'lawn-mowing-scheduling': { title: 'Lawn Mowing Scheduling Tips & Guides', description: 'Guides on scheduling mowing routes, recurring visits, and crew dispatch.', hubSlug: 'lawn-mowing-scheduling-software' },
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
  navy1: '#1e1208', navy2: '#1e1208', navy4: '#2a1a0a',
  elec: '#c47d0a', text: '#f5ece0', muted: 'rgba(245,236,224,0.65)',
  border: 'rgba(196,125,10,0.15)',
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
      <div style={{ background: `linear-gradient(160deg, #1e1208, #241508)`, padding: '72px 24px 48px', borderBottom: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(196,125,10,0.1)', border: `1px solid rgba(196,125,10,0.3)`, color: S.elec, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
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
                <div style={{ background: 'rgba(196,125,10,0.12)', border: `1px solid rgba(196,125,10,0.25)`, borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: S.elec, fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: S.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{post.description}</p>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span style={{ color: 'rgba(245,236,224,0.35)', fontSize: 12 }}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span style={{ color: 'rgba(245,236,224,0.35)', fontSize: 12 }}>{post.readTime} min read</span>
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
