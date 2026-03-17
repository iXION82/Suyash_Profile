"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export default function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className={`relative flex items-center gap-6 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="glass-light rounded-2xl p-6 hover:border-gold/20 transition-all duration-300">
          <span className="text-gold font-bold text-sm tracking-wider uppercase">
            {year}
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold mt-1 mb-2">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
          className="w-4 h-4 rounded-full bg-gold glow-gold z-10"
        />
      </div>

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
