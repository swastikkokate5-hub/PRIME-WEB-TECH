import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Globe, 
  Shield, 
  BarChart3, 
  Users, 
  Rocket, 
  Cpu, 
  MessageSquare, 
  Bot, 
  PhoneCall, 
  Layout, 
  Settings 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { label: 'Global Clients', value: '150+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Projects Completed', value: '500+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Success Rate', value: '99%', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Team Experts', value: '50+', icon: <Users className="w-6 h-6" /> },
  ];

  const coreServices = services.slice(0, 4);

  return (
    <div className="overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
        {/* Animated Background Circles & Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Main Soft Gradient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
          
          {/* Floating Premium Circles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0
              }}
              animate={{ 
                y: [null, i % 2 === 0 ? "-10%" : "10%", "0%"],
                x: [null, i % 3 === 0 ? "5%" : "-5%", "0%"],
                opacity: [0, 0.3, 0],
                scale: [null, 1.1, 0.9]
              }}
              transition={{ 
                duration: 15 + Math.random() * 10, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10
              }}
              className={`absolute rounded-full blur-[80px] ${
                i % 3 === 0 ? 'bg-primary/20 w-80 h-80' : 
                i % 3 === 1 ? 'bg-white/10 dark:bg-white/5 w-64 h-64 border border-primary/5' : 
                'bg-accent/10 w-96 h-96'
              }`}
            />
          ))}
          
          <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold mb-8 shadow-xl tracking-[0.2em] uppercase"
            >
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              <span>Future-Ready Technology Solutions</span>
            </motion.div>
            
            <div className="relative mb-8">
              <div className="absolute -inset-10 blur-[100px] bg-primary/10 -z-10 rounded-full scale-150 animate-pulse-slow" />
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] text-foreground"
              >
                Prime Web Tech — <br />
                <span className="gold-text-gradient text-glow-gold">Building Future</span> With AI & Modern Tech
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              We create high-end websites, apps, AI systems, and automation tools 
              tailored for modern businesses ready to dominate the digital landscape.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="lg" className="gold-gradient text-black px-12 rounded-full text-base h-14 font-black group shadow-2xl hover:shadow-primary/30 border-none transition-all hover:scale-105 active:scale-95">
                <Link to="/contact">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-12 text-base h-14 border-2 font-black hover:bg-muted/50 backdrop-blur-md group transition-all hover:scale-105 active:scale-95">
                <Link to="/services" className="flex items-center">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Premium Digital Solutions</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
              Experience excellence with our suite of high-end services designed to 
              scale your business through modern technology and strategic innovation.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to={`/services/${service.id}`}>
                  <Card className="h-full glass shadow-xl hover:shadow-primary/10 transition-all duration-700 group overflow-hidden rounded-[2.5rem] border-none glow-gold-hover premium-shadow">
                    <CardContent className="p-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mb-10 w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shadow-xl group-hover:shadow-primary/20 transition-all"
                      >
                        {React.cloneElement(service.icon as React.ReactElement<any>, { 
                          className: "w-8 h-8 text-black" 
                        })}
                      </motion.div>
                      <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight uppercase">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-primary font-black text-sm group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                        Explore <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-sm font-black border-2 group transition-all hover:gold-gradient hover:text-black hover:border-transparent uppercase tracking-widest">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">Why Global Leaders Trust <br /> <span className="gold-text-gradient">Prime Web Tech</span></h2>
              <div className="space-y-8">
                {[
                  'Elite Team of Industry Veterans',
                  'Cutting-Edge AI-Native Workflow',
                  'Ultra-Fast Development Lifecycle',
                  'Enterprise-Grade Security Protocol',
                  'Bespoke Premium Design Language'
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-xl font-bold group-hover:text-primary transition-colors tracking-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="mt-16 gold-gradient text-black hover:scale-105 rounded-full px-12 h-16 text-xl font-black shadow-2xl shadow-primary/30 border-none transition-all uppercase tracking-widest">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </motion.div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Shield className="w-10 h-10" />, title: 'Unmatched Security', desc: 'Enterprise-grade protocols to protect your digital assets and user data.' },
                { icon: <BarChart3 className="w-10 h-10" />, title: 'Scalable ROI', desc: 'Data-driven strategies that deliver measurable business growth and impact.' },
                { icon: <Globe className="w-10 h-10" />, title: 'Global Reach', desc: 'Architecture designed for millions of users worldwide across all platforms.' },
                { icon: <Zap className="w-10 h-10" />, title: 'Fast Execution', desc: 'From vision to reality in record time without compromising quality.' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="p-10 rounded-[3rem] glass shadow-xl hover:shadow-primary/10 transition-all duration-500 border-none glow-gold-hover premium-shadow"
                >
                  <div className="mb-8 p-4 rounded-2xl bg-primary/10 w-fit text-primary group-hover:gold-gradient group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 tracking-tight uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border/50 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-6 group-hover:gold-gradient group-hover:text-black transition-all text-primary shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black mb-2 gold-text-gradient tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[120px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">BUILD YOUR <br /> <span className="gold-text-gradient">LEGACY</span> NOW</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed font-medium">
              Join elite industry leaders who have transformed their digital presence with Prime Web Tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="gold-gradient text-black rounded-full px-12 h-16 text-xl font-black shadow-xl hover:shadow-primary/20 transition-all hover:scale-105 border-none">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-12 h-16 text-xl font-black transition-all hover:scale-105 backdrop-blur-md border-2 border-primary/20">
                <Link to="/contact">Talk to Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
