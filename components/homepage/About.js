"use client";

import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Smile,
  Code,
  User,
} from "lucide-react";
import { LoadingSpinner } from "../common/Loading";

export function AboutMeSection({
  name = "Dnyandeo Shekade",
  role = "Fullstack Developer at Yuva Nexus Tech",
  experience = "2 Years Experience",
  description = "I work as a Fullstack Developer at Yuva Nexus Tech, where my primary focus is building fullstack web applications. On the frontend, I design and develop responsive, user-friendly UIs using Next.js and Tailwind CSS while ensuring SEO-friendly structures for better search engine visibility. I also collaborate with my team to integrate APIs and ensure smooth functionality between frontend and backend. Recently, I’ve been expanding my skills into backend development, working with databases, authentication, and server-side logic.Currently, I am also working at Innovins Technologies (November 2025 – Present), where I contribute to developing scalable web applications, improving UI/UX experiences, integrating APIs, and optimizing application performance across both frontend and backend systems.",

  skills = "Currently exploring backend development — learning about database integration, authentication systems, server-side rendering in Next.js, and API creation. Along with that, I'm improving my understanding of SEO optimization techniques, performance improvements, and secure application deployment. Proficient in JavaScript, React, Next.js, MongoDB, TailwindCSS, and modern development tools.",
  connectText = "Working on fullstack web applications including the BillingCart website - a static e-commerce platform for billing machines and POS printers with WhatsApp integration for B2B customers. Ready to collaborate on exciting projects and build innovative solutions together.",
  email = "shekadednyande@gmail.com",
  githubUrl = "https://github.com/dnyandeoShekade",
  linkedinUrl = "https://www.linkedin.com/in/dnyandeo-shekade-b75016334/",
  twitterUrl = "https://x.com/DnyandeoShekade",
  skillsImage = "/img/project/skills.png",
  connectImage = "/img/project/connect-1.jpg",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    // Preload critical images
    const imageUrls = [skillsImage, connectImage];
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Still show content even if images fail
  }, [skillsImage, connectImage]);

  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger for faster loading
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced movement for better performance
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="About"
      className="relative overflow-hidden px-4 lg:px-8 py-14 bg-[#050816]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-700/15 blur-[140px]" />
        <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-700/15 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="w-14 h-[3px] mt-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Main */}
        <div
          className="
      rounded-[24px]
      border border-white/10
      bg-gradient-to-br
      from-[#0B1228]
      to-[#111827]
      p-6
      "
        >
          <div className="grid lg:grid-cols-[220px_1fr_240px] gap-6">
            {/* LEFT */}
            <div className="flex flex-col items-center">
              <div
                className="
            w-[170px]
            h-[170px]
            rounded-full
            p-[2px]
            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-cyan-400
            "
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/profile.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 px-4 py-2 rounded-full bg-green-500/10">
                <span className="text-green-400 text-sm">● Available</span>
              </div>
            </div>

            {/* CENTER */}
            <div>
              <div className="inline-flex px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
                FULLSTACK
              </div>

              <h1 className="text-3xl font-bold text-white">
                Hey there! I'm
                <span className="block text-blue-400">{name}</span>
              </h1>

              <p className="mt-3 text-blue-100 text-sm">✨ {experience}</p>

              <p className="mt-5 text-gray-400 text-sm leading-7 max-w-[520px] line-clamp-5">
                {description}
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-3">
              {[
                ["Frontend", "Next.js + Tailwind"],
                ["Backend", "API + Database"],
                ["Team", "Collaboration"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="
              p-4
              rounded-xl
              bg-white/[0.03]
              border
              border-white/5
              "
                >
                  <h3 className="text-white text-sm font-semibold">{title}</h3>

                  <p className="text-gray-400 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          {/* Skills */}
          <div className="rounded-[24px] p-6 bg-[#0B1228] border border-white/10">
            <h3 className="text-xl text-white mb-5">Skills</h3>

            <div className="grid grid-cols-3 gap-3">
              {["JS", "TS", "Next", "React", "Tailwind", "Mongo"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="
              h-[80px]
              rounded-xl
              bg-white/5
              flex
              items-center
              justify-center
              text-sm
              text-white
              "
                  >
                    {skill}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Connect */}
          <div className="rounded-[24px] p-6 bg-[#0B1228] border border-white/10">
            <h3 className="text-xl text-white">Connect</h3>

            <p className="text-gray-400 text-sm mt-3 line-clamp-3">
              {connectText}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-5">
              {[
                ["Email", email],
                ["GitHub", "github"],
                ["LinkedIn", "linkedin"],
                ["Twitter", "twitter"],
              ].map(([title, val]) => (
                <div
                  key={title}
                  className="
              p-3
              rounded-xl
              bg-white/5
              "
                >
                  <p className="text-white text-sm">{title}</p>

                  <span className="text-gray-400 text-xs truncate block">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="
          mt-5
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          text-sm
          text-white
          "
            >
              ✨ Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
