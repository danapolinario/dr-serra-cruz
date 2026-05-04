
import React from 'react';
import { YOUTUBE_PUBLIC_URL } from '../src/config/social';
import TrackedExternalLink from '../src/components/TrackedExternalLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/imagens/marca/retrato-raphael-serra-cruz.webp"
          alt="Dr. Raphael Serra Cruz — logotipo em retrato no rodapé"
          className="h-16 w-auto mx-auto brightness-0 invert mb-8"
          width={180}
          height={64}
          loading="lazy"
          decoding="async"
        />
        <div className="flex justify-center gap-6 mb-8">
          <TrackedExternalLink
            href="https://www.instagram.com/dr.serracruz/"
            eventName="social_click"
            eventParams={{ network: 'instagram', link_url: 'https://www.instagram.com/dr.serracruz/' }}
            className="text-2xl hover:text-blue-400 transition"
            aria-label="Instagram do Dr. Raphael Serra Cruz"
          >
            <i className="fa-brands fa-instagram"></i>
          </TrackedExternalLink>
          <TrackedExternalLink
            href="https://www.linkedin.com/in/raphael-serra-cruz-md-msc-76089034/"
            eventName="social_click"
            eventParams={{
              network: 'linkedin',
              link_url: 'https://www.linkedin.com/in/raphael-serra-cruz-md-msc-76089034/',
            }}
            className="text-2xl hover:text-blue-400 transition"
            aria-label="LinkedIn do Dr. Raphael Serra Cruz"
          >
            <i className="fa-brands fa-linkedin"></i>
          </TrackedExternalLink>
          <TrackedExternalLink
            href={YOUTUBE_PUBLIC_URL}
            eventName="social_click"
            eventParams={{ network: 'youtube', link_url: YOUTUBE_PUBLIC_URL }}
            className="text-2xl hover:text-blue-400 transition"
            aria-label="Canal no YouTube — playlist de vídeos"
          >
            <i className="fa-brands fa-youtube"></i>
          </TrackedExternalLink>
          <TrackedExternalLink
            href="https://scholar.google.com/citations?user=GbnVAdsAAAAJ"
            eventName="social_click"
            eventParams={{
              network: 'google_scholar',
              link_url: 'https://scholar.google.com/citations?user=GbnVAdsAAAAJ',
            }}
            className="text-2xl hover:text-blue-400 transition"
            aria-label="Google Scholar — publicações do Dr. Raphael Serra Cruz"
          >
            <i className="fa-solid fa-graduation-cap"></i>
          </TrackedExternalLink>
        </div>
        <p className="text-slate-400 text-sm mb-4">
          Dr. Raphael Serra Cruz | CRM-SP 239793 | RQE: 107916
        </p>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Dr. Raphael Serra Cruz. Todos os direitos reservados.{' '}
          <TrackedExternalLink
            href="https://www.docpage.com.br"
            eventName="outbound_click"
            eventParams={{
              link_url: 'https://www.docpage.com.br',
              link_text: 'Powered by DocPage AI',
              source_page: 'footer',
            }}
            className="text-slate-400 underline-offset-2 hover:text-slate-300 hover:underline"
          >
            Powered by DocPage AI
          </TrackedExternalLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
