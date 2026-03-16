"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const ConfettiEffect = dynamic(
  () => import("@/components/ui/ConfettiEffect"),
  { ssr: false }
);

export default function JoinSection() {
  const [volunteerCount, setVolunteerCount] = useState<number>(200); // 200 as base fallback
  
  useEffect(() => {
    // Fetch real count from DB
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/volunteer/count");
        if (res.ok) {
          const data = await res.json();
          // Let's say we add 200 base + actual DB signups as a vanity metric
          setVolunteerCount(200 + data.count);
        }
      } catch (err) {
        console.error("Failed to fetch count", err);
      }
    };
    
    fetchCount();
  }, []);

  const handleNewSignup = () => {
    setVolunteerCount(prev => prev + 1);
  };

  return (
    <SectionWrapper id="join" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-cyan-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-cyan-accent text-sm font-bold tracking-widest uppercase">
            Take Action
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mt-3 mb-6">
            Be Part of Building a{" "}
            <span className="gradient-text">Better Campus</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            This campaign is about all of us. Your voice, your energy, your ideas —
            together, we can create meaningful change. Join the movement today.
          </p>
        </motion.div>

        <ConfettiEffect onSuccess={handleNewSignup} />

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-600 to-navy-400 border-2 border-navy-950 flex items-center justify-center text-xs font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-white/50 text-sm">
            <span className="text-gold font-bold">{volunteerCount}</span> students have joined
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
