import { useState, useEffect } from 'react';

const AUTOPLAY_DELAY = 5000;
const PAUSE_DURATION = 5000;

export const useTestimonialsCarousel = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Maximum index we can scroll to before showing empty space on desktop (3 visible items)
  const maxIndex = Math.max(0, totalItems - 3); 

  const nextSlide = () => {
    // FIX: Use functional state updates so the interval engine always sees the fresh index value
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleUserInteraction = (action: () => void) => {
    action();
    setIsPaused(true);
  };

  // Combined Autoplay and Pause Timer Engine
  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => setIsPaused(false), PAUSE_DURATION);
      return () => clearTimeout(pauseTimer);
    }

    // FIX: We must point directly to the function wrapper inside the interval closure block
    const autoplayTimer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);
    
    return () => clearInterval(autoplayTimer);
  }, [isPaused, maxIndex]); // Removed currentIndex dependency to prevent interval flashing resets

  return {
    currentIndex,
    maxIndex,
    nextSlide,
    prevSlide,
    handleUserInteraction,
    setCurrentIndex,
  };
};