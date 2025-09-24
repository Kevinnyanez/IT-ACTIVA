import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MessageSquare, BarChart3, Megaphone, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Gestión Pública y Gobiernos Locales",
      description: "Transformamos la gestión pública desde lo local. Acompañamos a municipios y organismos en el diseño e implementación de políticas públicas basadas en evidencia.",
      link: "/servicios/gestion-publica",
      services: [
        "Informes de Gestión y Seguimiento de Metas",
        "Diseño, Análisis y Monitoreo de Políticas Públicas",
        "Fortalecimiento de Relaciones Interjurisdiccionales",
        "Políticas de Educación Superior, Juventudes y Proyectos Especiales",
        "Internacionalización de la Gestión e Implementación de ODS",
        "Articulación y Desarrollo Legislativo para Gobiernos",
        "Asesoramiento Integral en Programas y Proyectos de Gestión",
        "Estrategias Digitales y Políticas de Modernización",
        "Participación Ciudadana e Implementación de Presupuesto Participativo"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Comunicación para Gobiernos Locales",
      description: "Comunicamos para transformar. Diseñamos estrategias de comunicación a medida para gobiernos locales, dirigentes y equipos.",
      link: "/servicios/comunicacion-gobiernos",
      services: [
        "Análisis de Coyuntura y Clipping de Prensa",
        "Desarrollo de Estrategias de Comunicación Personalizadas",
        "Comunicación Interna y Externa para Equipos de Trabajo",
        "Fortalecimiento de la Marca Ciudad y Desarrollo Local",
        "Periodismo de Ciudades",
        "Asesoramiento en Comunicación Política",
        "Identificación de Problemáticas y Propuestas de Soluciones Efectivas",
        "Comunicación de Cercanía y Periodismo de Soluciones",
        "Gestión y Comunicación de Crisis",
        "Coordinación y Diseño de Producciones Audiovisuales"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Comunicación Política y Campañas",
      description: "Tu proyecto político necesita una estrategia que comunique y escuche. Impulsamos tu presencia pública a través de contenidos, segmentación de audiencias y análisis.",
      link: "/servicios/comunicacion-politica",
      services: [
        "Estrategias de Comunicación y Creación de Contenido",
        "Identificación de Públicos y Audiencias",
        "Storytelling y Storydoing",
        "Clipping de Prensa, Notas y Artículos. Monitoreo de Medios",
        "Estrategias Digitales y Gestión de Social Media",
        "Posicionamiento y Desarrollo del Discurso Público",
        "Desarrollo de Encuestas de Opinión",
        "Debate Electoral: Puntos Clave y Coaching",
        "Oratoria para Conectar con tu Público",
        "Plataforma de Gobierno de Alto Impacto"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center&auto=format",
      title: "Plan Empresas y Organizaciones",
      description: "Transformamos la comunicación empresarial con propuestas integrales que combinan innovación, análisis y ejecución.",
      link: "/servicios/empresas",
      services: [
        "Diagnóstico y Auditoría de Comunicación",
        "Planificación Estratégica y Ejecución",
        "Marketing Digital y Publicidad Online",
        "Comunicación Interna y Modernización Digital",
        "Relacionamiento Institucional y Asuntos Públicos",
        "Gestión Sostenible y RSE",
        "Innovación y Herramientas Tecnológicas"
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-primary text-sm font-medium">Servicios Especializados</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especializados en consultoría de comunicación y gestión pública, 
            ofrecemos soluciones integrales para gobiernos locales, organizaciones políticas y empresas.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl border border-gray-200/50 hover:border-primary/20 p-6 lg:p-8">
              <Link to={category.link} className="block">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300 overflow-hidden shadow-lg">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <CardTitle className="text-2xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-base lg:text-lg text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                    {category.services.length > 3 && (
                      <li className="flex items-start text-base lg:text-lg text-primary font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>+{category.services.length - 3} servicios más</span>
                      </li>
                    )}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white group-hover:border-primary group-hover:bg-primary transition-all duration-300 border-gray-300"
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