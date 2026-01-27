import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const frontmatter = {
  title: "Digital Product Development",
  description:
    "Custom digital solutions and products that streamline your business and enhance user experience.",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function DigitalProductPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
            Custom Digital Solutions
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From mobile apps to web applications, we create digital products that solve real problems and
            delight users. Our development process focuses on user experience, performance, and scalability.
          </p>
        </div>
      </Section>

      <Section bg="panel">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">
          Our Digital Product Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-mobile-alt" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Mobile Apps</h3>
            <p className="text-neutral-600 leading-relaxed">
              Native and cross-platform mobile applications that engage users and drive business results.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-globe" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Web Applications</h3>
            <p className="text-neutral-600 leading-relaxed">
              Powerful web apps that streamline operations and provide exceptional user experiences.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-cogs" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">API Development</h3>
            <p className="text-neutral-600 leading-relaxed">
              Robust APIs and integrations that connect your systems and automate workflows.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-shield-alt" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Security & Testing</h3>
            <p className="text-neutral-600 leading-relaxed">
              Comprehensive security measures and thorough testing to ensure reliable, secure products.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="default" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-950 mb-4">
            Ready to build your digital product?
          </h3>
          <p className="text-lg text-neutral-600 mb-8">Let’s create something amazing together.</p>
          <Button variant="primary" href="/contact" className="text-lg px-8 py-4">
            Start Your Project
          </Button>
        </div>
      </Section>
    </>
  );
}

