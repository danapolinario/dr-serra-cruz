import React from 'react';
import BlogPostLayout from './BlogPostLayout';

const JornadaLyonesaCirurgiaJoelhoSaoPaulo: React.FC = () => (
  <BlogPostLayout
    category="Eventos e congressos"
    title="Dr. Raphael Serra Cruz confirma presença na Jornada Lyonesa de Cirurgia do Joelho em São Paulo"
    date="28 de Julho de 2025"
    heroImage="/imagens/blog/jornada-lyonesa-cartaz.webp"
    heroAlt="Cartaz da Jornada Lyonesa de Cirurgia do Joelho"
    postId="dr-raphael-serra-cruz-jornada-lyonesa-cirurgia-do-joelho-sao-paulo"
  >
    <p className="mb-6">
      No próximo dia 31 de julho, Dr. Raphael Serra Cruz irá participar como debatedor na mais conceituada jornada de cirurgia do joelho do Brasil: a Jornada Lyonesa. Dr. Raphael irá compartilhar seus conhecimentos na área debatendo casos clínicos que serão apresentados pelos moderadores, explicando seu racional para diagnóstico, tratamento e reabilitação de casos de lesões meniscais.
    </p>
    <p className="mb-6">
      Parte de sua expertise é fruto do estágio que realizou em 2012 em Lyon com o cirurgião francês Bertrand Sonnery-Cottet. Após o estágio, Dr. Raphael manteve o contato científico-acadêmico com os franceses, sempre compartilhando experiências e inclusive publicando trabalhos científicos, como o capítulo sobre lesões em rampa meniscal escrito no livro “O menisco”, o maior compêndio sobre lesões meniscais já escrito no Brasil, e o artigo “Ramp Lesions: An unrecognized Posteromedial Instability?”, publicado na revista britânica <em>Clinics in Sports Medicine</em>. Este artigo permaneceu durante várias semanas ranqueado como número 1 entre os artigos mais lidos no mundo no site deste periódico, confirmando a relevância do estudo realizado.
    </p>
    <p className="mb-8">
      Certamente, toda esta experiência e reconhecimento fazem do Dr. Raphael Serra Cruz uma referência nacional no tratamento de lesões meniscais e na área de cirurgia do joelho, sendo um dos mais bem recomendados especialistas em joelho na área de Indaiatuba e Grande Campinas.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
      <img
        src="/imagens/blog/jornada-lyon-2012.webp"
        alt="Estágio em Lyon em 2012"
        className="rounded-xl w-full object-cover"
      />
      <img
        src="/imagens/blog/jornada-bertrand-mathieu.webp"
        alt="Bertrand Sonnery-Cottet e equipe"
        className="rounded-xl w-full object-cover"
      />
      <img
        src="/imagens/blog/jornada-paper.webp"
        alt="Publicação na Clinics in Sports Medicine"
        className="rounded-xl w-full object-cover"
      />
      <img
        src="/imagens/blog/jornada-livro.webp"
        alt="Livro O menisco"
        className="rounded-xl w-full object-cover"
      />
    </div>
  </BlogPostLayout>
);

export default JornadaLyonesaCirurgiaJoelhoSaoPaulo;
