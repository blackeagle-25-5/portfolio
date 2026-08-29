"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 py-32 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-mono mb-4 text-sm">
          04. What's Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {contact.title}
        </h2>
        <p className="text-white text-lg mb-12 leading-relaxed">
          {contact.message}
        </p>
        
        <a
          href={`mailto:${contact.email}`}
          className="inline-block bg-transparent hover:bg-primary/10 text-primary border border-primary px-10 py-4 rounded-lg font-medium transition-colors"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
