import React from 'react';

const WHATSAPP_PREFILL = 'Olá! Gostaria de agendar uma consulta com o Dr. Raphael Serra Cruz.';

const whatsappHref = `https://wa.me/5519998321140?text=${encodeURIComponent(WHATSAPP_PREFILL)}`;

const BlogConsultationCta: React.FC = () => (
  <div className="bg-blue-50 p-8 rounded-xl mt-12 mb-8 border border-blue-100 not-prose max-w-none">
    <h3 className="text-xl font-bold text-blue-900 mb-4">Agende uma consulta</h3>
    <p className="text-slate-700 mb-6">
      Entre em contato pelo WhatsApp +55 19 99832-1140 ou pelo botão abaixo.
    </p>
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
    >
      Agendar consulta
    </a>
  </div>
);

export default BlogConsultationCta;
