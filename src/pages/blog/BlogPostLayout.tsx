import React, { useEffect, useMemo } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import RelatedPosts from '../../components/RelatedPosts';
import BlogConsultationCta from '../../components/BlogConsultationCta';
import { SeoHead } from '../../components/SeoHead';
import { JsonLdScript } from '../../components/JsonLdScript';
import { blogPosts } from '../../data/blogPosts';
import { SITE_URL, absoluteUrl, truncateMeta } from '../../config/site';

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

  const meta = useMemo(() => blogPosts.find((p) => p.id === postId), [postId]);
  const path = `/blog/${postId}`;
  const description = truncateMeta(meta?.excerpt ?? title);
  const publishedIso = meta?.datePublishedIso
    ? `${meta.datePublishedIso}T12:00:00-03:00`
    : undefined;
  const heroPath = meta?.image ?? heroImage;

  const articleLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      datePublished: publishedIso,
      dateModified: publishedIso,
      image: absoluteUrl(heroPath),
      author: {
        '@type': 'Person',
        name: 'Dr. Raphael Serra Cruz',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dr. Raphael Serra Cruz',
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}${path}`,
      },
    }),
    [title, description, publishedIso, heroPath, path],
  );

  const breadcrumbLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: `${SITE_URL}${path}`,
        },
      ],
    }),
    [title, path],
  );

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <SeoHead
        title={`${title} | Dr. Raphael Serra Cruz`}
        description={description}
        path={path}
        ogType="article"
        ogImagePath={heroPath}
        articlePublishedTime={publishedIso}
        articleModifiedTime={publishedIso}
      />
      <JsonLdScript id={`ld-article-${postId}`} data={articleLd} />
      <JsonLdScript id={`ld-breadcrumb-${postId}`} data={breadcrumbLd} />
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
