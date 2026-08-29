"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 md:w-24 z-[200] flex flex-col items-center pointer-events-none">
      
      {/* Top Logo */}
      <div className="pt-8 md:pt-12 pointer-events-auto">
        <Link href="/" className="text-white text-3xl font-serif italic font-bold tracking-tighter hover:text-gray-300 transition-colors">
          M
        </Link>
      </div>

      {/* Spacer to push icons down */}
      <div className="flex-grow"></div>

      {/* Social Icons & Line */}
      <div className="flex flex-col items-center gap-6 pb-0 pointer-events-auto">
        <a href="https://github.com/blackeagle-25-5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/madhavan3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="https://x.com/Madhava282004" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.instagram.com/yalivox/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
          <FaInstagram size={20} />
        </a>

        {/* Vertical Line */}
        <div className="w-px h-24 md:h-32 bg-gray-600 mt-4"></div>
      </div>
    </div>
  );
}
