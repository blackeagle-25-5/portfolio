import type { Metadata } from "next";
import SocialSidebar from "@/components/SocialSidebar";

export const metadata: Metadata = {
  title: "Certifications | Madhavan B",
  description: "Professional certifications and achievements of Madhavan B.",
};

export default function CertificationsLayout({
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
