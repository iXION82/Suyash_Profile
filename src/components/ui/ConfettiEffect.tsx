"use client";

import { useRef, useCallback, useState } from "react";

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

interface ConfettiEffectProps {
  onSuccess?: () => void;
}

export default function ConfettiEffect({ onSuccess }: ConfettiEffectProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const piecesRef = useRef<ConfettiPiece[]>([]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeRole, setActiveRole] = useState<string>("");
  const [email, setEmail] = useState("");

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

  const handleVolunteerSubmit = async (role: string) => {
    if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address first.");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");
    setActiveRole(role);
    
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || "Failed to submit");
      
      triggerConfetti();
      setStatus("success");
      setEmail(""); // Clear email on success
      
      // Notify parent to increment counter
      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => {
        setStatus("idle");
        setActiveRole("");
      }, 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message);
      setTimeout(() => {
        setStatus("idle");
        setActiveRole("");
      }, 5000);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <div>
        {status === "success" && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-sm p-3 rounded-xl bg-green-500/20 border border-green-500/50 text-green-200 text-sm text-center mb-4 z-20">
            Thank you! Your interest has been recorded.
          </div>
        )}
        
        {status === "error" && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-sm p-3 rounded-xl bg-red-500/20 border border-red-500/50 text-red-200 text-sm text-center mb-4 z-20">
            {errorMsg}
          </div>
        )}

        <div className="mb-8 relative z-0">
          <input 
            type="email" 
            placeholder="Enter your email to join..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md mx-auto block px-6 py-4 rounded-full bg-navy-900/60 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-center text-lg shadow-xl backdrop-blur-sm"
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center relative z-0">
          <button 
            onClick={() => handleVolunteerSubmit("Join Campaign")}
            disabled={status === "loading"}
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark rounded-full font-bold text-navy-950 text-lg hover:scale-105 transition-transform duration-300 glow-gold disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" && activeRole === "Join Campaign" ? "Processing..." : "Join Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
}
