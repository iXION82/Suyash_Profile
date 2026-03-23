"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PosterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <SectionWrapper id="poster" className="py-24 md:py-32 px-4">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            Campaign Poster
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3 mb-4">
            The <span className="gradient-text">Vision</span> at a Glance
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Everything we stand for — captured in one poster.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-center"
        >

          <motion.div
            className="absolute inset-0 -inset-x-8 -inset-y-8 rounded-3xl pointer-events-none"
            style={{
              opacity: glowOpacity,
              background:
                "radial-gradient(ellipse at center, rgba(240, 192, 64, 0.12) 0%, rgba(0, 229, 255, 0.06) 50%, transparent 80%)",
            }}
          />

          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-cyan-accent/40 rounded-tr-2xl pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-cyan-accent/40 rounded-bl-2xl pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-2xl pointer-events-none" />

          <motion.div
            style={{ y: imageY }}
            className="relative w-full max-w-lg md:max-w-2xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="group relative">
                <Image
                  src="/poster.jpeg"
                  alt="Student Gymkhana Elections 2026 — Suyash Gupta Campaign Poster"
                  width={800}
                  height={1100}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority={false}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -right-3 md:-right-6 glass rounded-xl px-4 py-2.5 glow-gold"
            >
              <span className="text-gold font-bold text-sm md:text-base tracking-wide">
                🗳️ Vote for Change
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -left-3 md:-left-6 glass rounded-xl px-3 py-2 glow-cyan"
            >
              <span className="text-cyan-accent font-bold text-xs md:text-sm tracking-wide">
                ✨ IIT ISM Dhanbad
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
