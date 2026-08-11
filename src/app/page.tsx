import Image from 'next/image';
import Link from 'next/link';

import { capabilities, buildSteps, thesis, ventures } from '@/data/ventures';
import { VentureCard } from '@/components/ventures/VentureCard';

export default function HomePage() {
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
          <div>
            <p className="eyebrow reveal">Southern California consumer venture studio</p>
            <h1 id="home-title" className="display reveal reveal-delay">
              We build companies for how people live next.
            </h1>
          </div>
          <div className="hero-bottom reveal reveal-delay">
            <div className="hero-actions">
              <Link className="solid-link" href="/ventures">
                View Ventures
              </Link>
              <Link className="arrow-link" href="/approach">
                How We Build <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="hero-description">
              Seaforth Strategies builds consumer technology products and communities from concept
              through launch and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="ventures-feature section" aria-labelledby="ventures-title">
        <div className="shell">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">Ventures</p>
              <h2 id="ventures-title" className="section-title">
                Companies we&apos;re building.
              </h2>
            </div>
            <p className="lead">
              Consumer products shaped inside Seaforth, where engineering, brand, and distribution
              develop together.
            </p>
          </div>

          {ventures.length ? (
            <div className="venture-grid">
              {ventures.map((venture) => (
                <VentureCard venture={venture} key={venture.slug} />
              ))}
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

      <section className="founder-band section" aria-labelledby="founder-title">
        <div className="shell founder-layout">
          <div className="founder-image founder-image--coastal">
            <Image
              src="/images/site/abby-lehr-coastal.jpg"
              alt="Abby Lehr, Co-Founder and Software Engineer at Seaforth Strategies"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Built by operators</p>
            <h2 id="founder-title" className="section-title">
              Founders who build the ventures.
            </h2>
            <div className="founder-person">
              <h3>Abby Lehr</h3>
              <p className="founder-role">Co-Founder &amp; Software Engineer</p>
              <a
                className="cofounder-profile founder-profile"
                href="https://www.linkedin.com/in/abigaillehr/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <p className="lead">
                Abby works across product development, software engineering, brand, and growth,
                building consumer technology products from concept through launch.
              </p>
              <p className="lead">
                Her work spans full-stack development, AI-assisted engineering, product strategy,
                UX, positioning, go-to-market, acquisition, analytics, and growth experimentation.
              </p>
            </div>
            <div className="founder-person founder-person--peer">
              <h3>Isaiah Soicher</h3>
              <p className="founder-role">Co-Founder</p>
              <a
                className="cofounder-profile founder-profile"
                href="https://www.linkedin.com/in/isaiahsoicher/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <Link className="arrow-link" href="/about">
              About Seaforth <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

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
