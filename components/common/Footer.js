import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
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
    </div>
  );
}
