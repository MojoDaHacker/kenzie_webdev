import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set up the event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler once on mount to set initial value (if not already set)
    handleResize();

    // Clean up function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount

  return windowWidth;
};

export default useWindowWidth;
