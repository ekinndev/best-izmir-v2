import { useEffect, useState } from 'react';

interface windowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
