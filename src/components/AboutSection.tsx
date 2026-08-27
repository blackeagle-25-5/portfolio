"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            {about.title}
          </h2>
          <div className="h-[1px] w-full max-w-md bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-4 text-gray-400 leading-relaxed text-lg">
            {about.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <p className="pt-4 text-white">Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {about.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-gray-300 before:content-['▹'] before:text-primary before:mr-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            <div className="relative z-10 rounded-lg overflow-hidden glass aspect-square transition-all duration-300 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10" />
              <img
                src="/engineer_headshot.png"
                alt="Alex Dev"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x400/1e293b/0ea5e9?text=Alex+Dev";
                }}
              />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-5 translate-y-5 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 -z-10"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
