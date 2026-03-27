
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/imagens/marca/retrato-raphael-serra-cruz.webp" 
              alt="Dr. Raphael Serra Cruz" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
          <Link to="/" className="hover:text-blue-600 transition">Início</Link>
          <Link to="/sobre" className="hover:text-blue-600 transition">Sobre</Link>
          
          {/* Dropdown Publicações */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition flex items-center gap-1">
              Publicações <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link to="/artigos" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition">Artigos</Link>
              <Link to="/capitulos-de-livros" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition">Capítulos de Livros</Link>
              <Link to="/palestras-e-congressos" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition">Palestras e Congressos</Link>
              <Link to="/materiais-para-pacientes" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition">Materiais para Pacientes</Link>
              <Link to="/premiacoes" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition">Premiações</Link>
              <Link to="/links" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition">Links úteis</Link>
            </div>
          </div>

          <a href={isHome ? "#tratamentos" : "/#tratamentos"} className="hover:text-blue-600 transition">Tratamentos</a>
          <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <a href={isHome ? "#avaliacoes" : "/#avaliacoes"} className="hover:text-blue-600 transition">Avaliações</a>
          <a href={isHome ? "#contato" : "/#contato"} className="hover:text-blue-600 transition">Contato</a>
          <a 
            href="https://wa.me/5519998321140" 
            target="_blank" 
            className="bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
          >
            Agendar Consulta
          </a>
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
          <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Início</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Sobre</Link>
          
          <div className="py-2 border-b border-slate-50 flex flex-col">
            <span className="text-slate-800 mb-2">Publicações</span>
            <div className="flex flex-col pl-4 gap-3 text-slate-600 text-sm">
              <Link to="/artigos" onClick={() => setIsOpen(false)}>Artigos</Link>
              <Link to="/capitulos-de-livros" onClick={() => setIsOpen(false)}>Capítulos de Livros</Link>
              <Link to="/palestras-e-congressos" onClick={() => setIsOpen(false)}>Palestras e Congressos</Link>
              <Link to="/materiais-para-pacientes" onClick={() => setIsOpen(false)}>Materiais para Pacientes</Link>
              <Link to="/premiacoes" onClick={() => setIsOpen(false)}>Premiações</Link>
              <Link to="/links" onClick={() => setIsOpen(false)}>Links úteis</Link>
            </div>
          </div>

          <a href={isHome ? "#tratamentos" : "/#tratamentos"} onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Tratamentos</a>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Blog</Link>
          <a href={isHome ? "#avaliacoes" : "/#avaliacoes"} onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Avaliações</a>
          <a href={isHome ? "#contato" : "/#contato"} onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Contato</a>
          <a 
            href="https://wa.me/5519998321140" 
            target="_blank" 
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-center mt-2 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
