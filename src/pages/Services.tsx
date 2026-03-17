import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Filter, Rocket, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PortfolioSection from '@/components/PortfolioSection';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-full h-full bg-grid opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold mb-8 shadow-lg tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Our Elite Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Our <span className="gold-text-gradient">Premium</span> Services</h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Discover our world-class digital solutions, crafted for businesses 
            that demand the absolute best in design, performance, and strategic innovation.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="relative group">
            <div className="absolute inset-0 gold-gradient blur-2xl opacity-5 group-focus-within:opacity-10 transition-all rounded-full" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
            <Input 
              type="text" 
              placeholder="Search premium services..." 
              className="w-full h-16 pl-16 pr-8 rounded-full glass border border-border focus:border-primary transition-all text-lg font-medium focus:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/services/${service.id}`}>
                  <Card className="h-full glass border-none shadow-xl hover:shadow-primary/10 transition-all duration-700 group overflow-hidden rounded-[2.5rem] glow-gold-hover premium-shadow">
                    <CardHeader className="p-10 pb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mb-8 w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shadow-xl group-hover:shadow-primary/20 transition-all"
                      >
                        {React.cloneElement(service.icon as React.ReactElement<any>, { 
                          className: "w-8 h-8 text-black" 
                        })}
                      </motion.div>
                      <CardTitle className="text-2xl font-black mb-2 tracking-tight group-hover:text-primary transition-colors uppercase tracking-tighter">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-10 pt-0">
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-10 min-h-[4rem] font-medium">
                        {service.shortDescription}
                      </CardDescription>
                      
                      <div className="pt-8 border-t border-border/50 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Starting From</span>
                          <span className="text-2xl font-black text-foreground tracking-tighter">{service.pricing.basic}</span>
                        </div>
                        <Button asChild size="icon" variant="ghost" className="h-12 w-12 rounded-full flex items-center justify-center text-primary hover:gold-gradient hover:text-black transition-all duration-500 group-hover:rotate-[360deg] shadow-sm">
                          <Link to={`/services/${service.id}`}>
                            <ArrowRight className="w-6 h-6" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-40">
            <Rocket className="w-20 h-20 text-muted-foreground mx-auto mb-8 animate-float" />
            <h3 className="text-3xl font-black mb-4 tracking-tight">No premium services found</h3>
            <p className="text-muted-foreground text-xl font-medium">Try searching for something else or contact us for custom solutions.</p>
          </div>
        )}
      </div>

      {/* Portfolio Section */}
      <PortfolioSection 
        showFilters={true}
        title="Our Work"
        subtitle="Real projects delivered for real businesses. Explore our portfolio of websites, apps, AI solutions, and automation tools."
      />
    </div>
  );
};

export default Services;
