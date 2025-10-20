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
  title = "IT ACTIVA - Consultora para Municipios y Gobiernos Locales | Argentina",
  description = "IT ACTIVA - Consultora especializada en asesoramiento para municipios y gobiernos locales en Argentina. Gestión pública municipal, políticas públicas, comunicación gubernamental y modernización del Estado. Trabajamos con intendentes y equipos municipales.",
  keywords = "consultoría municipios argentina, asesoría gobiernos locales, gestión pública municipal, comunicación gubernamental, consultora intendentes, servicios municipalidades, políticas públicas municipales, modernización municipios, gestión municipal argentina, comunicación política gobiernos locales, asesoramiento intendencias, consultora sector público, estrategias gobiernos municipales",
  canonicalUrl,
  ogImage = "/android-chrome-512x512.png",
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes('IT ACTIVA') ? title : `${title} | IT ACTIVA`;
  const fullUrl = canonicalUrl ? `https://itactiva.com${canonicalUrl}` : 'https://itactiva.com';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://itactiva.com${ogImage}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IT ACTIVA" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://itactiva.com${ogImage}`} />
      
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
