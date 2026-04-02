import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';

import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';
import { PORTFOLIO_GALLERY_HIGHLIGHTS } from '@/lib/portfolio';
import { CONTACT_EMAIL_HREF, publicAssetPath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'SeaForth is a small shop: you work directly with Abigail Lehr—no layers, no account managers—just honest web design and development.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A small shop—not a big agency."
        subtitle="Real conversations, real timelines, and a site you can actually own. If you want numbers and packages, Services and Pricing have the details."
        backgroundImageSrc="/images/marissa-rodriguez-2mKYEVGA4jE-unsplash.jpg"
      />

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="fade-in-up text-muted leading-relaxed">
                I started SeaForth because I like working with owners and teams who care about their
                corner of the internet—not because I wanted to run a big shop. You get one person
                who designs, builds, and launches with you. For past work,{' '}
                <Link href="/portfolio" className="link-underline text-ink/80 hover:text-ink">
                  browse the portfolio
                </Link>
                .
              </p>
            </div>

            <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:items-start md:gap-10 lg:gap-14">
              <div className="fade-in-up md:col-span-5">
                <div className="shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={publicAssetPath('/images/7CC381A4-0716-416E-B8F8-B2E80D7C8955.JPG')}
                      alt="Abigail Lehr — Founder, SeaForth Strategies"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 768px) 38vw, 92vw"
                    />
                  </div>
                </div>
              </div>

              <div className="fade-in-up stagger-2 md:col-span-7">
                <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
                  Abigail Lehr — Founder
                </p>
                <h2 className="font-display text-ink mt-3 text-3xl md:text-4xl">
                  You’re not a ticket number—you’re a conversation.
                </h2>
                <p className="text-muted mt-5 leading-relaxed">
                  I handle websites start to finish: structure, visuals, responsive build (often in
                  Next.js), the basics of speed and search, and tweaks after launch. No junior
                  handoffs and no “we’ll get back to you next quarter.” If something matters to your
                  business, it matters in how we work together.
                </p>
                <blockquote className="hairline bg-surface mt-8 rounded-[var(--radius)] border p-6 md:p-8">
                  <p className="font-display text-ink text-xl leading-snug md:text-2xl">
                    “A good site should feel like someone listened—then made it easy for people to
                    say yes.”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  How we work
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02]">
                  Hands-on, plain language, no runaround.
                </h2>
              </div>
              <div className="md:col-span-7">
                <div className="hairline divide-y">
                  {[
                    {
                      t: 'Clear before clever',
                      d: 'Visitors should know who you are and what to do next—without hunting for it.',
                    },
                    {
                      t: 'Fast enough to feel cared for',
                      d: 'Pages that load quickly and read well on phones, because that’s how people actually browse.',
                    },
                    {
                      t: 'Launch day you can trust',
                      d: 'I check the messy stuff before go-live so you’re not fixing surprises on opening night.',
                    },
                  ].map((p, idx) => (
                    <div
                      key={p.t}
                      className={['fade-in-up', `stagger-${Math.min(idx + 1, 6)}`, 'py-8'].join(
                        ' '
                      )}
                    >
                      <h3 className="text-ink text-xl font-semibold">{p.t}</h3>
                      <p className="text-muted mt-3 leading-relaxed">{p.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hairline shadow-soft mt-14 rounded-[var(--radius-lg)] border bg-[color:var(--bg)] p-7 md:p-10">
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-6">
                  <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                    Why a small shop
                  </p>
                  <h2 className="fade-in-up font-display text-ink mt-6 text-3xl leading-[1.05] md:text-4xl">
                    The kind of place where people remember your name.
                  </h2>
                  <p className="fade-in-up text-muted mt-6 leading-relaxed">
                    I keep the roster small on purpose—so you’re not explaining your business again
                    to a new face every week. You get steady communication, one creative thread, and
                    a site that feels like it came from one kitchen, not a cafeteria line.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        t: 'Same person start to finish',
                        d: 'Wireframes to launch—you’re not bouncing between departments.',
                      },
                      {
                        t: 'Built to grow with you',
                        d: 'Clean structure so you’re not stuck when the business changes.',
                      },
                      {
                        t: 'Motion that helps, not distracts',
                        d: 'A little life on the page, without the circus.',
                      },
                      {
                        t: 'Honest next steps',
                        d: 'I look at what visitors do and we talk about what’s worth fixing—not vanity metrics.',
                      },
                    ].map((c, idx) => (
                      <div
                        key={c.t}
                        className={[
                          'reveal',
                          `stagger-${Math.min(idx + 1, 6)}`,
                          'hairline bg-surface shadow-soft hover-lift rounded-[var(--radius)] border p-6',
                        ].join(' ')}
                      >
                        <h3 className="text-ink text-lg font-semibold">{c.t}</h3>
                        <p className="text-muted mt-2 leading-relaxed">{c.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <BackgroundOrbs className="opacity-85" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  A few snapshots
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Polished enough to impress—practical enough to live in.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="fade-in-up text-muted leading-relaxed">
                  A few snapshots of work that had to look good on a screen and hold up when real
                  people clicked around.
                </p>
              </div>
            </div>

            <PortfolioGallery
              className="mt-12"
              framed={false}
              items={PORTFOLIO_GALLERY_HIGHLIGHTS}
            />
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
                  Say hello—we’ll figure out the rest together.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  Send a note or book a short call. No pitch deck, no hard sell—just a real chat
                  about what you need and whether we’re a fit.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href={CONTACT_EMAIL_HREF}
                  variant="accent"
                  className="w-full rounded-full px-7 py-4"
                >
                  Send a note
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
