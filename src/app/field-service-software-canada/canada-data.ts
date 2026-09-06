/* Copy for the /field-service-software-canada landing page, kept in a plain module so the
   server page can build FAQPage JSON-LD from the SAME array the client component renders —
   the structured data and the visible FAQ can never drift apart. */

export type CanadaFeature = { icon: string; title: string; body: string };
export type CanadaFaq = { q: string; a: string };

export const CANADA_FEATURES: CanadaFeature[] = [
  {
    icon: '🇨🇦',
    title: 'CAD invoicing, out of the box',
    body: 'Flip Country to Canada in Company Info and CAD becomes the default everywhere your customers see money — invoices, card-on-file charges, and Pay Now links, all running through a Canadian Stripe account you own. Their statements read in plain Canadian dollars.',
  },
  {
    icon: '🔁',
    title: 'Summer book and winter book, one login',
    body: 'Mowing in July, plowing in January — the same client list carries both. A property can hold a lawn program and a snow contract side by side, and you switch which one is live as the season turns. The fall data-entry marathon disappears.',
  },
  {
    icon: '🗺️',
    title: 'Routing built for Canadian geography',
    body: 'Build drive-order routes on a live map whether your stops are packed into a city subdivision or strung out along a rural route. Draw a circle around an area and schedule every property inside it in one motion.',
  },
  {
    icon: '🧾',
    title: 'Estimate → job → invoice, without retyping',
    body: 'Quote the work, win it, schedule it, bill it — one thread from first estimate to paid invoice. Approved estimates become jobs on their own, invoices fire when the job is done, and every dollar on the customer side is a Canadian one.',
  },
  {
    icon: '📱',
    title: 'A crew app and a customer app, both included',
    body: 'Your crew opens their phone to today’s stops, property notes and gate codes. Your customers open a branded app to see visits, check invoices, and pay their bill. Both come with the platform and both work anywhere in Canada.',
  },
  {
    icon: '📅',
    title: 'Recurring schedules per service type',
    body: 'Weekly cuts, multi-round treatment programs, per-event snow response — each service carries its own recurrence rules, so the calendar rebuilds itself when the season changes instead of you rebuilding it by hand.',
  },
];

export const CANADA_FAQS: CanadaFaq[] = [
  {
    q: 'Does IndustryBossPro work for field service companies in Canada?',
    a: 'Yes. Scheduling, routing, estimates, customer records, invoicing in Canadian dollars, the crew app and the customer app all work in Canada today. You connect your own Canadian Stripe account, and your customers pay in CAD.',
  },
  {
    q: 'Will my customers be billed in Canadian dollars?',
    a: 'Yes. Set your country to Canada on the Company Info page and every invoice, card charge, and payment link goes out in CAD automatically — no USD line items showing up on your customers’ statements.',
  },
  {
    q: 'Can one account really run lawn work in summer and snow in winter?',
    a: 'That is the point of the platform. IndustryBossPro is multi-vertical, so the same customers, properties, crews, and billing carry through the whole year — you run summer services May to October and snow and ice November to April without re-entering anyone or paying for a second system.',
  },
  {
    q: 'What does the subscription cost for a Canadian company?',
    a: 'Three plans — $59, $89, or $199 USD a month depending on the size of your operation, with unlimited clients and properties on every plan. The subscription itself bills in US dollars and your card’s bank converts — we would rather say that here than have you find it on a statement.',
  },
  {
    q: 'Does the automated texting work in Canada?',
    a: 'Texting in Canada requires registering a Canadian sending number with the carriers, which we set up with you during onboarding — it is not instant on day one. Email alerts and the customer-app notifications work everywhere from the moment you sign up.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — 14 days with no credit card required to start. Pick Canada as your country during setup and your very first invoice already bills in CAD.',
  },
];
