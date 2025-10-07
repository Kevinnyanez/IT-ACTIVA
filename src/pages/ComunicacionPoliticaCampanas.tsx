import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Megaphone, CheckCircle, MessageSquare, Users, BookOpen, Monitor, Target, Mic, TrendingUp, BarChart3, Volume2, Presentation, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const ComunicacionPoliticaCampanas = () => {
  const mainServices = [
    {
      name: "Estrategias de comunicación y creación de contenido",
      description: "Elaboración de mensajes claros y consistentes para maximizar el impacto comunicacional en campañas y gestión de gobierno.",
      icon: MessageSquare,
      benefits: [
        "Mensajes claros y consistentes",
        "Impacto comunicacional máximo",
        "Estrategias personalizadas"
      ]
    },
    {
      name: "Identificación de públicos y audiencias",
      description: "Segmentación estratégica de públicos para garantizar la efectividad del mensaje y la interacción en distintos medios y plataformas.",
      icon: Users,
      benefits: [
        "Segmentación estratégica",
        "Efectividad del mensaje optimizada",
        "Interacción mejorada"
      ]
    },
    {
      name: "Storytelling y Storydoing",
      description: "Construcción de narrativas auténticas que refuercen el liderazgo y las iniciativas de gobierno a través de acciones concretas.",
      icon: BookOpen,
      benefits: [
        "Narrativas auténticas",
        "Refuerzo del liderazgo",
        "Acciones concretas"
      ]
    },
    {
      name: "Clipping de prensa, notas y artículos. Monitoreo de medios",
      description: "Monitoreo de medios y análisis de contexto para identificar tendencias y oportunidades para la gestión local.",
      icon: Monitor,
      benefits: [
        "Monitoreo completo",
        "Análisis de contexto",
        "Identificación de oportunidades"
      ]
    },
    {
      name: "Estrategias digitales y gestión de social media",
      description: "Planificación y ejecución de campañas en redes sociales, posicionando la gestión pública o electoral como cercana, innovadora y transparente.",
      icon: Target,
      benefits: [
        "Campañas digitales efectivas",
        "Posicionamiento estratégico",
        "Transparencia comunicacional"
      ]
    }
  ];

  const additionalServices = [
    {
      name: "Posicionamiento y desarrollo del discurso público",
      description: "Diseño de estrategias de agenda pública y construcción de mensajes efectivos que consoliden el liderazgo político.",
      icon: Mic,
      benefits: [
        "Estrategias de agenda pública",
        "Mensajes efectivos",
        "Liderazgo consolidado"
      ]
    },
    {
      name: "Desarrollo de Encuestas de opinión",
      description: "Implementación de herramientas cualitativas y cuantitativas para captar las percepciones ciudadanas y orientar decisiones estratégicas.",
      icon: BarChart3,
      benefits: [
        "Herramientas cualitativas y cuantitativas",
        "Percepciones ciudadanas",
        "Decisiones estratégicas orientadas"
      ]
    },
    {
      name: "Debate electoral: puntos clave y coaching",
      description: "Preparación integral para debates, destacando propuestas y garantizando un desempeño sólido y convincente.",
      icon: Volume2,
      benefits: [
        "Preparación integral",
        "Propuestas destacadas",
        "Desempeño convincente"
      ]
    },
    {
      name: "Oratoria para conectar con tu público",
      description: "Capacitación en habilidades de oratoria y discurso para generar mensajes claros, persuasivos y emocionalmente efectivos.",
      icon: TrendingUp,
      benefits: [
        "Habilidades de oratoria",
        "Mensajes persuasivos",
        "Efectividad emocional"
      ]
    },
    {
      name: "Plataforma de gobierno de alto impacto",
      description: "Diseño de plataformas presentes y futuras que visualicen la gestión y promuevan la interacción directa con los ciudadanos en la campaña.",
      icon: Presentation,
      benefits: [
        "Plataformas innovadoras",
        "Visualización de gestión",
        "Interacción ciudadana directa"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="page-top" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Comunicación Política y Campañas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-800/85"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comunicación Política
                <span className="block text-primary">
                  y Campañas
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Tu proyecto político necesita una estrategia que comunique y escuche. Impulsamos tu presencia pública a través de contenidos, segmentación de audiencias, redes y análisis.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span>Estrategias Integrales</span>
                </div>
                <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span>Análisis Especializado</span>
                </div>
                <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span>Coaching Personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <strong>Servicios Principales</strong>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trabajamos en tu discurso, identidad visual y posicionamiento público, con herramientas como encuestas, oratoria, plataformas y coaching para debates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border/50 rounded-xl h-full">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground leading-tight">
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <strong>Servicios Complementarios</strong>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Herramientas especializadas para fortalecer tu presencia política y maximizar el impacto de tu mensaje
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border/50 rounded-xl h-full">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground leading-tight">
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
                );
              })}
            </div>
            
            {/* Call to Action */}
            <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 hover:shadow-medium transition-all duration-300 border-2 border-primary/30 rounded-xl">
                <CardContent className="text-center py-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    ¿Necesitás asesoramiento personalizado?
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Contactanos y descubrí cómo podemos ayudarte
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      window.location.href = '/contacto';
                    }}
                  >
                    Consultá acá
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Metodología
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Estrategia</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desarrollo de estrategias integrales de comunicación, análisis de audiencias y planificación de campañas políticas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Contenido</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creación de mensajes claros, storytelling efectivo y desarrollo de contenido para todos los canales de comunicación.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Ejecución</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implementación de campañas, coaching personalizado y seguimiento continuo para maximizar el impacto político.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  ¿Listo para impulsar tu proyecto político?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Contáctate con nosotros y descubrí cómo podemos ayudarte a maximizar el impacto de tu comunicación política y campañas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-large"
                    onClick={() => {
                      window.open('https://wa.me/5491122866851?text=Hola! Me interesa conocer más sobre Comunicación Política y Campañas.', '_blank');
                    }}
                  >
                    Consulta por WhatsApp
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      window.location.href = '/contacto';
                    }}
                  >
                    Formulario de Contacto
                  </Button>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex gap-6 justify-center items-center">
                  <div className="flex items-center text-muted-foreground">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <a 
                    href="https://www.linkedin.com/company/106146305/admin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <div className="flex items-center text-muted-foreground">
                    <Instagram className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ComunicacionPoliticaCampanas;
