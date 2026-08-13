import type { Metadata } from 'next';

import { VentureCard } from '@/components/ventures/VentureCard';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Ventures',
  description: 'Companies and consumer technology products being built by Seaforth Strategies.',
  alternates: { canonical: '/ventures' },
};

export default function VenturesPage() {
  return (
    <>
      <header className="shell page-intro">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1 className="page-title page-title-wide">Companies we&apos;re building.</h1>
        </div>
        <p className="lead">
          Seaforth develops consumer products internally, from the first insight through product,
          market, and growth.
        </p>
      </header>

      <section className="shell section rule-top" aria-label="Seaforth venture portfolio">
        {ventures.length ? (
          <div className="venture-grid">
            {ventures.map((venture) => (
              <VentureCard venture={venture} variant="editorial" key={venture.slug} />
            ))}
          </div>
        ) : (
          <div className="portfolio-empty portfolio-empty-page">
            <div className="portfolio-empty-visual" aria-hidden="true" />
            <div className="portfolio-empty-copy">
              <p className="eyebrow">Portfolio status</p>
              <div>
                <h3>Our ventures are in development.</h3>
                <p>
                  We share companies when there is something meaningful to show. Product names,
                  imagery, and platform links will be published here as each venture becomes public.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
