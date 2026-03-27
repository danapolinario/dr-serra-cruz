import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SeoHead } from '../src/components/SeoHead';

const NotFound: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <SeoHead
      title="Página não encontrada | Dr. Raphael Serra Cruz"
      description="A página que você procura não existe ou foi movida."
      path="/404"
      noindex
    />
    <Header />
    <main className="pt-20 flex-grow flex items-center justify-center bg-slate-50">
      <div className="text-center px-4 py-24">
        <p className="text-7xl font-bold text-blue-700 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Página não encontrada</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          O endereço pode ter sido alterado ou a página não existe mais. Confira o endereço ou volte ao início.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition shadow-lg"
        >
          <i className="fa-solid fa-house" /> Voltar ao início
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
