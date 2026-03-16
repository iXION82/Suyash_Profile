"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-light rounded-3xl p-8 space-y-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@campus.edu"
            className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What's this about?"
          className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Share your ideas..."
          className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark rounded-xl font-bold text-navy-950 text-lg hover:shadow-lg hover:shadow-gold/20 transition-shadow"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
