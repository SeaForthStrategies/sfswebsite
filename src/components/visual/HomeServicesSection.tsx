import Link from 'next/link';

import { TechStackLogos } from '@/components/visual/TechStackLogos';

type Item = {
  title: string;
  blurb: string;
};

const core: Item[] = [
  {
    title: 'Development',
    blurb:
      'Custom sites and front ends—Next.js, GitHub, Vercel—with responsive UI, accessibility, performance, and a disciplined component workflow.',
  },
  {
    title: 'Design',
    blurb:
      'Designed and built on Squarespace—IA, template work, styling, and launch support. Typically a lower starting price than full custom development.',
  },
];

export function HomeServicesSection() {
  return (
    <section id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Services</p>
            <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
              Two ways we work with you.
            </h2>
            <p className="fade-in-up stagger-2 text-muted mt-5 max-w-xl leading-relaxed">
              Development (coding, GitHub, Vercel) or design on Squarespace—the more affordable
              option. Same studio; you pick what fits the build.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {core.map((item, idx) => (
              <div
                key={item.title}
                className={[
                  'fade-in-up',
                  `stagger-${Math.min(idx + 1, 6)}`,
                  'tech-panel hover-lift hairline shadow-soft flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/80 p-7',
                ].join(' ')}
              >
                <span className="text-ink/45 font-display text-2xl tracking-tight tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-ink mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{item.blurb}</p>
              </div>
            ))}
          </div>

          <p className="fade-in-up text-muted mt-10 max-w-2xl text-sm leading-relaxed">
            Copy guidance, IA, launch QA, and light on-page SEO when the project needs it.{' '}
            <Link href="/services" className="link-underline text-ink/80 hover:text-ink">
              Services detail
            </Link>
          </p>

          <div className="fade-in-up hairline bg-surface shadow-soft mt-14 rounded-[var(--radius-lg)] border p-7 md:p-8">
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
              Expertise & tools
            </p>
            <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
              Same categories as the full résumé skills page—design and web & tech.
            </p>
            <div className="mt-6">
              <TechStackLogos variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
