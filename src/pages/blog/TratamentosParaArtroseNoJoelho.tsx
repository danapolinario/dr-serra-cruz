import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import RelatedPosts from '../../components/RelatedPosts';
import BlogConsultationCta from '../../components/BlogConsultationCta';

const Post2: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12 text-center">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Ortopedia e Traumatologia</span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Principais Tratamentos para Artrose no Joelho
              </h1>
              <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
                <span>Por Dr. Raphael Serra Cruz</span>
                <span>•</span>
                <span>02 de Abril de 2024</span>
              </div>
            </header>

            <img 
              src="/imagens/inicio/mostrando-exame-na-tela.webp" 
              alt="Dr. Raphael Serra Cruz, Ortopedista e Especialista em joelho em Indaiatuba, analisando exames" 
              className="w-full h-auto rounded-2xl shadow-xl mb-12 object-cover max-h-[500px]"
            />

            <div className="prose prose-lg prose-blue max-w-none text-slate-700">
              <p className="lead text-xl text-slate-600 mb-8">
                A artrose no joelho, também conhecida como osteoartrite, é uma condição degenerativa que afeta a cartilagem da articulação. Como <strong>Especialista em joelho</strong> atuando em <strong>Indaiatuba</strong>, o <strong>Dr. Raphael Serra Cruz</strong> destaca que, embora não tenha cura, existem diversos tratamentos que podem aliviar a dor e melhorar a qualidade de vida do paciente.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">O que é a Artrose no Joelho?</h2>
              <p className="mb-6">
                A artrose ocorre quando a cartilagem que reveste as extremidades dos ossos na articulação do joelho se desgasta gradualmente. Isso pode causar dor, inchaço, rigidez e dificuldade de movimentação. Fatores como idade, genética, obesidade e lesões prévias (como lesões de menisco ou ligamentos) aumentam o risco de desenvolver a doença.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Tratamentos Conservadores</h2>
              <p className="mb-6">
                O tratamento inicial para a artrose no joelho geralmente é conservador, focado no alívio dos sintomas e na preservação da função articular.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Perda de Peso:</strong> Reduzir o peso corporal diminui a sobrecarga na articulação do joelho, aliviando a dor.</li>
                <li><strong>Fisioterapia:</strong> Exercícios específicos ajudam a fortalecer os músculos ao redor do joelho, melhorando a estabilidade e a mobilidade.</li>
                <li><strong>Medicamentos:</strong> Analgésicos e anti-inflamatórios podem ser prescritos para controlar a dor e a inflamação.</li>
                <li><strong>Infiltrações:</strong> Injeções de ácido hialurônico (viscossuplementação) ou corticosteroides podem proporcionar alívio temporário da dor e melhorar a lubrificação da articulação.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Tratamentos Cirúrgicos</h2>
              <p className="mb-6">
                Quando os tratamentos conservadores não são suficientes para controlar a dor e a limitação funcional, a cirurgia pode ser considerada. Como <strong>Ortopedista</strong> e <strong>Traumatologista</strong>, avalio cuidadosamente cada caso para indicar o procedimento mais adequado.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Artroscopia:</strong> Procedimento minimamente invasivo para limpar a articulação, remover fragmentos soltos de cartilagem ou tratar lesões associadas (como de menisco).</li>
                <li><strong>Osteotomia:</strong> Cirurgia para realinhar os ossos do joelho, transferindo o peso da área desgastada para uma área mais saudável.</li>
                <li><strong>Artroplastia (Prótese de Joelho):</strong> Substituição da articulação desgastada por uma prótese artificial. Pode ser parcial (substituindo apenas a parte danificada) ou total. É um procedimento altamente eficaz para aliviar a dor e restaurar a função em casos avançados de artrose.</li>
              </ul>

              <p className="mb-6">
                Se você sofre com dores no joelho e suspeita de artrose, não hesite em procurar um <strong>Especialista em joelho</strong>. O <strong>Dr. Raphael Serra Cruz</strong> oferece um atendimento humanizado e tratamentos modernos para devolver a sua qualidade de vida.
              </p>
            </div>

            <BlogConsultationCta />

            <RelatedPosts currentPostId="tratamentos-para-artrose-no-joelho" />
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Post2;
