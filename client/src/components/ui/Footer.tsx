import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; 2025 <span className="text-red-900">DevX</span>. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/MuhammadDevX"
              className="hover:text-red-700"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-ijaz-659634295"
              className="hover:text-red-700"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
