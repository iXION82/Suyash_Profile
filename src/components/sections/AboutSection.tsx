"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

import Image from "next/image";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            Get to Know
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3">
            About <span className="gradient-text">Suyash</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-light border border-white/10 group">
              <Image 
                src="/suyashProfile.jpeg"
                alt="Suyash Gupta Profile"
                fill
                className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-gold/20 rounded-2xl" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-2 border-cyan-accent/20 rounded-2xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-4 top-8 glass rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-gold">1.5+</p>
              <p className="text-xs text-white/50">Years Active</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-4 bottom-12 glass rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-cyan-accent">10+</p>
              <p className="text-xs text-white/50">Events Led</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
  I believe progress begins with <span className="text-gold font-semibold">listening</span>.
</p>

<p className="text-white/60 leading-relaxed">
  During my time at ISM, I’ve tried to stay actively involved in the things that make
  student life better — whether that’s participating in academic and cultural
  initiatives, helping organize events, or supporting new students as they begin
  their journey here. For me, these experiences have always been about contributing
  to the community that we all share.
</p>

<p className="text-white/60 leading-relaxed">
  I strongly believe that ISM grows stronger when every student feels heard and
  valued. My goal is to help build an environment where ideas are openly shared,
  collaboration is encouraged, and every student has the opportunity to grow,
  contribute, and thrive.
</p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🎯", label: "Goal-Oriented" },
                { icon: "🤝", label: "Collaborative" },
                { icon: "💡", label: "Innovative" },
                { icon: "📢", label: "Transparent" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 glass-light rounded-xl px-4 py-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-white/70">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
