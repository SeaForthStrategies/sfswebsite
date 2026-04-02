import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { SERVICE_PACKAGES } from '@/data/packages';
import { CONTACT_EMAIL_HREF } from '@/lib/site';

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
              <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Packages</p>
              <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Two ways to start.
              </h2>
              <p className="fade-in-up stagger-2 text-muted mt-5 max-w-xl leading-relaxed">
                Development (custom code, GitHub, Vercel) or design on Squarespace—the more
                affordable route. Scope and timeline are set after a short alignment call.
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
            {SERVICE_PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={[
                  'fade-in-up',
                  `stagger-${Math.min(idx + 1, 6)}`,
                  'tech-panel hover-lift hairline shadow-soft flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/90 p-7 md:p-8',
                  pkg.featured ? 'ring-1 ring-[color:var(--brand-teal)]' : '',
                ].join(' ')}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-ink text-2xl tracking-tight md:text-3xl">
                    {pkg.name}
                  </h3>
                  {pkg.badge ? (
                    <span className="hairline rounded-full border border-[color:var(--brand-teal)]/35 bg-[color:var(--brand-teal)]/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] text-[color:var(--brand-teal)] uppercase">
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>

                <p className="text-ink mt-4 text-base leading-snug font-medium">{pkg.hook}</p>
                <p className="text-muted mt-3 text-sm leading-relaxed">{pkg.audience}</p>

                <div className="hairline mt-6 border-t pt-6">
                  <p className="label-tech text-ink/55">Your account</p>
                  <p className="text-muted mt-3 text-sm leading-relaxed">{pkg.clientAccount}</p>
                </div>

                <div className="hairline mt-8 border-t pt-8">
                  <p className="label-tech text-ink/55">Deliverables</p>
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
