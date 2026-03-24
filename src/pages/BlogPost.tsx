import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prime Web Tech"
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://primewebtech.online/blog/${post.slug}`
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      <PageMeta 
        title={`${post.title} | Prime Web Tech Blog`}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        schema={postSchema}
      />

      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 blur-[60px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/3 blur-[50px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-[11px] font-black uppercase tracking-widest mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back To Insights
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 text-[10px] text-primary font-black uppercase tracking-widest mb-6">
            <span className="px-3 py-1 rounded-full glass border border-primary/20">{post.category}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 tracking-tighter leading-tight uppercase">
            {post.title}
          </h1>
          <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl relative">
             <img 
               src={post.image} 
               alt={post.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </header>

        <article className="prose prose-invert prose-p:text-muted-foreground prose-h2:text-foreground prose-h2:font-black prose-h2:tracking-tighter prose-h2:uppercase prose-p:font-medium max-w-none mb-20 blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="border-t border-border/30 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Share this masterpiece</span>
              <div className="flex gap-2">
                 {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                   <Button key={i} variant="outline" size="icon" className="w-10 h-10 rounded-full glass border-border/50 hover:bg-primary hover:text-black transition-all">
                      <Icon className="w-4 h-4" />
                   </Button>
                 ))}
              </div>
           </div>
           
           <Button asChild size="lg" className="gold-gradient text-black rounded-full px-10 h-14 text-sm font-black shadow-xl transition-all hover:scale-105 border-none uppercase tracking-widest">
              <Link to="/contact">Discuss A Project</Link>
           </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
