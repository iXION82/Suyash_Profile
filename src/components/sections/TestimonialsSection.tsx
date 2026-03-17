"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

const testimonials = [
  {
    quote:
      "Suyash always listens to students and genuinely tries to help. He's one of the few people who actually follows through on what he says.",
    name: "Ananya Sharma",
    role: "3rd Year, Computer Science",
  },
  {
    quote:
      "He organized one of the best tech fests we've ever had. His energy and dedication to the student community is unmatched.",
    name: "Rohit Mehta",
    role: "2nd Year, Mechanical Engineering",
  },
  {
    quote:
      "When I first came to campus, Suyash was the one who made me feel welcome. He truly cares about every student.",
    name: "Priya Patel",
    role: "1st Year, Electronics",
  },
  {
    quote:
      "His transparency and willingness to take feedback sets him apart. He doesn't just talk — he acts.",
    name: "Arjun Nair",
    role: "3rd Year, Civil Engineering",
  },
  {
    quote:
      "Suyash helped our club grow from 15 members to over 60. He knows how to bring people together and make things happen.",
    name: "Sneha Joshi",
    role: "2nd Year, Business Administration",
  },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            Student Voices
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3">
            What Students{" "}
            <span className="gradient-text">Are Saying</span>
          </h2>
        </motion.div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </SectionWrapper>
  );
}
