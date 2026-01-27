import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SeaForth Strategies for digital marketing services. Contact us for web design and marketing strategy consultation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-teal to-[rgba(31,92,98,1)] text-white py-16 lg:py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="section-eyebrow animate-fade-in-scale">
            <span className="eyebrow-text">GET IN TOUCH</span>
            <div className="gold-divider-small" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up-bounce" style={{ animationDelay: '200ms' }}>
            Let&apos;s Make Magic Happen
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed animate-fade-in-up-bounce" style={{ animationDelay: '400ms' }}>
            Ready to transform your digital presence? Book a free consultation and let&apos;s turn your vision into
            results that matter.
          </p>
        </div>
      </section>

      <section className="bg-[var(--panel)] py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrimaryContactCard
              href="mailto:contact@seaforthstrategies.com"
              icon="fas fa-envelope"
              title="Email Us"
              detail="contact@seaforthstrategies.com"
              description="Send us a message anytime. We typically respond within 24 hours."
              cta="Send Email"
            />
            <PrimaryContactCard
              href="https://calendly.com/gatorgleamsmm/30min"
              icon="fas fa-calendar-check"
              title="Schedule a Free Consultation"
              detail="30-Minute Strategy Call"
              description="Book a time that works for you. Let’s discuss your goals and how we can help."
              cta="Book Now"
              featured
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="section-eyebrow">
            <span className="eyebrow-text">OUR TEAM</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-3">
            Reach Out Directly
          </h2>
          <p className="text-center text-neutral-600 mb-10">Connect with the right team member for your needs</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TeamContactCard
              name="Abby Lehr"
              role="Co-Founder & Chief Creative Officer"
              specialty="Creative Strategy • Brand Design • Content"
              image="/images/Abby.png"
              email="abby@seaforthstrategies.com"
              linkedin="https://www.linkedin.com/in/abbylehr/"
            />
            <TeamContactCard
              name="Savanna"
              role="Co-Founder & Chief Analytics Officer"
              specialty="Data Analytics • Strategy • Performance"
              image="/images/Savanna.png"
              email="savanna@seaforthstrategies.com"
              linkedin="https://www.linkedin.com/company/seaforthstrategies/"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)] py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="section-eyebrow">
            <span className="eyebrow-text">CONNECT WITH US</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-3">
            Join Our Community
          </h2>
          <p className="text-center text-neutral-600 mb-10">
            Follow along for marketing tips, industry insights, and behind-the-scenes content
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SocialCard
              href="https://www.instagram.com/seaforthstrategies/"
              icon="fab fa-instagram"
              title="Instagram"
              handle="@seaforthstrategies"
              description="Daily marketing tips & creative inspiration"
            />
            <SocialCard
              href="https://www.linkedin.com/company/seaforthstrategies/"
              icon="fab fa-linkedin"
              title="LinkedIn"
              handle="SeaForth Strategies"
              description="Business insights & industry updates"
            />
            <SocialCard
              href="https://x.com/seaforthco"
              icon="fab fa-x-twitter"
              title="X (Twitter)"
              handle="@seaforthco"
              description="Quick tips & real-time updates"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="section-eyebrow">
            <span className="eyebrow-text">QUESTIONS?</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-3">
            <FaqItem
              q="What services do you offer?"
              a="We offer comprehensive digital marketing services including website design & development, digital product strategy, and analytics & reporting. We tailor our services to meet your specific business goals."
            />
            <FaqItem
              q="How long does it take to get started?"
              a="We can typically start within 1-2 weeks after our initial consultation. The timeline depends on the scope of your project and our current capacity. We'll give you a clear timeline during our first call."
            />
            <FaqItem
              q="Do you work with small businesses?"
              a="Absolutely! We love working with small and medium-sized businesses. We understand the unique challenges you face and create strategies that deliver maximum impact within your budget."
            />
            <FaqItem
              q="What's your pricing structure?"
              a="Our pricing is customized based on your specific needs and project scope. We offer both project-based pricing and monthly retainers. Book a free consultation to discuss your goals and get a tailored quote."
            />
            <FaqItem
              q="What makes SeaForth different?"
              a="We combine creative excellence with data-driven strategy. Our unique partnership brings together creative vision (Abby) and analytical precision (Savanna), ensuring every campaign is both beautiful and effective. Plus, we're real people who genuinely care about your success."
            />
            <FaqItem
              q="Do you offer one-time projects or ongoing services?"
              a="Both! We offer one-time projects like website design or brand development, as well as ongoing services like monthly marketing support. We'll work with you to find the right arrangement for your needs."
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)] py-12 lg:py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Let&apos;s chart your course to digital success. Your journey begins with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="https://calendly.com/gatorgleamsmm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg px-8 py-4"
            >
              Schedule Your Free Call
            </Button>
            <Button
              variant="secondary"
              href="mailto:contact@seaforthstrategies.com"
              className="text-base sm:text-lg px-8 py-4"
            >
              Send Us an Email
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function PrimaryContactCard({
  href,
  icon,
  title,
  detail,
  description,
  cta,
  featured,
}: {
  href: string;
  icon: string;
  title: string;
  detail: string;
  description: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <a
      href={href}
      className={`relative rounded-2xl border bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl ${
        featured ? "border-brand-teal" : "border-neutral-200"
      }`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {featured ? (
        <span className="absolute right-6 top-6 rounded-full bg-brand-yellow text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
          Most Popular
        </span>
      ) : null}
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-white text-2xl">
        <i className={icon} aria-hidden="true" />
      </div>
      <h2 className="text-xl font-bold text-neutral-950 text-center mb-2">{title}</h2>
      <p className="text-brand-teal font-semibold text-center mb-3">{detail}</p>
      <p className="text-neutral-600 text-center leading-relaxed">{description}</p>
      <div className="mt-6 text-center font-semibold text-brand-teal">
        {cta} <span className="ml-2">→</span>
      </div>
    </a>
  );
}

function TeamContactCard({
  name,
  role,
  specialty,
  image,
  email,
  linkedin,
}: {
  name: string;
  role: string;
  specialty: string;
  image: string;
  email: string;
  linkedin: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-[var(--panel)] p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-brand-teal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} className="h-full w-full object-cover object-top" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-neutral-950">{name}</h3>
          <p className="text-brand-teal font-semibold">{role}</p>
          <p className="text-sm text-neutral-600 mt-1">{specialty}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <a
          href={`mailto:${email}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal text-white px-4 py-3 font-semibold transition hover:opacity-90"
        >
          <i className="fas fa-envelope" aria-hidden="true" />
          Email
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-brand-teal transition hover:bg-neutral-50"
          aria-label={`${name} on LinkedIn`}
        >
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function SocialCard({
  href,
  icon,
  title,
  handle,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  handle: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-neutral-200 bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-brand-teal"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-white text-2xl">
        <i className={icon} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-neutral-950 mb-1">{title}</h3>
      <p className="text-brand-teal font-semibold mb-2">{handle}</p>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border border-neutral-200 bg-[var(--panel)] p-5 shadow-sm">
      <summary className="cursor-pointer font-semibold text-neutral-950 list-none flex items-center justify-between">
        <span>{q}</span>
        <span className="text-brand-teal">+</span>
      </summary>
      <p className="mt-4 text-neutral-600 leading-relaxed">{a}</p>
    </details>
  );
}

