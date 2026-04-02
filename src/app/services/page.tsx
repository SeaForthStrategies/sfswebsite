import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Sparkles } from '@/components/Sparkles';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';
import { PORTFOLIO_GALLERY_ITEMS } from '@/lib/portfolio';
import { CONTACT_EMAIL_HREF, PORTFOLIO_URL, RESUME_REPO_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website design, development, and launch—SeaForth Strategies focuses on web work only, led by founder Abigail Lehr.',
};

const packagesAtAGlance = [
  {
    name: 'Development',
    price: '$3,500',
    subtitle: 'Design-ready work, built to ship.',
    deliverables: [
      'Responsive implementation and components',
      'Performance-minded layout and assets',
      'Accessibility and semantic markup',
      'Staging, launch, and handoff',
    ],
    idealFor: 'You have approved UI or a clear creative direction and need production execution.',
    featured: false,
  },
  {
    name: 'Platform design',
    price: '$6,500',
    subtitle: 'Full-site design and build.',
    deliverables: [
      'Site map and key page design',
      'UI system and responsive layouts',
      'Front-end build in a modern stack',
      'Launch support and refinement',
    ],
    idealFor: 'You want IA, visual design, and code from one studio—especially product-led sites.',
    featured: true,
  },
] as const;

/** Website-only scope—aligned with what SeaForth sells, not the full personal résumé. */
const skillAreas = [
  {
    title: 'Website design',
    description:
      'Information architecture, page design, and UI—clear hierarchy, confident type, and layouts built to convert.',
    tags: ['IA & sitemaps', 'UI/UX', 'Figma', 'Responsive design', 'Design systems'],
  },
  {
    title: 'Development',
    description:
      'Production front ends: components, responsive behavior, accessibility, and performance—so the design survives real traffic.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Semantic HTML', 'Git/GitHub', 'Vercel'],
  },
  {
    title: 'Launch & polish',
    description:
      'Staging, QA, on-page SEO basics, and handoff—plus a short refinement window so the site is ready to ship.',
    tags: ['Technical SEO', 'Accessibility', 'Launch QA', 'Core Web Vitals'],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Website services"
        subtitle="SeaForth only takes website projects—design through build and launch. No separate marketing, events, or non-web retainers here."
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
                Three buckets—design, development, and launch—scoped per project. Packages spell out
                how we start.
              </p>
              <div className="fade-in-up mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/services/web-design"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Web design detail
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

            <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                    Development when design is set; platform design when you need the full arc.
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
                {packagesAtAGlance.map((p, idx) => (
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
                          {p.featured ? 'Full-service' : 'Package'}
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

                    <p className="text-muted mt-5 leading-relaxed">{p.subtitle}</p>

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
                  Website-first. Detail-obsessed.
                </h2>
                <p className="fade-in-up text-muted mt-6 max-w-2xl leading-relaxed">
                  You get founder-led execution, a custom front end, and launch discipline—without
                  the generic template look.
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
                  Pick a website package.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll align on pages and stack, then tailor the build to your site—not a generic
                  marketing bundle.
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
