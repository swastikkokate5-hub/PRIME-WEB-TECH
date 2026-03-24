import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
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
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      <PageMeta 
        title="Blog | Latest Insights in Web Dev & AI | Prime Web Tech"
        description="Stay ahead with the Prime Web Tech blog. Expert articles on the latest trends in web development, AI automation, and business digital transformation."
        url="/blog"
        schema={blogListSchema}
      />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 blur-[60px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/3 blur-[50px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Our <span className="gold-text-gradient">Insights</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed font-medium">
            Explore our latest thoughts on technology, design, and the future of AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass h-full flex flex-col overflow-hidden border-none hover:shadow-2xl transition-all duration-500 premium-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <CardTitle className="text-xl font-black mb-3 tracking-tighter uppercase leading-tight hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm font-medium line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0 mt-auto">
                  <Button asChild variant="link" className="p-0 text-primary font-black uppercase text-[11px] tracking-widest gap-2 hover:gap-4 transition-all">
                    <Link to={`/blog/${post.slug}`}>Read Full Article <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
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
