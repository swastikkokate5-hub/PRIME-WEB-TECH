import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, categories, ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

interface PortfolioSectionProps {
  filterByCategory?: ProjectCategory;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
  maxProjects?: number;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  filterByCategory,
  showFilters = true,
  title = "Our Projects",
  subtitle = "We build real websites, apps, AI systems, and automation tools for modern businesses.",
  maxProjects
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(filterByCategory || 'all');

  const filteredProjects = filterByCategory 
    ? projects.filter(p => p.category === filterByCategory)
    : activeCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === activeCategory);

  const displayProjects = maxProjects 
    ? filteredProjects.slice(0, maxProjects)
    : filteredProjects;

  return (
    <section className="section-padding relative">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="studio-eyebrow mb-3">03 / ARCHIVE</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        {showFilters && !filterByCategory && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-border">
            {categories.map((category) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as ProjectCategory)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wider uppercase transition-all duration-200 border flex items-center gap-2 ${
                    active
                      ? 'border-primary bg-primary text-black font-semibold shadow-sm'
                      : 'border-border bg-surface text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`mono-label text-[10px] px-1.5 py-0.2 rounded ${
                      active ? 'bg-black/15 text-black' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-lg bg-surface/50">
            <h3 className="text-xl font-bold mb-2 text-foreground">No Projects Found</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              We're currently working on projects in this category. Check back soon!
            </p>
          </div>
        )}

        {/* View All Button (if maxProjects is set) */}
        {maxProjects && filteredProjects.length > maxProjects && (
          <div className="text-center mt-12">
            <button className="h-11 px-8 rounded-md bg-foreground text-background hover:bg-primary hover:text-black font-semibold text-xs uppercase tracking-wider transition-all">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
