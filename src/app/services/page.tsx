import type { Metadata } from 'next';
import Link from 'next/link';

const frontmatter = {
  title: 'Our Services',
  description: 'Comprehensive digital solutions to help your brand shine brighter',
};

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
};

const services = [
  {
    href: '/services/web-design',
    icon: 'fas fa-laptop-code',
    title: 'Website Design & Development',
    description: 'Beautiful, high-performance websites that convert visitors into customers',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Performance'],
  },
  {
    href: '/services/analytics',
    icon: 'fas fa-chart-line',
    title: 'Analytics & Reporting',
    description: 'Data-driven insights that inform smarter decisions and optimize performance',
    features: ['Real-time Tracking', 'Custom Dashboards', 'ROI Analysis', 'Performance Metrics'],
  },
  {
    href: '/services/digital-product',
    icon: 'fas fa-shopping-bag',
    title: 'Digital Product Development',
    description: 'Custom digital solutions and products that streamline your business',
    features: ['Product Strategy', 'UX/UI Design', 'Development', 'Launch Support'],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-teal via-brand-teal to-[rgba(213,163,83,0.18)] text-white overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-scale">
              {frontmatter.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 animate-fade-in-up-bounce" style={{ animationDelay: '200ms' }}>
              {frontmatter.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Enhanced Animations */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-teal animate-fade-in-up-bounce text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with Animation */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal/80 text-white text-2xl mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <i className={service.icon} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-950 mb-3 group-hover:text-brand-teal transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 inline-block text-left">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center justify-center gap-2 text-brand-teal font-semibold group-hover:text-brand-yellow transition-colors duration-300">
                  Learn more 
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[var(--panel)] py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-4">
              Why Choose SeaForth Strategies?
            </h2>
            <p className="text-lg text-neutral-600">
              We combine creativity, data, and strategy to deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fas fa-rocket', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
              { icon: 'fas fa-chart-line', title: 'Data-Driven', desc: 'Every decision backed by analytics' },
              { icon: 'fas fa-users', title: 'Dedicated Support', desc: 'Your success is our priority' },
              { icon: 'fas fa-award', title: 'Proven Results', desc: 'Track record of successful projects' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal text-xl mb-4">
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-teal/90 text-white py-12 lg:py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how we can help your business grow with our comprehensive digital solutions.
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
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3 text-base font-semibold transition-all duration-300 hover:bg-white hover:text-brand-teal"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
