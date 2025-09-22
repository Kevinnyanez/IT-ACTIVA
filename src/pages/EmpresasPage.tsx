import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Calendar, 
  Megaphone, 
  Users, 
  Building2, 
  Leaf, 
  Bot,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const EmpresasPage = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Diagnóstico y Auditoría de Comunicación",
      description: "Evaluamos en profundidad la comunicación interna y externa.",
      details: [
        "Análisis de branding, cultura organizacional e imagen pública",
        "Revisión de todos los puntos de contacto entre la marca y sus públicos"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Planificación Estratégica y Ejecución",
      description: "Elaboración de planes mensuales con cronogramas, presupuesto y objetivos claros.",
      details: [
        "Diseño de campañas publicitarias multicanal (digitales y tradicionales)",
        "Monitoreo de medios, tendencias y escucha activa en redes"
      ]
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing Digital y Publicidad Online",
      description: "Gestión completa de presencia digital y publicitaria.",
      details: [
        "Gestión de pauta publicitaria",
        "Implementación y optimización de píxeles de Facebook",
        "Google Ads, SEO, SEM, remarketing",
        "Diseño y mantenimiento de sitios web funcionales"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunicación Interna y Modernización Digital",
      description: "Automatización de canales y circuitos internos.",
      details: [
        "Diseño de señalética, newsletters, house organs, banners",
        "Implementación de plataformas colaborativas y cultura digital",
        "Reforzamos la identidad y el compromiso del equipo"
      ]
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Relacionamiento Institucional y Asuntos Públicos",
      description: "Potenciamos la participación en cámaras, eventos y vínculos con organismos.",
      details: [
        "Alertas sobre políticas públicas y escenarios sectoriales",
        "Elaboramos informes de coyuntura y gestionamos situaciones de crisis",
        "Diseño e implementación de estrategias de asuntos públicos"
      ]
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Gestión Sostenible y RSE",
      description: "Elaboramos reportes de sostenibilidad y seguimiento de metas.",
      details: [
        "Seguimiento de metas alineadas con la Agenda 2030",
        "Comunicamos los logros y compromiso ambiental de la empresa"
      ]
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Innovación y Herramientas Tecnológicas",
      description: "Aplicamos IA para automatizar procesos y analizar datos.",
      details: [
        "Implementamos ecommerce, CRM, atención digital y chatbots",
        "Diseñamos herramientas para una mejor experiencia de usuario y seguimiento de leads"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Optimización de Recursos",
      description: "Automatización y digitalización que reducen costos y tiempos."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Fortalecimiento de Marca",
      description: "Visibilidad, posicionamiento y reputación consolidada."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Conexión con Audiencias Clave",
      description: "Fidelización de clientes, segmentación precisa y expansión."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sostenibilidad Empresarial",
      description: "Transparencia y compromiso ambiental que impactan en la reputación."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Modernización Competitiva",
      description: "Herramientas innovadoras que mejoran la eficiencia general."
    }
  ];

  const valuePropositions = [
    {
      title: "Acompañamiento Estratégico Continuo",
      description: "Asesoría permanente para alinear la comunicación con los objetivos de negocio."
    },
    {
      title: "Capacitación en Tecnología y Comunicación",
      description: "Formación para equipos sobre herramientas digitales y cómo comunicar eficazmente los cambios e innovaciones dentro y fuera de la organización."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <PageHero
          title="Plan Empresas y Organizaciones"
          subtitle="Transformamos la comunicación empresarial"
          description="En un entorno cada vez más competitivo y cambiante, la comunicación estratégica se vuelve un pilar clave para crecer, diferenciarse y sostenerse. Desde IT ACTIVA acompañamos a empresas y organizaciones con una propuesta integral, combinando innovación, análisis y ejecución para resolver desafíos reales y posicionarlas con fuerza en su sector."
          ctaText="Contactanos"
          ctaAction={() => {
            window.location.href = '/contacto';
          }}
        />

        {/* Purpose Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
                <p className="text-lg font-medium text-foreground mb-4">
                  Nuestro propósito es claro: trabajar junto a vos para transformar la manera en que tu empresa comunica, se conecta y crece.
                </p>
                <p className="text-base text-muted-foreground">
                  Esto genera impacto positivo en tu marca, fideliza clientes y mejora los procesos internos.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales para transformar la comunicación de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group rounded-2xl border border-gray-200/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Beneficios IT ACTIVA Empresas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos la manera en que tu empresa se comunica y conecta con su audiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group rounded-2xl border border-gray-200/50 hover:border-primary/20 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Propuesta de Valor como Consultor
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompañamiento estratégico continuo para el crecimiento de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {valuePropositions.map((proposition, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group rounded-2xl border border-gray-200/50 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {proposition.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {proposition.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listos para transformar juntos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            En cada paso, trabajamos para que tu empresa no solo comunique mejor, sino que genere impacto, transforme su entorno y cuente historias que trasciendan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contacto">
                Contactanos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/servicios">
                Ver todos los servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default EmpresasPage;
