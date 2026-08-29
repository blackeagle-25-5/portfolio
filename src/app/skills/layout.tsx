import type { Metadata } from "next";
import SocialSidebar from "@/components/SocialSidebar";

export const metadata: Metadata = {
  title: "Skills | Madhavan B",
  description: "Technical skills, programming languages, and tools utilized by Madhavan B.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <SocialSidebar />
      {children}
    </div>
  );
}
