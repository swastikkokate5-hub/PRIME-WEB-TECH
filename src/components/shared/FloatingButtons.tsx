import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-4 md:gap-6">
      {/* Single Gold WhatsApp Button */}
      <motion.a
        href="https://wa.me/917276815079?text=Hello%20Prime%20Web%20Tech,%20I'm%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full gold-gradient text-black flex items-center justify-center shadow-2xl shadow-primary/40 cursor-pointer hover:shadow-primary/60 transition-all border-none relative group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 animate-pulse" />
        
        {/* Optional glowing effect behind the button */}
        <div className="absolute inset-0 rounded-full gold-gradient opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
