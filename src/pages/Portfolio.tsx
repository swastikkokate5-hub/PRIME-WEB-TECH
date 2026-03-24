import React from 'react';
import PortfolioSection from '@/components/PortfolioSection';
import PageMeta from '@/components/common/PageMeta';

const Portfolio: React.FC = () => {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Prime Web Tech Portfolio",
    "description": "Showcase of our premium web development, AI solutions, and automation projects.",
    "url": "https://primewebtech.online/portfolio"
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      <PageMeta 
        title="Portfolio | Premium Web & AI Projects | Prime Web Tech"
        description="Explore the Prime Web Tech portfolio. Discover our successful web development, AI automation, and custom software projects delivered to global clients from Pune."
        url="/portfolio"
        schema={portfolioSchema}
      />
      <PortfolioSection 
        title="Our Masterpieces"
        subtitle="A curated showcase of our engineering excellence and design precision. From custom SaaS platforms to advanced AI agents, witness the future we are building."
      />
    </div>
  );
};

export default Portfolio;
