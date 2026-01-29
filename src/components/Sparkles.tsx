'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  opacityDir: 1 | -1;
  color: string;
};

interface SparklesProps {
  color?: string;
}

export function Sparkles({ color: propColor }: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;

    const colors = propColor
      ? [propColor, 'rgba(255,255,255,0.55)']
      : ['rgba(255,255,255,0.55)', 'rgba(213,163,83,0.55)', 'rgba(255,255,255,0.25)'];

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const createParticle = (): Particle => {
      const size = Math.random() * 1.6 + 0.4;
      const vx = (Math.random() - 0.5) * 0.18;
      const vy = (Math.random() - 0.5) * 0.18;
      const opacity = Math.random() * 0.25 + 0.18;
      const opacityDir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const color = colors[Math.floor(Math.random() * colors.length)] ?? 'rgba(255,255,255,0.4)';
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        vx,
        vy,
        opacity,
        opacityDir,
        color,
      };
    };

    const initParticles = () => {
      const area = Math.max(1, canvas.width * canvas.height);
      // Quiet density (capped for perf): ~1 per 7,000px²
      const particleCount = Math.min(260, Math.max(120, Math.round(area / 7000)));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Subtle twinkle.
        p.opacity += p.opacityDir * 0.004;
        if (p.opacity > 0.6) {
          p.opacity = 0.6;
          p.opacityDir = -1;
        } else if (p.opacity < 0.12) {
          p.opacity = 0.12;
          p.opacityDir = 1;
        }

        // Screen wrap
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [propColor]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
