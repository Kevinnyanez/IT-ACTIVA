import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, CheckCircle, Mic, Eye, TrendingUp, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const ComunicacionGobiernos = () => {
  const services = [
    {
      name: "Análisis de Coyuntura y Clipping de Prensa Actualizado",
      description: "Monitoreo de medios y análisis de contexto para identificar tendencias y oportunidades para la gestión local.",
      benefits: [
        "Monitoreo en tiempo real",
        "Análisis de tendencias",
        "Identificación de oportunidades"
      ]
    },
    {
      name: "Desarrollo de Estrategias de Comunicación para Dirigentes",
      description: "Diseño de planes de comunicación personalizados para líderes locales que refuercen el posicionamiento de los dirigentes en sus comunidades y sectores claves.",
      benefits: [
        "Planes personalizados",
        "Posicionamiento estratégico",
        "Conexión con comunidades"
      ]
    },
    {
      name: "Asesoramiento en Comunicación Política",
      description: "Optimización de estrategias discursivas y mediáticas para campañas electorales y gestión de gobierno, fortaleciendo el vínculo con la ciudadanía.",
      benefits: [
        "Estrategias discursivas",
        "Optimización mediática",
        "Fortalecimiento ciudadano"
      ]
    },
    {
      name: "Fortalecimiento de la Marca Ciudad y Desarrollo Local",
      description: "Impulso de estrategias para consolidar la identidad local y posicionar a la ciudad como un destino atractivo para inversiones, turismo y desarrollo cultural.",
      benefits: [
        "Identidad local consolidada",
        "Atracción de inversiones",
        "Desarrollo cultural"
      ]
    },
    {
      name: "Comunicación Interna para Equipos de Trabajo",
      description: "Diseño de canales internos y dinámicas comunicacionales que potencien la coordinación y el rendimiento de los equipos en la gestión pública.",
      benefits: [
        "Canales internos eficientes",
        "Coordinación mejorada",
        "Rendimiento optimizado"
      ]
    },
    {
      name: "Periodismo de Ciudades",
      description: "Producción de contenidos que destaquen los logros de la gestión local y refuercen la identidad colectiva en torno a los proyectos en ejecución.",
      benefits: [
        "Contenidos destacados",
        "Identidad colectiva",
        "Proyectos visibilizados"
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
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Comunicación Gobiernos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-800/85"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comunicación para 
                <span className="block text-primary">
                  Gobiernos Locales
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Estrategias de comunicación focalizadas para la gestión pública local, fortaleciendo el vínculo con la ciudadanía y posicionando la marca de tu ciudad.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span>Estrategias Comunicacionales</span>
                </div>
                <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span>Marca Ciudad</span>
                </div>
                <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span>Vínculo Ciudadano</span>
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
                <strong>Servicios Especializados</strong>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Soluciones comunicacionales integrales para fortalecer la gestión pública local con enfoque estratégico
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
                      <strong>{service.description}</strong>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground text-lg">Beneficios principales:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-base text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Action - always show at bottom for even number */}
            {services.length % 2 === 0 && (
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
            )}
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Metodología
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card text-center p-8 border border-border rounded-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Análisis</h3>
                  <p className="text-muted-foreground text-lg">
                    Evaluación del contexto comunicacional actual, identificación de audiencias y análisis de la competencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border rounded-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Mic className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Estrategia</h3>
                  <p className="text-muted-foreground text-lg">
                    Desarrollo de mensajes clave, canales de comunicación y calendarios editoriales adaptados a cada audiencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border rounded-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Ejecución</h3>
                  <p className="text-muted-foreground text-lg">
                    Implementación de campañas con monitoreo continuo y ajustes estratégicos basados en métricas y feedback.
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
                  ¿Listo para fortalecer la comunicación de tu gobierno local?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Contáctate con nosotros y descubrí cómo podemos ayudarte a mejorar la comunicación con tus ciudadanos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-large"
                    onClick={() => {
                      window.open('https://wa.me/5491122866851?text=Hola! Me interesa conocer más sobre Comunicación para Gobiernos Locales.', '_blank');
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
                  <a 
                    href="https://www.facebook.com/profile.php?id=61582131955493" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/106146305/admin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/itactiva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
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

export default ComunicacionGobiernos;
