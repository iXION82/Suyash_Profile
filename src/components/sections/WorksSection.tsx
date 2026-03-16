"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const works = [
  {
    icon: "🏋️",
    title: "Proposal for Hostel Gym Equipment",
    description:
      "Worked on proposing the installation of basic gym equipment in hostels so students can stay active and maintain a healthy lifestyle without needing to leave the hostel.",
    tag: "Infrastructure",
  },
  {
    icon: "🤝",
    title: "Supporting Student Communities",
    description:
      "Actively collaborated with different student groups and clubs, helping organize activities and encouraging more students to participate in campus life.",
    tag: "Community",
  },
  {
    icon: "🏠",
    title: "Improving Hostel Life",
    description:
      "Raised concerns and suggestions around everyday hostel facilities, focusing on small but meaningful improvements that make student life more comfortable.",
    tag: "Student Life",
  },
];

export default function WorksSection() {
  return (
    <SectionWrapper id="works" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            Impact
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3">
            Works &{" "}
            <span className="gradient-text">Contributions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass-light rounded-2xl p-6 hover:border-gold/20 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {w.icon}
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-gold/70 bg-gold/10 px-3 py-1 rounded-full">
                  {w.tag}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold mb-2 group-hover:text-gold transition-colors">
                {w.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {w.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
