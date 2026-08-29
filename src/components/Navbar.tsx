"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { hero } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-6">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="font-serif italic text-3xl">M</span>
        </Link>

        {/* Center Text */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover:text-blue-400 transition-colors font-mono tracking-widest text-sm uppercase drop-shadow-md">
            Say Hello
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#0d6efd] text-[#0d6efd] rounded hover:bg-[#0d6efd]/10 transition-colors font-mono text-sm shadow-md"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-white hover:text-white relative z-50 drop-shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#16171b] absolute top-full left-0 w-full flex flex-col items-center pt-12 space-y-8 h-screen border-t border-white/10 shadow-2xl"
        >
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-white hover:text-blue-400 font-mono text-lg transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Say Hello
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 font-mono text-lg transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
