"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentPath = useMemo(() => pathname ?? "/", [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
        "bg-white/95 backdrop-blur-md border-b border-neutral-200/50",
        scrolled ? "shadow-lg" : "shadow-sm",
      ].join(" ")}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-teal to-brand-yellow transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="SeaForth Strategies – Home">
            <Image
              src="/images/logo.png"
              alt="SeaForth Strategies"
              priority
              width={220}
              height={56}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative text-sm font-semibold transition-all duration-300",
                    "hover:text-brand-teal",
                    isActive ? "text-brand-teal" : "text-neutral-700",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
                    "after:bg-gradient-to-r after:from-brand-teal after:to-brand-yellow",
                    "after:transition-transform after:duration-300",
                    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/gatorgleamsmm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-yellow px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:bg-neutral-50"
              aria-label="Open menu"
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <span
                aria-hidden="true"
                className={[
                  "relative block h-4 w-5",
                  isOpen ? "text-brand-teal" : "text-neutral-900",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute left-0 top-0 block h-0.5 w-5 rounded bg-current transition-all duration-300",
                    isOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition-all duration-300",
                    isOpen ? "opacity-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] block h-0.5 w-5 rounded bg-current transition-all duration-300",
                    isOpen ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[999] transition-all",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className={[
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={[
            "absolute left-0 right-0 top-0",
            "mt-20",
            "rounded-b-3xl bg-white px-6 pb-8 pt-6 shadow-xl",
            "transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="grid gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white shadow-md"
                      : "bg-white text-neutral-900 hover:bg-neutral-50 hover:text-brand-teal",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="text-neutral-400">→</span>
                </Link>
              );
            })}
          </div>

          <a
            href="https://calendly.com/gatorgleamsmm/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-brand-teal to-brand-yellow px-6 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
