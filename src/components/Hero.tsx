import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center&auto=format" 
          alt="Ciudad moderna y gestión pública" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/45"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              La comunicación 
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                transforma la realidad
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              Impulsamos tu marca con estrategias digitales, inteligencia artificial 
              y asesoramiento en gestión pública para gobiernos locales.
            </p>

            {/* Value Props */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                <span>Comunicación estratégica</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                <span>Gestión pública especializada</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                <span>Transformación digital</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-large group"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Solicitar Propuesta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;