"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";

const timelineData = [
  {
    year: "Year 1",
    title: "Joined Student Community",
    description:
      "Became an active member of the student community, participating in orientation programs and welcoming new students to campus life.",
  },
  {
    year: "Year 1",
    title: "Event Volunteer",
    description:
      "Volunteered for multiple campus events, gaining firsthand experience in event management and student coordination.",
  },
  {
    year: "Year 2",
    title: "Club Coordinator",
    description:
      "Took on leadership roles in student clubs, organizing workshops, technical sessions, and cultural events that brought students together.",
  },
  {
    year: "Year 2",
    title: "Student Council Intern",
    description:
      "Served as a student council intern, supporting ongoing initiatives and learning the inner workings of student governance.",
  },
  {
    year: "Year 3",
    title: "Initiative Leader",
    description:
      "Led student-driven initiatives focused on improving campus infrastructure, organizing feedback drives, and representing student concerns.",
  },
  {
    year: "Year 3",
    title: "Campaign Launch",
    description:
      "Launched the campaign for Student Council President, driven by a clear vision and strong support from the student community.",
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
