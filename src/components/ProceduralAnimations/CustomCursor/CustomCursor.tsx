import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Track positioning targets
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediately snap the inner tiny point tracker
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
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

    // NEW: Handle user leaving the page viewport (e.g. going to Inspect Element)
    const handleMouseLeaveWindow = () => {
      document.documentElement.classList.add('devtools-active');
      dot.style.opacity = '0';
      outline.style.opacity = '0';
    };

    const handleMouseEnterWindow = () => {
      document.documentElement.classList.remove('devtools-active');
      dot.style.opacity = '1';
      outline.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Attach window border checks
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    
    // Initial run for layout tracking
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
    <>
      <div ref={dotRef} className={styles.cursorDot} />
      <div ref={outlineRef} className={styles.cursorOutline} />
    </>
  );
};