import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndustryBossPro | All-In-One Field Service Software",
  description: "The only software built for every field service industry — Snow, Landscaping, Irrigation, Lawn Care, Pest Control and more. $199/month, everything included, 14-day free trial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
