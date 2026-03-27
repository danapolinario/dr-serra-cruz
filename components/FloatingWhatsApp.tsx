
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5519998321140" 
      target="_blank"
      className="fixed bottom-6 right-6 z-[999] bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        Fale conosco agora!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
