import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos | IndustryBossPro',
  description: 'Short videos of every IndustryBossPro feature: the job board, recurring mowing, routing, the crew app, invoicing, job costing, the client app, AI tools and more.',
  alternates: { canonical: '/videos' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
