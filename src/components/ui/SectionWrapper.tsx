"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  fullHeight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative ${fullHeight ? "min-h-screen" : ""} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
