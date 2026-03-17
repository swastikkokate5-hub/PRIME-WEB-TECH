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
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDescription: 'Modern, high-performance websites tailored to your brand.',
    fullDescription: 'We build enterprise-grade websites that combine stunning design with flawless performance. Our tech stack includes React, Next.js, and advanced CMS solutions to ensure scalability and speed.',
    icon: <Layout />,
    features: ['Responsive Design', 'Next.js Performance', 'SEO Optimization', 'Custom CMS'],
    pricing: { basic: '₹49,999', pro: '₹99,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_11212309-2713-4445-b50e-5f16033377b7.jpg'
  },
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform apps that your users will love.',
    fullDescription: 'From iOS to Android, we create intuitive mobile experiences that keep users engaged. Our focus is on seamless UX and robust architecture.',
    icon: <Smartphone />,
    features: ['iOS & Android', 'React Native', 'Push Notifications', 'API Integration'],
    pricing: { basic: '₹99,999', pro: '₹1,99,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_d6c49c61-98fa-4b1a-b637-687de4a0f273.jpg'
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    shortDescription: 'Harness the power of machine learning for your business.',
    fullDescription: 'Implement custom AI solutions to automate decision-making and gain predictive insights. We specialize in LLMs and generative AI integration.',
    icon: <Cpu />,
    features: ['Custom LLMs', 'Predictive Analytics', 'Natural Language Processing', 'Data Mining'],
    pricing: { basic: '₹1,49,999', pro: '₹3,99,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9fab3747-ac2a-443b-a33e-4f4f79a7889a.jpg'
  },
  {
    id: 'ai-voice-bot',
    title: 'AI Calling Agent / Voice Bot',
    shortDescription: 'Automate your customer interactions with human-like voice agents.',
    fullDescription: 'Our voice bots handle customer inquiries, scheduling, and sales with natural speech patterns. Reduce operational costs while maintaining quality.',
    icon: <Mic />,
    features: ['Natural Speech Synthesis', '24/7 Availability', 'Multilingual Support', 'CRM Integration'],
    pricing: { basic: '₹59,999', pro: '₹1,29,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_62006e6e-a2f4-42e5-8010-ff3c01388960.jpg'
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Bot Development',
    shortDescription: 'Engage customers on the world\'s most popular messaging app.',
    fullDescription: 'Automate sales and support directly in WhatsApp. Our bots handle order tracking, FAQ resolution, and personalized marketing.',
    icon: <MessageSquare />,
    features: ['Official API Support', 'Automated Workflows', 'Broadcast Messaging', 'Secure Payments'],
    pricing: { basic: '₹29,999', pro: '₹69,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4de48607-c5f8-4322-9407-1ffa8c72ecb6.jpg'
  },
  {
    id: 'system-design',
    title: 'App System Design',
    shortDescription: 'Robust architecture for scalable and secure applications.',
    fullDescription: 'We design high-level systems that handle millions of requests. Our architecture focuses on fault tolerance, security, and ultra-low latency.',
    icon: <Settings />,
    features: ['Microservices', 'Load Balancing', 'Database Scaling', 'Cloud Infrastructure'],
    pricing: { basic: '₹79,999', pro: '₹1,99,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_35b381af-dabc-4994-91cb-bd6009b18b38.jpg'
  },
  {
    id: 'automation',
    title: 'Business Automation',
    shortDescription: 'Streamline your operations and save thousands of hours.',
    fullDescription: 'Automate repetitive tasks across your entire business ecosystem. We connect your tools and build custom workflows for maximum efficiency.',
    icon: <Zap />,
    features: ['Workflow Automation', 'ERP Integration', 'Process Optimization', 'Reporting'],
    pricing: { basic: '₹39,999', pro: '₹99,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3f933f91-1e5a-4ecd-b342-9859bd696698.jpg'
  },
  {
    id: 'hosting',
    title: 'Hosting & Deployment',
    shortDescription: 'Secure, blazing-fast hosting on enterprise-grade infrastructure.',
    fullDescription: 'Managed hosting solutions optimized for high traffic. We handle security, backups, and 99.99% uptime guarantees.',
    icon: <Cloud />,
    features: ['AWS/GCP/Azure', 'Managed Backups', 'DDoS Protection', 'SSL Certificates'],
    pricing: { basic: '₹4,999/mo', pro: '₹9,999/mo', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_097a6759-562d-4564-8b19-02767557a778.jpg'
  },
  {
    id: 'seo',
    title: 'SEO Services',
    shortDescription: 'Dominate search rankings and drive organic growth.',
    fullDescription: 'Our data-driven SEO strategies ensure your brand is seen. From technical audits to content marketing, we deliver measurable results.',
    icon: <Search />,
    features: ['Keyword Research', 'Technical SEO', 'Backlink Building', 'Performance Tracking'],
    pricing: { basic: '₹19,999/mo', pro: '₹59,999/mo', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e86af96f-cd00-4176-a0fa-97c69288dc5a.jpg'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    shortDescription: 'Bespoke software built to solve your unique business challenges.',
    fullDescription: 'When off-the-shelf software isn\'t enough, we build custom solutions that fit your specific needs and scale with your business.',
    icon: <Code2 />,
    features: ['Legacy Migration', 'Custom CRM/ERP', 'Desktop Apps', 'API Development'],
    pricing: { basic: '₹1,99,999', pro: '₹4,99,999', enterprise: 'Custom' },
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6b46fee9-1736-4718-b993-8fa77b7416be.jpg'
  }
];
