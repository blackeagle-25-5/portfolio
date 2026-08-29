import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhavan B | Software & Data Engineer",
  description: "Portfolio of Madhavan B, a Software & Data Engineer passionate about AI, software development, and building scalable products.",
  keywords: ["Madhavan B", "Software Engineer", "Data Engineer", "Python", "React", "Next.js", "AI", "Portfolio"],
  openGraph: {
    title: "Madhavan B | Software & Data Engineer",
    description: "Portfolio of Madhavan B, a Software & Data Engineer passionate about AI, software development, and building scalable products.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-primary/30 selection:text-white">

        
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
