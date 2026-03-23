"use client";

import { motion } from "framer-motion";

interface AgendaCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function AgendaCard({ icon, title, description, index }: AgendaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      style={{ willChange: "transform, opacity" }}
      className="glass-light rounded-2xl p-6 group cursor-default hover:border-gold/30 transition-all duration-300"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-cyan-accent transition-all duration-500" />
    </motion.div>
  );
}
