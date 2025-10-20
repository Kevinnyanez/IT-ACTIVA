import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundImage?: string;
  showBackButton?: boolean;
}

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  ctaText = "Contactar Consultoría",
  ctaAction,
  backgroundImage = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&h=1080&fit=crop&crop=center&auto=format",
  showBackButton = true 
}: PageHeroProps) => {
  return (
    <section id="page-top" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="IT ACTIVA - Consultora de gestión pública y comunicación para municipios y gobiernos locales en Argentina" 
          loading="eager"
          width="1920"
          height="1080"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-800/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {showBackButton && (
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
              {subtitle}
            </h2>
          )}
          
          {description && (
            <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {ctaAction && (
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 shadow-large group"
              onClick={ctaAction}
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
