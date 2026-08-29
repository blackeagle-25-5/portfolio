import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 flex justify-center items-center">
      <Link href="/" className="text-xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span className="text-blue-500 font-mono">{"</>"}</span> 
        M
      </Link>
    </footer>
  );
}
