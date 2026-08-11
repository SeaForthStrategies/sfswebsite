import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms', alternates: { canonical: '/terms' } };

export default function TermsPage() {
  return (
    <section className="shell section legal-copy">
      <p className="eyebrow">Legal</p>
      <h1 className="page-title">Terms.</h1>
      <p>
        This website provides general information about Seaforth Strategies, its venture studio
        model, and its product portfolio. It does not create a partnership, investment, employment,
        advisory, or project agreement.
      </p>
      <p>
        Any collaboration, partnership, investment, or product terms must be defined in a written
        agreement before work begins.
      </p>
      <p>
        Venture names, product marks, trademarks, and third-party brand names belong to their
        respective owners.
      </p>
    </section>
  );
}
