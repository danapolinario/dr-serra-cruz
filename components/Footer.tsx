
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="/imagens/marca/retrato-raphael-serra-cruz.webp" 
          alt="Logo" 
          className="h-16 w-auto mx-auto brightness-0 invert mb-8"
        />
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.instagram.com/dr.serracruz/" target="_blank" className="text-2xl hover:text-blue-400 transition"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/raphael-serra-cruz-md-msc-76089034/" target="_blank" className="text-2xl hover:text-blue-400 transition"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@dr.raphaelserracruz" target="_blank" className="text-2xl hover:text-blue-400 transition"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://scholar.google.com/citations?user=GbnVAdsAAAAJ" target="_blank" className="text-2xl hover:text-blue-400 transition"><i className="fa-solid fa-graduation-cap"></i></a>
        </div>
        <p className="text-slate-400 text-sm mb-4">
          Dr. Raphael Serra Cruz | CRM-SP 239793 | RQE: 107916
        </p>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Dr. Raphael Serra Cruz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
