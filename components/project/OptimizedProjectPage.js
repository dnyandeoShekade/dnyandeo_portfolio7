'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaExternalLinkAlt, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectsData = {
  'billing-cart': {
    id: 'billing-cart',
    slug: 'billing-cart',
    title: 'BillingCart Website',
    subtitle: 'Yuva Nexus Tech - Fullstack Developer',
    description: 'Built a static e-commerce web application designed to showcase billing machines, POS printers, and accessories for B2B customers. The platform focuses on product discovery and direct customer interaction via WhatsApp, instead of using a traditional cart and checkout system – based on specific client requirements. Features file-based routing, dynamic slug pages, and server-side rendering for optimal performance.',
    heroImage: '/img/project/project-1.png',
    category: 'Yuva Nexus Tech',
    technologies: ['Next.js', 'File-based Routing', 'Dynamic Slug Pages', 'Server-side Rendering', 'WhatsApp Integration'],
    liveUrl: 'https://billingcart.in/',
    githubUrl: 'https://github.com/dnyandeoShekade/billing-cart',
    screenshots: [
      '/img/project/project-1.png',
      '/img/project/billing-dashboard.png',
      '/img/project/billing-invoice.png',
      '/img/project/billing-products.png'
    ],
    features: [
      'B2B Product Showcase',
      'WhatsApp Integration',
      'File-based Routing',
      'Dynamic Slug Pages',
      'Server-side Rendering',
      'SEO Optimized'
    ]
  },
  'yuva-nexus': {
    id: 'yuva-nexus',
    slug: 'yuva-nexus',
    title: 'Yuva Nexus',
    subtitle: 'Yuva Nexus - Frontend Developer',
    description: 'A professional platform developed for Yuva Nexus to connect students and young professionals with opportunities for growth. The website features an elegant UI, responsive design, and smooth animations — built using modern web technologies for a seamless user experience.',
    heroImage: '/img/project/project-2.png',
    category: 'Yuva Nexus',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://yuvanexus.com',
    githubUrl: 'https://github.com/dnyandeoShekade/yuva-nexus',
    screenshots: [
      '/img/project/project-2.png',
      '/img/project/yuva-nexus-home.png',
      '/img/project/yuva-nexus-opportunities.png',
      '/img/project/yuva-nexus-network.png'
    ],
    features: [
      'Professional networking',
      'Opportunity matching',
      'Elegant UI design',
      'Responsive layout',
      'Smooth animations'
    ]
  }
};

const allProjects = [
  { id: 'billing-cart', slug: 'billing-cart', title: 'BillingCart Website', category: 'Yuva Nexus Tech' },
  { id: 'yuva-nexus', slug: 'yuva-nexus', title: 'Yuva Nexus Platform', category: 'Yuva Nexus Tech' }
];

export default function OptimizedProjectPage({ projectSlug }) {
  const [searchTerm, setSearchTerm] = useState('');
  const project = projectsData[projectSlug] || projectsData['billing-cart'];
  
  const filteredProjects = useMemo(() => 
    allProjects.filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Mobile Navigation Header */}
      <div className="lg:hidden bg-gradient-to-r from-slate-800/90 to-gray-800/90 backdrop-blur-sm border-b border-slate-700/50 p-4">
        <div className="flex items-center justify-between">
          <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 font-medium">
            ← Back to Projects
          </Link>
          <h1 className="text-lg font-semibold truncate ml-4 text-slate-100">{project.title}</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile, shown as dropdown or separate section */}
        <div className="hidden lg:block w-80 bg-gradient-to-b from-slate-800/50 to-gray-800/50 backdrop-blur-sm border-r border-slate-700/30 min-h-screen">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">My Projects</h2>
              
              {/* Search */}
              <div className="relative mb-6">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-all backdrop-blur-sm"
                />
              </div>

              {/* Project List */}
              <div className="space-y-3">
                {filteredProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={`/project/${proj.slug}`}
                    className={`block p-4 rounded-lg border transition-all duration-200 ${
                      proj.slug === project.slug
                        ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-400/50 text-blue-300 shadow-lg shadow-blue-500/10'
                        : 'bg-slate-800/30 border-slate-600/30 text-slate-300 hover:border-slate-500/50 hover:bg-slate-700/40 backdrop-blur-sm'
                    }`}
                  >
                    <h3 className="font-medium mb-1 text-sm">{proj.title}</h3>
                    <p className="text-xs text-slate-400">{proj.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Project Navigation */}
        <div className="lg:hidden bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm border-b border-slate-700/50 p-4">
          <div className="flex gap-2 overflow-x-auto">
            {filteredProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/project/${proj.slug}`}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  proj.slug === project.slug
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-700/60 text-slate-300 hover:bg-slate-600/70 backdrop-blur-sm border border-slate-600/30'
                }`}
              >
                {proj.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Hero Section */}
          <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover opacity-60"
              priority
              sizes="100vw"
            />
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-cyan-400/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Crafted to Dominate
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 text-slate-100">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-4 sm:mb-6">
                  {project.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-lg border border-slate-600/30 backdrop-blur-sm hover:border-slate-500/50 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0 shadow-lg shadow-blue-400/50"></div>
                    <span className="text-slate-200 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-slate-700/60 to-slate-600/60 text-slate-200 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-slate-600/40 hover:border-blue-400/50 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Screenshots</h3>
                <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-lg p-3 sm:p-6 border border-slate-600/30 backdrop-blur-sm">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                      prevEl: '.swiper-button-prev-custom',
                      nextEl: '.swiper-button-next-custom',
                    }}
                    pagination={{
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet-custom',
                      bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="screenshot-swiper"
                  >
                    {project.screenshots.map((screenshot, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative rounded-lg overflow-hidden">
                          <Image
                            src={screenshot}
                            alt={`${project.title} Screenshot ${index + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Custom Navigation Buttons */}
                  <div className="flex justify-between items-center mt-3 sm:mt-4">
                    <button className="swiper-button-prev-custom bg-slate-700/60 hover:bg-slate-600/80 text-slate-200 p-2 sm:p-3 rounded-full transition-all duration-200 border border-slate-600/50 hover:border-blue-400/50 backdrop-blur-sm">
                      <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-xs sm:text-sm">
                        {project.screenshots.length} Screenshots
                      </span>
                    </div>
                    <button className="swiper-button-next-custom bg-slate-700/60 hover:bg-slate-600/80 text-slate-200 p-2 sm:p-3 rounded-full transition-all duration-200 border border-slate-600/50 hover:border-blue-400/50 backdrop-blur-sm">
                      <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Project Links */}
            <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-lg p-4 sm:p-6 border border-slate-600/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Project Links</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg transition-all font-medium text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Live Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
