import type { Metadata } from 'next';
import Script from 'next/script';
import { Instrument_Serif, Manrope } from 'next/font/google';

import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CONTACT_EMAIL, SITE } from '@/lib/site';

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s – ${SITE.name}`,
  },
  description:
    'SeaForth Strategies offers expert digital marketing services including web design and data analytics to grow your business.',
  icons: {
    icon: SITE.faviconPath,
  },
  openGraph: {
    title: SITE.name,
    description:
      'Expert digital marketing services including web design and data analytics to grow your business.',
    images: [SITE.logoPath],
    type: 'website',
  },
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
      <body className="font-sans app-body">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var theme = stored === 'light' || stored === 'dark' ? stored : null;
                if (!theme) {
                  var mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
                  theme = mq && mq.matches ? 'dark' : 'light';
                }
                document.documentElement.dataset.theme = theme;
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            })();
          `}
        </Script>

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
              'Expert digital marketing services including web design and data analytics to grow your business.',
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
                  'Custom-crafted websites that combine stunning design with powerful functionality',
              },
            ],
          })}
        </Script>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />
        <ScrollReveal />

        <main id="main-content" className="app-main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
