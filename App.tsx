
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Artigos from './pages/Artigos';
import CapitulosLivros from './pages/CapitulosLivros';
import PalestrasCongressos from './pages/PalestrasCongressos';
import MateriaisPacientes from './pages/MateriaisPacientes';
import Premiacoes from './pages/Premiacoes';
import LinksUteis from './pages/LinksUteis';
import LesoesLigamentares from './pages/LesoesLigamentares';
import Meniscos from './pages/Meniscos';
import BlogIndex from './src/pages/blog/BlogIndex';
import OQueELesaoDeMenisco from './src/pages/blog/OQueELesaoDeMenisco';
import TratamentosParaArtroseNoJoelho from './src/pages/blog/TratamentosParaArtroseNoJoelho';
import QuandoProcurarUmOrtopedista from './src/pages/blog/QuandoProcurarUmOrtopedista';
import OrtopedistaBrasileiroNaEuropaTelemedicina from './src/pages/blog/OrtopedistaBrasileiroNaEuropaTelemedicina';
import ContribuicoesELegado from './src/pages/blog/ContribuicoesELegado';
import ExperienciaEsporteAtpRioOpen from './src/pages/blog/ExperienciaEsporteAtpRioOpen';
import ExperienciaEsporteFlamengo from './src/pages/blog/ExperienciaEsporteFlamengo';
import PremiacoesNacionaisEInternacionais from './src/pages/blog/PremiacoesNacionaisEInternacionais';
import InternationalFellowshipUsa from './src/pages/blog/InternationalFellowshipUsa';
import OInicioDaCarreira from './src/pages/blog/OInicioDaCarreira';
import ConhecaODrRaphaelSerraCruz from './src/pages/blog/ConhecaODrRaphaelSerraCruz';
import JornadaLyonesaCirurgiaJoelhoSaoPaulo from './src/pages/blog/JornadaLyonesaCirurgiaJoelhoSaoPaulo';
import LesaoDoMeniscoPrecisaOperar from './src/pages/blog/LesaoDoMeniscoPrecisaOperar';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/capitulos-de-livros" element={<CapitulosLivros />} />
        <Route path="/palestras-e-congressos" element={<PalestrasCongressos />} />
        <Route path="/materiais-para-pacientes" element={<MateriaisPacientes />} />
        <Route path="/premiacoes" element={<Premiacoes />} />
        <Route path="/links" element={<LinksUteis />} />
        <Route path="/lesoes-ligamentares" element={<LesoesLigamentares />} />
        <Route path="/meniscos" element={<Meniscos />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/o-que-e-lesao-de-menisco" element={<OQueELesaoDeMenisco />} />
        <Route path="/blog/tratamentos-para-artrose-no-joelho" element={<TratamentosParaArtroseNoJoelho />} />
        <Route path="/blog/quando-procurar-um-ortopedista" element={<QuandoProcurarUmOrtopedista />} />
        <Route
          path="/blog/ortopedista-brasileiro-na-europa-telemedicina"
          element={<OrtopedistaBrasileiroNaEuropaTelemedicina />}
        />
        <Route path="/blog/dr-raphael-serra-cruz-contribuicoes-e-legado" element={<ContribuicoesELegado />} />
        <Route
          path="/blog/experiencia-no-esporte-medico-atp-rio-open-de-tenis"
          element={<ExperienciaEsporteAtpRioOpen />}
        />
        <Route
          path="/blog/experiencia-no-esporte-clube-de-regatas-do-flamengo"
          element={<ExperienciaEsporteFlamengo />}
        />
        <Route
          path="/blog/premiacoes-nacionais-e-internacionais-dr-raphael-serra-cruz"
          element={<PremiacoesNacionaisEInternacionais />}
        />
        <Route
          path="/blog/international-fellowship-usa-divisor-de-aguas-na-carreira-medica"
          element={<InternationalFellowshipUsa />}
        />
        <Route path="/blog/o-inicio-da-carreira-do-dr-raphael-serra-cruz" element={<OInicioDaCarreira />} />
        <Route
          path="/blog/conheca-o-dr-raphael-serra-cruz-medico-ortopedista-especialista-em-joelho"
          element={<ConhecaODrRaphaelSerraCruz />}
        />
        <Route
          path="/blog/dr-raphael-serra-cruz-jornada-lyonesa-cirurgia-do-joelho-sao-paulo"
          element={<JornadaLyonesaCirurgiaJoelhoSaoPaulo />}
        />
        <Route path="/blog/lesao-do-menisco-precisa-operar" element={<LesaoDoMeniscoPrecisaOperar />} />
      </Routes>
    </Router>
  );
};

export default App;
