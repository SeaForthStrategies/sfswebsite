'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function ScrollReveal() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationRef = useRef<MutationObserver | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const selector = [
      '.fade-in-up',
      '.fade-in-left',
      '.fade-in-right',
      '.fade-in-scale',
      '.blur-in',
      '.reveal',
    ].join(', ');

    const prefersReduced =
      typeof window !== 'undefined' &&
      'matchMedia' in window &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ensureObserver = () => {
      if (prefersReduced) return;
      if (!('IntersectionObserver' in window)) return;
      if (observerRef.current) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (el instanceof HTMLElement) {
                el.classList.add('animated');
                observerRef.current?.unobserve(el);
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
    };

    const revealAll = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
      if (targets.length === 0) return;
      targets.forEach((el) => el.classList.add('animated'));
    };

    const observeNew = () => {
      if (prefersReduced || !('IntersectionObserver' in window)) {
        revealAll();
        return;
      }

      ensureObserver();
      const observer = observerRef.current;
      if (!observer) return;

      const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
      targets
        .filter((el) => !el.classList.contains('animated'))
        .forEach((el) => observer.observe(el));
    };

    const scheduleScan = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        observeNew();
      });
    };

    // Route changes: re-scan so newly rendered page content becomes visible.
    scheduleScan();

    // Also watch for DOM changes (client navigation + Fast Refresh can replace nodes without a route change).
    mutationRef.current?.disconnect();
    mutationRef.current = new MutationObserver(() => scheduleScan());
    mutationRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      mutationRef.current?.disconnect();
      mutationRef.current = null;

      // Keep the IntersectionObserver instance between routes for efficiency, but
      // drop all observed elements to avoid holding stale references.
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [pathname]);

  return null;
}
