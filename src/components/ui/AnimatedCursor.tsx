"use client";

import { useEffect, useRef, useState } from "react";

interface TrailDot {
  x: number;
  y: number;
  id: number;
  life: number;
}

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const id = idRef.current++;
      setTrail((prev) => {
        const next: TrailDot[] = [
          ...prev,
          { x: e.clientX, y: e.clientY, id, life: 1 },
        ];
        return next.length > 20 ? next.slice(next.length - 20) : next;
      });
    };
    const handleLeave = () => setVisible(false);

    const animateTrail = () => {
      setTrail((prev) =>
        prev
          .map((dot) => ({
            ...dot,
            life: dot.life * 0.9,
          }))
          .filter((dot) => dot.life > 0.08),
      );
      rafRef.current = window.requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    rafRef.current = window.requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="custom-cursor-trail-dot"
          style={{
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${0.7 + (1 - dot.life) * 0.6})`,
            opacity: dot.life,
          }}
        />
      ))}
      <div
        className={`custom-cursor ${visible ? "custom-cursor-visible" : ""}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      >
        <div className="custom-cursor-core" />
        <div className="custom-cursor-ring" />
      </div>
    </>
  );
}

