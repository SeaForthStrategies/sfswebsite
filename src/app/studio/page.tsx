import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { StudioWorkGrid } from '@/components/studio/StudioWorkGrid';
import { portfolioCategories, studioProcess, studioServices } from '@/data/studio';

export const metadata: Metadata = {
  title: 'Seaforth Studio | Product, Web & Growth',
  description:
    'Seaforth Studio is the design, development, and growth arm of Seaforth Strategies, building websites, digital products, brands, AI systems, and growth infrastructure.',
  alternates: { canonical: '/studio' },
  openGraph: {
    title: 'Seaforth Studio | Product, Web & Growth',
    description:
      'The design, development, and growth arm of Seaforth Strategies for select product-minded teams.',
    url: '/studio',
  },
};

export default function StudioPage() {
  return (
    <>
      <header className="studio-hero" aria-labelledby="studio-title">
        <div className="studio-hero-media" aria-hidden="true">
          <Image src="/images/site/pacific-horizon.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="shell studio-hero-inner">
          <p className="eyebrow">Seaforth Studio</p>
          <h1 id="studio-title" className="page-title page-title-wide">
            We build digital products, brands, and growth systems.
          </h1>
          <p className="lead">
            Seaforth Studio is the design, development, and growth arm of Seaforth Strategies. We
            work with select companies to build the same kinds of systems we use across our own
            ventures.
          </p>
          <div className="hero-actions">
            <Link className="solid-link" href="/contact">
              Start a Project
            </Link>
            <Link className="arrow-link" href="#studio-portfolio">
              View Our Work <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="shell section" aria-labelledby="studio-services-title">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Studio capabilities</p>
            <h2 id="studio-services-title" className="section-title">
              Client work built with venture studio standards.
            </h2>
          </div>
          <p className="lead">
            These are not disconnected service packages. They are the capabilities Seaforth uses to
            design, ship, launch, and grow products.
          </p>
        </div>
        <div className="studio-service-grid">
          {studioServices.map((service, index) => (
            <article className="studio-service-card" key={service.title}>
              <p className="eyebrow">0{index + 1}</p>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" aria-labelledby="studio-process-title">
        <div className="shell">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 id="studio-process-title" className="section-title">
                Build like an internal startup team.
              </h2>
            </div>
            <p className="lead">
              We combine product, engineering, design, and growth rather than treating them as
              separate departments.
            </p>
          </div>
          <div className="process-list">
            {studioProcess.map(([title, copy], index) => (
              <article className="process-row" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section studio-parent" aria-labelledby="studio-parent-title">
        <div>
          <p className="eyebrow">Built inside a venture studio</p>
          <h2 id="studio-parent-title" className="section-title">
            Ownership mindset, not agency handoffs.
          </h2>
        </div>
        <div>
          <p className="lead">
            Seaforth Studio comes from the same team building Seaforth&apos;s own companies. Client
            work is approached with the same attention to product behavior, distribution, systems,
            and long-term usefulness.
          </p>
          <Link className="arrow-link" href="/ventures">
            Explore Seaforth Ventures <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        id="studio-portfolio"
        className="studio-portfolio section"
        aria-labelledby="studio-portfolio-title"
      >
        <div className="shell">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 id="studio-portfolio-title" className="section-title">
                Selected Studio work.
              </h2>
            </div>
            <div>
              <p className="lead">
                A focused view of work connected to websites, product interfaces, growth systems,
                and launch creative.
              </p>
              <div className="portfolio-tags" aria-label="Portfolio categories">
                {portfolioCategories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </div>
          </div>
          <StudioWorkGrid limit={4} />
          <div className="venture-section-footer">
            <p>Studio work stays here. Company portfolio lives separately.</p>
            <Link className="arrow-link" href="/portfolio">
              Explore company portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
