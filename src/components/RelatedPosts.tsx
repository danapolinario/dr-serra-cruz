import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

interface RelatedPostsProps {
  currentPostId: string;
}

const RELATED_LIMIT = 6;

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId }) => {
  const relatedPosts = blogPosts.filter((post) => post.id !== currentPostId).slice(0, RELATED_LIMIT);

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <h3 className="text-2xl font-bold text-slate-800 mb-8">Artigos Relacionados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
