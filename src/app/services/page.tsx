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
import { CONTACT_EMAIL_HREF } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'SeaForth Strategies—custom website development, Squarespace design, stack expertise, and launch-ready delivery for teams who care how their site feels and performs.',
};

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
        subtitle="Founder-led development and Squarespace design—scope tailored to your goals, your audience, and how you plan to grow."
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
                Custom front ends and Squarespace builds share the same standard: clear structure,
                refined UI, accessible markup, and launches that hold up after go-live.
              </p>
              <div className="fade-in-up mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/services/web-design"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Custom development
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
                  Portfolio
                </Link>
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
                Day-to-day tooling for production sites—frameworks, hosting, collaboration, and
                quality checks that keep releases predictable.
              </p>
              <div className="mt-8">
                <TechStackLogos />
              </div>
            </div>

            <p className="fade-in-up text-muted mt-10 max-w-2xl text-sm leading-relaxed">
              For live examples of layout, brand, and build quality, see the{' '}
              <Link href="/portfolio" className="link-underline text-ink/80 hover:text-ink">
                portfolio
              </Link>
              .
            </p>

            <div className="fade-in-up mt-16 md:mt-20">
              <div className="hairline bg-surface shadow-soft rounded-[var(--radius-lg)] border p-7 md:p-10">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  Packages
                </p>
                <h2 className="font-display text-ink mt-4 text-3xl leading-[1.05] tracking-[-0.02em] md:mt-5 md:text-4xl">
                  Where each engagement begins
                </h2>
                <p className="text-muted mt-4 max-w-2xl leading-relaxed md:mt-5">
                  Engagements are structured as Development (custom code, Git-based workflow) or
                  Design (Squarespace). This is the snapshot—starting price and positioning only.
                  Deliverables, hosting responsibilities, and fit notes are itemized end-to-end on{' '}
                  <Link href="/pricing" className="link-underline text-ink/80 hover:text-ink">
                    Packages
                  </Link>
                  .
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {SERVICE_PACKAGES.map((p, idx) => (
                    <div
                      key={p.name}
                      className={[
                        'hairline flex flex-col rounded-[var(--radius)] border bg-[color:var(--bg)]/70 p-6',
                        p.featured ? 'ring-1 ring-[color:var(--brand-teal)]/50' : '',
                        'fade-in-up',
                        `stagger-${Math.min(idx + 1, 6)}`,
                      ].join(' ')}
                    >
                      <p className="text-ink/60 text-[11px] font-semibold tracking-[0.16em] uppercase">
                        {p.badge}
                      </p>
                      <h3 className="font-display text-ink mt-2 text-xl tracking-tight md:text-2xl">
                        {p.name}
                      </h3>
                      <p className="text-ink mt-3 text-2xl font-semibold tabular-nums md:text-3xl">
                        {p.price}
                      </p>
                      <p className="text-muted mt-3 text-sm leading-relaxed">{p.hook}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button
                    href="/pricing"
                    className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)] sm:w-auto"
                  >
                    Full comparison
                  </Button>
                  <Button
                    href={CONTACT_EMAIL_HREF}
                    variant="secondary"
                    className="w-full rounded-full sm:w-auto"
                  >
                    Email first
                  </Button>
                </div>
              </div>
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
                  Typography, spacing, performance, and motion stay intentional—without the
                  interchangeable template look—no matter which stack we ship on.
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
                  Prefer to talk before you read tiers?
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  Send goals and constraints—I will suggest a stack and tier. When you want every
                  line item, the{' '}
                  <Link href="/pricing" className="link-underline text-white/90 hover:text-white">
                    Packages
                  </Link>{' '}
                  page holds the full write-up.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-4">
                <Button
                  href={CONTACT_EMAIL_HREF}
                  variant="accent"
                  className="w-full rounded-full py-4"
                >
                  Email SeaForth
                </Button>
                <Link
                  href="/pricing"
                  className="text-center text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white"
                >
                  Open Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
