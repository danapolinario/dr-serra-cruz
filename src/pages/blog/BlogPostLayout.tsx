import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import RelatedPosts from '../../components/RelatedPosts';
import BlogConsultationCta from '../../components/BlogConsultationCta';

interface BlogPostLayoutProps {
  category: string;
  title: string;
  date: string;
  heroImage: string;
  heroAlt: string;
  postId: string;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  category,
  title,
  date,
  heroImage,
  heroAlt,
  postId,
  children,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12 text-center">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">{category}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{title}</h1>
              <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
                <span>Por Dr. Raphael Serra Cruz</span>
                <span>•</span>
                <span>{date}</span>
              </div>
            </header>

            <img
              src={heroImage}
              alt={heroAlt}
              className="w-full h-auto rounded-2xl shadow-xl mb-12 object-cover max-h-[500px]"
            />

            <div className="prose prose-lg prose-blue max-w-none text-slate-700">{children}</div>

            <BlogConsultationCta />

            <RelatedPosts currentPostId={postId} />
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPostLayout;
