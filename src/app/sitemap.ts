import { MetadataRoute } from 'next';
import { hubPages } from '../lib/hub-data';
import { vsPages } from '../lib/vs-data';
import { featurePages } from '../lib/feature-data';
import { poolServicePosts } from '../lib/blog-pool-data';
import { snowSchedulingPosts } from '../lib/blog-snow-sub-data';
import { poolRoutePosts } from '../lib/blog-pool-data';
import { landscapeBusinessPosts } from '../lib/blog-landscaping-data';
import { landscapingPosts } from '../lib/blog-landscaping-data';
import { landscapeSchedulingPosts } from '../lib/blog-landscaping-data';
import { iceManagementPosts } from '../lib/blog-snow-sub-data';
import { weedControlPosts } from '../lib/blog-lawn-care-data';
import { poolCleaningPosts } from '../lib/blog-pool-data';
import { poolMaintenancePosts } from '../lib/blog-pool-data';
import { landscapeMaintenancePosts } from '../lib/blog-landscaping-data';
import { fertilizerPosts } from '../lib/blog-lawn-care-data';
import { snowPlowingPosts } from '../lib/blog-snow-sub-data';
import { lawnChemicalPosts } from '../lib/blog-lawn-care-data';
import { lawnTreatmentPosts } from '../lib/blog-lawn-care-data';
import { snowPosts } from '../lib/blog-snow-data';
import { lawnCarePosts } from '../lib/blog-lawn-care-data';
import { irrigationPosts, sprinklerSystemPosts, irrigationBusinessPosts, irrigationSchedulingPosts } from '../lib/blog-irrigation-data';
import { pestControlPosts, exterminatorPosts, pestManagementPosts, pestSchedulingPosts } from '../lib/blog-pest-data';
import { mosquitoControlPosts, mosquitoSprayPosts, mosquitoTreatmentPosts, mosquitoBusinessPosts } from '../lib/blog-mosquito-data';
import { fenceCompanyPosts, fenceInstallationPosts, fenceBusinessPosts } from '../lib/blog-fence-data';
import { lawnMowingPosts, mowingBusinessPosts, grassCuttingPosts, lawnMowingSchedulingPosts } from '../lib/blog-mowing-data';

const BASE = 'https://industrybosspro.com';

const SILOS: { industry: string; posts: { slug: string; date: string }[] }[] = [
  { industry: 'pool-service', posts: poolServicePosts },
  { industry: 'snow-removal-scheduling', posts: snowSchedulingPosts },
  { industry: 'pool-route', posts: poolRoutePosts },
  { industry: 'landscape-business', posts: landscapeBusinessPosts },
  { industry: 'landscaping', posts: landscapingPosts },
  { industry: 'landscape-scheduling', posts: landscapeSchedulingPosts },
  { industry: 'ice-management', posts: iceManagementPosts },
  { industry: 'weed-control', posts: weedControlPosts },
  { industry: 'pool-cleaning', posts: poolCleaningPosts },
  { industry: 'pool-maintenance', posts: poolMaintenancePosts },
  { industry: 'landscape-maintenance', posts: landscapeMaintenancePosts },
  { industry: 'fertilizer', posts: fertilizerPosts },
  { industry: 'snow-plowing', posts: snowPlowingPosts },
  { industry: 'lawn-chemical-application', posts: lawnChemicalPosts },
  { industry: 'lawn-treatment', posts: lawnTreatmentPosts },
  { industry: 'snow-removal', posts: snowPosts },
  { industry: 'lawn-care', posts: lawnCarePosts },
  { industry: 'irrigation', posts: irrigationPosts },
  { industry: 'sprinkler-system', posts: sprinklerSystemPosts },
  { industry: 'irrigation-business', posts: irrigationBusinessPosts },
  { industry: 'irrigation-scheduling', posts: irrigationSchedulingPosts },
  { industry: 'pest-control', posts: pestControlPosts },
  { industry: 'exterminator', posts: exterminatorPosts },
  { industry: 'pest-management', posts: pestManagementPosts },
  { industry: 'pest-control-scheduling', posts: pestSchedulingPosts },
  { industry: 'mosquito-control', posts: mosquitoControlPosts },
  { industry: 'mosquito-spray', posts: mosquitoSprayPosts },
  { industry: 'mosquito-treatment', posts: mosquitoTreatmentPosts },
  { industry: 'mosquito-business', posts: mosquitoBusinessPosts },
  { industry: 'fence-company', posts: fenceCompanyPosts },
  { industry: 'fence-installation', posts: fenceInstallationPosts },
  { industry: 'fence-business', posts: fenceBusinessPosts },
  { industry: 'lawn-mowing', posts: lawnMowingPosts },
  { industry: 'mowing-business', posts: mowingBusinessPosts },
  { industry: 'grass-cutting', posts: grassCuttingPosts },
  { industry: 'lawn-mowing-scheduling', posts: lawnMowingSchedulingPosts },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/features`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];

  // Hub pages
  for (const page of hubPages) {
    urls.push({ url: `${BASE}/${page.slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: page.isMain ? 0.9 : 0.8 });
  }

  // VS pages
  for (const page of vsPages) {
    urls.push({ url: `${BASE}/vs/${page.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
  }

  // Feature pages
  for (const page of featurePages) {
    urls.push({ url: `${BASE}/features/${page.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });
  }

  // Blog index
  urls.push({ url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });

  // All blog silos
  for (const silo of SILOS) {
    urls.push({ url: `${BASE}/blog/${silo.industry}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 });
    for (const post of silo.posts) {
      urls.push({ url: `${BASE}/blog/${silo.industry}/${post.slug}`, lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.7 });
    }
  }

  return urls;
}
