import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';

const NotFound: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <SeoHead
      title="Página não encontrada (404) | Dr. Raphael Serra Cruz"
      description="Esta página não existe ou foi movida. Volte ao início ou explore o site do Dr. Raphael Serra Cruz, ortopedista em Indaiatuba-SP."
      path="/404"
      noindex
    />
    <Header />
    <main className="pt-20 flex-grow bg-slate-50">
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24"
        aria-labelledby="erro-404-titulo"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-400 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <p className="mb-2 font-mono text-6xl font-black tracking-tight text-blue-300 md:text-8xl" aria-hidden>
            404
          </p>
          <h1 id="erro-404-titulo" className="mb-4 text-2xl font-bold md:text-4xl">
            Página não encontrada
          </h1>
          <p className="mx-auto mb-10 max-w-lg text-lg text-blue-100/90">
            O endereço pode ter sido alterado ou a página não existe mais. Use os atalhos abaixo ou volte ao início.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-lg transition hover:bg-blue-50"
            >
              <i className="fa-solid fa-house" aria-hidden />
              Início
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Sobre o Dr.
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Blog
            </Link>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Contato
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p className="text-sm">
            Procura informações sobre <strong className="text-slate-800">joelho</strong>,{' '}
            <strong className="text-slate-800">menisco</strong> ou <strong className="text-slate-800">ligamentos</strong>?{' '}
            <Link to="/meniscos" className="font-semibold text-blue-700 underline-offset-2 hover:underline">
              Lesões de menisco
            </Link>
            {' · '}
            <Link to="/lesoes-ligamentares" className="font-semibold text-blue-700 underline-offset-2 hover:underline">
              Lesões ligamentares
            </Link>
          </p>
        </div>
      </section>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default NotFound;
