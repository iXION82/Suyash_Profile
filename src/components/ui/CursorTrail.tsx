"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }[] = [];
    
    const colors = [
      "#f0c040",
      "#00e5ff", 
      "#ff007f", 
      "#7000ff", 
      "#00ff88", 
    ];

    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;
    if (isMobile) {
      canvas.style.display = "none";
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();
    
    let mouse = { x: -100, y: -100 };
    let isMoving = false;
    let timeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
      
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMoving = false;
      }, 100);
      
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 20,
          y: mouse.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.size *= 0.95;
        
        p.vy += 0.1;
        p.vx += (Math.random() - 0.5) * 0.5;
        
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        
        if (p.life <= 0 || p.size <= 0.5) {
          particles.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
