"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";

const timelineData = [
  {
    year: "Year 1",
    title: "Joined FinTech Club",
    description:
      "Became an active member of the FinTech Club and contributed to various activities, gaining exposure to finance and technology while collaborating with fellow students.",
  },
  {
    year: "Year 2",
    title: "Class Representative (Mechanical BTech)",
    description:
      "Elected as the Class Representative for Mechanical BTech, representing classmates and acting as a bridge between students and faculty.",
  },
  {
    year: "Year 2",
    title: "Vice President, Hostel Executive Committee",
    description:
      "Served as the Vice President of the Hostel Executive Committee (HEC), helping manage hostel affairs and working to improve the hostel experience for residents.",
  },
  {
    year: "Year 2",
    title: "Hosted Hostel Day Events",
    description:
      "Led the organization and hosting of multiple events for Hostel Day, coordinating teams and creating memorable experiences for hostel residents.",
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            The Journey
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3">
            Experience &{" "}
            <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-cyan-accent/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, i) => (
              <TimelineItem key={i} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
