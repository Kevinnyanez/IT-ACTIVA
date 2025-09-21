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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Comunicación Política" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Comunicación Política 
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  y Análisis
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                Estrategias digitales, gestión de contenidos y análisis político especializado para maximizar el impacto comunicacional.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Estrategias Digitales</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Análisis Político</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Gestión de Contenidos</span>
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
                Soluciones integrales para la comunicación política y análisis estratégico
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-foreground">
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
                Un enfoque estratégico basado en datos y análisis para la comunicación política efectiva
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Análisis</h3>
                  <p className="text-muted-foreground text-lg">
                    Investigación profunda del contexto político, análisis de audiencias y monitoreo de tendencias digitales.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Share2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Estrategia</h3>
                  <p className="text-muted-foreground text-lg">
                    Desarrollo de estrategias digitales personalizadas, creación de contenidos y planificación de campañas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Producción</h3>
                  <p className="text-muted-foreground text-lg">
                    Creación de contenido audiovisual profesional y gestión de crisis con seguimiento continuo de resultados.
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

export default ComunicacionPolitica;
