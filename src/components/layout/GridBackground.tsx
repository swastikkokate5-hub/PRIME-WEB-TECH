import React, { useEffect, useState } from 'react';

const GridBackground: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check for reduced motion preference or small screens
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      return;
    }

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center (-1 to 1)
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      // Imperceptible subtle movement capped between 2px and 4px
      targetX = normX * 3.5;
      targetY = normY * 3.5;
    };

    const animate = () => {
      // Smooth linear interpolation damping
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setOffset({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Dynamic Grid Canvas with subtle 2-4px parallax */}
      <div
        className="absolute -inset-[20px] technical-grid-canvas"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: 'transform',
        }}
      />

      {/* Editorial Soft Radial Vignette / Vignette Depth */}
      <div
        className="absolute inset-0 technical-grid-vignette"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default GridBackground;
