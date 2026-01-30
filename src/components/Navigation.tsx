'use client';

import { IconArrowRight, IconMenu2, IconX } from '@tabler/icons-react';
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
        'fixed inset-x-0 top-0 z-[1000]',
        'transition-[background,box-shadow,border-color] duration-300',
        'backdrop-blur-md',
        isOpen
          ? 'bg-[color:var(--bg)] shadow-soft hairline border-b'
          : scrolled
            ? 'bg-[color:var(--bg)]/90 shadow-soft hairline border-b'
            : 'bg-[color:var(--bg)]/70 border-b border-transparent',
      ].join(' ')}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center md:static md:translate-x-0 md:translate-y-0"
            aria-label="SeaForth Strategies – Home"
          >
            <Image
              src={SITE.logoPath}
              alt={SITE.name}
              priority
              width={220}
              height={56}
              className="!h-5 !w-auto !max-w-[100px] object-contain transition-[filter] duration-300 [filter:var(--logo-filter)] md:!h-9 md:!max-w-none"
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
          <div className="ml-auto flex items-center gap-4 md:ml-0">
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
          <div className="mb-4 flex flex-col gap-3">
            <a
              href={CONTACT_EMAIL_HREF}
              onClick={() => setIsOpen(false)}
              className="btn-tech inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--ink)] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[color:var(--bg)] transition-colors hover:bg-[color:var(--brand-teal)]"
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
