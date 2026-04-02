import Link from 'next/link';

import { SITE } from '@/lib/site';

export function HomeFounderSection() {
  return (
    <section className="hairline bg-surface border-y" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Founder</p>
            <h2 className="fade-in-up stagger-1 font-display text-ink mt-4 text-2xl leading-[1.06] tracking-[-0.02em] sm:mt-5 sm:text-3xl md:mt-6 md:text-4xl">
              Abigail Lehr
            </h2>
            <p className="fade-in-up stagger-2 text-muted mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg md:text-xl">
              I run SeaForth as a founder-led studio—custom development and Squarespace, for
              projects at any scope, in one relationship. Client launches live in the{' '}
              <Link href="/portfolio" className="link-underline text-ink/80 hover:text-ink">
                portfolio
              </Link>
              ; a fuller design-and-career arc lives on{' '}
              <a
                href={SITE.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink/80 hover:text-ink"
              >
                my personal site
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
