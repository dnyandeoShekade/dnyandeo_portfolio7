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
          <button className="bg-[#477BC9] text-white px-8 py-6 rounded-lg text-lg font-medium hover:bg-home-button-bg/90 transition-colors">
            {primaryButtonText}
          </button>
        </Link>
        <Link href={secondaryButtonLink} passHref>
          <button className="bg-transparent border border-gray-700 text-white px-8 py-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            {secondaryButtonText} <FiArrowUpRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
      <Link href={scrollLink} className="flex flex-col items-center text-nav-link-gray hover:text-white transition-colors">
        <span className="text-base md:text-lg mb-2">{scrollText}</span>
        <FiArrowDown className="w-6 h-6" />
      </Link>
    </section>
  )
}