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
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full glass border border-primary/20 text-xs font-black uppercase tracking-[0.3em] text-primary">
              Portfolio
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        {showFilters && !filterByCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category.id as ProjectCategory)}
                className={`
                  px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest
                  transition-all duration-500 border-2
                  ${activeCategory === category.id 
                    ? 'gold-gradient text-black border-transparent shadow-2xl scale-105' 
                    : 'glass border-primary/20 hover:border-primary/40 hover:scale-105'
                  }
                `}
              >
                {category.label}
                <span className={`ml-3 px-2.5 py-1 rounded-full text-[10px] font-black ${
                  activeCategory === category.id 
                    ? 'bg-black/20 text-black' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full glass flex items-center justify-center">
              <span className="text-6xl">🔍</span>
            </div>
            <h3 className="text-3xl font-black mb-4">No Projects Found</h3>
            <p className="text-muted-foreground text-lg">
              We're currently working on projects in this category. Check back soon!
            </p>
          </motion.div>
        )}

        {/* View All Button (if maxProjects is set) */}
        {maxProjects && filteredProjects.length > maxProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-12 py-5 rounded-full gold-gradient text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
