"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AgendaCard from "@/components/ui/AgendaCard";

const agendaItems = [
  {
    icon: "💰",
    title: "Fair Festival Funding",
    description:
      "Every fest deserves a fair shot. I’ll work to make sure funds are distributed properly so no event feels overlooked and everyone gets a chance to shine.",
  },
  {
    icon: "🏋️",
    title: "Gym Facilities in Hostels",
    description:
      "Not everyone has time to go far just to work out. I want to bring decent gym facilities closer to where you live — right in the hostels.",
  },
  {
    icon: "🕒",
    title: "Flexible In-Time",
    description:
      "College life doesn’t run on a strict clock. I’ll push for a more flexible in-time while still keeping safety in mind.",
  },
  {
    icon: "🏆",
    title: "Coach Accountability",
    description:
      "If we’re putting in the effort, the system should too. Coaches should be evaluated based on Inter-IIT results so our teams get the guidance they deserve.",
  },
  {
    icon: "🛺",
    title: "Better Campus Transport",
    description:
      "Getting around campus shouldn’t be a struggle. More e-rickshaws and better transport can save time and make daily life easier.",
  },
  {
    icon: "📝",
    title: "Structured Fest Feedback",
    description:
      "After every fest, your voice should matter. I want proper feedback systems so events actually improve year after year.",
  },
  {
    icon: "📚",
    title: "Hostel Study Rooms",
    description:
      "Sometimes you just need a quiet place to focus. Dedicated study rooms in hostels can really help with that.",
  },
  {
    icon: "🍽️",
    title: "Mess Monitoring & Quality",
    description:
      "We all know mess food can be hit or miss. Regular checks and honest feedback systems can help keep the quality consistent.",
  },
  {
    icon: "🍴",
    title: "Flexible Mess Access",
    description:
      "You shouldn’t be stuck with just one mess. A flexible system where you can eat in any hostel would make things much more convenient.",
  },
  {
    icon: "📊",
    title: "Transparent Spending",
    description:
      "It’s your money too — you deserve to know where it’s going. I’ll push for clear and open reporting of how funds are used.",
  },

  {
    icon: "🧺",
    title: "Washing Machines in Hostels",
    description:
      "Doing laundry shouldn’t take hours or be a headache. I want to make sure every hostel has proper washing machines that actually work when you need them.",
  },

  {
    icon: "📶",
    title: "Better Internet Speeds",
    description:
      "Slow internet is frustrating, especially when you actually need it. I’ll work towards making campus WiFi faster and more reliable.",
  },
  {
    icon: "🎉",
    title: "Better Organized Fests",
    description:
      "Fests should feel exciting, not chaotic. With better planning and execution, we can make them smoother and more enjoyable for everyone.",
  },
  {
    icon: "🛣️",
    title: "Better Roads & Infrastructure",
    description:
      "Small things like better roads and pathways can make a big difference in everyday life. I’ll push for steady improvements here.",
  },
  {
    icon: "🥇",
    title: "Stronger Inter IIT Performance",
    description:
      "We have the talent — we just need the right support. I want to help our teams perform better across all Inter IIT events.",
  },
  {
    icon: "💧",
    title: "More RO & Water Coolers",
    description:
      "Access to clean drinking water should never be an issue. More RO systems and coolers can fix that easily.",
  },
  {
    icon: "☕",
    title: "A Quality Campus Café",
    description:
      "A good café isn’t just about food — it’s a place to relax, hang out, and have conversations. I’d love to bring that vibe to campus.",
  },
  {
    icon: "🏠",
    title: "Improved Hostel Amenities",
    description:
      "Hostels should feel comfortable, not just functional. Better common spaces and facilities can really improve daily life.",
  },
];

export default function AgendaSection() {
  return (
    <SectionWrapper id="agenda" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
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
