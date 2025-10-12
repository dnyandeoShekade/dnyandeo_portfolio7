import Link from "next/link";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <div id="contact" className="bg-gradient-to-br bg-[#050C1F] text-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Section 1: Personal Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Dnyandeo Shekade</h1>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Fulltime Frontend Developer passionate about building real world web applications.
          </p>
          <div className="flex items-center gap-2 border border-green-500 rounded-full px-4 py-2 w-fit mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 text-sm font-medium">
              Available for hire
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-base mb-2">
            <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
            <span>Akurdi, Pune, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-base mb-2">
            <MdEmail className="w-5 h-5 text-gray-400" />
            <a href="mailto:shekadednyande@gmail.com" className="hover:underline">
              shekadednyande@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-base">
            <MdPhone className="w-5 h-5 text-gray-400" />
            <a href="tel:9146704407" className="hover:underline">
              +91 9146704407
            </a>
          </div>
        </div>

        {/* Section 2: Navigation */}
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold mb-4 uppercase text-gray-400 tracking-wider">
            Navigation
          </h2>
          <nav className="grid gap-3 text-gray-300 text-lg">
            <Link href="#" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Blog
            </Link>
          </nav>
        </div>

        {/* Section 3: Technologies */}
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold mb-4 uppercase text-gray-400 tracking-wider">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">JavaScript</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">React</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">Next.js</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">Tailwind CSS</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">MongoDB</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">SQL</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">and more...</span>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/dnyandeoShekade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/dnyandeo-shekade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="mailto:shekadednyande@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <MdEmail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Dnyandeo Shekade. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
