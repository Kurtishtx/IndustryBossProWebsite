import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import HubPageTemplate from '../../components/HubPageTemplate';
import { getHubPage, getAllHubSlugs } from '../../lib/hub-data';

export async function generateStaticParams() {
  return getAllHubSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getHubPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url: `https://industrybosspro.com/${slug}`,
      type: 'website',
    },
    alternates: { canonical: `https://industrybosspro.com/${slug}` },
  };
}

export default async function HubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getHubPage(slug);
  if (!page) notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://industrybosspro.com' },
      { '@type': 'ListItem', position: 2, name: page.industry, item: `https://industrybosspro.com/${slug}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPageTemplate page={page} />
    </>
  );
}
