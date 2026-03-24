import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Rocket,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import PageMeta from '@/components/common/PageMeta';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Custom Web Development',
      description: 'Bespoke websites tailored to your unique brand identity and business goals.',
      features: ['Modern UI/UX Design', 'Fully Responsive', 'Advanced SEO Setup', 'Email Support', 'Priority Maintenance'],
      icon: <Zap />,
      highlighted: false,
      cta: 'Get Quote'
    },
    {
      name: 'Mobile App Solutions',
      description: 'High-performance iOS and Android applications built for your specific needs.',
      features: ['Native & Cross-Platform', 'Intuitive Interfaces', 'Push Notifications', 'API Integration', 'App Store Optimization'],
      icon: <Sparkles />,
      highlighted: true,
      cta: 'Get Quote'
    },
    {
      name: 'AI & Automation',
      description: 'Custom AI agents and sophisticated automation bots to scale your operations.',
      features: ['WhatsApp & Telegram Bots', 'AI Voice Agents', 'Process Automation', 'Custom AI Models', 'Full Support'],
      icon: <Target />,
      highlighted: false,
      cta: 'Get Quote'
    },
    {
      name: 'Enterprise Software',
      description: 'Complex custom systems and SaaS platforms designed for global scale.',
      features: ['Full E-commerce Suite', 'Multi-role Systems', 'Advanced Analytics', 'Cloud Architecture', 'Lifetime Support'],
      icon: <Rocket />,
      highlighted: false,
      cta: 'Get Quote'
    }
  ];

  const trustBadges = [
    { icon: <Shield className="w-8 h-8" />, label: 'Secure Payments' },
    { icon: <Zap className="w-8 h-8" />, label: 'Instant Activation' },
    { icon: <Globe className="w-8 h-8" />, label: 'Global Compliance' },
    { icon: <Target className="w-8 h-8" />, label: 'Guaranteed ROI' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primewebtech.online/" },
      { "@type": "ListItem", "position": 2, "name": "Plans", "item": "https://primewebtech.online/pricing" }
    ]
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      <PageMeta 
        title="Plans | Prime Web Tech" 
        description="Get custom pricing for web development, mobile apps, AI and software services in Pune India."
        url="/pricing"
        schema={breadcrumbSchema}
      />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold mb-8 shadow-lg tracking-[0.2em] uppercase">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Transparent Excellence</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-foreground">Flexible <span className="gold-text-gradient">Plans</span> for Every Project</h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
            We provide custom web development, mobile app, AI, and software solutions.
            Each project is different, so pricing is provided after discussion.
            Contact us to get a custom quote for your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto mb-32">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative flex flex-col h-full group perspective-1000 ${tier.highlighted ? 'scale-105 z-10' : ''}`}
            >
              <Card className={`h-full glass shadow-2xl transition-all duration-700 hover:shadow-primary/20 rounded-[3rem] border-none flex flex-col overflow-hidden preserve-3d glow-gold-hover premium-shadow`}>
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 gold-gradient text-black px-8 py-2 font-black uppercase text-[10px] rounded-bl-[2rem] shadow-xl animate-shine">
                    Most Popular
                  </div>
                )}

                <CardHeader className="p-12 pb-8">
                  <div className="mb-10 p-5 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary transition-all duration-500 shadow-xl group-hover:shadow-primary/30">
                    {React.cloneElement(tier.icon as React.ReactElement<any>, {
                      className: `w-10 h-10 text-primary group-hover:text-black transition-colors`
                    })}
                  </div>
                  <CardTitle className="text-3xl font-black mb-3 uppercase tracking-tighter group-hover:text-primary transition-colors text-foreground">{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground min-h-[4rem] text-sm leading-relaxed font-bold uppercase tracking-widest opacity-60">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-12 pt-0 flex-grow">
                  <div className="mb-10 border-b border-border/50 pb-10">
                    <div className="flex flex-col gap-2">
                       <span className="text-2xl font-black tracking-tighter text-foreground">Custom Plans</span>
                       <p className="text-muted-foreground text-xs font-bold leading-relaxed">
                         Built according to your business needs, features, and project size.
                       </p>
                    </div>
                  </div>

                  <ul className="space-y-6 mb-12">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm font-bold leading-tight text-foreground/80 group/item">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full rounded-2xl h-16 text-lg font-black transition-all duration-500 shadow-xl border-none bg-muted text-foreground hover-gold hover:scale-105 active:scale-95">
                    <Link to="/contact">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <section className="py-16 border-y border-border bg-secondary/10 rounded-[3rem] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:gold-gradient group-hover:text-black transition-all shadow-md group-hover:scale-110">
                    {React.cloneElement(badge.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity text-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter leading-tight text-foreground">NOT SEEING THE <br /> <span className="gold-text-gradient">PERFECT</span> FIT?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-12 font-medium">
              We provide bespoke enterprise solutions tailored specifically to your unique requirements and global scale.
            </p>
            <Button asChild size="lg" className="gold-gradient text-black rounded-full px-12 h-16 text-xl font-black shadow-xl transition-all hover:scale-105 border-none">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </motion.div>
        </section>

        {/* SEO Text Footer Section */}
        <section className="mt-12 mb-20 text-center max-w-4xl mx-auto px-6">
          <p className="text-muted-foreground text-xs leading-relaxed font-medium">
            Prime Web Tech provides web development, mobile app development, software development, 
            AI development and automation services in Pune, India and worldwide.<br /><br />
            Plans depend on project requirements. Contact us for custom quote.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
