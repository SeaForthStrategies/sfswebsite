import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { CONTACT_EMAIL_HREF } from '@/lib/site';

const packages = [
  {
    name: 'Development',
    hook: 'Design-ready work, built to ship.',
    audience: 'You have approved UI—or a tight creative direction—and need a disciplined build.',
    deliverables: [
      'Responsive implementation and component structure',
      'Performance-minded assets and layout',
      'Accessibility and semantic markup',
      'Staging, launch, and handoff',
    ],
    subject: 'Development package',
    cta: 'Discuss development',
    featured: false,
  },
  {
    name: 'Platform design',
    hook: 'Full-site design and build.',
    audience:
      'You want IA, visual design, and code in one studio—especially for product-led sites.',
    deliverables: [
      'Site map and key page design',
      'UI system and responsive layouts',
      'Front-end build in a modern stack',
      'Launch support and refinement',
    ],
    subject: 'Platform design package',
    cta: 'Discuss platform design',
    featured: true,
  },
] as const;

function mailtoWithSubject(subject: string) {
  return `${CONTACT_EMAIL_HREF}?subject=${encodeURIComponent(`SeaForth — ${subject}`)}`;
}

export function HomePackagesSection() {
  return (
    <section className="hairline bg-pop border-y" id="packages">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="flex max-w-2xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Packages
              </p>
              <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Two ways to start.
              </h2>
              <p className="fade-in-up stagger-2 text-muted mt-5 max-w-xl leading-relaxed">
                Same studio; different entry points. Scope and timeline are set after a short
                alignment call.
              </p>
            </div>
            <Link
              href="/pricing"
              className="fade-in-up stagger-3 link-underline text-ink/80 hover:text-ink w-fit text-[13px] font-semibold tracking-[0.08em] uppercase"
            >
              Full package notes
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={[
                  'fade-in-up',
                  `stagger-${Math.min(idx + 1, 6)}`,
                  'hairline shadow-soft flex h-full flex-col rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/90 p-7 md:p-8',
                  pkg.featured ? 'ring-1 ring-[color:var(--brand-teal)]' : '',
                ].join(' ')}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-ink text-2xl tracking-tight md:text-3xl">
                    {pkg.name}
                  </h3>
                  {pkg.featured ? (
                    <span className="hairline rounded-full border border-[color:var(--brand-teal)]/35 bg-[color:var(--brand-teal)]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[color:var(--brand-teal)] uppercase">
                      Most full-service
                    </span>
                  ) : null}
                </div>

                <p className="text-ink mt-4 text-base leading-snug font-medium">{pkg.hook}</p>
                <p className="text-muted mt-3 text-sm leading-relaxed">{pkg.audience}</p>

                <div className="hairline mt-8 border-t pt-8">
                  <p className="text-ink/55 text-[12px] font-semibold tracking-[0.16em] uppercase">
                    Deliverables
                  </p>
                  <ul className="text-muted mt-4 grid gap-3 text-sm leading-relaxed">
                    {pkg.deliverables.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-10">
                  <Button
                    href={mailtoWithSubject(pkg.subject)}
                    className={[
                      'w-full rounded-full px-7 py-4',
                      pkg.featured
                        ? 'bg-[color:var(--brand-teal)] text-white hover:bg-[color:var(--brand-teal-dark)]'
                        : 'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)]',
                    ].join(' ')}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
