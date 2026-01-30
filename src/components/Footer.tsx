import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, SITE } from '@/lib/site';

function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: 'mail' | 'calendar' | 'instagram' | 'linkedin' | 'x';
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
  }
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline mt-24 border-t bg-[color:var(--contrast-bg)] text-[color:var(--contrast-ink)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.8fr_0.8fr_1.1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src={SITE.logoPath}
                alt={SITE.name}
                width={220}
                height={56}
                className="h-9 w-auto opacity-95"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
              Where Strategy Meets Storytelling
            </p>
            <p className="text-contrast-muted max-w-md leading-relaxed">
              A boutique agency built on two equal pillars: creative execution and analytical
              authority. Calm, confident, and relentlessly focused on outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-contrast-muted text-[12px] font-semibold uppercase tracking-[0.16em]">
              Contact
            </p>
            <div className="grid gap-3">
              <a
                href={CONTACT_EMAIL_HREF}
                className="hover:text-contrast flex items-start gap-3 text-white/80 transition-colors"
              >
                <span className="text-[color:var(--brand-gold)]">
                  <Icon name="mail" />
                </span>
                <span className="min-w-0 break-all">{CONTACT_EMAIL}</span>
              </a>
              <Link
                href="/contact"
                className="hover:text-contrast inline-flex items-center gap-3 text-white/80 transition-colors"
              >
                <span className="text-[color:var(--brand-gold)]">
                  <Icon name="calendar" />
                </span>
                Start a project
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-contrast-muted text-[12px] font-semibold uppercase tracking-[0.16em]">
              Explore
            </p>
            <nav className="grid gap-2" aria-label="Footer navigation">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/pricing', label: 'Packages' },
                { href: '/about', label: 'Co-Founders' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-contrast-muted hover:text-contrast link-underline decoration-white/0 transition-colors hover:decoration-white/40"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  href: SITE.social.instagram,
                  label: 'Instagram',
                  icon: 'instagram' as const,
                },
                {
                  href: SITE.social.linkedin,
                  label: 'LinkedIn',
                  icon: 'linkedin' as const,
                },
                { href: 'https://x.com/seaforthco', label: 'X', icon: 'x' as const },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={[
                    'inline-flex h-11 w-11 items-center justify-center rounded-full',
                    'border border-white/10 bg-white/5',
                    'transition-colors hover:bg-white/10',
                  ].join(' ')}
                >
                  <span className="text-[color:var(--brand-gold)]">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-contrast-muted text-[12px] font-semibold uppercase tracking-[0.16em]">
              Newsletter
            </p>
            <p className="text-contrast-muted max-w-sm leading-relaxed">
              Occasional notes on web design, analytics, and what we’re seeing work right now.
            </p>
            <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-4">
              <div
                className="hs-form-frame"
                data-region="na2"
                data-portal-id="244016246"
                data-form-id="13ce96c6-c345-442d-9c77-6c4202811cf5"
              />
            </div>
          </div>
        </div>

        <div className="text-contrast-muted flex flex-col gap-2 border-t border-white/10 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {year} SeaForth Strategies. All rights reserved.</p>
          <p>Crafted in Southern California.</p>
        </div>
      </div>
    </footer>
  );
}
