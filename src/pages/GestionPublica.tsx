import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle, Target, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

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
      name: "Asesoramiento Integral en Programas y Proyectos de Gestión",
      description: "Diseño e implementación de proyectos y políticas públicas, mediante diagnósticos claves, asegurando su alineación con las prioridades gubernamentales y el desarrollo sostenible.",
      benefits: [
        "Diagnósticos integrales",
        "Planificación estratégica",
        "Implementación efectiva"
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
      name: "Articulación y Desarrollo Legislativo para Gobiernos",
      description: "Asesoramiento técnico-político para la elaboración de marcos normativos, fortaleciendo la articulación entre los poderes Ejecutivo y Legislativo en los distintos niveles de gobierno.",
      benefits: [
        "Asesoramiento técnico-político",
        "Marco normativo robusto",
        "Articulación interpoderes"
      ]
    },
    {
      name: "Internacionalización de la Gestión e Implementación de los ODS",
      description: "Desarrollo de estrategias para alinear las políticas locales a estándares internacionales, promoviendo la adopción de los Objetivos de Desarrollo Sostenible como eje transversal en la gestión pública.",
      benefits: [
        "Alineación internacional",
        "Implementación de ODS",
        "Desarrollo sostenible"
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
      name: "Participación Ciudadana e Implementación de Presupuestos Participativos",
      description: "Promoción de mecanismos de democracia participativa para incluir las voces de los ciudadanos en la toma de decisiones y la asignación de recursos públicos.",
      benefits: [
        "Democracia participativa",
        "Inclusión ciudadana",
        "Transparencia en presupuestos"
      ]
    },
    {
      name: "Fortalecimiento de las Relaciones Interjurisdiccionales",
      description: "Diseño de estrategias para fomentar la cooperación entre municipios, provincias y la Nación, garantizando una gestión coordinada y eficiente.",
      benefits: [
        "Coordinación interjurisdiccional",
        "Gestión eficiente",
        "Cooperación institucional"
      ]
    },
    {
      name: "Políticas de Educación Superior, Juventud y Proyectos Especiales",
      description: "Creación de programas que integren a las universidades, centros de formación y jóvenes en proyectos que fortalezcan el desarrollo local y regional.",
      benefits: [
        "Integración universitaria",
        "Desarrollo juvenil",
        "Proyectos locales"
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Gestión Pública" 
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
                Gestión Pública y 
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Gobiernos Locales
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                Asesoramiento integral en programas, políticas públicas y modernización del Estado para fortalecer la gestión local y el desarrollo sostenible.
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Políticas Públicas</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Modernización del Estado</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                  <span>Desarrollo Sostenible</span>
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
                Soluciones integrales para fortalecer la gestión pública local con enfoque en resultados y desarrollo sostenible
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
                Un enfoque estructurado y probado para el éxito en la gestión pública
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Diagnóstico</h3>
                  <p className="text-muted-foreground text-lg">
                    Análisis profundo de la situación actual, identificando fortalezas, debilidades y oportunidades de mejora.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Planificación</h3>
                  <p className="text-muted-foreground">
                    Diseño de estrategias personalizadas que involucran a todos los actores relevantes del territorio.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card text-center p-8 border border-border">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Implementación</h3>
                  <p className="text-muted-foreground">
                    Acompañamiento en la ejecución con monitoreo continuo y ajustes estratégicos según resultados.
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

export default GestionPublica;
