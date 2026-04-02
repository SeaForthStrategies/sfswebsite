import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { CALENDLY_URL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, publicAssetPath, SITE } from '@/lib/site';

const portfolioUrl = SITE.portfolioUrl;

const labelMuted = 'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50';
const labelGold =
  'text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]';

function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: 'mail' | 'calendar' | 'chevron' | 'instagram' | 'linkedin' | 'x' | 'external';
  className?: string;
}) {
  switch (name) {
    case 'mail':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6.75h16v10.5H4V6.75Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 8.25 12 12.75l6.5-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'calendar':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 3.75v3M17 3.75v3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4.75 8h14.5v12.25H4.75V8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M7.25 11.5h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'chevron':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10 7.5 15 12l-5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7.25 4.75h9.5A2.5 2.5 0 0 1 19.25 7.25v9.5a2.5 2.5 0 0 1-2.5 2.5h-9.5a2.5 2.5 0 0 1-2.5-2.5v-9.5a2.5 2.5 0 0 1 2.5-2.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 15.25A3.25 3.25 0 1 0 12 8.75a3.25 3.25 0 0 0 0 6.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M17.2 6.8h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.75 9.5v8.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M6.75 6.75h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M10.5 18.25V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M10.5 12.25c.5-1.5 1.75-2.5 3.5-2.5 2 0 3.25 1.25 3.25 3.75v4.75"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'x':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 18.5 18.25 5.5M6 5.5l12.25 13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'external':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 17L17 7M7 7h10v10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

const socialLinks = [
  { href: SITE.social.instagram, label: 'Instagram', icon: 'instagram' as const },
  { href: SITE.social.linkedin, label: 'LinkedIn', icon: 'linkedin' as const },
  { href: 'https://x.com/seaforthco', label: 'X', icon: 'x' as const },
] as const;

const footerLink =
  'text-contrast-muted hover:text-contrast block rounded-md py-2 text-sm transition-colors';

const socialBtn =
  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline border-t bg-[color:var(--contrast-bg)] pb-[max(0px,env(safe-area-inset-bottom,0px))] text-[color:var(--contrast-ink)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-14 md:py-16 lg:py-20">
          {/* Brand + link columns: logo keeps natural aspect (no flex stretch). */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <div className="flex flex-col items-start gap-5 lg:col-span-5">
              <Link
                href="/"
                className="block w-fit max-w-full shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--contrast-bg)]"
                aria-label={`${SITE.name} – Home`}
              >
                <Image
                  src={publicAssetPath(SITE.logoPath)}
                  alt=""
                  width={220}
                  height={56}
                  sizes="(max-width: 1024px) 240px, 280px"
                  className="h-10 max-h-12 w-auto object-contain object-left opacity-95 sm:h-11 md:h-12"
                  style={{ filter: 'var(--logo-filter)' }}
                />
              </Link>
              <div className="max-w-md space-y-3">
                <p className={labelGold}>Website design studio</p>
                <p className="text-contrast-muted text-sm leading-relaxed">
                  Landing pages to full builds—custom code or Squarespace—with a clear path from
                  kickoff to launch.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={socialBtn}
                  >
                    <span className="text-[color:var(--brand-gold)]">
                      <Icon name={s.icon} className="h-[18px] w-[18px]" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2 lg:gap-12">
              <div className="min-w-0">
                <p className={labelMuted}>Explore</p>
                <nav className="mt-4 flex flex-col" aria-label="Footer navigation">
                  {exploreLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={footerLink}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="min-w-0">
                <p className={labelMuted}>Connect</p>
                <ul className="mt-4 flex flex-col gap-0.5">
                  <li>
                    <a
                      href={CONTACT_EMAIL_HREF}
                      className="hover:text-contrast flex gap-3 rounded-md py-2 text-sm text-white/75 transition-colors"
                    >
                      <span className="mt-0.5 shrink-0 text-[color:var(--brand-gold)]">
                        <Icon name="mail" className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 leading-snug break-all">{CONTACT_EMAIL}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-contrast flex items-center gap-3 rounded-md py-2 text-sm text-white/75 transition-colors"
                    >
                      <span className="shrink-0 text-[color:var(--brand-gold)]">
                        <Icon name="calendar" className="h-4 w-4" />
                      </span>
                      Book a call
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-contrast flex items-center gap-3 rounded-md py-2 text-sm text-white/75 transition-colors"
                    >
                      <span className="shrink-0 text-[color:var(--brand-gold)]">
                        <Icon name="chevron" className="h-4 w-4" />
                      </span>
                      Contact page
                    </Link>
                  </li>
                  <li>
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-contrast flex items-center gap-3 rounded-md py-2 text-sm text-white/75 transition-colors"
                    >
                      <span className="shrink-0 text-[color:var(--brand-gold)]" aria-hidden>
                        <Icon name="external" className="h-4 w-4" />
                      </span>
                      Personal site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full-width CTA — reads as one row on large screens. */}
          <div className="hairline mt-12 flex flex-col gap-6 rounded-[var(--radius-lg)] border border-white/12 bg-white/[0.04] p-6 sm:p-7 md:mt-14 md:flex-row md:items-center md:justify-between md:gap-8 lg:mt-16 lg:p-8">
            <div className="max-w-xl min-w-0 space-y-2 md:space-y-2.5">
              <p className={labelGold}>Next step</p>
              <p className="font-display text-xl leading-snug text-white sm:text-2xl">
                Book a call or send an email
              </p>
              <p className="text-contrast-muted text-sm leading-relaxed">
                Scheduling opens Calendly in a new tab. Email opens your mail app with a pre-filled
                subject line.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end md:w-auto md:items-end">
              <Button
                href={CALENDLY_URL}
                variant="accent"
                className="w-full rounded-full px-8 py-3.5 whitespace-nowrap sm:w-auto"
              >
                Book a call
              </Button>
              <Button
                href={CONTACT_EMAIL_HREF}
                variant="ghost"
                className="hairline w-full rounded-full border border-white/20 bg-white/5 px-8 py-3.5 whitespace-nowrap text-white hover:bg-white/10 sm:w-auto"
              >
                Email us
              </Button>
              <p className="w-full text-center font-mono text-[11px] text-white/40 sm:w-auto md:text-right">
                Or use the{' '}
                <Link href="/contact" className="text-white/60 underline-offset-2 hover:text-white">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-8 sm:gap-y-4">
            <div className="max-w-xl min-w-0 space-y-2">
              <p className="font-mono text-[13px] text-white/45">
                © {year} SeaForth Strategies. All rights reserved.
              </p>
              <p className="text-[11px] leading-relaxed text-white/30">
                Trademarks and brand names belong to their respective owners. Use of this site is
                subject to our terms and privacy policy.
              </p>
            </div>
            <div className="flex min-w-0 shrink-0 flex-col gap-2 text-sm text-white/40 sm:items-end">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </div>
              <p className="text-white/35 sm:text-right">Crafted in Southern California.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
