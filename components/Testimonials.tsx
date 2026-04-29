import React, { useEffect, useState } from 'react';

/** Depoimentos em cartões: conteúdo editorial fixo no código (não vem da API do Google). */
const FALLBACK_RATING = 5;

function googleWordmarkSrc(): string {
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}imagens/google-logo-wordmark.svg`;
}

/** Wordmark colorido “Google” (SVG em public). */
function GoogleWordmark({ className }: { className?: string }) {
  return (
    <img
      src={googleWordmarkSrc()}
      alt=""
      width={272}
      height={92}
      className={className}
      decoding="async"
      aria-hidden
    />
  );
}

function GoogleRatingStars({ rating }: { rating: number }) {
  const nodes: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      nodes.push(<i key={i} className="fa-solid fa-star" aria-hidden />);
    } else if (rating >= i - 0.5) {
      nodes.push(<i key={i} className="fa-solid fa-star-half-stroke" aria-hidden />);
    } else {
      nodes.push(<i key={i} className="fa-regular fa-star text-yellow-400/35" aria-hidden />);
    }
  }
  return <div className="flex gap-0.5 text-yellow-400">{nodes}</div>;
}

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Raquel Iendrick', text: 'O Dr. Raphael é um excelente profissional, além de muito qualificado e habilidoso, é extremamente atencioso, explica tudo nos mínimos detalhes deixando nós pacientes mais seguros durante todo o processo.' },
    { name: 'Angelo Cataldo', text: 'Operei os dois meniscos com ele e desde então nunca mais tive problemas. Profissional sério, competente, de muita experiência, empático e sempre pronto para atender. Inspira confiança e segurança pelo conhecimento e experiência.' },
    { name: 'Daniel Protógenes', text: 'Tive ruptura total do LCA e LCM e sutura do menisco. O Dr. Raphael é um médico atencioso, assertivo, humilde e que transmite total segurança para o paciente. Minha cirurgia foi um sucesso e minha recuperação não poderia estar melhor.' },
    { name: 'Arthur Pires', text: 'Tive uma lesão complexa nos ligamentos do canto póstero-lateral do joelho há 4 anos lutando jiu jitsu. Seguindo as orientações, minha recuperação foi um sucesso podendo retornar sem sequelas às minhas rotinas esportivas.' },
    { name: 'Marina Lipkin', text: 'Especialista mais fera da área! Ultra graduado, seguro e experiente, Dr. Raphael me salvou de uma lesão séria no joelho. Meu joelho agradece!' },
    { name: 'Rafael Pereira', text: 'Dr. Raphael foi super claro e sincero desde a primeira consulta, demonstrando um domínio técnico muito grande no assunto. A cirurgia de joelho foi um sucesso. No pós-cirúrgico fez um acompanhamento atento em todas as fases.' },
  ];

  const [rating, setRating] = useState(FALLBACK_RATING);
  const [reviewCount, setReviewCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // A API na Vercel fica na raiz do domínio (/api/...), não sob o base path do Vite.
        const apiUrl = new URL('/api/google-reviews', window.location.origin).href;
        const res = await fetch(apiUrl);
        const bodyText = await res.text();
        if (cancelled) return;
        if (!res.ok) {
          if (import.meta.env.DEV) {
            console.warn('[google-reviews]', res.status, bodyText);
          }
          return;
        }
        const data = JSON.parse(bodyText) as {
          rating?: number;
          reviewCount?: number;
        };
        if (typeof data.rating === 'number' && typeof data.reviewCount === 'number') {
          setRating(data.rating);
          setReviewCount(data.reviewCount);
        }
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn('[google-reviews] fetch falhou', e);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const ratingLabel = rating.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const reviewsCaption =
    reviewCount !== null ? (
      <span className="flex items-center gap-2 text-slate-400 text-sm">
        <span>{reviewCount.toLocaleString('pt-BR')} avaliações no</span>
        <GoogleWordmark className="h-5 w-auto max-h-5 shrink-0 translate-y-px object-contain object-left sm:h-[1.35rem] sm:max-h-[1.35rem]" />
      </span>
    ) : (
      <span className="inline-flex items-center text-slate-400 text-sm" title="Google">
        <GoogleWordmark className="h-5 w-auto max-h-5 shrink-0 opacity-90 object-contain object-left sm:h-[1.35rem] sm:max-h-[1.35rem]" />
        <span className="sr-only">Google</span>
      </span>
    );

  return (
    <section id="avaliacoes" className="py-24 bg-slate-50 scroll-mt-nav overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4">Experiência do Paciente</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Histórias de Sucesso e Superação</h3>
          </div>
          <div
            className="flex flex-wrap items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
            aria-label={
              reviewCount !== null
                ? `Nota ${ratingLabel} no Google, ${reviewCount.toLocaleString('pt-BR')} avaliações`
                : `Nota ${ratingLabel}, avaliações Google`
            }
          >
            <GoogleRatingStars rating={rating} />
            <span className="font-bold text-slate-700">{ratingLabel}</span>
            {reviewsCaption}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="text-blue-200 text-5xl mb-4 italic">"</div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {r.text}
                </p>
              </div>
              <p className="font-bold text-slate-900">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
