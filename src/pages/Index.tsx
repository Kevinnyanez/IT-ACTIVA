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
    "url": "https://itactiva.com.ar",
    "logo": "https://itactiva.com.ar/android-chrome-512x512.png",
    "description": "IT ACTIVA - Consultora especializada en asesoramiento para municipios y gobiernos locales en Argentina. Gestión pública municipal, políticas públicas, comunicación gubernamental y modernización del Estado.",
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
        title="IT ACTIVA - Consultora para Municipios y Gobiernos Locales | Argentina"
        description="IT ACTIVA - Consultora especializada en asesoramiento para municipios y gobiernos locales en Argentina. Gestión pública municipal, políticas públicas, comunicación gubernamental y modernización del Estado. Trabajamos con intendentes y equipos municipales."
        keywords="consultoría municipios argentina, asesoría gobiernos locales, gestión pública municipal, comunicación gubernamental, consultora intendentes, servicios municipalidades, políticas públicas municipales, modernización municipios, gestión municipal argentina, comunicación política gobiernos locales, asesoramiento intendencias, consultora sector público, estrategias gobiernos municipales"
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
