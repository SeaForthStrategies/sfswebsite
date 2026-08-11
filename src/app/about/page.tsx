import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'A consumer venture studio built in Southern California.',
  alternates: { canonical: '/about' },
};

const team = [
  { name: 'Lauren Mitchell', role: 'Principal' },
  { name: 'Daniel Kim', role: 'Investment Associate' },
  { name: 'Sophie Reynolds', role: 'Venture Operations Manager' },
  { name: 'Ryan Foster', role: 'Product Manager' },
  { name: 'Maya Patel', role: 'Growth & Marketing Manager' },
  { name: 'Jake Collins', role: 'Software Engineer' },
  { name: 'Emily Carter', role: 'Operations Coordinator' },
  { name: 'Ben Sullivan', role: 'Venture Intern' },
];

export default function AboutPage() {
  return (
    <>
      <header className="shell page-intro">
        <div>
          <p className="eyebrow">About Seaforth</p>
          <h1 className="page-title">A venture studio built in Southern California.</h1>
        </div>
        <p className="lead">
          We identify consumer opportunities and develop products internally from concept to market.
        </p>
      </header>

      <div className="wide-image wide-image--coast">
        <Image
          src="/images/site/southern-california-coast.jpg"
          alt="The Southern California coastline"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <section className="shell section" aria-labelledby="about-model">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Our model</p>
            <h2 id="about-model" className="section-title">
              We build instead of simply advising.
            </h2>
          </div>
          <div>
            <p className="lead">
              Seaforth Strategies builds consumer technology companies focused on how people
              connect, experience life, and interact with technology.
            </p>
            <p className="lead">
              Product development, software engineering, brand, and growth come together in one
              operating model, so the product and its market can evolve together.
            </p>
          </div>
        </div>
      </section>

      <section className="founder-band section" aria-labelledby="about-founders">
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
            <p className="eyebrow">Founders</p>
            <h2 id="about-founders" className="section-title">
              Built by operators.
            </h2>
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
              Her work spans full-stack development, AI-assisted engineering, product strategy, UX,
              positioning, go-to-market, acquisition, analytics, and growth experimentation.
            </p>
            <div className="cofounder-note">
              <strong>Isaiah Soicher</strong>
              <span>Co-Founder · Biography and operating focus awaiting founder approval.</span>
              <a
                className="cofounder-profile"
                href="https://www.linkedin.com/in/isaiahsoicher/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section team-section" aria-labelledby="team-title">
        <div className="team-intro">
          <p className="eyebrow">Studio team</p>
          <h2 id="team-title" className="section-title">
            The people building alongside us.
          </h2>
        </div>
        <ul className="team-roster">
          {team.map((member) => (
            <li className="team-member" key={member.name}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell final-cta">
        <p className="eyebrow">Our approach</p>
        <h2>Product and market, built as one.</h2>
        <Link className="arrow-link" href="/approach">
          How we build <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
