import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

export const CustomCursor = () => {
  const outlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outline = outlineRef.current;
    if (!outline) return;

    // Track positioning targets
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateOutline = () => {
      // Linear interpolation (lerp) creates the smooth "trailing" lag effect (0.15 = 15% speed catchup)
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      outline.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(animateOutline);
    };

    const handleMouseDown = () => outline.classList.add(styles.clicking);
    const handleMouseUp = () => outline.classList.remove(styles.clicking);

    // Handle interactive scaling elements (e.g., links, buttons)
    const addHoverState = () => outline.classList.add(styles.hovering);
    const removeHoverState = () => outline.classList.remove(styles.hovering);

    const setupInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', addHoverState);
        el.addEventListener('mouseleave', removeHoverState);
      });
    };

    // Handle user leaving the page viewport
    const handleMouseLeaveWindow = () => {
      outline.style.opacity = '0';
    };

    const handleMouseEnterWindow = () => {
      outline.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    
    const animationId = requestAnimationFrame(animateOutline);
    setupInteractiveListeners();

    // Re-bind targets if layout or content shifts dynamically
    const observer = new MutationObserver(setupInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={outlineRef} className={styles.cursorOutline} />
  );
};