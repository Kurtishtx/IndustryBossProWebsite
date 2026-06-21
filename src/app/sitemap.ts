import { MetadataRoute } from 'next';
import { hubPages, getMainHubs } from '../lib/hub-data';
import { vsPages } from '../lib/vs-data';
import { featurePages } from '../lib/feature-data';
import { snowPosts } from '../lib/blog-snow-data';

const BASE = 'https://industrybosspro.com';

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

  // State sub-pages
  for (const hub of getMainHubs()) {
    for (const state of (hub.states || [])) {
      urls.push({ url: `${BASE}/${hub.slug}/${state.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
    }
  }

  // VS pages
  for (const page of vsPages) {
    urls.push({ url: `${BASE}/vs/${page.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
  }

  // Feature pages
  for (const page of featurePages) {
    urls.push({ url: `${BASE}/features/${page.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });
  }

  // Blog pages
  urls.push({ url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  urls.push({ url: `${BASE}/blog/snow-removal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  for (const post of snowPosts) {
    urls.push({ url: `${BASE}/blog/snow-removal/${post.slug}`, lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.7 });
  }

  return urls;
}
