'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { CONTACT_EMAIL_HREF, SITE } from '@/lib/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
] as const;

type Theme = 'light' | 'dark';

function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}

function Icon({ name }: { name: 'sun' | 'moon' }) {
  if (name === 'sun') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 3.75v1.5M12 18.75v1.5M4.75 12h1.5M17.75 12h1.5M6.22 6.22l1.06 1.06M16.72 16.72l1.06 1.06M17.78 6.22l-1.06 1.06M7.28 16.72l-1.06 1.06"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 16.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M20.25 14.25A7.5 7.5 0 0 1 9.75 3.75a6.6 6.6 0 0 0-.5 2.55 7.5 7.5 0 0 0 9.5 7.25 6.6 6.6 0 0 0 1.5-.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  const currentPath = useMemo(() => pathname ?? '/', [pathname]);

  useEffect(() => {
    // Initialize from the inline theme script / localStorage / system.
    const current = (document.documentElement.dataset.theme as Theme | undefined) ?? 'light';
    const stored = (() => {
      try {
        const t = localStorage.getItem('theme');
        return t === 'light' || t === 'dark' ? (t as Theme) : null;
      } catch {
        return null;
      }
    })();
    const initial =
      stored ?? (current === 'light' || current === 'dark' ? current : getSystemTheme());
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-[1000]',
        'transition-[background,box-shadow,border-color] duration-300',
        'backdrop-blur-md',
        scrolled
          ? 'bg-[color:var(--bg)]/90 shadow-soft hairline border-b'
          : 'bg-[color:var(--bg)]/70 border-b border-transparent',
      ].join(' ')}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="SeaForth Strategies – Home">
            <Image
              src={SITE.logoPath}
              alt={SITE.name}
              priority
              width={220}
              height={56}
              className="h-9 w-auto transition-[filter] duration-300 [filter:var(--logo-filter)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'relative text-[13px] font-semibold uppercase tracking-[0.12em]',
                    'transition-colors',
                    isActive ? 'text-brand-teal' : 'text-ink/80 hover:text-ink',
                    'after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px',
                    'after:origin-left after:bg-[color:var(--brand-gold)]',
                    'after:transition-transform after:duration-300',
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_EMAIL_HREF}
              className={[
                'hidden items-center justify-center md:inline-flex',
                'rounded-full px-5 py-2.5',
                'text-[13px] font-semibold uppercase tracking-[0.08em]',
                'bg-[color:var(--ink)] text-[color:var(--bg)]',
                'btn-tech hover-wiggle transition-colors hover:bg-[color:var(--brand-teal)]',
              ].join(' ')}
            >
              Email
            </a>

            {/* Theme toggle (desktop) */}
            <button
              type="button"
              onClick={() => {
                setTheme(nextTheme);
                applyTheme(nextTheme);
              }}
              className={[
                'hidden h-11 w-11 items-center justify-center md:inline-flex',
                'hairline bg-[color:var(--bg)]/70 rounded-full border',
                'transition-colors hover:bg-[color:var(--bg)]',
              ].join(' ')}
              aria-label={`Switch to ${nextTheme} mode`}
            >
              <span className="text-ink">
                {theme === 'dark' ? <Icon name="sun" /> : <Icon name="moon" />}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="hairline bg-[color:var(--bg)]/80 inline-flex h-11 w-11 items-center justify-center rounded-2xl border md:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <span
                aria-hidden="true"
                className={['relative block h-4 w-5', isOpen ? 'text-brand-teal' : 'text-ink'].join(
                  ' '
                )}
              >
                <span
                  className={[
                    'absolute left-0 top-0 block h-0.5 w-5 rounded bg-current transition-all duration-300',
                    isOpen ? 'translate-y-[7px] rotate-45' : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition-all duration-300',
                    isOpen ? 'opacity-0' : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-[14px] block h-0.5 w-5 rounded bg-current transition-all duration-300',
                    isOpen ? '-translate-y-[7px] -rotate-45' : '',
                  ].join(' ')}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          'fixed inset-0 z-[999] transition-all md:hidden',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className={[
            'absolute inset-0 bg-black/40 transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={[
            'absolute left-0 right-0 top-0',
            'mt-[76px]',
            'shadow-premium hairline rounded-b-[28px] border-b bg-[color:var(--bg)] px-6 pb-8 pt-6',
            'transition-all duration-300',
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
          ].join(' ')}
        >
          <div className="mb-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setTheme(nextTheme);
                applyTheme(nextTheme);
              }}
              className="hairline text-ink/80 hover:text-ink inline-flex items-center justify-between rounded-2xl border bg-[color:var(--bg)] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors"
              aria-label={`Switch to ${nextTheme} mode`}
            >
              <span>Theme</span>
              <span className="text-ink">
                {theme === 'dark' ? <Icon name="sun" /> : <Icon name="moon" />}
              </span>
            </button>
            <a
              href={CONTACT_EMAIL_HREF}
              onClick={() => setIsOpen(false)}
              className="btn-tech inline-flex items-center justify-center rounded-2xl bg-[color:var(--ink)] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[color:var(--bg)] transition-colors hover:bg-[color:var(--brand-teal)]"
            >
              Email
            </a>
          </div>

          <div className="grid gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={[
                    'flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-semibold transition-all duration-300',
                    isActive
                      ? 'shadow-soft bg-[color:var(--brand-teal)] text-white'
                      : 'bg-[color:var(--surface)]/70 text-ink hover:text-ink hover:bg-[color:var(--surface)]',
                  ].join(' ')}
                >
                  <span>{item.label}</span>
                  <span className="text-ink/40">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
