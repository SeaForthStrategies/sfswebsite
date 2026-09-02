import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { SITE } from '@/lib/site';

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Seaforth Strategies | Southern California Consumer Venture Studio',
    template: '%s | Seaforth Strategies',
  },
  description:
    'Seaforth Strategies is a Southern California consumer venture studio building technology products and communities from concept through launch and growth.',
  keywords: [
    'consumer venture studio',
    'Southern California venture studio',
    'consumer technology',
    'startup studio',
    'venture builder',
    'consumer software',
    'technology ventures',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Seaforth Strategies | Consumer Venture Studio',
    description: 'We build companies for how people live next.',
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Seaforth Strategies consumer venture studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seaforth Strategies | Consumer Venture Studio',
    description: 'We build companies for how people live next.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f4f0e7',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: new URL(SITE.logoPath, SITE.url).toString(),
    description:
      'A Southern California consumer venture studio building technology products and communities from concept through launch and growth.',
    areaServed: 'Southern California',
    sameAs: [SITE.social.linkedin, SITE.social.instagram],
    founder: [
      {
        '@type': 'Person',
        name: 'Abby Lehr',
        jobTitle: 'Co-Founder & Software Engineer',
        image: new URL('/images/site/abby-lehr-coastal.jpg', SITE.url).toString(),
        sameAs: 'https://www.linkedin.com/in/abigaillehr/',
      },
      {
        '@type': 'Person',
        name: 'Isaiah Soicher',
        jobTitle: 'Co-Founder & Software Engineer',
        image: new URL('/images/site/isaiah-soicher.jpg', SITE.url).toString(),
        sameAs: 'https://www.linkedin.com/in/isaiahsoicher/',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Northwestern University',
        },
      },
    ],
    knowsAbout: [
      'Consumer technology',
      'Product development',
      'Software engineering',
      'Website development',
      'Brand development',
      'Go-to-market strategy',
      'Growth systems',
      'AI systems',
      'User acquisition',
      'Community building',
      'Growth experimentation',
    ],
    department: {
      '@type': 'Organization',
      name: 'Seaforth Studio',
      description:
        'The design, development, and growth arm of Seaforth Strategies for select product-minded companies.',
      url: new URL('/studio', SITE.url).toString(),
    },
  };

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
