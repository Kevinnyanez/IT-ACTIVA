import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center&auto=format" 
          alt="IT ACTIVA - Consultora especializada en municipios y gobiernos locales en Argentina - Gestión pública municipal y comunicación gubernamental" 
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/82 to-gray-800/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl">
          <div className="text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
              La comunicación 
              <span className="block text-primary/80 mt-2">
                transforma la realidad
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed mb-8 sm:mb-12">
              Impulsamos tus ideas y proyectos con estrategias digitales, innovación tecnológica 
              y asesoramiento en gestión pública para gobiernos locales.
            </p>


            {/* Value Props mejorados */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
                <span>Comunicación estratégica</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
                <span>Gestión pública especializada</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
                <span>Transformación digital</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 shadow-large group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Solicitá tu propuesta
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;