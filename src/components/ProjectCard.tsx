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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="studio-card h-full border border-border rounded-lg bg-surface overflow-hidden flex flex-col justify-between shadow-none group">
        <CardContent className="p-0 flex flex-col h-full justify-between">
          {/* Media Showcase Container */}
          <div>
            <div className="relative overflow-hidden border-b border-border bg-surface-subtle">
              {hasVideo ? (
                <div className="relative w-full aspect-video bg-black/60">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/15 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`relative ${isMobileApp ? 'py-8 flex items-center justify-center' : 'w-full aspect-video'} overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`object-cover transition-transform duration-500 group-hover:scale-103 ${
                      isMobileApp
                        ? 'w-44 h-auto rounded-md border border-border shadow-md'
                        : 'w-full h-full'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              {/* Category Stamp Tag */}
              <div className="absolute top-3 left-3">
                <span className="mono-label text-[10px] px-2.5 py-1 rounded bg-background/90 backdrop-blur-md border border-border text-foreground">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded border border-border bg-surface-subtle flex items-center justify-center text-primary shrink-0 mt-0.5">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mono-label text-[10px] text-muted-foreground mb-1">
                    PROJECT {'//'} 0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Tech Stack List */}
              <div className="mb-6">
                <div className="mono-label text-[10px] text-muted-foreground/80 mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="mono-label text-[10px] px-2 py-0.5 rounded border border-border bg-surface-subtle text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6 pt-4 border-t border-border">
                  <div className="mono-label text-[10px] text-muted-foreground/80 mb-2">
                    KEY CAPABILITIES
                  </div>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-foreground/85 font-normal">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 pt-0 mt-auto">
            <div className="flex gap-2.5 pt-4 border-t border-border">
              {hasVideo ? (
                <Button 
                  onClick={() => window.open(project.videoUrl, '_blank')}
                  className="flex-1 h-9 rounded-md bg-foreground text-background hover:bg-primary hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Play className="w-3.5 h-3.5 mr-1.5" />
                  Watch Demo
                </Button>
              ) : project.liveUrl ? (
                <Button 
                  className="flex-1 h-9 rounded-md bg-foreground text-background hover:bg-primary hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Visit Website
                  </a>
                </Button>
              ) : (
                <Button 
                  onClick={() => {}}
                  className="flex-1 h-9 rounded-md bg-foreground text-background hover:bg-primary hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Eye className="w-3.5 h-3.5 mr-1.5" />
                  View Preview
                </Button>
              )}
              
              <Button 
                onClick={() => {}}
                variant="outline"
                className="h-9 px-4 rounded-md border border-border text-foreground hover:bg-muted font-semibold text-xs uppercase tracking-wider transition-all"
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
