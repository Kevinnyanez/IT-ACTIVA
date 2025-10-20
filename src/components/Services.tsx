import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MessageSquare, BarChart3, Megaphone, ArrowRight, Briefcase, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&crop=center&auto=format",
      title: "Gestión Pública y Gobiernos Locales",
      description: "Transformamos la gestión pública desde lo local. Acompañamos a municipios y organismos en el diseño e implementación de políticas públicas basadas en evidencia.",
      link: "/servicios/gestion-publica",
      services: [
        "<strong>Informes de Gestión</strong> y Seguimiento de Metas",
        "<strong>Diseño, Análisis y Monitoreo</strong> de Políticas Públicas",
        "<strong>Fortalecimiento de Relaciones</strong> Interjurisdiccionales",
        "<strong>Políticas de Educación Superior,</strong> Juventudes y Proyectos Especiales",
        "<strong>Internacionalización de la Gestión</strong> e Implementación de ODS",
        "<strong>Articulación y Desarrollo Legislativo</strong> para Gobiernos",
        "<strong>Asesoramiento Integral</strong> en Programas y Proyectos de Gestión",
        "<strong>Estrategias Digitales</strong> y Políticas de Modernización",
        "<strong>Participación Ciudadana</strong> e Implementación de Presupuesto Participativo"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center&auto=format",
      title: "Comunicación para Gobiernos Locales",
      description: "Comunicamos para transformar. Diseñamos estrategias de comunicación a medida para gobiernos locales, dirigentes y equipos.",
      link: "/servicios/comunicacion-gobiernos",
      services: [
        "<strong>Análisis de Coyuntura</strong> y Clipping de Prensa",
        "<strong>Desarrollo de Estrategias</strong> de Comunicación Personalizadas",
        "<strong>Comunicación Interna y Externa</strong> para Equipos de Trabajo",
        "<strong>Fortalecimiento de la Marca Ciudad</strong> y Desarrollo Local",
        "<strong>Periodismo de Ciudades</strong>",
        "<strong>Asesoramiento</strong> en Comunicación Política",
        "<strong>Identificación de Problemáticas</strong> y Propuestas de Soluciones Efectivas",
        "<strong>Comunicación de Cercanía</strong> y Periodismo de Soluciones",
        "<strong>Gestión y Comunicación de Crisis</strong>",
        "<strong>Coordinación y Diseño</strong> de Producciones Audiovisuales"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center&auto=format",
      title: "Comunicación Política y Campañas",
      description: "Tu proyecto político necesita una estrategia que comunique y escuche. Impulsamos tu presencia pública a través de contenidos, segmentación de audiencias y análisis.",
      link: "/servicios/comunicacion-politica-campanas",
      services: [
        "<strong>Estrategias de Comunicación</strong> y Creación de Contenido",
        "<strong>Identificación de Públicos</strong> y Audiencias",
        "<strong>Storytelling y Storydoing</strong>",
        "<strong>Clipping de Prensa,</strong> Notas y Artículos. Monitoreo de Medios",
        "<strong>Estrategias Digitales</strong> y Gestión de Social Media",
        "<strong>Posicionamiento y Desarrollo</strong> del Discurso Público",
        "<strong>Desarrollo de Encuestas</strong> de Opinión",
        "<strong>Debate Electoral:</strong> Puntos Clave y Coaching",
        "<strong>Oratoria</strong> para Conectar con tu Público",
        "<strong>Plataforma de Gobierno</strong> de Alto Impacto"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center&auto=format",
      title: "Plan Empresas y Organizaciones",
      description: "Transformamos la comunicación empresarial con propuestas integrales que combinan innovación, análisis y ejecución.",
      link: "/servicios/empresas",
      services: [
        "<strong>Diagnóstico y Auditoría</strong> de Comunicación",
        "<strong>Planificación Estratégica</strong> y Ejecución",
        "<strong>Marketing Digital</strong> y Publicidad Online",
        "<strong>Comunicación Interna</strong> y Modernización Digital",
        "<strong>Relacionamiento Institucional</strong> y Asuntos Públicos",
        "<strong>Gestión Sostenible</strong> y RSE",
        "<strong>Innovación y Herramientas Tecnológicas</strong>"
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
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300 overflow-hidden shadow-lg relative">
                    <img 
                      src={category.image}
                      alt={`Consultoría ${category.title} - Servicios para municipios y gobiernos locales en Argentina`}
                      loading="lazy"
                      width="96"
                      height="96"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-gray-800/35 to-gray-700/30 rounded-2xl"></div>
                  </div>
                  <CardTitle className="text-2xl lg:text-4xl font-semibold text-foreground transition-colors">
                    <span className="font-bold underline decoration-2 underline-offset-4">{category.title}</span>
                    <ExternalLink className="inline-block w-6 h-6 lg:w-7 lg:h-7 ml-2 align-middle" />
                  </CardTitle>
                  <CardDescription className="text-lg lg:text-xl text-foreground leading-relaxed font-semibold">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-base lg:text-lg text-foreground font-semibold">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: service }}></span>
                      </li>
                    ))}
                    {category.services.length > 3 && (
                      <li className="flex items-start text-base lg:text-lg text-primary font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>+ servicios</span>
                      </li>
                    )}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white group-hover:border-primary group-hover:bg-primary transition-all duration-300 border-gray-300"
                  >
                    <span>Ver detalle</span>
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