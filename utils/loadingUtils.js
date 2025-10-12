// Loading utility functions

export const simulateLoading = (duration = 1000) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export const simulateProgressLoading = (callback, duration = 2000) => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    callback(Math.round(progress));
  }, duration / 20);
  
  return () => clearInterval(interval);
};

export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Loading states for different scenarios
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

export const createLoadingState = (initialState = LOADING_STATES.IDLE) => {
  return {
    state: initialState,
    isLoading: initialState === LOADING_STATES.LOADING,
    isSuccess: initialState === LOADING_STATES.SUCCESS,
    isError: initialState === LOADING_STATES.ERROR,
    isIdle: initialState === LOADING_STATES.IDLE
  };
};
