import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

const SEO = ({ 
  title = "IT Activa | Consultora de Comunicación Política y Gestión Pública Argentina",
  description = "IT Activa es una consultora especializada en comunicación política, gestión pública y asesoramiento para municipios en Argentina. Soluciones tecnológicas y estrategias digitales para gobiernos locales.",
  keywords = "IT Activa, consultoría municipios argentina, asesoría gobiernos locales, gestión pública municipal, comunicación gubernamental, consultora intendentes, servicios municipalidades, políticas públicas municipales, modernización municipios, gestión municipal argentina, comunicación política gobiernos locales, asesoramiento intendencias, consultora sector público, estrategias gobiernos municipales, soluciones tecnológicas argentina",
  canonicalUrl,
  ogImage = "/android-chrome-512x512.png",
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes('IT Activa') || title.includes('IT ACTIVA') ? title : `${title} | IT Activa`;
  const fullUrl = canonicalUrl ? `https://itactiva.com.ar${canonicalUrl}` : 'https://itactiva.com.ar';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://itactiva.com.ar${ogImage}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IT ACTIVA" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://itactiva.com.ar${ogImage}`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
