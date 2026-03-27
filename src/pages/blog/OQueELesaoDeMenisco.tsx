import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import RelatedPosts from '../../components/RelatedPosts';
import BlogConsultationCta from '../../components/BlogConsultationCta';

const Post1: React.FC = () => {
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
                O que é Lesão de Menisco e como tratar?
              </h1>
              <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
                <span>Por Dr. Raphael Serra Cruz</span>
                <span>•</span>
                <span>15 de Março de 2024</span>
              </div>
            </header>

            <img 
              src="/imagens/inicio/examinando-paciente.webp" 
              alt="Dr. Raphael Serra Cruz examinando joelho do paciente em Indaiatuba" 
              className="w-full h-auto rounded-2xl shadow-xl mb-12 object-cover max-h-[500px]"
            />

            <div className="prose prose-lg prose-blue max-w-none text-slate-700">
              <p className="lead text-xl text-slate-600 mb-8">
                Como <strong>Ortopedista</strong> e <strong>Especialista em joelho</strong> em <strong>Indaiatuba</strong>, recebo frequentemente pacientes com queixas de dor no joelho. Uma das causas mais comuns é a lesão de menisco. Mas o que exatamente é isso e como podemos tratar?
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">O que são os Meniscos?</h2>
              <p className="mb-6">
                Os meniscos são estruturas de fibrocartilagem em formato de "C" localizadas dentro da articulação do joelho, entre o fêmur e a tíbia. Cada joelho possui dois meniscos: o medial (na parte interna) e o lateral (na parte externa). Eles funcionam como amortecedores, distribuindo o peso e estabilizando a articulação.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Causas da Lesão de Menisco</h2>
              <p className="mb-6">
                As lesões podem ocorrer de duas formas principais:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Traumáticas:</strong> Comuns em atletas e jovens, geralmente causadas por torções bruscas do joelho durante a prática de esportes.</li>
                <li><strong>Degenerativas:</strong> Mais frequentes em pacientes mais velhos, ocorrem devido ao desgaste natural da cartilagem ao longo do tempo.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Sintomas Comuns</h2>
              <p className="mb-6">
                Se você está em <strong>Indaiatuba</strong> ou região e sente dor no joelho, fique atento a estes sinais:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Dor na linha da articulação, especialmente ao agachar ou torcer o joelho.</li>
                <li>Inchaço (derrame articular).</li>
                <li>Sensação de travamento ou estalos no joelho.</li>
                <li>Dificuldade para esticar ou dobrar a perna completamente.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Tratamentos Disponíveis</h2>
              <p className="mb-6">
                O tratamento ideal depende do tipo, tamanho e localização da lesão, além da idade e nível de atividade do paciente. Como <strong>Traumatologista</strong>, avalio cada caso individualmente.
              </p>
              <p className="mb-6">
                <strong>Tratamento Conservador:</strong> Indicado para lesões menores ou degenerativas. Envolve repouso, gelo, fisioterapia e medicamentos anti-inflamatórios.
              </p>
              <p className="mb-6">
                <strong>Tratamento Cirúrgico:</strong> Quando a lesão é extensa, causa travamento ou não melhora com o tratamento conservador, a cirurgia (artroscopia) pode ser necessária. O procedimento é minimamente invasivo e permite reparar (suturar) ou remover a parte lesionada do menisco.
              </p>

              <p className="mb-6">
                Não ignore a dor no joelho. O diagnóstico precoce por um <strong>Especialista em joelho</strong> é fundamental para um tratamento eficaz e para evitar complicações futuras. O <strong>Dr. Raphael Serra Cruz</strong> está à disposição para avaliar o seu caso.
              </p>
            </div>

            <BlogConsultationCta />

            <RelatedPosts currentPostId="o-que-e-lesao-de-menisco" />
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Post1;
