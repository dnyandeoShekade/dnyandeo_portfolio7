import Link from "next/link"

export function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto p-4 bg-black mt-8 rounded-2xl border border-gray-800 shadow-lg flex items-center justify-between">
      <div className="text-[#508CFF] text-2xl font-semibold md:text-3xl">
        Dnyandeo Shekade
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        <Link href="#home" scroll={true} className="px-4 py-2 rounded-lg bg-[#042077] text-white text-base font-medium md:text-lg">
          Home
        </Link>

        <Link
          href="#project"
          scroll={true}
          className="text-nav-link-gray text-base font-medium hover:text-white transition-colors md:text-lg"
        >
          Projects
        </Link>

        <Link
          href="#About"
          scroll={true}
          className="text-nav-link-gray text-base font-medium hover:text-white transition-colors md:text-lg"
        >
        About Me
        </Link>
        <Link
          href="#contact"
          scroll={true}
          className="text-nav-link-gray text-base font-medium hover:text-white transition-colors md:text-lg"
        >
         Contact
        </Link>
      </div>
    </nav>
  )
}
