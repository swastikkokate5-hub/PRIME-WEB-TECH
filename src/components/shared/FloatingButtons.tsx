import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col gap-3">
      {/* Prime Web Tech Gold WhatsApp Button */}
      <motion.a
        href="https://wa.me/917276815079?text=Hello%20Prime%20Web%20Tech,%20I'm%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-primary text-black flex items-center justify-center shadow-lg border border-black/10 cursor-pointer transition-all relative group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
