import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IndustryBossPro',
  description: 'IndustryBossPro Privacy Policy.',
};

const S = {
  navy1: '#0a0a0a', elec: '#ff6a00',
  muted: 'rgba(245,245,245,0.6)', border: '#e63000', text: '#f5f5f5',
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
          { title: '3. Location Data (Crew Mobile App)', body: 'The crew mobile app collects precise location from the device, including while the app is closed or not in use, so that the employing company can see where its crews are during the working day. Collection begins only when an employee is clocked in on that device and stops when the last employee clocks out; it does not run outside those hours. The app asks for permission and explains this before any location request, and location sharing can be declined - the rest of the app continues to work. Location is used to show crew position to the employing company, to record which stops were visited, and to show customers an anonymous marker on the day they are being served. It is not sold, not used for advertising, and not shared with anyone other than the employing company.' },
          { title: '4. Location Data (Customer App)', body: 'The customer app does not collect location from customers. On a service day, a customer may see the position of the crew serving them, shown as an anonymous marker with no employee name or identity attached.' },
          { title: '5. Mobile App Permissions', body: 'The crew app may request location (including background location), camera and photo access for before-and-after service photos, and notification permission for job alerts. Each is requested at the point it is first needed, and each can be refused or later revoked in your device settings without preventing normal use of the app.' },
          { title: '6. Data Storage & Security', body: 'Your data is stored securely using industry-standard encryption. We use Supabase for database services, which maintains SOC 2 compliance. We implement technical and organizational measures to protect your data against unauthorized access.' },
          { title: '7. Data Sharing', body: 'We do not sell your personal data. We may share data with trusted service providers who assist in operating the Service (payment processors, email providers) under confidentiality agreements. We may disclose data when required by law.' },
          { title: '8. Client Data', body: 'Data you enter about your clients (customer information, service records) remains your property. We process this data only on your behalf to provide the Service. We do not use your client data for any other purpose.' },
          { title: '9. Cookies', body: 'We use cookies to maintain your session and improve your experience. You can control cookie settings through your browser. Disabling cookies may affect Service functionality.' },
          { title: '10. Data Retention', body: 'We retain your account data for as long as your account is active. Upon account cancellation, data is retained for 90 days before deletion, giving you time to export your records. Crew location records are retained for 90 days and then deleted.' },
          { title: '11. Your Rights', body: 'You have the right to access, correct, or delete your personal data. You may export your data at any time from your account settings. To exercise these rights, contact us at Support@bossprohq.com.' },
          { title: '12. Children\'s Privacy', body: 'The Service is not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors.' },
          { title: '13. Changes to This Policy', body: 'We may update this Privacy Policy periodically. We will notify you of material changes by email or through the Service. Continued use after changes constitutes acceptance of the updated policy.' },
          { title: '14. Contact', body: 'For privacy-related questions or requests, contact us at Support@bossprohq.com.' },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < 13 ? `1px solid ${S.border}` : 'none' }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: S.elec, marginBottom: 12 }}>{section.title}</h2>
            <p style={{ color: S.muted, fontSize: 15, lineHeight: 1.8 }}>{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
