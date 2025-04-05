import { useEffect, useRef } from 'react';

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.002;
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradient orbs
      const orbs = [
        { x: canvas.width * 0.3, y: canvas.height * 0.3, color: '#F15A24' },
        { x: canvas.width * 0.7, y: canvas.height * 0.6, color: '#F15A24' },
      ];

      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(
          orb.x + Math.sin(time) * 50,
          orb.y + Math.cos(time) * 30,
          0,
          orb.x + Math.sin(time) * 50,
          orb.y + Math.cos(time) * 30,
          300
        );

        gradient.addColorStop(0, `${orb.color}20`);
        gradient.addColorStop(0.5, `${orb.color}10`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-[#1A1A1A] opacity-40"
    />
  );
} 