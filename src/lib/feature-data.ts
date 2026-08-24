export interface FeaturePageData {
  slug: string;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDesc: string;
  heroPoints: string[];
  sections: { title: string; body: string; icon: string }[];
  industries: string[];
}

export const featurePages: FeaturePageData[] = [
  {
    slug: 'field-service-scheduling-software',
    h1: 'Field Service Scheduling Software for Outdoor Service Companies',
    subtitle: 'Schedule recurring routes, one-time jobs, and seasonal work without double-booking crews or missing client appointments.',
    metaTitle: 'Field Service Scheduling Software | IndustryBossPro',
    metaDesc: 'Field service scheduling software for managing recurring routes, one-time jobs, and seasonal demand. $199/mo flat, all industries included.',
    heroPoints: [
      'Manage recurring and one-time jobs on the same drag-and-drop calendar',
      'Set crew capacity limits so you never overbook',
      'Automated client reminders cut no-shows by up to 40%',
    ],
    sections: [
      { icon: '📅', title: 'Recurring Schedule Management', body: 'Set up weekly, bi-weekly, monthly, or custom recurring schedules. Jobs generate automatically each cycle. Rain delays, cancellations, and reschedules are handled in bulk — one tap moves everything and clients get notified automatically.' },
      { icon: '⚡', title: 'One-Tap Crew Dispatch', body: 'Assign jobs to crews with one tap. Crews see their full schedule on their phone — in order, with property details, notes, and GPS navigation built in. No calls to the office to find out their next stop.' },
      { icon: '📋', title: 'Pending Job Board', body: 'The heart of the scheduling system is the split pending board: confirmed jobs with assigned dates on the left, jobs waiting for scheduling on the right. The waiting list fills automatically when service intervals come due or new requests come in.' },
      { icon: '⚖️', title: 'Crew Capacity Management', body: 'Set maximum jobs per crew per day. The system prevents overbooking before it happens. Visual capacity bars show available slots across your team at a glance.' },
      { icon: '🔔', title: 'Automated Client Reminders', body: 'Clients receive automated reminders 24 hours before their appointment. Self-rescheduling links let clients move their appointment without calling you. No-shows drop significantly.' },
      { icon: '📊', title: 'Schedule Performance Analytics', body: 'Track on-time arrival rates, jobs completed per day per crew, and schedule efficiency over time. See which days and routes are most productive — and which need adjustment.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'service-route-optimization-software',
    h1: 'Service Route Optimization Software That Puts More Stops Per Day in Every Crew',
    subtitle: 'Cut drive time, increase stops per hour, and run more efficient routes across all 10 of your field service industries.',
    metaTitle: 'Service Route Optimization Software | IndustryBossPro',
    metaDesc: 'Service route optimization software for field service businesses. Group stops geographically, cut drive time, maximize stops per crew per day. $199/mo.',
    heroPoints: [
      'Auto-sequence stops by geography to minimize backtracking',
      'Push optimized routes to crew phones with one click',
      'See more stops per day without adding trucks',
    ],
    sections: [
      { icon: '🗺️', title: 'Geographic Stop Clustering', body: 'Routes group stops by geographic proximity automatically. Crews follow the most efficient path through their territory without manually planning the order. The system handles it — every time, every route.' },
      { icon: '📱', title: 'Mobile Route App', body: 'Crews see their full route in order on their phone. Each stop includes property address, service notes, gate codes, and history. They tap to navigate and tap to complete. No paper, no back-and-forth calls.' },
      { icon: '📊', title: 'Route Efficiency Metrics', body: 'Track drive time vs service time per route. See which routes are efficient and which are burning fuel. Adjust stop sequences, territories, or crew assignments based on real performance data.' },
      { icon: '⚖️', title: 'Route Balancing', body: 'Visual workload comparison across all crews and routes. Drag stops from an overloaded route to an underutilized one. Keep every crew productive and every day full.' },
      { icon: '🔄', title: 'Dynamic Re-Routing', body: 'When a stop is cancelled or added mid-day, routes update automatically. The crew sees the updated sequence on their phone in real time. No office calls needed.' },
      { icon: '🏆', title: 'Territory Management', body: 'Define service territories by zip code, neighborhood, or custom boundary. As you grow, expand territories methodically without creating route chaos.' },
    ],
    industries: ['Pool Service', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Mowing', 'Snow & Ice Management'],
  },
  {
    slug: 'field-service-invoicing-software',
    h1: 'Field Service Invoicing Software That Bills Clients the Moment Work Is Done',
    subtitle: 'Auto-generate invoices on job completion, collect payment by card or ACH, and eliminate end-of-month billing marathons.',
    metaTitle: 'Field Service Invoicing Software | IndustryBossPro',
    metaDesc: 'Field service invoicing software with auto-invoicing on job completion, card and ACH payment collection, and recurring billing. $199/mo flat.',
    heroPoints: [
      'Invoices fire automatically when crew marks job complete',
      'Clients pay by card on file — no chasing, no waiting',
      'Recurring invoices run automatically on your billing cycle',
    ],
    sections: [
      { icon: '⚡', title: 'Job-Completion Triggered Invoicing', body: 'When a crew member marks a job complete on their phone, the invoice generates automatically and is sent to the client immediately. No manual entry, no batch processing, no delay.' },
      { icon: '💳', title: 'Integrated Payment Collection', body: 'Clients pay by credit card or ACH directly from their invoice. Cards on file charge automatically on your billing schedule. Collected funds deposit within 1-2 business days.' },
      { icon: '🔄', title: 'Recurring Billing', body: 'Set up weekly, monthly, or annual recurring invoices for maintenance contracts and service programs. They generate and collect automatically. No manual work each billing cycle.' },
      { icon: '📋', title: 'Invoice Customization', body: 'Add your logo, customize line items, include service photos, and set payment terms. Invoices look professional and include everything clients need to understand what they\'re paying for.' },
      { icon: '📊', title: 'Accounts Receivable Dashboard', body: 'See all outstanding invoices, payment status, and overdue accounts in one view. Send payment reminders with one click. Know your cash position without opening a spreadsheet.' },
      { icon: '📱', title: 'Field Invoicing', body: 'Crew leaders can generate and collect payment on-site before leaving the property. Collect signatures and same-day payment from the job site with no back-office delay.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'customer-management-field-service',
    h1: 'Customer Management for Field Service — Every Client, Every Property, Every History',
    subtitle: 'One complete customer record with contact info, property details, service history, photos, and notes. All in one place, accessible from anywhere.',
    metaTitle: 'Customer Management for Field Service | IndustryBossPro',
    metaDesc: 'Field service customer management software with property details, service history, photos, and notes per client. $199/mo flat.',
    heroPoints: [
      'Complete customer record with all properties, history, and documents',
      'Any team member can service any client with the full context they need',
      'Clients see their own history through a self-service portal',
    ],
    sections: [
      { icon: '👤', title: 'Complete Customer Records', body: 'Every client has a full record: contact info, billing details, service address(es), account notes, and complete service history. New hires have everything they need to service any client correctly on day one.' },
      { icon: '🏠', title: 'Multi-Property Support', body: 'Commercial clients with multiple locations, or residential clients with rental properties — all managed under one account. Service each property independently while billing the same client.' },
      { icon: '📋', title: 'Service History Per Property', body: 'Every service visit, every chemical application, every invoice — logged under the property, not just the client. Pull the full history of any property at any time. Know what was done, when, and by whom.' },
      { icon: '📸', title: 'Photo Library Per Customer', body: 'All service photos attach to the customer and property record. Before-and-after photos, damage documentation, property conditions — all searchable and available when you need them.' },
      { icon: '📱', title: 'Client Self-Service Portal', body: 'Clients can view their service history, upcoming appointments, and invoices through a branded client portal. They can also submit service requests, pay invoices, and update their information — without calling you.' },
      { icon: '🔔', title: 'Automated Communication', body: 'Appointment reminders, service completion notifications, invoice reminders, and renewal offers all fire automatically based on your settings. Clients stay informed without your team making calls.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'field-service-estimates-quoting',
    h1: 'Field Service Estimates & Quoting — Win More Jobs, Win Them Faster',
    subtitle: 'Build professional estimates in minutes, send them digitally, and close more jobs before your competitors even call back.',
    metaTitle: 'Field Service Estimates & Quoting | IndustryBossPro',
    metaDesc: 'Field service estimating software for building and sending professional quotes. Digital approval, fast turnaround, higher close rates. $199/mo.',
    heroPoints: [
      'Build detailed estimates with line items, photos, and terms in minutes',
      'Clients approve with one click from any device',
      'Track every open estimate and follow up automatically',
    ],
    sections: [
      { icon: '📝', title: 'Fast Estimate Building', body: 'Build estimates with service line items, material costs, labor rates, and optional add-ons. Saved templates mean common job types take under 2 minutes to quote. Add photos from the site visit directly to the proposal.' },
      { icon: '✅', title: 'Digital Approval', body: 'Clients receive a professional branded proposal by email or text. They view it on their phone and approve with one tap. Approved estimates convert to jobs automatically — no re-entry.' },
      { icon: '📊', title: 'Estimate Pipeline Tracking', body: 'See every open estimate by status — sent, viewed, approved, or declined. Know your close rate, average sale amount, and which services convert best. Follow up on stale estimates with one click.' },
      { icon: '💰', title: 'Upsell Packages', body: 'Include optional service upgrades on every estimate. Clients can add them with one click. Optional packages on estimates consistently increase average job value without any sales pressure.' },
      { icon: '📋', title: 'Estimate to Job Conversion', body: 'Approved estimates automatically create a job with all the details — service type, scope, pricing, and client info — pre-filled. No re-entry, no mistakes, no time wasted.' },
      { icon: '🔔', title: 'Automated Follow-Up', body: 'Estimates not opened after 48 hours trigger an automatic follow-up message. Estimates opened but not approved trigger a 72-hour follow-up. Your pipeline stays warm without manual effort.' },
    ],
    industries: ['Landscaping', 'Irrigation', 'Fence', 'Pest Control', 'Snow & Ice Management', 'Pool Service'],
  },
  {
    slug: 'pending-job-board-software',
    h1: 'The Pending Job Board: The Feature That Changes How You Manage Your Operation',
    subtitle: 'Two panels. Scheduled jobs with assigned dates on the left. Jobs waiting for scheduling on the right. Every piece of work your business has — on one screen.',
    metaTitle: 'Pending Job Board Software | IndustryBossPro',
    metaDesc: 'The IndustryBossPro Pending Job Board splits your work into scheduled (assigned date) and waiting list (no date yet). Built for field service operators. $199/mo.',
    heroPoints: [
      'See every job in your business — confirmed and pending — in one view',
      'Never lose track of work that\'s approved but not yet scheduled',
      'Pull from the waiting list to fill crew capacity in seconds',
    ],
    sections: [
      { icon: '📋', title: 'The Scheduled Panel', body: 'The left panel shows every job with a confirmed date and crew assignment. Sorted by date, filterable by industry or service type. Your entire confirmed schedule is visible in one place. This is your committed workload.' },
      { icon: '📋', title: 'The Waiting List Panel', body: 'The right panel is the waiting list — every job that is approved, real, and needs to happen, but doesn\'t have an assigned date yet. Chemical applications due for re-treatment. Startup requests waiting for crew availability. New client installs waiting on materials. Nothing in the waiting list is forgotten — it sits here until you assign it.' },
      { icon: '⚡', title: 'Why the Split Matters', body: 'Traditional job boards only show scheduled work. That means approved-but-unscheduled jobs live in someone\'s email, someone\'s head, or a sticky note. IndustryBossPro\'s waiting list captures everything that needs to be done so no work disappears between the cracks.' },
      { icon: '🔄', title: 'Automatic Waiting List Population', body: 'When a service interval completes (quarterly pest treatment, 21-day mosquito spray, annual irrigation startup), the next service automatically populates the waiting list at the right time. You don\'t have to remember — the system does.' },
      { icon: '🌾', title: 'Industry Examples', body: 'For mowing: waiting list holds new client add-ons and one-time requests. For snow: waiting list holds all properties pending their storm date. For lawn chemicals: waiting list holds every property due for their next application round. Same concept, every industry.' },
      { icon: '📊', title: 'Workload Visibility', body: 'The pending board gives you a complete picture of your business workload — not just what\'s scheduled, but what\'s coming. You can plan crew capacity, quote new clients with realistic timelines, and know exactly how much work you have before you sell the next job.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'field-service-mobile-app',
    h1: 'Field Service Mobile App That Puts Everything Your Crew Needs in Their Pocket',
    subtitle: 'Jobs, routes, property details, checklists, time tracking, and payment collection — all in a mobile app your crew will actually use.',
    metaTitle: 'Field Service Mobile App | IndustryBossPro',
    metaDesc: 'Field service mobile app for crew scheduling, job management, chemical logging, photos, and payment. Works on any iPhone or Android device. $199/mo.',
    heroPoints: [
      'Crews see their full schedule and route on their phone every morning',
      'Log service, chemicals, and photos from the job site in real time',
      'Collect signatures and payment before leaving the property',
    ],
    sections: [
      { icon: '📱', title: 'Daily Route View', body: 'Every morning, crew members open the app and see their full day — stops in order, addresses with GPS navigation, property notes, gate codes, and special instructions. No calls to the office to find out where they\'re going or what they need.' },
      { icon: '✅', title: 'Service Completion Logging', body: 'Crews tap through a service checklist at each stop, log time on site, and mark the job complete. Job completion triggers the invoice automatically — no paperwork, no end-of-day data entry.' },
      { icon: '🧪', title: 'Chemical & Treatment Logging', body: 'For chemical service companies, technicians log product, rate, coverage area, and conditions on-site. Records are EPA-compliant and immediately available in the system. No paper, no transcription errors.' },
      { icon: '⚗️', title: 'Daily Mix Calculator', body: 'Every morning the app totals exactly what each truck needs to mix for the day — gallons per mix from each job\'s square footage and your application rates, with the ounces of every product broken out. Enter what\'s already in the tank and it instantly recalculates how much more to mix. Owners can view every truck\'s mix sheet from one phone; techs see their own.' },
      { icon: '📸', title: 'On-Site Photo Capture', body: 'Before and after photos attach directly to the job record on the spot. Property condition documentation, completed work proof, and damage reports are captured and stored automatically.' },
      { icon: '💳', title: 'On-Site Payment Collection', body: 'Collect card payment, capture signatures, and generate a receipt before leaving the property. Funds clear faster and you don\'t have to chase clients for payment days later.' },
      { icon: '🔔', title: 'Real-Time Job Updates', body: 'When a job is reassigned, rescheduled, or updated in the office, the crew sees it on their phone immediately. No calls, no confusion about last-minute changes.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'field-service-payment-processing',
    h1: 'Field Service Payment Processing — Get Paid Faster Without Chasing Clients',
    subtitle: 'Accept credit cards and ACH payments in the field or online. Auto-charge cards on file. Stop spending Friday afternoons chasing unpaid invoices.',
    metaTitle: 'Field Service Payment Processing | IndustryBossPro',
    metaDesc: 'Field service payment processing for card, ACH, and auto-collect billing. Integrated invoicing and payment in one platform. $199/mo flat.',
    heroPoints: [
      'Accept cards and ACH payments in the field or via emailed invoice',
      'Auto-charge cards on file for recurring services',
      'Funds deposit within 1-2 business days',
    ],
    sections: [
      { icon: '💳', title: 'In-Person & Remote Payment', body: 'Collect card payment from a client\'s phone in the field using a mobile card reader, or let clients pay from the emailed invoice link from any device. Both methods deposit funds within 1-2 business days.' },
      { icon: '🔄', title: 'Auto-Collect for Recurring Services', body: 'Store client cards on file securely. Recurring service invoices generate and collect automatically on your billing schedule. Monthly lawn care, quarterly pest, weekly pool — all paid without anyone touching it.' },
      { icon: '🏦', title: 'ACH Bank Transfers', body: 'Lower-cost ACH payment option for clients who prefer bank transfer. ACH rates are significantly lower than card rates — better for high-ticket or recurring invoices.' },
      { icon: '📊', title: 'Collections Dashboard', body: 'See all outstanding invoices, partially paid balances, and failed payments in one view. Retry failed payments, send reminders, or flag for follow-up — all from one screen.' },
      { icon: '📋', title: 'Flexible Billing Options', body: 'Per-visit billing, monthly billing cycles, prepaid seasonal packages, milestone billing for installations — all supported. Bill the way your business and your clients want to operate.' },
      { icon: '📄', title: 'Receipts & Statements', body: 'Clients receive automatic receipts on payment. Pull client payment history and account statements on demand. Clean records for your clients and clean books for your business.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'field-service-crm-software',
    h1: 'Field Service CRM — Track Every Lead, Win More Business, Keep Every Client',
    subtitle: 'Manage leads, close estimates, retain clients, and grow referrals with a CRM built into your field service platform.',
    metaTitle: 'Field Service CRM Software | IndustryBossPro',
    metaDesc: 'Field service CRM for managing leads, estimates, client retention, and referrals. Built into IndustryBossPro. $199/mo flat.',
    heroPoints: [
      'Track every lead from first call to signed contract without losing one',
      'Know your close rate and which services sell best',
      'Automated follow-up sequences keep clients from churning',
    ],
    sections: [
      { icon: '🏆', title: 'Lead Tracking', body: 'Every new lead enters the CRM with source, contact info, and service requested. Follow-up reminders fire automatically. Overdue follow-ups surface on your dashboard every morning so nothing falls through.' },
      { icon: '📊', title: 'Sales Pipeline', body: 'Track open estimates by stage — sent, viewed, approved, or lost. Know your close rate by service type. See which marketing channels generate the most closes. Make better decisions with real data.' },
      { icon: '🔔', title: 'Automated Client Follow-Up', body: 'After every service, clients receive automated satisfaction messages. Retention follow-ups go out 30 days before service contracts expire. Renewal offers fire on your schedule — automatically.' },
      { icon: '⭐', title: 'Review Requests', body: 'Automated review request sequences go out after every positive service interaction. More reviews mean more Google visibility and more inbound leads without ad spend.' },
      { icon: '👥', title: 'Referral Tracking', body: 'Track where new clients are coming from. See which existing clients generate the most referrals. Reward your best referrers and build a referral program with real data behind it.' },
      { icon: '📈', title: 'Client Lifetime Value', body: 'See average client lifetime value by service type, by acquisition channel, and by market area. Know which clients are worth fighting for and which relationships to let go.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'service-contract-management-software',
    h1: 'Service Contract Management Software for Recurring Field Service Programs',
    subtitle: 'Create, manage, and auto-bill service contracts and maintenance agreements without paperwork or manual tracking.',
    metaTitle: 'Service Contract Management Software | IndustryBossPro',
    metaDesc: 'Service contract management software for creating, billing, and tracking field service maintenance agreements. $199/mo flat.',
    heroPoints: [
      'Create service contracts with automatic recurring billing built in',
      'Track every contract\'s status, renewals, and service history',
      'Automated renewal reminders reduce churn without manual follow-up',
    ],
    sections: [
      { icon: '📋', title: 'Contract Creation', body: 'Build service contracts with service scope, visit frequency, pricing, billing schedule, and contract terms. Send digitally for client signature. Approved contracts auto-create the recurring job schedule.' },
      { icon: '💵', title: 'Contract Billing', body: 'Monthly retainers, per-visit billing, pre-paid annual contracts — all supported with automatic invoicing. Contracts bill on your schedule without manual intervention.' },
      { icon: '🔄', title: 'Renewal Management', body: 'Track every contract\'s expiration date. Automated renewal offers go out 45 days before expiration. Clients renew with one click. Renewal rates improve without your team making a single call.' },
      { icon: '📊', title: 'Contract Performance', body: 'See monthly recurring revenue by contract type, renewal rates, and churn by service category. Know which contracts are most profitable and which clients cost more to service than they pay.' },
      { icon: '⚠️', title: 'Contract Compliance Tracking', body: 'Track service visits delivered vs visits promised per contract. Flag contracts where promised service isn\'t being delivered before clients notice and cancel.' },
      { icon: '📈', title: 'MRR Dashboard', body: 'Monthly recurring revenue from all active service contracts on one dashboard. Know your baseline revenue for next month before the month starts.' },
    ],
    industries: ['Pool Service', 'Pest Control', 'Mosquito Control', 'Lawn Care Chemicals', 'Landscaping', 'Mowing'],
  },
  {
    slug: 'field-service-reporting-analytics',
    h1: 'Field Service Reporting & Analytics — Know Your Numbers, Run a Better Business',
    subtitle: 'Revenue, job volume, crew performance, client retention, and profit by service type — all in one reporting dashboard.',
    metaTitle: 'Field Service Reporting & Analytics | IndustryBossPro',
    metaDesc: 'Field service reporting and analytics for revenue, crew performance, job volume, and client retention. $199/mo flat.',
    heroPoints: [
      'See revenue, costs, and profit by service type and by crew',
      'Track crew performance without micromanaging',
      'Know your client retention rate before your competitors notice it\'s slipping',
    ],
    sections: [
      { icon: '📊', title: 'Revenue Dashboard', body: 'Total revenue by week, month, and year. Broken down by service type, by crew, and by geographic territory. See seasonal trends and plan capacity for next year based on actual data.' },
      { icon: '👥', title: 'Crew Performance Reports', body: 'Jobs completed per day, average time on site, on-time arrival rate, and client satisfaction by crew and by technician. Manage your team with data, not gut feel.' },
      { icon: '💰', title: 'Job Profitability', body: 'Revenue vs labor cost vs material cost per job. Know your real margin after every cost is accounted for. Identify which service types and which properties are most profitable.' },
      { icon: '🔄', title: 'Client Retention Analytics', body: 'Client retention rate by service type, cancellation reasons, and cohort analysis by acquisition period. Know when clients typically churn and intervene before they do.' },
      { icon: '📈', title: 'Growth Metrics', body: 'New clients acquired per month, revenue per client over time, estimate close rate trends, and referral tracking. Understand what\'s driving growth and where to invest next.' },
      { icon: '🗺️', title: 'Geographic Revenue Heat Map', body: 'See revenue density by neighborhood, zip code, or service territory. Find your most profitable areas and target expansion or marketing effort where it will have the most impact.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
  {
    slug: 'multi-industry-field-service-software',
    h1: 'Multi-Industry Field Service Software — One Platform for Every Service Your Company Offers',
    subtitle: 'Snow removal, lawn care, pest control, pool service, irrigation, mosquito, mowing, landscaping, fence, and pet waste removal — all in one platform at one flat price.',
    metaTitle: 'Multi-Industry Field Service Software | IndustryBossPro',
    metaDesc: 'Multi-industry field service software for companies offering snow, lawn care, pest, pool, irrigation, mosquito, mowing, fence, landscaping, and pet waste removal. $199/mo flat.',
    heroPoints: [
      'Manage all 10 field service industries from one login',
      'One client record for clients across multiple service lines',
      'One flat price — no matter how many services you offer',
    ],
    sections: [
      { icon: '🌐', title: 'All 10 Industries in One Platform', body: 'IndustryBossPro is built to support snow removal, pool service, landscaping, irrigation, lawn care chemicals, pest control, mosquito control, fence, mowing, and pet waste removal — with industry-specific workflows for each. Companies that offer multiple services don\'t need multiple platforms.' },
      { icon: '👤', title: 'Unified Client Records', body: 'A client who uses you for mowing AND pest control has one record, one invoice history, and one communication thread. They see all their services in one client portal. You manage them from one account without duplication.' },
      { icon: '📋', title: 'Service-Specific Pending Boards', body: 'The pending job board can be filtered by service type. See your full mowing waiting list, or your full mosquito spray schedule, or everything across all industries at once — your choice.' },
      { icon: '💵', title: 'Bundled Service Billing', body: 'Bill multiple services on one invoice or separate by service type. Create service bundles that clients pay monthly — mowing + chemicals + pest all on one recurring invoice.' },
      { icon: '🔄', title: 'Cross-Sell Automation', body: 'Existing clients are your best growth opportunity. Automated cross-sell sequences offer pest control to lawn clients, irrigation to landscape clients, and mosquito to lawn chemical clients — all at the right time.' },
      { icon: '💰', title: 'Three Plans, From $49/Month', body: 'Every plan covers all 14 industries and unlimited clients and properties. Start is $49, Pro is $89, and Crew is $199 with unlimited users, employees and trucks. You are never billed per seat inside your plan, so growing the crew does not grow the bill.' },
    ],
    industries: ['Snow & Ice Management', 'Pool Service', 'Landscaping', 'Irrigation', 'Lawn Care Chemicals', 'Pest Control', 'Mosquito Control', 'Fence', 'Mowing', 'Pet Waste Removal'],
  },
];

export function getFeaturePage(slug: string): FeaturePageData | undefined {
  return featurePages.find(p => p.slug === slug);
}

export function getAllFeatureSlugs(): string[] {
  return featurePages.map(p => p.slug);
}
