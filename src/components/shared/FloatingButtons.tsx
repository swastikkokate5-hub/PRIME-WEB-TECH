import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-6">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/15550008324"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer animate-pulse-gold border-none"
      >
        <MessageCircle className="w-8 h-8" />
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
          className="w-16 h-16 rounded-full gold-gradient text-black flex items-center justify-center shadow-2xl shadow-primary/40 cursor-pointer border-none"
        >
          <Phone className="w-8 h-8" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
