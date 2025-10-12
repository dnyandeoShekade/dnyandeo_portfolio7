'use client';
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: "#home", label: "Home", isActive: true },
    { href: "#project", label: "Projects", isActive: false },
    { href: "#About", label: "About Me", isActive: false },
    { href: "#contact", label: "Contact", isActive: false }
  ]

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 py-3 sm:p-4 bg-black/90 backdrop-blur-sm mt-4 sm:mt-8 rounded-xl sm:rounded-2xl border border-gray-800 shadow-lg relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#508CFF] text-xl sm:text-2xl md:text-3xl font-semibold">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Dnyandeo Shekade
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              className={`px-4 py-2 rounded-lg font-medium text-lg transition-all duration-300 ${
                item.isActive
                  ? 'bg-[#042077] text-white shadow-lg'
                  : 'text-nav-link-gray hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-xl shadow-xl transition-all duration-300 overflow-hidden ${
        isMenuOpen 
          ? 'opacity-100 visible transform translate-y-0 max-h-96' 
          : 'opacity-0 invisible transform -translate-y-4 max-h-0'
      }`}>
        <div className="p-4 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              onClick={closeMenu}
              className={`block w-full px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 transform ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              } ${
                item.isActive
                  ? 'bg-[#042077] text-white shadow-lg'
                  : 'text-nav-link-gray hover:text-white hover:bg-gray-800/50'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] animate-fadeIn"
          onClick={closeMenu}
        />
      )}
    </nav>
  )
}
