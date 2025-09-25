import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle, Target, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const GestionPublica = () => {
  const services = [
    {
      name: "Informes de Gestión y Seguimiento de Metas",
      description: "Elaboración de reportes estratégicos para medir avances en la gestión pública, optimizando la planificación de políticas y programas en función de resultados concretos.",
      benefits: [
        "Monitoreo continuo de objetivos",
        "Reportes de impacto ciudadano",
        "Optimización de recursos públicos"
      ]
    },
    {
      name: "Diseño, Análisis y Monitoreo de Políticas Públicas",
      description: "Formulación de políticas públicas basadas en evidencia, con análisis de impacto y mecanismos de monitoreo continuo para asegurar su efectividad en el territorio.",
      benefits: [
        "Políticas basadas en evidencia",
        "Análisis de impacto",
        "Monitoreo continuo"
      ]
    },
    {
      name: "Fortalecimiento de Relaciones Interjurisdiccionales",
      description: "Diseño de estrategias para fomentar la cooperación entre municipios, provincias y la Nación, garantizando una gestión coordinada y eficiente.",
      benefits: [
        "Coordinación interjurisdiccional",
        "Gestión eficiente",
        "Cooperación institucional"
      ]
    },
    {
      name: "Políticas de Educación Superior, Juventudes y Proyectos Especiales",
      description: "Creación de programas que integren a las universidades, centros de formación y jóvenes en proyectos que fortalezcan el desarrollo local y regional.",
      benefits: [
        "Integración universitaria",
        "Desarrollo juvenil",
        "Proyectos locales"
      ]
    },
    {
      name: "Internacionalización de la Gestión e Implementación de ODS",
      description: "Desarrollo de estrategias para alinear las políticas locales a estándares internacionales, promoviendo la adopción de los Objetivos de Desarrollo Sostenible como eje transversal en la gestión pública.",
      benefits: [
        "Alineación internacional",
        "Objetivos de Desarrollo Sostenible",
        "Estándares globales"
      ]
    },
    {
      name: "Articulación y Desarrollo Legislativo para Gobiernos",
      description: "Asesoramiento técnico-político para la elaboración de marcos normativos, fortaleciendo la articulación entre los poderes Ejecutivo y Legislativo en los distintos niveles de gobierno.",
      benefits: [
        "Asesoramiento técnico-político",
        "Marco normativo robusto",
        "Articulación interpoderes"
      ]
    },
    {
      name: "Asesoramiento Integral en Programas y Proyectos de Gestión",
      description: "Diseño e implementación de proyectos y políticas públicas, mediante diagnósticos claves, asegurando su alineación con las prioridades gubernamentales y el desarrollo sostenible.",
      benefits: [
        "Diagnósticos integrales",
        "Planificación estratégica",
        "Implementación efectiva"
      ]
    },
    {
      name: "Estrategias Digitales y Políticas de Modernización",
      description: "Asesoramiento en herramientas digitales y políticas innovadoras que potencien la eficiencia en la administración pública y fortalezcan la relación con la ciudadanía.",
      benefits: [
        "Modernización digital",
        "Eficiencia administrativa",
        "Mejor relación ciudadana"
      ]
    },
    {
      name: "Participación Ciudadana e Implementación de Presupuesto Participativo",
      description: "Promoción de mecanismos de democracia participativa para incluir las voces de los ciudadanos en la toma de decisiones y la asignación de recursos públicos.",
      benefits: [
        "Democracia participativa",
        "Inclusión ciudadana",
        "Transparencia en presupuestos"
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
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Gestión Pública" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/60"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Gestión Pública y 
                <span className="block text-primary">
                  Gobiernos Locales
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Transformamos la gestión pública desde lo local. Acompañamos a municipios y organismos en el diseño e implementación de políticas públicas basadas en evidencia, con foco en resultados, impacto territorial y planificación estratégica.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Políticas Públicas</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Modernización del Estado</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  <span>Desarrollo Sostenible</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Nuestros Servicios Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Soluciones integrales para fortalecer la gestión pública local con enfoque en resultados y desarrollo sostenible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border/50 rounded-xl h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground text-base uppercase tracking-wide">Beneficios principales:</h4>
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
                Un enfoque estructurado y probado para el éxito en la gestión pública
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Diagnóstico</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Análisis profundo de la situación actual, identificando fortalezas, debilidades y oportunidades de mejora.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Planificación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Diseño de estrategias personalizadas que involucran a todos los actores relevantes del territorio.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-6 border border-border/50 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Implementación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Acompañamiento en la ejecución con monitoreo continuo y ajustes estratégicos según resultados.
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
                  ¿Listo para transformar tu gestión pública?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Contacta con nuestros especialistas y descubre cómo podemos ayudarte a alcanzar tus objetivos de desarrollo local.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-large"
                    onClick={() => {
                      window.open('https://wa.me/5491122866851?text=Hola! Me interesa conocer más sobre Gestión Pública y Gobiernos Locales.', '_blank');
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

export default GestionPublica;