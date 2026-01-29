import Image from 'next/image';
import Link from 'next/link';

import { AnimatedWords } from '@/components/motion/AnimatedWords';
import { Sparkles } from '@/components/Sparkles';
import { Button } from '@/components/ui/Button';
import { ClientsMarquee } from '@/components/visual/ClientsMarquee';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { HeroCursor } from '@/components/visual/HeroCursor';
import { MetricsSection } from '@/components/visual/MetricsSection';
import { WhatWeDoSection } from '@/components/visual/WhatWeDoSection';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="tech-hero relative isolate overflow-hidden">
        <BackgroundOrbs className="z-0" />
        <div className="hidden md:block">
          <Sparkles />
        </div>
        <HeroCursor />
        {/* Subtle background photo wash (accent-only) */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]">
          <Image
            src="/images/matt-howard-R_bPhkgALY4-unsplash.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="bg-[color:var(--bg)]/0 absolute inset-0 [mask-image:radial-gradient(72%_62%_at_50%_20%,black,transparent)]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center pb-16 pt-16 text-center md:pb-24 md:pt-24">
            <p className="fade-in-up text-ink/60 hairline bg-[color:var(--bg)]/55 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] shadow-[0_0_0_6px_rgba(42,124,132,0.10)]" />
              Precision design. Measurable growth.
            </p>
            <div className="fade-in-up stagger-1">
              <Image
                src="/images/logo.png"
                alt="SeaForth Strategies"
                width={520}
                height={140}
                priority
                className="mx-auto h-16 w-auto md:h-24"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>

            <h1 className="fade-in-up stagger-2 font-display text-ink mt-8 text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl">
              <AnimatedWords text="Web design that feels premium—analytics that proves it." />
            </h1>
            <p className="fade-in-up stagger-3 text-muted mt-7 max-w-2xl text-lg leading-relaxed">
              We design the system, build it with performance in mind, and instrument analytics—so
              your site feels distinctive, loads fast, and converts with clarity.
            </p>

            <div className="fade-in-up stagger-4 mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="mailto:contact@seaforthstrategies.com"
                className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)] sm:w-auto"
              >
                Email us
              </Button>
              <Button
                href="https://calendly.com/gatorgleamsmm/30min"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full rounded-full sm:w-auto"
              >
                Schedule a call
              </Button>
              <Link
                href="/pricing"
                className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
              >
                View packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="hairline bg-pop border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Trusted by
                </p>
                <h2 className="fade-in-up font-display text-ink mt-4 text-3xl leading-[1.05] md:text-4xl">
                  Brands that value craft.
                </h2>
                <p className="fade-in-up text-muted mt-4 leading-relaxed">
                  A small sample of the teams we’ve supported—across design, web, and growth.
                </p>
              </div>
              <div className="fade-in-up md:col-span-8">
                <ClientsMarquee />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MetricsSection />

      <WhatWeDoSection />

      {/* Pricing CTA (no tiers on home) */}
      <section className="hairline bg-pop border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Packages & Pricing
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Pricing is simple: pick a starting point, then customize.
                </h2>
                <p className="fade-in-up text-muted mt-6 max-w-2xl leading-relaxed">
                  We’ll recommend the right scope based on your goals, timeline, and what “success”
                  looks like—then tailor deliverables from there.
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="fade-in-up flex flex-col gap-3">
                  <Button
                    href="/services"
                    className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                  >
                    Explore services
                  </Button>
                  <Link
                    href="/pricing"
                    className="link-underline text-ink/80 hover:text-ink text-center text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    View pricing details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                Process
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Simple steps. High standards.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                {
                  n: '01',
                  t: 'Discovery',
                  d: 'We clarify your audience, offer, and goals—then define what “winning” looks like.',
                },
                {
                  n: '02',
                  t: 'Direction',
                  d: 'We establish structure, messaging, and a visual system with editorial discipline.',
                },
                {
                  n: '03',
                  t: 'Build',
                  d: 'We design and develop with performance, motion, and conversion in mind.',
                },
                {
                  n: '04',
                  t: 'Refine',
                  d: 'We instrument analytics and optimize what matters—clarity, speed, and outcomes.',
                },
              ].map((step, idx) => (
                <div
                  key={step.n}
                  className={[
                    'fade-in-up',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline bg-surface shadow-soft rounded-[var(--radius-lg)] border p-7',
                  ].join(' ')}
                >
                  <p className="text-ink/50 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    {step.n}
                  </p>
                  <h3 className="text-ink mt-3 text-xl font-semibold">{step.t}</h3>
                  <p className="text-muted mt-3 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section className="bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Contact
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Ready for a site that feels expensive—and performs like it?
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  Send a quick email. We’ll align on goals, scope, and what success looks like—then
                  map the cleanest path to a launch-ready build.
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="fade-in-up rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-7">
                  <Button
                    href="mailto:contact@seaforthstrategies.com"
                    variant="accent"
                    className="w-full rounded-full px-7 py-4"
                  >
                    Email us
                  </Button>
                  <p className="mt-5 text-sm text-white/60">
                    Prefer email?{' '}
                    <a
                      className="link-underline break-all text-white/80 hover:text-white"
                      href="mailto:contact@seaforthstrategies.com"
                    >
                      contact@seaforthstrategies.com
                    </a>
                  </p>
                  <p className="mt-3 text-sm text-white/60">
                    Or{' '}
                    <Link href="/contact" className="link-underline text-white/80 hover:text-white">
                      send a message
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
