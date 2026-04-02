import Image from 'next/image';
import Link from 'next/link';

import { AnimatedWords } from '@/components/motion/AnimatedWords';
import { Button } from '@/components/ui/Button';
import { ClientsMarquee } from '@/components/visual/ClientsMarquee';
import { HomeFounderSection } from '@/components/visual/HomeFounderSection';
import { HomePackagesSection } from '@/components/visual/HomePackagesSection';
import { HomeServicesSection } from '@/components/visual/HomeServicesSection';
import { CALENDLY_URL, CONTACT_EMAIL_HREF, PORTFOLIO_URL, publicAssetPath, SITE } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* Hero — editorial / resume-style layout; brand colors unchanged */}
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center pt-16 pb-16 text-center md:items-start md:pt-24 md:pb-28 md:text-left">
            <p className="fade-in-up kicker text-ink/55 mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase">
              <span className="kicker-dot h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)]" />
              Boutique website studio
            </p>
            <div className="fade-in-up stagger-1 w-full">
              <Image
                src={publicAssetPath(SITE.logoPath)}
                alt={SITE.name}
                width={520}
                height={140}
                priority
                className="mx-auto h-16 w-auto md:mx-0 md:h-24"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>

            <h1 className="fade-in-up stagger-2 font-display text-ink mt-8 text-4xl tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[3.25rem] lg:leading-[1.06]">
              <AnimatedWords text="Website design for business owners who notice the details." />
            </h1>
            <p className="fade-in-up stagger-3 text-muted mt-7 max-w-xl text-base leading-[1.65] md:text-lg">
              Custom sites—clear structure, refined UI, and code you can live with after launch.
            </p>

            <div className="fade-in-up stagger-4 mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center md:justify-start">
              <Button
                href={CONTACT_EMAIL_HREF}
                className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)] sm:w-auto"
              >
                Start a project
              </Button>
              <Button
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full rounded-full sm:w-auto"
              >
                View work
              </Button>
            </div>

            <div className="fade-in-up stagger-5 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-semibold tracking-[0.08em] uppercase md:justify-start">
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
          <div className="py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  Selected work
                </p>
                <h2 className="fade-in-up font-display text-ink mt-4 text-2xl leading-[1.08] tracking-[-0.02em] md:text-3xl">
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

      <HomeServicesSection />

      <HomePackagesSection />

      {/* Process */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Process
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Straightforward. No theater.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                    'hairline bg-surface shadow-soft rounded-[var(--radius-lg)] border p-7',
                  ].join(' ')}
                >
                  <p className="text-ink/50 text-[12px] font-semibold tracking-[0.16em] uppercase">
                    {step.n}
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
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl lg:text-5xl">
                  Tell me what you’re building.
                </h2>
                <p className="fade-in-up mt-5 max-w-xl text-base leading-relaxed text-white/70">
                  One email is enough to start—I’ll reply with questions, not a pitch deck.
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="fade-in-up rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-7">
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
