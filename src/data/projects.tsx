import { Globe, Smartphone, Palette, Bot, MessageSquare } from 'lucide-react';

export type ProjectCategory = 'all' | 'websites' | 'apps' | 'ai' | 'whatsapp' | 'design';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  videoUrl?: string;
  techStack: string[];
  liveUrl?: string;
  features?: string[];
  icon: React.ReactNode;
}

export const projects: Project[] = [
  // Website Projects
  {
    id: 'web-1',
    title: 'MokshasCreation Store',
    description: 'Modern e-commerce platform offering handmade products, jewelry, and lifestyle items with a smooth mobile-first shopping experience.',
    category: 'websites',
    image: '../public/images/projectPageImage/web/mokshacreation.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
    liveUrl: 'https://mokshascreation.store',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 'web-2',
    title: 'Portfolio',
    description: 'Personal portfolio showcasing web development, AI/ML projects, and innovative tech solutions with a modern responsive design.',
    category: 'websites',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    techStack: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://portfoliowebsite-git-main-vaibhav-wani-s-projects.vercel.app/',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 'web-3',
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant patient management system with telemedicine, appointment scheduling, and medical records.',
    category: 'websites',
    image: '../public/images/projectPageImage/web/muti-hms.png',
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    liveUrl: 'https://example.com',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 'web-4',
    title: 'Hacklido Cybersecurity Platform',
    description: 'A cybersecurity blogging and community platform for infosec enthusiasts to read, write, and share knowledge. It offers blogging, learning resources, community interaction, and monetization through writer rewards.',
    category: 'websites',
    image: '../public/images/projectPageImage/web/hacklido.png',
    techStack: [
      'React.js (Frontend - inferred)',
      'Node.js (Backend - inferred)',
      'MongoDB / Database (inferred)',
      'Markdown Editor',
      'REST APIs',
      'Cloud Hosting'
    ],
    liveUrl: 'https://hacklido.com',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 'web-5',
    title: 'Techonquer Cybersecurity Platform',
    description: 'A cybersecurity training and consulting platform offering ethical hacking courses, VAPT services, mock interviews, and certification programs. It focuses on practical, hands-on learning and real-world security skills for students and professionals.',
    category: 'websites',
    image: '../public/images/projectPageImage/web/techonquer.png',
    techStack: [
      'React.js / Next.js (Frontend - inferred)',
      'Node.js / Backend APIs (inferred)',
      'Database (MongoDB / PostgreSQL - inferred)',
      'REST APIs',
      'Cloud Hosting',
      'Payment Integration',
      'Authentication System'
    ],
    liveUrl: 'https://techonquer.org',
    icon: <Globe className="w-5 h-5" />
  },

  // Mobile App Projects
  {
    id: 'app-1',
    title: 'FitTrack Pro',
    description: 'AI-powered fitness tracking app with personalized workout plans, nutrition tracking, and progress analytics.',
    category: 'apps',
    image: '../public/images/projectPageImage/app/medassist.jpeg',
    techStack: ['React Native', 'Firebase', 'TensorFlow', 'Node.js'],
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 'app-2',
    title: 'FinanceHub Mobile',
    description: 'Secure mobile banking app with biometric authentication, instant transfers, and investment tracking.',
    category: 'apps',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop',
    techStack: ['Flutter', 'Firebase', 'Plaid API', 'AWS Amplify'],
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 'app-3',
    title: 'FoodDash Delivery',
    description: 'Real-time food delivery app with live tracking, multiple payment options, and restaurant management.',
    category: 'apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
    icon: <Smartphone className="w-5 h-5" />
  },

  // Design Projects
  {
    id: 'design-1',
    title: 'SaaS Dashboard UI Kit',
    description: 'Complete design system with 200+ components, dark mode support, and responsive layouts for modern SaaS applications.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    techStack: ['Figma', 'Adobe XD', 'React', 'Tailwind CSS'],
    icon: <Palette className="w-5 h-5" />
  },
  {
    id: 'design-2',
    title: 'Mobile App Design System',
    description: 'Comprehensive mobile UI kit with iOS and Android components, animations, and interactive prototypes.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    techStack: ['Figma', 'Sketch', 'Principle', 'After Effects'],
    icon: <Palette className="w-5 h-5" />
  },
  {
    id: 'design-3',
    title: 'E-Commerce Brand Identity',
    description: 'Complete brand identity package including logo, color palette, typography, and marketing materials.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    icon: <Palette className="w-5 h-5" />
  },

  // AI Projects
  {
    id: 'ai-1',
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing, multi-language support, and 24/7 automated customer service.',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Python', 'OpenAI GPT-4', 'LangChain', 'FastAPI'],
    features: ['Natural Language Understanding', 'Multi-language Support', 'Sentiment Analysis', 'Auto-escalation'],
    icon: <Bot className="w-5 h-5" />
  },
  {
    id: 'ai-2',
    title: 'Voice AI Calling Agent',
    description: 'Advanced AI voice agent for automated calling, appointment scheduling, and customer outreach campaigns.',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Python', 'Twilio', 'OpenAI Whisper', 'ElevenLabs'],
    features: ['Voice Recognition', 'Natural Conversations', 'Call Recording', 'Analytics Dashboard'],
    icon: <Bot className="w-5 h-5" />
  },
  {
    id: 'ai-3',
    title: 'Business Automation Suite',
    description: 'Complete automation platform for invoice processing, data entry, email management, and workflow optimization.',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Python', 'Zapier', 'Make.com', 'OpenAI', 'MongoDB'],
    features: ['Document Processing', 'Email Automation', 'Data Extraction', 'Workflow Builder'],
    icon: <Bot className="w-5 h-5" />
  },

  // WhatsApp Bot Projects
  {
    id: 'whatsapp-1',
    title: 'Restaurant Order Bot',
    description: 'WhatsApp bot for automated food ordering, menu browsing, payment processing, and delivery tracking.',
    category: 'whatsapp',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Node.js', 'WhatsApp Business API', 'MongoDB', 'Stripe'],
    features: ['Menu Catalog', 'Order Management', 'Payment Integration', 'Delivery Tracking'],
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    id: 'whatsapp-2',
    title: 'Appointment Booking Bot',
    description: 'Smart WhatsApp bot for scheduling appointments, sending reminders, and managing bookings for service businesses.',
    category: 'whatsapp',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Python', 'Twilio', 'Google Calendar API', 'PostgreSQL'],
    features: ['Calendar Integration', 'Automated Reminders', 'Rescheduling', 'Multi-staff Support'],
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    id: 'whatsapp-3',
    title: 'E-Commerce Support Bot',
    description: 'Intelligent WhatsApp bot for order tracking, product inquiries, returns processing, and customer support.',
    category: 'whatsapp',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Node.js', 'WhatsApp Business API', 'OpenAI', 'Redis'],
    features: ['Order Tracking', 'Product Search', 'Return Processing', 'Live Agent Handoff'],
    icon: <MessageSquare className="w-5 h-5" />
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'websites', label: 'Websites', count: projects.filter(p => p.category === 'websites').length },
  { id: 'apps', label: 'Mobile Apps', count: projects.filter(p => p.category === 'apps').length },
  { id: 'design', label: 'UI/UX Design', count: projects.filter(p => p.category === 'design').length },
  { id: 'ai', label: 'AI Solutions', count: projects.filter(p => p.category === 'ai').length },
  { id: 'whatsapp', label: 'WhatsApp Bots', count: projects.filter(p => p.category === 'whatsapp').length },
];
