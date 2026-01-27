import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";

const frontmatter = {
  title: "Our Services",
  description: "Comprehensive digital solutions to help your brand shine brighter",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

const services = [
  {
    href: "/services/web-design",
    icon: "fas fa-laptop-code",
    title: "Website Design & Development",
    description: "Beautiful, high-performance websites that convert visitors into customers",
  },
  {
    href: "/services/social-media",
    icon: "fas fa-share-alt",
    title: "Social Media Marketing",
    description: "Engaging content strategies that build communities and drive engagement",
  },
  {
    href: "/services/paid-advertising",
    icon: "fas fa-bullseye",
    title: "Paid Advertising",
    description: "Strategic ad campaigns that deliver measurable ROI and qualified leads",
  },
  {
    href: "/services/email-marketing",
    icon: "fas fa-envelope-open-text",
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads and boost conversions",
  },
  {
    href: "/services/analytics",
    icon: "fas fa-chart-line",
    title: "Analytics & Reporting",
    description: "Data-driven insights that inform smarter decisions and optimize performance",
  },
  {
    href: "/services/digital-product",
    icon: "fas fa-shopping-bag",
    title: "Digital Product Development",
    description: "Custom digital solutions and products that streamline your business",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="panel">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-brand-teal"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-teal text-white text-2xl mb-5 transition group-hover:bg-[linear-gradient(135deg,var(--brand-teal),var(--brand-yellow))]">
                <i className={s.icon} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950 mb-2">{s.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">{s.description}</p>
              <div className="mt-3 text-brand-teal font-semibold inline-flex items-center gap-2 group-hover:text-brand-yellow">
                Learn more <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

