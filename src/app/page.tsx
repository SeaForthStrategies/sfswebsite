import Image from 'next/image';
import Link from 'next/link';

import { capabilities, buildSteps, thesis, ventures } from '@/data/ventures';
import { FounderSection } from '@/components/FounderSection';
import { VentureVisual } from '@/components/ventures/VentureVisual';

export default function HomePage() {
  const featuredVenture = ventures.find((venture) => venture.slug === 'palm') ?? ventures[0];
  const previewVentures = ventures
    .filter((venture) => venture.slug !== featuredVenture?.slug)
    .slice(0, 4);

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
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
            <p className="eyebrow reveal">Southern California consumer venture studio</p>
            <h1 id="home-title" className="display reveal reveal-delay">
              We build products people want to use.
            </h1>
            <p className="hero-description reveal reveal-delay">
              Seaforth creates consumer technology products and communities from first concept
              through launch, acquisition, and growth.
            </p>
            <div className="hero-actions">
              <Link className="solid-link" href="/ventures">
                Explore Our Ventures
              </Link>
              <Link className="arrow-link" href="/approach">
                How We Build <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-bottom reveal reveal-delay">
            <ol className="hero-path" aria-label="Our venture-building lifecycle">
              <li>
                <span>01</span>Identify
              </li>
              <li>
                <span>02</span>Build
              </li>
              <li>
                <span>03</span>Brand
              </li>
              <li>
                <span>04</span>Launch
              </li>
              <li>
                <span>05</span>Grow
              </li>
            </ol>
            <Link className="hero-next" href="#ventures-title">
              Continue to ventures <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="ventures-feature section" aria-labelledby="ventures-title">
        <div className="shell">
          <div className="venture-showcase-heading">
            <div>
              <p className="eyebrow">Venture portfolio</p>
              <h2 id="ventures-title" className="section-title">
                Products moving from idea into market.
              </h2>
            </div>
            <p className="lead">
              A look at the consumer products currently being built inside Seaforth, where product,
              brand, software, and growth are designed as one system.
            </p>
          </div>

          {featuredVenture ? (
            <div className="venture-showcase">
              <Link className="venture-feature-card" href={`/ventures/${featuredVenture.slug}`}>
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
                <div className="venture-feature-media">
                  <VentureVisual venture={featuredVenture} />
                </div>
              </Link>

              <div className="venture-index" aria-label="Additional Seaforth ventures">
                {previewVentures.map((venture, index) => (
                  <Link
                    className="venture-index-item"
                    href={`/ventures/${venture.slug}`}
                    key={venture.slug}
                  >
                    <span>{String(index + 2).padStart(2, '0')}</span>
                    <div>
                      <h3>{venture.name}</h3>
                      <p>{venture.category}</p>
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
              <Link className="arrow-link" href="/ventures">
                View all ventures <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section" aria-labelledby="thesis-title">
        <div className="shell">
          <p className="eyebrow">Our thesis</p>
          <h2 id="thesis-title" className="section-title">
            We build around human behavior, not technology trends.
          </h2>
          <div className="thesis-grid">
            {thesis.map((item) => (
              <article className="thesis-item" key={item.title}>
                <p className="eyebrow">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
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
          <article>
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
              We partner with select companies on product development, websites, branding, growth
              systems, and marketing engineering.
            </p>
            <Link className="arrow-link" href="/studio">
              Explore Studio <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="capabilities-title">
        <div className="shell">
          <p className="eyebrow">Operating capabilities</p>
          <h2 id="capabilities-title" className="section-title">
            Built in-house.
          </h2>
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article className="capability-item" key={capability.title}>
                <p className="eyebrow">0{index + 1}</p>
                <h3>{capability.title}</h3>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FounderSection
        eyebrow="Built by operators"
        title="Founders who build the ventures."
        titleId="founder-title"
        showAboutLink
      />

      <section className="shell final-cta">
        <p className="eyebrow">Start a conversation</p>
        <h2>Building something interesting?</h2>
        <Link className="arrow-link" href="/contact">
          Contact Seaforth <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
