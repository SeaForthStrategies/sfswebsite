import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="SeaForth Strategies"
              className="logo-image"
              width={200}
              height={50}
              loading="lazy"
            />
          </div>

          <p className="footer-tagline">Where Strategy Meets Storytelling</p>

          <div className="footer-contact">
            <a href="mailto:contact@seaforthstrategies.com" className="contact-link">
              <i className="fas fa-envelope" aria-hidden="true" />
              contact@seaforthstrategies.com
            </a>
            <a
              href="https://calendly.com/gatorgleamsmm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fas fa-calendar-alt" aria-hidden="true" />
              Schedule a Consultation
            </a>
          </div>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/seaforthstrategies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="social-link"
            >
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/seaforthstrategies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="social-link"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a
              href="https://x.com/seaforthco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="social-link"
            >
              <i className="fab fa-x-twitter" aria-hidden="true" />
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <span className="separator">•</span>
            <Link href="/about">About</Link>
            <span className="separator">•</span>
            <Link href="/services">Services</Link>
            <span className="separator">•</span>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="footer-bottom">
            <p className="copyright">© {year} SeaForth Strategies. All rights reserved.</p>
            <p className="credit">
              Crafted with <span className="heart">♥</span> in Southern California
            </p>
          </div>
        </div>
      </div>

      <div className="wave-divider-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#2A7C84"
          />
        </svg>
      </div>
    </footer>
  );
}

