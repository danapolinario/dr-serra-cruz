import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import RelatedPosts from '../../components/RelatedPosts';
import BlogConsultationCta from '../../components/BlogConsultationCta';

const Post3: React.FC = () => {
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
                Quando procurar um Ortopedista e Traumatologista?
              </h1>
              <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
                <span>Por Dr. Raphael Serra Cruz</span>
                <span>•</span>
                <span>20 de Abril de 2024</span>
              </div>
            </header>

            <img 
              src="/imagens/blog/retrato-braco-cruzado.webp" 
              alt="Dr. Raphael Serra Cruz, Ortopedista e Traumatologista em Indaiatuba" 
              className="w-full h-auto rounded-2xl shadow-xl mb-12 object-cover max-h-[500px]"
            />

            <div className="prose prose-lg prose-blue max-w-none text-slate-700">
              <p className="lead text-xl text-slate-600 mb-8">
                Muitas pessoas convivem com dores articulares e musculares por muito tempo antes de buscar ajuda médica. Como <strong>Ortopedista</strong> e <strong>Traumatologista</strong> em <strong>Indaiatuba</strong>, o <strong>Dr. Raphael Serra Cruz</strong> alerta que ignorar os sinais do corpo pode agravar problemas que, se diagnosticados precocemente, teriam tratamentos mais simples e eficazes.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">O que faz um Ortopedista e Traumatologista?</h2>
              <p className="mb-6">
                A Ortopedia é a especialidade médica que cuida das doenças e deformidades dos ossos, músculos, ligamentos e articulações. Já a Traumatologia lida com as lesões provocadas por traumas, como fraturas, luxações e entorses. Um profissional com ambas as formações está preparado para diagnosticar e tratar uma ampla gama de problemas no sistema musculoesquelético.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Sinais de Alerta: Quando Agendar uma Consulta</h2>
              <p className="mb-6">
                Não espere a dor se tornar insuportável. Fique atento aos seguintes sinais que indicam a necessidade de procurar um especialista:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dor Persistente:</strong> Dores nas articulações (especialmente no joelho, ombro, quadril ou coluna) que duram mais de alguns dias, mesmo com repouso.</li>
                <li><strong>Inchaço e Vermelhidão:</strong> Articulações inchadas, quentes ou avermelhadas podem indicar inflamação, infecção ou lesões como a de menisco.</li>
                <li><strong>Dificuldade de Movimentação:</strong> Rigidez articular, sensação de travamento ou incapacidade de realizar movimentos simples do dia a dia.</li>
                <li><strong>Traumas e Acidentes:</strong> Após quedas, pancadas fortes ou torções, especialmente se houver dor intensa, inchaço imediato ou deformidade visível.</li>
                <li><strong>Formigamento ou Dormência:</strong> Sensações anormais nos braços ou pernas podem indicar compressão de nervos.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">A Importância do Especialista em Joelho</h2>
              <p className="mb-6">
                O joelho é uma das articulações mais complexas e exigidas do corpo humano, sendo frequentemente acometido por lesões (como rompimento de ligamentos e lesões de menisco) e desgaste (artrose). Procurar um <strong>Especialista em joelho</strong> garante um diagnóstico preciso e acesso aos tratamentos mais modernos e adequados para o seu caso específico.
              </p>
              <p className="mb-6">
                O <strong>Dr. Raphael Serra Cruz</strong> possui ampla experiência no tratamento de diversas patologias do joelho, oferecendo desde abordagens conservadoras até cirurgias minimamente invasivas (artroscopia) e próteses.
              </p>

              <p className="mb-6">
                Se você apresenta algum dos sintomas mencionados ou sofreu um trauma recente, não adie sua consulta. O <strong>Dr. Raphael Serra Cruz</strong>, <strong>Ortopedista</strong> e <strong>Traumatologista</strong>, está pronto para avaliar o seu caso e propor o melhor tratamento.
              </p>
            </div>

            <BlogConsultationCta />

            <RelatedPosts currentPostId="quando-procurar-um-ortopedista" />
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Post3;
