import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEO from '@/components/SEO';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT ACTIVA",
    "alternateName": "IT ACTIVA Consultora",
    "url": "https://itactiva.com",
    "logo": "https://itactiva.com/android-chrome-512x512.png",
    "description": "IT ACTIVA es la consultora líder en comunicación política, gestión pública y estrategias empresariales en Argentina. Especialistas en gobiernos locales, campañas políticas y comunicación institucional.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Coronel Pringles",
      "addressLocality": "Coronel Pringles",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-9-11-2286-6851",
      "contactType": "customer service",
      "areaServed": "AR",
      "availableLanguage": "Spanish"
    },
    "email": "agenciacc.activa@gmail.com",
    "foundingDate": "2020",
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceType": [
      "Consultoría Política",
      "Comunicación Gubernamental", 
      "Gestión Pública",
      "Comunicación Empresarial",
      "Estrategias Políticas",
      "Campañas Políticas"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/106146305/admin/",
      "https://www.instagram.com/appystudiosweb/"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="IT ACTIVA - Consultora de Comunicación Política y Gestión Pública | Argentina"
        description="IT ACTIVA es la consultora líder en comunicación política, gestión pública y estrategias empresariales en Argentina. Especialistas en gobiernos locales, campañas políticas y comunicación institucional. Transformamos tu gestión pública."
        keywords="consultoría política argentina, comunicación gubernamental, gestión pública, comunicación empresarial, estrategias políticas, gobiernos locales, comunicación institucional, campañas políticas, consultora argentina, asesoría política"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
