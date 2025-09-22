import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl">
          <div className="text-center lg:text-left">
            {/* Badge de credibilidad */}
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-primary mr-2" />
                <span className="text-white/90 text-sm font-medium">Consultora especializada desde 2008</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              La comunicación 
              <span className="block text-primary">
                transforma la realidad
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
              Impulsamos tu marca con estrategias digitales, inteligencia artificial 
              y asesoramiento en gestión pública para gobiernos locales.
            </p>

            {/* Stats profesionales */}
            <div className="flex flex-wrap gap-8 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-white/90">
                <Users className="w-6 h-6 mr-3 text-primary" />
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm opacity-80">Gobiernos asesorados</div>
                </div>
              </div>
              <div className="flex items-center text-white/90">
                <TrendingUp className="w-6 h-6 mr-3 text-primary" />
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-80">Años de experiencia</div>
                </div>
              </div>
            </div>

            {/* Value Props mejorados */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                <span>Comunicación estratégica</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                <span>Gestión pública especializada</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                <span>Transformación digital</span>
              </div>
            </div>

            {/* CTA Buttons mejorados */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 shadow-large group px-8 py-6 text-lg"
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
                className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors px-8 py-6 text-lg backdrop-blur-sm"
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
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;