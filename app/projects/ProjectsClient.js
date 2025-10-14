"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSearch,
  FaFilter,
  FaEye,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Project Data 
const projects = [
  {
    id: "billing-cart",
    slug: "billing-cart",
    title: "BillingCart Web",
    category: "E-commerce B2B",
    subtitle: "Fullstack Developer",
    description:
      "Built a static e-commerce web application for billing machines, POS printers, and accessories for B2B customers. Features WhatsApp integration for direct customer interaction instead of traditional cart system.",
    technologies: [
      "Next.js",
      "File-based Routing",
      "Dynamic Slug Pages",
      "Server-side Rendering",
      "Git",
    ],
    image: "/img/project/project-1.png",
    liveUrl: "https://billingcart.com",
    githubUrl: "https://github.com/dnyandeoShekade/billing-cart",
    status: "Live",
    year: "2024",
    duration: "2 months",
  },
  {
    id: "yuva-nexus",
    slug: "yuva-nexus",
    title: "Yuva Nexus Website",
    category: "Professional Platform",
    subtitle: "Frontend Developer",
    description:
      "Developed a professional platform connecting students and young professionals with growth opportunities. Features elegant UI, responsive design, and seamless user experience.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
    image: "/img/project/project-2.png",
    liveUrl: "https://yuvanexus.com",
    githubUrl: "https://github.com/dnyandeoShekade/yuva-nexus",
    status: "Live",
    year: "2024",
    duration: "3 months",
  },
];

export default function ProjectsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore my portfolio of innovative web applications and digital solutions
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
            />
          </div>

          {/* Category */}
          <div className="flex items-center gap-3">
            <FaFilter className="text-gray-400 w-4 h-4" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Status */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30 backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <FaEye className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                <p className="text-blue-400 text-sm mb-3 font-medium">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium border border-gray-600/50 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/project/${project.slug}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Details</span>
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
