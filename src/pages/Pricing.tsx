import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Rocket,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Target,
  ArrowRight
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
    { icon: <Shield className="w-5 h-5" />, label: 'Secure Payments' },
    { icon: <Zap className="w-5 h-5" />, label: 'Instant Activation' },
    { icon: <Globe className="w-5 h-5" />, label: 'Global Compliance' },
    { icon: <Target className="w-5 h-5" />, label: 'Guaranteed ROI' }
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
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title="Plans | Prime Web Tech" 
        description="Get custom pricing for web development, mobile apps, AI and software services in Pune India."
        url="/pricing"
        schema={breadcrumbSchema}
      />

      <div className="container-responsive relative z-10">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="studio-eyebrow mb-4">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>Transparent Excellence</span>
          </div>
          <h1 className="hero-headline text-foreground mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.98 }}>
            Flexible <span className="text-primary">Plans</span> for Every Project
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            We provide custom web development, mobile app, AI, and software solutions.
            Each project is different, so pricing is provided after discussion.
            Contact us to get a custom quote for your project.
          </p>
        </div>

        {/* Pricing Tiers Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <Card className={`studio-card h-full border rounded-lg bg-surface flex flex-col justify-between shadow-none relative overflow-hidden ${
                tier.highlighted ? 'border-primary ring-1 ring-primary/40' : 'border-border'
              }`}>
                {tier.highlighted && (
                  <div className="bg-primary text-black mono-label text-[10px] font-bold py-1 px-3 text-center tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <CardHeader className="p-7 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-primary">
                      {React.cloneElement(tier.icon as React.ReactElement<any>, {
                        className: "w-4 h-4"
                      })}
                    </div>
                    <span className="mono-label text-[10px] text-muted-foreground">0{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 tracking-tight text-foreground uppercase">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs leading-relaxed font-normal min-h-[3rem]">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-7 pt-0 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="py-4 border-y border-border mb-6">
                      <div className="text-2xl font-bold tracking-tight text-foreground font-display">
                        Custom Plans
                      </div>
                      <p className="text-muted-foreground text-xs font-normal mt-1 leading-relaxed">
                        Built according to your business needs, features, and project size.
                      </p>
                    </div>

                    <div className="mono-label text-[10px] text-muted-foreground/80 mb-3">INCLUDED CAPABILITIES</div>
                    <ul className="space-y-2.5 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/85 font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    className={`w-full h-11 rounded-md text-xs font-bold uppercase tracking-wider transition-all border-none ${
                      tier.highlighted 
                        ? 'bg-primary text-black hover:bg-primary/90' 
                        : 'bg-muted text-foreground hover:bg-foreground hover:text-background'
                    }`}
                  >
                    <Link to="/contact" className="inline-flex items-center justify-center gap-1.5">
                      <span>{tier.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Trust Badges Row */}
        <section className="py-12 border-y border-border mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3.5 pl-4 border-l border-border">
                <div className="w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center text-primary shrink-0">
                  {badge.icon}
                </div>
                <span className="mono-label text-xs text-foreground tracking-wider">{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA — Studio Contrast Layout */}
        <section className="text-center py-20 px-8 rounded-lg border border-border bg-foreground text-background mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="mono-label text-primary text-[11px] mb-3">ENTERPRISE INQUIRIES</div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-background uppercase font-display leading-tight">
              NOT SEEING THE <br />
              <span className="text-primary">PERFECT</span> FIT?
            </h2>
            <p className="text-sm sm:text-base text-background/70 mb-8 font-normal leading-relaxed">
              We provide bespoke enterprise solutions tailored specifically to your unique requirements and global scale.
            </p>
            <Button asChild size="lg" className="rounded-md bg-primary text-black hover:bg-primary/90 px-8 h-12 text-xs font-bold uppercase tracking-wider border-none">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </section>

        {/* SEO Text Footer Section */}
        <div className="text-center max-w-3xl mx-auto pb-8">
          <p className="mono-label text-[10px] text-muted-foreground leading-relaxed">
            Prime Web Tech provides web development, mobile app development, software development, 
            AI development and automation services in Pune, India and worldwide.<br />
            Plans depend on project requirements. Contact us for custom quote.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
