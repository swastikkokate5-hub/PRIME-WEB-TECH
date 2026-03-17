import React from 'react';
import { motion } from 'framer-motion';

const FloatingCircles: React.FC = () => {
  const circles = [
    { size: 300, delay: 0, duration: 20, color: 'primary', opacity: 0.1, x: '10%', y: '20%' },
    { size: 200, delay: 2, duration: 15, color: 'accent', opacity: 0.15, x: '80%', y: '60%' },
    { size: 250, delay: 4, duration: 18, color: 'primary', opacity: 0.08, x: '60%', y: '10%' },
    { size: 180, delay: 1, duration: 22, color: 'accent', opacity: 0.12, x: '30%', y: '70%' },
    { size: 150, delay: 3, duration: 16, color: 'primary', opacity: 0.1, x: '90%', y: '30%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl`}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            background: circle.color === 'primary' 
              ? 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            opacity: circle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCircles;
