'use client';

import { useEffect, useMemo, useState } from 'react';

import { useInView } from '@/components/motion/useInView';
import { useReducedMotion } from '@/components/motion/useReducedMotion';

export function CountUp({
  to,
  durationMs = 900,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: {
  to: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true });
  const [value, setValue] = useState(0);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [decimals]);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / Math.max(1, durationMs));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [durationMs, inView, reduced, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  );
}
