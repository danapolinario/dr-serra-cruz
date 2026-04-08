import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Certificates from '../components/Certificates';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Testimonials from '../components/Testimonials';
import InstagramSection from '../components/InstagramSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { SeoHead } from '../src/components/SeoHead';
import { SiteStructuredData } from '../src/components/SiteStructuredData';
import { STATIC_PAGE_SEO } from '../src/seo/pageSeo';

const Home: React.FC = () => {
  const seo = STATIC_PAGE_SEO['/'];
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead title={seo.title} description={seo.description} path="/" ogImagePath={seo.ogImagePath} />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/imagens/inicio/retrato-de-frente.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </Helmet>
      <SiteStructuredData />
      <Header />
      <main>
        <Hero />
        <Certificates />
        <About />
        <Expertise />
        <Testimonials />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
