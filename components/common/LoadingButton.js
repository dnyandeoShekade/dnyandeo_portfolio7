'use client';

import { LoadingSpinner } from './Loading';

export default function LoadingButton({ 
  children, 
  isLoading = false, 
  onClick, 
  className = "", 
  disabled = false,
  loadingText = "Loading...",
  ...props 
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative ${className} ${
        isLoading || disabled ? 'opacity-75 cursor-not-allowed' : ''
      }`}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </div>
      )}
      <span className={isLoading ? 'invisible' : 'visible'}>
        {isLoading ? loadingText : children}
      </span>
    </button>
  );
}

// Loading Link Component
export function LoadingLink({ 
  children, 
  isLoading = false, 
  href, 
  className = "", 
  loadingText = "Loading...",
  ...props 
}) {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center gap-2 ${className} ${
        isLoading ? 'opacity-75 cursor-not-allowed pointer-events-none' : ''
      }`}
      {...props}
    >
      {isLoading && <LoadingSpinner size="sm" color="blue" />}
      <span>{isLoading ? loadingText : children}</span>
    </a>
  );
}
