"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";

const timelineData = [
  {
    year: "Year 0",
    title: "House Captain (School)",
    description:
      "Served as House Captain during school, developing early leadership skills and managing team activities and events.",
  },
  {
    year: "Year 1",
    title: "Joined FinTech Club",
    description:
      "Became an active member of the FinTech Club, gaining exposure to finance and technology while collaborating with peers.",
  },
  {
    year: "Year 2",
    title: "Class Representative (Mechanical BTech)",
    description:
      "Elected as Class Representative, acting as a bridge between students and faculty and addressing academic and administrative concerns.",
  },
  {
    year: "Year 2",
    title: "Mess Secretary, Amber Hostel",
    description:
      "Served as Mess Secretary, handling mess-related operations, addressing student concerns, and improving food services.",
  },
  {
    year: "Year 2",
    title: "Vice President, Amber Hostel",
    description:
      "Currently serving as Vice President of Amber Hostel, contributing to hostel administration and student welfare initiatives.",
  },
  {
    year: "Year 2",
    title: "Gym Approval Initiative",
    description:
      "Successfully secured approval for establishing a gym in Amber Hostel to improve student fitness facilities.",
  },
  {
    year: "Year 2",
    title: "Organizing Hostel Day",
    description:
      "Currently organizing and conducting Hostel Day, coordinating teams and managing large-scale student events.",
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
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
        <div className="relative">
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
