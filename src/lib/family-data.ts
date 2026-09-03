export interface FamilyApp {
  name: string;        // e.g. "SprayBossPro"
  domain: string;      // e.g. "spraybosspro.com"
  url: string;         // full https url
  trade: string;       // short trade label, e.g. "Spray & Lawn Treatment"
  tagline: string;     // one-line positioning
  desc: string;        // 2–3 sentence contextual description (real copy, not boilerplate)
  hubHref?: string;    // matching IndustryBossPro industry hub page (internal contextual link), when Industry covers that trade
  hubLabel?: string;   // label for that internal link
  accent: string;      // brand accent color for the card chip
}

// The niche apps in the BossPro Family. IndustryBossPro is the parent hub — it runs every
// trade on one platform; each niche app below is the same engine focused on a single trade,
// for owners who want software branded to exactly what they do.
export const familyApps: FamilyApp[] = [
  {
    name: 'SprayBossPro',
    domain: 'spraybosspro.com',
    url: 'https://spraybosspro.com',
    trade: 'Spray & Lawn Treatment',
    tagline: 'Software for lawn spray, weed control, and chemical application crews.',
    desc: 'Built for spray techs running recurring chemical rounds. Log every application with product, rate, and area for full EPA compliance, optimize technician routes, and auto-bill the moment a round is marked complete. The waiting list surfaces every property due for its next treatment.',
    hubHref: '/lawn-care-software',
    hubLabel: 'Lawn Care Software on IndustryBossPro',
    accent: '#3fb56b',
  },
  {
    name: 'LandscapeBossPro',
    domain: 'landscapebosspro.com',
    url: 'https://landscapebosspro.com',
    trade: 'Landscaping',
    tagline: 'Software for landscape companies that design, install, and maintain.',
    desc: 'Run one-time installs and recurring maintenance contracts from one job board. Send estimates clients approve from their phone, track job costs against the bid in real time, and dispatch crews with photos and materials attached to every job.',
    hubHref: '/landscaping-software',
    hubLabel: 'Landscaping Software on IndustryBossPro',
    accent: '#4a9d5b',
  },
  {
    name: 'MowBossPro',
    domain: 'mowbosspro.com',
    url: 'https://mowbosspro.com',
    trade: 'Lawn Mowing',
    tagline: 'Software for mowing crews running weekly and bi-weekly routes.',
    desc: 'Build recurring mow routes once and let them repeat automatically. Crews follow their stop list on their phone, mark lawns done from the truck, and invoices fire on completion — so a full route bills itself without you touching a thing.',
    hubHref: '/lawn-mowing-software',
    hubLabel: 'Lawn Mowing Software on IndustryBossPro',
    accent: '#5aa838',
  },
  {
    name: 'PoolBossPro',
    domain: 'poolbosspro.com',
    url: 'https://poolbosspro.com',
    trade: 'Pool Service',
    tagline: 'Software for pool service techs logging chemistry on every stop.',
    desc: 'Optimize weekly pool routes, log pH, chlorine, and every treatment per pool, and track pumps, filters, and heaters by equipment. Recurring billing runs on your cycle and clients get an auto-notification with photos the second a stop is complete.',
    hubHref: '/pool-service-software',
    hubLabel: 'Pool Service Software on IndustryBossPro',
    accent: '#2f9bd4',
  },
  {
    name: 'FenceBossPro',
    domain: 'fencebosspro.com',
    url: 'https://fencebosspro.com',
    trade: 'Fence Contractors',
    tagline: 'Software for fence companies from first bid to final payment.',
    desc: 'Quote installs with materials and labor, send professional estimates clients sign digitally, and schedule crews by job phase. Track every project from lead to invoice so nothing sits half-finished and nothing goes unbilled.',
    hubHref: '/fence-company-software',
    hubLabel: 'Fence Company Software on IndustryBossPro',
    accent: '#ff6a00',
  },
  {
    name: 'IrrigationBossPro',
    domain: 'irrigationbosspro.com',
    url: 'https://irrigationbosspro.com',
    trade: 'Irrigation',
    tagline: 'Software for irrigation pros who live and die by season.',
    desc: 'Handle the full season — spring startups, mid-season repairs, and fall winterizations — from one waiting list you assign as crew capacity opens. Every property carries its system type, zone count, and repair history so techs show up knowing the setup.',
    hubHref: '/irrigation-software',
    hubLabel: 'Irrigation Software on IndustryBossPro',
    accent: '#2f86c4',
  },
  {
    name: 'PoopBossPro',
    domain: 'poopbosspro.com',
    url: 'https://poopbosspro.com',
    trade: 'Pet Waste Removal',
    tagline: 'Software for dog waste removal routes that run themselves.',
    desc: 'Build weekly scooping routes, let crews mark yards done with a photo from their phone, and bill subscriptions automatically every month. Add and slot new accounts into the nearest route instantly as you grow.',
    accent: '#9b59b6',
  },
  {
    name: 'SnowBossPro',
    domain: 'snowbosspro.com',
    url: 'https://snowbosspro.com',
    trade: 'Snow Removal & Plowing',
    tagline: 'Software for snow removal and plowing crews that live storm to storm.',
    desc: 'Start a storm and circle the map to queue every account for that event, dispatch plow and salt crews with GPS proof and photos on each push, and bill per-push, per-inch, or seasonal the moment the storm ends. De-icing logs and site records hold up when a slip-and-fall claim lands.',
    hubHref: '/',
    hubLabel: 'IndustryBossPro — All-in-One Field Service Software',
    accent: '#2b8fd6',
  },
  {
    name: 'IceBossPro',
    domain: 'icebosspro.com',
    url: 'https://icebosspro.com',
    trade: 'Ice Delivery & Distribution',
    tagline: 'Software for packaged ice delivery and distribution routes.',
    desc: 'Built for ice distributors running restock routes to stores, bars, and events. Build routes by circling a map, track every customer freezer and par-level, and let drivers capture proof-of-delivery on their phone. Per-delivery, recurring, and consignment billing invoice each stop automatically.',
    hubHref: '/',
    hubLabel: 'IndustryBossPro — All-in-One Field Service Software',
    accent: '#12aacb',
  },
];
