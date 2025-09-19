import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MessageSquare, Users, Megaphone, BarChart3, Globe, Lightbulb, Target } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Gestión Pública y Gobiernos Locales",
      description: "Asesoramiento integral en programas, políticas públicas y modernización del Estado.",
      services: [
        "Informes de Gestión y Seguimiento de Metas",
        "Diseño, Análisis y Monitoreo de Políticas Públicas", 
        "Internacionalización de la Gestión e Implementación de los ODS",
        "Estrategias Digitales y Políticas de Modernización",
        "Participación Ciudadana y Presupuestos Participativos"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunicación para Gobiernos Locales",
      description: "Estrategias comunicacionales especializadas para la gestión pública local.",
      services: [
        "Análisis de Coyuntura y Clipping de Prensa",
        "Desarrollo de Estrategias de Comunicación para Dirigentes",
        "Fortalecimiento de la Marca Ciudad y Desarrollo Local",
        "Comunicación Interna para Equipos de Trabajo",
        "Periodismo de Ciudades"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comunicación Política y Análisis",
      description: "Estrategias digitales, gestión de contenidos y análisis político especializado.",
      services: [
        "Estrategia de Comunicación y Creación de Contenidos",
        "Estrategias Digitales y Gestión de Social Media",
        "Coordinación y Desarrollo de Producciones Audiovisuales",
        "Identificación de Públicos y Audiencias",
        "Gestión y Comunicación de Crisis"
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Discurso e Imagen Pública",
      description: "Construcción de imagen institucional, oratoria y posicionamiento público.",
      services: [
        "Desarrollo de Imagen Institucional",
        "Posicionamiento y Manejo del Discurso Público",
        "Desarrollo de Encuestas de Opinión",
        "Debate Electoral: Puntos Clave y Coaching",
        "Oratoria para Conectar con tu Público"
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
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializados en consultoría de comunicación y gestión pública, 
            ofrecemos soluciones integrales para gobiernos locales y organizaciones políticas.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-smooth">
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
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  Solicitar Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Servicios Adicionales
          </h3>
          <p className="text-muted-foreground">
            Complementamos nuestra oferta con servicios especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-soft transition-smooth text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground mx-auto mb-4">
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
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
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
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Hablemos de tu Proyecto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;