// Performance optimization utilities

// Image optimization settings
export const imageConfig = {
  // Blur placeholder for better perceived performance
  blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  
  // Responsive image sizes
  sizes: {
    hero: "100vw",
    project: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    screenshot: "(max-width: 768px) 100vw, 800px"
  },
  
  // Quality settings
  quality: 85,
  
  // Priority loading for above-the-fold images
  priorityIndexes: [0, 1] // First two images get priority loading
};

// Animation performance settings
export const animationConfig = {
  // Reduced motion for better performance
  reducedMotion: {
    duration: 0.2,
    ease: "easeOut"
  },
  
  // Standard motion
  standardMotion: {
    duration: 0.3,
    ease: "easeInOut"
  },
  
  // Stagger animations
  stagger: 0.05
};

// Loading optimization
export const loadingConfig = {
  // Minimum loading times (in ms)
  minLoadTime: 150,
  maxLoadTime: 300,
  
  // Debounce delays
  searchDebounce: 300,
  filterDebounce: 200
};

// Lazy loading intersection observer options
export const lazyLoadConfig = {
  rootMargin: "50px 0px",
  threshold: 0.1
};

// Performance monitoring
export const performanceMetrics = {
  // Track key metrics
  trackLCP: true, // Largest Contentful Paint
  trackFID: true, // First Input Delay
  trackCLS: true, // Cumulative Layout Shift
  
  // Custom metrics
  trackPageLoad: true,
  trackImageLoad: true
};

// Utility function to create optimized image props
export function getOptimizedImageProps(src, alt, options = {}) {
  const {
    width = 800,
    height = 600,
    priority = false,
    sizes = imageConfig.sizes.project,
    quality = imageConfig.quality
  } = options;

  return {
    src,
    alt,
    width,
    height,
    priority,
    sizes,
    quality,
    placeholder: "blur",
    blurDataURL: imageConfig.blurDataURL,
    loading: priority ? "eager" : "lazy"
  };
}

// Debounce utility for search/filter inputs
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Preload critical resources
export function preloadCriticalResources() {
  // Preload hero images
  const heroImages = [
    '/img/project/project-1.png',
    '/img/project/project-2.png'
  ];
  
  heroImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Check if user prefers reduced motion
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Get appropriate animation config based on user preference
export function getAnimationConfig() {
  return prefersReducedMotion() ? animationConfig.reducedMotion : animationConfig.standardMotion;
}
