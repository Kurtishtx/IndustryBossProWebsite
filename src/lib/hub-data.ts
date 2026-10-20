export interface HubPageData {
  slug: string;
  industry: string;
  isMain: boolean;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDesc: string;
  heroPoints: string[];
  painPoints: { problem: string; solution: string }[];
  features: { icon: string; title: string; desc: string }[];
  pendingBoard: string;
  blogSiloIndustry?: string;
  blog1Slug?: string;
  blog1Title?: string;
}

/* One hub page per blog category (the hub content lives next to the category's posts in
   src/lib/blog/posts/<category>.ts). The 38 other hub pages were synonym duplicates and now 301 - see src/proxy.ts. */
import { CATEGORIES } from './blog';

export const hubPages: HubPageData[] = CATEGORIES.map(c => c.hub);

export function getHubPage(slug: string): HubPageData | undefined {
  return hubPages.find(p => p.slug === slug);
}

export function getAllHubSlugs(): string[] {
  return hubPages.map(p => p.slug);
}
