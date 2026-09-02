import Image from 'next/image';
import Link from 'next/link';

import { buildSteps, thesis, ventures } from '@/data/ventures';
import { FounderSection } from '@/components/FounderSection';
import { TrackedLink } from '@/components/TrackedLink';
import { VentureVisual } from '@/components/ventures/VentureVisual';

export default function HomePage() {
  const featuredVenture = ventures.find((venture) => venture.slug === 'palm') ?? ventures[0];
  const previewVentures = ventures
    .filter((venture) => venture.slug !== featuredVenture?.slug)
    .slice(0, 4);

  return (
    <>
      <section className="hero reference-hero" aria-labelledby="home-title">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/site/southern-california-coast.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="shell hero-copy">
          <div className="hero-main">
            <p className="eyebrow reveal">
              <span aria-hidden="true" /> Southern California consumer venture studio
            </p>
            <h1 id="home-title" className="display reveal reveal-delay">
              We build products people want to use.
            </h1>
            <p className="hero-description reveal reveal-delay">
              Seaforth builds consumer technology companies from concept through product, brand,
              launch, and growth.
            </p>
            <div className="hero-actions">
              <TrackedLink className="solid-link" href="/ventures" eventLabel="Hero explore ventures">
                Explore Ventures
              </TrackedLink>
              <TrackedLink className="arrow-link" href="/approach" eventLabel="Hero how we build">
                How We Build <span aria-hidden="true">→</span>
              </TrackedLink>
            </div>
            <Link className="hero-next" href="#ventures-title">
              Continue to ventures <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="reference-proof section" aria-labelledby="proof-title">
        <div className="shell reference-proof-inner">
          <div>
            <p className="eyebrow">Venture studio model</p>
            <h2 id="proof-title" className="section-title">
              Built by operators. Designed for consumer behavior.
            </h2>
          </div>
          <div className="reference-proof-grid">
            <article>
              <strong>{ventures.length}</strong>
              <span>Ventures in development</span>
            </article>
            <article>
              <strong>2</strong>
              <span>Founding operators</span>
            </article>
            <article>
              <strong>CA</strong>
              <span>Southern California studio</span>
            </article>
          </div>
        </div>
      </section>

      <section
        className="ventures-feature section reference-card-section"
        aria-labelledby="ventures-title"
      >
        <div className="shell">
          <div className="venture-showcase-heading">
            <div>
              <p className="eyebrow">Ventures</p>
              <h2 id="ventures-title" className="section-title">
                Products and communities being built inside Seaforth.
              </h2>
            </div>
            <p className="lead">
              A focused portfolio of consumer products where software, brand, launch, and growth are
              developed together.
            </p>
          </div>

          {featuredVenture ? (
            <div className="reference-feature-grid">
              <Link
                className="venture-feature-card reference-feature-card"
                href={`/ventures/${featuredVenture.slug}`}
              >
                <div className="venture-feature-media">
                  <VentureVisual venture={featuredVenture} />
                </div>
                <div className="venture-feature-copy">
                  <div>
                    <div className="venture-meta">
                      <span>{featuredVenture.category}</span>
                      <span>{featuredVenture.stage}</span>
                    </div>
                    <h3>{featuredVenture.name}</h3>
                    <p>{featuredVenture.tagline}</p>
                  </div>
                  <span className="studio-work-action">
                    View venture <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>

              <div className="reference-mini-grid" aria-label="Additional Seaforth ventures">
                {previewVentures.map((venture) => (
                  <Link
                    className="venture-index-item reference-mini-card"
                    href={`/ventures/${venture.slug}`}
                    key={venture.slug}
                  >
                    <div>
                      <h3>{venture.name}</h3>
                      <p>{venture.category}</p>
                      <small>{venture.tagline}</small>
                    </div>
                    <strong>{venture.stage}</strong>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="portfolio-empty">
              <div className="portfolio-empty-visual" aria-hidden="true" />
              <div className="portfolio-empty-copy">
                <p className="eyebrow">In development</p>
                <div>
                  <h3>Building quietly. Sharing deliberately.</h3>
                  <p>
                    Our first public venture announcements will appear here when the products are
                    ready to meet the world.
                  </p>
                </div>
                <Link className="arrow-link" href="/ventures">
                  Explore the portfolio <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          )}
          {ventures.length > 3 ? (
            <div className="venture-section-footer">
              <p>{ventures.length} ventures in development</p>
              <TrackedLink className="arrow-link" href="/ventures" eventLabel="Homepage view all ventures">
                View all ventures <span aria-hidden="true">→</span>
              </TrackedLink>
            </div>
          ) : null}
        </div>
      </section>

      <section
        className="section reference-split-section thesis-section"
        aria-labelledby="thesis-title"
      >
        <div className="shell">
          <div className="reference-split">
            <div>
              <p className="eyebrow">Our thesis</p>
              <h2 id="thesis-title" className="section-title">
                We build around human behavior, not technology trends.
              </h2>
              <Link className="arrow-link" href="/about">
                About Seaforth <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="thesis-grid">
              {thesis.map((item) => (
                <article className="thesis-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="shell">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">How we build</p>
              <h2 id="process-title" className="section-title">
                From idea to growth.
              </h2>
            </div>
            <p className="lead">
              Product, engineering, brand, and growth operate as one system from the beginning.
            </p>
          </div>
          <div className="process-list">
            {buildSteps.map(([title, copy], index) => (
              <article className="process-row" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section dual-model" aria-labelledby="dual-model-title">
        <div className="dual-model-heading">
          <p className="eyebrow">Ventures + Studio</p>
          <h2 id="dual-model-title" className="section-title">
            We build our own companies. We also help select teams build theirs.
          </h2>
        </div>
        <div className="dual-model-grid">
          <article className="dual-model-primary">
            <span>01</span>
            <h3>Ventures</h3>
            <p>We build and grow our own consumer technology companies.</p>
            <Link className="arrow-link" href="/ventures">
              Explore Ventures <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article>
            <span>02</span>
            <h3>Studio</h3>
            <p>
              We selectively work with companies on product, websites, branding, growth systems, and
              marketing engineering.
            </p>
            <Link className="arrow-link" href="/studio">
              Explore Studio <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <FounderSection title="Built by operators." titleId="founder-title" />

      <section className="shell final-cta">
        <p className="eyebrow">Get in touch</p>
        <h2>Building something interesting?</h2>
        <TrackedLink className="solid-link" href="/contact" eventLabel="Final CTA contact">
          Start a conversation
        </TrackedLink>
      </section>
    </>
  );
}
