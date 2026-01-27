"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  fadeSpeed: number;
}

export function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    // Configuration
    const particleCount = 800; // High density like the reference
    const mouseRadius = 200; // Larger repulsion zone
    // Brand palette with more transparency variants for depth
    const colors = [
      "#FFFFFF", // White
      "#D5A353", // Brand Gold
      "#FFD700", // Bright Gold
      "rgba(213, 163, 83, 0.5)", // Transparent Gold
      "rgba(255, 255, 255, 0.5)", // Transparent White
    ];

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const createParticle = (x?: number, y?: number, isTrail = false): Particle => {
      const startX = x ?? Math.random() * canvas.width;
      const startY = y ?? Math.random() * canvas.height;
      const size = isTrail ? Math.random() * 2 + 0.5 : Math.random() * 2 + 0.5; // Smaller, finer particles
      
      // Base drift velocity (very slow)
      const speedX = (Math.random() - 0.5) * 0.2; 
      const speedY = (Math.random() - 0.5) * 0.2;
      
      const opacity = isTrail ? 1 : Math.random() * 0.5 + 0.2;
      const fadeSpeed = isTrail ? 0.02 : 0;
      const color = colors[Math.floor(Math.random() * colors.length)];

      return { x: startX, y: startY, size, speedX, speedY, opacity, color, fadeSpeed };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Handle particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Calculate Repulsion (Force Field)
        let pushX = 0;
        let pushY = 0;
        
        // Only repel if mouse is on screen (simple check)
        if (mouseX > 0 || mouseY > 0) { 
           const dx = p.x - mouseX;
           const dy = p.y - mouseY;
           const dist = Math.sqrt(dx * dx + dy * dy);

           if (dist < mouseRadius) {
             const angle = Math.atan2(dy, dx);
             const force = (mouseRadius - dist) / mouseRadius; // 0 to 1
             
             // Smooth ease-out push
             const power = force * 6; // Strength multiplier
             pushX = Math.cos(angle) * power;
             pushY = Math.sin(angle) * power;
           }
        }

        // 2. Apply velocities
        // We modify the *actual* position directly with the push force for immediate reaction,
        // rather than permanently altering velocity (which causes them to fly away forever).
        // BUT to make it "flow", we can let the push affect a temporary velocity boost?
        // Let's stick to: Position = Base Drift + Repulsion Offset?
        // No, Repulsion needs to be persistent/physics-based for them to "move away".
        
        // Approach: Modify position directly by push amount, but also add a bit to velocity so they drift away.
        p.x += p.speedX + pushX;
        p.y += p.speedY + pushY;
        
        // 3. Friction?
        // If we want them to stop moving fast after being pushed, we'd need to track vx/vy separately.
        // For now, the push is added *per frame* while within radius. This means they accelerate OUT of the radius.
        // Once out, they return to base speedX/speedY. This creates a clear zone.

        // Fade out trail particles
        if (p.fadeSpeed > 0) {
            p.opacity -= p.fadeSpeed;
        } else {
            // Twinkle ambient particles
            p.opacity += (Math.random() - 0.5) * 0.01;
            if (p.opacity < 0.1) p.opacity = 0.1;
            if (p.opacity > 0.6) p.opacity = 0.6; // Slightly more subtle max opacity
        }
        
        // Remove dead trail particles
        if (p.opacity <= 0 && p.fadeSpeed > 0) {
             particles.splice(i, 1);
             i--;
             continue;
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

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      // Move mouse influence off screen or reset
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-auto z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
