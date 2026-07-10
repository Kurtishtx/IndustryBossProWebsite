import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "IndustryBossPro | All-In-One Field Service Software",
  description: "The only software built for every field service industry — Snow, Landscaping, Irrigation, Lawn Care, Pest Control and more. $199/month, everything included, 14-day free trial.",
};

// Site-wide structured data. Organization + WebSite establish the brand entity;
// SoftwareApplication with the $199 offer makes the product eligible for rich results.
const orgLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://industrybosspro.com/#organization',
      name: 'IndustryBossPro',
      url: 'https://industrybosspro.com',
      logo: 'https://industrybosspro.com/icon.svg',
      description: 'All-in-one field service management software for the trades — scheduling, routing, invoicing, payments, CRM, and a crew mobile app. $199/month, everything included.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'Support@bossprohq.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://industrybosspro.com/#website',
      url: 'https://industrybosspro.com',
      name: 'IndustryBossPro',
      publisher: { '@id': 'https://industrybosspro.com/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'IndustryBossPro',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description: 'Field service software for scheduling, route optimization, estimates, auto-invoicing, card payments, two-way SMS, chemical compliance logging, and a crew mobile app.',
      offers: {
        '@type': 'Offer',
        price: '199',
        priceCurrency: 'USD',
        description: '$199/month flat — unlimited users, 14-day free trial, no contracts.',
      },
      publisher: { '@id': 'https://industrybosspro.com/#organization' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        {children}
      </body>
    </html>
  );
}
