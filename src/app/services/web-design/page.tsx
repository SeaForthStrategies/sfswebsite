import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const frontmatter = {
  title: "Website Design & Development",
  description:
    "Beautiful, responsive websites that convert visitors into customers and represent your brand perfectly.",
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

export default function WebDesignPage() {
  return (
    <>
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />

      <Section bg="default">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6">
            Custom Websites That Convert
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            At SeaForth Strategies, we create stunning, responsive websites that not only look amazing but
            also drive real business results. Our custom development approach ensures your site perfectly
            represents your brand while providing an exceptional user experience.
          </p>
        </div>
      </Section>

      <Section bg="panel">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">
          Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-mobile-alt" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Responsive Design</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Websites that look and function perfectly across all devices and screen sizes.
            </p>
            <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-5">
              <li>Mobile-First Development</li>
              <li>Cross-Browser Testing</li>
              <li>Adaptive Layouts</li>
              <li>Touch-Friendly Interface</li>
              <li>Responsive Images</li>
            </ul>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-code" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Custom Development</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Tailored solutions built with clean, efficient code using modern technologies.
            </p>
            <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-5">
              <li>Custom Functionality</li>
              <li>API Integration</li>
              <li>Database Design</li>
              <li>Security Implementation</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-shopping-cart" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">E-commerce Solutions</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Complete online store solutions with seamless checkout experiences.
            </p>
            <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-5">
              <li>Product Management</li>
              <li>Secure Checkout</li>
              <li>Inventory Control</li>
              <li>Payment Integration</li>
              <li>Order Processing</li>
            </ul>
          </div>
          <div className="group rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-teal">
            <div className="text-brand-teal text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <i className="fas fa-search" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">SEO Optimization</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Built-in search engine optimization to improve your visibility.
            </p>
            <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-5">
              <li>Technical SEO</li>
              <li>Content Strategy</li>
              <li>Performance Tuning</li>
              <li>Meta Optimization</li>
              <li>Analytics Setup</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="default">
        <h2 className="text-3xl font-bold text-center text-neutral-950 mb-12">Our Development Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-yellow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
              1
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Discovery & Planning</h3>
            <p className="text-neutral-600 leading-relaxed">
              We start by understanding your brand, goals, and target audience to create a strategic plan
              for your website.
            </p>
          </div>
          <div className="group text-center rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-yellow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
              2
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Design & Prototyping</h3>
            <p className="text-neutral-600 leading-relaxed">
              Creating beautiful, user-friendly designs and interactive prototypes for your approval before
              development begins.
            </p>
          </div>
          <div className="group text-center rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-yellow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
              3
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Development & Testing</h3>
            <p className="text-neutral-600 leading-relaxed">
              Building your site with clean code and thoroughly testing across all devices and browsers for
              optimal performance.
            </p>
          </div>
          <div className="group text-center rounded-2xl border border-neutral-200 shadow-lg bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-yellow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
              4
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-3">Launch & Support</h3>
            <p className="text-neutral-600 leading-relaxed">
              Deploying your site and providing ongoing support to ensure continued success and optimal
              performance.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="default" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-950 mb-4">
            Ready to Transform Your Online Presence?
          </h3>
          <p className="text-lg text-neutral-600 mb-8">
            Let’s create a website that drives results for your business.
          </p>
          <Button
            variant="primary"
            href="https://calendly.com/gatorgleamsmm/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-8 py-4"
          >
            Schedule a Call
          </Button>
        </div>
      </Section>
    </>
  );
}

