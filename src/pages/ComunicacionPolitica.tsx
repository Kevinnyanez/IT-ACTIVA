import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowLeft, CheckCircle, Share2, Monitor, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ComunicacionPolitica = () => {
  const services = [
    {
      name: "Estrategia de Comunicación y Creación de Contenidos",
      description: "Elaboración de mensajes claros y consistentes para maximizar el impacto comunicacional en campañas y gestión de gobierno.",
      benefits: [
        "Mensajes claros y consistentes",
        "Impacto comunicacional máximo",
        "Estrategias personalizadas"
      ]
    },
    {
      name: "Clipping de Prensa, Notas y Artículos",
      description: "Seguimiento y elaboración de contenido en medios locales y nacionales para consolidar la imagen de la gestión y de los referentes políticos.",
      benefits: [
        "Seguimiento mediático completo",
        "Contenido de calidad",
        "Imagen consolidada"
      ]
    },
    {
      name: "Estrategias Digitales y Gestión de Social Media",
      description: "Planificación y ejecución de campañas en redes sociales, posicionando la gestión pública o electoral como cercana, innovadora y transparente.",
      benefits: [
        "Presencia digital estratégica",
        "Campañas innovadoras",
        "Transparencia comunicacional"
      ]
    },
    {
      name: "Coordinación y Desarrollo de Producciones Audiovisuales",
      description: "Desarrollo de videos e imágenes institucionales que refuercen los logros y objetivos de la gestión pública, alineados al discurso oficial.",
      benefits: [
        "Contenido audiovisual profesional",
        "Refuerzo de logros",
        "Alineación discursiva"
      ]
    },
    {
      name: "Identificación de Públicos y Audiencias",
      description: "Análisis detallado de segmentos clave para optimizar el alcance y efectividad de las estrategias comunicacionales.",
      benefits: [
        "Segmentación precisa",
        "Alcance optimizado",
        "Efectividad mejorada"
      ]
    },
    {
      name: "Gestión y Comunicación de Crisis",
      description: "Desarrollo de protocolos y estrategias para el manejo efectivo de situaciones críticas que puedan afectar la imagen institucional.",
      benefits: [
        "Protocolos de crisis",
        "Manejo efectivo",
        "Protección de imagen"
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Comunicación Política" 
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
                Comunicación Política 
                <span className="block text-primary">
                  y Análisis
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Estrategias digitales, gestión de contenidos y análisis político especializado para maximizar el impacto comunicacional.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Estrategias Digitales</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Análisis Político</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Gestión de Contenidos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestros Servicios Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Soluciones integrales para la comunicación política y análisis estratégico
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border/50 rounded-xl h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground text-sm uppercase tracking-wide">Beneficios principales:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Nuestra Metodología
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un enfoque estratégico basado en datos y análisis para la comunicación política efectiva
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Análisis</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Investigación profunda del contexto político, análisis de audiencias y monitoreo de tendencias digitales.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Estrategia</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desarrollo de estrategias digitales personalizadas, creación de contenidos y planificación de campañas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Producción</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creación de contenido audiovisual profesional y gestión de crisis con seguimiento continuo de resultados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                ¿Listo para potenciar tu comunicación política?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Contacta con nuestros especialistas y descubre cómo podemos ayudarte a maximizar el impacto de tu mensaje político.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 shadow-large"
                  onClick={() => {
                    window.location.href = '/contacto';
                  }}
                >
                  Solicitar Consulta
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => {
                    window.location.href = '/servicios';
                  }}
                >
                  Ver Todos los Servicios
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ComunicacionPolitica;
