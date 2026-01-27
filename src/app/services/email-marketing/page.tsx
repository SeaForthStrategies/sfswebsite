import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const frontmatter = {
  title: "Email Marketing",
  description:
    "Personalized email campaigns that nurture leads and turn subscribers into loyal customers.",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function EmailMarketingPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
            Email Marketing That Converts
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Build meaningful relationships with your audience through strategic email marketing campaigns.
            From welcome sequences to promotional campaigns, we help you deliver the right message at the
            right time.
          </p>
        </div>
      </Section>

      <Section bg="panel">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">
          Our Email Marketing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-paper-plane" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Campaign Strategy</h3>
            <p className="text-neutral-600 leading-relaxed">
              Comprehensive email marketing strategies that align with your business goals and customer
              journey.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-paint-brush" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Design & Copy</h3>
            <p className="text-neutral-600 leading-relaxed">
              Beautiful email templates and compelling copy that captures attention and drives action.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-chart-line" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Performance Tracking</h3>
            <p className="text-neutral-600 leading-relaxed">
              Detailed analytics and A/B testing to optimize open rates, click-through rates, and
              conversions.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-robot" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Email Automation</h3>
            <p className="text-neutral-600 leading-relaxed">
              Smart automated sequences that nurture leads and customers based on their behavior and
              preferences.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="default" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-950 mb-4">
            Ready to grow with email marketing?
          </h3>
          <p className="text-lg text-neutral-600 mb-8">Let’s create campaigns that your audience loves.</p>
          <Button variant="primary" href="/contact" className="text-lg px-8 py-4">
            Start Email Marketing
          </Button>
        </div>
      </Section>
    </>
  );
}

