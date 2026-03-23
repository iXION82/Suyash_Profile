"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out curve: fast start, slows down near end
        const remaining = 100 - prev;
        const increment = Math.max(1, remaining * 0.12);
        return Math.min(100, prev + increment);
      });
    }, 40);

    // Minimum display time
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2200);

    // Prevent scroll while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--color-navy-950)" }}
        >
          {/* Background subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Orbiting glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full"
              style={{
                border: "1px solid rgba(240, 192, 64, 0.15)",
                boxShadow: "0 0 40px rgba(240, 192, 64, 0.05)",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
              style={{
                border: "1px solid rgba(0, 229, 255, 0.1)",
                boxShadow: "0 0 60px rgba(0, 229, 255, 0.03)",
              }}
            />
            {/* Orbiting dot on ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 md:w-64 md:h-64"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: "var(--color-gold)",
                  boxShadow: "0 0 12px rgba(240, 192, 64, 0.8)",
                }}
              />
            </motion.div>
            {/* Orbiting dot on ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 md:w-96 md:h-96"
            >
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--color-cyan-accent)",
                  boxShadow: "0 0 12px rgba(0, 229, 255, 0.8)",
                }}
              />
            </motion.div>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo / Monogram */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: "linear-gradient(135deg, var(--color-gold), var(--color-cyan-accent))",
                boxShadow:
                  "0 0 40px rgba(240, 192, 64, 0.3), 0 0 80px rgba(0, 229, 255, 0.15)",
              }}
            >
              <span
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "var(--color-navy-950)" }}
              >
                S
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-2 text-center"
            >
              Suyash <span className="gradient-text">Gupta</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-white/40 text-sm md:text-base tracking-widest uppercase mb-10"
            >
              Student Council Candidate
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-48 md:w-56 h-[3px] rounded-full overflow-hidden"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, var(--color-gold), var(--color-cyan-accent))",
                  boxShadow: "0 0 12px rgba(240, 192, 64, 0.5)",
                  transition: "width 0.1s ease-out",
                }}
              />
            </motion.div>

            {/* Percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-xs text-white/30 tabular-nums tracking-wider"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
