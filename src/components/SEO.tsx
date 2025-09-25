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
  title = "IT ACTIVA - Consultora de Comunicación Política y Gestión Pública | Argentina",
  description = "IT ACTIVA es la consultora líder en comunicación política, gestión pública y estrategias empresariales en Argentina. Especialistas en gobiernos locales, campañas políticas y comunicación institucional.",
  keywords = "consultoría política argentina, comunicación gubernamental, gestión pública, comunicación empresarial, estrategias políticas, gobiernos locales, comunicación institucional, campañas políticas, consultora argentina, asesoría política",
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
