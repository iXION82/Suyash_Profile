"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const works = [
  {
    icon: "🎪",
    title: "Organized Student Events",
    description: "Led the planning and execution of major campus events, bringing together hundreds of students for memorable experiences.",
    tag: "Events",
  },
  {
    icon: "🤝",
    title: "Supported Student Clubs",
    description: "Provided guidance and resources to multiple student organizations, helping them grow their membership and impact.",
    tag: "Community",
  },
  {
    icon: "🌱",
    title: "Campus Initiatives",
    description: "Participated in and drove sustainability, cleanliness, and campus beautification initiatives.",
    tag: "Campus",
  },
  {
    icon: "🎓",
    title: "Fresher Integration",
    description: "Helped new students integrate into campus life through buddy programs and orientation activities.",
    tag: "Mentorship",
  },
  {
    icon: "💻",
    title: "Tech Community Building",
    description: "Co-founded coding circles and tech forums, creating spaces for knowledge sharing and collaborative learning.",
    tag: "Technology",
  },
  {
    icon: "🎨",
    title: "Cultural Promotion",
    description: "Championed cultural diversity on campus by organizing heritage weeks and intercultural exchange events.",
    tag: "Culture",
  },
];

export default function WorksSection() {
  return (
    <SectionWrapper id="works" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
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

        {/* Grid */}
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
