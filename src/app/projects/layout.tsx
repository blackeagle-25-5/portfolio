import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Madhavan B",
  description: "Explore the portfolio of software and data engineering projects built by Madhavan B, including AI applications and automation tools.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
