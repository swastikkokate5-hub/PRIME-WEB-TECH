import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', index: '01' },
    { name: 'Services', path: '/services', index: '02' },
    { name: 'Portfolio', path: '/portfolio', index: '03' },
    { name: 'Plans', path: '/pricing', index: '04' },
    { name: 'Blog', path: '/blog', index: '05' },
    { name: 'About', path: '/about', index: '06' },
    { name: 'Contact', path: '/contact', index: '07' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-background/80 backdrop-blur-xl border-b border-border'
          : 'py-5 bg-transparent border-b border-border/40'
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm transition-opacity"
            aria-label="Prime Web Tech Home"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center shrink-0 border border-border rounded-md bg-surface p-1 transition-transform duration-300 group-hover:border-primary/60">
              <img
                src="/main logo prime web.svg"
                alt="PRIME WEB TECH Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors uppercase whitespace-nowrap">
              PRIME WEB TECH
            </span>
          </Link>

          {/* Desktop Editorial Navigation with Studio Indexing */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative py-1.5 flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 ${
                    active ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground font-medium'
                  }`}
                >
                  <span
                    className={`mono-label text-[10px] transition-colors ${
                      active ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-primary'
                    }`}
                  >
                    {link.index}
                  </span>
                  <span>{link.name}</span>
                  {/* Subtle hairline underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-primary transition-all duration-300 ease-out ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Studio Theme Toggle & Minimal CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-primary" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>

            <Button
              asChild
              className="rounded-md h-9 px-5 text-xs font-semibold uppercase tracking-wider bg-foreground text-background hover:bg-primary hover:text-black border border-transparent transition-all duration-200"
            >
              <Link to="/contact" className="inline-flex items-center gap-1.5">
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-primary" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center text-foreground hover:text-primary transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border mt-3 shadow-xl"
          >
            <div className="container-responsive py-6 flex flex-col">
              <div className="divide-y divide-border">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
                        active ? 'text-primary font-semibold' : 'text-foreground hover:text-primary font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="mono-label text-xs text-muted-foreground">
                          {link.index}
                        </span>
                        <span>{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/60" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-6 mt-4">
                <Button
                  asChild
                  className="w-full h-11 rounded-md text-xs font-bold uppercase tracking-wider bg-primary text-black hover:bg-primary/90 transition-all border-none"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
