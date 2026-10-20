/* The blog covers the services IndustryBossPro is built for: lawn companies and the services their customers
   buy alongside lawn work. One category per service, one hub page per category.

   It used to be 50 near-duplicate categories x 30 templated posts (1,500 pages), which Google treats as
   mass-produced content and stopped showing. Every removed URL now 301s to its closest page here - see
   src/lib/redirects.json and src/proxy.ts. Don't add synonym categories ("pool-route", "pool-cleaning"...)
   back: one category per service. */
import type { BlogPost } from './types';
import type { HubPageData } from '../hub-data';
import * as lawnCare from './posts/lawn-care';
import * as lawnMowing from './posts/lawn-mowing';
import * as landscaping from './posts/landscaping';
import * as pestControl from './posts/pest-control';
import * as mosquitoControl from './posts/mosquito-control';
import * as irrigation from './posts/irrigation';
import * as poolService from './posts/pool-service';
import * as snowRemoval from './posts/snow-removal';
import * as pressureWashing from './posts/pressure-washing';
import * as petWaste from './posts/pet-waste';
import * as gutterCleaning from './posts/gutter-cleaning';
import * as junkRemoval from './posts/junk-removal';

export type { BlogPost };

export interface BlogCategory {
  slug: string;
  label: string;
  title: string;
  description: string;
  /** Dedicated BossPro app for companies that only do this service */
  sister: { name: string; url: string } | null;
  posts: BlogPost[];
  hub: HubPageData;
}

function cat(slug: string, label: string, description: string, sister: BlogCategory['sister'], mod: { posts: BlogPost[]; hub: HubPageData }): BlogCategory {
  return { slug, label, title: `${label} Software Guides`, description, sister, posts: mod.posts, hub: mod.hub };
}

export const CATEGORIES: BlogCategory[] = [
  cat('lawn-care', 'Lawn Care & Treatments', 'Fertilizer and weed control rounds, application records, product rates, prepaid programs and renewals for lawn treatment companies.', { name: 'SprayBossPro', url: 'https://spraybosspro.com' }, lawnCare),
  cat('lawn-mowing', 'Mowing', 'Weekly and every-other-week mowing routes, rain delays, crew balancing, per-cut and monthly billing for mowing companies.', { name: 'MowBossPro', url: 'https://mowbosspro.com' }, lawnMowing),
  cat('landscaping', 'Landscaping', 'Estimates customers approve online, job costing, materials, crew scheduling and maintenance contracts for landscape companies.', { name: 'LandscapeBossPro', url: 'https://landscapebosspro.com' }, landscaping),
  cat('pest-control', 'Pest Control', 'Recurring treatment plans, technician routes, chemical records and re-services for lawn companies that add pest control.', { name: 'PestBossPro', url: 'https://pestbosspro.com' }, pestControl),
  cat('mosquito-control', 'Mosquito Control', 'Barrier spray intervals, seasonal programs, product records and routes for mosquito control services.', { name: 'PestBossPro', url: 'https://pestbosspro.com' }, mosquitoControl),
  cat('irrigation', 'Irrigation', 'Spring startups, winterizations, repair calls, parts and maintenance plans for irrigation and sprinkler services.', { name: 'IrrigationBossPro', url: 'https://irrigationbosspro.com' }, irrigation),
  cat('pool-service', 'Pool Service', 'Weekly pool routes, water chemistry logs, openings and closings, repairs and monthly billing for pool service companies.', { name: 'PoolBossPro', url: 'https://poolbosspro.com' }, poolService),
  cat('snow-removal', 'Snow & Ice', 'Storm dispatch, plow routes, salt records, per-push and seasonal billing for lawn companies that plow in winter.', { name: 'SnowBossPro', url: 'https://snowbosspro.com' }, snowRemoval),
  cat('pressure-washing', 'Pressure Washing', 'Square-footage estimates, house and roof washing, recurring cleanings and commercial accounts for pressure washing services.', { name: 'PressureWashingBossPro', url: 'https://pressurewashingbosspro.com' }, pressureWashing),
  cat('pet-waste', 'Pet Waste Removal', 'Weekly yard routes, subscription billing, gate and dog notes, initial cleanups and seasonal pauses for pet waste services.', { name: 'PoopBossPro', url: 'https://poopbosspro.com' }, petWaste),
  cat('gutter-cleaning', 'Gutter Cleaning', 'Spring and fall gutter rushes, pricing by story and footage, gutter guard upsells and follow-ups for lawn companies that clean gutters.', null, gutterCleaning),
  cat('junk-removal', 'Junk Removal', 'Truck-load pricing, same-day booking, dispatch, dump fees and commercial pickups for junk and yard debris hauling.', { name: 'JunkBossPro', url: 'https://junkbosspro.com' }, junkRemoval),
];

export function getCategory(slug: string): BlogCategory | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
