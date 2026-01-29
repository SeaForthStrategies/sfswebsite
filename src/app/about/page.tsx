import type { Metadata } from 'next';

import { PageHeader } from '@/components/layout/PageHeader';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the co-founders of SeaForth Strategies—creative execution and analytical authority, built as one system.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Two Co-Founders. One standard."
        subtitle="SeaForth Strategies is built on creative execution and analytical authority—so the work looks premium, reads clearly, and performs measurably."
        backgroundImageSrc="/images/marissa-rodriguez-2mKYEVGA4jE-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-14 md:grid-cols-2 md:gap-10">
              <div className="fade-in-up">
                <div className="shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/7CC381A4-0716-416E-B8F8-B2E80D7C8955.JPG"
                      alt="Abby — Co-Founder"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 768px) 40vw, 92vw"
                    />
                  </div>
                </div>
                <p className="text-ink/60 mt-6 text-[12px] font-semibold uppercase tracking-[0.16em]">
                  Abby — Co-Founder
                </p>
                <h2 className="font-display text-ink mt-2 text-3xl">
                  Creative + technical execution
                </h2>
                <p className="text-muted mt-4 leading-relaxed">
                  Abby leads web design & development, and runs branding and marketing strategy
                  calls. She’s the primary client-facing strategist—ensuring every build is clear,
                  confident, and designed to convert.
                </p>
                <blockquote className="hairline bg-surface mt-6 rounded-[var(--radius)] border p-6">
                  <p className="font-display text-ink text-2xl leading-snug">
                    “Great design isn’t just how something looks—it’s how clearly it works, how
                    confidently it communicates, and how effectively it converts.”
                  </p>
                </blockquote>
              </div>

              <div className="fade-in-up stagger-2">
                <div className="shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/Savanna.png"
                      alt="Savanna — Co-Founder"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 768px) 40vw, 92vw"
                    />
                  </div>
                </div>
                <p className="text-ink/60 mt-6 text-[12px] font-semibold uppercase tracking-[0.16em]">
                  Savanna — Co-Founder
                </p>
                <h2 className="font-display text-ink mt-2 text-3xl">
                  Analytics + performance optimization
                </h2>
                <p className="text-muted mt-4 leading-relaxed">
                  Savanna leads analytics, data, and performance optimization—ensuring every
                  campaign is data-backed, refined, and built to scale.
                </p>
                <blockquote className="hairline bg-surface mt-6 rounded-[var(--radius)] border p-6">
                  <p className="font-display text-ink text-2xl leading-snug">
                    “I turn complex metrics into clear insights that drive smarter decisions and
                    measurable growth.”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  How we work
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02]">
                  Designed, not assembled.
                </h2>
              </div>
              <div className="md:col-span-7">
                <div className="hairline divide-y">
                  {[
                    {
                      t: 'Editorial clarity',
                      d: 'Bold spacing, strong typographic rhythm, and structure that guides attention.',
                    },
                    {
                      t: 'Performance as a design feature',
                      d: 'Fast, accessible, and built to scale—because “premium” should feel effortless.',
                    },
                    {
                      t: 'Measurement without noise',
                      d: 'Tracking, reporting, and optimization centered on decisions—not vanity metrics.',
                    },
                  ].map((p, idx) => (
                    <div
                      key={p.t}
                      className={['fade-in-up', `stagger-${Math.min(idx + 1, 6)}`, 'py-8'].join(
                        ' '
                      )}
                    >
                      <h3 className="text-ink text-xl font-semibold">{p.t}</h3>
                      <p className="text-muted mt-3 leading-relaxed">{p.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hairline shadow-soft mt-14 rounded-[var(--radius-lg)] border bg-[color:var(--bg)] p-7 md:p-10">
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-6">
                  <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                    The difference
                  </p>
                  <h2 className="fade-in-up font-display text-ink mt-6 text-3xl leading-[1.05] md:text-4xl">
                    Boutique attention. System-level output.
                  </h2>
                  <p className="fade-in-up text-muted mt-6 leading-relaxed">
                    We’re small on purpose. It keeps the work focused, the feedback loop tight, and
                    the final product cohesive.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        t: 'Co-founder led',
                        d: 'Strategy and execution are handled by Abby + Savanna.',
                      },
                      {
                        t: 'Modern build',
                        d: 'Clean, scalable, and designed to evolve as you grow.',
                      },
                      {
                        t: 'Motion with restraint',
                        d: 'Animation that supports clarity—not clutter.',
                      },
                      {
                        t: 'Measured outcomes',
                        d: 'Analytics and performance are part of the system.',
                      },
                    ].map((c, idx) => (
                      <div
                        key={c.t}
                        className={[
                          'reveal',
                          `stagger-${Math.min(idx + 1, 6)}`,
                          'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius)] border p-6',
                        ].join(' ')}
                      >
                        <h3 className="text-ink text-lg font-semibold">{c.t}</h3>
                        <p className="text-muted mt-2 leading-relaxed">{c.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <BackgroundOrbs className="opacity-85" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  A few snapshots
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  The style is editorial. The engine is measurable.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="fade-in-up text-muted leading-relaxed">
                  We care about aesthetics—but we care just as much about how clearly the system
                  works.
                </p>
              </div>
            </div>

            <PortfolioGallery
              className="mt-12"
              framed={false}
              items={[
                {
                  src: '/images/Website Portfolio (1)/1031.png',
                  alt: '1031 Capital Solutions website',
                  width: 1280,
                  height: 720,
                },
                {
                  src: '/images/Website Portfolio (1)/LUX.png',
                  alt: 'LUX website',
                  width: 1280,
                  height: 720,
                },
                {
                  src: '/images/Website Portfolio (1)/Social Affair.png',
                  alt: 'The Social Affair website',
                  width: 1280,
                  height: 720,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <div className="relative overflow-hidden">
          <BackgroundOrbs variant="dark" className="opacity-95" />
          <div className="absolute inset-0 opacity-60">
            <Sparkles color="rgba(213, 163, 83, 0.75)" />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Let’s set direction—then build.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  Book a short strategy call. We’ll align on goals, scope, and timelines with zero
                  pressure.
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
