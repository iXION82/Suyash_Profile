"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const VisionScene = dynamic(() => import("@/components/three/VisionScene"), {
  ssr: false,
});

export default function VisionSection() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SectionWrapper id="vision" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background 3D pillars */}
      <div className="absolute inset-0 opacity-40">
        {!isMobile && (
          <SceneCanvas camera={{ position: [0, 2, 8], fov: 50 }}>
            <VisionScene />
          </SceneCanvas>
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-cyan-accent text-sm font-bold tracking-widest uppercase mb-4"
        >
          The Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Building a Campus Where{" "}
          <span className="gradient-text">Every Voice Matters</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          My vision is to build a campus where every student feels heard, supported,
          and empowered to succeed. Together, we can create an environment that
          nurtures growth, celebrates diversity, and opens doors to opportunity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🏛️",
              title: "Stronger Representation",
              desc: "Every decision reflects the collective voice of us students.",
            },
            {
              icon: "🌟",
              title: "Equal Opportunities",
              desc: "Resources and support accessible to every student on campus.",
            },
            {
              icon: "🚀",
              title: "Innovation Forward",
              desc: "Embracing new ideas to modernize and improve campus life.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="glass-light rounded-2xl p-6 text-center hover:border-cyan-accent/30 transition-colors duration-300"
            >
              <div className="group">
  <h3 className="font-bold text-xl mb-2 text-white transition-colors duration-300 group-hover:text-cyan-400">
    {item.title}
  </h3>
  <p className="text-white/60 text-sm leading-relaxed transition-opacity duration-300 group-hover:text-white/80">
    {item.desc}
  </p>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
