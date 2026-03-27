
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-50 scroll-mt-nav">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4">Onde estamos</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Localização & Contato</h3>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
              <div className="flex gap-4 mb-6">
                <div className="text-blue-600 text-xl"><i className="fa-solid fa-hospital"></i></div>
                <div>
                  <h4 className="font-bold text-slate-900">Clínica CITTA</h4>
                  <p className="text-slate-600">Rua Estados Unidos, 317 – Parque Boa Esperança, Indaiatuba - SP</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="text-blue-600 text-xl"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(19) 99832-1140</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-600 text-xl"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-600">contato@drserracruz.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-lg h-64 border border-slate-200">
               <iframe 
                src="https://maps.google.com/maps?q=Rua%20Estados%20Unidos%2C%20317%20%E2%80%93%20Parque%20Boa%20Esperanca%20%E2%80%93%2013339-230%20%E2%80%93%20Indaiatuba%20%2F%20SP&t=m&z=15&output=embed&iwloc=near"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Como podemos te chamar?" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition">
                  <option>Agendar Consulta</option>
                  <option>Dúvidas sobre Cirurgia</option>
                  <option>Pós-operatório</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Conte-nos brevemente sobre seu caso"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
