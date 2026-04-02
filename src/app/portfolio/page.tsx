import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { WorkPortfolioGrid } from '@/components/visual/WorkPortfolioGrid';
import { TESTIMONIALS } from '@/data/testimonials';
import portfolioManifest from '@/data/portfolio-manifest.json';
import { RESUME_REPO_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'SeaForth Strategies portfolio—websites, graphics, photography, and client work from the open-source manifest.',
};

export default function PortfolioPage() {
  const items = portfolioManifest.items;

  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Websites, graphics, photos, and logos—synced from the open-source portfolio repo. For my personal site, use the link in the site footer."
        backgroundImageSrc="/images/silas-baisch-K785Da4A_JA-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="fade-in-up text-muted leading-relaxed">
                This grid is driven by{' '}
                <code className="text-ink/80 bg-surface rounded px-1.5 py-0.5 text-[13px]">
                  public/work/manifest.json
                </code>{' '}
                (from{' '}
                <a
                  href={RESUME_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  Abigail-Lehr-Resume on GitHub
                </a>
                ).
              </p>
            </div>

            <div className="mt-14">
              <WorkPortfolioGrid items={items} folders={portfolioManifest.folders} />
            </div>
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
              <p className="fade-in-up text-muted mt-4 text-sm leading-relaxed">
                Pulled from the same résumé project—real feedback, same wording.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, idx) => (
                <blockquote
                  key={`${t.author}-${idx}`}
                  className={[
                    'fade-in-up',
                    `stagger-${Math.min(idx + 1, 6)}`,
                    'hairline shadow-soft rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/80 p-7',
                  ].join(' ')}
                >
                  <p className="text-ink text-base leading-relaxed italic">“{t.quote}”</p>
                  <footer className="text-muted mt-5 text-sm">
                    <cite className="text-ink font-semibold not-italic">{t.author}</cite>
                    <span className="text-ink/40"> · </span>
                    {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>

            <p className="fade-in-up text-muted mt-12 text-center text-sm">
              Ready to talk about your site?{' '}
              <Link href="/contact" className="link-underline text-ink/80 hover:text-ink">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
