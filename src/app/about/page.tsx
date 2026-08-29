"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <div className="fixed inset-0 bg-[#16171b] z-[100] flex flex-col items-center overflow-x-hidden overflow-y-auto pl-16 md:pl-24">
      {/* Top Center Back Button */}
      <div className="absolute md:fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[250]">
        <Link href="/" className="w-10 h-10 md:w-12 md:h-12 border border-white/30 rounded-full flex justify-center items-center text-white hover:bg-white/10 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </Link>
      </div>

      

      <div className="w-full flex-grow pt-24 pb-12 flex justify-center items-center">
        <AboutSection />
      </div>
    </div>
  );
}
