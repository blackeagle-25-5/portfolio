import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Madhavan B",
  description: "Learn more about Madhavan B, his background, education, and technical skills as a Software & Data Engineer.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
