import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import FooterNetworkGlobe from '@/components/common/FooterNetworkGlobe';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Dev', path: '/services/web-dev' },
    { name: 'App Dev', path: '/services/app-dev' },
    { name: 'AI Solutions', path: '/services/ai-services' },
    { name: 'Voice Bots', path: '/services/ai-voice-bot' },
    { name: 'WhatsApp Bots', path: '/services/whatsapp-bot' },
  ];

  const quickLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing Plans', path: '/pricing' },
    { name: 'Contact Sales', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface/40 pt-20 pb-12 relative overflow-hidden">
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-border">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded border border-border bg-surface flex items-center justify-center p-1 group-hover:border-primary/60 transition-colors">
                <img src="/main logo prime web.svg" alt="PRIME WEB TECH Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-base font-bold tracking-tight text-foreground uppercase group-hover:text-primary transition-colors">
                PRIME WEB TECH
              </span>
            </Link>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
              Empowering modern businesses with elite digital solutions,
              from high-end platforms to sophisticated AI systems.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Twitter, label: 'Twitter', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/prime_web_tech' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/prime-web-tech/' }
              ].map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="mono-label text-[10px] text-muted-foreground">// SERVICES</div>
            <ul className="flex flex-col gap-2.5">
              {services.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-foreground text-xs font-normal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="mono-label text-[10px] text-muted-foreground">// COMPANY</div>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-foreground text-xs font-normal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="mono-label text-[10px] text-muted-foreground">// GET IN TOUCH</div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="mono-label text-[9px] text-muted-foreground">Email</span>
                  <a href="mailto:contact@primewebtech.online" className="text-foreground text-xs font-medium hover:text-primary transition-colors">
                    contact@primewebtech.online
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="mono-label text-[9px] text-muted-foreground">Phone</span>
                  <span className="text-foreground text-xs font-medium">+91 72768 15079</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="mono-label text-[9px] text-muted-foreground">Office</span>
                  <span className="text-foreground text-xs font-medium">Narhe, Pune, Maharashtra 411041</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon Sub-footer */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
          <p className="mono-label text-[10px] text-muted-foreground">
            &copy; {currentYear} PRIME WEB TECH. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            <Link to="#" className="mono-label text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="mono-label text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 100% Transparent Decorative Animated Network Globe */}
      <div 
        className="footer-globe absolute pointer-events-none select-none z-[1] overflow-hidden bg-transparent
          w-[380px] h-[380px] sm:w-[440px] sm:h-[440px]
          right-[-180px] sm:right-[-210px]
          top-[32%] sm:top-[30%]
          md:w-[540px] md:h-[540px]
          md:right-[-40px] md:top-auto md:bottom-[-200px]
          lg:w-[650px] lg:h-[650px]
          lg:right-[6%] lg:bottom-[-330px]
          xl:w-[720px] xl:h-[720px]
          xl:right-[10%] xl:bottom-[-370px]
          2xl:w-[780px] 2xl:h-[780px]
          2xl:right-[14%] 2xl:bottom-[-400px]
        " 
        style={{ background: 'transparent' }}
        aria-hidden="true"
      >
        <FooterNetworkGlobe />
      </div>
    </footer>
  );
};

export default Footer;
