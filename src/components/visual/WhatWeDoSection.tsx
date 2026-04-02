import Image from 'next/image';
import Link from 'next/link';

import { PORTFOLIO_URL, publicAssetPath } from '@/lib/site';

type Service = {
  number: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  image: string;
  icon: 'layout' | 'mark' | 'spark' | 'chart';
};

function ServiceIcon({ name }: { name: Service['icon'] }) {
  const common = 'h-5 w-5 text-[color:var(--brand-gold)]';
  switch (name) {
    case 'layout':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4.5 6.5h15v11h-15v-11Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M4.5 10.5h15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8.5 10.5v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'mark':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s7-4.4 7-11V6.7L12 3 5 6.7V10c0 6.6 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12.2 11 14l3.8-4.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'spark':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l1.3 6.1L20 10l-6.7 1.9L12 18l-1.3-6.1L4 10l6.7-1.9L12 2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M5 19l.7 3L8 21l-.7-3L5 19Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19V5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M5 19h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path
            d="M8 14l3-3 3 3 4-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

const services: Service[] = [
  {
    number: '01',
    title: 'Website design',
    summary:
      'IA, page design, and UI—clear hierarchy and layouts built for conversion, not template filler.',
    tags: ['UI/UX', 'Figma', 'Responsive'],
    href: '/services',
    image: '/images/matt-howard-R_bPhkgALY4-unsplash.jpg',
    icon: 'layout',
  },
  {
    number: '02',
    title: 'Development',
    summary:
      'Next.js front ends, Tailwind, accessibility, performance, and launch—clean Git workflows and handoff.',
    tags: ['Next.js', 'Tailwind', 'Launch'],
    href: '/services/web-design',
    image: '/images/kellen-riggin-PifBJiBIHgw-unsplash.jpg',
    icon: 'spark',
  },
  {
    number: '03',
    title: 'Launch & polish',
    summary:
      'Staging, QA, on-page SEO basics, and refinement—so the site is ready when you point traffic at it.',
    tags: ['QA', 'Technical SEO', 'Handoff'],
    href: '/pricing',
    image: '/images/ivan-bandura-5cwigXmGWTo-unsplash.jpg',
    icon: 'chart',
  },
];

export function WhatWeDoSection() {
  return (
    <section className="hairline bg-surface border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Services
              </p>
              <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Website work, end to end.
              </h2>
              <p className="fade-in-up stagger-2 text-muted mt-6 leading-relaxed">
                Design, build, and launch—what SeaForth sells. Non-web services stay out of scope.
              </p>

              <div className="fade-in-up stagger-3 mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  All services
                </Link>
                <Link
                  href="/pricing"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  View packages
                </Link>
                <Link
                  href="/contact"
                  className="hover-wiggle hairline text-ink/75 rounded-full border bg-[color:var(--bg)]/60 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase"
                >
                  Start a project
                </Link>
              </div>

              <div className="fade-in-up stagger-4 hairline shadow-soft mt-10 rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/55 p-6">
                <p className="text-ink/55 text-[12px] font-semibold tracking-[0.16em] uppercase">
                  Typical deliverables
                </p>
                <ul className="text-muted mt-4 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-teal)]" />
                    <span>UX + UI for key pages (home, services, pricing, contact).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                    <span>Responsive build + accessibility + on-page SEO basics.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-teal)]" />
                    <span>Launch checklist + QA + a clear next-steps plan after go-live.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="tech-panel hairline shadow-premium relative overflow-hidden rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/40">
                <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.65]">
                  <div className="absolute inset-0 bg-[radial-gradient(850px_320px_at_10%_0%,rgba(42,124,132,0.20),transparent_60%),radial-gradient(850px_320px_at_90%_100%,rgba(213,163,83,0.16),transparent_60%)]" />
                </div>

                <div className="relative z-10 grid gap-4 p-6 md:p-8">
                  {services.map((s, idx) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className={[
                        'hairline shadow-soft group relative overflow-hidden rounded-[22px] border bg-[color:var(--bg)]/60 p-6',
                        'hover-lift',
                        'focus-visible:ring-2 focus-visible:ring-[color:var(--brand-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] focus-visible:outline-none',
                        'fade-in-up',
                        `stagger-${Math.min(idx + 1, 6)}`,
                      ].join(' ')}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[700ms] group-hover:opacity-100">
                        <Image
                          src={publicAssetPath(s.image)}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 52vw, 92vw"
                        />
                        <div className="absolute inset-0 bg-[color:var(--bg)]/70" />
                      </div>

                      <div className="relative flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <span className="hairline grid h-11 w-11 shrink-0 place-items-center rounded-full border bg-[color:var(--bg)]/70">
                            <ServiceIcon name={s.icon} />
                          </span>
                          <div>
                            <p className="text-ink/55 text-[12px] font-semibold tracking-[0.16em] uppercase">
                              {s.number}
                            </p>
                            <h3 className="text-ink mt-2 text-xl font-semibold">{s.title}</h3>
                            <p className="text-muted mt-2 text-sm leading-relaxed">{s.summary}</p>
                          </div>
                        </div>

                        <span className="hairline text-ink/70 mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-[color:var(--bg)]/70 transition-transform duration-[400ms] [transition-timing-function:var(--ease-out)] group-hover:translate-x-1">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M9 6l6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="relative mt-5 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="hairline text-ink/70 rounded-full border bg-[color:var(--bg)]/65 px-3 py-1 text-[12px] font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <p className="fade-in-up text-muted mt-8 text-sm">
                Want the full career picture (beyond web)?{' '}
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  abigaillehr.com
                </a>
                .
              </p>

              <p className="fade-in-up text-muted mt-3 text-sm">
                Prefer work samples?{' '}
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  View the portfolio
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
