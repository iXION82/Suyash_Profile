"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const FloatingText = dynamic(
  () => import("@/components/three/FloatingText"),
  { ssr: false }
);
const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.04, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const name = "Suyash Gupta";

  return (
    <SectionWrapper id="hero" fullHeight className="flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SceneCanvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <FloatingText />
          <ParticleField count={400} color="#f0c040" size={0.015} spread={18} />
          <ParticleField count={200} color="#00e5ff" size={0.01} spread={20} />
        </SceneCanvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Candidate badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-sm font-medium text-gold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
          Candidate for Student Council
        </motion.div>

        {/* Name with letter animation */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className={char === " " ? "inline" : "inline-block"}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl text-white/70 mb-4 font-light"
        >
          A stronger campus starts with{" "}
          <span className="gradient-text font-semibold">stronger voices</span>.
        </motion.p>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-base md:text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I&apos;m Suyash Gupta, a passionate student committed to improving campus life
          and ensuring every student voice is heard.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark rounded-full font-bold text-navy-950 text-lg glow-gold hover:shadow-xl hover:shadow-gold/30 transition-shadow"
          >
            Join the Campaign
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border-2 border-white/20 rounded-full font-bold text-white text-lg hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
