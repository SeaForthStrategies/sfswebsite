import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { TechStackLogos } from '@/components/visual/TechStackLogos';
import { SERVICE_PACKAGES } from '@/data/packages';
import { mailtoPackageInterest } from '@/lib/site';

export function HomePackagesSection() {
  return (
    <section className="hairline bg-pop border-y" id="packages">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 md:py-24">
          <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Packages</p>
              <h2 className="fade-in-up stagger-1 font-display text-ink mt-4 text-2xl leading-[1.06] tracking-[-0.02em] sm:mt-5 sm:text-3xl md:mt-6 md:text-4xl md:leading-[1.02] lg:text-5xl">
                Starting prices & deliverables
              </h2>
              <p className="fade-in-up stagger-2 text-muted mt-4 max-w-xl text-sm leading-relaxed sm:mt-5 sm:text-base">
                Two paths—custom development or Squarespace design. Final scope is confirmed after
                an alignment call.
              </p>
            </div>
            <div className="fade-in-up stagger-3 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-6">
              <Link
                href="/pricing"
                className="link-underline text-ink/80 hover:text-ink font-mono text-[12px] font-semibold tracking-[0.12em] uppercase"
              >
                Full pricing
              </Link>
              <Link
                href="/services"
                className="link-underline text-ink/80 hover:text-ink font-mono text-[12px] font-semibold tracking-[0.12em] uppercase"
              >
                All services
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-2 lg:items-stretch">
            {SERVICE_PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={[
                  'fade-in-up',
                  `stagger-${Math.min(idx + 1, 6)}`,
                  'tech-panel hover-lift hairline shadow-soft flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/90 p-5 sm:p-6 md:p-8',
                  pkg.featured ? 'ring-1 ring-[color:var(--brand-teal)]' : '',
                ].join(' ')}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-ink text-xl tracking-tight sm:text-2xl md:text-3xl">
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
                    href={mailtoPackageInterest(pkg.name)}
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

          <p className="fade-in-up text-muted mt-10 max-w-2xl text-sm leading-relaxed">
            Extras like copy support, IA, and SEO can be layered in when scoped.
          </p>

          <div className="fade-in-up hairline bg-surface shadow-soft mt-10 rounded-[var(--radius-lg)] border p-7 md:p-8">
            <p className="label-tech text-[color:var(--brand-gold)]">Expertise & tools</p>
            <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
              Full skills breakdown on the{' '}
              <Link href="/services" className="link-underline text-ink/80 hover:text-ink">
                Services
              </Link>{' '}
              page.
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
