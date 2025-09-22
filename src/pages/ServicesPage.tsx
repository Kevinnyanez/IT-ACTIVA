import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MessageSquare, BarChart3, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Gestión Pública y Gobiernos Locales",
      description: "Asesoramiento integral en programas, políticas públicas y modernización del Estado.",
      link: "/servicios/gestion-publica",
      highlights: [
        "Informes de Gestión y Seguimiento",
        "Diseño de Políticas Públicas",
        "Modernización del Estado",
        "Participación Ciudadana"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunicación para Gobiernos Locales",
      description: "Estrategias comunicacionales especializadas para la gestión pública local.",
      link: "/servicios/comunicacion-gobiernos",
      highlights: [
        "Análisis de Coyuntura",
        "Estrategias de Comunicación",
        "Marca Ciudad",
        "Periodismo Local"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comunicación Política y Análisis",
      description: "Estrategias digitales, gestión de contenidos y análisis político especializado.",
      link: "/servicios/comunicacion-politica",
      highlights: [
        "Estrategias Digitales",
        "Gestión de Contenidos",
        "Análisis Político",
        "Producciones Audiovisuales"
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Discurso e Imagen Pública",
      description: "Construcción de imagen institucional, oratoria y posicionamiento público.",
      link: "/servicios/discurso-imagen",
      highlights: [
        "Imagen Institucional",
        "Oratoria y Discurso",
        "Encuestas de Opinión",
        "Coaching Electoral"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <PageHero
          title="Nuestros Servicios"
          description="Especializados en consultoría de comunicación y gestión pública, ofrecemos soluciones integrales para gobiernos locales y organizaciones políticas."
          ctaText="Ver Servicios Detallados"
          ctaAction={() => {
            document.querySelector('#services-navigation')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        />

        {/* Services Navigation */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Servicios Principales
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cuatro pilares fundamentales que sustentan nuestra propuesta de valor. 
                Selecciona el servicio que más te interese para conocer todos los detalles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border group cursor-pointer rounded-xl">
                  <Link to={category.link} className="block">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
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
                      <div className="space-y-3 mb-6">
                        <h4 className="font-medium text-foreground text-sm mb-2">Servicios destacados:</h4>
                        <ul className="space-y-2">
                          {category.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full hover:bg-primary hover:text-primary-foreground border-primary text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      >
                        <span>Explorar Servicio</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;