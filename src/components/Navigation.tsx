'use client';

import { IconArrowRight, IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { CONTACT_EMAIL_HREF, publicAssetPath, SITE } from '@/lib/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath = useMemo(() => pathname ?? '/', [pathname]);

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

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-[1000] pt-[env(safe-area-inset-top,0px)]',
        'transition-[background,box-shadow,border-color] duration-300',
        'backdrop-blur-md',
        isOpen
          ? 'shadow-soft hairline border-b bg-[color:var(--bg)]'
          : scrolled
            ? 'shadow-soft hairline border-b bg-[color:var(--bg)]/90'
            : 'border-b border-transparent bg-[color:var(--bg)]/70',
      ].join(' ')}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[var(--header-bar)] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center md:static md:translate-x-0 md:translate-y-0"
            aria-label="SeaForth Strategies – Home"
          >
            <Image
              src={publicAssetPath(SITE.logoPath)}
              alt={SITE.name}
              priority
              width={220}
              height={56}
              className="!h-7 !w-auto !max-w-[148px] object-contain [filter:var(--logo-filter)] transition-[filter] duration-300 md:!h-12 md:!max-w-none"
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
                    'relative font-mono text-[12px] font-semibold tracking-[0.14em] uppercase',
                    'transition-colors',
                    isActive ? 'text-brand-teal' : 'text-ink/80 hover:text-ink',
                    'after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-px',
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
          <div className="ml-auto flex items-center gap-4 md:ml-0">
            <a
              href={CONTACT_EMAIL_HREF}
              className={[
                'hidden items-center justify-center md:inline-flex',
                'rounded-full px-5 py-2.5',
                'font-mono text-[12px] font-semibold tracking-[0.12em] uppercase',
                'bg-[color:var(--ink)] text-[color:var(--bg)]',
                'btn-tech hover-wiggle transition-colors hover:bg-[color:var(--brand-teal)]',
              ].join(' ')}
            >
              Start
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="hairline inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-[color:var(--bg)]/80 md:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <span className={isOpen ? 'text-brand-teal' : 'text-ink'}>
                {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
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
            isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
        />

        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          className={[
            'absolute top-0 right-0 left-0',
            'mt-[calc(var(--header-bar)+env(safe-area-inset-top,0px))]',
            'max-h-[calc(100dvh-var(--header-bar)-env(safe-area-inset-top,0px))] overflow-y-auto overscroll-y-contain',
            'shadow-premium hairline rounded-b-[28px] border-b bg-[color:var(--bg)] px-5 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 sm:pt-6',
            'transition-all duration-300',
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-4 opacity-0',
          ].join(' ')}
        >
          <div className="mb-4 flex flex-col gap-3">
            <a
              href={CONTACT_EMAIL_HREF}
              onClick={() => setIsOpen(false)}
              className="btn-tech inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--ink)] px-4 py-3 text-[13px] font-semibold tracking-[0.08em] text-[color:var(--bg)] uppercase transition-colors hover:bg-[color:var(--brand-teal)]"
            >
              Start a project
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
                    'flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-300',
                    isActive
                      ? 'shadow-soft bg-[color:var(--brand-teal)] text-white'
                      : 'text-ink hover:text-ink bg-[color:var(--surface)]/70 hover:bg-[color:var(--surface)]',
                  ].join(' ')}
                >
                  <span>{item.label}</span>
                  <IconArrowRight size={16} className="text-ink/40" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
