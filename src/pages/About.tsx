import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Users, 
  Zap, 
  Search, 
  Shield, 
  Sparkles, 
  Linkedin, 
  Twitter, 
  Mail 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const team = [
    {
      name: 'Vaibhav Wani',
      role: 'Founder',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_90bbacea-36e8-45f2-86f4-4ad2064fe53c.jpg',
      desc: 'Visionary technologist with a passion for building scalable digital systems and innovative AI solutions.'
    },
    {
      name: 'Rahul Kumar',
      role: 'Co-Founder',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_14a95643-6262-4645-a195-a457fab1ab0a.jpg',
      desc: 'Expert in strategic planning and technical architecture, driving the company\'s global expansion.'
    },
    {
      name: 'Swastik Kokate',
      role: 'CEO & CMO',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a8fbce5a-bdf3-4352-a8d5-063e1d486e88.jpg',
      desc: 'Creative lead and operational head, ensuring Prime Web Tech remains at the forefront of digital excellence.'
    }
  ];

  const stats = [
    { label: 'Founded', value: '2020' },
    { label: 'Clients', value: '500+' },
    { label: 'Experts', value: '50+' },
    { label: 'Uptime', value: '99.9%' }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor - Optimized */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 blur-[60px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/3 blur-[50px] -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <section className="text-center max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold mb-10 shadow-md tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Elite Leadership</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
              We Build The <span className="gold-text-gradient">Future</span> Of Technology
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Founded with a mission to empower businesses through innovative digital solutions, 
              we've grown into a leading technology partner for global enterprises.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl md:text-7xl font-black text-primary mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Founders Section */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">The Visionary Team</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium">Meet the minds behind our premium technology and design language.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group perspective-1000"
              >
                <div className="relative glass p-4 rounded-[3rem] shadow-lg border-none transition-all duration-300 glow-gold-hover premium-shadow">
                  <div className="relative h-[380px] w-full overflow-hidden rounded-[2.5rem] mb-8 shadow-md group-hover:scale-[1.01] transition-all">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-10">
                      <div className="flex gap-5">
                        {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                          <Link 
                            key={idx} 
                            to="#" 
                            className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black hover:scale-110 transition-all shadow-md"
                          >
                            <Icon className="w-5 h-5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <h3 className="text-2xl font-black mb-1 tracking-tight group-hover:text-primary transition-colors text-foreground uppercase tracking-tighter">{person.name}</h3>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-5">{person.role}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">{person.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission / Vision Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-20 rounded-[3.5rem] glass border-none hover:bg-secondary/20 transition-all duration-700 shadow-2xl group glow-gold-hover premium-shadow"
          >
            <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Our Mission</h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-medium">
              To bridge the gap between imagination and reality by building the world's most 
              sophisticated digital systems, empowering brands to redefine what's possible in the AI era.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-20 rounded-[3.5rem] bg-primary text-black border-none shadow-2xl hover:scale-[1.01] transition-all duration-700 group premium-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Our Vision</h2>
            <p className="text-base md:text-xl opacity-80 leading-relaxed font-black">
              To become the global gold standard for digital technology services, known for 
              unparalleled luxury in code, elite craftsmanship in AI, and timeless results.
            </p>
          </motion.div>
        </section>

        {/* Journey Section */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">Our Journey To <span className="gold-text-gradient">Global Tech Leadership</span></h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-medium">
                  <p>
                    Our story began with a simple idea: that technology should be accessible, scalable, and human-centric. What started as a small team of three developers has now grown into a diverse global workforce of over 50 technology experts.
                  </p>
                  <p>
                    Throughout our journey, we've stayed true to our core mission of helping businesses bridge the gap between their vision and reality through world-class software engineering and strategic digital innovation.
                  </p>
                  <p>
                    Today, we're proud to be the trusted technology partner for over 500 companies across various industries, from fintech and healthcare to e-commerce and AI-driven startups.
                  </p>
                </div>
              </motion.div>
              <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight">What We're Building Towards</h2>
                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/10 group-hover:bg-primary transition-all shadow-md">
                      <Rocket className="w-6 h-6 text-primary group-hover:text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 tracking-tight">Global Expansion</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed font-medium">Expanding our footprint with new Innovation Centers in 5 countries over the next 2 years.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/10 group-hover:bg-accent transition-all shadow-md">
                      <Users className="w-6 h-6 text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 tracking-tight">Community Growth</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed font-medium">Supporting the next generation of tech talent through our scholarship and mentorship programs.</p>
                    </div>
                  </motion.div>
                </div>
                <Button asChild size="lg" className="w-fit rounded-full px-10 h-12 text-sm font-bold shadow-md border-none transition-all hover:scale-105 gold-gradient text-black">
                  <Link to="/contact">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
