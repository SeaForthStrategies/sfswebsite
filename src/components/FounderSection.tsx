import Image from 'next/image';
import Link from 'next/link';

const founders = [
  {
    name: 'Abby Lehr',
    role: 'Co-Founder & Software Engineer',
    image: '/images/site/abby-lehr-coastal.jpg',
    imageClassName: 'founder-portrait--abby',
    alt: 'Abby Lehr, Co-Founder and Software Engineer at Seaforth Strategies',
    linkedin: 'https://www.linkedin.com/in/abigaillehr/',
    bio: [
      'Abby works across product development, software engineering, brand, and growth, building consumer technology products from concept through launch.',
      'Her work spans full-stack development, AI-assisted engineering, product strategy, UX, positioning, go-to-market, acquisition, analytics, and growth experimentation.',
    ],
  },
  {
    name: 'Isaiah Soicher',
    role: 'Co-Founder & Software Engineer',
    image: '/images/site/isaiah-soicher.jpg',
    imageClassName: 'founder-portrait--isaiah',
    alt: 'Isaiah Soicher, Co-Founder and Software Engineer at Seaforth Strategies',
    linkedin: 'https://www.linkedin.com/in/isaiahsoicher/',
    bio: [
      'Isaiah helps develop the technology and product systems behind Seaforth’s consumer ventures, working across software engineering, product development, and technical execution.',
      'His background spans software and applied engineering, informed by his education at Northwestern University. He brings an engineering-led approach to moving products from early concepts toward launch.',
    ],
  },
];

type FounderSectionProps = {
  eyebrow?: string;
  title: string;
  titleId: string;
  showAboutLink?: boolean;
};

export function FounderSection({
  eyebrow,
  title,
  titleId,
  showAboutLink = false,
}: FounderSectionProps) {
  return (
    <section className="founder-band section" aria-labelledby={titleId}>
      <div className="shell">
        <div className="founder-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 id={titleId} className="section-title">
            {title}
          </h2>
        </div>

        <div className="founders-grid">
          {founders.map((founder) => (
            <article className="founder-person" key={founder.name}>
              <div className={`founder-portrait ${founder.imageClassName}`}>
                <Image
                  src={founder.image}
                  alt={founder.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
              </div>
              <div className="founder-person-copy">
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <a
                  className="founder-profile"
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
                {founder.bio.map((paragraph) => (
                  <p className="lead" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {showAboutLink ? (
          <div className="founder-footer-link">
            <Link className="arrow-link" href="/about">
              About Seaforth <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
