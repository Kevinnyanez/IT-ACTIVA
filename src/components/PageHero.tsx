import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description: string;
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
  backgroundImage = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center&auto=format",
  showBackButton = true 
}: PageHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Fondo de ciudad" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/45"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {showBackButton && (
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary-foreground/90 mb-6">
              {subtitle}
            </h2>
          )}
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {ctaAction && (
            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-large group"
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
