import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-4 md:gap-6">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer hover:shadow-[#25D366]/60 transition-shadow border-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </motion.a>

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/contact"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full gold-gradient text-black flex items-center justify-center shadow-2xl shadow-primary/40 cursor-pointer hover:shadow-primary/60 transition-shadow border-none"
          aria-label="Contact us"
        >
          <Phone className="w-7 h-7 md:w-8 md:h-8" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
