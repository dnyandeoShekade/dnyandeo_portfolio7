'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const startLoading = () => {
    setIsLoading(true);
    setLoadingProgress(0);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const updateProgress = (progress) => {
    setLoadingProgress(progress);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingProgress,
        startLoading,
        stopLoading,
        updateProgress,
        setIsLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
