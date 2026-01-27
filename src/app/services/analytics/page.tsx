import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const frontmatter = {
  title: "Analytics & Data Insights",
  description:
    "Data-driven insights to optimize your digital strategy and maximize your return on investment.",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
            Transform Data into Actionable Insights
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            At SeaForth Strategies, we believe data is the foundation of every successful digital
            marketing strategy. Our comprehensive analytics and reporting services help you understand
            your audience, track performance, and make informed decisions that drive real business
            growth.
          </p>
        </div>
      </Section>

      <Section bg="panel">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">
          Our Analytics Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-chart-bar" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Performance Tracking</h3>
            <p className="text-neutral-600 leading-relaxed">
              Monitor key metrics across all your digital channels with custom dashboards and real-time
              reporting.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-users" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Audience Analysis</h3>
            <p className="text-neutral-600 leading-relaxed">
              Deep insights into your customer behavior, demographics, and preferences to optimize
              targeting.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-bullseye" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">ROI Optimization</h3>
            <p className="text-neutral-600 leading-relaxed">
              Track return on investment and identify the most profitable marketing channels and
              campaigns.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-chart-line" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Advanced Reporting</h3>
            <p className="text-neutral-600 leading-relaxed">
              Comprehensive reports with actionable insights to guide your strategic decisions and
              growth.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="default" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-950 mb-4">
            Ready to unlock the power of your data?
          </h3>
          <p className="text-lg text-neutral-600 mb-8">
            Let’s turn your analytics into actionable insights that drive growth.
          </p>
          <Button variant="primary" href="/contact" className="text-lg px-8 py-4">
            Get Data Insights
          </Button>
        </div>
      </Section>
    </>
  );
}

