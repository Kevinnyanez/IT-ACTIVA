import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MessageSquare, Users, Megaphone, BarChart3, Globe, Lightbulb, Target, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  
  const serviceCategories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Gestión Pública y Gobiernos Locales",
      description: "Asesoramiento integral en programas, políticas públicas y modernización del Estado.",
      services: [
        {
          name: "Informes de Gestión y Seguimiento de Metas",
          description: "Elaboración de reportes estratégicos para medir avances en la gestión pública, optimizando la planificación de políticas y programas en función de resultados concretos."
        },
        {
          name: "Asesoramiento Integral en Programas y Proyectos de Gestión",
          description: "Diseño e implementación de proyectos y políticas públicas, mediante diagnósticos claves, asegurando su alineación con las prioridades gubernamentales y el desarrollo sostenible."
        },
        {
          name: "Diseño, Análisis y Monitoreo de Políticas Públicas",
          description: "Formulación de políticas públicas basadas en evidencia, con análisis de impacto y mecanismos de monitoreo continuo para asegurar su efectividad en el territorio."
        },
        {
          name: "Articulación y Desarrollo Legislativo para Gobiernos",
          description: "Asesoramiento técnico-político para la elaboración de marcos normativos, fortaleciendo la articulación entre los poderes Ejecutivo y Legislativo en los distintos niveles de gobierno."
        },
        {
          name: "Internacionalización de la Gestión e Implementación de los ODS",
          description: "Desarrollo de estrategias para alinear las políticas locales a estándares internacionales, promoviendo la adopción de los Objetivos de Desarrollo Sostenible como eje transversal en la gestión pública."
        },
        {
          name: "Estrategias Digitales y Políticas de Modernización",
          description: "Asesoramiento en herramientas digitales y políticas innovadoras que potencien la eficiencia en la administración pública y fortalezcan la relación con la ciudadanía."
        },
        {
          name: "Participación Ciudadana e Implementación de Presupuestos Participativos",
          description: "Promoción de mecanismos de democracia participativa para incluir las voces de los ciudadanos en la toma de decisiones y la asignación de recursos públicos."
        },
        {
          name: "Fortalecimiento de las Relaciones Interjurisdiccionales",
          description: "Diseño de estrategias para fomentar la cooperación entre municipios, provincias y la Nación, garantizando una gestión coordinada y eficiente."
        },
        {
          name: "Políticas de Educación Superior, Juventud y Proyectos Especiales",
          description: "Creación de programas que integren a las universidades, centros de formación y jóvenes en proyectos que fortalezcan el desarrollo local y regional."
        }
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunicación para Gobiernos Locales",
      description: "Estrategias comunicacionales especializadas para la gestión pública local.",
      services: [
        {
          name: "Análisis de Coyuntura y Clipping de Prensa Actualizado",
          description: "Monitoreo de medios y análisis de contexto para identificar tendencias y oportunidades para la gestión local."
        },
        {
          name: "Desarrollo de Estrategias de Comunicación para Dirigentes",
          description: "Diseño de planes de comunicación personalizados para líderes locales que refuercen el posicionamiento de los dirigentes en sus comunidades y sectores claves."
        },
        {
          name: "Asesoramiento en Comunicación Política",
          description: "Optimización de estrategias discursivas y mediáticas para campañas electorales y gestión de gobierno, fortaleciendo el vínculo con la ciudadanía."
        },
        {
          name: "Fortalecimiento de la Marca Ciudad y Desarrollo Local",
          description: "Impulso de estrategias para consolidar la identidad local y posicionar a la ciudad como un destino atractivo para inversiones, turismo y desarrollo cultural."
        },
        {
          name: "Comunicación Interna para Equipos de Trabajo",
          description: "Diseño de canales internos y dinámicas comunicacionales que potencien la coordinación y el rendimiento de los equipos en la gestión pública."
        },
        {
          name: "Periodismo de Ciudades",
          description: "Producción de contenidos que destaquen los logros de la gestión local y refuercen la identidad colectiva en torno a los proyectos en ejecución."
        }
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comunicación Política y Análisis",
      description: "Estrategias digitales, gestión de contenidos y análisis político especializado.",
      services: [
        {
          name: "Estrategia de Comunicación y Creación de Contenidos",
          description: "Elaboración de mensajes claros y consistentes para maximizar el impacto comunicacional en campañas y gestión de gobierno."
        },
        {
          name: "Clipping de Prensa, Notas y Artículos",
          description: "Seguimiento y elaboración de contenido en medios locales y nacionales para consolidar la imagen de la gestión y de los referentes políticos."
        },
        {
          name: "Estrategias Digitales y Gestión de Social Media",
          description: "Planificación y ejecución de campañas en redes sociales, posicionando la gestión pública o electoral como cercana, innovadora y transparente."
        },
        {
          name: "Coordinación y Desarrollo de Producciones Audiovisuales",
          description: "Desarrollo de videos e imágenes institucionales que refuercen los logros y objetivos de la gestión pública, alineados al discurso oficial."
        },
        {
          name: "Identificación de Públicos y Audiencias",
          description: "Análisis detallado de segmentos clave para optimizar el alcance y efectividad de las estrategias comunicacionales."
        },
        {
          name: "Gestión y Comunicación de Crisis",
          description: "Desarrollo de protocolos y estrategias para el manejo efectivo de situaciones críticas que puedan afectar la imagen institucional."
        }
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Discurso e Imagen Pública",
      description: "Construcción de imagen institucional, oratoria y posicionamiento público.",
      services: [
        {
          name: "Desarrollo de Imagen Institucional",
          description: "Construcción y fortalecimiento de la identidad visual y comunicacional de instituciones públicas y líderes políticos."
        },
        {
          name: "Posicionamiento y Manejo del Discurso Público",
          description: "Desarrollo de estrategias discursivas coherentes que refuercen el liderazgo y la credibilidad ante diversos públicos."
        },
        {
          name: "Desarrollo de Encuestas de Opinión",
          description: "Diseño y análisis de estudios de opinión pública para medir percepción ciudadana y orientar estrategias comunicacionales."
        },
        {
          name: "Debate Electoral: Puntos Clave y Coaching",
          description: "Preparación integral para debates políticos, incluyendo argumentación, manejo escénico y estrategias de comunicación efectiva."
        },
        {
          name: "Oratoria para Conectar con tu Público",
          description: "Técnicas de comunicación oral para líderes políticos, enfocadas en generar conexión emocional y transmitir mensajes de manera impactante."
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Articulación Interjurisdiccional",
      description: "Fortalecimiento de relaciones entre municipios, provincias y Nación"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Storytelling y Storydoing",
      description: "Construcción de narrativas auténticas que refuercen el liderazgo"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Análisis FODA",
      description: "Identificación de fortalezas y oportunidades para equipos de trabajo"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Políticas de Educación Superior",
      description: "Programas que integren universidades y jóvenes en proyectos locales"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Especializados en consultoría de comunicación y gestión pública, 
                ofrecemos soluciones integrales para gobiernos locales y organizaciones políticas.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Servicios Principales
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cuatro pilares fundamentales que sustentan nuestra propuesta de valor
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4 shadow-soft">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      {category.services.slice(0, showAllServices ? category.services.length : 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border-l-2 border-primary/20 pl-4">
                          <h4 className="font-medium text-foreground text-sm mb-1">
                            {service.name}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      ))}
                      
                      {!showAllServices && category.services.length > 3 && (
                        <div className="text-center pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowAllServices(true)}
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <ChevronDown className="w-4 h-4 mr-2" />
                            Ver más servicios ({category.services.length - 3} más)
                          </Button>
                        </div>
                      )}
                      
                      {showAllServices && category.services.length > 3 && (
                        <div className="text-center pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowAllServices(false)}
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <ChevronUp className="w-4 h-4 mr-2" />
                            Ver menos
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-primary-foreground border-primary text-primary"
                    >
                      <Link to="/contacto" className="w-full">
                        Solicitar Información
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Servicios Adicionales
              </h3>
              <p className="text-muted-foreground">
                Complementamos nuestra oferta con servicios especializados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {additionalServices.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-soft transition-all duration-300 text-center p-6 border border-border">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-primary text-primary-foreground max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    ¿Necesitas una solución personalizada?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Cada proyecto es único. Diseñamos estrategias a medida 
                    según tus necesidades específicas.
                  </p>
                  <Button 
                    variant="secondary"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    <Link to="/contacto">
                      Hablemos de tu Proyecto
                    </Link>
                  </Button>
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

export default ServicesPage;