"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || "Failed to send message");
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-light rounded-3xl p-8 space-y-5"
      onSubmit={handleSubmit}
    >
      {status === "success" && (
        <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-200 text-sm mb-4">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-200 text-sm mb-4">
          Error: {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
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
            required
            value={formData.email}
            onChange={handleChange}
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
          required
          value={formData.subject}
          onChange={handleChange}
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
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your ideas..."
          className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
        />
      </div>
      <motion.button
        whileHover={status !== "loading" ? { scale: 1.02 } : {}}
        whileTap={status !== "loading" ? { scale: 0.98 } : {}}
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark rounded-xl font-bold text-navy-950 text-lg hover:shadow-lg hover:shadow-gold/20 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-navy-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
}
