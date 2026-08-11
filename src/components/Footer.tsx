import Image from 'next/image';
import Link from 'next/link';

import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="footer-logo" href="/" aria-label="Seaforth Strategies home">
              <Image src={SITE.logoPath} alt="" width={205} height={101} />
            </Link>
            <p className="footer-positioning">
              Building consumer companies from Southern California.
            </p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/ventures">Ventures</Link>
              <Link href="/approach">Approach</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <div className="footer-links">
              <a href={SITE.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Seaforth Strategies</span>
          <span>Southern California</span>
        </div>
      </div>
    </footer>
  );
}
