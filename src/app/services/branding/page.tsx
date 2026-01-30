import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/PageHeader';
import { Parallax } from '@/components/motion/Parallax';
import { Button } from '@/components/ui/Button';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { PortfolioGallery } from '@/components/visual/PortfolioGallery';
import { Sparkles } from '@/components/Sparkles';
import { CONTACT_EMAIL_HREF } from '@/lib/site';

const frontmatter = {
  title: 'Branding',
  description:
    'A disciplined brand system—typography, tone, and visual structure that makes your business feel premium and cohesive everywhere.',
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function BrandingPage() {
  return (
    <>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.description}
        backgroundImageSrc="/images/le-buzz-studio-KiEiI2b9GkU-unsplash.jpg"
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
                  A visual identity with editorial discipline.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="fade-in-up text-muted leading-relaxed">
                  We build brand systems—not one-off assets. The goal is a clear, consistent
                  presence that elevates perception and makes every marketing touchpoint feel
                  intentional.
                </p>
                <ul className="fade-in-up text-muted mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Brand direction + visual references',
                    'Typography and layout rhythm',
                    'Color system + usage rules',
                    'Logo refinement (as needed)',
                    'Templates for key touchpoints',
                    'Brand guidelines (lite or full)',
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
                    href="/contact"
                    className="link-underline text-ink/80 hover:text-ink text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    Start a project
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  t: 'Clarity',
                  d: 'A system that makes your offer easier to understand—and easier to trust.',
                },
                {
                  t: 'Consistency',
                  d: 'A visual language that carries across web, social, decks, and campaigns.',
                },
                {
                  t: 'Authority',
                  d: 'Premium structure and spacing that makes your brand feel established.',
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
                <Parallax className="blur-in">
                  <div className="bg-surface shadow-premium hover-lift relative overflow-hidden rounded-[var(--radius-lg)]">
                    <div className="relative aspect-[16/11] w-full">
                      <Image
                        src="/images/le-buzz-studio-KiEiI2b9GkU-unsplash.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 46vw, 92vw"
                      />
                    </div>
                    <div className="hairline border-t px-6 py-5">
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                        Typography · tone · layout rhythm
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
              <div className="md:col-span-6">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Process
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Direction → system → assets.
                </h2>
                <div className="hairline mt-8 divide-y">
                  {[
                    {
                      t: 'Discovery',
                      d: 'We align on audience, positioning, and what “premium” should feel like for your category.',
                    },
                    {
                      t: 'Direction',
                      d: 'We set a visual lane: references, typography, color, layout, and tone.',
                    },
                    {
                      t: 'System',
                      d: 'We build the repeatable rules that make your brand consistent (not fragile).',
                    },
                    {
                      t: 'Assets',
                      d: 'We deliver the touchpoints you actually need—templates and guidelines included.',
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
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <BackgroundOrbs className="opacity-85" />
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Visual direction
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  A brand system with rhythm.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="fade-in-up text-muted leading-relaxed">
                  We design the rules that make your identity cohesive—so your website, content, and
                  assets feel like one brand (not a collection of files).
                </p>
              </div>
            </div>

            <PortfolioGallery
              className="mt-12"
              items={[
                {
                  src: '/images/kelsey-knight-CrRr3y1lhl8-unsplash.jpg',
                  alt: 'Editorial workspace reference',
                },
                {
                  src: '/images/silas-baisch-K785Da4A_JA-unsplash.jpg',
                  alt: 'Minimal design inspiration',
                },
                {
                  src: '/images/le-buzz-studio-KiEiI2b9GkU-unsplash.jpg',
                  alt: 'Typography and layout reference',
                },
              ]}
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
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Make it cohesive—then make it convert.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  If the brand feels premium and consistent, marketing gets easier—and your website
                  starts working harder without shouting.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button
                  href={CONTACT_EMAIL_HREF}
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
