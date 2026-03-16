"use client";

import { motion } from "framer-motion";

interface GalleryGridProps {
  images: { src: string; alt: string }[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  // Generate gradient placeholders since we don't have real images
  const gradients = [
    "from-navy-700 to-navy-500",
    "from-navy-600 to-cyan-accent/20",
    "from-navy-700 to-gold/20",
    "from-navy-800 to-navy-600",
    "from-navy-600 to-navy-400",
    "from-navy-700 to-cyan-accent/10",
  ];

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="break-inside-avoid group cursor-pointer"
        >
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${
              gradients[i % gradients.length]
            }`}
            style={{ height: `${200 + (i % 3) * 80}px` }}
          >
            {/* Placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-4xl mb-2 opacity-40">📸</div>
                <p className="text-white/40 text-sm">{img.alt}</p>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
            <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
