import React from 'react';
import { motion } from 'framer-motion';

const FloatingCircles: React.FC = () => {
  // Reduced from 5 to 3 circles for performance
  const circles = [
    { size: 200, delay: 0, duration: 25, color: 'primary', opacity: 0.06, x: '15%', y: '25%' },
    { size: 180, delay: 2, duration: 30, color: 'accent', opacity: 0.08, x: '75%', y: '65%' },
    { size: 150, delay: 4, duration: 28, color: 'primary', opacity: 0.05, x: '50%', y: '15%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            background: circle.color === 'primary' 
              ? 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
            opacity: circle.opacity,
            filter: 'blur(40px)', // Reduced blur from 60px
          }}
          animate={{
            y: [0, -20, 0], // Reduced movement
            x: [0, 15, 0],
            scale: [1, 1.05, 1], // Reduced scale change
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
