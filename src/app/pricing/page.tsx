import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web design and development services. From starter websites to full campaign launches.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-teal via-brand-teal to-[rgba(213,163,83,0.18)] text-white overflow-hidden py-16 lg:py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Web Design + Development Packages
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Transparent pricing for premium websites that convert. No hidden fees, just honest value.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Website */}
            <PricingCard
              title="Starter Website"
              subtitle="For small businesses that need a clean, professional online presence"
              price="$2,500–$3,500"
              features={[
                "Custom-designed, mobile-responsive website",
                "Up to 5 pages",
                "Conversion-focused layout (calls to action, contact flow)",
                "Basic SEO setup",
                "Contact form integration",
                "Fast turnaround",
              ]}
              bestFor="local businesses, service providers, personal brands"
              delay={0}
            />

            {/* Growth Website */}
            <PricingCard
              title="Growth Website"
              subtitle="For businesses ready to level up their brand and visibility"
              price="$4,500–$7,500"
              features={[
                "Fully custom design (Figma → code)",
                "Up to 8 pages",
                "Advanced mobile optimization",
                "Subtle animations and interactions",
                "CMS or blog setup",
                "SEO + analytics integration",
                "Performance and accessibility optimization",
              ]}
              bestFor="growing companies, real estate professionals, nonprofits"
              featured
              delay={100}
            />

            {/* Campaign/Launch Website */}
            <PricingCard
              title="Campaign / Launch Website"
              subtitle="For time-sensitive campaigns, launches, and advocacy efforts"
              price="$6,000–$12,000"
              features={[
                "Rapid design and development timeline",
                "Custom landing pages optimized for conversion",
                "Donation, signup, or lead-capture flows",
                "Messaging and layout optimization",
                "Mobile-first performance tuning",
                "Analytics, tracking, and handoff support",
              ]}
              bestFor="political campaigns, advocacy groups, product launches"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Ongoing Maintenance */}
      <section className="bg-[var(--panel)] py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-4">
                Ongoing Care & Maintenance
              </h2>
              <p className="text-lg text-neutral-600">
                Keep your site fast, secure, and up to date
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <div className="text-4xl font-bold text-brand-teal mb-2">$150–$300/month</div>
                  <p className="text-neutral-600">Most clients add this to avoid worrying about their site post-launch.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Feature text="Hosting management" />
                <Feature text="Content updates and edits" />
                <Feature text="Security monitoring and backups" />
                <Feature text="Performance checks" />
                <Feature text="Analytics reports" />
                <Feature text="Priority support" />
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://calendly.com/gatorgleamsmm/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-yellow px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-Ons */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-8">
              Optional Add-Ons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AddOn text="Extra pages" />
              <AddOn text="Copywriting support" />
              <AddOn text="SEO content setup" />
              <AddOn text="Photo or asset integration" />
              <AddOn text="Ongoing design support" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-teal/90 text-white py-12 lg:py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8">
              Book a free consultation to discuss your project and find the perfect package for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/gatorgleamsmm/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-brand-teal px-8 py-3 text-base font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Book Free Consultation
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3 text-base font-semibold transition-all duration-300 hover:bg-white hover:text-brand-teal"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PricingCard({
  title,
  subtitle,
  price,
  features,
  bestFor,
  featured = false,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  bestFor: string;
  featured?: boolean;
  delay?: number;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl fade-in-up text-center",
        featured
          ? "border-brand-teal bg-gradient-to-br from-white to-brand-teal/5 ring-2 ring-brand-teal"
          : "border-neutral-200 bg-white hover:border-brand-teal",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-teal to-brand-yellow px-4 py-1 text-sm font-semibold text-white shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-neutral-950 mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm">{subtitle}</p>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold text-brand-teal">{price}</div>
      </div>

      <ul className="space-y-3 mb-6 inline-block text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-neutral-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-neutral-200">
        <div className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">
          Best for
        </div>
        <p className="text-sm text-neutral-600">{bestFor}</p>
      </div>

      <div className="mt-6">
        <a
          href="https://calendly.com/gatorgleamsmm/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "block w-full text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
            featured
              ? "bg-gradient-to-r from-brand-teal to-brand-yellow text-white shadow-md hover:shadow-lg hover:scale-105"
              : "bg-neutral-100 text-brand-teal hover:bg-brand-teal hover:text-white",
          ].join(" ")}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center">
        <svg className="w-3 h-3 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-neutral-700 text-sm">{text}</span>
    </div>
  );
}

function AddOn({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 transition-all duration-300 hover:border-brand-teal hover:bg-brand-teal/5">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center">
        <span className="text-brand-gold text-xs font-bold">+</span>
      </span>
      <span className="text-neutral-700 text-sm font-medium">{text}</span>
    </div>
  );
}
