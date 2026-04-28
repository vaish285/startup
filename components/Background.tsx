import React, { useEffect, useRef, useState } from "react";

/**
 * AnimatedLogos — Adapted for integration
 */

interface AnimatedLogosProps {
  initialMode?: "normal" | "soft" | "strong";
}

function AnimatedLogos({ initialMode = "normal" }: AnimatedLogosProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<any[]>([]);
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
  const lastSpawnRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const mouseRef = useRef({ x: null as number | null, y: null as number | null, grabbed: null as any, isDown: false });

  const [mode] = useState(initialMode);
  // @ts-ignore
  const modeMultiplier = { soft: 0.6, normal: 1.0, strong: 1.4 }[mode] || 1.0;

  // Assets 
  // Note: In a real environment, these SVGs need to exist in the public folder.
  // Using placeholders or assuming files exist as per instructions.
  const assets = {
    git: "https://cdn.simpleicons.org/git/ffffff",
    azios: "https://cdn.simpleicons.org/axios/ffffff", // Typo in prompt 'azios', assuming axios or generic
    docker: "https://cdn.simpleicons.org/docker/2496ED",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    node: "https://cdn.simpleicons.org/nodedotjs/339933",
    vite: "https://cdn.simpleicons.org/vite/646CFF",
    spring: "https://cdn.simpleicons.org/spring/6DB33F",
    mysql: "https://cdn.simpleicons.org/mysql/4479A1",
    mongo: "https://cdn.simpleicons.org/mongodb/47A248",
    npm: "https://cdn.simpleicons.org/npm/CB3837",
    java: "https://cdn.simpleicons.org/openjdk/ffffff",
    github: "https://cdn.simpleicons.org/github/ffffff",
  };

  const glowColorMap: any = {
    git: "rgba(240,82,82,1)",
    azios: "rgba(140,110,230,1)",
    docker: "rgba(74,150,239,1)",
    react: "rgba(97,218,251,1)",
    node: "rgba(139,195,74,1)",
    vite: "rgba(122,204,255,1)",
    spring: "rgba(80,200,120,1)",
    mysql: "rgba(0,123,255,1)",
    mongo: "rgba(0,150,136,1)",
    npm: "rgba(207,45,45,1)",
    java: "rgba(240,150,0,1)",
    github: "rgba(255,255,255,1)",
  };

  const initialsMap: any = {
    git: "G",
    azios: "A",
    docker: "D",
    react: "R",
    node: "N",
    vite: "V",
    spring: "S",
    mysql: "My",
    mongo: "M",
    npm: "npm",
    java: "J",
    github: "Gh",
  };

  function loadImages() {
    const imgs: any = {};
    Object.entries(assets).forEach(([key, src]) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      // @ts-ignore
      img.__loaded = false;
      // @ts-ignore
      img.__broken = false;
      img.onload = () => {
        // @ts-ignore
        img.__loaded = true;
        // @ts-ignore
        img.__broken = !(img.naturalWidth > 0 && img.naturalHeight > 0);
      };
      img.onerror = (e) => {
        // @ts-ignore
        img.__loaded = true;
        // @ts-ignore
        img.__broken = true;
        console.warn(`Failed to load ${key} ${src}`, e);
      };
      imgs[key] = img;
    });
    imagesRef.current = imgs;
  }

  function spawnParticle(width: number, height: number) {
    const edges = ["top", "right", "bottom", "left"];
    const edge = edges[Math.floor(Math.random() * edges.length)];
    let x, y, vx, vy;
    const speedBase = 0.03 + Math.random() * 0.08;
    const size = 32 + Math.random() * 40;
    const rotation = Math.random() * Math.PI * 2;
    const rotSpeed = (Math.random() - 0.5) * 0.002;
    const types = Object.keys(imagesRef.current);
    const type = types.length
      ? types[Math.floor(Math.random() * types.length)]
      : "git";

    switch (edge) {
      case "top":
        x = Math.random() * width;
        y = -size;
        vx = (width / 2 - x) * (0.00012 + Math.random() * 0.0003);
        vy = speedBase + Math.random() * 0.06;
        break;
      case "bottom":
        x = Math.random() * width;
        y = height + size;
        vx = (width / 2 - x) * (0.00012 + Math.random() * 0.0003);
        vy = -(speedBase + Math.random() * 0.06);
        break;
      case "left":
        x = -size;
        y = Math.random() * height;
        vx = speedBase + Math.random() * 0.06;
        vy = (height / 2 - y) * (0.00012 + Math.random() * 0.0003);
        break;
      case "right":
        x = width + size;
        y = Math.random() * height;
        vx = -(speedBase + Math.random() * 0.06);
        vy = (height / 2 - y) * (0.00012 + Math.random() * 0.0003);
        break;
      default:
        x = Math.random() * width;
        y = Math.random() * height;
        vx = (Math.random() - 0.5) * 0.2;
        vy = (Math.random() - 0.5) * 0.2;
    }

    const life = 9000 + Math.random() * 12000;
    const particle = {
      x,
      y,
      vx,
      vy,
      size,
      baseSize: size,
      rotation,
      rotSpeed,
      type,
      life,
      born: performance.now(),
      hoverScale: 1,
    };
    particlesRef.current.push(particle);
  }

  function drawFallback(ctx: CanvasRenderingContext2D, p: any, key: string, glowColor: string, glowAlpha: number) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    const r = p.size * p.hoverScale * 0.55;
    const grad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 1.2);
    grad.addColorStop(0, `rgba(0,0,0,0.84)`);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.globalAlpha = 0.22 * glowAlpha;
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(0, 0, p.size * p.hoverScale * 0.46, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.font = `${Math.max(10, (p.size * p.hoverScale) / 3)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const initials = initialsMap[key] || key[0].toUpperCase();
    ctx.fillText(initials, 0, 0);

    ctx.restore();
  }

  function animate(now: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const width = canvas.width;
    const height = canvas.height;
    const delta = Math.min(40, now - lastTimeRef.current);
    lastTimeRef.current = now;

    const spawnInterval = 300 * (1 + (1 - modeMultiplier) * 0.35);

    if (now - lastSpawnRef.current > spawnInterval) {
      spawnParticle(width, height);
      lastSpawnRef.current = now;
    }

    // Background - Slightly more transparent to blend with overlay
    ctx.clearRect(0, 0, width, height);
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "rgba(5,5,5,0.98)");
    g.addColorStop(1, "rgba(10,10,10,1)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    const nowMs = now;
    const parts = particlesRef.current;
    const cursor = mouseRef.current;
    const attractionRadius = 160;
    const attractionStrength = 0.0009;
    const hoverRadius = 64;

    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      const age = nowMs - p.born;
      if (age > p.life) {
        parts.splice(i, 1);
        continue;
      }

      let hoverFactor = 0;
      if (cursor.x !== null && cursor.y !== null) {
        // @ts-ignore
        const dxh = cursor.x - p.x;
        // @ts-ignore
        const dyh = cursor.y - p.y;
        const dh = Math.sqrt(dxh * dxh + dyh * dyh) + 0.001;
        if (dh < hoverRadius) hoverFactor = 1 - dh / hoverRadius;
      }

      const targetScale = 1 + hoverFactor * 0.32 * modeMultiplier;
      p.hoverScale += (targetScale - p.hoverScale) * 0.18;

      if (cursor.grabbed === p) {
        // @ts-ignore
        const mx = cursor.x;
        // @ts-ignore
        const my = cursor.y;
        const lerp = 0.22;
        p.x += (mx - p.x) * lerp;
        p.y += (my - p.y) * lerp;
        p.vx = 0;
        p.vy = 0;
        p.rotation += p.rotSpeed * delta;
      } else {
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.rotation += p.rotSpeed * delta;

        p.vx += Math.sin((p.x + nowMs * 0.00012) * 0.01) * 0.00025;
        p.vy += Math.cos((p.y + nowMs * 0.00012) * 0.01) * 0.00025;

        if (cursor.x !== null && cursor.y !== null) {
          // @ts-ignore
          const mx = cursor.x;
          // @ts-ignore
          const my = cursor.y;
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
          if (dist < attractionRadius) {
            const baseStrength = cursor.isDown
              ? attractionStrength * 3.2
              : attractionStrength;
            const str =
              (1 - dist / attractionRadius) * baseStrength * modeMultiplier;
            p.vx += (dx / dist) * str * delta;
            p.vy += (dy / dist) * str * delta;
            const maxV = 0.5;
            p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
            p.vy = Math.max(-maxV, Math.min(maxV, p.vy));
          }
        }
      }

      const img = imagesRef.current[p.type];
      const glowColor = glowColorMap[p.type] || "rgba(255,255,255,1)";

      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const speedFactor = Math.min(1, speed / 0.6);
      let proximityFactor = 0;
      if (cursor.x !== null && cursor.y !== null) {
        // @ts-ignore
        const dxp = cursor.x - p.x;
        // @ts-ignore
        const dyp = cursor.y - p.y;
        const dp = Math.sqrt(dxp * dxp + dyp * dyp) + 0.001;
        proximityFactor = Math.max(0, 1 - dp / attractionRadius);
      }

      const glowAlphaBase = 0.12 * modeMultiplier;
      const glowAlpha = Math.min(
        0.7,
        glowAlphaBase + speedFactor * 0.18 + proximityFactor * 0.22
      );

      ctx.save();
      const glowRadius =
        p.size *
        p.hoverScale *
        (0.95 + hoverFactor * 0.45 + speedFactor * 0.35);
      ctx.translate(p.x, p.y);

      const rad = ctx.createRadialGradient(
        0,
        0,
        glowRadius * 0.08,
        0,
        0,
        glowRadius
      );
      rad.addColorStop(
        0,
        glowColor.replace(
          /rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/,
          `rgba($1,$2,$3,${Math.max(0.03, glowAlpha * 0.65)})`
        )
      );
      rad.addColorStop(
        0.35,
        glowColor.replace(
          /rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/,
          `rgba($1,$2,$3,${Math.max(0.01, glowAlpha * 0.18)})`
        )
      );
      rad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 1.0;
      ctx.fillStyle = rad;
      ctx.beginPath();
      ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      // @ts-ignore
      if (img && img.__loaded && !img.__broken && img.naturalWidth > 0) {
        const aspect = img.naturalWidth / img.naturalHeight || 1;
        let w = p.size * p.hoverScale * 0.96;
        let h = p.size * p.hoverScale * 0.96;
        if (aspect > 1) {
          h = (p.size * p.hoverScale * 0.96) / aspect;
        } else {
          w = p.size * p.hoverScale * 0.96 * aspect;
        }
        try {
          ctx.drawImage(img, -w / 2, -h / 2, w, h);
        } catch (err) {
          console.warn("drawImage failed", err, img.src);
          // @ts-ignore
          img.__broken = true;
          drawFallback(ctx, p, p.type, glowColor, glowAlpha);
        }
      } else {
        drawFallback(ctx, p, p.type, glowColor, glowAlpha);
      }

      ctx.globalCompositeOperation = "lighter";
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        (p.size * p.hoverScale) / 2 + 3 + hoverFactor * 4,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = glowColor.replace(
        /rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)/,
        `rgba($1,$2,$3,${Math.max(0.04, glowAlpha * 0.18)})`
      );
      ctx.lineWidth = Math.max(
        2,
        3 * modeMultiplier + hoverFactor * 4 + speedFactor * 2
      );
      ctx.stroke();

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    rafRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function fit() {
      const dpr = window.devicePixelRatio || 1;
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      canvas!.width = Math.max(300, Math.floor(vw * dpr));
      canvas!.height = Math.max(200, Math.floor(vh * dpr));
      canvas!.style.width = `${vw}px`;
      canvas!.style.height = `${vh}px`;
      const ctx = canvas!.getContext("2d");
      if(ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
    }

    function onMouseMove(e: MouseEvent) {
        if(!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x =
        (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseRef.current.y =
        (e.clientY - rect.top) * (canvas.height / rect.height);
    }

    function onMouseLeave() {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }

    function onMouseDown(e: MouseEvent) {
        if(!canvas) return;
      mouseRef.current.isDown = true;
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
      const my = (e.clientY - rect.top) * (canvas.height / rect.height);

      const grabRadius = 48;
      let best = null;
      let bestDist = Infinity;
      for (const p of particlesRef.current) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < grabRadius && d < bestDist) {
          best = p;
          bestDist = d;
        }
      }
      if (best) {
        mouseRef.current.grabbed = best;
      }
    }

    function onMouseUp(e: MouseEvent) {
        if(!canvas) return;
      mouseRef.current.isDown = false;
      const g = mouseRef.current.grabbed;
      if (g) {
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
        const my = (e.clientY - rect.top) * (canvas.height / rect.height);
        const dx = g.x - mx;
        const dy = g.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        const push = 0.2;
        g.vx = (dx / dist) * push * modeMultiplier;
        g.vy = (dy / dist) * push * modeMultiplier;
        mouseRef.current.grabbed = null;
      }
    }

    loadImages();
    fit();

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", fit);

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", fit);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      particlesRef.current = [];
    };
  }, [mode, modeMultiplier]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-auto overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="block w-screen h-screen"
      />
    </div>
  );
}

export default AnimatedLogos;