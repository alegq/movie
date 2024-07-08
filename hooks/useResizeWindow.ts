import { useEffect, useState } from 'react';

export const useResizeWindow = () => {
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState<number>(
    isBrowser ? window.innerWidth : 1000,
  );

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return { isMobile };
};
