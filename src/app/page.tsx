import Link from "next/link";

import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-teal via-brand-teal to-[rgba(213,163,83,0.18)] text-white">
        <div className="container pt-24 pb-16 lg:pt-28 lg:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="SeaForth Strategies"
              width={600}
              height={150}
              className="mx-auto mb-8 w-[min(520px,90vw)] drop-shadow-[0_12px_40px_rgba(213,163,83,0.35)]"
            />
            <p className="text-brand-yellow font-semibold tracking-[0.12em] uppercase text-sm sm:text-base mb-8">
              Where Strategy Meets Storytelling
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                href="https://calendly.com/gatorgleamsmm/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg px-7 py-4"
              >
                Book Your Free Call
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl px-7 py-4 font-medium transition border border-white/30 text-white hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-eyebrow">
              <span className="eyebrow-text">WHO WE ARE</span>
              <div className="gold-divider-small" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
              The Bridge Between Data &amp; Design
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We&apos;re not your typical agency. We live at the intersection of creativity and analytics—where
              bold ideas meet hard data. We don&apos;t just build brands. We engineer growth engines that turn
              attention into action, clicks into customers, and strategy into real results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)]">
        <div className="container py-12 lg:py-16">
          <div className="section-eyebrow">
            <span className="eyebrow-text">WHAT WE DO</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-10">
            Comprehensive Digital Solutions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              href="/services/web-design"
              iconClass="fas fa-laptop-code"
              title="Website Design & Development"
              description="Beautiful, high-performance websites that convert visitors into customers"
              tags={["Custom Design", "Mobile-First", "SEO Optimized"]}
            />
            <ServiceCard
              href="/services/social-media"
              iconClass="fas fa-share-alt"
              title="Social Media Management"
              description="Engaging content strategies that build communities and drive engagement"
              tags={["Content Creation", "Community Building", "Analytics"]}
            />
            <ServiceCard
              href="/services/paid-advertising"
              iconClass="fas fa-bullseye"
              title="Paid Advertising"
              description="Strategic ad campaigns that deliver measurable ROI and qualified leads"
              tags={["Google Ads", "Social Ads", "Retargeting"]}
            />
            <ServiceCard
              href="/services/email-marketing"
              iconClass="fas fa-envelope-open-text"
              title="Email Marketing"
              description="Personalized email campaigns that nurture leads and boost conversions"
              tags={["Automation", "Segmentation", "A/B Testing"]}
            />
            <ServiceCard
              href="/services/analytics"
              iconClass="fas fa-chart-line"
              title="Analytics & Reporting"
              description="Data-driven insights that inform smarter decisions and optimize performance"
              tags={["Tracking", "Dashboards", "ROI Analysis"]}
            />
            <ServiceCard
              href="/services/digital-product"
              iconClass="fas fa-shopping-bag"
              title="Digital Product Development"
              description="Custom solutions that streamline your business and delight users"
              tags={["Web Apps", "APIs", "Security"]}
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl px-7 py-4 font-medium transition bg-brand-teal text-white hover:opacity-90 shadow-md"
            >
              View All Services <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-12 lg:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="section-eyebrow">
              <span className="eyebrow-text">READY?</span>
              <div className="gold-divider-small" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-4">Ready to Make Waves?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Stop blending in. Start standing out. Book a strategy session and let&apos;s build a marketing engine
              that actually drives growth.
            </p>
            <Button href="/contact" className="text-base sm:text-lg px-8 py-4">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  href,
  iconClass,
  title,
  description,
  tags,
}: {
  href: string;
  iconClass: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-brand-teal"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-teal text-white text-2xl mb-5 transition group-hover:bg-[linear-gradient(135deg,var(--brand-teal),var(--brand-yellow))]">
        <i className={iconClass} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-neutral-950 mb-2">{title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs font-semibold rounded-full bg-neutral-100 text-neutral-700 px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 text-brand-teal font-semibold inline-flex items-center gap-2 group-hover:text-brand-yellow">
        Learn more <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

