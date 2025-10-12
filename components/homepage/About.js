"use client"

import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, Twitter, Smile, Code, User } from "lucide-react";
import { LoadingSpinner } from "../common/Loading";

export function AboutMeSection({
  name="Dnyandeo Shekade",
  role="Fullstack Developer at Yuva Nexus Tech",
  experience="1+ Years Experience",
  description="I work as a Fullstack Developer at Yuva Nexus Tech, where my primary focus is building fullstack web applications. On the frontend, I design and develop responsive, user-friendly UIs using Next.js and Tailwind CSS, while ensuring SEO-friendly structures for better search engine visibility. I also collaborate with my team to integrate APIs and ensure smooth functionality between frontend and backend. Recently, I've been expanding my skills into backend development, working with databases, authentication, and server-side logic.",
  skills="Currently exploring backend development — learning about database integration, authentication systems, server-side rendering in Next.js, and API creation. Along with that, I'm improving my understanding of SEO optimization techniques, performance improvements, and secure application deployment. Proficient in JavaScript, React, Next.js, MongoDB, TailwindCSS, and modern development tools.",
  connectText="Working on fullstack web applications including the BillingCart website - a static e-commerce platform for billing machines and POS printers with WhatsApp integration for B2B customers. Ready to collaborate on exciting projects and build innovative solutions together.",
  email="shekadednyande@gmail.com",
  githubUrl="https://github.com/dnyandeoShekade",
  linkedinUrl="https://www.linkedin.com/in/dnyandeo-shekade-b75016334/",
  twitterUrl="https://x.com/DnyandeoShekade",
  skillsImage="/img/project/skills.png",
  connectImage="/img/project/connect-1.jpg",
}){
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    // Preload critical images
    const imageUrls = [skillsImage, connectImage]
    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = url
      })
    })

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)) // Still show content even if images fail
  }, [skillsImage, connectImage])

  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger for faster loading
        duration: 0.3
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced movement for better performance
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  }

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <section
  id="About"
  className="px-4 sm:px-6 lg:px-12 py-8 sm:py-14 max-w-9xl mx-auto bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden justify-items-center"
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10  max-w-6xl">
  <motion.h2
    className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-left"
    variants={headingVariants}
    initial="hidden"
    animate={controls}
  >
    About Me
  </motion.h2>

  <motion.div
    ref={ref}
    className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-full"
    variants={containerVariants}
    initial="hidden"
    animate={controls}
  >

    {/* Merged Card */}
    <motion.div
      className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 flex flex-col items-center border border-slate-700/50 shadow-lg min-h-[220px] md:col-span-2 w-full"
      variants={itemVariants}
    >
      <div
        className="w-full h-24 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-slate-600/30"
      >
        <Smile className="w-12 h-12 text-yellow-400 drop-shadow-lg" />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 text-center">
        {role}
      </h3>
      <p className="text-nav-link-gray text-sm mb-3 text-center">
        {experience}
      </p>
      <div className="flex items-center mb-2">
        <User className="w-5 h-5 text-nav-link-gray mr-2" />
        <h3 className="text-white text-lg font-semibold">{`Hey there! I'm ${name}`}</h3>
      </div>
      <p className="text-nav-link-gray text-sm leading-relaxed">{description}</p>
    </motion.div>

    {/* Skills & Technologies Card */}
    <motion.div
      className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm rounded-xl flex flex-col border border-slate-700/50 shadow-lg min-h-[220px] overflow-hidden"
      variants={itemVariants}
    >
      <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-800 rounded-t-xl overflow-hidden relative">
        {imagesLoaded ? (
          <img
            src={skillsImage}
            alt="Skills and Technologies"
            className="w-full h-full object-cover rounded-t-xl transition-opacity duration-300"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <LoadingSpinner size="md" color="blue" />
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-end">
        <div className="flex items-center mb-2">
          <Code className="w-5 h-5 text-nav-link-gray mr-2" />
          <h3 className="text-white text-base sm:text-lg font-semibold">Skills & Technologies</h3>
        </div>
        <p className="text-nav-link-gray text-sm leading-relaxed">{skills}</p>
      </div>
    </motion.div>

    {/* Let's Connect Card */}
    <motion.div
      className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm rounded-xl flex flex-col border border-slate-700/50 shadow-lg min-h-[220px] overflow-hidden"
      variants={itemVariants}
    >
      <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-800 rounded-t-xl overflow-hidden relative">
        {imagesLoaded ? (
          <img
            src={connectImage}
            alt="Connect with me"
            className="w-full h-full object-cover rounded-t-xl transition-opacity duration-300"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-700 to-purple-800 flex items-center justify-center">
            <LoadingSpinner size="md" color="white" />
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-end">
        <h3 className="text-white text-base sm:text-lg font-semibold mb-2">
          {"Let's Connect"}
        </h3>
        <p className="text-nav-link-gray text-sm leading-relaxed mb-4">
          {connectText}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`mailto:${email}`}
            className="text-name-blue hover:text-blue-300 flex items-center gap-2 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-800/50"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </Link>
          <Link
            href={githubUrl}
            className="text-name-blue hover:text-blue-300 flex items-center gap-2 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-800/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
          <Link
            href={linkedinUrl}
            className="text-name-blue hover:text-blue-300 flex items-center gap-2 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-800/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href={twitterUrl}
            className="text-name-blue hover:text-blue-300 flex items-center gap-2 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-800/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </Link>
        </div>
      </div>
    </motion.div>
  </motion.div>
</div>
</section>

  )
}