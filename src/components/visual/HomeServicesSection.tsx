import Link from 'next/link';

type Item = {
  title: string;
  blurb: string;
};

const core: Item[] = [
  {
    title: 'Website design',
    blurb:
      'Structure, visual design, and UI—pages that read clearly and convert, not generic templates.',
  },
  {
    title: 'Development',
    blurb:
      'Responsive builds, clean components, and production-ready front ends—usually Next.js and a tight component system.',
  },
  {
    title: 'Platform design',
    blurb:
      'When marketing and product surfaces need to feel like one site—IA, design, and code from one studio.',
  },
];

export function HomeServicesSection() {
  return (
    <section id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
              Services
            </p>
            <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
              Website design—nothing else.
            </h2>
            <p className="fade-in-up stagger-2 text-muted mt-5 max-w-xl leading-relaxed">
              SeaForth exists for sites: design, build, and launch. Broader marketing or ops work
              lives outside this studio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {core.map((item, idx) => (
              <div
                key={item.title}
                className={[
                  'fade-in-up',
                  `stagger-${Math.min(idx + 1, 6)}`,
                  'hairline shadow-soft flex h-full flex-col rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/80 p-7',
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
        </div>
      </div>
    </section>
  );
}
