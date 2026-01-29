import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';
import { Sparkles } from '@/components/Sparkles';

const frontmatter = {
  title: 'Website Design & Development',
  description:
    'Beautiful, responsive websites that convert visitors into customers and represent your brand perfectly.',
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function WebDesignPage() {
  return (
    <>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.description}
        backgroundImageSrc="/images/matt-howard-R_bPhkgALY4-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  What this includes
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  A site that feels expensive—because it is.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="fade-in-up text-muted leading-relaxed">
                  We design and develop modern, performance-first websites with editorial structure
                  and performance-aware motion. The goal is clarity, confidence, and
                  conversion—without the salesy vibe.
                </p>
                <ul className="fade-in-up text-muted mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Custom UI/UX and component system',
                    'Responsive build + accessibility',
                    'Core Web Vitals & performance tuning',
                    'SEO foundations + analytics instrumentation',
                  ].map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="fade-in-up mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/pricing"
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    View packages
                  </Link>
                  <Link
                    href="/services"
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    Explore services
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: 'Editorial layout',
                  d: 'A system of spacing, type, and hierarchy that guides attention without shouting.',
                },
                {
                  t: 'Performance-led motion',
                  d: 'Scroll reveals, micro-interactions, and parallax—built to feel premium, not heavy.',
                },
                {
                  t: 'Conversion clarity',
                  d: 'Clean CTAs, frictionless contact flows, and a structure designed for confident decisions.',
                },
              ].map((c, idx) => (
                <div
                  key={c.t}
                  className={[
                    'fade-in-scale',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7',
                  ].join(' ')}
                >
                  <h3 className="text-ink text-xl font-semibold">{c.t}</h3>
                  <p className="text-muted mt-3 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface relative overflow-hidden border-y">
        <BackgroundOrbs className="opacity-80" />
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Selected work
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Designs that read clean—and convert quietly.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="fade-in-up text-muted leading-relaxed">
                  A few snapshots from builds and redesigns. The common thread is discipline:
                  typography, spacing, performance, and motion that supports the story.
                </p>
              </div>
            </div>

            <PortfolioGallery
              className="mt-12"
              items={[
                {
                  src: '/images/Website Portfolio (1)/1031.png',
                  alt: '1031 Capital Solutions website',
                },
                { src: '/images/Website Portfolio (1)/LUX.png', alt: 'LUX website' },
                {
                  src: '/images/Website Portfolio (1)/Social Affair.png',
                  alt: 'The Social Affair website',
                },
                {
                  src: '/images/Website Portfolio (1)/1031 About.png',
                  alt: '1031 Capital Solutions about page',
                },
                {
                  src: '/images/Website Portfolio (1)/1031 (3).png',
                  alt: '1031 Capital Solutions section',
                },
              ]}
            />

            <p className="fade-in-up text-muted mt-10 text-sm">
              Want a similar approach for your brand?{' '}
              <Link href="/contact" className="link-underline text-ink/80 hover:text-ink">
                Send a message
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <div className="relative overflow-hidden">
          <BackgroundOrbs variant="dark" className="opacity-90" />
          <div className="absolute inset-0 opacity-60">
            <Sparkles color="rgba(213, 163, 83, 0.85)" />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Let’s build your next home on the web.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll align on scope and outcomes, then design a system that feels distinctive and
                  converts with restraint.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href="mailto:contact@seaforthstrategies.com"
                  variant="accent"
                  className="w-full rounded-full py-4"
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
