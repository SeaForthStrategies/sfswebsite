import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";

import "./global.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seaforthstrategies.com"),
  title: {
    default: "SeaForth Strategies",
    template: "%s – SeaForth Strategies",
  },
  description:
    "SeaForth Strategies offers expert digital marketing services including web design and data analytics to grow your business.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SeaForth Strategies",
    description:
      "Expert digital marketing services including web design and data analytics to grow your business.",
    images: ["/images/logo.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YKLP6VQQKX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YKLP6VQQKX');
          `}
        </Script>

        {/* Structured Data */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SeaForth Strategies",
            url: "https://seaforthstrategies.com",
            logo: "https://seaforthstrategies.com/images/logo.png",
            description:
              "Expert digital marketing services including web design and data analytics to grow your business.",
            sameAs: [
              "https://www.instagram.com/seaforthstrategies",
              "https://www.linkedin.com/company/seaforthstrategies",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "contact@seaforthstrategies.com",
              availableLanguage: "English",
            },
            service: [
              {
                "@type": "Service",
                name: "Website Design & Development",
                description:
                  "Custom-crafted websites that combine stunning design with powerful functionality",
              },

            ],
          })}
        </Script>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navigation />
        <ScrollReveal />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

