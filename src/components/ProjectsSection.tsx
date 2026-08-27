"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="container mx-auto px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="h-[1px] w-full max-w-md bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400/1e293b/0ea5e9?text=${project.title.replace(/ /g, '+')}`;
                  }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-primary font-mono text-xs mb-1">Featured Project</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                    <a href={project.githubUrl} className="hover:text-primary transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.liveUrl} className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-gray-500 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
