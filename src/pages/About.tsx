import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Target,
  Users,
  Sparkles,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageMeta from '@/components/common/PageMeta';

const About: React.FC = () => {
  const team = [
    {
      name: 'Vaibhav Wani',
      role: 'Founder',
      image: '/images/about_page_image/vaibhav.jpeg',
      desc: 'Visionary technologist with a passion for building scalable digital systems and innovative AI solutions.'
    },
    {
      name: 'Rahul Kumar',
      role: 'Co-Founder',
      image: '/images/about_page_image/rahul.jpeg',
      desc: 'Expert in strategic planning and technical architecture, driving the company\'s global expansion.'
    },
    {
      name: 'Swastik Kokate',
      role: 'CEO & CMO',
      image: '/images/about_page_image/swastik.jpeg',
      desc: 'Creative lead and operational head, ensuring Prime Web Tech remains at the forefront of digital excellence.'
    }
  ];

  const stats = [
    { label: 'Founded', value: '2024' },
    { label: 'Clients', value: '15+' },
    { label: 'Experts', value: '10+' },
    { label: 'Uptime', value: '99.9%' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primewebtech.online/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://primewebtech.online/about" }
    ]
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title="About Prime Web Tech | Pune's Leading IT & AI Digital Agency" 
        description="Discover the mission and visionary team behind Prime Web Tech. We are Pune's premier technology partner for custom software, AI automation, and global digital excellence."
        url="/about"
        schema={breadcrumbSchema}
      />

      <div className="container-responsive relative z-10">
        {/* Editorial Studio Header */}
        <section className="max-w-4xl mb-20 md:mb-24">
          <div className="studio-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Elite Leadership</span>
          </div>
          <h1 className="hero-headline text-foreground mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.98 }}>
            We Build The <span className="text-primary">Future</span> Of Technology
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Founded with a mission to empower businesses through innovative digital solutions,
            we've grown into a leading technology partner for global enterprises.
          </p>
        </section>

        {/* Minimalist Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 py-8 border-y border-border">
          {stats.map((stat, i) => (
            <div key={i} className="pl-4 sm:pl-6 border-l border-border">
              <div className="mono-label text-[10px] text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-display">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Visionary Team Section */}
        <section className="mb-28">
          <div className="max-w-3xl mb-14">
            <div className="studio-eyebrow mb-3">06 / LEADERSHIP</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              The Visionary Team
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-normal">
              Meet the minds behind our premium technology and design language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="studio-card border border-border rounded-lg bg-surface overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/4.5] overflow-hidden border-b border-border bg-surface-subtle">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                        <Link
                          key={idx}
                          to="#"
                          className="w-7 h-7 rounded border border-border bg-background/90 backdrop-blur-md flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          aria-label="Contact leader"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mono-label text-[10px] text-primary mb-1">{person.role}</div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">{person.name}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">{person.desc}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-border mono-label text-[10px] text-muted-foreground/60">
                    EXECUTIVE // 0{i + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission / Vision Section — Editorial Split Pair */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-28">
          <div className="studio-card p-8 md:p-12 border border-border rounded-lg bg-surface flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-primary mb-6">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="mono-label text-[10px] text-muted-foreground mb-2">CORE PURPOSE</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-foreground uppercase">Our Mission</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
                To bridge the gap between imagination and reality by building the world's most
                sophisticated digital systems, empowering brands to redefine what's possible in the AI era.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 border border-border rounded-lg bg-foreground text-background flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md border border-background/20 bg-background/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-5 h-5" />
              </div>
              <div className="mono-label text-primary text-[10px] mb-2">FUTURE HORIZON</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-background uppercase">Our Vision</h2>
              <p className="text-sm md:text-base text-background/80 leading-relaxed font-normal">
                To become the global gold standard for digital technology services, known for
                unparalleled luxury in code, elite craftsmanship in AI, and timeless results.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-16 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="studio-eyebrow mb-3">07 / EVOLUTION</div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight text-foreground leading-snug">
                Our Journey To <span className="text-primary">Global Tech Leadership</span>
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
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
            </div>

            <div className="lg:col-span-6 flex flex-col space-y-6">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">What We're Building Towards</h3>
              
              <div className="studio-card p-6 border border-border rounded-lg bg-surface flex items-start gap-4">
                <div className="w-9 h-9 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-primary shrink-0">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-foreground uppercase mb-1">Global Expansion</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed font-normal">
                    Expanding our footprint with new Innovation Centers in 5 countries over the next 2 years.
                  </p>
                </div>
              </div>

              <div className="studio-card p-6 border border-border rounded-lg bg-surface flex items-start gap-4">
                <div className="w-9 h-9 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-primary shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-foreground uppercase mb-1">Community Growth</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed font-normal">
                    Supporting the next generation of tech talent through our scholarship and mentorship programs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button asChild className="rounded-md px-6 h-10 text-xs font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary hover:text-black border-none transition-all">
                  <Link to="/contact" className="inline-flex items-center gap-1.5">
                    <span>Join Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
