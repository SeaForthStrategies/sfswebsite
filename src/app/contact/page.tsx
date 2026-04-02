import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/layout/PageHeader';
import { BackgroundOrbs } from '@/components/visual/BackgroundOrbs';
import { Sparkles } from '@/components/Sparkles';

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  publicAssetPath,
  SITE,
  WEBSITE_REQUEST_BODY_TEMPLATE,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact SeaForth Strategies for website design and development—custom sites, Next.js builds, and launch support.',
};

export default function ContactPage() {
  const portfolioHost = new URL(SITE.portfolioUrl).host;

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Tell me about the website you need—audience, pages, stack, and timeline—and I will reply with thoughtful questions, not a canned pitch."
        backgroundImageSrc="/images/carriza-maiquez-IiHHmOcnnSA-unsplash.jpg"
      />

      <section className="hairline relative overflow-hidden border-b bg-[color:var(--bg)]">
        <BackgroundOrbs className="opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
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
                      t: 'Intro call',
                      d: 'We align on the site—goals, timeline, and what “done” looks like. No pressure.',
                    },
                    {
                      t: 'Scope + proposal',
                      d: 'We recommend the cleanest tier, then tailor deliverables to your needs.',
                    },
                    {
                      t: 'Build + refine',
                      d: 'Design and development in the browser, then a short refinement pass before and after launch.',
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
                <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                  Start here
                </p>
                <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                  Send a quick email.
                </h2>
                <p className="fade-in-up text-muted mt-6 max-w-xl leading-relaxed">
                  Describe the website you need (pages, goals, and timeline). If we’re a fit, I’ll
                  outline a clear path to a launch-ready build.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="fade-in-up hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7">
                  <Button
                    href={CONTACT_EMAIL_HREF}
                    className="shadow-soft w-full rounded-full bg-[color:var(--brand-teal)] py-4 text-white hover:bg-[color:var(--brand-teal-dark)]"
                  >
                    Email us
                  </Button>
                  <p className="text-muted mt-4 text-xs leading-relaxed">
                    Opens your mail app with the subject “Website request.” Consider including:
                  </p>
                  <pre className="text-muted mt-2 max-h-40 overflow-auto rounded-lg border border-[color:var(--hairline)] bg-[color:var(--bg)]/80 p-3 font-mono text-[11px] leading-relaxed whitespace-pre-wrap">
                    {WEBSITE_REQUEST_BODY_TEMPLATE}
                  </pre>
                  <p className="text-muted mt-5 text-sm">
                    <span className="text-ink/55 font-medium">Studio email</span>
                    <br />
                    <a
                      className="link-underline text-ink/80 hover:text-ink mt-1 inline-block break-all"
                      href={CONTACT_EMAIL_HREF}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    Starting prices, account rules, and deliverables for development and design are
                    on{' '}
                    <Link
                      href="/services#packages"
                      className="link-underline text-ink/80 hover:text-ink"
                    >
                      Services
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
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
                Leadership
              </p>
              <h2 className="fade-in-up font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Work directly with the firm’s founder.
              </h2>
              <p className="fade-in-up text-muted mt-5 max-w-xl leading-relaxed">
                For project questions, scope, or timelines—reach Abigail. You work directly with the
                person designing and building the site.
              </p>
            </div>

            <div className="mt-12 max-w-xl">
              <FounderCard
                name="Abigail Lehr"
                title="Founder — Website design & development"
                image="/images/7CC381A4-0716-416E-B8F8-B2E80D7C8955.JPG"
              />
              <p className="fade-in-up text-muted mt-8 text-sm leading-relaxed">
                Recent launches and creative work are in the{' '}
                <Link href="/portfolio" className="link-underline text-ink/80 hover:text-ink">
                  portfolio
                </Link>
                ; broader background and personal projects live on{' '}
                <a
                  href={SITE.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  abigaillehr.com
                </a>
                .
              </p>
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
              <p className="fade-in-up text-[12px] font-semibold tracking-[0.16em] text-[color:var(--brand-gold)] uppercase">
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
                q="Where can I see your work?"
                a={`Selected SeaForth builds live in this site’s portfolio. For a wider slice of design work and background, visit ${portfolioHost}.`}
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

function FounderCard({ name, title, image }: { name: string; title: string; image: string }) {
  return (
    <div className="fade-in-up hairline bg-surface shadow-soft hover-lift rounded-[var(--radius-lg)] border p-7">
      <div className="flex items-center gap-5">
        <div className="hairline relative h-16 w-16 overflow-hidden rounded-full border">
          <Image
            src={publicAssetPath(image)}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="64px"
          />
        </div>
        <div className="min-w-0">
          <p className="text-ink/60 text-[12px] font-semibold tracking-[0.16em] uppercase">
            {title}
          </p>
          <p className="text-ink mt-1 text-xl font-semibold">{name}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        <a
          className="link-underline text-ink/80 hover:text-ink break-all"
          href={CONTACT_EMAIL_HREF}
        >
          {CONTACT_EMAIL}
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
          <span className="font-display text-2xl text-[color:var(--brand-gold)] select-none">
            ＋
          </span>
        </summary>
        <div className="px-6 pt-0 pb-6 leading-relaxed text-white/70">{a}</div>
      </details>
    </div>
  );
}
