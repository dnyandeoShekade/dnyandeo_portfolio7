"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function ProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Fade in and slide up
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const experiences = [
    {
  
      id: 1,
      title: "Fulltime Frontend  Developer",
      company: "Billing machine ",
      description:
        "Developed a responsive billing cart application using Next.js and Tailwind CSS, handling static data  and clean, user-friendly interface.",
      tags: ["NextJS", "JavaScript", "tailwind css","Static api", "Git and GitHub"],
      image: "/img/project/project-1.png",
      imageRotation: "rotate-3",
    },
    {
      id: 2,
      title: "Fronted developer",
      company: "Yuva Nexus website",
      description:
        "Built the official Yuva Nexus website using Next.js and Tailwind CSS, showcasing their IT services, client projects,  Focused on responsive design, smooth navigation.",
      tags: ["NextJS","javascript", "Wordpress API", "Tailwind css", "Git and GitHub"],
      image: "/img/project/project-2.png",
      imageRotation: "-rotate-3",
    },
    
  ]

  return (
    <section id="project" className="px-4 py-16 max-w-8xl p-5 mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950">
     <motion.h2
  className="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
             text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-10 drop-shadow-lg"
  variants={headingVariants}
  initial="hidden"
  animate={controls}
>
  Work Experience
</motion.h2>


      <div ref={ref} className="relative">
        {/* Removed the vertical timeline line */}

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16 items-start" // Adjusted gap and margin-bottom
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Left Column: Timeline Content */}
            <div className="relative md:pr-8">
              {/* Timeline Dot (still present if desired, but no line connecting them) */}
              <div className="absolute left-0 top-0 mt-1 w-3 h-3 bg-date-tag-text rounded-full z-10 hidden md:block"></div>
              <div className="md:pl-8">
                {" "}
                {/* Add padding to align text with dot */}
                <span className="inline-block bg-date-tag-bg text-date-tag-text text-xs font-medium px-3 py-1 rounded-full mb-2">
                  {exp.date}
                </span>
                <h3 className="text-white text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-nav-link-gray text-base mb-3">{exp.company}</p>
                <p className="text-nav-link-gray text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-white text-xs px-3 py-1 rounded-full border border-tech-tag-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Project Screenshot */}
            <div className="w-full flex justify-center md:justify-start">
              <img
                src={exp.image || "/placeholder.svg"}
                alt={`Screenshot of ${exp.title}`}
                className="w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
