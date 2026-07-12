import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IndustryBossPro',
  description: 'IndustryBossPro Privacy Policy.',
};

const S = {
  navy1: '#0a0a0a', elec: '#ff6a00',
  muted: 'rgba(245,245,245,0.6)', border: 'rgba(255,106,0,0.15)', text: '#f5f5f5',
};

export default function Privacy() {
  return (
    <div style={{ background: S.navy1, minHeight: '100vh', color: S.text, fontFamily: "'Inter','Segoe UI',Arial,sans-serif", padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: S.text, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: S.muted, marginBottom: 40 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        {[
          { title: '1. Information We Collect', body: 'We collect information you provide when creating an account (name, email, company name), information generated through use of the Service (job records, client data, scheduling data), and technical information (IP address, browser type, device information).' },
          { title: '2. How We Use Your Information', body: 'We use collected information to provide and improve the Service, process payments, communicate with you about your account, send service updates and notifications, and comply with legal obligations.' },
          { title: '3. Data Storage & Security', body: 'Your data is stored securely using industry-standard encryption. We use Supabase for database services, which maintains SOC 2 compliance. We implement technical and organizational measures to protect your data against unauthorized access.' },
          { title: '4. Data Sharing', body: 'We do not sell your personal data. We may share data with trusted service providers who assist in operating the Service (payment processors, email providers) under confidentiality agreements. We may disclose data when required by law.' },
          { title: '5. Client Data', body: 'Data you enter about your clients (customer information, service records) remains your property. We process this data only on your behalf to provide the Service. We do not use your client data for any other purpose.' },
          { title: '6. Cookies', body: 'We use cookies to maintain your session and improve your experience. You can control cookie settings through your browser. Disabling cookies may affect Service functionality.' },
          { title: '7. Data Retention', body: 'We retain your account data for as long as your account is active. Upon account cancellation, data is retained for 90 days before deletion, giving you time to export your records.' },
          { title: '8. Your Rights', body: 'You have the right to access, correct, or delete your personal data. You may export your data at any time from your account settings. To exercise these rights, contact us at Support@bossprohq.com.' },
          { title: '9. Children\'s Privacy', body: 'The Service is not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors.' },
          { title: '10. Changes to This Policy', body: 'We may update this Privacy Policy periodically. We will notify you of material changes by email or through the Service. Continued use after changes constitutes acceptance of the updated policy.' },
          { title: '11. Contact', body: 'For privacy-related questions or requests, contact us at Support@bossprohq.com.' },
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
