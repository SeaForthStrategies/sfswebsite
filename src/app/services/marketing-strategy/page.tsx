import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { Parallax } from '@/components/motion/Parallax';
import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';

const frontmatter = {
  title: 'Marketing Strategy',
  description:
    'Positioning, messaging, and a clear channel plan—built so every piece of marketing supports one confident narrative.',
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function MarketingStrategyPage() {
  return (
    <>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.description}
        backgroundImageSrc="/images/luke-chesser-JKUTrJ4vK00-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  What this includes
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Clarity before scale.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="fade-in-up text-muted leading-relaxed">
                  We tighten your positioning and build a channel plan that makes sense for your
                  offer and resources. Less noise. More direction.
                </p>
                <ul className="fade-in-up text-muted mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Positioning + messaging pillars',
                    'Offer structure + pricing signals',
                    'Content direction & cadence',
                    'Funnel / conversion priorities',
                    'Launch or campaign roadmap',
                    'Measurement plan (KPIs that matter)',
                  ].map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="fade-in-up mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/services"
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    Explore services
                  </Link>
                  <Link
                    href="/pricing"
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    View packages
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: 'Narrative',
                  d: 'One clear story across every touchpoint—so your brand feels inevitable.',
                },
                {
                  t: 'Focus',
                  d: 'A channel plan that matches your capacity, not someone else’s playbook.',
                },
                {
                  t: 'Leverage',
                  d: 'Priorities that compound: what to fix first, and what to ignore for now.',
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

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Framework
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Strategy you can actually execute.
                </h2>
                <p className="fade-in-up text-muted mt-6 leading-relaxed">
                  The output isn’t a deck you never open again—it’s a set of decisions and a plan
                  you can run weekly.
                </p>

                <div className="hairline mt-8 divide-y">
                  {[
                    {
                      t: 'Positioning',
                      d: 'Who you’re for, what you solve, and why you’re the obvious choice.',
                    },
                    {
                      t: 'Offer',
                      d: 'The scope and framing that makes the price feel justified and the choice feel easy.',
                    },
                    {
                      t: 'Channels',
                      d: 'Where to show up, what to say, and how to measure whether it’s working.',
                    },
                    {
                      t: 'Conversion',
                      d: 'The on-site structure and next steps that turn attention into inquiries.',
                    },
                  ].map((s, idx) => (
                    <div
                      key={s.t}
                      className={['reveal', `stagger-${Math.min(idx + 1, 6)}`, 'py-7'].join(' ')}
                    >
                      <h3 className="text-ink text-xl font-semibold">{s.t}</h3>
                      <p className="text-muted mt-3 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6">
                <Parallax className="blur-in">
                  <div className="bg-surface shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                    <div className="relative aspect-[16/11] w-full">
                      <Image
                        src="/images/luke-chesser-JKUTrJ4vK00-unsplash.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 46vw, 92vw"
                      />
                    </div>
                    <div className="hairline border-t px-6 py-5">
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                        Positioning · channels · conversion
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
        <div className="relative overflow-hidden">
          <BackgroundOrbs variant="dark" className="opacity-95" />
          <div className="absolute inset-0 opacity-60">
            <Sparkles color="rgba(42, 124, 132, 0.7)" />
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
                  Set the narrative—then scale it.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  If your marketing feels scattered, it’s rarely a “more content” problem. It’s
                  usually a clarity problem. We fix that first.
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
