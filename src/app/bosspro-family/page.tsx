import type { Metadata } from 'next';
import FamilyPageTemplate from '../../components/FamilyPageTemplate';

export const metadata: Metadata = {
  title: 'The BossPro Family | Field Service Software for Every Trade',
  description: 'IndustryBossPro powers a family of field service apps — SprayBossPro, LandscapeBossPro, MowBossPro, PoolBossPro, FenceBossPro, IrrigationBossPro, and PoopBossPro. One platform, purpose-built per trade. $199/mo.',
  openGraph: {
    title: 'The BossPro Family | Field Service Software for Every Trade',
    description: 'One platform, purpose-built per trade — spray, landscape, mow, pool, fence, irrigation, and pet waste removal. All powered by IndustryBossPro at $199/mo.',
    url: 'https://industrybosspro.com/bosspro-family',
    type: 'website',
  },
  alternates: { canonical: 'https://industrybosspro.com/bosspro-family' },
};

export default function BossProFamilyPage() {
  return <FamilyPageTemplate />;
}
