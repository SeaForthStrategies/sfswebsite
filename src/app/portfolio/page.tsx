import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { WorkPortfolioGrid } from '@/components/visual/WorkPortfolioGrid';
import { TESTIMONIALS } from '@/data/testimonials';
import portfolioManifest from '@/data/portfolio-manifest.json';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'SeaForth Strategies portfolio—websites, graphics, photography, and brand work from recent projects.',
};

export default function PortfolioPage() {
  const items = portfolioManifest.items;

  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Websites, graphics, photography, and logos from recent client and SeaForth-led work."
        backgroundImageSrc="/images/silas-baisch-K785Da4A_JA-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <WorkPortfolioGrid items={items} folders={portfolioManifest.folders} />
          </div>
        </div>
      </section>

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Testimonials
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl">
                What people say
              </h2>
            </div>

            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, idx) => (
                <blockquote
                  key={`${t.author}-${idx}`}
                  className={[
                    'fade-in-up',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline shadow-soft flex h-full min-h-0 flex-col gap-5 rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/80 p-7',
                  ].join(' ')}
                >
                  <p className="text-ink min-h-0 flex-1 text-base leading-relaxed italic">
                    “{t.quote}”
                  </p>
                  <footer className="text-muted shrink-0 text-sm">
                    <cite className="text-ink font-semibold not-italic">{t.author}</cite>
                    <span className="text-ink/40"> · </span>
                    {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>

            <p className="fade-in-up text-muted mt-12 text-center text-sm leading-relaxed">
              When you are ready to talk through goals, scope, and timing, start from the{' '}
              <Link href="/contact" className="link-underline text-ink/80 hover:text-ink">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
