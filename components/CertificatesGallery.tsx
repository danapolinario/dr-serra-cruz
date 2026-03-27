import React, { useState, useEffect } from 'react';

const CertificatesGallery: React.FC = () => {
  const certs = [
    { src: '/imagens/certificados/certificado-aossm.webp', thumb: '/imagens/certificados/miniaturas/certificado-aossm.webp', name: 'Certificado AOSSM' },
    { src: '/imagens/certificados/certificado-efort.webp', thumb: '/imagens/certificados/miniaturas/certificado-efort.webp', name: 'Certificado Efort' },
    { src: '/imagens/certificados/certificado-lyon.webp', thumb: '/imagens/certificados/miniaturas/certificado-lyon.webp', name: 'CERTIFICADO Lyon' },
    { src: '/imagens/certificados/certificado-residencia-medica.webp', thumb: '/imagens/certificados/miniaturas/certificado-residencia-medica.webp', name: 'Certificado Residência Médica' },
    { src: '/imagens/certificados/certificado-spri.webp', thumb: '/imagens/certificados/miniaturas/certificado-spri.webp', name: 'CERTIFICADO SPRI' },
    { src: '/imagens/certificados/certificado-stanford.webp', thumb: '/imagens/certificados/miniaturas/certificado-stanford.webp', name: 'CERTIFICADO Stanford' },
    { src: '/imagens/certificados/certificado-sbcj.webp', thumb: '/imagens/certificados/miniaturas/certificado-sbcj.webp', name: 'SBCJ' },
    { src: '/imagens/certificados/certificado-sbot.webp', thumb: '/imagens/certificados/miniaturas/certificado-sbot.webp', name: 'SBOT' },
    { src: '/imagens/certificados/certificado-uerj.webp', thumb: '/imagens/certificados/miniaturas/certificado-uerj.webp', name: 'UERJ' },
    { src: '/imagens/certificados/certificado-sbrate.webp', thumb: '/imagens/certificados/miniaturas/certificado-sbrate.webp', name: 'SBRATE' }
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % certs.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + certs.length) % certs.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedIndex((selectedIndex + 1) % certs.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((selectedIndex - 1 + certs.length) % certs.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, certs.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {certs.map((cert, idx) => (
          <div 
            key={idx} 
            className="cursor-pointer overflow-hidden rounded-xl border border-slate-200 hover:shadow-xl transition-all bg-white flex items-center justify-center p-4 hover:border-blue-300 group"
            onClick={() => setSelectedIndex(idx)}
          >
            <img 
              src={cert.thumb} 
              alt={cert.name} 
              className="w-full h-auto object-contain max-h-40 group-hover:scale-105 transition-transform duration-300" 
              onError={(e) => {
                // Fallback to thumb if original is not found
                (e.target as HTMLImageElement).src = cert.thumb;
              }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white text-4xl transition z-50"
            onClick={() => setSelectedIndex(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <button 
            className="absolute left-2 md:left-8 text-white/50 hover:text-white text-4xl md:text-5xl transition p-4 z-50"
            onClick={prevSlide}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="relative max-w-5xl w-full flex items-center justify-center h-full max-h-[85vh]">
            <img 
              src={certs[selectedIndex].src} 
              alt={certs[selectedIndex].name} 
              className="max-w-full max-h-full object-contain rounded shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                // Fallback to thumb if original is not found
                (e.target as HTMLImageElement).src = certs[selectedIndex].thumb;
              }}
            />
          </div>

          <button 
            className="absolute right-2 md:right-8 text-white/50 hover:text-white text-4xl md:text-5xl transition p-4 z-50"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-lg font-medium">
            {selectedIndex + 1} / {certs.length}
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesGallery;
