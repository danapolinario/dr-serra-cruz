import React from 'react';
import BlogPostLayout from './BlogPostLayout';

const OInicioDaCarreira: React.FC = () => (
  <BlogPostLayout
    category="Formação e carreira"
    title="O início da carreira do Dr. Raphael Serra Cruz"
    date="6 de Agosto de 2025"
    heroImage="/imagens/blog/inicio-carreira-formacao.webp"
    heroAlt="Formação acadêmica e residência"
    postId="o-inicio-da-carreira-do-dr-raphael-serra-cruz"
  >
    <p className="mb-6">
      Seguindo a sequência de posts de apresentação, vamos começar pela graduação: após um ano de muita disciplina no curso pré-vestibular, onde chegou a ser o número 1 de toda a rede, entre 2146 alunos, Dr. Raphael Serra Cruz foi aprovado para o vestibular de medicina mais concorrido do RJ (UERJ). Ao longo da faculdade, rodou por todas as especialidades e só se decidiu pela ortopedia no quinto ano, quando conheceu Dr. José Luis Runco, então médico do Flamengo e da Seleção Brasileira. Naquele momento, por influência do esporte, se apaixonou pela ortopedia.
    </p>
    <p className="mb-6">
      Ao final da faculdade, foi aprovado em sua primeira opção de residência médica: o Instituto Nacional de Traumatologia e Ortopedia (INTO), simplesmente a maior referência e maior hospital de ortopedia do Brasil. Ainda durante o segundo ano de residência, foi aprovado em concurso do Ministério da Saúde. Assumiu o cargo tão logo concluiu sua especialização em cirurgia do joelho, sendo incorporado ao grupo de cirurgia do joelho do INTO.
    </p>
    <p className="mb-6">
      Durante sua carreira no INTO, auxiliou a formação de muitos residentes e fellows em cirurgia do joelho, além de prestar assistência a inúmeros pacientes, realizando cirurgias de todos os níveis de complexidade. O INTO é conhecido por ser uma grande “escola” mesmo para quem já tem anos de ortopedia, pois lá nos deparamos com os maiores desafios que não foram possíveis de serem resolvidos em outros hospitais do Brasil.
    </p>
    <p className="mb-6">
      Em 2020, ingressou no mestrado oferecido pelo INTO, em parceria com a Universidade Federal do Rio de Janeiro (UFRJ), sendo bastante elogiado na defesa de sua dissertação sobre análise proteômica dos enxertos utilizados para cirurgia de reconstrução do ligamento cruzado anterior. Segundo os seus professores, o tema deveria ter sido utilizado em uma tese de doutorado, tendo em vista a relevância e ineditismo da ideia.
    </p>
    <p className="mb-6">
      Toda esta trajetória, em especial os quase 15 anos em que esteve no INTO, tornaram o Dr. Raphael Serra Cruz uma das referências nacionais na área de cirurgia do joelho, sendo atualmente um dos especialistas em joelho mais experientes e respeitados da região de Indaiatuba e Grande Campinas.
    </p>
  </BlogPostLayout>
);

export default OInicioDaCarreira;
