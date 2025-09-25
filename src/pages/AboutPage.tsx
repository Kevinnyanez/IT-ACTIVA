import { CheckCircle, Target, Lightbulb, BarChart3, HandHeart, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const successSteps = [
    {
      number: "01",
      title: "Diagnóstico Colaborativo",
      description: "Análisis profundo de la situación actual, identificando fortalezas, oportunidades y desafíos específicos de tu organización.",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Propuesta Personalizada",
      description: "Diseño de estrategias a medida basadas en el diagnóstico, con objetivos claros y metodologías probadas.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Implementación Digital/IA",
      description: "Ejecución de la estrategia utilizando herramientas digitales avanzadas e inteligencia artificial para maximizar el impacto.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Medición con KPIs",
      description: "Monitoreo constante de resultados utilizando indicadores clave de rendimiento para asegurar el cumplimiento de objetivos.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "05",
      title: "Acompañamiento Continuo",
      description: "Soporte permanente para ajustes, mejoras y nuevos desafíos que puedan surgir en el proceso.",
      icon: <HandHeart className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: "Confianza",
      description: "Construimos relaciones sólidas basadas en la transparencia y honestidad en cada proyecto que desarrollamos."
    },
    {
      title: "Claridad",
      description: "Comunicamos de manera clara y directa, facilitando la comprensión y toma de decisiones estratégicas."
    },
    {
      title: "Compromiso",
      description: "Nos comprometemos al 100% con el éxito de cada proyecto, trabajando como aliados estratégicos."
    },
    {
      title: "Innovación",
      description: "Incorporamos tecnologías emergentes y metodologías innovadoras para crear soluciones de vanguardia."
    },
    {
      title: "Excelencia",
      description: "Buscamos la excelencia en cada detalle, superando las expectativas de nuestros clientes."
    },
    {
      title: "Impacto",
      description: "Enfocamos nuestro trabajo hacia la generación de impacto real y medible en las organizaciones."
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Fundación de IT ACTIVA",
      description: "Inicio de operaciones con enfoque en consultoría para gobiernos locales"
    },
    {
      year: "2018",
      title: "Expansión de Servicios",
      description: "Incorporación de estrategias digitales y comunicación política"
    },
    {
      year: "2020",
      title: "Transformación Digital",
      description: "Adaptación e innovación durante la pandemia con soluciones virtuales"
    },
    {
      year: "2022",
      title: "Integración de IA",
      description: "Pioneros en integrar inteligencia artificial en consultoría pública"
    },
    {
      year: "2024",
      title: "Líder del Sector",
      description: "Reconocimiento como consultora líder en comunicación y gestión pública"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <PageHero
          title="Sobre IT ACTIVA"
          description="Más de 6 años transformando la comunicación y gestión pública. Liderados por Ignacio Tonelli, especialista en comunicación política y gestión gubernamental."
          ctaText="Conocer Nuestros Servicios"
          ctaAction={() => {
            window.location.href = '/servicios';
          }}
        />

        {/* About Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="mb-8">
                <img 
                  src="/ACTIVÁ Logo (1).png" 
                  alt="IT ACTIVA Logo" 
                  className="h-20 w-auto mx-auto"
                />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 tracking-tight">
                Consultora en Comunicación y Gestión Pública
              </h2>
              
              <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-8"></div>
              
              <h3 className="text-2xl font-medium text-primary mb-12">IT ACTIVA</h3>


              {/* Descripción principal */}
              <div className="space-y-8 mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  IT Activa propone un trabajo colaborativo donde las definiciones se construyan en conjunto, 
                  con el objetivo de generar una dinámica de comunicación fluida, transparente y de alto impacto hacia la comunidad.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Proponemos que nuestros servicios desarrollen, impulsen y potencien las capacidades y condiciones de nuestros clientes, 
                  para consolidar una visión clara, de impacto positivo en las acciones y en la imagen que proyecta.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  La comunicación produce sentidos, transmite emociones y construye identidad. La gestión transforma la realidad. 
                  Juntas, desarrollan historias positivas en la comunidad.
                </p>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="bg-white border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Photo Section */}
                  <div className="lg:col-span-1 bg-gray-50 p-8 flex items-center justify-center">
                    <div className="relative">
                      <img
                        src="/foto perfil IT (1).jpg"
                        alt="Ignacio Tonelli"
                        className="w-64 h-80 object-cover object-center shadow-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-2 p-10">
                    <div className="mb-6">
                      <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">
                        Ignacio Tonelli
                      </h3>
                      
                      <div className="w-12 h-0.5 bg-gray-400 mb-4"></div>
                      
                      <p className="text-gray-600 font-medium text-lg mb-6">
                        Fundador y Director
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Soy Ignacio Tonelli, licenciado en Comunicación con más de 6 años de experiencia en consultoría y gestión pública. Me especializo en transformar la comunicación de gobiernos locales y organizaciones políticas a través de estrategias innovadoras y metodologías probadas.
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed mb-4">
                        He trabajado con 4 gobiernos locales, desarrollando proyectos de comunicación estratégica, gestión de políticas públicas y modernización institucional. Mi experiencia abarca desde ONGs hasta gobiernos municipales y provinciales.
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Como consultor y docente, me enfoco en crear soluciones personalizadas que generen impacto real y medible en las comunidades. Creo firmemente en el poder transformador de la comunicación y la gestión pública para construir sociedades más transparentes y eficientes.
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Especialidades</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["Comunicación Política", "Gestión Pública", "Estrategias Digitales", "Políticas Públicas", "Consultoría", "Docencia"].map((specialty, index) => (
                          <div 
                            key={index}
                            className="text-sm text-gray-600 border-l-2 border-gray-300 pl-3 py-1"
                          >
                            {specialty}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CV Download Button */}
                    <div className="pt-6 border-t border-gray-200">
                      <Button 
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm font-medium"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = '/cv-ignacio-tonelli.pdf';
                          link.download = 'CV-Ignacio-Tonelli.pdf';
                          link.click();
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar CV
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Steps Section */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-light text-foreground mb-4 tracking-tight">
                  Nuestro Proceso para el Éxito
                </h3>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Un enfoque estructurado de 5 etapas que garantiza resultados medibles y sostenibles
                </p>
              </div>

              <div className="space-y-8">
                {successSteps.map((step, index) => (
                  <div key={index} className="bg-white border border-gray-200 shadow-sm">
                    <div className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-gray-600">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <span className="text-sm font-medium text-gray-500 mr-4">{step.number}</span>
                            <h4 className="text-xl font-medium text-gray-900">{step.title}</h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cierre / invitación */}
            <div className="max-w-4xl mx-auto mt-20">
              <div className="bg-primary text-white p-12 text-center rounded-xl">
                <h3 className="text-2xl font-medium mb-4">¿Listo para transformar tu organización?</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Con nuestra experiencia y metodología probada, estamos preparados para ayudarte a alcanzar tus objetivos de comunicación y gestión pública.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.href = '/contacto'}
                    className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Solicitar Consulta
                  </button>
                  <button 
                    onClick={() => window.location.href = '/servicios'}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
                  >
                    Ver Nuestros Servicios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;