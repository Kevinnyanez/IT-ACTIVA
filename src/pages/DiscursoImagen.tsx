import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Megaphone, ArrowLeft, CheckCircle, Image, Mic, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DiscursoImagen = () => {
  const services = [
    {
      name: "Desarrollo de Imagen Institucional",
      description: "Construcción y fortalecimiento de la identidad visual y comunicacional de instituciones públicas y líderes políticos.",
      benefits: [
        "Identidad visual sólida",
        "Fortalecimiento comunicacional",
        "Coherencia institucional"
      ]
    },
    {
      name: "Posicionamiento y Manejo del Discurso Público",
      description: "Desarrollo de estrategias discursivas coherentes que refuercen el liderazgo y la credibilidad ante diversos públicos.",
      benefits: [
        "Estrategias discursivas coherentes",
        "Liderazgo fortalecido",
        "Credibilidad mejorada"
      ]
    },
    {
      name: "Desarrollo de Encuestas de Opinión",
      description: "Diseño y análisis de estudios de opinión pública para medir percepción ciudadana y orientar estrategias comunicacionales.",
      benefits: [
        "Estudios de opinión precisos",
        "Medición de percepción",
        "Estrategias orientadas por datos"
      ]
    },
    {
      name: "Debate Electoral: Puntos Clave y Coaching",
      description: "Preparación integral para debates políticos, incluyendo argumentación, manejo escénico y estrategias de comunicación efectiva.",
      benefits: [
        "Preparación integral",
        "Argumentación sólida",
        "Manejo escénico profesional"
      ]
    },
    {
      name: "Oratoria para Conectar con tu Público",
      description: "Técnicas de comunicación oral para líderes políticos, enfocadas en generar conexión emocional y transmitir mensajes de manera impactante.",
      benefits: [
        "Técnicas de oratoria avanzadas",
        "Conexión emocional",
        "Mensajes impactantes"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Discurso e Imagen" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/60"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discurso e 
                <span className="block text-primary">
                  Imagen Pública
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Construcción de imagen institucional, oratoria y posicionamiento público para líderes que buscan conectar efectivamente con su audiencia.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Imagen Institucional</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Oratoria y Discurso</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Posicionamiento Público</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestros Servicios Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Soluciones integrales para el desarrollo de imagen y discurso público efectivo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground text-lg">Beneficios principales:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-base text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestra Metodología
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un enfoque integral para el desarrollo de imagen y discurso público efectivo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card text-center p-8 border border-border rounded-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Image className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Análisis</h3>
                  <p className="text-muted-foreground text-lg">
                    Evaluación de la imagen actual, identificación de fortalezas y áreas de mejora, análisis de audiencias objetivo.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border rounded-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Mic className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Desarrollo</h3>
                  <p className="text-muted-foreground text-lg">
                    Construcción de estrategias discursivas, desarrollo de imagen institucional y preparación para presentaciones públicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border rounded-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Optimización</h3>
                  <p className="text-muted-foreground text-lg">
                    Coaching continuo, medición de impacto y ajustes estratégicos para maximizar la efectividad del discurso público.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DiscursoImagen;
