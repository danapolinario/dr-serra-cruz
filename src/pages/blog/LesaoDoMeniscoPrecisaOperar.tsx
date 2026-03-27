import React from 'react';
import BlogPostLayout from './BlogPostLayout';

const LesaoDoMeniscoPrecisaOperar: React.FC = () => (
  <BlogPostLayout
    category="Ortopedia e Traumatologia"
    title="Lesão do menisco: precisa operar?"
    date="1 de Junho de 2022"
    heroImage="/imagens/blog/lesao-menisco-hero.webp"
    heroAlt="Cuidado com o joelho e lesão meniscal"
    postId="lesao-do-menisco-precisa-operar"
  >
    <p className="lead text-xl text-slate-600 mb-8">
      Certamente algumas lesões meniscais são passíveis de cicatrização sem intervenção cirúrgica. Em geral, lesões isoladas (sem outras lesões que gerem instabilidade), pequenas, localizadas nas regiões mais bem vascularizadas dos meniscos (chamadas de zona periférica ou vermelha-vermelha), têm potencial de cicatrização mesmo sem cirurgia. Nestes casos, pode ser necessário um período com restrição de movimentos que evitem a sobrecarga na articulação durante a fase de cicatrização, bem como uma fisioterapia muito bem aplicada.
    </p>
    <p className="mb-6">
      Para saber se uma lesão indica a necessidade de cirurgia, o ideal é consultar um especialista em joelho. Existem diversos parâmetros que devem ser colocados em discussão para se optar pela cirurgia ou não — por exemplo, a necessidade de retorno rápido ou não às atividades, as demandas e expectativas de cada paciente, o padrão de lesão, o eixo do membro, o tempo decorrente desde a lesão, entre outros. Mesmo optando pela cirurgia, ainda existem as opções de sutura ou meniscectomia parcial (retirada do tecido lesionado). Cada conduta tem prós e contras.
    </p>
    <p className="mb-6">
      A sutura do menisco envolve a passagem de fios ultra-resistentes através do tecido meniscal e da cápsula articular a fim de ancorá-los em seus locais nativos, aguardando pela cicatrização das bordas suturadas. Quando se opta pela meniscectomia, a ideia é retirar o tecido lesionado, mas ainda assim tentando preservar o máximo de tecido sadio possível. São utilizadas pinças artroscópicas (feitas para serem utilizadas em cirurgias por vídeo) que permitem este tipo de abordagem.
    </p>
    <p className="mb-6">
      Particularmente, sou um entusiasta da preservação do menisco visando, sempre que possível, a sua sutura ou reinserção. Caso você tenha uma suspeita de lesão de menisco ou tenha feito uma ressonância magnética na qual foi surpreendido por esta lesão no laudo, não se assuste. Agende uma consulta para que possamos estudar seu caso e indicar a melhor solução.
    </p>
  </BlogPostLayout>
);

export default LesaoDoMeniscoPrecisaOperar;
