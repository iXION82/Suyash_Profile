"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl glass-light p-8 md:p-12 min-h-[280px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Quote mark */}
            <div className="text-gold text-6xl font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 italic">
              {testimonials[current].quote}
            </p>
            <div>
              <p className="font-bold text-gold">{testimonials[current].name}</p>
              <p className="text-white/50 text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-gold/20 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-8" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-gold/20 transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
