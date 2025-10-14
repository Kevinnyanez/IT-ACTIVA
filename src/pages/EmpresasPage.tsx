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
  CheckCircle,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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
        <section id="page-top" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&crop=center&auto=format" 
              alt="Plan Empresas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-800/85"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Plan Empresas y Organizaciones
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-8">
                Transformamos la comunicación empresarial
              </h2>
              
              <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                IT ACTIVA acompaña a empresas y organizaciones con una propuesta integral, combinando innovación, análisis y ejecución para resolver desafíos reales y posicionarlas con fuerza en su sector.
              </p>

              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 shadow-large group"
                onClick={() => window.location.href = '/contacto'}
              >
                Contactanos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

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
              <strong>Servicios Especializados</strong>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales para transformar la comunicación de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border border-border rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    <strong>{service.description}</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground text-lg">Beneficios principales:</h4>
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-base text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action - odd number of services */}
          <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 hover:shadow-medium transition-all duration-300 border-2 border-primary/30 rounded-xl">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  ¿Necesitás asesoramiento personalizado?
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Contactanos y descubrí cómo podemos ayudarte
                </p>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    window.location.href = '/contacto';
                  }}
                >
                  Consultá acá
                </Button>
              </CardContent>
            </Card>
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

      {/* Methodology Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Metodología
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card text-center p-8 border border-border rounded-xl">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Diagnóstico</h3>
                <p className="text-muted-foreground text-lg">
                  Análisis profundo de la situación comunicacional actual y detección de oportunidades de mejora para tu empresa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center p-8 border border-border rounded-xl">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Planificación</h3>
                <p className="text-muted-foreground text-lg">
                  Diseño de estrategias personalizadas con objetivos claros, cronogramas y presupuestos adaptados a tu organización.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center p-8 border border-border rounded-xl">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Ejecución</h3>
                <p className="text-muted-foreground text-lg">
                  Implementación de soluciones con monitoreo continuo y ajustes estratégicos para maximizar el impacto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Listos para transformar juntos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              En cada paso, trabajamos para que tu empresa no solo comunique mejor, sino que genere impacto, transforme su entorno y cuente historias que trasciendan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-large"
                onClick={() => {
                  window.open('https://wa.me/5491122866851?text=Hola! Me interesa conocer más sobre el Plan Empresas y Organizaciones.', '_blank');
                }}
              >
                Consulta por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
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
            
            {/* Social Media Icons */}
            <div className="flex gap-6 justify-center items-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61582131955493" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/106146305/admin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/itactiva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
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

export default EmpresasPage;
