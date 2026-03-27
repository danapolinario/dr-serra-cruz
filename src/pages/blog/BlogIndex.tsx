import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import { blogPosts } from '../../data/blogPosts';
import { SeoHead } from '../../components/SeoHead';
import { STATIC_PAGE_SEO } from '../../seo/pageSeo';

const BlogIndex: React.FC = () => {
  const seo = STATIC_PAGE_SEO['/blog'];
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <SeoHead title={seo.title} description={seo.description} path="/blog" />
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog do Dr. Raphael Serra Cruz</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Informações atualizadas sobre ortopedia, traumatologia e tratamentos especializados para o joelho em Indaiatuba.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2"
                >
                  <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-blue-600 font-semibold mb-2">{post.date}</span>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-2 mt-auto"
                    >
                      Ler artigo completo <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogIndex;
