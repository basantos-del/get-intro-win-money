import { useState, useEffect } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  isVisible?: boolean;
}

export const useCountUp = ({ end, duration = 2000, delay = 0, isVisible = false }: UseCountUpOptions) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Defer animation start to improve TTI
    const timer = setTimeout(() => {
      let startTime: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay, isVisible]);

  return count;
};