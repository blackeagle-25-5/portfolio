"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  const { hero, contact } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-[#16171b]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-center items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[695px] h-[calc(92vh-25px)] -translate-x-[25px]"
        >
          {/* Subtle glow behind the image to separate it from the dark background */}
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full translate-y-1/4 scale-75"></div>
          
          {/* User's Image */}
          <img
            src="/profile.png"
            alt={hero.name}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="w-full h-full object-contain object-bottom relative z-10 drop-shadow-2xl pointer-events-none"
          />

          {/* Left and Right Bottom Links */}
          <div className="absolute bottom-12 -left-16 md:-left-32 z-30">
            <Link href="/skills" className="text-white font-bold font-mono uppercase text-sm md:text-base flex items-center gap-2 transition-all hover:-translate-x-2 tracking-widest drop-shadow-lg">
              &larr; Skills
            </Link>
          </div>
          <div className="absolute bottom-12 -right-12 md:-right-32 z-30">
            <Link href="/certifications" className="text-white font-bold font-mono uppercase text-sm md:text-base flex items-center gap-2 transition-all hover:translate-x-2 tracking-widest drop-shadow-lg">
              Certifications &rarr;
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative z-20 mix-blend-difference md:mix-blend-normal">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-1 bg-white mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight drop-shadow-lg">
              I'm {hero.name.split(' ')[0]}, a<br />{hero.role}
            </h1>
            <p className="text-white text-sm mb-12 leading-relaxed max-w-sm drop-shadow-md">
              {hero.description}
            </p>
            
            <Link
              href="/about"
              className="w-16 h-16 bg-[#0d6efd] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg shadow-blue-600/30"
            >
              <ArrowDown size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Empty Center Column to let background image show */}
        <div className="lg:col-span-3 hidden lg:block order-1 lg:order-2"></div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-8 order-3 relative z-20 lg:pl-12">


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4 drop-shadow-md">Experience</h3>
            <p className="text-white text-sm mb-4 leading-relaxed drop-shadow-md">
              Check out my professional journey and where I've worked.
            </p>
            <Link href="/experience" className="text-white text-xs font-bold tracking-widest uppercase hover:text-[#0d6efd] transition-colors flex items-center gap-2 drop-shadow-md">
              View Experience <span>&rarr;</span>
            </Link>
            <div className="w-full h-[1px] bg-white/10 mt-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4 drop-shadow-md">My Work</h3>
            <p className="text-white text-sm mb-4 leading-relaxed drop-shadow-md">
              Explore my latest projects including AI-powered platforms and enterprise solutions.
            </p>
            <Link href="/projects" className="text-white text-xs font-bold tracking-widest uppercase hover:text-[#0d6efd] transition-colors flex items-center gap-2 drop-shadow-md">
              Browse Portfolio <span>&rarr;</span>
            </Link>
            <div className="w-full h-[1px] bg-white/10 mt-8"></div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4 drop-shadow-md">Follow Me</h3>
            <div className="flex gap-4 text-white">
              <a href={contact.github} className="hover:text-white transition-colors"><FaGithub size={18} /></a>
              <a href={contact.linkedin} className="hover:text-white transition-colors"><FaLinkedin size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaYoutube size={18} /></a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
