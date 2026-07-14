import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../../pages/NotFound';
import BlogPostLayout from './BlogPostLayout';
import { dynamicBlogPosts, staticBlogPosts } from '../../data/blogPosts';

const DynamicBlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(
    () => (slug ? dynamicBlogPosts.find((p) => p.id === slug) : undefined),
    [slug],
  );

  const isStaticSlug = useMemo(
    () => (slug ? staticBlogPosts.some((p) => p.id === slug) : false),
    [slug],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || isStaticSlug || !post) {
    return <NotFound />;
  }

  return (
    <BlogPostLayout
      category={post.category}
      title={post.title}
      date={post.date}
      heroImage={post.image}
      heroAlt={post.heroAlt}
      postId={post.id}
      meta={post}
    >
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </BlogPostLayout>
  );
};

export default DynamicBlogPost;
