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
import { CONTACT_EMAIL_HREF, mailtoPackageInterest } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'SeaForth Strategies—custom website development, Squarespace design, starting packages with deliverables, stack expertise, and launch-ready delivery.',
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
                <a
                  href="#packages"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Packages
                </a>
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

            <div
              id="packages"
              className="fade-in-up mt-16 scroll-mt-[calc(var(--header-bar)+1rem)] md:mt-20"
            >
              <div className="max-w-2xl">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  Compare
                </p>
                <h2 className="font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
                  Development or design.
                </h2>
                <p className="text-muted mt-5 leading-relaxed">
                  Starting prices, hosting and account rules, and deliverables for each tier.
                  Figures assume a typical first phase. After we talk, the estimate reflects your
                  pages, integrations, and timeline—nothing moves to contract until you have it in
                  writing.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                {SERVICE_PACKAGES.map((p, idx) => (
                  <div
                    key={p.name}
                    className={[
                      'fade-in-up',
                      `stagger-${Math.min(idx + 1, 6)}`,
                      'hairline bg-surface shadow-soft flex h-full flex-col rounded-[var(--radius-lg)] border',
                      p.featured ? 'ring-1 ring-[color:var(--brand-teal)]' : '',
                    ].join(' ')}
                  >
                    <div className="flex h-full flex-col p-7 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                            {p.badge ?? 'Package'}
                          </p>
                          <h3 className="font-display text-ink mt-2 text-3xl tracking-tight break-words">
                            {p.name}
                          </h3>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                            Starting at
                          </p>
                          <p className="text-ink mt-2 text-3xl font-semibold tabular-nums">
                            {p.price}
                          </p>
                        </div>
                      </div>

                      <p className="text-ink mt-5 leading-snug font-medium">{p.hook}</p>
                      <p className="text-muted mt-3 text-sm leading-relaxed">{p.audience}</p>

                      <div className="hairline mt-6 border-t pt-6">
                        <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                          Your account
                        </p>
                        <p className="text-muted mt-3 text-sm leading-relaxed">{p.clientAccount}</p>
                      </div>

                      <div className="hairline mt-8 border-t pt-8">
                        <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                          Deliverables
                        </p>
                        <ul className="text-muted mt-4 space-y-3">
                          {p.deliverables.map((d) => (
                            <li key={d} className="flex min-w-0 gap-3">
                              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                              <span className="min-w-0 break-words">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-10">
                        <Button
                          href={mailtoPackageInterest(p.name)}
                          className={[
                            'w-full rounded-full py-4',
                            p.featured
                              ? 'bg-[color:var(--brand-teal)] text-white hover:bg-[color:var(--brand-teal-dark)]'
                              : 'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)]',
                          ].join(' ')}
                        >
                          Discuss {p.name.toLowerCase()}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hairline bg-surface shadow-soft mt-14 rounded-[var(--radius-lg)] border p-7 md:p-10">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  After launch
                </p>
                <h2 className="font-display text-ink mt-4 text-2xl tracking-tight md:text-3xl">
                  Ongoing support
                </h2>
                <p className="text-muted mt-4 max-w-2xl leading-relaxed">
                  Retainers for updates, performance checks, and iteration are available—scoped
                  monthly to how often you ship.
                </p>
                <Button
                  href={CONTACT_EMAIL_HREF}
                  className="mt-8 w-full rounded-full bg-[color:var(--ink)] py-4 text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)] sm:w-auto"
                >
                  Ask about retainers
                </Button>
              </div>

              <p className="fade-in-up text-muted mt-10 text-sm">
                Not sure which path fits?{' '}
                <Link href="/contact" className="link-underline text-ink/80 hover:text-ink">
                  Send a message
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

      <section
        id="faq"
        className="hairline bg-surface scroll-mt-[calc(var(--header-bar)+1rem)] border-y"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-3xl">
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                FAQ
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Short answers.
              </h2>
            </div>

            <div className="mt-10 grid gap-3 md:max-w-4xl">
              <FaqItem
                q="Is the design custom?"
                a="Yes. Layout and UI are bespoke; packages define where we start, not a template skin."
              />
              <FaqItem
                q="Do you write copy?"
                a="I can guide structure and tighten messaging. Full copywriting is available when scoped."
              />
              <FaqItem
                q="What do you build in?"
                a="Development is usually Next.js with GitHub and deploys on Vercel. Design projects are built on Squarespace—structured, styled, and launched there, which keeps cost lower than a full custom stack."
              />
              <FaqItem
                q="Who pays for hosting and Squarespace?"
                a="For design on Squarespace, you create your own account and pay Squarespace for your plan. For custom development, hosting the site includes a $30 fee paid to SeaForth Strategies (separate from the project quote)."
              />
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

      <section className="relative overflow-hidden bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <BackgroundOrbs
          variant="dark"
          className="pointer-events-none absolute inset-0 opacity-95"
        />
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <Sparkles color="rgba(213, 163, 83, 0.75)" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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
                  Send goals and constraints—I will suggest a stack and tier. Starting prices and
                  line items are{' '}
                  <a href="#packages" className="link-underline text-white/90 hover:text-white">
                    above
                  </a>
                  ; quick questions live in the{' '}
                  <a href="#faq" className="link-underline text-white/90 hover:text-white">
                    FAQ
                  </a>
                  .
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
                <a
                  href="#packages"
                  className="text-center text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white"
                >
                  Jump to packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="hairline group rounded-[var(--radius)] border bg-[color:var(--bg)] transition-colors hover:border-[color:color-mix(in_srgb,var(--brand-teal),transparent_55%)]">
      <details className="w-full">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 focus:outline-none">
          <span className="text-ink min-w-0 text-lg font-semibold break-words transition-colors group-hover:text-[color:var(--brand-teal)]">
            {q}
          </span>
          <span className="font-display shrink-0 text-2xl text-[color:var(--brand-gold)] select-none">
            ＋
          </span>
        </summary>
        <div className="text-muted px-6 pt-0 pb-6 leading-relaxed">{a}</div>
      </details>
    </div>
  );
}
