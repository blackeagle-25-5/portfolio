import type { Metadata } from "next";
import SocialSidebar from "@/components/SocialSidebar";

export const metadata: Metadata = {
  title: "Experience | Madhavan B",
  description: "Professional experience and internship history of Madhavan B.",
};

export default function ExperienceLayout({
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
