import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from '@/components/MetaPixel';

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
  description: "The only software built for every field service industry — Snow, Landscaping, Irrigation, Lawn Care, Pest Control and more. Three plans from $59/month. 14-day free trial.",
  /* Google's search results still show Vercel's default triangle for this domain, cached from
     before the crown existed. The files themselves have been correct for a month — /favicon.ico
     contains the crown at 16, 32 and 48px — but Google has no reason to refetch a URL it already
     has, so the stale copy just sits there.

     Versioning the URLs gives it something it has never seen. Paired with Request Indexing in
     Search Console, that is what actually breaks the cache; waiting does not. */
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

// Site-wide structured data. Organization + WebSite establish the brand entity;
// SoftwareApplication with the entry-price offer makes the product eligible for rich results.
const orgLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://industrybosspro.com/#organization',
      name: 'IndustryBossPro',
      url: 'https://industrybosspro.com',
      logo: 'https://industrybosspro.com/icon.png',
      description: 'All-in-one field service management software for the trades — scheduling, routing, invoicing, payments, CRM, and a crew mobile app. Three plans from $59/month.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-682-899-7304',
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
        description: 'From $59/month — three plans, 14-day free trial, no contracts.',
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
        {/* Meta Pixel — builds the retargeting audience. Inert until
            NEXT_PUBLIC_META_PIXEL_ID is set on the Vercel project. */}
        <MetaPixel />
        {/* Google tag (gtag.js) — GA4 + Google Ads conversion tracking (account AW-994175437) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-97QJVSZQ1M" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-97QJVSZQ1M');
            gtag('config', 'AW-994175437');`}
        </Script>
      </body>
    </html>
  );
}
