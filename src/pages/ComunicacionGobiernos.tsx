import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowLeft, CheckCircle, Mic, Eye, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Comunicación Gobiernos" 
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
                Comunicación para 
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Gobiernos Locales
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                Estrategias comunicacionales especializadas para la gestión pública local, fortaleciendo el vínculo con la ciudadanía y posicionando la marca ciudad.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Estrategias Comunicacionales</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Marca Ciudad</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
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
                Nuestros Servicios Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Soluciones comunicacionales integrales para fortalecer la gestión pública local
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
                Un enfoque estratégico para la comunicación efectiva en la gestión pública
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Análisis</h3>
                  <p className="text-muted-foreground text-lg">
                    Evaluación del contexto comunicacional actual, identificación de audiencias y análisis de la competencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Mic className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Estrategia</h3>
                  <p className="text-muted-foreground text-lg">
                    Desarrollo de mensajes clave, canales de comunicación y calendarios editoriales adaptados a cada audiencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
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

      </main>

      <Footer />
    </div>
  );
};

export default ComunicacionGobiernos;
