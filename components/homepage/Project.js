"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa"

export function ProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const headingVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      } 
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 25
      } 
    },
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      rotate: 5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 2,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.2
      } 
    },
    hover: {
      scale: 1.02,
      rotate: 0,
      y: -5,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  // Snake animation variants
  const snakeVariants = {
    animate: {
      pathLength: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 2
      }
    }
  }

  const experiences = [
    {
      id: 1,
      slug: "billing-cart",
      title: "BillingCart Website",
      company: "Yuva Nexus Tech",
      description:
        "Built a static e-commerce web application designed to showcase billing machines, POS printers, and accessories for B2B customers. The platform focuses on product discovery and direct customer interaction via WhatsApp, instead of using a traditional cart system – based on specific client requirements.",
      tags: ["Next.js", "File-based Routing", "Dynamic Slug Pages", "Server-side Rendering", "WhatsApp Integration"],
      image: "/img/project/project-1.png",
      imageRotation: "rotate-3",
      liveUrl: "https://billingcart.in/",
      detailsUrl: "/project/billing-cart"
    },
    {
      id: 2,
      slug: "yuva-nexus",
      title: "Yuva Nexus",
      company: "Yuva Nexus",
      description:
        "A professional platform developed for Yuva Nexus to connect students and young professionals with opportunities for growth. The website features an elegant UI, responsive design, and smooth animations — built using modern web technologies for a seamless user experience.",
      tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
      image: "/img/project/project-2.png",
      imageRotation: "-rotate-3",
      // liveUrl: "https://yuvanexus.com",
      detailsUrl: "/project/yuva-nexus"
    },
  ]

  return (
    <section id="project" className="px-4 py-16 max-w-8xl p-5 mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 overflow-hidden">
      <motion.h2
        className="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                   text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-16 drop-shadow-lg"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Work Experience
      </motion.h2>

      <motion.div 
        ref={ref} 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="group grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-20 items-start"
            variants={itemVariants}
            whileHover={{ 
              y: -3,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            {/* Left Column: Project Content */}
            <motion.div 
              className="relative md:pr-8 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.5, ease: "easeOut" }}
            >
              {/* Animated Timeline Dot */}
              <motion.div 
                className="absolute left-0 top-0 mt-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full z-10 hidden md:block shadow-lg"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.4, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)", transition: { duration: 0.3 } }}
              />
              
              <div className="md:pl-8 space-y-3">
                {/* Animated Badge */}
                <motion.span 
                  className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-medium px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, borderColor: "rgba(59, 130, 246, 0.6)", transition: { duration: 0.2 } }}
                >
                  Project {exp.id}
                </motion.span>

                {/* Animated Title */}
                <motion.h3 
                  className="text-white text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-500"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.4, ease: "easeOut" }}
                >
                  {exp.title}
                </motion.h3>

                {/* Animated Company */}
                <motion.p 
                  className="text-purple-300 text-lg font-medium mb-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.4, ease: "easeOut" }}
                >
                  {exp.company}
                </motion.p>

                {/* Animated Description */}
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.4, ease: "easeOut" }}
                >
                  {exp.description}
                </motion.p>

                {/* Animated Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.3 }}
                >
                  {exp.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 hover:border-blue-400 transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 + tagIndex * 0.05, duration: 0.3, ease: "easeOut" }}
                      whileHover={{ 
                        scale: 1.03, 
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        y: -1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Navigation Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.9, duration: 0.4, ease: "easeOut" }}
                >
                  {/* View Details Button */}
                  <Link href={exp.detailsUrl}>
                    <motion.button
                      className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                    >
                      <span>View Details</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <FaArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </Link>

                  {/* Live Demo Button */}
                  {exp.liveUrl && (
                    <motion.a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-transparent border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Animated Project Screenshot */}
            <motion.div 
              className="w-full flex justify-center md:justify-start"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <Link href={exp.detailsUrl} className="block">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover="hover"
                >
                  {/* Snake Animation Border */}
                  <svg 
                    className="absolute -inset-1 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2,2 L98,2 L98,98 L2,98 Z"
                      fill="none"
                      stroke="url(#snakeGradient)"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      variants={snakeVariants}
                      animate="animate"
                    />
                    <defs>
                      <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Smooth Background Glow */}
                  <motion.div
                    className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    initial={false}
                  />
                  
                  {/* Main Image with Smooth Animations */}
                  <motion.img
                    src={exp.image || "/placeholder.svg"}
                    alt={`Screenshot of ${exp.title}`}
                    className="relative w-full max-w-sm md:max-w-full h-auto rounded-xl shadow-xl border border-gray-700/30"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    style={{
                      filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.3))"
                    }}
                  />

                  {/* Smooth Click Indicator Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/15 via-transparent to-purple-600/15 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                    initial={false}
                  >
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
                      initial={{ scale: 0, rotate: -90 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Smooth Floating Particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -8, 0],
                      x: [0, 2, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -6, 0],
                      x: [0, -2, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -4, 0],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Link href="/projects">
            <motion.button
              className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="group-hover:animate-none"
                >
                  <FaArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
