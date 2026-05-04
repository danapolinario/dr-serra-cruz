
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleWhatsAppLink from '../src/components/ScheduleWhatsAppLink';
import { trackNavClick } from '../src/analytics/gtag';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/imagens/marca/retrato-raphael-serra-cruz.webp"
              alt="Dr. Raphael Serra Cruz"
              width={480}
              height={205}
              decoding="async"
              fetchPriority="high"
              className="h-12 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
          <Link to="/" className="hover:text-blue-600 transition" onClick={() => trackNavClick('/', 'Início')}>
            Início
          </Link>
          <Link to="/sobre" className="hover:text-blue-600 transition" onClick={() => trackNavClick('/sobre', 'Sobre')}>
            Sobre
          </Link>
          
          {/* Dropdown Publicações */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition flex items-center gap-1">
              Publicações <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link
                to="/artigos"
                className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition"
                onClick={() => trackNavClick('/artigos', 'Artigos')}
              >
                Artigos
              </Link>
              <Link
                to="/capitulos-de-livros"
                className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition"
                onClick={() => trackNavClick('/capitulos-de-livros', 'Capítulos de Livros')}
              >
                Capítulos de Livros
              </Link>
              <Link
                to="/palestras-e-congressos"
                className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition"
                onClick={() => trackNavClick('/palestras-e-congressos', 'Palestras e Congressos')}
              >
                Palestras e Congressos
              </Link>
              <Link
                to="/materiais-para-pacientes"
                className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition"
                onClick={() => trackNavClick('/materiais-para-pacientes', 'Materiais para Pacientes')}
              >
                Materiais para Pacientes
              </Link>
              <Link
                to="/premiacoes"
                className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition"
                onClick={() => trackNavClick('/premiacoes', 'Premiações')}
              >
                Premiações
              </Link>
              <Link
                to="/links"
                className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition"
                onClick={() => trackNavClick('/links', 'Links úteis')}
              >
                Links úteis
              </Link>
            </div>
          </div>

          <Link
            to="/#tratamentos"
            className="hover:text-blue-600 transition"
            onClick={() => trackNavClick('/#tratamentos', 'Tratamentos')}
          >
            Tratamentos
          </Link>
          <Link to="/blog" className="hover:text-blue-600 transition" onClick={() => trackNavClick('/blog', 'Blog')}>
            Blog
          </Link>
          <Link
            to="/#avaliacoes"
            className="hover:text-blue-600 transition"
            onClick={() => trackNavClick('/#avaliacoes', 'Avaliações')}
          >
            Avaliações
          </Link>
          <Link
            to="/#contato"
            className="hover:text-blue-600 transition"
            onClick={() => trackNavClick('/#contato', 'Contato')}
          >
            Contato
          </Link>
          <ScheduleWhatsAppLink
            placement="header_desktop"
            className="bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
          >
            Agendar Consulta
          </ScheduleWhatsAppLink>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 flex flex-col p-6 gap-4 font-medium animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => {
              trackNavClick('/', 'Início');
              setIsOpen(false);
            }}
            className="py-2 border-b border-slate-50"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            onClick={() => {
              trackNavClick('/sobre', 'Sobre');
              setIsOpen(false);
            }}
            className="py-2 border-b border-slate-50"
          >
            Sobre
          </Link>
          
          <div className="py-2 border-b border-slate-50 flex flex-col">
            <span className="text-slate-800 mb-2">Publicações</span>
            <div className="flex flex-col pl-4 gap-3 text-slate-600 text-sm">
              <Link
                to="/artigos"
                onClick={() => {
                  trackNavClick('/artigos', 'Artigos');
                  setIsOpen(false);
                }}
              >
                Artigos
              </Link>
              <Link
                to="/capitulos-de-livros"
                onClick={() => {
                  trackNavClick('/capitulos-de-livros', 'Capítulos de Livros');
                  setIsOpen(false);
                }}
              >
                Capítulos de Livros
              </Link>
              <Link
                to="/palestras-e-congressos"
                onClick={() => {
                  trackNavClick('/palestras-e-congressos', 'Palestras e Congressos');
                  setIsOpen(false);
                }}
              >
                Palestras e Congressos
              </Link>
              <Link
                to="/materiais-para-pacientes"
                onClick={() => {
                  trackNavClick('/materiais-para-pacientes', 'Materiais para Pacientes');
                  setIsOpen(false);
                }}
              >
                Materiais para Pacientes
              </Link>
              <Link
                to="/premiacoes"
                onClick={() => {
                  trackNavClick('/premiacoes', 'Premiações');
                  setIsOpen(false);
                }}
              >
                Premiações
              </Link>
              <Link
                to="/links"
                onClick={() => {
                  trackNavClick('/links', 'Links úteis');
                  setIsOpen(false);
                }}
              >
                Links úteis
              </Link>
            </div>
          </div>

          <Link
            to="/#tratamentos"
            onClick={() => {
              trackNavClick('/#tratamentos', 'Tratamentos');
              setIsOpen(false);
            }}
            className="py-2 border-b border-slate-50"
          >
            Tratamentos
          </Link>
          <Link
            to="/blog"
            onClick={() => {
              trackNavClick('/blog', 'Blog');
              setIsOpen(false);
            }}
            className="py-2 border-b border-slate-50"
          >
            Blog
          </Link>
          <Link
            to="/#avaliacoes"
            onClick={() => {
              trackNavClick('/#avaliacoes', 'Avaliações');
              setIsOpen(false);
            }}
            className="py-2 border-b border-slate-50"
          >
            Avaliações
          </Link>
          <Link
            to="/#contato"
            onClick={() => {
              trackNavClick('/#contato', 'Contato');
              setIsOpen(false);
            }}
            className="py-2 border-b border-slate-50"
          >
            Contato
          </Link>
          <ScheduleWhatsAppLink
            placement="header_mobile"
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-center mt-2 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </ScheduleWhatsAppLink>
        </div>
      )}
    </header>
  );
};

export default Header;
