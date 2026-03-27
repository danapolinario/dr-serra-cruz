import React from 'react';
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

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
