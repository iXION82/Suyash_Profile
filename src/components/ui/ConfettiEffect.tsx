"use client";

import { useRef, useCallback } from "react";

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
}

export default function ConfettiEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const piecesRef = useRef<ConfettiPiece[]>([]);

  const colors = ["#f0c040", "#00e5ff", "#ffffff", "#f7d774", "#00b8d4", "#4a5abf"];

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    piecesRef.current = piecesRef.current.filter((p) => p.life > 0);

    piecesRef.current.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.rotation += p.rotationSpeed;
      p.life -= 0.012;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (piecesRef.current.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      animationRef.current = null;
    }
  }, []);

  const triggerConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    for (let i = 0; i < 80; i++) {
      piecesRef.current.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: Math.random() * -12 - 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        life: 1,
      });
    }

    if (!animationRef.current) {
      animate();
    }
  }, [animate, colors]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <div onMouseEnter={triggerConfetti} onClick={triggerConfetti}>
        <div className="flex flex-wrap gap-4 justify-center relative z-0">
          <button className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark rounded-full font-bold text-navy-950 text-lg hover:scale-105 transition-transform duration-300 glow-gold">
            Join Campaign
          </button>
          <button className="px-8 py-4 border-2 border-cyan-accent text-cyan-accent rounded-full font-bold text-lg hover:bg-cyan-accent/10 hover:scale-105 transition-all duration-300">
            Volunteer
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
            Share Ideas
          </button>
        </div>
      </div>
    </div>
  );
}
