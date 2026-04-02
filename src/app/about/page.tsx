import type { Metadata } from 'next';

import { PageHeader } from '@/components/layout/PageHeader';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';
import { PORTFOLIO_GALLERY_HIGHLIGHTS } from '@/lib/portfolio';
import { CONTACT_EMAIL_HREF, PORTFOLIO_URL, publicAssetPath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'SeaForth Strategies is a website-only studio led by Abigail Lehr—custom site design, development, and launch.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A boutique website studio."
        subtitle="SeaForth exists to build better websites—nothing else. Custom UI, disciplined front-end delivery, and launches that hold up."
        backgroundImageSrc="/images/marissa-rodriguez-2mKYEVGA4jE-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="fade-in-up text-muted leading-relaxed">
                SeaForth is built around the website: design, build, and launch in one workflow—one
                lead, one standard of craft. For web project examples,{' '}
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  browse the portfolio
                </a>
                .
              </p>
            </div>

            <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:items-start md:gap-10 lg:gap-14">
              <div className="fade-in-up md:col-span-5">
                <div className="shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={publicAssetPath('/images/7CC381A4-0716-416E-B8F8-B2E80D7C8955.JPG')}
                      alt="Abigail Lehr — Founder, SeaForth Strategies"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 768px) 38vw, 92vw"
                    />
                  </div>
                </div>
              </div>

              <div className="fade-in-up stagger-2 md:col-span-7">
                <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                  Abigail Lehr — Founder
                </p>
                <h2 className="font-display text-ink mt-3 text-3xl md:text-4xl">
                  Front-end craft, from structure to launch.
                </h2>
                <p className="text-muted mt-5 leading-relaxed">
                  Abigail leads SeaForth’s website engagements end to end: information architecture,
                  visual design, responsive development (often in Next.js), performance and SEO
                  fundamentals, and post-launch iteration. The goal is always the same—a site that
                  looks intentional, loads fast, and is easy to evolve.
                </p>
                <blockquote className="hairline bg-surface mt-8 rounded-[var(--radius)] border p-6 md:p-8">
                  <p className="font-display text-ink text-xl leading-snug md:text-2xl">
                    “Great design isn’t just how something looks—it’s how clearly it works, how
                    confidently it communicates, and how effectively it converts.”
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
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
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
                      t: 'Launch discipline',
                      d: 'Staging, QA, and a clean handoff—so you ship with confidence.',
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
                  <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                    The difference
                  </p>
                  <h2 className="fade-in-up font-display text-ink mt-6 text-3xl leading-[1.05] md:text-4xl">
                    Boutique attention. System-level output.
                  </h2>
                  <p className="fade-in-up text-muted mt-6 leading-relaxed">
                    We stay intentionally lean so engagements stay accountable—tight feedback loops,
                    consistent creative direction, and a final product that feels like one firm
                    built it.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        t: 'Founder-led builds',
                        d: 'One lead from wireframe to production—no handoff roulette.',
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
                        d: 'On-site performance and conversion signals guide what to improve next.',
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
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  A few snapshots
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  The style is editorial. The code is production-ready.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="fade-in-up text-muted leading-relaxed">
                  We care about how the site looks—and how it behaves under real traffic and real
                  content updates.
                </p>
              </div>
            </div>

            <PortfolioGallery
              className="mt-12"
              framed={false}
              items={PORTFOLIO_GALLERY_HIGHLIGHTS}
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
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
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
                  href={CONTACT_EMAIL_HREF}
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
