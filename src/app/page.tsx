import Image from 'next/image';
import Link from 'next/link';

import { AnimatedWords } from '@/components/motion/AnimatedWords';
import { Button } from '@/components/ui/Button';
import { ClientsMarquee } from '@/components/visual/ClientsMarquee';
import { HomeFounderSection } from '@/components/visual/HomeFounderSection';
import { HomePackagesSection } from '@/components/visual/HomePackagesSection';
import { CALENDLY_URL, CONTACT_EMAIL_HREF, publicAssetPath } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* Hero — editorial layout + tech grid / scan overlay */}
      <section className="editorial-hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]">
          <Image
            src={publicAssetPath('/images/matt-howard-R_bPhkgALY4-unsplash.jpg')}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[color:var(--bg)]/0 [mask-image:radial-gradient(72%_62%_at_50%_20%,black,transparent)]" />
        </div>
        <div className="tech-hero-overlay" aria-hidden />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center pt-12 pb-14 text-center sm:pt-14 sm:pb-16 md:items-start md:pt-24 md:pb-28 md:text-left">
            <h1 className="fade-in-up font-display text-ink text-[clamp(1.65rem,6.5vw+0.5rem,2.75rem)] leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl md:leading-[1.06] lg:text-[3.25rem]">
              <AnimatedWords text="Website design for business owners who notice the details." />
            </h1>
            <p className="fade-in-up stagger-1 text-muted mt-5 max-w-xl text-[15px] leading-[1.65] sm:mt-6 sm:text-base md:mt-7 md:text-lg">
              Structured sites, refined UI, and a straight path from kickoff to launch—packages
              spell out pricing paths.
            </p>

            <div className="fade-in-up stagger-2 mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 md:justify-start">
              <Button
                href={CONTACT_EMAIL_HREF}
                className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)] sm:w-auto"
              >
                Start a project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                className="w-full rounded-full sm:w-auto"
              >
                View work
              </Button>
            </div>

            <div className="fade-in-up stagger-3 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-[12px] font-semibold tracking-[0.12em] uppercase md:justify-start">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink/70 hover:text-ink"
              >
                Book a call
              </a>
              <Link href="#packages" className="link-underline text-ink/70 hover:text-ink">
                View packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="hairline bg-pop border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-10 sm:py-12 md:py-16">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">
                  Selected work
                </p>
                <h2 className="fade-in-up font-display text-ink mt-3 text-xl leading-[1.1] tracking-[-0.02em] sm:mt-4 sm:text-2xl md:text-3xl">
                  Sites I’ve shipped for.
                </h2>
              </div>
              <div className="fade-in-up md:col-span-8">
                <ClientsMarquee />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFounderSection />

      <HomePackagesSection />

      {/* Process */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Process</p>
              <h2 className="fade-in-up font-display text-ink mt-4 text-2xl leading-[1.06] tracking-[-0.02em] sm:mt-5 sm:text-3xl md:mt-6 md:text-4xl md:leading-[1.02] lg:text-5xl">
                Straightforward. No theater.
              </h2>
              <p className="fade-in-up text-muted mt-4 max-w-lg text-sm leading-relaxed sm:mt-5 md:text-base">
                Three steps from alignment to launch—the same process for every engagement.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
              {[
                {
                  n: '01',
                  t: 'Align',
                  d: 'Define audience, pages, and what success looks like on the site.',
                },
                {
                  n: '02',
                  t: 'Design & build',
                  d: 'UI, components, and responsive front end—one coherent system.',
                },
                {
                  n: '03',
                  t: 'Launch',
                  d: 'QA, handoff, and a short refinement pass so it’s ready for traffic.',
                },
              ].map((step, idx) => (
                <div
                  key={step.n}
                  className={[
                    'fade-in-up',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'tech-panel hairline bg-surface shadow-soft overflow-hidden rounded-[var(--radius-lg)] border p-5 sm:p-6 md:p-7',
                  ].join(' ')}
                >
                  <p className="font-mono text-[11px] font-semibold tracking-[0.22em] text-[color:var(--brand-teal)] uppercase">
                    Step {step.n}
                  </p>
                  <h3 className="text-ink mt-3 text-xl font-semibold tracking-tight">{step.t}</h3>
                  <p className="text-muted mt-3 text-sm leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 md:py-24">
            <div className="grid gap-8 sm:gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Next step</p>
                <h2 className="fade-in-up font-display mt-4 text-2xl leading-[1.08] tracking-[-0.02em] sm:mt-5 sm:text-3xl md:mt-6 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  Tell me what you’re building.
                </h2>
                <p className="fade-in-up mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-5 sm:text-base">
                  One email is enough to start—I’ll reply with questions, not a pitch deck.
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="fade-in-up rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-7">
                  <Button
                    href={CONTACT_EMAIL_HREF}
                    variant="accent"
                    className="w-full rounded-full px-7 py-4"
                  >
                    Start a project
                  </Button>
                  <p className="mt-5 text-sm text-white/60">
                    Prefer a call first?{' '}
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-white/85 hover:text-white"
                    >
                      Book 30 minutes
                    </a>
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
