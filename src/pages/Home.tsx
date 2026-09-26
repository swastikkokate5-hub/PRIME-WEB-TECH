import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Users,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import PageMeta from '@/components/common/PageMeta';
import businessHero from '../images/image.png';
import websiteImg from '../images/services_main_img/website.png';
import appImg from '../images/services_main_img/app.png';
import mlImg from '../images/services_main_img/ml.png';
import aiAgentImg from '../images/services_main_img/ai agent.png';
import businessAutomationImg from '../images/services_main_img/business automation.png';
import cloudImg from '../images/services_main_img/cloud.png';

const Home: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const capabilityMetrics = [
    {
      number: '01',
      labelLines: ['SOFTWARE', 'SOLUTIONS'],
      value: '8+',
      ariaLabel: '01 Software Solutions: 8+',
    },
    {
      number: '02',
      labelLines: ['AVAILABILITY'],
      value: '24/7',
      ariaLabel: '02 Availability: 24/7',
    },
    {
      number: '03',
      labelLines: ['GLOBAL', 'REACH'],
      value: 'WORLDWIDE',
      ariaLabel: '03 Global Reach: Worldwide',
    },
    {
      number: '04',
      labelLines: ['SECURITY'],
      value: 'SECURITY-FIRST',
      ariaLabel: '04 Security: Security-First',
    },
  ];

  const majorServiceCategories = [
    {
      number: '01',
      meta: 'CORE DIGITAL PLATFORMS',
      title: 'Web & E-Commerce Development',
      description: 'Modern, high-performance websites and bespoke online stores designed around your brand, customer conversions, and search dominance.',
      primaryLink: '/services/web-dev',
      image: websiteImg,
      imageAlt: 'Prime Web Tech modern responsive web development and e-commerce platforms',
      tags: [
        'Responsive Design',
        'Next.js & React',
        'Shopify & Custom Cart',
        'Technical SEO',
        'Custom CMS',
        'Payment Gateways',
      ],
    },
    {
      number: '02',
      meta: 'MOBILE ECOSYSTEMS',
      title: 'Mobile App Development',
      description: 'Intuitive, high-performance native and cross-platform mobile applications engineered for fluid UX, offline resilience, and rapid scaling.',
      primaryLink: '/services/app-dev',
      image: appImg,
      imageAlt: 'Prime Web Tech iOS and Android mobile application development',
      tags: [
        'iOS & Android',
        'React Native',
        'Mobile UI/UX',
        'Push Notifications',
        'REST & GraphQL APIs',
        'App Store Launch',
      ],
    },
    {
      number: '03',
      meta: 'INTELLIGENT SYSTEMS',
      title: 'AI & Machine Learning',
      description: 'Custom machine learning models, predictive data algorithms, and enterprise LLM integrations designed to turn complex data into automated intelligence.',
      primaryLink: '/services/ai-services',
      image: mlImg,
      imageAlt: 'Prime Web Tech machine learning models and predictive analytics systems',
      tags: [
        'Custom LLMs',
        'Predictive Analytics',
        'Natural Language Processing',
        'Generative AI',
        'Data Mining & Insights',
      ],
    },
    {
      number: '04',
      meta: 'AUTONOMOUS CHANNELS',
      title: 'AI Agents & Conversational Bots',
      description: 'Human-like voice calling agents and automated 24/7 WhatsApp bots that qualify leads, resolve customer support, and book meetings on autopilot.',
      primaryLink: '/services/ai-voice-bot',
      image: aiAgentImg,
      imageAlt: 'Prime Web Tech voice calling agents and WhatsApp automation bots',
      tags: [
        'AI Voice Calling Agents',
        'WhatsApp Bot Development',
        'Speech Synthesis',
        '24/7 Availability',
        'Multilingual Support',
        'CRM Integration',
      ],
    },
    {
      number: '05',
      meta: 'OPERATIONAL SCALE',
      title: 'Business & Process Automation',
      description: 'End-to-end automation workflows connecting your CRMs, ERPs, and internal databases to eliminate repetitive manual work and maximize operational throughput.',
      primaryLink: '/services/automation',
      image: businessAutomationImg,
      imageAlt: 'Prime Web Tech enterprise business automation workflows and data pipelines',
      tags: [
        'Workflow Automation',
        'ERP & CRM Integration',
        'Process Optimization',
        'Automated Reporting',
        'System Integrations',
      ],
    },
    {
      number: '06',
      meta: 'ENTERPRISE INFRASTRUCTURE',
      title: 'Software Engineering & Cloud Architecture',
      description: 'Enterprise system architecture, bespoke internal software, agile IT outsourcing, and managed cloud deployments built for 99.99% uptime and bulletproof security.',
      primaryLink: '/services/custom-software',
      image: cloudImg,
      imageAlt: 'Prime Web Tech custom software engineering, cloud architecture, and IT consulting',
      tags: [
        'System Architecture',
        'Custom CRM/ERP',
        'AWS & Cloud Hosting',
        'Microservices',
        'IT Consulting',
        'Hinjewadi Tech Outsourcing',
      ],
    },
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Prime Web Tech",
    "image": "https://primewebtech.online/main logo prime web.svg",
    "@id": "https://primewebtech.online",
    "url": "https://primewebtech.online",
    "telephone": "+91 72768 15079",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Narhe",
      "addressLocality": "Pune",
      "postalCode": "411041",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4416,
      "longitude": 73.8322
    },
    "description": "Prime Web Tech is a premier web development company in Pune providing software development, mobile apps, AI development, UI UX design and custom IT solutions for India and global clients.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="overflow-x-hidden no-overflow">
      <PageMeta 
        title="Prime Web Tech | Top Web Development & AI Software Company in Pune, India" 
        description="Prime Web Tech is a leading web development and software company in Pune. We specialize in custom software, mobile apps, AI agents, and UI UX design for global clients."
        url="/"
        schema={homeSchema}
      />

      {/* Hero Section — Editorial Left-Aligned Desktop & Mobile Layout */}
      <section className="relative min-h-[70vh] lg:min-h-[66vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border overflow-hidden">
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl text-left flex flex-col items-start">
            {/* Existing Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-headline text-foreground mb-6 text-left"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.6rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: 'var(--tracking-display)',
              }}
            >
              Build Your Digital Future <br className="hidden sm:inline" />
              With <span className="text-primary">AI & Modern Technology</span>
            </motion.h1>

            {/* Existing Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-normal leading-relaxed text-left"
            >
              We create high-end websites, apps, AI systems, and automation tools
              tailored for modern businesses ready to dominate the digital landscape.
            </motion.p>

            {/* Existing CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary hover:text-black transition-all border border-transparent shadow-none"
              >
                <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider border border-border bg-surface hover:bg-muted/60 hover:text-foreground text-foreground transition-all shadow-none"
              >
                <Link to="/services" className="inline-flex items-center justify-center gap-2">
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio / Company Section — Editorial Split Composition (Riangle-Inspired) */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 border-b border-border bg-background relative overflow-hidden">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* LEFT SIDE: Company Visual / Digital Studio Platform (approx 48-50%) */}
            <motion.div
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 w-full"
            >
              <div className="group relative w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] max-h-[320px] sm:max-h-[380px] lg:max-h-none overflow-hidden border border-border bg-surface-subtle">
                <img
                  src={businessHero}
                  alt="Prime Web Tech digital technology solutions, software development studio, and AI workflows"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle hairline geometric markers */}
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-primary/80 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-primary/80 pointer-events-none" />
              </div>
            </motion.div>

            {/* RIGHT SIDE: Section Label, Description, Divider, Compact Statistics (approx 50-52%) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Section Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="studio-eyebrow mb-3.5 sm:mb-4"
              >
                01 / STUDIO
              </motion.div>

              {/* Professional Description */}
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: reducedMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-foreground/90 text-base sm:text-lg lg:text-[1.08rem] font-normal leading-relaxed max-w-[580px] mb-6 sm:mb-7"
              >
                Prime Web Tech builds modern digital experiences, AI-powered software,
                and scalable technology solutions designed around real business needs.
              </motion.p>

              {/* Thin Editorial Divider */}
              <motion.div
                initial={{ scaleX: reducedMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
                className="w-full h-px bg-border mb-6 sm:mb-8"
              />

              {/* Compact Business Statistics */}
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-6 sm:gap-y-7">
                {capabilityMetrics.map((metric, i) => (
                  <motion.div
                    key={metric.number}
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: reducedMotion ? 0 : 0.25 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex flex-col justify-start"
                  >
                    {/* Metric Value */}
                    <div
                      className="font-semibold tracking-tight text-foreground transition-all duration-200 group-hover:text-primary group-hover:-translate-y-[2px] break-words"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.4vw, 2.5rem)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {metric.value}
                    </div>

                    {/* Small Label with Index */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-mono text-[10px] sm:text-[11px] text-primary/80 font-medium">
                        {metric.number}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-medium leading-tight">
                        {metric.labelLines.join(' ')}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Section — Premium Editorial Alternating Major Service Cards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 border-b border-border bg-background relative overflow-hidden">
        <div className="container-responsive">
          {/* Section Introduction */}
          <div className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="studio-eyebrow mb-3.5 sm:mb-4">02 / CAPABILITIES</div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-foreground leading-[1.05]"
                style={{
                  fontFamily: 'var(--font-display)',
                }}
              >
                Premium Digital <br className="hidden sm:inline" />Solutions
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed mt-4 max-w-xl">
                From modern websites to AI-powered software, we build secure,
                scalable digital solutions designed around real business needs.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button
                asChild
                variant="outline"
                className="rounded-md h-11 px-6 text-xs font-bold uppercase tracking-wider border border-border bg-surface hover:bg-foreground hover:text-background text-foreground transition-all shadow-none"
              >
                <Link to="/services" className="inline-flex items-center gap-2">
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Alternating Major Service Cards (6 Core Disciplines) */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {majorServiceCategories.map((category, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={category.number}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group block border border-border bg-surface/30 hover:border-primary/50 transition-colors duration-300 p-6 sm:p-8 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
                    
                    {/* Visual Container */}
                    <div
                      className={`lg:col-span-6 order-1 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      } w-full`}
                    >
                      <Link
                        to={category.primaryLink}
                        className="block overflow-hidden border border-border bg-surface-subtle group-hover:border-primary/40 transition-colors"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] max-h-[300px] sm:max-h-[380px] lg:max-h-none overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.imageAlt}
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Subtle hairline geometric markers */}
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/60 pointer-events-none" />
                          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/60 pointer-events-none" />
                        </div>
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-6 order-2 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      } flex flex-col justify-center`}
                    >
                      {/* Technical Number & Category Meta */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] text-primary">
                            {category.number}
                          </span>
                          <span className="h-px w-6 bg-border" />
                          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-muted-foreground font-medium">
                            {category.meta}
                          </span>
                        </div>

                        <Link
                          to={category.primaryLink}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all flex-shrink-0"
                          aria-label={`Explore ${category.title}`}
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>

                      {/* Major Service Title */}
                      <h3
                        className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-foreground mb-4 leading-[1.1] transition-colors group-hover:text-primary"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        <Link to={category.primaryLink}>
                          {category.title}
                        </Link>
                      </h3>

                      {/* Concise Description */}
                      <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-xl">
                        {category.description}
                      </p>

                      {/* Sub-Service Tags */}
                      <div className="pt-4 border-t border-border/70">
                        <div className="mono-label text-[10px] text-muted-foreground/70 mb-3 uppercase tracking-wider">
                          CAPABILITIES & TECH STACK
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-mono text-[11px] tracking-wide text-muted-foreground px-2.5 py-1 border border-border/80 rounded-[2px] bg-surface/50 transition-colors hover:text-foreground hover:border-primary/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom All Services CTA Bar */}
          <div className="mt-14 sm:mt-18 pt-10 sm:pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4
                className="text-lg sm:text-xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Looking for specialized engineering or custom integrations?
              </h4>
              <p className="text-sm text-muted-foreground mt-1 font-normal">
                Explore our full catalog of 13 dedicated services, architecture roadmaps, and pricing models.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-md h-11 px-7 text-xs font-bold uppercase tracking-wider border border-border bg-surface hover:bg-foreground hover:text-background text-foreground transition-all shadow-none flex-shrink-0 w-full sm:w-auto"
            >
              <Link to="/services" className="inline-flex items-center justify-center gap-2">
                <span>Explore All 13 Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section — Editorial Split Layout */}
      <section className="section-padding border-b border-border bg-surface/30">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="studio-eyebrow mb-3">03 / ADVANTAGE</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-foreground leading-[1.05]">
                Why Global Leaders Trust <br />
                <span className="text-primary">Prime Web Tech</span>
              </h2>

              <div className="space-y-4 mb-10">
                {[
                  'Elite Team of Industry Veterans',
                  'Cutting-Edge AI-Native Workflow',
                  'Ultra-Fast Development Lifecycle',
                  'Enterprise-Grade Security Protocol',
                  'Bespoke Premium Design Language'
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 py-2.5 border-b border-border/60"
                  >
                    <div className="w-5 h-5 rounded-full border border-primary/40 flex items-center justify-center shrink-0 text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-foreground tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary hover:text-black border border-transparent transition-all shadow-none"
              >
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <Shield className="w-5 h-5" />, title: 'Unmatched Security', desc: 'Enterprise-grade protocols to protect your digital assets and user data.' },
                { icon: <BarChart3 className="w-5 h-5" />, title: 'Scalable ROI', desc: 'Data-driven strategies that deliver measurable business growth and impact.' },
                { icon: <Globe className="w-5 h-5" />, title: 'Global Reach', desc: 'Architecture designed for millions of users worldwide across all platforms.' },
                { icon: <Zap className="w-5 h-5" />, title: 'Fast Execution', desc: 'From vision to reality in record time without compromising quality.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="studio-card p-7 border border-border rounded-lg bg-surface flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md border border-border bg-surface-subtle flex items-center justify-center text-primary mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold mb-2 tracking-tight text-foreground uppercase">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mono-label text-[10px] text-muted-foreground/60 mt-6 pt-4 border-t border-border">
                    SYS.MODULE [0{index + 1}]
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action — Studio Contrast Well */}
      <section className="py-24 md:py-32 border-b border-border bg-foreground text-background">
        <div className="container-responsive text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mono-label text-primary text-[11px] mb-6">
              START A COLLABORATION
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-none text-background font-display uppercase">
              BUILD YOUR <br />
              <span className="text-primary">LEGACY</span> NOW
            </h2>
            <p className="text-base sm:text-lg text-background/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Join elite industry leaders who have transformed their digital presence with Prime Web Tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-black hover:bg-primary/90 border-none transition-all w-full sm:w-auto"
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md h-12 px-8 text-xs font-bold uppercase tracking-wider border border-background/30 text-background bg-transparent hover:bg-background/10 transition-all w-full sm:w-auto"
              >
                <Link to="/contact">Talk to Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section — Preserved with Editorial Layout */}
      <section className="py-16 bg-surface/30">
        <div className="container-responsive text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold mb-4 tracking-tight uppercase text-foreground">
              Top Web Development Company in Pune
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 font-normal">
              Prime Web Tech is a web development company in Pune providing software development, mobile apps, AI development, UI UX design and custom IT solutions for India and global clients.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-normal">
              We build modern websites, automation systems, AI agents, ecommerce platforms and business software. Our team of expert developers and designers ensures that your business stays ahead in the digital landscape with cutting-edge technology and innovative solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
