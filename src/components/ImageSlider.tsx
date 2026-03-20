import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, images]);

  const nextSlide = () => {
    if (images.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (images.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95,
    }),
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center glass rounded-[3.5rem] border border-primary/10">
        <span className="text-muted-foreground font-medium italic opacity-50">No project highlights available</span>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full max-w-[500px] aspect-video sm:aspect-square md:h-[400px] mx-auto group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Project Image Slider"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 gold-gradient blur-[80px] opacity-20 -z-10 animate-pulse" />
      
      {/* Floating Container */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full glass rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-primary/10 premium-shadow overflow-hidden p-3 md:p-6 relative"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            className="absolute inset-0 flex items-center justify-center p-6 md:p-10"
          >
            <motion.img
              src={images[currentIndex]}
              alt={`Project Highlight ${currentIndex + 1}`}
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/20 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/20 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    index === currentIndex ? 'w-4 md:w-6 bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'w-1 md:w-1.5 bg-primary/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
