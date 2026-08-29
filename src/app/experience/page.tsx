"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ExperienceSection from "@/components/ExperienceSection";

export default function ExperiencePage() {
  return (
    <div className="fixed inset-0 bg-[#16171b] z-[100] flex flex-col items-center overflow-x-hidden overflow-y-auto">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex justify-center items-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
          <ArrowLeft size={20} />
        </Link>
      </div>

      <div className="w-full flex-grow pt-24 pb-12 flex justify-center items-center">
        <ExperienceSection />
      </div>
    </div>
  );
}
