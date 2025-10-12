// 🔧 Site-wide configuration details for metadata
// this is basic info about your website

export const siteConfig = {
    title: "Dnyandeo Shekade | Fullstack Developer", // Website name for branding and SEO
    description: "Fullstack Developer at Yuva Nexus Tech specializing in Next.js, React, and modern web technologies. Building responsive, SEO-friendly web applications with clean code and user-centric design.", // Default site description
    url: "http://localhost:3000", // Production URL of the website
    ogImage: "/img/og-image.jpg", // Default Open Graph image (used for social sharing previews)
  };
  
  // this define the default seo metadata for your entire website if page doesn't have ,it own custom seo data , it will use this.
  export const defaultSEO = {
    // Base URL used by metadata and canonical generation
    metadataBase: new URL(siteConfig.url),

  
    // Default and templated page titles
    title: {
      default: siteConfig.name, // Fallback if no specific title is provided
      template: `%s | ${siteConfig.name}`, // e.g., "Blog | Yuva Nexaus"
    },
  
    // Meta description used in search engine results
    description: siteConfig.description,
  
    // Open Graph metadata for Facebook, LinkedIn, etc. when your link shared it will used
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
  
    // Twitter card settings for better tweet previews
    // metadata for when your site is shared on twitter (x)
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@DnyandeoShekade", // Your Twitter username
    },
  
    // Robots and indexing rules for search engines
    // tell search engines like google how to crawl your site.
    robots: {
      index: true, // Allow page indexing
      follow: true, // Allow link following
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1, // Allow full video previews
        "max-image-preview": "large", // Allow large image previews
        "max-snippet": -1, // Allow full snippet previews
      },
    },
  
    // Canonical URL (prevents duplicate content issues)
    // which avoids duplicate content issue in seo
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL || "https://dnyandeo-portfolio.vercel.app"}`, // Uses ENV var or fallback
    },
  };
  
  // 🎯 Custom SEO overrides for specific pages
  // setconfig this is custom seo setting for specific pages .
  export const seoConfig = {
    // Homepage SEO
    "/": {
      title: "Dnyandeo Shekade - Fullstack Developer Portfolio", // Keep under 60 characters
      description: "Fullstack Developer at Yuva Nexus Tech specializing in Next.js, React, and modern web technologies. View my projects and experience.", // Keep under 160 characters
      alternates: {
        canonical: `${siteConfig.url}`, // Canonical URL for homepage
      },
    },
     // You can add more pages here, like:
   
    "/projects": {
      title: "Web Development Projects - Dnyandeo Shekade",
      description: "Explore my latest web development projects including BillingCart e-commerce platform and Yuva Nexus website, built with Next.js, React, and Tailwind CSS.",
      alternates: {
        canonical: `${siteConfig.url}/projects`,
      },
    },
    "/project/billing-cart": {
      title: "BillingCart E-commerce Platform - Project",
      description: "E-commerce B2B platform for billing machines and POS printers with WhatsApp integration, built with Next.js and modern web technologies.",
      alternates: {
        canonical: `${siteConfig.url}/project/billing-cart`,
      },
    },
    "/project/yuva-nexus": {
      title: "Yuva Nexus Platform - Project",
      description: "Professional platform connecting students and young professionals with growth opportunities, featuring elegant UI and responsive design.",
      alternates: {
        canonical: `${siteConfig.url}/project/yuva-nexus`,
      },
    },
    // "/contact": { ... },
    // "/blog": { ... }
  
    
  };
  
  // 🔁 Returns merged SEO (default + page-specific) based on path
  
  export function getSEO(path) {
    // Clean the path by removing query params and trailing slashes
    const cleanPath = path.split("?")[0].replace(/\/$/, "");
  
    // Get the page-specific SEO config, or fallback to default
    const baseSEO = seoConfig[cleanPath] || defaultSEO;
  
    // Return a merged SEO object with full fallback
    return {
      ...defaultSEO,
      ...baseSEO,
  
      // Deep merge Open Graph fields
      openGraph: {
        ...defaultSEO.openGraph,
        ...baseSEO.openGraph,
      },
  
      // Deep merge Twitter card fields
      twitter: {
        ...defaultSEO.twitter,
        ...baseSEO.twitter,
      },
  
      // Deep merge canonical URLs
      alternates: {
        ...defaultSEO.alternates,
        ...baseSEO.alternates,
      },
    };
  }