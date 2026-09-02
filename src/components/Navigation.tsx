'use client';

import { IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SITE } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/studio', label: 'Studio' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="nav-logo" href="/" aria-label="Seaforth Strategies home">
          <Image src={SITE.logoPath} alt="Seaforth Strategies" width={205} height={101} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={
                pathname === link.href || pathname.startsWith(`${link.href}/`) ? 'page' : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className="nav-contact"
          href="/contact"
          aria-current={pathname === '/contact' ? 'page' : undefined}
          onClick={() =>
            window.gtag?.('event', 'cta_click', {
              link_label: 'Navigation contact',
              link_url: '/contact',
            })
          }
        >
          Contact us <span aria-hidden="true">→</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconX size={21} stroke={1.5} /> : <IconMenu2 size={21} stroke={1.5} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={['mobile-panel', open ? 'open' : ''].filter(Boolean).join(' ')}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            tabIndex={open ? 0 : -1}
            aria-current={
              pathname === link.href || pathname.startsWith(`${link.href}/`) ? 'page' : undefined
            }
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          tabIndex={open ? 0 : -1}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
