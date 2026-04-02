import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';
import { CONTACT_EMAIL_HREF } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'Two website package paths—Development and Platform design—led by SeaForth Strategies founder Abigail Lehr.',
};

const packages = [
  {
    name: 'Development',
    price: '$3,500',
    hook: 'Design-ready work, built to ship.',
    audience: 'You have approved UI—or a tight creative direction—and need a disciplined build.',
    deliverables: [
      'Responsive implementation and component structure',
      'Performance-minded assets and layout',
      'Accessibility and semantic markup',
      'Staging, launch, and handoff',
    ],
    subject: 'Development package',
    featured: false,
  },
  {
    name: 'Platform design',
    price: '$6,500',
    hook: 'Full-site design and build.',
    audience:
      'You want IA, visual design, and code in one studio—especially for product-led sites.',
    deliverables: [
      'Site map and key page design',
      'UI system and responsive layouts',
      'Front-end build in a modern stack',
      'Launch support and refinement',
    ],
    subject: 'Platform design package',
    featured: true,
  },
] as const;

function mailtoWithSubject(subject: string) {
  return `${CONTACT_EMAIL_HREF}?subject=${encodeURIComponent(`SeaForth — ${subject}`)}`;
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Packages"
        subtitle="Two entry points. Everything is scoped to your pages, stack, and timeline after a short alignment call."
        backgroundImageSrc="/images/kelsey-knight-CrRr3y1lhl8-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Compare
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Development or platform design.
              </h2>
              <p className="fade-in-up text-muted mt-5 leading-relaxed">
                Prices are starting points; final scope is confirmed in writing before kickoff.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              {packages.map((p, idx) => (
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
                          {p.featured ? 'Full-service' : 'Package'}
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
                        href={mailtoWithSubject(p.subject)}
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
        </div>
      </section>

      <section className="hairline bg-surface border-y">
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
                a="Usually Next.js with a component-first workflow—fast, maintainable, and ready for real traffic."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <BackgroundOrbs variant="dark" className="opacity-95" />
        <div className="absolute inset-0 opacity-45">
          <Sparkles color="rgba(213, 163, 83, 0.65)" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl lg:text-5xl">
                  Pick a path—or describe the build.
                </h2>
                <p className="fade-in-up mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                  I’ll reply with a few clarifying questions and a suggested scope.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href={CONTACT_EMAIL_HREF}
                  variant="accent"
                  className="w-full rounded-full px-7 py-4"
                >
                  Start a project
                </Button>
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
