import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s – ${SITE.name}`,
  },
  description:
    'SeaForth Strategies is a website design studio led by founder Abigail Lehr—custom sites, front-end builds, and launches. Web work only.',
  icons: {
    icon: SITE.faviconPath,
  },
  openGraph: {
    title: SITE.name,
    description:
      'Website design and development for business owners—custom UI, modern builds, launch support.',
    images: [SITE.logoPath],
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const logoUrl = new URL(SITE.logoPath, SITE.url).toString();

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} app-html`}
      suppressHydrationWarning
    >
      <body className="app-body font-sans">
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

        {/* HubSpot Forms (Newsletter) */}
        {hubspotPortalId ? (
          <Script
            id="hs-forms-embed"
            src={`https://js-na2.hsforms.net/forms/embed/${hubspotPortalId}.js`}
            strategy="afterInteractive"
          />
        ) : null}

        {/* Structured Data */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE.name,
            url: SITE.url,
            logo: logoUrl,
            description:
              'Website design and development studio—custom sites and founder-led delivery.',
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
                name: 'Website Design & Development',
                description:
                  'Custom website design and development with modern front-end stacks and launch-ready quality',
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
