import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const frontmatter = {
  title: "Paid Advertising",
  description: "Strategic paid campaigns that reach your ideal customers and deliver measurable results.",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function PaidAdvertisingPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
            Paid Advertising That Delivers
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Maximize your advertising budget with strategic paid campaigns across Google, Facebook, Instagram,
            and other platforms. We focus on targeting the right audience with compelling creatives to drive
            conversions and growth.
          </p>
        </div>
      </Section>

      <Section bg="panel">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">
          Our Paid Advertising Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-search" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Search Advertising</h3>
            <p className="text-neutral-600 leading-relaxed">
              Google Ads campaigns that capture high-intent customers at the perfect moment.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-users" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Social Media Ads</h3>
            <p className="text-neutral-600 leading-relaxed">
              Facebook, Instagram, and LinkedIn campaigns that build brand awareness and drive engagement.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-sync" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Retargeting</h3>
            <p className="text-neutral-600 leading-relaxed">
              Re-engage website visitors and past customers with personalized retargeting campaigns.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-chart-bar" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Campaign Optimization</h3>
            <p className="text-neutral-600 leading-relaxed">
              Continuous monitoring and optimization to maximize ROI and improve campaign performance.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="default" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-950 mb-4">
            Ready to scale with paid advertising?
          </h3>
          <p className="text-lg text-neutral-600 mb-8">Let’s create campaigns that deliver real ROI.</p>
          <Button variant="primary" href="/contact" className="text-lg px-8 py-4">
            Launch Your Campaigns
          </Button>
        </div>
      </Section>
    </>
  );
}

