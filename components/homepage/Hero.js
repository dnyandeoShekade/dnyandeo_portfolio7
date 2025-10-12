import { FiArrowDown, FiArrowUpRight } from "react-icons/fi"
import Link from "next/link"

export function HeroSection({
  title = "DESIGN. CODE. INNOVATION.",
  name = "Dnyandeo shekade",
  highlightName = true,
  highlightColor = "#4C87DC",
  description = "A passionate developer crafting intuitive and visually stunning web applications that bridge the gap between imagination and reality.",
  primaryButtonText = "View My Work",
  primaryButtonLink = "#work",
  secondaryButtonText = "Get In Touch",
  secondaryButtonLink = "#contact",
  scrollText = "Discover More",
  scrollLink = "#about"
}) {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 flex-grow grid-background">
      <h1 className="text-[#4C87DC] text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
        {title}
      </h1>
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
        Hi! I&apos;m {highlightName ? (
          <span className="text-[#4C87DC]" style={{ color: highlightColor }}>
            {name}
          </span>
        ) : (
          name
        )}
      </h2>
      <p className="text-nav-link-gray text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <Link href="#project" scroll={true}>
          <button className="group relative bg-gradient-to-r from-[#4C87DC] to-[#477BC9] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#4C87DC]/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#4C87DC]/50 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              {primaryButtonText}
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <FiArrowUpRight className="w-3 h-3" />
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5A95E6] to-[#5185D3] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </Link>
        <Link href={secondaryButtonLink} passHref>
          <button className="group relative bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:border-[#4C87DC] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-600/50 active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              {secondaryButtonText} 
              <FiArrowUpRight className="w-5 h-5 group-hover:rotate-45 group-hover:text-[#4C87DC] transition-all duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4C87DC]/10 to-[#477BC9]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </Link>
      </div>
      <Link href={scrollLink} className="group flex flex-col items-center text-nav-link-gray hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2">
        <span className="text-base md:text-lg mb-2 group-hover:text-[#4C87DC] transition-colors duration-300">{scrollText}</span>
        <div className="w-8 h-8 rounded-full border border-nav-link-gray group-hover:border-[#4C87DC] flex items-center justify-center group-hover:bg-[#4C87DC]/10 transition-all duration-300">
          <FiArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </div>
      </Link>
    </section>
  )
}