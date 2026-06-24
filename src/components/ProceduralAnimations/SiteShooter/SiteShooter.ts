interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface Laser {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
}

interface UFO {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  health: number;
  maxHealth: number;
  shootTimer: number;
}

interface UFOBullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  history: { x: number; y: number }[]; 
}

interface ImpactRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export const initSiteShooter = () => {
  if (document.getElementById('site-shooter-canvas')) return;

  // 1. Setup Fullscreen Canvas Over the Site
  const canvas = document.createElement('canvas');
  canvas.id = 'site-shooter-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none'; 
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d')!;
  
  // Game State Containers
  let particles: Particle[] = [];
  let lasers: Laser[] = [];
  let ufos: UFO[] = [];
  let ufoBullets: UFOBullet[] = [];
  let impactRings: ImpactRing[] = []; 

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Animation & Gameplay Tickers
  let recoil = 0;       
  let idleTimer = 0;    
  let glowPhase = 0;    
  let ufoSpawnTimer = 0;
  let score = 0;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Helper: Create particle explosions
  const createExplosion = (x: number, y: number, color: string, count = 15, speedScale = 1) => {
    for (let i = 0; i < count; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 8 * speedScale,
        vy: (Math.random() - 0.5) * 8 * speedScale,
        alpha: 1,
        color: color,
        size: Math.random() * 3 + 2
      });
    }
  };

  // Player Shoot Trigger
  window.addEventListener('click', () => {
    // 1. Instantly set maximum recoil compression offset before capturing positions
    recoil = 12;

    const gunX = window.innerWidth / 2;
    const idleFloatY = Math.sin(idleTimer) * 3;
    const gunY = window.innerHeight - 45 + idleFloatY; 
    const angle = Math.atan2(mouseY - gunY, mouseX - gunX);
    
    // 2. Lock the barrel location explicitly including the active recoil compression gap
    const barrelLength = 40 - recoil;
    const laserStartX = gunX + Math.cos(angle) * barrelLength;
    const laserStartY = gunY + Math.sin(angle) * barrelLength;

    // 3. Statically save these origins into the array queue snapshot
    lasers.push({ 
      startX: laserStartX, 
      startY: laserStartY, 
      targetX: mouseX, 
      targetY: mouseY, 
      progress: 0 
    });
  });

  // Main Game Loop Engine
  const updateGame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    idleTimer += 0.04;
    glowPhase += 0.15;
    if (recoil > 0) recoil *= 0.8; 

    const gunX = window.innerWidth / 2;
    const idleFloatY = Math.sin(idleTimer) * 3; 
    const gunY = window.innerHeight - 45 + idleFloatY; 
    const angle = Math.atan2(mouseY - gunY, mouseX - gunX);

    // --- 1. SPAWN RETRO ENEMY UFOS ---
    ufoSpawnTimer++;
    if (ufoSpawnTimer > 120) { 
      ufoSpawnTimer = 0;
      ufos.push({
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: -20,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 0.6 + 0.3, 
        width: 44,
        height: 20,
        health: 3,
        maxHealth: 3,
        shootTimer: Math.random() * 60
      });
    }

    // --- 2. UPDATE & RENDER UFOS ---
    for (let i = ufos.length - 1; i >= 0; i--) {
      const u = ufos[i];
      u.x += u.vx;
      u.y += u.vy;

      if (u.x < 20 || u.x > window.innerWidth - u.width - 20) u.vx *= -1;

      u.shootTimer++;
      if (u.shootTimer > 140) {
        u.shootTimer = 0;
        ufoBullets.push({
          x: u.x + u.width / 2,
          y: u.y + u.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: 2.5, 
          size: 8,  
          history: []
        });
      }

      ctx.save();
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = '#39ff14';
      ctx.fillRect(u.x + 14, u.y, 16, 6);
      ctx.fillStyle = '#8c92ac';
      ctx.fillRect(u.x, u.y + 6, u.width, 8);
      
      const lightGlow = Math.sin(glowPhase + i) > 0;
      ctx.fillStyle = lightGlow ? '#ff0055' : '#00f2fe';
      ctx.fillRect(u.x + 6, u.y + 14, 6, 4);
      ctx.fillRect(u.x + 19, u.y + 14, 6, 4);
      ctx.fillRect(u.x + 32, u.y + 14, 6, 4);

      if (u.health < u.maxHealth) {
        ctx.fillStyle = '#ff3333';
        ctx.fillRect(u.x, u.y - 8, u.width, 3);
        ctx.fillStyle = '#39ff14';
        ctx.fillRect(u.x, u.y - 8, u.width * (u.health / u.maxHealth), 3);
      }
      ctx.restore();

      if (u.y > window.innerHeight) {
        ufos.splice(i, 1);
      }
    }

    // --- 3. UPDATE PLAYER LASERS (FIXED STABLE RAYCASTING PATHS) ---
    for (let i = lasers.length - 1; i >= 0; i--) {
      const l = lasers[i];
      l.progress += 0.3; 

      // FIXED: Use the saved static laser start positions instead of reading a fluid shifting gun state!
      const currentX = l.startX + (l.targetX - l.startX) * l.progress;
      const currentY = l.startY + (l.targetY - l.startY) * l.progress;

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
      ctx.lineWidth = 6;
      ctx.moveTo(l.startX, l.startY); // Locked to initial launch frame origin
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      if (l.progress >= 1) {
        let hitSomething = false;
        
        for (let j = ufos.length - 1; j >= 0; j--) {
          const u = ufos[j];
          if (l.targetX >= u.x && l.targetX <= u.x + u.width && l.targetY >= u.y && l.targetY <= u.y + u.height) {
            u.health -= 1;
            hitSomething = true;
            createExplosion(l.targetX, l.targetY, '#ff3333', 6);

            if (u.health <= 0) {
              createExplosion(u.x + u.width / 2, u.y + u.height / 2, '#39ff14', 25, 1.5);
              ufos.splice(j, 1);
              score += 100;
            }
            break;
          }
        }

        if (!hitSomething) {
          createExplosion(l.targetX, l.targetY, '#00f2fe', 4, 0.5);
        }

        lasers.splice(i, 1);
      }
    }

    // --- 4. UPDATE UFO ENEMY BULLETS ---
    for (let i = ufoBullets.length - 1; i >= 0; i--) {
      const b = ufoBullets[i];
      
      b.history.push({ x: b.x, y: b.y });
      if (b.history.length > 8) b.history.shift();

      b.x += b.vx;
      b.y += b.vy;

      ctx.save();
      if (b.history.length > 1) {
        ctx.beginPath();
        ctx.moveTo(b.history[0].x, b.history[0].y);
        for (let h = 1; h < b.history.length; h++) {
          ctx.lineTo(b.history[h].x, b.history[h].y);
        }
        ctx.strokeStyle = 'rgba(255, 0, 85, 0.35)';
        ctx.lineWidth = b.size - 2;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      ctx.fillStyle = '#ff0055';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff0055';
      ctx.fillRect(b.x - b.size / 2, b.y - b.size / 2, b.size, b.size);
      
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(b.x - b.size / 4, b.y - b.size / 4, b.size / 2, b.size / 2);
      ctx.restore();

      const originalDisplay = canvas.style.display;
      canvas.style.display = 'none';
      let targetElement = document.elementFromPoint(b.x, b.y) as HTMLElement;
      canvas.style.display = originalDisplay; 

      if (
        targetElement && 
        targetElement !== canvas && 
        targetElement !== document.body && 
        targetElement !== document.documentElement
      ) {
        const textTags = ['SPAN', 'A', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'B', 'CODE', 'BUTTON'];
        if (!textTags.includes(targetElement.tagName)) {
          const subTextNode = targetElement.querySelector('span, a, p, h1, h2, h3, h4, h5, h6, li, b, code, button') as HTMLElement;
          if (subTextNode) {
            targetElement = subTextNode;
          }
        }

        const elColor = window.getComputedStyle(targetElement).color;
        
        impactRings.push({
          x: b.x,
          y: b.y,
          radius: 2,
          maxRadius: 24,
          alpha: 1,
          color: elColor || '#ff0055'
        });

        createExplosion(b.x, b.y, elColor || '#ff0055', 12, 1.2);
        
        if (textTags.includes(targetElement.tagName) && targetElement.innerText.length > 1 && Math.random() > 0.3) {
          const words = targetElement.innerText.split(' ');
          if (words.length > 1) {
            words.splice(Math.floor(Math.random() * words.length), 1);
            targetElement.innerText = words.join(' ');
          } else {
            targetElement.innerText = targetElement.innerText.substring(0, targetElement.innerText.length - 1);
          }
        } else {
          targetElement.style.transition = 'all 0.2s ease';
          targetElement.style.transform = `scale(0.9) rotate(${(Math.random() - 0.5) * 6}deg)`;
          targetElement.style.opacity = (parseFloat(targetElement.style.opacity || '1') - 0.2).toString();
          
          if (parseFloat(targetElement.style.opacity) <= 0) {
            targetElement.style.visibility = 'hidden';
          }
        }

        ufoBullets.splice(i, 1);
        continue;
      }

      if (b.y > window.innerHeight) {
        ufoBullets.splice(i, 1);
      }
    }

    // --- 5. RENDER IMPACT SHOCKWAVES ---
    for (let i = impactRings.length - 1; i >= 0; i--) {
      const ring = impactRings[i];
      ring.radius += 1.5;
      ring.alpha -= 0.05;

      if (ring.alpha <= 0) {
        impactRings.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
      ctx.strokeStyle = ring.color;
      ctx.globalAlpha = ring.alpha;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    // --- 6. UPDATE AND DRAW EXPLOSION PARTICLES ---
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.globalAlpha = 1.0;

    // --- 7. DRAW THE PLAYER CANNON ---
    ctx.save();
    ctx.translate(gunX - Math.cos(angle) * recoil, gunY - Math.sin(angle) * recoil);
    ctx.rotate(angle);
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = '#1e1e24'; 
    ctx.fillRect(-12, -6, 12, 12);
    ctx.fillRect(-16, 0, 6, 14); 

    ctx.fillStyle = '#3a3d46';
    ctx.fillRect(0, -10, 22, 16);
    
    const glowIntensity = Math.abs(Math.sin(glowPhase));
    ctx.fillStyle = `rgba(0, 242, 254, ${0.4 + glowIntensity * 0.6})`;
    ctx.fillRect(4, -6, 12, 8);
    
    ctx.fillStyle = '#787c85';
    ctx.fillRect(22, -4, 18, 6); 
    
    ctx.fillStyle = '#00f2fe';
    ctx.fillRect(38, -5, 3, 8);
    ctx.restore();

    // --- 8. DRAW HIGH-CONTRAST INTERFACE HUD ---
    ctx.save();
    ctx.font = 'bold 18px monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    const textString = ` SCORE: ${score} | RELOAD TO EXIT `;
    const textMetrics = ctx.measureText(textString);
    const boxWidth = textMetrics.width;
    const boxHeight = 32;

    const boxX = 20;
    const boxY = (window.innerHeight / 2) - (boxHeight / 2);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

    ctx.fillStyle = '#000000'; 
    ctx.fillText(textString, boxX, window.innerHeight / 2);
    ctx.restore();

    requestAnimationFrame(updateGame);
  };

  requestAnimationFrame(updateGame);
};