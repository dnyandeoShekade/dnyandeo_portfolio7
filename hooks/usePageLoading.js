'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function usePageLoading() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Start loading when pathname changes
    setIsPageLoading(true);
    
    // Reduced loading time for better performance
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return {
    isPageLoading,
    setIsPageLoading
  };
}

// Hook for component-specific loading
export function useComponentLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading
  };
}
