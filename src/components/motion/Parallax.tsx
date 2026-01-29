'use client';

import { useEffect, useMemo, useRef } from 'react';

import { useReducedMotion } from '@/components/motion/useReducedMotion';

export function Parallax({
  children,
  className = '',
  strength = 0.16,
  translateClampPx = 28,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  translateClampPx?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const clamp = useMemo(() => {
    const c = Math.max(0, translateClampPx);
    return (v: number) => Math.max(-c, Math.min(c, v));
  }, [translateClampPx]);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
      const y = clamp(progress * vh * strength);
      el.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [clamp, reduced, strength]);

  return (
    <div
      ref={ref}
      className={['[transform:translate3d(0,var(--parallax-y,0px),0)]', className].join(' ')}
    >
      {children}
    </div>
  );
}
