"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Sparkles } from "@/components/Sparkles";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Enhanced Hero Section with Animations */}
      <section className="relative bg-gradient-to-br from-brand-teal via-brand-teal to-[rgba(213,163,83,0.18)] text-white overflow-hidden min-h-[75vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sparkles Effect */}
          <Sparkles />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-brand-yellow/5 rounded-full blur-2xl animate-pulse-slow" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] pointer-events-none" />
        </div>

        <div className="container relative z-10 py-16 lg:py-20">
          <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Logo with Enhanced Animation */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="SeaForth Strategies"
              width={600}
              height={150}
              className="mx-auto mb-8 w-[min(520px,90vw)] drop-shadow-[0_12px_40px_rgba(213,163,83,0.35)] animate-fade-in-scale"
            />
            
            {/* Tagline with Stagger Animation */}
            <p className={`text-brand-yellow font-semibold tracking-[0.12em] uppercase text-sm sm:text-base mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Where Strategy Meets Storytelling
            </p>
            
            {/* CTA Buttons with Stagger Animation */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                href="https://calendly.com/gatorgleamsmm/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg px-7 py-4 group relative overflow-hidden"
              >
                <span className="relative z-10">Book Your Free Call</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl px-7 py-4 font-medium transition-all border-2 border-white/30 text-white hover:bg-white hover:text-brand-teal hover:border-white group"
              >
                Explore Our Services
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className={`mt-16 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce-subtle">
                <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-16 sm:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#F9FAFB"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#F9FAFB"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Who We Are Section with Scroll Animation */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center fade-in-up">
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

      {/* Services Section with Enhanced Cards */}
      <section className="bg-[var(--panel)] py-12 lg:py-16">
        <div className="container mx-auto px-6">
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
              delay={0}
            />

            <ServiceCard
              href="/services/analytics"
              iconClass="fas fa-chart-line"
              title="Analytics & Reporting"
              description="Data-driven insights that inform smarter decisions and optimize performance"
              tags={["Tracking", "Dashboards", "ROI Analysis"]}
              delay={100}
            />
            <ServiceCard
              href="/services/digital-product"
              iconClass="fas fa-shopping-bag"
              title="Digital Product Development"
              description="Custom solutions that streamline your business and delight users"
              tags={["Web Apps", "APIs", "Security"]}
              delay={200}
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl px-7 py-4 font-medium transition-all bg-brand-teal text-white hover:opacity-90 hover:scale-105 shadow-md group"
            >
              View All Services <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6">
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
            <Button href="/contact" className="text-base sm:text-lg px-8 py-4 hover:scale-105 transition-transform">
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
  delay = 0,
}: {
  href: string;
  iconClass: string;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-teal fade-in-up text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-teal text-white text-2xl mb-5 mx-auto transition-all duration-300 group-hover:bg-[linear-gradient(135deg,var(--brand-teal),var(--brand-yellow))] group-hover:scale-110 group-hover:rotate-6">
        <i className={iconClass} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-neutral-950 mb-2 group-hover:text-brand-teal transition-colors">{title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs font-semibold rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 text-brand-teal font-semibold inline-flex items-center gap-2 group-hover:text-brand-yellow transition-colors">
        Learn more <span className="transition-transform group-hover:translate-x-2">→</span>
      </div>
    </Link>
  );
}
