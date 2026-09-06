import type { Metadata } from 'next';
import CanadaPageClient from './CanadaPageClient';
import { CANADA_FAQS } from './canada-data';

export const metadata: Metadata = {
  title: 'Field Service Software for Canada | CAD Invoicing Built In — IndustryBossPro',
  description:
    'Field service software that runs the whole Canadian year — lawn and landscape in summer, snow and ice in winter, one platform. Invoice customers in Canadian dollars, route crews, try the live demo. From $59 USD/month, 14-day free trial.',
  openGraph: {
    title: 'Field Service Software for Canada | CAD Invoicing Built In — IndustryBossPro',
    description:
      'One platform for the Canadian year — summer services and winter snow on the same client list, with customer invoicing in CAD. Live demo, no sales call. From $59 USD/month.',
    url: 'https://industrybosspro.com/field-service-software-canada',
    type: 'website',
  },
  alternates: { canonical: 'https://industrybosspro.com/field-service-software-canada' },
};

/* FAQPage structured data is built from the SAME array the page renders (canada-data.ts), so the
   rich result and the visible FAQ can never disagree. Rendered server-side like the hub pages'
   BreadcrumbList, not injected from an effect. */
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CANADA_FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://industrybosspro.com' },
    { '@type': 'ListItem', position: 2, name: 'Field Service Software for Canada', item: 'https://industrybosspro.com/field-service-software-canada' },
  ],
};

export default function CanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <CanadaPageClient />
    </>
  );
}
