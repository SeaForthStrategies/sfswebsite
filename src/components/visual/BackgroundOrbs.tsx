'use client';

import { useReducedMotion } from '@/components/motion/useReducedMotion';

export function BackgroundOrbs({
  className = '',
  variant = 'default',
}: {
  className?: string;
  variant?: 'default' | 'dark';
}) {
  const reduced = useReducedMotion();

  const base = 'pointer-events-none absolute inset-0 overflow-hidden';
  const palette =
    variant === 'dark'
      ? {
          a: 'bg-[color:var(--brand-teal)]/20',
          b: 'bg-[color:var(--brand-gold)]/18',
          c: 'bg-white/10',
        }
      : {
          a: 'bg-[color:var(--brand-teal)]/12',
          b: 'bg-[color:var(--brand-gold)]/12',
          c: 'bg-[color:var(--ink)]/5',
        };

  return (
    <div className={[base, className].join(' ')}>
      <div
        className={[
          'absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]',
          palette.a,
          reduced ? '' : 'animate-float-slow',
        ].join(' ')}
      />
      <div
        className={[
          'absolute -bottom-28 -left-24 h-[520px] w-[520px] rounded-full blur-[120px]',
          palette.b,
          reduced ? '' : 'animate-drift',
        ].join(' ')}
      />
      <div
        className={[
          'absolute -right-28 top-1/3 h-[420px] w-[520px] rounded-full blur-[130px]',
          palette.c,
          reduced ? '' : 'animate-float-slow',
        ].join(' ')}
        style={!reduced ? { animationDelay: '1.8s' } : undefined}
      />
    </div>
  );
}
