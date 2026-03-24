import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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

  return (
    <footer className="bg-secondary/20 pt-24 pb-12 border-t border-border/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/5 blur-[100px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img src="/main logo prime web.svg" alt="PRIME WEB TECH Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors duration-500">
                PRIME WEB TECH
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium max-w-xs">
              Empowering modern businesses with elite digital solutions,
              from high-end platforms to sophisticated AI systems.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:gold-gradient hover:text-black hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/50">Services</h4>
            <ul className="flex flex-col gap-4">
              {services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/50">Company</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/50">Get in Touch</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary shrink-0 group-hover:gold-gradient group-hover:text-black transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</span>
                  <span className="text-foreground text-sm font-bold">Primewebtech1@gmail.com</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary shrink-0 group-hover:gold-gradient group-hover:text-black transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone</span>
                  <span className="text-foreground text-sm font-bold">+91 72768 15079</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary shrink-0 group-hover:gold-gradient group-hover:text-black transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Office</span>
                  <span className="text-foreground text-sm font-bold">Narhe, Pune, Maharashtra 411041</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} PRIME WEB TECH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link to="#" className="text-muted-foreground hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
