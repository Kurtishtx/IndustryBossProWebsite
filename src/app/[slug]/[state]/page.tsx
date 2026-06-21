import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import HubPageTemplate from '../../../components/HubPageTemplate';
import { getMainHubs, getHubPage, STATE_DISPLAY } from '../../../lib/hub-data';

export async function generateStaticParams() {
  const params: { slug: string; state: string }[] = [];
  for (const hub of getMainHubs()) {
    for (const state of (hub.states || [])) {
      params.push({ slug: hub.slug, state: state.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; state: string }> }): Promise<Metadata> {
  const { slug, state } = await params;
  const page = getHubPage(slug);
  const stateName = STATE_DISPLAY[state];
  if (!page || !stateName) return {};
  const title = `${page.industry} Software in ${stateName} | IndustryBossPro`;
  const desc = `${page.industry} software for businesses in ${stateName}. Manage scheduling, routes, invoicing, and more. $199/mo flat, 14-day free trial.`;
  return {
    title,
    description: desc,
    openGraph: { title, description: desc, url: `https://industrybosspro.com/${slug}/${state}`, type: 'website' },
    alternates: { canonical: `https://industrybosspro.com/${slug}/${state}` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ slug: string; state: string }> }) {
  const { slug, state } = await params;
  const page = getHubPage(slug);
  const stateName = STATE_DISPLAY[state];
  if (!page || !stateName || !page.states?.find(s => s.slug === state)) notFound();
  return <HubPageTemplate page={page} stateName={stateName} />;
}
