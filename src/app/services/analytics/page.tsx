import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/motion/CountUp';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';

const frontmatter = {
  title: 'Analytics & Data Insights',
  description:
    'Data-driven insights to optimize your digital strategy and maximize your return on investment.',
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.description}
        backgroundImageSrc="/images/ivan-bandura-5cwigXmGWTo-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  What this includes
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Measurement that guides decisions.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="fade-in-up text-muted leading-relaxed">
                  We instrument analytics with intention—so what you track connects directly to what
                  you do next. No vanity metrics. No noise.
                </p>
                <ul className="fade-in-up text-muted mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Event tracking + conversion paths',
                    'Dashboards & reporting cadence',
                    'Performance audits + recommendations',
                    'Experimentation priorities (what to test next)',
                  ].map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="fade-in-up mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                    href="mailto:contact@seaforthstrategies.com"
                  >
                    Email us
                  </a>
                  <Link
                    href="/services"
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    Explore services
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {[
                { k: 'Events tracked', v: 25, s: '+' },
                { k: 'Reporting cadence', v: 4, s: 'w' },
                { k: 'Faster decisions', v: 2, s: '×' },
                { k: 'Noise removed', v: 80, s: '%' },
              ].map((stat, idx) => (
                <div
                  key={stat.k}
                  className={[
                    'fade-in-scale',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7',
                  ].join(' ')}
                >
                  <p className="text-ink/50 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    {stat.k}
                  </p>
                  <p className="font-display text-ink mt-4 text-4xl">
                    <CountUp to={stat.v} />
                    <span className="text-ink/50">{stat.s}</span>
                  </p>
                  <p className="text-muted mt-3 leading-relaxed">
                    Designed to be directional—not performative.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface relative overflow-hidden border-y">
        <BackgroundOrbs className="opacity-90" />
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  What you get
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Tracking you can trust.
                </h2>
                <p className="fade-in-up text-muted mt-6 leading-relaxed">
                  We map analytics to your funnel—then turn it into a weekly loop: measure → decide
                  → refine.
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      t: 'Event design',
                      d: 'We define the events that matter (and ignore the ones that don’t).',
                    },
                    {
                      t: 'Dashboard',
                      d: 'A clean view of performance that answers: what changed, and what next?',
                    },
                    {
                      t: 'Audits',
                      d: 'Speed, SEO, and conversion diagnostics with a prioritized plan.',
                    },
                    {
                      t: 'Iteration',
                      d: 'Testing priorities that compound over time instead of constant rework.',
                    },
                  ].map((c, idx) => (
                    <div
                      key={c.t}
                      className={[
                        'reveal',
                        `stagger-${Math.min(idx + 1, 6)}`,
                        'hairline shadow-soft hover-lift rounded-[var(--radius-lg)] border bg-[color:var(--bg)] p-7',
                      ].join(' ')}
                    >
                      <h3 className="text-ink text-xl font-semibold">{c.t}</h3>
                      <p className="text-muted mt-3 leading-relaxed">{c.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fade-in-up hairline bg-surface shadow-soft mt-12 rounded-[var(--radius-lg)] border p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <p className="text-ink/50 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    Common outcomes
                  </p>
                  <p className="text-muted mt-4 text-lg leading-relaxed">
                    Clear attribution, higher-quality inquiries, and a funnel you can improve with
                    confidence.
                  </p>
                </div>
                <div className="md:col-span-4">
                  <Link
                    href="/pricing"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--ink)] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[color:var(--bg)] transition-colors hover:bg-[color:var(--brand-teal)]"
                  >
                    View packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <div className="relative overflow-hidden">
          <BackgroundOrbs variant="dark" className="opacity-95" />
          <div className="absolute inset-0 opacity-60">
            <Sparkles color="rgba(42, 124, 132, 0.7)" />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Let’s turn your data into direction.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll map the tracking plan to your funnel, then recommend the highest-leverage
                  optimizations.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button href="/contact" variant="accent" className="w-full rounded-full py-4">
                  Contact SeaForth
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
