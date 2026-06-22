import { useEffect, useRef } from 'react';
import styles from './NeuralNetwork.module.scss';

interface NeuralNetworkProps {
  nodeCount?: number;
  maxDistance?: number;
  interactive?: boolean;
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  nodeCount = 85,
  maxDistance = 150,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let mouseX = -1000;
    let mouseY = -1000;

    // Node blueprint
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

        // Interaction: Subtle repulsion away from the cursor position
        if (interactive) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            this.x += (dx / dist) * 0.8;
            this.y += (dy / dist) * 0.8;
          }
        }

        // Screen boundary self-healing wrapped loop
        if (this.x < -20) this.x = W + 20;
        if (this.x > W + 20) this.x = -20;
        if (this.y < -20) this.y = H + 20;
        if (this.y > H + 20) this.y = -20;
      }
    }

    // Populate node arrays
    const nodes: Node[] = Array.from({ length: nodeCount }, () => new Node());

    // Event Handlers
    const handleResize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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

    // Animation Render loop
    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // 1. Draw web connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < maxDistance) {
            const baseAlpha = (1 - d / maxDistance) * 0.14;

            // Proximity tracking boost if cursor is close to structural link midpoint
            let boost = 0;
            if (interactive) {
              const mdx = (nodes[i].x + nodes[j].x) / 2 - mouseX;
              const mdy = (nodes[i].y + nodes[j].y) / 2 - mouseY;
              const md = Math.sqrt(mdx * mdx + mdy * mdy);
              boost = Math.max(0, 1 - md / 220) * 0.35;
            }

            // High-end Gradient transitions tuned to Fluxière Teal -> transparent accents
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(46, 175, 155, ${baseAlpha + boost})`); // Teal core
            grad.addColorStop(1, `rgba(180, 160, 120, ${baseAlpha * 0.4})`); // Fading Gold-tint touch

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.75;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw the core pulsing nodes
      nodes.forEach((node) => {
        node.update();
        const currentRadius = node.r + Math.sin(node.pulse) * 0.4;

        // Visual soft radial glow ring
        const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius * 5);
        glowGrad.addColorStop(0, `rgba(46, 175, 155, ${node.opacity * 0.4})`);
        glowGrad.addColorStop(1, 'rgba(46, 175, 155, 0)');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 5, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Exact solid core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 175, 155, ${node.opacity + 0.2})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Begin looping
    render();

    // Clean up lifecycle pipeline to eliminate resource usage leaks
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