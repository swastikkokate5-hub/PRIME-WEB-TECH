import { 
  Layout, 
  Smartphone, 
  Cpu, 
  Mic, 
  MessageSquare, 
  Settings, 
  Zap, 
  Cloud, 
  Search, 
  Code2 
} from 'lucide-react';
import React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: string[];
  pricing: {
    basic: string;
    pro: string;
    enterprise: string;
  };
  image: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDescription: 'Modern, high-performance websites tailored to your brand.',
    fullDescription: 'We build enterprise-grade websites that combine stunning design with flawless performance. Our tech stack includes React, Next.js, and advanced CMS solutions to ensure scalability and speed.',
    icon: <Layout />,
    features: ['Responsive Design', 'Next.js Performance', 'SEO Optimization', 'Custom CMS'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'Affordable WordPress Website Design for Small Business in Pune',
    metaDescription: 'Get responsive, high-performance web design. We specialize in WordPress and Shopify development to help Pune startups and SMEs succeed online.'
  },
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform apps that your users will love.',
    fullDescription: 'From iOS to Android, we create intuitive mobile experiences that keep users engaged. Our focus is on seamless UX and robust architecture.',
    icon: <Smartphone />,
    features: ['iOS & Android', 'React Native', 'Push Notifications', 'API Integration'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'Premium Mobile App Development in Pune | PrimeWenTech',
    metaDescription: 'Custom iOS and Android apps for Baner and Hinjewadi businesses. We build scalable, high-performance mobile solutions using React Native.'
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    shortDescription: 'Harness the power of machine learning for your business.',
    fullDescription: 'Implement custom AI solutions to automate decision-making and gain predictive insights. We specialize in LLMs and generative AI integration.',
    icon: <Cpu />,
    features: ['Custom LLMs', 'Predictive Analytics', 'Natural Language Processing', 'Data Mining'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'AI Automation Services & Chatbot Development in Pune',
    metaDescription: 'Future-proof your operations with AI integration. We offer custom AI agents and machine learning solutions for businesses in Baner and Magarpatta.'
  },
  {
    id: 'ai-voice-bot',
    title: 'AI Calling Agent / Voice Bot',
    shortDescription: 'Automate your customer interactions with human-like voice agents.',
    fullDescription: 'Our voice bots handle customer inquiries, scheduling, and sales with natural speech patterns. Reduce operational costs while maintaining quality.',
    icon: <Mic />,
    features: ['Natural Speech Synthesis', '24/7 Availability', 'Multilingual Support', 'CRM Integration'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg'
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Bot Development',
    shortDescription: 'Engage customers on the world\'s most popular messaging app.',
    fullDescription: 'Automate sales and support directly in WhatsApp. Our bots handle order tracking, FAQ resolution, and personalized marketing.',
    icon: <MessageSquare />,
    features: ['Official API Support', 'Automated Workflows', 'Broadcast Messaging', 'Secure Payments'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'AI WhatsApp Bot Development Pune | PrimeWenTech',
    metaDescription: 'Automate your sales and support with custom WhatsApp bots. Specialized solutions for Magarpatta and Pune SMEs to improve customer engagement.'
  },
  {
    id: 'system-design',
    title: 'App System Design',
    shortDescription: 'Robust architecture for scalable and secure applications.',
    fullDescription: 'We design high-level systems that handle millions of requests. Our architecture focuses on fault tolerance, security, and ultra-low latency.',
    icon: <Settings />,
    features: ['Microservices', 'Load Balancing', 'Database Scaling', 'Cloud Infrastructure'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'Scalable System Design & Architecture in Pune | PrimeWenTech',
    metaDescription: 'Enterprise-grade system architecture and cloud infrastructure for high-traffic apps in Pune tech corridors of Hinjewadi and Baner.'
  },
  {
    id: 'automation',
    title: 'Business Automation',
    shortDescription: 'Streamline your operations and save thousands of hours.',
    fullDescription: 'Automate repetitive tasks across your entire business ecosystem. We connect your tools and build custom workflows for maximum efficiency.',
    icon: <Zap />,
    features: ['Workflow Automation', 'ERP Integration', 'Process Optimization', 'Reporting'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg'
  },
  {
    id: 'hosting',
    title: 'Hosting & Deployment',
    shortDescription: 'Secure, blazing-fast hosting on enterprise-grade infrastructure.',
    fullDescription: 'Managed hosting solutions optimized for high traffic. We handle security, backups, and 99.99% uptime guarantees.',
    icon: <Cloud />,
    features: ['AWS/GCP/Azure', 'Managed Backups', 'DDoS Protection', 'SSL Certificates'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg'
  },
  {
    id: 'seo',
    title: 'SEO Services',
    shortDescription: 'Dominate search rankings and drive organic growth.',
    fullDescription: 'Our data-driven SEO strategies ensure your brand is seen. From technical audits to content marketing, we deliver measurable results.',
    icon: <Search />,
    features: ['Keyword Research', 'Technical SEO', 'Backlink Building', 'Performance Tracking'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    shortDescription: 'Bespoke software built to solve your unique business challenges.',
    fullDescription: 'When off-the-shelf software isn\'t enough, we build custom solutions that fit your specific needs and scale with your business.',
    icon: <Code2 />,
    features: ['Legacy Migration', 'Custom CRM/ERP', 'Desktop Apps', 'API Development'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'Custom CRM Developers & Software Engineering in Pune',
    metaDescription: 'Build scalable solutions. From custom CRM development to legacy modernization, our Pune-based engineers deliver robust results using modern tech stacks.'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic technology guidance for digital transformation.',
    fullDescription: 'Align your technology with your business goals through our expert consulting services. We provide strategic roadmaps and cloud migration expertise.',
    icon: <Zap />,
    features: ['Digital Transformation', 'Cloud Strategy', 'IT Roadmap', 'Infrastructure Audit'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'IT Strategy & Digital Transformation Consulting in Pune',
    metaDescription: 'Navigate the 2026 digital landscape. We help Pune businesses align technology with goals through strategic roadmaps and cloud migration services.'
  },
  {
    id: 'hinjewadi-it-services',
    title: 'Hinjewadi Tech Solutions',
    shortDescription: 'Specialized IT services for the Hinjewadi tech corridor.',
    fullDescription: 'Localized IT outsourcing and agile software engineering for SMEs in Hinjewadi. We provide the expertise needed for global-scale digital projects.',
    icon: <Code2 />,
    features: ['IT Outsourcing', 'Agile Engineering', 'Local Expertise', 'Scalable Teams'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'Custom Software Development for SMEs in Hinjewadi | PrimeWenTech',
    metaDescription: 'Serving the Hinjewadi tech corridor with specialized IT outsourcing and agile software engineering. Local expertise for global-scale digital projects.'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    shortDescription: 'Secure, lightning-fast online stores optimized for retail.',
    fullDescription: 'Specialized Shopify and custom cart solutions designed for high conversion and security. We build stores optimized for the modern retail landscape.',
    icon: <Layout />,
    features: ['Shopify Experts', 'Custom Cart', 'Payment Integration', 'Inventory Sync'],
    pricing: { basic: 'Custom', pro: 'Custom', enterprise: 'Custom' },
    image: '/main logo prime web.svg',
    metaTitle: 'E-commerce Website Development Agency in Baner, Pune',
    metaDescription: 'Specialized Shopify and custom cart solutions. We build secure, lightning-fast online stores optimized for Pune’s flourishing retail landscape.'
  }
];
