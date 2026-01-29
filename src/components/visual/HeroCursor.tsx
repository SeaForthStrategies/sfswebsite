'use client';

import { useEffect, useRef } from 'react';

import { useReducedMotion } from '@/components/motion/useReducedMotion';

export function HeroCursor() {
  const reduced = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const overlay = overlayRef.current;
    const host = overlay?.parentElement;
    if (!overlay || !host) return;

    const finePointer =
      typeof window !== 'undefined' &&
      'matchMedia' in window &&
      window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    let raf = 0;
    let active = false;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;

    const setVars = (nx: number, ny: number) => {
      overlay.style.setProperty('--hx', `${nx}px`);
      overlay.style.setProperty('--hy', `${ny}px`);
    };

    const tick = () => {
      if (!active) return;
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      setVars(x, y);
      raf = window.requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!active) {
        x = targetX;
        y = targetY;
        setVars(x, y);
      }
    };

    const onEnter = () => {
      active = true;
      overlay.dataset.active = 'true';
      raf = window.requestAnimationFrame(tick);
    };

    const onLeave = () => {
      active = false;
      overlay.dataset.active = 'false';
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };

    // Ensure we start hidden.
    overlay.dataset.active = 'false';

    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerenter', onEnter, { passive: true });
    host.addEventListener('pointerleave', onLeave, { passive: true });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerenter', onEnter);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced]);

  return (
    <div ref={overlayRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2]">
      <div className="hero-cursor-aura" />
      <div className="hero-cursor-dot" />
    </div>
  );
}
