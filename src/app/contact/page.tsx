import type { Metadata } from 'next';

import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with Seaforth Strategies about venture opportunities, partnerships, investment, founder introductions, or media.',
  alternates: { canonical: '/contact' },
};

const reasons = [
  'Venture opportunities',
  'Studio projects',
  'Partnerships',
  'Investment',
  'Product collaboration',
  'Founder introductions',
  'Media',
  'General',
];

export default function ContactPage() {
  return (
    <>
      <header className="shell page-intro">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Start a conversation.</h1>
        </div>
        <p className="lead">
          We welcome thoughtful conversations about companies, products, and people worth building
          with.
        </p>
      </header>

      <section className="process section">
        <div className="shell contact-layout">
          <div>
            <p className="eyebrow">Reach out</p>
            <h2 className="section-title">A good place to begin.</h2>
            <ul className="contact-reasons">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p className="contact-email">
              Prefer email?{' '}
              <a className="text-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
