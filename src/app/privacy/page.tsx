import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy', alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return (
    <section className="shell section legal-copy">
      <p className="eyebrow">Legal</p>
      <h1 className="page-title">Privacy.</h1>
      <p>
        Seaforth Strategies collects information you choose to send through email or the contact
        experience so we can respond to venture, partnership, investment, media, and general
        inquiries.
      </p>
      <p>
        If analytics are enabled, aggregate site usage may be measured to understand traffic and
        improve the website. Seaforth does not sell personal information.
      </p>
      <p>
        For privacy questions, contact Seaforth through the email address listed on the contact
        page.
      </p>
    </section>
  );
}
