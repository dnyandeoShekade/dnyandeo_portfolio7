'use client';

import { useEffect, useState } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import Loading from '../components/common/Loading';

export default function ClientLayout({ children }) {
  const { isLoading, setIsLoading } = useLoading();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && (
        <Loading 
          isLoading={isLoading} 
          onComplete={handleLoadingComplete}
        />
      )}
      <div className={showLoading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}
