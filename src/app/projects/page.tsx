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
    title: "AI Customer Support",
    tech: "#Python #LangChain #OpenAI",
    desc: "A conversational AI support agent that handles customer inquiries with context-aware responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Dashboard",
    tech: "#Next.js #Tailwind #Prisma",
    desc: "A full-stack admin dashboard for managing inventory, tracking sales, and analyzing customer data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Data Pipeline",
    tech: "#PySpark #AWS #Snowflake",
    desc: "A highly scalable financial data pipeline processing millions of transactions in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Real-time Chat",
    tech: "#React #Socket.io #Node.js",
    desc: "A low-latency messaging application with real-time presence and multimedia sharing.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Smart Home Hub",
    tech: "#C++ #RaspberryPi #MQTT",
    desc: "An IoT centralized controller bridging various smart home protocols into a single interface.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Crypto Tracker",
    tech: "#Vue.js #Firebase #API",
    desc: "A sleek cryptocurrency portfolio tracker with live market data and profit/loss analytics.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Testing Framework",
    tech: "#Selenium #Python #PyTest",
    desc: "An automated end-to-end testing framework for continuous integration pipelines.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Health Booking",
    tech: "#Angular #SpringBoot #MySQL",
    desc: "A secure medical appointment booking system with automated reminders and doctor schedules.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "ML Classifier",
    tech: "#Scikit-Learn #Pandas",
    desc: "A predictive machine learning model for identifying high-risk churn customers.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
  },
  {
    title: "Social Analytics",
    tech: "#React #D3.js #Express",
    desc: "A visual dashboard for tracking brand sentiment and engagement across social platforms.",
    image: "https://images.unsplash.com/photo-1432888116553-692bce649962?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#"
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
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <Link href="/" className="w-12 h-12 bg-white rounded-full flex justify-center items-center text-black hover:scale-105 transition-transform shadow-lg">
          <ArrowLeft size={24} className="stroke-[3]" />
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
                          <a href={project.link} className="bg-white text-black font-bold py-3 px-8 rounded-full rounded-br-none hover:bg-gray-200 transition-colors">
                            Visit
                          </a>
                          <a href={project.github} className="text-white hover:text-gray-300 transition-colors">
                            <FaGithub size={32} />
                          </a>
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
