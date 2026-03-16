"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AgendaCard from "@/components/ui/AgendaCard";

const agendaItems = [
  {
    icon: "🏫",
    title: "Better Student Facilities",
    description:
      "Upgrade common rooms, study areas, and recreational spaces to create a more comfortable campus environment for everyone.",
  },
  {
    icon: "📶",
    title: "Improved Wi-Fi Across Campus",
    description:
      "Expand high-speed internet coverage to every corner of the campus, including hostels, libraries, and outdoor areas.",
  },
  {
    icon: "🎭",
    title: "More Cultural & Technical Events",
    description:
      "Organize diverse events that cater to all interests — from hackathons and workshops to festivals and art exhibitions.",
  },
  {
    icon: "🗳️",
    title: "Transparent Representation",
    description:
      "Implement regular town halls and public reports so students always know how decisions are being made.",
  },
  {
    icon: "💬",
    title: "Open Communication Channels",
    description:
      "Create digital platforms and feedback systems where students can voice concerns and suggest improvements anytime.",
  },
  {
    icon: "🤝",
    title: "Student Support Programs",
    description:
      "Establish mentorship programs, mental health support, and career guidance services accessible to all students.",
  },
];

export default function AgendaSection() {
  return (
    <SectionWrapper id="agenda" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            The Agenda
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3 mb-4">
            Promises for a{" "}
            <span className="gradient-text">Better Campus</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            These aren&apos;t just promises — they&apos;re commitments
            backed by action plans and accountability.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agendaItems.map((item, i) => (
            <AgendaCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
