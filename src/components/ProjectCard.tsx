import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isMobileApp = project.category === 'apps';
  const hasVideo = !!project.videoUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group h-full"
    >
      <Card className="h-full glass border-none shadow-2xl hover:shadow-primary/20 transition-all duration-700 rounded-[3rem] overflow-hidden glow-gold-hover premium-shadow">
        <CardContent className="p-0">
          {/* Image/Video Section */}
          <div className={`relative overflow-hidden ${isMobileApp ? 'bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center py-12' : ''}`}>
            {hasVideo ? (
              <div className="relative w-full aspect-video bg-black/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                  <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-black ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className={`relative ${isMobileApp ? 'w-64 mx-auto' : 'w-full aspect-video'} overflow-hidden`}>
                {isMobileApp && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 rounded-[3rem] pointer-events-none" />
                )}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    isMobileApp ? 'rounded-[2.5rem] shadow-2xl border-8 border-black/20' : ''
                  }`}
                />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-10">
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-primary transition-colors uppercase tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full glass text-xs font-bold border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features (for AI/WhatsApp projects) */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Key Features
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {hasVideo ? (
                <Button 
                  onClick={() => window.open(project.videoUrl, '_blank')}
                  className="flex-1 rounded-full gold-gradient text-black font-black h-12 text-sm uppercase tracking-widest hover:scale-105 transition-all border-none shadow-lg"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              ) : project.liveUrl ? (
                <Button 
                  className="flex-1 rounded-full gold-gradient text-black font-black h-12 text-sm uppercase tracking-widest hover:scale-105 transition-all border-none shadow-lg"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </a>
                </Button>
              ) : (
                <Button 
                  onClick={() => {}}
                  className="flex-1 rounded-full gold-gradient text-black font-black h-12 text-sm uppercase tracking-widest hover:scale-105 transition-all border-none shadow-lg"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Preview
                </Button>
              )}
              
              <Button 
                onClick={() => {}}
                variant="outline"
                className="flex-1 rounded-full border-2 font-black h-12 text-sm uppercase tracking-widest hover:scale-105 transition-all"
              >
                Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
