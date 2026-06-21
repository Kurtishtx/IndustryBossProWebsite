import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import FeaturePageTemplate from '../../../components/FeaturePageTemplate';
import { getFeaturePage, getAllFeatureSlugs } from '../../../lib/feature-data';

export async function generateStaticParams() {
  return getAllFeatureSlugs().map(slug => ({ feature: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ feature: string }> }): Promise<Metadata> {
  const { feature } = await params;
  const page = getFeaturePage(feature);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    openGraph: { title: page.metaTitle, description: page.metaDesc, url: `https://industrybosspro.com/features/${feature}`, type: 'website' },
    alternates: { canonical: `https://industrybosspro.com/features/${feature}` },
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ feature: string }> }) {
  const { feature } = await params;
  const page = getFeaturePage(feature);
  if (!page) notFound();
  return <FeaturePageTemplate page={page} />;
}
