import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Rocket, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Target, 
  Smartphone, 
  Cpu 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: 'Basic',
      description: 'Ideal for small projects and high-growth startups.',
      price: isAnnual ? '₹39,999' : '₹49,999',
      period: isAnnual ? '/yr' : '/project',
      features: ['Modern UI/UX Design', 'Next.js Frontend', 'Standard SEO Audit', 'Email Support', '1-Month Maintenance'],
      icon: <Zap />,
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'The standard for scaled businesses and enterprises.',
      price: isAnnual ? '₹89,999' : '₹99,999',
      period: isAnnual ? '/yr' : '/project',
      features: ['Everything in Basic', 'AI Feature Integration', 'Full System Design', '24/7 Priority Support', 'Dedicated Project Lead'],
      icon: <Sparkles />,
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for global-scale organizations.',
      price: 'Custom',
      period: '',
      features: ['Bespoke AI Training', 'Global Cloud Architecture', 'White-Glove Support', 'Dedicated Dev Team', 'Compliance & Security'],
      icon: <Shield />,
      highlighted: false
    }
  ];

  const trustBadges = [
    { icon: <Shield className="w-8 h-8" />, label: 'Secure Payments' },
    { icon: <Zap className="w-8 h-8" />, label: 'Instant Activation' },
    { icon: <Globe className="w-8 h-8" />, label: 'Global Compliance' },
    { icon: <Target className="w-8 h-8" />, label: 'Guaranteed ROI' }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
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
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-foreground">Choose Your <span className="gold-text-gradient">Success Plan</span></h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
            No hidden fees. No long-term commitments. Just the world-class technology 
            you need to take your business to the absolute next level.
          </p>

          <div className="flex items-center justify-center gap-6 mb-16">
            <Label className={`text-lg font-bold transition-colors ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</Label>
            <div className="relative">
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual} 
                className="data-[state=checked]:bg-primary scale-150 shadow-xl"
              />
            </div>
            <Label className={`text-lg font-bold transition-colors ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual <span className="text-[10px] gold-gradient px-3 py-1 rounded-full text-black font-black ml-2 shadow-md">Save 20%</span>
            </Label>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-32">
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
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black tracking-tighter text-foreground">{tier.price}</span>
                      <span className="text-muted-foreground text-base font-black uppercase tracking-widest">{tier.period}</span>
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
                  
                  <Button asChild className={`w-full rounded-2xl h-16 text-lg font-black transition-all duration-500 shadow-xl border-none ${tier.highlighted ? 'gold-gradient text-black hover:scale-105 active:scale-95' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
                    <Link to="/contact">Get Started Now</Link>
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
      </div>
    </div>
  );
};

export default Pricing;
