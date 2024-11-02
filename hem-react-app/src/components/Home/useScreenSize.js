// src/hooks/useScreenSize.js
import { useState, useEffect } from 'react';

function useScreenSize() {
  const [isFullScreen, setIsFullScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsFullScreen(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isFullScreen;
}

export default useScreenSize;
