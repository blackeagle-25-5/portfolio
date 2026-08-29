"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useState } from "react";

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const [activeTabId, setActiveTabId] = useState(experience[0].id);

  const activeExp = experience.find((exp) => exp.id === activeTabId);

  return (
    <section id="experience" className="container mx-auto px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-[1px] w-full bg-gray-700"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible hide-scrollbar relative">
            <div className="absolute left-0 top-0 md:bottom-0 w-full md:w-[2px] h-[2px] md:h-full bg-gray-700 z-0" />
            <motion.div
              className="absolute left-0 top-0 w-[2px] bg-primary z-10 hidden md:block"
              initial={false}
              animate={{
                top: `${experience.findIndex((e) => e.id === activeTabId) * 48}px`,
                height: "48px"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            {experience.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTabId(exp.id)}
                className={`px-6 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-200 relative z-10 md:h-12 border-b-2 md:border-b-0 md:border-l-2 border-transparent ${
                  activeTabId === exp.id
                    ? "text-primary border-primary md:border-transparent bg-primary/5"
                    : "text-white hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-grow min-h-[300px]">
            {activeExp && (
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {activeExp.title}{" "}
                  <span className="text-primary">@ {activeExp.company}</span>
                </h3>
                <p className="font-mono text-sm text-white mb-6">{activeExp.period}</p>
                <ul className="space-y-4">
                  {activeExp.description.map((desc, i) => (
                    <li key={i} className="flex text-white">
                      <span className="text-primary mr-3 mt-1.5 text-xs">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
