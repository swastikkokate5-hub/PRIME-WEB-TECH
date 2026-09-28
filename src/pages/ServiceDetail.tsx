import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles,
  Layers, 
  Rocket, 
  Zap, 
  CheckCircle2,
  ArrowRight
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
        <div className="container-responsive">
          <Rocket className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Service Not Found</h1>
          <p className="text-base text-muted-foreground mb-8 font-normal">This premium solution is coming soon or has been moved.</p>
          <Button asChild className="rounded-md bg-foreground text-background hover:bg-primary hover:text-black px-8 h-11 text-xs font-bold uppercase tracking-wider">
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

  const sliderImages = serviceCategory 
    ? projects.filter(p => p.category === serviceCategory).map(p => p.image)
    : [];

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title={service.metaTitle || `${service.title} | PrimeWenTech`} 
        description={service.metaDescription || service.shortDescription}
      />

      <div className="container-responsive relative z-10">
        {/* Back navigation */}
        <div className="mb-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/services')}
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground p-0 h-auto hover:bg-transparent font-medium text-xs tracking-wider uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-7">
            <div className="studio-eyebrow mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Premium Solution</span>
            </div>
            <h1 className="hero-headline text-foreground mb-8" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', lineHeight: 0.98 }}>
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed font-normal max-w-xl">
              {service.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button asChild size="lg" className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary hover:text-black border border-transparent transition-all shadow-none">
                <Link to="/contact">Start Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider border border-border bg-surface hover:bg-muted text-foreground transition-all shadow-none">
                <Link to="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            {sliderImages.length > 0 ? (
              <div className="border border-border rounded-lg overflow-hidden bg-surface">
                <ImageSlider images={sliderImages} />
              </div>
            ) : (
              <div className="border border-border rounded-lg p-6 bg-surface">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded object-contain" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </div>

        {/* Service-Specific Portfolio Section */}
        {serviceCategory && (
          <div className="border-t border-border pt-16 mb-24">
            <PortfolioSection 
              filterByCategory={serviceCategory}
              showFilters={false}
              title={`${service.title} Projects`}
              subtitle={`Explore our portfolio of ${service.title.toLowerCase()} projects delivered for real businesses.`}
              maxProjects={6}
            />
          </div>
        )}

        {/* Workflow Section */}
        <section className="py-20 border-t border-border mb-24">
          <div className="max-w-2xl mb-14">
            <div className="studio-eyebrow mb-3">04 / METHODOLOGY</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">Our Workflow</h2>
            <p className="text-muted-foreground text-sm sm:text-base font-normal">A proven 4-step process to bring your vision to life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, i) => (
              <div 
                key={i}
                className="studio-card p-6 border border-border rounded-lg bg-surface flex flex-col justify-between"
              >
                <div>
                  <div className="mono-label text-primary text-xs mb-6">
                    STEP // 0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-2 tracking-tight text-foreground uppercase">{step.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers Preview */}
        <section className="py-20 border-t border-border mb-24">
          <div className="max-w-2xl mb-14">
            <div className="studio-eyebrow mb-3">05 / INVESTMENT</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">Custom Solutions</h2>
            <p className="text-muted-foreground text-sm sm:text-base font-normal">Bespoke pricing tailored to your unique requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Basic', price: 'Custom Quote', featured: false },
              { name: 'Professional', price: 'Custom Quote', featured: true },
              { name: 'Enterprise', price: 'Custom Quote', featured: false }
            ].map((tier, i) => (
              <div
                key={i}
                className={`studio-card p-8 border rounded-lg bg-surface flex flex-col justify-between ${
                  tier.featured ? 'border-primary ring-1 ring-primary/40' : 'border-border'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono-label text-xs text-muted-foreground">{tier.name}</span>
                    {tier.featured && (
                      <span className="mono-label text-[10px] px-2 py-0.5 rounded bg-primary text-black font-semibold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight text-foreground font-display">{tier.price}</div>
                  <ul className="space-y-3 mb-10 pb-6 border-b border-border">
                    {['Premium Design', '24/7 Support', 'Fast Delivery', 'High Performance'].map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-muted-foreground text-xs sm:text-sm font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  asChild 
                  className={`w-full h-10 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                    tier.featured 
                      ? 'bg-primary text-black hover:bg-primary/90' 
                      : 'bg-muted text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 px-8 rounded-lg border border-border bg-foreground text-background">
          <div className="mono-label text-primary text-[11px] mb-4">ENGAGE WITH OUR STUDIO</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-background uppercase font-display">
            READY TO <span className="text-primary">TRANSFORM?</span>
          </h2>
          <Button asChild size="lg" className="rounded-md bg-primary text-black hover:bg-primary/90 px-8 h-12 text-xs font-bold uppercase tracking-wider border-none">
            <Link to="/contact">Get a Quote Now</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
