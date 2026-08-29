"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import ParticleNetwork from "@/components/ParticleNetwork";

const certificates = [
  {
    type: "image-heavy",
    title: "Celonis Process Mining",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60"
  },
  {
    type: "text-heavy",
    title: "AWS Certified Solutions Architect",
    tags: ["#AWS", "#Cloud", "#Architecture"],
    desc: "Issued by Amazon Web Services"
  },
  {
    type: "image-heavy",
    title: "Google Data Engineer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60"
  },
  {
    type: "text-heavy",
    title: "Zscaler Certification",
    tags: ["#Zscaler", "#Security", "#Network"],
    desc: "Issued by Zscaler Training"
  },
  {
    type: "text-heavy",
    title: "Python Professional",
    tags: ["#Python", "#Programming", "#Developer"],
    desc: "Issued by Python Institute"
  }
];

export default function CertificationsPage() {
  return (
    <div className="fixed inset-0 bg-[#16171b] z-[100] flex flex-col items-center overflow-x-hidden overflow-y-auto font-sans">
      
      {/* Background Animation */}
      <ParticleNetwork />

      {/* Huge Background Text */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[18vw] md:text-[14vw] font-black text-white/5 select-none tracking-tighter">
          CERTIFICATIONS
        </h1>
      </div>

      {/* Top Left Logo */}
      <div className="fixed top-6 md:top-8 left-6 md:left-8 z-50">
        <span className="font-serif italic font-bold text-2xl md:text-3xl text-white">M</span>
      </div>

      {/* Top Center Back Button */}
      <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50">
        <Link href="/" className="w-10 h-10 border-2 border-white/30 rounded-full flex justify-center items-center text-white hover:bg-white hover:text-black transition-colors duration-300 bg-[#16171b]/50 backdrop-blur-sm">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </Link>
      </div>

      {/* Left Sidebar Socials (Desktop Only) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50 hidden xl:flex">
        <a href="#" className="text-white/70 hover:text-white transition-colors"><FaLinkedin size={22} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors"><FaGithub size={22} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors"><FaTwitter size={22} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors"><FaFacebook size={22} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors"><FaYoutube size={22} /></a>
        <div className="w-[2px] h-24 bg-white/30 mt-2"></div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full w-full max-w-[500px] mx-auto lg:max-w-none"
            >
              {cert.type === "image-heavy" ? (
                // Image Heavy Card (Dark)
                <div className="border border-white/10 bg-[#222] flex flex-col h-[340px] md:h-[380px] transition-transform duration-300 hover:scale-[1.02] shadow-xl">
                  <div className="flex-grow bg-[#111] relative border-b border-white/10 p-4">
                    <div 
                      className="absolute inset-4 bg-cover bg-center border border-white/10"
                      style={{ backgroundImage: `url(${cert.image})` }}
                    ></div>
                    {/* Overlay for aesthetic */}
                    <div className="absolute inset-4 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 md:p-5 text-center">
                    <h3 className="text-white font-bold text-base md:text-lg">{cert.title}</h3>
                  </div>
                </div>
              ) : (
                // Text Heavy Card (Dark Glass)
                <div className="border border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-6 md:p-10 h-[340px] md:h-[380px] transition-transform duration-300 hover:scale-[1.02] shadow-xl">
                  <div className="flex-grow flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg md:text-2xl mb-4 md:mb-6">{cert.title}</h3>
                    <div className="w-full h-[2px] bg-white/20 mb-4 md:mb-5"></div>
                    <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-2 mb-4 md:mb-6">
                      {cert.tags?.map((tag, i) => (
                        <span key={i} className="text-blue-400 font-bold text-xs md:text-sm tracking-wide">{tag}</span>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs md:text-sm font-medium">{cert.desc}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Socials */}
        <div className="flex xl:hidden justify-center items-center gap-6 mt-16 pb-8">
          <a href="#" className="text-white/70 hover:text-white transition-colors"><FaLinkedin size={24} /></a>
          <a href="#" className="text-white/70 hover:text-white transition-colors"><FaGithub size={24} /></a>
          <a href="#" className="text-white/70 hover:text-white transition-colors"><FaTwitter size={24} /></a>
          <a href="#" className="text-white/70 hover:text-white transition-colors"><FaFacebook size={24} /></a>
          <a href="#" className="text-white/70 hover:text-white transition-colors"><FaYoutube size={24} /></a>
        </div>
      </div>

    </div>
  );
}
