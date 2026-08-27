import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        <a href={portfolioData.contact.github} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
          <FaGithub size={20} />
        </a>
        <a href={portfolioData.contact.linkedin} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href={portfolioData.contact.twitter} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
          <FaTwitter size={20} />
        </a>
      </div>
      <p className="text-sm">
        Designed & Built by <span className="text-primary">{portfolioData.hero.name}</span>
      </p>
    </footer>
  );
}
