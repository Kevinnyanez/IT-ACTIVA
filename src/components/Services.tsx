import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MessageSquare, BarChart3, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Gestión Pública y Gobiernos Locales",
      description: "Asesoramiento integral en programas, políticas públicas y modernización del Estado.",
      link: "/servicios/gestion-publica",
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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Comunicación para Gobiernos Locales",
      description: "Estrategias comunicacionales especializadas para la gestión pública local.",
      link: "/servicios/comunicacion-gobiernos",
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Comunicación Política y Análisis",
      description: "Estrategias digitales, gestión de contenidos y análisis político especializado.",
      link: "/servicios/comunicacion-politica",
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
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Discurso e Imagen Pública",
      description: "Construcción de imagen institucional, oratoria y posicionamiento público.",
      link: "/servicios/discurso-imagen",
      services: [
        "Desarrollo de Imagen Institucional",
        "Posicionamiento y Manejo del Discurso Público",
        "Desarrollo de Encuestas de Opinión",
        "Debate Electoral: Puntos Clave y Coaching",
        "Oratoria para Conectar con tu Público"
      ]
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
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth group cursor-pointer">
              <Link to={category.link} className="block">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-smooth overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-base text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                    {category.services.length > 3 && (
                      <li className="flex items-start text-base text-primary font-medium">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>+{category.services.length - 3} servicios más</span>
                      </li>
                    )}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <span>Ver más detalles</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;