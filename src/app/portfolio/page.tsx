import type { Metadata } from 'next';

import { VentureCard } from '@/components/ventures/VentureCard';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Company Portfolio',
  description:
    'Explore the consumer technology companies and products being built by Seaforth Strategies.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <header className="shell page-intro">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1 className="page-title page-title-wide">Companies we&apos;re building.</h1>
        </div>
        <p className="lead">
          A focused view of the owned consumer technology products and communities being built
          inside Seaforth Strategies.
        </p>
      </header>

      <section className="shell section rule-top" aria-labelledby="portfolio-ventures-title">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Ventures</p>
            <h2 id="portfolio-ventures-title" className="section-title">
              Companies we&apos;re building.
            </h2>
          </div>
          <p className="lead">
            Each company is developed from idea through product, brand, launch, and growth inside
            the Seaforth venture studio model.
          </p>
        </div>
        <div className="venture-grid portfolio-venture-grid">
          {ventures.map((venture) => (
            <VentureCard venture={venture} variant="editorial" key={venture.slug} />
          ))}
        </div>
        <div className="venture-section-footer">
          <p>{ventures.length} ventures in development</p>
        </div>
      </section>
    </>
  );
}
