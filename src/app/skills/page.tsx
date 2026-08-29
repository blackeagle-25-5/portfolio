"use client";

import React from "react";
import { motion } from "framer-motion";
import ParticleNetwork from "@/components/ParticleNetwork";
import { FaDatabase, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="fixed inset-0 bg-[#16171b] z-[100] flex flex-col justify-center items-center p-4 md:p-8 overflow-x-hidden overflow-y-auto">
      {/* Background Animation */}
      <ParticleNetwork />

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex justify-center items-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
          <ArrowLeft size={20} />
        </Link>
      </div>

      {/* Huge Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end pb-0 pointer-events-none select-none z-0 overflow-hidden"
      >
        <h1 className="text-[100px] md:text-[150px] lg:text-[220px] font-bold text-white/5 whitespace-nowrap leading-[0.8] -mb-10 md:-mb-16">
          Skills
        </h1>
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center min-h-[100vh] pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Data Engineer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-10 border border-white/10 hover:border-white/20 transition-all flex flex-col min-h-[500px] lg:min-h-[600px] bg-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaDatabase className="text-2xl md:text-3xl text-white" />
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Data Engineer</h2>
            </div>
            
            <p className="text-white leading-relaxed mb-6 font-mono text-xs md:text-sm">
              Architecting and building scalable data pipelines, data warehouses, and AI-driven analytics.
            </p>

            <div className="mb-6">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-3">I Like To Code In</h3>
              <p className="text-white font-mono text-xs md:text-sm leading-relaxed">
                Python, PySpark, SQL, C++
              </p>
            </div>

            <div className="flex-grow">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-3">Tools</h3>
              <ul className="space-y-2 font-mono text-xs md:text-sm text-white">
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> Snowflake, Databricks</li>
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> Google Cloud Platform (GCP)</li>
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> LangChain, LangGraph, RAG</li>
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> LLMs (OpenAI, Claude)</li>
              </ul>
            </div>
          </motion.div>

          {/* Full-Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-6 md:p-10 border border-white/10 hover:border-white/20 transition-all flex flex-col min-h-[500px] lg:min-h-[600px] bg-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaLaptopCode className="text-2xl md:text-3xl text-white" />
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Full-Stack</h2>
            </div>
            
            <p className="text-white leading-relaxed mb-6 font-mono text-xs md:text-sm">
              Building scalable products from zero to production with modern frameworks and clean architecture.
            </p>

            <div className="mb-6">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-3">I Like To Code In</h3>
              <p className="text-white font-mono text-xs md:text-sm leading-relaxed">
                JavaScript, TypeScript, React.js, Next.js
              </p>
            </div>

            <div className="flex-grow">
              <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-3">Tools</h3>
              <ul className="space-y-2 font-mono text-xs md:text-sm text-white">
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> Node.js, FastAPI</li>
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> Cloud Run, Serverless</li>
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> Netlify, TailwindCSS</li>
                <li className="flex items-start"><span className="text-white font-bold mr-2">•</span> Git, GitHub Actions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
