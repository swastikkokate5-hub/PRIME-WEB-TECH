import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog: React.FC = () => {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Prime Web Tech Blog",
    "description": "Expert insights on web development, AI, automation, and software engineering from the team at Prime Web Tech.",
    "publisher": {
      "@type": "Organization",
      "name": "Prime Web Tech"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://primewebtech.online/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title="Blog | Latest Insights in Web Dev & AI | Prime Web Tech" 
        description="Stay ahead with the Prime Web Tech blog. Expert articles on the latest trends in web development, AI automation, and business digital transformation."
        url="/blog"
        schema={blogListSchema}
      />

      <div className="container-responsive relative z-10">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="studio-eyebrow mb-4">05 / PERSPECTIVES</div>
          <h1 className="hero-headline text-foreground mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.98 }}>
            Our <span className="text-primary">Insights</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Explore our latest thoughts on technology, design, and the future of AI automation.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.5 }}
            >
              <Card className="studio-card h-full border border-border rounded-lg bg-surface flex flex-col justify-between overflow-hidden shadow-none group">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-subtle">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="mono-label text-[10px] px-2.5 py-1 rounded bg-background/90 backdrop-blur-md border border-border text-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="p-6 pb-3">
                    <div className="flex items-center gap-3 mono-label text-[10px] text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-primary" /> {post.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                    </div>
                    <CardTitle className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-xs sm:text-sm font-normal line-clamp-3 leading-relaxed mt-2.5">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                </div>

                <CardContent className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
