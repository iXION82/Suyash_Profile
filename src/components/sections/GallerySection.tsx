"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GalleryGrid from "@/components/ui/GalleryGrid";

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Annual Fest Celebration" },
  { src: "/gallery/2.jpg", alt: "Student Town Hall Meeting" },
  { src: "/gallery/3.jpg", alt: "Tech Workshop Session" },
  { src: "/gallery/4.jpg", alt: "Campaign Rally on Campus" },
  { src: "/gallery/5.jpg", alt: "Cultural Night Performance" },
  { src: "/gallery/6.jpg", alt: "Community Service Day" },
];

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">
            Moments
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-3">
            Campaign{" "}
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A glimpse into the events, interactions, and moments that define this campaign.
          </p>
        </motion.div>

        <GalleryGrid images={galleryImages} />
      </div>
    </SectionWrapper>
  );
}
