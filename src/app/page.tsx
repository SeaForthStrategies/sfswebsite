import Image from 'next/image';
import Link from 'next/link';

import { AnimatedWords } from '@/components/motion/AnimatedWords';
import { Button } from '@/components/ui/Button';
import { ClientsMarquee } from '@/components/visual/ClientsMarquee';
import { HomeFounderSection } from '@/components/visual/HomeFounderSection';
import { HomePackagesSection } from '@/components/visual/HomePackagesSection';
import { CALENDLY_URL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, publicAssetPath } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* Hero — split layout: copy + framed photography (no full-bleed stack / scan grid) */}
      <section className="relative overflow-hidden bg-[color:var(--bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-0 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
            <div className="order-2 flex flex-col justify-center py-10 pb-12 text-center sm:py-12 sm:pb-14 md:order-1 md:max-w-xl md:py-16 md:pr-4 md:text-left lg:py-20 lg:pr-8">
              <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">
                Web design &amp; build
              </p>
              <h1 className="fade-in-up font-display text-ink mt-4 text-[clamp(1.85rem,4.2vw+0.65rem,3.15rem)] leading-[1.06] tracking-[-0.03em] sm:mt-5 md:mt-6">
                <AnimatedWords text="Website design for business owners who notice the details." />
              </h1>
              <p className="fade-in-up stagger-1 text-muted mx-auto mt-5 max-w-lg text-[15px] leading-[1.65] sm:mt-6 sm:text-base md:mx-0 md:mt-7 md:max-w-none md:text-lg">
                Structured sites, refined UI, and a straight path from kickoff to launch—with clear
                starting points for custom code or Squarespace, then scope dialed in together.
              </p>

              <div className="fade-in-up stagger-2 mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:mx-0 md:justify-start">
                <Button
                  href={CALENDLY_URL}
                  className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)] sm:w-auto"
                >
                  Book a call
                </Button>
                <Button
                  href={CONTACT_EMAIL_HREF}
                  variant="secondary"
                  className="w-full rounded-full sm:w-auto"
                >
                  Email us
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
                <Link href="#packages" className="link-underline text-ink/70 hover:text-ink">
                  View packages
                </Link>
              </div>
            </div>

            <div className="hairline bg-surface shadow-soft relative order-1 -mx-4 aspect-[5/4] min-h-[240px] overflow-hidden rounded-b-[var(--radius-lg)] border sm:-mx-6 sm:aspect-[16/10] sm:min-h-[260px] md:mx-0 md:aspect-auto md:max-h-[min(720px,calc(100svh-var(--header-bar)-2rem))] md:min-h-[min(640px,calc(100svh-var(--header-bar)-2.5rem))] md:rounded-[var(--radius-lg)]">
              <Image
                src={publicAssetPath('/images/silas-baisch-K785Da4A_JA-unsplash.jpg')}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--bg)]/20 via-transparent to-[color:var(--brand-teal)]/10 dark:from-[color:var(--bg)]/35 dark:to-[color:var(--brand-teal)]/15"
                aria-hidden
              />
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
                  Book a short call or send one email—either way you’ll get thoughtful questions,
                  not a canned pitch.
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="fade-in-up rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-7">
                  <Button
                    href={CALENDLY_URL}
                    variant="accent"
                    className="w-full rounded-full px-7 py-4"
                  >
                    Book 30 minutes
                  </Button>
                  <p className="mt-5 text-sm text-white/60">
                    Prefer email?{' '}
                    <a
                      href={CONTACT_EMAIL_HREF}
                      className="link-underline text-white/85 hover:text-white"
                    >
                      {CONTACT_EMAIL}
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
