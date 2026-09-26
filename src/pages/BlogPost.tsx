import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
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
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title={`${post.title} | Prime Web Tech Blog`}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        schema={postSchema}
      />

      <div className="container-responsive relative z-10 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs font-medium uppercase tracking-wider mb-10 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back To Insights</span>
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mono-label text-[10px] text-muted-foreground mb-4">
            <span className="px-2.5 py-0.5 rounded border border-border bg-surface text-primary font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-primary" /> {post.date}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-primary" /> {post.author}</span>
          </div>

          <h1 className="hero-headline text-foreground mb-8" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.05 }}>
            {post.title}
          </h1>

          <div className="w-full aspect-[16/9] max-h-[460px] rounded-lg border border-border overflow-hidden mb-10 bg-surface-subtle">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none mb-16 blog-content text-foreground/90 font-normal leading-relaxed text-base">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="mono-label text-[10px] text-muted-foreground">SHARE INSIGHT:</span>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="w-8 h-8 rounded border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Share article"
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>
          
          <Button asChild className="rounded-md bg-foreground text-background hover:bg-primary hover:text-black px-6 h-10 text-xs font-bold uppercase tracking-wider transition-all border-none">
            <Link to="/contact">Discuss A Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
