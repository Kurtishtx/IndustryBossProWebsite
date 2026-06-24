import { MetadataRoute } from 'next';
import { hubPages } from '../lib/hub-data';
import { vsPages } from '../lib/vs-data';
import { featurePages } from '../lib/feature-data';
import { snowPosts } from '../lib/blog-snow-data';
import { snowPlowingPosts, iceManagementPosts, snowSchedulingPosts } from '../lib/blog-snow-sub-data';
import { poolServicePosts, poolCleaningPosts, poolMaintenancePosts, poolRoutePosts } from '../lib/blog-pool-data';
import { landscapingPosts, landscapeBusinessPosts, landscapeSchedulingPosts, lawnLandscapePosts, landscapeMaintenancePosts } from '../lib/blog-landscaping-data';

const BASE = 'https://industrybosspro.com';

const SILOS: { industry: string; posts: { slug: string; date: string }[] }[] = [
  { industry: 'snow-removal', posts: snowPosts },
  { industry: 'snow-plowing', posts: snowPlowingPosts },
  { industry: 'ice-management', posts: iceManagementPosts },
  { industry: 'snow-removal-scheduling', posts: snowSchedulingPosts },
  { industry: 'pool-service', posts: poolServicePosts },
  { industry: 'pool-cleaning', posts: poolCleaningPosts },
  { industry: 'pool-maintenance', posts: poolMaintenancePosts },
  { industry: 'pool-route', posts: poolRoutePosts },
  { industry: 'landscaping', posts: landscapingPosts },
  { industry: 'landscape-business', posts: landscapeBusinessPosts },
  { industry: 'landscape-scheduling', posts: landscapeSchedulingPosts },
  { industry: 'lawn-landscape', posts: lawnLandscapePosts },
  { industry: 'landscape-maintenance', posts: landscapeMaintenancePosts },
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
