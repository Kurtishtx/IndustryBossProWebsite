import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import VsPageTemplate from '../../../components/VsPageTemplate';
import { getVsPage, getAllVsSlugs } from '../../../lib/vs-data';

export async function generateStaticParams() {
  return getAllVsSlugs().map(slug => ({ competitor: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor } = await params;
  const page = getVsPage(competitor);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    openGraph: { title: page.metaTitle, description: page.metaDesc, url: `https://industrybosspro.com/vs/${competitor}`, type: 'website' },
    alternates: { canonical: `https://industrybosspro.com/vs/${competitor}` },
  };
}

export default async function VsPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params;
  const page = getVsPage(competitor);
  if (!page) notFound();
  return <VsPageTemplate page={page} />;
}
