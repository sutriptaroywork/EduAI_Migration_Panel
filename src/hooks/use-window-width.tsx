import { useEffect, useState } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}
export function useWindowWidth() {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (window.innerWidth > 768) {
        setIsDesktop(true);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowSize, isDesktop };
}
