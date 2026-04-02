import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Sparkles } from '@/components/Sparkles';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';
import { TechStackLogos } from '@/components/visual/TechStackLogos';
import { SERVICE_PACKAGES } from '@/data/packages';
import { PORTFOLIO_GALLERY_ITEMS } from '@/lib/portfolio';
import { CONTACT_EMAIL_HREF, PORTFOLIO_URL, RESUME_REPO_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Development (custom code, GitHub, Vercel) and design on Squarespace—SeaForth Strategies delivers founder-led work with clear structure and craft.',
};

/** Two primary routes; see packages for pricing entry points. */
const skillAreas = [
  {
    title: 'Development',
    description:
      'Custom front ends—usually Next.js—with GitHub, Vercel deploys, responsive UI, accessibility, performance, and launch discipline.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Semantic HTML', 'Git/GitHub', 'Vercel'],
  },
  {
    title: 'Design',
    description:
      'Squarespace builds—information architecture, visual design, template work, styling, and content structure so the site is easy to maintain (typically a lower entry price than custom development).',
    tags: ['Squarespace', 'IA & sitemaps', 'Layouts', 'Custom CSS', 'Launch QA'],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Two services: development (custom code, GitHub, Vercel) and design on Squarespace—usually the more affordable path. Founder-led execution with room to tailor scope."
        backgroundImageSrc="/images/silas-baisch-K785Da4A_JA-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Capabilities
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                What SeaForth actually does.
              </h2>
              <p className="fade-in-up text-muted mt-6 leading-relaxed">
                Development when you need a bespoke, code-backed site; design on Squarespace when
                you want a polished platform build at a lower starting investment. Packages spell
                out how we start.
              </p>
              <div className="fade-in-up mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/services/web-design"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Development detail
                </Link>
                <Link
                  href="/pricing"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Packages
                </Link>
                <Link
                  href="/portfolio"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Portfolio gallery
                </Link>
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  abigaillehr.com
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {skillAreas.map((area, idx) => (
                <div
                  key={area.title}
                  className={[
                    'fade-in-up',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline bg-surface shadow-soft rounded-[var(--radius-lg)] border p-7',
                  ].join(' ')}
                >
                  <h3 className="font-display text-ink text-2xl tracking-tight md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="text-muted mt-4 leading-relaxed">{area.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((t) => (
                      <span
                        key={t}
                        className="hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-3 py-1 text-[12px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="hairline bg-surface shadow-soft fade-in-up mt-12 rounded-[var(--radius-lg)] border p-7 md:p-10">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Expertise & tools
              </p>
              <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
                Tooling aligned with the full skills résumé—expanded categories live on
                abigaillehr.com.
              </p>
              <div className="mt-8">
                <TechStackLogos />
              </div>
            </div>

            <p className="fade-in-up text-muted mt-10 max-w-2xl text-sm leading-relaxed">
              Browse the full{' '}
              <Link href="/portfolio" className="link-underline text-ink/80 hover:text-ink">
                work gallery
              </Link>{' '}
              (same assets as the GitHub résumé repo), or{' '}
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink/80 hover:text-ink"
              >
                abigaillehr.com
              </a>{' '}
              for the personal site. Source:{' '}
              <a
                href={RESUME_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink/80 hover:text-ink"
              >
                Abigail-Lehr-Resume
              </a>
              .
            </p>

            <div className="mt-16 md:mt-20">
              <div className="grid gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-8">
                  <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                    Packages
                  </p>
                  <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                    Two ways to start.
                  </h2>
                  <p className="fade-in-up text-muted mt-6 max-w-2xl leading-relaxed">
                    Development or Squarespace design—final scope is confirmed before kickoff.
                  </p>
                </div>
                <div className="md:col-span-4">
                  <Button
                    href={CONTACT_EMAIL_HREF}
                    className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                  >
                    Start a project
                  </Button>
                </div>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {SERVICE_PACKAGES.map((p, idx) => (
                  <div
                    key={`${p.name}-${idx}`}
                    className={[
                      'fade-in-up',
                      `stagger-${Math.min(idx + 1, 6)}`,
                      'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border',
                      'p-7',
                      p.featured ? 'ring-1 ring-[color:var(--brand-teal)]' : '',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                          {p.badge ?? 'Package'}
                        </p>
                        <h3 className="font-display text-ink mt-2 text-3xl">{p.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                          {p.price.includes('/mo') ? 'Monthly' : 'Starting at'}
                        </p>
                        <p className="text-ink mt-2 text-3xl font-semibold">{p.price}</p>
                      </div>
                    </div>

                    <p className="text-muted mt-5 leading-relaxed">{p.hook}</p>

                    <div className="hairline mt-6 border-t pt-6">
                      <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                        Your account
                      </p>
                      <p className="text-muted mt-3 leading-relaxed">{p.clientAccount}</p>
                    </div>

                    <div className="hairline mt-6 border-t pt-6">
                      <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                        Includes
                      </p>
                      <ul className="text-muted mt-4 space-y-3">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex gap-3">
                            <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hairline mt-6 border-t pt-6">
                      <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                        Ideal for
                      </p>
                      <p className="text-muted mt-3 leading-relaxed">{p.idealFor}</p>
                    </div>

                    <div className="mt-8">
                      <Button
                        href="/contact"
                        className={[
                          'w-full rounded-full py-4',
                          p.featured
                            ? 'bg-[color:var(--brand-teal)] text-white hover:bg-[color:var(--brand-teal-dark)]'
                            : 'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)]',
                        ].join(' ')}
                      >
                        Start a project
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <p className="fade-in-up text-muted mt-10 text-sm">
                Want the full breakdown?{' '}
                <Link href="/pricing" className="link-underline text-ink/80 hover:text-ink">
                  View the pricing page
                </Link>
                .
              </p>
            </div>

            <div className="mt-16 md:mt-20">
              <div className="grid gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                    Proof of craft
                  </p>
                  <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                    Work that feels editorial.
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="fade-in-up text-muted leading-relaxed">
                    Strong typography. Confident spacing. Motion that supports the story. Here are a
                    few snapshots from recent builds.
                  </p>
                </div>
              </div>

              <PortfolioGallery className="mt-12" items={PORTFOLIO_GALLERY_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  The SeaForth standard
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Craft-first. Launch-ready.
                </h2>
                <p className="fade-in-up text-muted mt-6 max-w-2xl leading-relaxed">
                  You get founder-led execution—whether that is custom development or a Squarespace
                  design—and launch discipline without the generic template look.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href={CONTACT_EMAIL_HREF}
                  className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                >
                  Start a project
                </Button>
              </div>
            </div>
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
                  Pick a starting point.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll align on scope, pages, and stack—then tailor the engagement to your goals,
                  not a one-size-fits-all playbook.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button href="/pricing" variant="accent" className="w-full rounded-full py-4">
                  View pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
