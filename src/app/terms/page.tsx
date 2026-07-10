import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | IndustryBossPro',
  description: 'IndustryBossPro Terms of Service.',
};

const S = {
  navy1: '#1e1208', navy4: '#2a1a0a', elec: '#c47d0a',
  muted: 'rgba(245,236,224,0.6)', border: 'rgba(196,125,10,0.15)', text: '#f5ece0',
};

export default function Terms() {
  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif", padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: S.text, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: S.muted, marginBottom: 40 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        {[
          { title: '1. Acceptance of Terms', body: 'By accessing or using IndustryBossPro ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.' },
          { title: '2. Description of Service', body: 'IndustryBossPro provides field service management software for outdoor service businesses including snow removal, landscaping, irrigation, lawn care, pest control, mosquito control, pool service, fence installation, lawn mowing, and pet waste removal operations.' },
          { title: '3. Free Trial', body: 'We offer a 14-day free trial. No credit card is required to start your trial. After the trial period, continued access requires payment of $199 per month.' },
          { title: '4. Subscription & Billing', body: 'Subscriptions are billed monthly at $199/month. You may cancel at any time. Cancellation takes effect at the end of the current billing period. No refunds are issued for partial months.' },
          { title: '5. User Accounts', body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorized use.' },
          { title: '6. Acceptable Use', body: 'You agree not to use the Service for any unlawful purpose or in any way that could harm, disable, or impair the Service. You may not attempt to gain unauthorized access to any portion of the Service.' },
          { title: '7. Data & Privacy', body: 'Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to our collection and use of data as described in the Privacy Policy.' },
          { title: '8. Intellectual Property', body: 'All content, features, and functionality of the Service are owned by IndustryBossPro and are protected by intellectual property laws. You may not copy, modify, or distribute any part of the Service without written permission.' },
          { title: '9. Limitation of Liability', body: 'IndustryBossPro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.' },
          { title: '10. Changes to Terms', body: 'We reserve the right to modify these terms at any time. We will notify you of significant changes by email or through the Service. Continued use after changes constitutes acceptance of the new terms.' },
          { title: '11. Contact', body: 'For questions about these Terms, contact us at Support@bossprohq.com.' },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < 10 ? `1px solid ${S.border}` : 'none' }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: S.elec, marginBottom: 12 }}>{section.title}</h2>
            <p style={{ color: S.muted, fontSize: 15, lineHeight: 1.8 }}>{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
