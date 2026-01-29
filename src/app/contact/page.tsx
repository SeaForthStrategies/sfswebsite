import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with SeaForth Strategies for digital marketing services. Contact us for web design and marketing strategy consultation.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="A premium, frictionless start: email us directly."
        backgroundImageSrc="/images/carriza-maiquez-IiHHmOcnnSA-unsplash.jpg"
      />

      <section className="hairline relative overflow-hidden border-b bg-[color:var(--bg)]">
        <BackgroundOrbs className="opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  What happens next
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-3xl leading-[1.05] md:text-4xl">
                  Simple steps. Clear expectations.
                </h2>
              </div>
              <div className="md:col-span-7">
                <div className="hairline divide-y">
                  {[
                    {
                      t: 'Strategy call',
                      d: 'We align on goals, timeline, and what success looks like. No pressure.',
                    },
                    {
                      t: 'Scope + proposal',
                      d: 'We recommend the cleanest tier, then tailor deliverables to your needs.',
                    },
                    {
                      t: 'Build + refine',
                      d: 'We design, develop, and instrument analytics—then refine based on real signals.',
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

      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                  Start here
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Send a quick email.
                </h2>
                <p className="fade-in-up text-muted mt-6 max-w-xl leading-relaxed">
                  Tell us what you’re building (goals, timeline, and scope). If we’re a fit, we’ll
                  outline the cleanest path to a launch-ready build.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="fade-in-up hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7">
                  <Button
                    href="mailto:contact@seaforthstrategies.com"
                    className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                  >
                    Email us
                  </Button>
                  <p className="text-muted mt-5 text-sm">
                    Prefer email?{' '}
                    <a
                      className="link-underline text-ink/80 hover:text-ink break-all"
                      href="mailto:contact@seaforthstrategies.com"
                    >
                      contact@seaforthstrategies.com
                    </a>
                  </p>
                  <p className="text-muted mt-3 text-sm">
                    Want package guidance first?{' '}
                    <Link href="/pricing" className="link-underline text-ink/80 hover:text-ink">
                      View pricing
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline bg-surface border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                Co-Founders
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Reach the right expert directly.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FounderCard
                name="Abby Lehr"
                title="Co-Founder — Web Design & Development"
                image="/images/7CC381A4-0716-416E-B8F8-B2E80D7C8955.JPG"
                email="abby@seaforthstrategies.com"
              />
              <FounderCard
                name="Savanna Spayd"
                title="Co-Founder — Analytics & Performance"
                image="/images/Savanna.png"
                email="savanna@seaforthstrategies.com"
              />
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
            <div className="max-w-3xl">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                FAQ
              </p>
              <h2 className="fade-in-up font-display mt-6 text-4xl leading-[1.02] md:text-5xl">
                Quick answers.
              </h2>
            </div>

            <div className="mt-10 grid gap-3 md:max-w-4xl">
              <FaqItem
                q="What do you build the site in?"
                a="We typically build in Next.js (App Router). If we ever change the stack, the system stays the same: clean, scalable, performance-aware, and easy to evolve."
              />
              <FaqItem
                q="Do you handle both creative and analytics?"
                a="Yes. Abby leads creative + technical execution; Savanna leads analytics, performance, and measurement."
              />
              <FaqItem
                q="Is pricing fixed?"
                a="Packages are the starting point; scope is customized based on goals, complexity, and timeline."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FounderCard({
  name,
  title,
  image,
  email,
}: {
  name: string;
  title: string;
  image: string;
  email: string;
}) {
  return (
    <div className="fade-in-up hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7">
      <div className="flex items-center gap-5">
        <div className="hairline relative h-16 w-16 overflow-hidden rounded-full border">
          <Image src={image} alt={name} fill className="object-cover object-top" sizes="64px" />
        </div>
        <div className="min-w-0">
          <p className="text-ink/60 text-[12px] font-semibold uppercase tracking-[0.16em]">
            {title}
          </p>
          <p className="text-ink mt-1 text-xl font-semibold">{name}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        <a className="link-underline text-ink/80 hover:text-ink break-all" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="group rounded-[var(--radius)] border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
      <details className="w-full">
        <summary className="flex cursor-pointer list-none items-center justify-between p-6 focus:outline-none">
          <span className="text-lg font-semibold text-white transition-colors group-hover:text-[color:var(--brand-gold)]">
            {q}
          </span>
          <span className="font-display select-none text-2xl text-[color:var(--brand-gold)]">
            ＋
          </span>
        </summary>
        <div className="px-6 pb-6 pt-0 leading-relaxed text-white/70">{a}</div>
      </details>
    </div>
  );
}
