"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AgendaCard from "@/components/ui/AgendaCard";

const agendaItems = [
  {
    icon: "🧺",
    title: "Washing Machines in Hostels",
    description:
      "Laundry shouldn’t be a hassle. I will work towards installing washing machines in hostels so students have easy and reliable access to basic facilities.",
  },
  {
    icon: "📶",
    title: "Better Internet Speeds",
    description:
      "Fast and reliable internet is essential for both academics and everyday life. I aim to push for improved internet speeds and better connectivity across ISM.",
  },
  {
    icon: "🎉",
    title: "Better Organized Fests",
    description:
      "Fests like Concetto should be something every student is proud of. I want to work towards better planning, smoother execution, and more engaging events.",
  },
  {
    icon: "🗳️",
    title: "Transparent Decision Making",
    description:
      "Students deserve to know how decisions affecting them are made. I believe in clear communication and greater transparency in student governance.",
  },
  {
    icon: "🏆",
    title: "Coach Accountability",
    description:
      "Sports performance improves when training is taken seriously. Evaluating coaches based on Inter-IIT results can help ensure better guidance for athletes.",
  },
  {
    icon: "🛣️",
    title: "Better Roads & Infrastructure",
    description:
      "Small infrastructure improvements can make daily life easier. I will work towards better roads, pathways, and overall ISM infrastructure.",
  },
  {
    icon: "🥇",
    title: "Stronger Inter IIT Performance",
    description:
      "ISM has incredible talent. By improving preparation and support for cultural, technical, and sports teams, we can aim for stronger Inter IIT results.",
  },
  {
    icon: "🍽️",
    title: "Flexible Mess Card System",
    description:
      "Students should only pay for the meals they actually consume and should have the flexibility to eat in any hostel mess.",
  },
  {
    icon: "💧",
    title: "More RO & Water Coolers",
    description:
      "Access to clean drinking water should never be a problem. I aim to push for more RO systems and water coolers across hostels.",
  },
  {
    icon: "☕",
    title: "A Quality Campus Café",
    description:
      "A good café can become a hub for conversations, ideas, and relaxation. I will explore bringing a great café experience to ISM.",
  },
  {
    icon: "🏋️",
    title: "Gym Equipment in Hostels",
    description:
      "Fitness facilities should be accessible to everyone. Adding basic gym equipment in hostels can help students stay active and healthy.",
  },
  {
    icon: "🏠",
    title: "Improved Hostel Amenities",
    description:
      "Hostel life should be comfortable and well maintained. I want to work towards better common rooms, cycle stands, and overall hostel facilities.",
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
