"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

const projects = [
  {
    title: "MinifyPic",
    tech: "#Next.js #Tailwind #ImageOptimization",
    desc: "A web application for compressing and optimizing images with high quality.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&auto=format&fit=crop&q=60",
    link: "https://minifypic.com",
    github: ""
  },
  {
    title: "Yalivox Resume Builder",
    tech: "#React #Next.js #Tailwind",
    desc: "A professional resume builder with customizable templates and instant PDF generation.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
    link: "https://yalivox.com",
    github: ""
  },
  {
    title: "Angel One Algo Bot",
    tech: "#Python #TradingAPI #AngelOne",
    desc: "An automated options trading bot integrated with the Angel One platform for algorithmic trade execution.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60",
    link: "",
    github: "https://github.com/blackeagle-25-5/alogbot2026"
  },
  {
    title: "Medicine Reminder",
    tech: "#Flutter #Dart #MobileApp",
    desc: "A mobile application designed to track and remind users to take their daily medications on time.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5e478ac5b?w=800&auto=format&fit=crop&q=60",
    link: "",
    github: "https://github.com/blackeagle-25-5/medicine_reminder"
  }
];

export default function ProjectsPage() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col justify-center items-center overflow-hidden">
      
      {/* Huge Background Text */}
      <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0 pointer-events-none whitespace-nowrap">
        WORK
      </h1>

      {/* Top Center Back Button */}
      <div className="absolute md:fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[250]">
        <Link href="/" className="w-10 h-10 md:w-12 md:h-12 border border-white/30 rounded-full flex justify-center items-center text-white hover:bg-white/10 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </Link>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-center h-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={40}
            slideToClickedSlide={true}
            className="w-full py-12 !overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-auto">
                {({ isActive }) => (
                  <div className={`group transition-all duration-1000 ease-out w-[320px] md:w-[380px] h-[450px] md:h-[500px] flex perspective-[1000px] ${isActive ? 'scale-100 hover:scale-105' : 'scale-95 hover:scale-100'}`}>
                    
                    <div 
                      className={`relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl ${isActive ? '[transform:rotateY(180deg)]' : ''}`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* FRONT CARD (INACTIVE - White) */}
                      <div 
                        className="absolute inset-0 w-full h-full bg-[#f4f4f5] p-8 md:p-10 flex flex-col justify-center items-center text-center rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <h3 className="text-2xl font-bold text-black mb-6 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {/* BACK CARD (ACTIVE - Black) */}
                      <div 
                        className="absolute inset-0 w-full h-full bg-black border border-white/20 p-4 flex flex-col justify-between rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl [transform:rotateY(180deg)]"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {/* Image area */}
                        <div className="w-full h-[50%] bg-white/10 rounded-tl-[24px] rounded-br-2xl rounded-tr-md rounded-bl-md overflow-hidden relative mb-4">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.image})` }}
                          ></div>
                        </div>

                        {/* Separator line */}
                        <div className="w-full h-px bg-white/20 mb-4"></div>

                        {/* Tech Stack */}
                        <div className="flex-grow">
                          <p className="text-white text-sm md:text-base font-medium">{project.tech}</p>
                        </div>

                        {/* Footer (Button + Icon) */}
                        <div className="flex items-center justify-between mt-4">
                          {project.link ? (
                            <a href={project.link} className="bg-white text-black font-bold py-3 px-8 rounded-full rounded-br-none hover:bg-gray-200 transition-colors">
                              Visit
                            </a>
                          ) : (
                            <div></div>
                          )}
                          {project.github ? (
                            <a href={project.github} className="text-white hover:text-gray-300 transition-colors">
                              <FaGithub size={32} />
                            </a>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

    </div>
  );
}
