import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { Parallax } from '@/components/motion/Parallax';
import { Button } from '@/components/ui/Button';
import { Sparkles } from '@/components/Sparkles';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'SeaForth Strategies services: Website Design & Development, Branding, Marketing Strategy, and Analytics & Performance.',
};

const packagesAtAGlance = [
  {
    name: 'Strategy Sprint',
    price: '$1,500',
    subtitle: 'Clarity-first positioning, offers, and a channel plan you can actually execute.',
    deliverables: [
      '90-minute kickoff + intake review',
      'Positioning + offer refinement',
      'Channel priorities + content direction',
      'Next-steps roadmap (2–4 weeks)',
    ],
    idealFor: 'Founders who need direction before investing in design, ads, or a full rebuild.',
    featured: false,
  },
  {
    name: 'Simple Site (Squarespace)',
    price: '$1,500',
    subtitle:
      'A clean, simple design on a prepaid platform (ex: Squarespace). Price may vary with scope.',
    deliverables: [
      'Template selection + brand styling',
      'Basic page setup (typically 3–5 pages)',
      'Mobile-friendly layout adjustments',
      'Launch checklist + handoff',
    ],
    idealFor: 'Early-stage businesses who want a polished presence without a custom build.',
    featured: false,
  },
  {
    name: 'Foundation Site',
    price: '$3,500',
    subtitle: 'A premium starting point—fast, clear, and conversion-aware.',
    deliverables: [
      'One-page or compact multi-section site',
      'Custom UI/UX direction + responsive build',
      'SEO + performance baseline',
      'Conversion-focused contact/booking flow',
    ],
    idealFor: 'New offers and service businesses who need credibility—now.',
    featured: false,
  },
  {
    name: 'Signature Site',
    price: '$6,500',
    subtitle: 'Authority and depth with an editorial layout system and measurable performance.',
    deliverables: [
      'Up to 5 core pages',
      'Modular component library (scalable)',
      'Analytics instrumentation + KPI setup',
      'Launch support + refinement window',
    ],
    idealFor: 'Established businesses ready to look premium and scale with confidence.',
    featured: true,
  },
  {
    name: 'Brand Refresh',
    price: '$2,250',
    subtitle: 'Tighten the system: typography, color, layout rhythm, and clarity.',
    deliverables: [
      'Light audit + direction board',
      'Updated typography + color system',
      'Logo refinement (if needed)',
      'Core asset kit (social + web)',
    ],
    idealFor: 'Brands that feel “almost there” but inconsistent across touchpoints.',
    featured: false,
  },
  {
    name: 'Full Brand System',
    price: '$4,500',
    subtitle: 'A cohesive identity built to look expensive across every channel.',
    deliverables: [
      'Identity direction + logo suite',
      'Typography + layout system',
      'Brand guidelines (usable, not fluffy)',
      'Asset library (social + web + print basics)',
    ],
    idealFor: 'Rebrands, new ventures, and businesses stepping into a premium market.',
    featured: false,
  },
  {
    name: 'Analytics Setup',
    price: '$1,250',
    subtitle: 'Tracking you can trust—mapped to your funnel, not vanity metrics.',
    deliverables: [
      'Event plan + conversion mapping',
      'Instrumentation + QA',
      'Dashboard + reporting baseline',
      'Optimization priorities (what to fix first)',
    ],
    idealFor: 'Teams with traffic but unclear attribution and inconsistent lead quality.',
    featured: false,
  },
  {
    name: 'Analytics Retainer',
    price: '$600–$1,500/mo',
    subtitle: 'Monthly reporting + insight you can act on (not just dashboards).',
    deliverables: [
      'Dashboard maintenance + KPI tracking',
      'Monthly insights + recommendations',
      'Funnel/lead quality review',
      'Event + attribution QA (as needed)',
    ],
    idealFor: 'Teams who want ongoing clarity on what’s working and what to do next.',
    featured: false,
  },
  {
    name: 'Optimization Retainer',
    price: '$500–$1,000/mo',
    subtitle: 'Keep things fast, secure, and improving without the technical headache.',
    deliverables: [
      'Performance + SEO checks',
      'Security monitoring + backups',
      'Content updates (1–2 hrs/mo)',
      'Monthly recommendations + iteration',
    ],
    idealFor: 'Clients who want their site to stay sharp post-launch.',
    featured: false,
  },
  {
    name: 'Website Updates Retainer',
    price: '$400–$800/mo',
    subtitle: 'Ongoing site edits with a predictable monthly cadence and fast turnaround.',
    deliverables: [
      'Content swaps + layout tweaks',
      'New sections (within monthly hours)',
      'Image + copy updates',
      'Monthly update plan + priority queue',
    ],
    idealFor: 'Teams who need regular updates without starting a new project every time.',
    featured: false,
  },
  {
    name: 'Landing Pages + Updates Retainer',
    price: '$1,200–$2,000/mo',
    subtitle: 'For active offers: new pages, campaign updates, and conversion refinements.',
    deliverables: [
      'New landing pages (scoped within monthly hours)',
      'Offer and campaign page updates',
      'Conversion-focused UI iteration',
      'Monthly review + next-steps roadmap',
    ],
    idealFor: 'Brands running promotions, launches, or multiple offers year-round.',
    featured: false,
  },
] as const;

const services = [
  {
    title: 'Website Design & Development',
    summary:
      'A high-end website should feel inevitable: fast, clear, and quietly persuasive. We design and build modern sites—custom, modular, and scalable.',
    bullets: [
      'Custom UI/UX',
      'Custom development',
      'Performance & accessibility',
      'SEO foundations',
    ],
    image: '/images/matt-howard-R_bPhkgALY4-unsplash.jpg',
    href: '/services/web-design',
  },
  {
    title: 'Branding',
    summary:
      'We create brand systems—not just logos. Typography, tone, and layout rhythm that makes your business feel premium and cohesive across channels.',
    bullets: [
      'Visual identity direction',
      'Typography & layout system',
      'Messaging structure',
      'Brand assets',
    ],
    image: '/images/le-buzz-studio-KiEiI2b9GkU-unsplash.jpg',
    href: '/services/branding',
  },
  {
    title: 'Marketing Strategy',
    summary:
      'Clarity before scale. We build positioning and channel strategy that supports a single narrative—so your marketing feels confident, not noisy.',
    bullets: [
      'Positioning & offers',
      'Content direction',
      'Launch strategy',
      'Conversion priorities',
    ],
    image: '/images/kellen-riggin-PifBJiBIHgw-unsplash.jpg',
    href: '/services/marketing-strategy',
  },
  {
    title: 'Analytics & Performance',
    summary:
      'We translate metrics into decisions. Instrumentation, reporting, and optimization built to guide what you do next—not what looks good on a dashboard.',
    bullets: [
      'Tracking & events',
      'Dashboards & reporting',
      'Performance optimization',
      'Growth insights',
    ],
    image: '/images/ivan-bandura-5cwigXmGWTo-unsplash.jpg',
    href: '/services/analytics',
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services with discipline."
        subtitle="A boutique offering built on two equal pillars: creative execution and analytical authority."
        backgroundImageSrc="/images/silas-baisch-K785Da4A_JA-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                What we do
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Built to look premium. Built to perform.
              </h2>
            </div>

            <div className="mt-12 space-y-14 md:space-y-20">
              {services.map((s, idx) => {
                const reverse = idx % 2 === 1;
                return (
                  <div
                    key={s.title}
                    className={[
                      'grid gap-10 md:grid-cols-12 md:items-center',
                      reverse ? '' : '',
                    ].join(' ')}
                  >
                    <div
                      className={[reverse ? 'md:order-2 md:col-span-6' : 'md:col-span-6'].join(' ')}
                    >
                      <p className="fade-in-up text-ink/50 text-[12px] font-semibold uppercase tracking-[0.16em]">
                        {(idx + 1).toString().padStart(2, '0')}
                      </p>
                      <h3 className="fade-in-up font-display text-ink mt-4 text-3xl md:text-4xl">
                        {s.title}
                      </h3>
                      <p className="fade-in-up text-muted mt-5 leading-relaxed">{s.summary}</p>

                      <ul className="fade-in-up text-muted mt-6 grid gap-3 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="fade-in-up mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link
                          href={s.href}
                          className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                        >
                          View details
                        </Link>
                        <Link
                          href="/pricing"
                          className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                        >
                          View packages
                        </Link>
                        <Link
                          href="/contact"
                          className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                        >
                          Start a project
                        </Link>
                      </div>
                    </div>

                    <div
                      className={[reverse ? 'md:order-1 md:col-span-6' : 'md:col-span-6'].join(' ')}
                    >
                      <Parallax className="blur-in">
                        <div className="bg-surface shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                          <div className="relative aspect-[16/11] w-full">
                            <Image
                              src={s.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(min-width: 768px) 46vw, 92vw"
                            />
                          </div>
                          <div className="hairline border-t px-6 py-5">
                            <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                              Intentional motion · Clean structure
                            </p>
                          </div>
                        </div>
                      </Parallax>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 md:mt-20">
              <div className="grid gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-8">
                  <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                    Packages at a glance
                  </p>
                  <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                    More options—same boutique delivery.
                  </h2>
                  <p className="fade-in-up text-muted mt-6 max-w-2xl leading-relaxed">
                    These are starting points. We’ll recommend the cleanest tier, then tailor scope
                    and deliverables to your goals.
                  </p>
                </div>
                <div className="md:col-span-4">
                  <Button
                    href="mailto:contact@seaforthstrategies.com"
                    className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                  >
                    Email us
                  </Button>
                </div>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                        <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                          {p.featured ? 'Recommended' : 'Package'}
                        </p>
                        <h3 className="font-display text-ink mt-2 text-3xl">{p.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                          {p.price.includes('/mo') ? 'Monthly' : 'Starting at'}
                        </p>
                        <p className="text-ink mt-2 text-3xl font-semibold">{p.price}</p>
                      </div>
                    </div>

                    <p className="text-muted mt-5 leading-relaxed">{p.subtitle}</p>

                    <div className="hairline mt-6 border-t pt-6">
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
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
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
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
                  <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
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

              <PortfolioGallery
                className="mt-12"
                items={[
                  {
                    src: '/images/Website Portfolio (1)/1031 (2).png',
                    alt: '1031 Capital Solutions website',
                  },
                  {
                    src: '/images/Website Portfolio (1)/1031 (4).png',
                    alt: '1031 Capital Solutions section',
                  },
                  { src: '/images/Website Portfolio (1)/LUX.png', alt: 'LUX website' },
                  {
                    src: '/images/Website Portfolio (1)/Social Affair.png',
                    alt: 'The Social Affair website',
                  },
                  { src: '/images/Website Portfolio (1)/1031 About.png', alt: '1031 About page' },
                ]}
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
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  The SeaForth standard
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Boutique doesn’t mean small—it means considered.
                </h2>
                <p className="fade-in-up text-muted mt-6 max-w-2xl leading-relaxed">
                  You get co-founder attention, a custom system, and performance-aware
                  motion—without the “template agency” feel.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href="mailto:contact@seaforthstrategies.com"
                  className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] px-7 py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                >
                  Email us
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
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Choose a tier—then make it custom.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll recommend the cleanest starting point, then tailor scope and deliverables to
                  your goals.
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
