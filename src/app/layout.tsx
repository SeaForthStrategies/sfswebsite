import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { JetBrains_Mono, Outfit, Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CONTACT_EMAIL, SITE } from '@/lib/site';

/** Matches personal site (abigaillehr.com): Plus Jakarta Sans body + Outfit display */
const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s – ${SITE.name}`,
  },
  description:
    'SeaForth Strategies—founder-led website studio: custom development and Squarespace design.',
  icons: {
    icon: SITE.faviconPath,
  },
  openGraph: {
    title: SITE.name,
    description:
      'Custom development and Squarespace design for business owners—SeaForth Strategies.',
    images: [SITE.logoPath],
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const logoUrl = new URL(SITE.logoPath, SITE.url).toString();

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} app-html`}
      suppressHydrationWarning
    >
      <body className="app-body font-sans">
        {/* Subtle site-wide grid — reinforces hierarchy without competing with content */}
        <div className="tech-site-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
        {gaId ? (
          <>
            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}

        {/* Structured Data */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE.name,
            url: SITE.url,
            logo: logoUrl,
            description: 'Boutique website studio—custom development and Squarespace design.',
            sameAs: [SITE.social.instagram, SITE.social.linkedin],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: CONTACT_EMAIL,
              availableLanguage: 'English',
            },
            service: [
              {
                '@type': 'Service',
                name: 'Development',
                description:
                  'Custom website development with Next.js, GitHub, Vercel, and launch-ready quality',
              },
              {
                '@type': 'Service',
                name: 'Design',
                description:
                  'Website design and build on Squarespace—typically a lower starting price than custom development',
              },
            ],
          })}
        </Script>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />
        <ScrollReveal />

        <main id="main-content" className="app-main bg-noise-light">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
