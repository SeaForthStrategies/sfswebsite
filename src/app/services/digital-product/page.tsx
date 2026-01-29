import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Parallax } from '@/components/motion/Parallax';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';

const frontmatter = {
  title: 'Digital Product Development',
  description:
    'Custom digital solutions and products that streamline your business and enhance user experience.',
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function DigitalProductPage() {
  return (
    <>
      <PageHeader
        title={frontmatter.title}
        subtitle={frontmatter.description}
        backgroundImageSrc="/images/matt-hardy-6ArTTluciuA-unsplash.jpg"
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
                  Bespoke systems—built to scale.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="fade-in-up text-muted leading-relaxed">
                  When your website needs more than pages—when it needs product thinking—we design
                  and build digital experiences that streamline operations and elevate your brand.
                </p>
                <ul className="fade-in-up text-muted mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Web apps and internal tools',
                    'Integrations + API strategy',
                    'Data models and scalability',
                    'Security and performance considerations',
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
                  t: 'Product clarity',
                  d: 'We translate requirements into a clean scope, a simple data model, and a build plan.',
                },
                {
                  t: 'Elegant execution',
                  d: 'UI that feels premium, with motion that supports usability—not distraction.',
                },
                {
                  t: 'Scalable foundation',
                  d: 'A codebase you can extend without rebuilding everything in six months.',
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
        <BackgroundOrbs className="opacity-90" />
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Approach
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Map the system. Then ship it.
                </h2>
                <p className="fade-in-up text-muted mt-6 leading-relaxed">
                  We focus on the pieces that create leverage: data models, workflows, and
                  interfaces that make your team faster.
                </p>

                <div className="hairline mt-8 divide-y">
                  {[
                    { t: 'Discovery', d: 'Scope, constraints, users, and success metrics.' },
                    { t: 'Architecture', d: 'Data model + integrations + permissions plan.' },
                    {
                      t: 'Build',
                      d: 'UI, workflows, and core features delivered in clean milestones.',
                    },
                    {
                      t: 'Refine',
                      d: 'Hardening, performance, and iteration based on real usage.',
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
                        src="/images/matt-hardy-6ArTTluciuA-unsplash.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 46vw, 92vw"
                      />
                    </div>
                    <div className="hairline border-t px-6 py-5">
                      <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
                        Systems · workflows · integrations
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>

            <div className="fade-in-up hairline bg-surface shadow-soft mt-12 rounded-[var(--radius-lg)] border p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <p className="text-ink/50 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    Typical fit
                  </p>
                  <p className="text-muted mt-4 text-lg leading-relaxed">
                    Teams who need a custom workflow, a secure client portal, or a product that
                    supports a differentiated offer.
                  </p>
                </div>
                <div className="md:col-span-4">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--ink)] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[color:var(--bg)] transition-colors hover:bg-[color:var(--brand-teal)]"
                  >
                    Talk through scope
                  </Link>
                </div>
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
        <div className="container mx-auto px-6">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Next step
                </p>
                <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Let’s map the system before we build it.
                </h2>
                <p className="fade-in-up mt-6 max-w-2xl leading-relaxed text-white/70">
                  We’ll translate requirements into a clean product plan—then execute with boutique
                  craft.
                </p>
              </div>
              <div className="md:col-span-4">
                <Button href="/contact" variant="accent" className="w-full rounded-full py-4">
                  Contact SeaForth
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
