import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles,
  Layers, 
  Rocket, 
  Zap, 
  Target 
} from 'lucide-react';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import PortfolioSection from '@/components/PortfolioSection';
import ImageSlider from '@/components/ImageSlider';
import { ProjectCategory, projects } from '@/data/projects';
import PageMeta from '@/components/common/PageMeta';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-24 text-center">
        <div className="container mx-auto px-4">
          <Rocket className="w-24 h-24 text-primary mx-auto mb-8 animate-float" />
          <h1 className="text-6xl font-black mb-8 tracking-tighter">Service Not Found</h1>
          <p className="text-2xl text-muted-foreground mb-12 font-medium">This premium solution is coming soon or has been moved.</p>
          <Button asChild className="rounded-full gold-gradient text-black px-12 h-16 text-xl font-black border-none">
            <Link to="/services">Back to All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const workflow = [
    { title: 'Discovery', desc: 'Deep analysis of your business goals and technical requirements.' },
    { title: 'Strategy', desc: 'Crafting a bespoke roadmap for implementation and development.' },
    { title: 'Development', desc: 'Agile development with continuous integration and testing.' },
    { title: 'Launch', desc: 'Strategic deployment and ongoing performance optimization.' }
  ];

  // Map service ID to project category
  const getCategoryForService = (serviceId: string): ProjectCategory | undefined => {
    const categoryMap: Record<string, ProjectCategory> = {
      'web-dev': 'websites',
      'app-dev': 'apps',
      'ai-services': 'ai',
      'ai-voice-bot': 'ai',
      'whatsapp-bot': 'whatsapp',
      'system-design': 'design',
      'automation': 'ai',
      'hosting': 'websites',
      'seo': 'websites'
    };
    return categoryMap[serviceId];
  };

    const serviceCategory = getCategoryForService(service.id);

    // Get images for the slider from the project portfolio
    const sliderImages = serviceCategory 
      ? projects.filter(p => p.category === serviceCategory).map(p => p.image)
      : [];

    return (
      <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
        <PageMeta 
          title={service.metaTitle || `${service.title} | PrimeWenTech`} 
          description={service.metaDescription || service.shortDescription}
        />
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/5 blur-[100px] -z-10 rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Button 
            variant="ghost" 
            onClick={() => navigate('/services')}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary p-0 h-auto hover:bg-transparent font-bold tracking-widest uppercase text-[10px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            Back to Services
          </Button>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold mb-10 shadow-lg tracking-[0.2em] uppercase mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Premium Solution</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-tight text-foreground uppercase tracking-tighter">{service.title}</h1>
            <p className="text-base md:text-xl text-muted-foreground mb-16 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              {service.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button asChild size="lg" className="rounded-full px-12 h-16 gold-gradient text-black text-xl font-black shadow-2xl hover:scale-105 transition-all border-none uppercase tracking-widest active:scale-95 w-full sm:w-auto">
                <Link to="/contact">Start Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-12 h-16 border-2 text-xl font-black hover:scale-105 transition-all uppercase tracking-widest active:scale-95 w-full sm:w-auto">
                <Link to="/pricing">View Plans</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 relative perspective-1000"
          >
            <div className="absolute inset-0 gold-gradient blur-[100px] opacity-15 -z-10" />
            {sliderImages.length > 0 ? (
              <ImageSlider images={sliderImages} />
            ) : (
              <div className="relative glass p-6 rounded-[3.5rem] shadow-2xl border-none premium-shadow">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-[2.5rem] object-cover shadow-2xl brightness-90 group-hover:brightness-100 transition-all duration-700" 
                />
              </div>
            )}
          </motion.div>
        </div>

        {/* Service-Specific Portfolio Section - REPLACES Elite Capability Section */}
        {serviceCategory && (
          <PortfolioSection 
            filterByCategory={serviceCategory}
            showFilters={false}
            title={`${service.title} Projects`}
            subtitle={`Explore our portfolio of ${service.title.toLowerCase()} projects delivered for real businesses.`}
            maxProjects={6}
          />
        )}

        {/* Workflow Section */}
        <section className="py-24 bg-secondary/10 rounded-[3rem] px-8 md:px-16 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <Layers className="w-72 h-72 text-primary animate-float" />
          </div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Our Workflow</h2>
            <p className="text-muted-foreground text-base leading-relaxed font-medium">A proven 4-step process to bring your vision to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflow.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-8xl font-black text-primary/5 absolute -top-12 -left-6 -z-10 group-hover:text-primary/10 transition-colors">0{i+1}</div>
                <div className="p-10 rounded-[2.5rem] glass border-none hover:shadow-primary/10 transition-all duration-700 h-full glow-gold-hover">
                  <h4 className="text-xl font-bold mb-4 tracking-tight text-primary uppercase">{step.title}</h4>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers Preview */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-foreground text-glow-gold">Custom Solutions</h2>
            <p className="text-muted-foreground text-base leading-relaxed font-medium">Bespoke pricing tailored to your unique requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Basic', price: 'Custom Quote', color: 'primary/10' },
              { name: 'Professional', price: 'Custom Quote', color: 'primary/20', featured: true },
              { name: 'Enterprise', price: 'Custom Quote', color: 'primary/30' }
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[3rem] glass relative overflow-hidden transition-all duration-700 hover:-translate-y-2 shadow-xl border-none ${tier.featured ? 'scale-105 shadow-primary/20 z-10' : ''}`}
              >
                {tier.featured && <div className="absolute top-0 right-0 gold-gradient text-black px-6 py-1.5 font-black uppercase text-[10px] rounded-bl-2xl shadow-lg">Best Value</div>}
                <div className="mb-8 text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">{tier.name}</div>
                <div className="text-4xl font-black mb-10 tracking-tighter text-foreground">{tier.price}</div>
                <ul className="space-y-4 mb-12">
                  {['Premium Design', '24/7 Support', 'Fast Delivery', 'High Performance'].map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground text-sm font-bold group/feat">
                      <Zap className="w-4 h-4 text-primary group-hover/feat:scale-125 transition-transform" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full h-12 rounded-xl text-sm font-bold border-none transition-all bg-muted text-foreground hover-gold ${tier.featured ? 'scale-105 shadow-lg shadow-primary/20' : ''}`}>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-24 rounded-[3.5rem] bg-[#0a0a0a] border border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
          <Target className="absolute -top-20 -right-20 w-64 h-64 text-primary/5 animate-float" />
          <Zap className="absolute -bottom-20 -left-20 w-64 h-64 text-primary/5 animate-float" style={{ animationDelay: '2.5s' }} />
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-white leading-none">READY TO <br /> <span className="gold-text-gradient">TRANSFORM?</span></h2>
          <Button asChild size="lg" className="gold-gradient text-black hover:scale-105 rounded-full px-12 h-16 text-xl font-black shadow-xl transition-all border-none">
            <Link to="/contact">Get a Quote Now</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
