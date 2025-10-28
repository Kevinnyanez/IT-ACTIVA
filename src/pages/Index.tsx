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
    "name": "IT Activa",
    "alternateName": ["IT ACTIVA", "IT Activa Consultora"],
    "url": "https://itactiva.com.ar",
    "logo": "https://itactiva.com.ar/android-chrome-512x512.png",
    "description": "IT Activa es una consultora especializada en comunicación política, gestión pública y asesoramiento para municipios en Argentina. Soluciones tecnológicas y estrategias digitales para gobiernos locales.",
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
      "Consultoría para Municipios",
      "Asesoramiento Gobiernos Locales",
      "Gestión Pública Municipal",
      "Comunicación Gubernamental",
      "Políticas Públicas Municipales",
      "Modernización del Estado",
      "Comunicación para Intendentes",
      "Gestión Municipal"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/106146305/admin/",
      "https://www.instagram.com/appystudiosweb/"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="IT Activa | Consultora de Comunicación Política y Gestión Pública Argentina"
        description="IT Activa es una consultora especializada en comunicación política, gestión pública y asesoramiento para municipios en Argentina. Soluciones tecnológicas y estrategias digitales para gobiernos locales."
        keywords="IT Activa, consultoría municipios argentina, asesoría gobiernos locales, gestión pública municipal, comunicación gubernamental, consultora intendentes, servicios municipalidades, políticas públicas municipales, modernización municipios, gestión municipal argentina, comunicación política gobiernos locales, asesoramiento intendencias, consultora sector público, estrategias gobiernos municipales, soluciones tecnológicas argentina"
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
