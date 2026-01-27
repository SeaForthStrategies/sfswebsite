"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath = useMemo(() => pathname ?? "/", [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
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
        "fixed inset-x-0 top-0 z-[1000]",
        "border-b border-black/5 bg-white/80 backdrop-blur-xl",
        scrolled ? "shadow-md shadow-black/5" : "",
      ].join(" ")}
    >
      <div className="container">
        <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-3">
          <Link href="/" className="flex items-center py-2" aria-label="SeaForth Strategies – Home">
            <Image
              src="/images/logo.png"
              alt="SeaForth Strategies"
              priority
              width={220}
              height={56}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex justify-center" aria-label="Primary navigation">
            <ul className="flex items-center gap-1 rounded-full bg-white/70 p-1 ring-1 ring-black/5 shadow-sm">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition",
                        isActive
                          ? "bg-neutral-100 text-brand-teal"
                          : "text-neutral-800 hover:bg-neutral-100/70 hover:text-brand-teal",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <a
              href="https://calendly.com/gatorgleamsmm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-yellow px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/10 transition hover:opacity-95"
            >
              Get Started
            </a>

            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white/70 shadow-sm transition hover:bg-white"
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
                    "absolute left-0 top-0 block h-0.5 w-5 rounded bg-current transition",
                    isOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition",
                    isOpen ? "opacity-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] block h-0.5 w-5 rounded bg-current transition",
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
          "md:hidden fixed inset-0 z-[999] transition",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className={[
            "absolute inset-0 bg-black/40 transition-opacity",
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
            "rounded-t-3xl bg-white px-6 pb-8 pt-6 shadow-lg",
            "transition-transform transition-opacity duration-200",
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
                    "flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition",
                    isActive
                      ? "bg-neutral-100 text-brand-teal"
                      : "bg-white text-neutral-900 hover:bg-neutral-100/70 hover:text-brand-teal",
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
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-brand-teal to-brand-yellow px-6 py-4 text-base font-semibold text-white shadow-md shadow-black/10 transition hover:opacity-95"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

