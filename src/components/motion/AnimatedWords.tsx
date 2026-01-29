'use client';

import { useMemo } from 'react';

import { useInView } from '@/components/motion/useInView';
import { useReducedMotion } from '@/components/motion/useReducedMotion';

export function AnimatedWords({
  text,
  className = '',
  wordDelayMs = 38,
}: {
  text: string;
  className?: string;
  wordDelayMs?: number;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true });

  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);
  const visible = reduced ? true : inView;

  return (
    <span ref={ref} className={className}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className={[
            'inline-block',
            'transition-[transform,opacity] duration-[900ms]',
            '[transition-timing-function:var(--ease-out)]',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-[0.35em] opacity-0',
          ].join(' ')}
          style={{ transitionDelay: `${idx * wordDelayMs}ms` }}
        >
          {word}
          {idx < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}
