import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Rocket, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PortfolioSection from '@/components/PortfolioSection';
import PageMeta from '@/components/common/PageMeta';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Solutions & Software Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Prime Web Tech",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Development & Automation"
          }
        }
      ]
    }
  };

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title="Expert IT Services in Pune | Web, App & AI Development | Prime Web Tech"
        description="Explore our premium IT services in Pune: Custom Web Development, Mobile Apps, AI Solutions, and Business Automation tailored for global success."
        url="/services"
        schema={servicesSchema}
      />

      <div className="container-responsive relative z-10">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <div className="studio-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Our Elite Expertise</span>
          </div>
          <h1 className="hero-headline text-foreground mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.98 }}>
            Our <span className="text-primary">Premium</span> Services
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Discover our world-class digital solutions, crafted for businesses 
            that demand the absolute best in design, performance, and strategic innovation.
          </p>
        </div>

        {/* Minimal Editorial Search Box */}
        <div className="max-w-xl mb-14">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
            <Input 
              type="text" 
              placeholder="Filter services by capability..." 
              className="w-full h-11 pl-11 pr-4 rounded-md border border-border bg-surface focus:border-primary transition-all text-sm font-normal focus:ring-1 focus:ring-primary shadow-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services List / Grid — Editorial Studio Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              >
                <Link to={`/services/${service.id}`} className="block h-full group">
                  <Card className="studio-card h-full border border-border rounded-lg bg-surface p-7 flex flex-col justify-between transition-all duration-300 shadow-none">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                          {React.cloneElement(service.icon as React.ReactElement<any>, { 
                            className: "w-5 h-5" 
                          })}
                        </div>
                        <span className="mono-label text-[11px] text-muted-foreground">
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <CardDescription className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 font-normal min-h-[3rem]">
                        {service.shortDescription}
                      </CardDescription>
                      
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="mono-label text-[9px] text-muted-foreground">Custom Plans</span>
                          <span 
                            className="text-xs font-bold text-foreground hover:text-primary transition-colors cursor-pointer mt-0.5" 
                            onClick={(e) => { e.preventDefault(); window.location.href='/contact'; }}
                          >
                            Get Quote &rarr;
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-24 border border-dashed border-border rounded-lg bg-surface/50">
            <Rocket className="w-12 h-12 text-muted-foreground/60 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-foreground">No premium services found</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">Try searching for something else or contact us for custom solutions.</p>
          </div>
        )}
      </div>

      {/* Portfolio Section */}
      <PortfolioSection 
        showFilters={true}
        title="Our Work"
        subtitle="Real projects delivered for real businesses. Explore our portfolio of websites, apps, AI solutions, and automation tools."
      />

      {/* SEO Content Section */}
      <section className="py-16 border-t border-border bg-surface/30">
        <div className="container-responsive">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border-l border-border pl-5">
              <h2 className="text-base font-bold mb-2 uppercase tracking-tight text-foreground">Web Development in Pune</h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                We provide professional web development in Pune, India and worldwide including React, Node.js, ecommerce, SaaS and custom websites. Our web solutions are built for performance and search visibility.
              </p>
            </div>
            <div className="border-l border-border pl-5">
              <h2 className="text-base font-bold mb-2 uppercase tracking-tight text-foreground">Custom Software Solutions</h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                As a leading custom software development company in Pune, we serve startups, established companies, and global clients with tailored software that solves complex business challenges.
              </p>
            </div>
            <div className="border-l border-border pl-5">
              <h2 className="text-base font-bold mb-2 uppercase tracking-tight text-foreground">AI Development Services</h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                Our AI development services include chatbot creation, WhatsApp bot development, Telegram bot automation, calling AI agents, and advanced business automation systems for modern enterprises.
              </p>
            </div>
            <div className="border-l border-border pl-5">
              <h2 className="text-base font-bold mb-2 uppercase tracking-tight text-foreground">Professional UI UX Design</h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                We offer professional UI UX design services for web apps, mobile apps, and SaaS products, ensuring a premium user experience that drives engagement and conversion.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center max-w-3xl mx-auto">
            <p className="mono-label text-[10px] text-muted-foreground leading-relaxed">
              All services are custom priced based on project requirements. 
              Contact us to get a quote for web development, mobile apps, AI, software and automation services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
