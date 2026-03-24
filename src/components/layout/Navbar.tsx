import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Plans', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-background/85 backdrop-blur-md border-b border-border/50 shadow-sm' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 outline-none ring-0 border-none">
              <img src="/main logo prime web.svg" alt="PRIME WEB TECH Logo" className="w-full h-full object-contain outline-none ring-0 border-none" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                PRIME WEB TECH
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80 mt-[2px] whitespace-nowrap">
                Digital Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-all hover:text-primary relative group py-2 ${isActive(link.path) ? 'text-primary' : 'text-foreground/70'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button asChild className="rounded-full gold-gradient text-black text-sm font-black hover:scale-105 transition-all duration-300 shadow-lg border-none px-8 h-11 hover:shadow-primary/20">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full w-10 h-10 hover:bg-muted"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Optimized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border mt-4 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-wide transition-colors ${isActive(link.path) ? 'text-primary' : 'text-foreground'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="rounded-full gold-gradient text-black font-bold mt-4 border-none h-12 w-full">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
