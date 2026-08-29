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

        <div className="w-full max-w-3xl space-y-4 text-white leading-relaxed text-lg">
          {about.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Education Section */}
        {about.education && (
          <div className="mt-16 w-full max-w-3xl text-white">
            <h3 className="text-xl font-bold mb-6 text-white/90">Education</h3>
            <div className="bg-[#222] border border-white/10 p-6 rounded-lg relative hover:border-white/30 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">{about.education.degree}</h4>
                  <p className="text-blue-400 font-mono text-sm mt-2">{about.education.school}</p>
                </div>
                <div className="text-left md:text-right font-mono text-sm text-white/60 shrink-0">
                  <p>{about.education.period}</p>
                  <p className="mt-1">{about.education.location}</p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-sm text-white/80"><span className="font-bold text-white">Score:</span> {about.education.score}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
