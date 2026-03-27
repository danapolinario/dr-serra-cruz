import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Artigos = lazy(() => import('./pages/Artigos'));
const CapitulosLivros = lazy(() => import('./pages/CapitulosLivros'));
const PalestrasCongressos = lazy(() => import('./pages/PalestrasCongressos'));
const MateriaisPacientes = lazy(() => import('./pages/MateriaisPacientes'));
const Premiacoes = lazy(() => import('./pages/Premiacoes'));
const LinksUteis = lazy(() => import('./pages/LinksUteis'));
const LesoesLigamentares = lazy(() => import('./pages/LesoesLigamentares'));
const Meniscos = lazy(() => import('./pages/Meniscos'));
const BlogIndex = lazy(() => import('./src/pages/blog/BlogIndex'));
const OQueELesaoDeMenisco = lazy(() => import('./src/pages/blog/OQueELesaoDeMenisco'));
const TratamentosParaArtroseNoJoelho = lazy(() => import('./src/pages/blog/TratamentosParaArtroseNoJoelho'));
const QuandoProcurarUmOrtopedista = lazy(() => import('./src/pages/blog/QuandoProcurarUmOrtopedista'));
const OrtopedistaBrasileiroNaEuropaTelemedicina = lazy(
  () => import('./src/pages/blog/OrtopedistaBrasileiroNaEuropaTelemedicina'),
);
const ContribuicoesELegado = lazy(() => import('./src/pages/blog/ContribuicoesELegado'));
const ExperienciaEsporteAtpRioOpen = lazy(() => import('./src/pages/blog/ExperienciaEsporteAtpRioOpen'));
const ExperienciaEsporteFlamengo = lazy(() => import('./src/pages/blog/ExperienciaEsporteFlamengo'));
const PremiacoesNacionaisEInternacionais = lazy(
  () => import('./src/pages/blog/PremiacoesNacionaisEInternacionais'),
);
const InternationalFellowshipUsa = lazy(() => import('./src/pages/blog/InternationalFellowshipUsa'));
const OInicioDaCarreira = lazy(() => import('./src/pages/blog/OInicioDaCarreira'));
const ConhecaODrRaphaelSerraCruz = lazy(() => import('./src/pages/blog/ConhecaODrRaphaelSerraCruz'));
const JornadaLyonesaCirurgiaJoelhoSaoPaulo = lazy(
  () => import('./src/pages/blog/JornadaLyonesaCirurgiaJoelhoSaoPaulo'),
);
const LesaoDoMeniscoPrecisaOperar = lazy(() => import('./src/pages/blog/LesaoDoMeniscoPrecisaOperar'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 text-sm">Carregando…</div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
