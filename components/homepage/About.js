
"use client"

import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { Mail, Github, Linkedin, Twitter, Smile, Code, User } from "lucide-react";

export function AboutMeSection({
  name="Dnyandeo Shekade",
  role="Full Stack Developer",
  experience="1+ Years Experience",
  description="A passionate frontend developer building clean, responsive, and visually engaging web applications that turn ideas into reality. Over the past year, I’ve grown from a self-taught learner to a confident project builder. After completing my BCS degree, I worked at Yuva Nexus Technologies, where I gained hands-on experience working on real-world projects.  I've worked with modern tools like React, Next.js, Node.js, and MongoDB.",
  skills="Proficient in JavaScript, React, Next.js, MongoDB, TailwindCSS, and modern development tools. Always learning and adapting to new technologies.",
  connectText="Ready to collaborate on exciting projects and build something awesome together.",
  email="shekadednyande@gmail.com",
  githubUrl="https://github.com/dnyandeoShekade",
  linkedinUrl="https://www.linkedin.com/in/dnyandeo-shekade-b75016334/",
  twitterUrl="https://x.com/DnyandeoShekade",
  skillsImage="/img/project/skills.png",
  connectImage="/img/project/connect-1.jpg",
}){
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="About" className="px-20 py-16 max-w-8xl mx-auto bg-[#0B1327] to-slate-950 justify-items-center">
      <motion.h2
        className="text-white text-4xl md:text-5xl font-bold mb-12 text-left"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        About Me
      </motion.h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-10/12"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Merged Card */}
        <motion.div
          className="bg-nav-bg rounded-2xl p-8 flex flex-col items-center border border-card-border shadow-lg min-h-[280px] md:col-span-2 w-full"
          variants={itemVariants}
        >
          <div
            className="w-full h-32 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3A3A5A, #1A1A3A)" }}
          >
            <Smile className="w-16 h-16 text-yellow-400" />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2 text-center">{role}</h3>
          <p className="text-nav-link-gray text-base mb-4 text-center">{experience}</p>
          <div className="flex items-center mb-4">
            <User className="w-6 h-6 text-nav-link-gray mr-3" />
            <h3 className="text-white text-xl font-semibold">{`Hey there! I'm ${name}`}</h3>
          </div>
          <p className="text-nav-link-gray text-base leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Skills & Technologies Card */}
        <motion.div
          className="bg-nav-bg rounded-2xl flex flex-col border border-card-border shadow-lg min-h-[280px] overflow-hidden"
          variants={itemVariants}
        >
          <div className="w-full h-70 bg-white rounded-t-2xl p-0 flex items-center justify-center overflow-hidden">
            <img
              src={skillsImage}
              alt="Skills and Technologies"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="p-8 flex flex-col flex-grow justify-end">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-nav-link-gray mr-3" />
              <h3 className="text-white text-xl font-semibold">Skills & Technologies</h3>
            </div>
            <p className="text-nav-link-gray text-base">
              {skills}
            </p>
          </div>
        </motion.div>

        {/* Let's Connect Card */}
        <motion.div
          className="bg-nav-bg rounded-2xl flex flex-col border border-card-border shadow-lg min-h-[280px] overflow-hidden"
          variants={itemVariants}
        >
          <div className="w-full h-70 bg-white rounded-t-2xl p-0 flex items-center justify-center overflow-hidden">
            <img
              src={connectImage}
              alt="Connect with me"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="p-8 flex flex-col flex-grow justify-end">
            <h3 className="text-white text-xl font-semibold mb-4">{"Let's Connect"}</h3>
            <p className="text-nav-link-gray text-base leading-relaxed mb-6">
              {connectText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`mailto:${email}`}
                className="text-name-blue hover:underline flex items-center gap-2"
              >
                <Mail className="w-5 h-5" /> Email
              </Link>
              <Link
                href={githubUrl}
                className="text-name-blue hover:underline flex items-center gap-2"
                target="_blank"
              >
                <Github className="w-5 h-5" /> GitHub
              </Link>
              <Link
                href={linkedinUrl}
                className="text-name-blue hover:underline flex items-center gap-2"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </Link>
              <Link
                href={twitterUrl}
                className="text-name-blue hover:underline flex items-center gap-2"
                target="_blank"
              >
                <Twitter className="w-5 h-5" /> X (Twitter)
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}