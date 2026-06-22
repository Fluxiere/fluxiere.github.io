import { useEffect, useRef } from 'react';
import styles from './NeuralNetwork.module.scss';

interface NeuralNetworkProps {
  nodeCount?: number;
  maxDistance?: number;
  interactive?: boolean;
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  nodeCount = 65, // Balanced count for a smaller container space
  maxDistance = 130,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // FIX 1: Measure the container boundaries instead of the global window viewport
    let rect = canvas.getBoundingClientRect();
    let W = (canvas.width = rect.width);
    let H = (canvas.height = rect.height);
    
    let mouseX = -1000;
    let mouseY = -1000;

    class Node {
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      r!: number;
      opacity!: number;
      pulse!: number;
      pulseSpeed!: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 1.5 + 0.6;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.015 + 0.005;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (interactive) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            this.x += (dx / dist) * 0.8;
            this.y += (dy / dist) * 0.8;
          }
        }

        if (this.x < -20) this.x = W + 20;
        if (this.x > W + 20) this.x = -20;
        if (this.y < -20) this.y = H + 20;
        if (this.y > H + 20) this.y = -20;
      }
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, () => new Node());

    // FIX 2: Recalculate dimensions dynamically based on container shifts
    const handleResize = () => {
      if (!canvas) return;
      rect = canvas.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
    };

    // FIX 3: Offset cursor coordinates to map 1:1 onto the relative container element canvas space
    const handleMouseMove = (e: MouseEvent) => {
      rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H);

// Web connections loop
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const dx = nodes[i].x - nodes[j].x;
    const dy = nodes[i].y - nodes[j].y;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d < maxDistance) {
      // 1. INCREASED BASE ALPHA (From 0.14 to 0.32) for brighter static lines
      const baseAlpha = (1 - d / maxDistance) * 0.32;
      let boost = 0;
      
      if (interactive) {
        const mdx = (nodes[i].x + nodes[j].x) / 2 - mouseX;
        const mdy = (nodes[i].y + nodes[j].y) / 2 - mouseY;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        // 2. STRONGER MOUSE GLOW RESPONSE (From 0.35 to 0.55)
        boost = Math.max(0, 1 - md / 180) * 0.55;
      }

      const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      // 3. HIGHER COLOR SATURATION FOR LIGHT THEMES
      grad.addColorStop(0, `rgba(46, 175, 155, ${baseAlpha + boost})`);
      grad.addColorStop(1, `rgba(140, 120, 90, ${(baseAlpha + boost) * 0.5})`);

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.0; // 4. Slightly thicker stroke width (From 0.75 to 1.0)
      ctx.moveTo(nodes[i].x, nodes[i].y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
      ctx.stroke();
    }
  }
}

// Drawing Core pulsing nodes loop
nodes.forEach((node) => {
  node.update();
  const currentRadius = node.r + Math.sin(node.pulse) * 0.4;

  // Outer glow ring
  const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius * 6);
  glowGrad.addColorStop(0, `rgba(46, 175, 155, ${node.opacity * 0.6})`); // 5. Brighter glow anchor
  glowGrad.addColorStop(1, 'rgba(46, 175, 155, 0)');
  
  ctx.beginPath();
  ctx.arc(node.x, node.y, currentRadius * 6, 0, Math.PI * 2);
  ctx.fillStyle = glowGrad;
  ctx.fill();

  // Solid inner node core dot
  ctx.beginPath();
  ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(46, 175, 155, ${node.opacity + 0.55})`; // 6. Solidified core opacity
  ctx.fill();
});

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [nodeCount, maxDistance, interactive]);

  return <canvas ref={canvasRef} className={styles.neuralCanvas} aria-hidden="true" />;
};