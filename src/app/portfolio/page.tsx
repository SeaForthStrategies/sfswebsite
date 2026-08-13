import type { Metadata } from 'next';
import Link from 'next/link';

import { StudioWorkGrid } from '@/components/studio/StudioWorkGrid';
import { VentureCard } from '@/components/ventures/VentureCard';
import { portfolioCategories } from '@/data/studio';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore Seaforth Strategies ventures and selected Seaforth Studio client work across products, websites, and growth systems.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <header className="shell page-intro">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1 className="page-title page-title-wide">Ventures and selected Studio work.</h1>
        </div>
        <p className="lead">
          Seaforth ventures are owned products we are building. Studio work is selective client work
          created through the same product, design, engineering, and growth model.
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
            Owned consumer technology products and communities developed by Seaforth Strategies.
          </p>
        </div>
        <div className="venture-grid portfolio-venture-grid">
          {ventures.slice(0, 3).map((venture) => (
            <VentureCard venture={venture} key={venture.slug} />
          ))}
        </div>
        <div className="venture-section-footer">
          <p>{ventures.length} ventures in development</p>
          <Link className="arrow-link" href="/ventures">
            Explore all ventures <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="studio-portfolio section" aria-labelledby="portfolio-studio-title">
        <div className="shell">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">Studio</p>
              <h2 id="portfolio-studio-title" className="section-title">
                Selected client-facing systems.
              </h2>
            </div>
            <div>
              <p className="lead">
                Website, product, creative, and growth work from Seaforth Studio.
              </p>
              <div className="portfolio-tags" aria-label="Portfolio categories">
                {portfolioCategories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </div>
          </div>
          <StudioWorkGrid />
        </div>
      </section>
    </>
  );
}
