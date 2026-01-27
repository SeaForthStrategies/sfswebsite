import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const frontmatter = {
  title: "Social Media Marketing",
  description:
    "Engaging social media strategies that build community and drive brand awareness across all platforms.",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function SocialMediaPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
            Social Media That Connects
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Build authentic relationships with your audience through strategic social media marketing. We
            create engaging content, manage your communities, and drive meaningful conversations that turn
            followers into customers.
          </p>
        </div>
      </Section>

      <Section bg="panel">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">
          Our Social Media Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-calendar-alt" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Content Strategy</h3>
            <p className="text-neutral-600 leading-relaxed">
              Strategic content planning that aligns with your brand voice and business objectives.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-users" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Community Management</h3>
            <p className="text-neutral-600 leading-relaxed">
              Active community engagement that builds relationships and drives customer loyalty.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-chart-line" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Social Analytics</h3>
            <p className="text-neutral-600 leading-relaxed">
              Track performance and optimize your social media strategy with detailed insights and reporting.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-camera" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Content Creation</h3>
            <p className="text-neutral-600 leading-relaxed">
              Professional photography, graphics, and video content that captures attention and drives engagement.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="default" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-950 mb-4">Ready to grow your social presence?</h3>
          <p className="text-lg text-neutral-600 mb-8">
            Let’s create a social media strategy that drives results.
          </p>
          <Button variant="primary" href="/contact" className="text-lg px-8 py-4">
            Boost Your Social Media
          </Button>
        </div>
      </Section>
    </>
  );
}

