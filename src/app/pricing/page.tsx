import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description:
    'Clear package tiers for boutique web, branding, strategy, and analytics—built for performance and measurable outcomes.',
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Packages & Pricing"
        subtitle="Clear tiers with boutique delivery. Custom work, disciplined structure, and performance-aware motion—built to last."
        backgroundImageSrc="/images/kelsey-knight-CrRr3y1lhl8-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                Package tiers
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Choose the depth you need.
              </h2>
              <p className="fade-in-up text-muted mt-6 leading-relaxed">
                Every package is custom-designed. The difference is scope and collaboration
                cadence—not a template.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: 'Foundation',
                  price: '$3,500',
                  subtitle: 'A premium starting point—built fast, built right.',
                  deliverables: [
                    'One-page or compact multi-section site',
                    'High-end design system + responsive build',
                    'SEO + performance baseline',
                    'Conversion-focused contact/booking flow',
                  ],
                  idealFor:
                    'New offers, service businesses, and founders who need a credible presence—now.',
                },
                {
                  name: 'Signature',
                  price: '$6,500',
                  subtitle: 'The intermediate tier—authority, depth, and clear conversion paths.',
                  deliverables: [
                    'Up to 5 core pages (Home, Services, About, Pricing, Contact)',
                    'Editorial layout system + component library',
                    'Analytics instrumentation + KPI dashboard setup',
                    'Launch-ready copy refinement + structure guidance',
                  ],
                  idealFor:
                    'Small-to-mid-sized businesses ready to look established and scale with confidence.',
                  featured: true,
                },
                {
                  name: 'Partnership',
                  price: 'Custom',
                  subtitle: 'Ongoing strategy + optimization for brands that move quickly.',
                  deliverables: [
                    'Bespoke custom build + advanced functionality',
                    'Brand + campaign creative direction',
                    'Performance optimization & experimentation',
                    'Monthly reporting + strategic iteration',
                  ],
                  idealFor:
                    'Teams who want a long-term partner for design, growth, and performance.',
                },
              ].map((p, idx) => (
                <div
                  key={p.name}
                  className={[
                    'fade-in-up',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border',
                    p.featured ? 'ring-1 ring-[color:var(--brand-teal)]' : '',
                  ].join(' ')}
                >
                  <div className="p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                          {p.featured ? 'Recommended' : 'Package'}
                        </p>
                        <h3 className="font-display text-ink mt-2 break-words text-3xl">
                          {p.name}
                        </h3>
                      </div>
                      <div className="shrink-0 sm:text-right">
                        <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                          Starting at
                        </p>
                        <p className="text-ink mt-2 text-3xl font-semibold">{p.price}</p>
                      </div>
                    </div>

                    <p className="text-muted mt-5 leading-relaxed">{p.subtitle}</p>

                    <div className="hairline mt-6 border-t pt-6">
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                        Deliverables
                      </p>
                      <ul className="text-muted mt-4 space-y-3">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex min-w-0 gap-3">
                            <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                            <span className="min-w-0 break-words">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hairline mt-6 border-t pt-6">
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                        Ideal client
                      </p>
                      <p className="text-muted mt-3 break-words leading-relaxed">{p.idealFor}</p>
                    </div>

                    <div className="mt-8">
                      <Button
                        href="mailto:contact@seaforthstrategies.com"
                        className={[
                          'w-full rounded-full py-4',
                          p.featured
                            ? 'bg-[color:var(--brand-teal)] text-white hover:bg-[color:var(--brand-teal-dark)]'
                            : 'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)]',
                        ].join(' ')}
                      >
                        Email us
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: 'Timeline',
                  d: 'Most projects run 2–6 weeks depending on scope and feedback cadence.',
                },
                {
                  t: 'Process',
                  d: 'Discovery → direction → build → refine (with performance checks along the way).',
                },
                {
                  t: 'Deliverable',
                  d: 'A modular system you can extend, not a brittle one-off site.',
                },
              ].map((c, idx) => (
                <div
                  key={c.t}
                  className={[
                    'fade-in-scale',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7',
                  ].join(' ')}
                >
                  <h3 className="text-ink text-xl font-semibold">{c.t}</h3>
                  <p className="text-muted mt-3 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="hairline bg-surface shadow-soft mt-14 rounded-[var(--radius-lg)] border p-7 md:p-10">
              <div className="grid gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                    Ongoing care
                  </p>
                  <h2 className="font-display text-ink mt-6 text-3xl md:text-4xl">
                    Maintenance + performance optimization
                  </h2>
                  <p className="text-muted mt-5 leading-relaxed">
                    For clients who want the site to stay fast, secure, and continuously improving.
                  </p>
                  <ul className="text-muted mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      'Security monitoring + backups',
                      'Performance and SEO checks',
                      'Content updates (1–2 hours/mo)',
                      'Analytics review + recommendations',
                    ].map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-5">
                  <div className="grid gap-4">
                    {[
                      {
                        name: 'Optimization Retainer',
                        price: '$500–$1,000',
                        desc: 'Keep the site fast, secure, and improving with lightweight iteration.',
                        bullets: [
                          'Security monitoring + backups',
                          'Performance + SEO checks',
                          'Analytics review + recommendations',
                        ],
                      },
                      {
                        name: 'Website Updates Retainer',
                        price: '$400–$800',
                        desc: 'For regular edits: content, layout tweaks, and new sections.',
                        bullets: [
                          'Content swaps + layout tweaks',
                          'Image + copy updates',
                          'New sections (within monthly hours)',
                        ],
                      },
                      {
                        name: 'Landing Pages + Updates',
                        price: '$1,200–$2,000',
                        desc: 'For active offers and campaigns that need new pages and ongoing changes.',
                        bullets: [
                          'New landing pages (scoped within monthly hours)',
                          'Offer + campaign page updates',
                          'Conversion-focused UI iteration',
                        ],
                      },
                      {
                        name: 'Analytics Retainer',
                        price: '$600–$1,500',
                        desc: 'Monthly reporting, dashboard care, and decision-ready insights.',
                        bullets: [
                          'Dashboard maintenance + KPI tracking',
                          'Monthly insights + recommendations',
                          'Funnel + lead quality review',
                        ],
                      },
                    ].map((tier) => (
                      <div
                        key={tier.name}
                        className="hairline hover-lift rounded-[var(--radius)] border bg-[color:var(--bg)] p-7"
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="min-w-0">
                            <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                              Retainer
                            </p>
                            <h3 className="font-display text-ink mt-2 break-words text-2xl">
                              {tier.name}
                            </h3>
                          </div>
                          <div className="text-left sm:shrink-0 sm:text-right">
                            <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                              Monthly
                            </p>
                            <p className="text-ink mt-2 text-2xl font-semibold">
                              {tier.price}
                              <span className="text-ink/40 text-base">/mo</span>
                            </p>
                          </div>
                        </div>

                        <p className="text-muted mt-4 leading-relaxed">{tier.desc}</p>

                        <ul className="text-muted mt-5 space-y-2">
                          {tier.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                              <span className="min-w-0 break-words">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <Button
                      href="mailto:contact@seaforthstrategies.com"
                      className="w-full rounded-full bg-[color:var(--ink)] py-4 text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)]"
                    >
                      Email about retainers
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <p className="fade-in-up text-muted mt-10 text-sm">
              Not sure which tier fits?{' '}
              <Link href="/contact" className="link-underline text-ink/80 hover:text-ink">
                Send a message
              </Link>{' '}
              or{' '}
              <a
                className="link-underline text-ink/80 hover:text-ink"
                href="mailto:contact@seaforthstrategies.com"
              >
                email us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-3xl">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                FAQ
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Quick answers, no fluff.
              </h2>
            </div>

            <div className="mt-10 grid gap-3 md:max-w-4xl">
              <FaqItem
                q="Is everything custom?"
                a="Yes—design and layout are bespoke. Packages simply define a starting scope and collaboration cadence."
              />
              <FaqItem
                q="Do you handle copy?"
                a="We can refine structure and messaging, and collaborate on final copy. Full copywriting support is available depending on scope."
              />
              <FaqItem
                q="What stack do you use?"
                a="We typically build in Next.js (App Router) with a disciplined component system, performance-aware motion, and analytics instrumentation. If we ever change the stack, the approach stays the same."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <BackgroundOrbs variant="dark" className="opacity-95" />
        <div className="absolute inset-0 opacity-45">
          <Sparkles color="rgba(213, 163, 83, 0.65)" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Let’s align on scope and outcomes.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll recommend the cleanest package tier, then customize from there.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href="mailto:contact@seaforthstrategies.com"
                  variant="accent"
                  className="w-full rounded-full px-7 py-4"
                >
                  Email us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="hairline bg-surface group rounded-[var(--radius)] border transition-colors hover:border-[color:color-mix(in_srgb,var(--brand-teal),transparent_55%)]">
      <details className="w-full">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 focus:outline-none">
          <span className="text-ink min-w-0 break-words text-lg font-semibold transition-colors group-hover:text-[color:var(--brand-teal)]">
            {q}
          </span>
          <span className="font-display shrink-0 select-none text-2xl text-[color:var(--brand-gold)]">
            ＋
          </span>
        </summary>
        <div className="text-muted px-6 pb-6 pt-0 leading-relaxed">{a}</div>
      </details>
    </div>
  );
}
