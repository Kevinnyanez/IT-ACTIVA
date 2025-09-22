import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Globe, Users2, TrendingUp, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const AboutPage = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Años de Experiencia"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      number: "100+",
      label: "Proyectos Realizados"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "30+",
      label: "Gobiernos Asesorados"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Satisfacción del Cliente"
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
          description="Somos una consultora especializada en comunicación y gestión pública, liderada por Ignacio Tonelli, con más de una década transformando organizaciones."
          ctaText="Conocer Nuestros Servicios"
          ctaAction={() => {
            window.location.href = '/servicios';
          }}
        />

        {/* About Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  IT ACTIVA nació de la visión de transformar la comunicación en el sector público. 
                  Trabajamos con gobiernos locales, organizaciones políticas y empresas que buscan 
                  optimizar su gestión pública y fortalecer su comunicación estratégica.
                </p>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Nuestro enfoque combina metodologías tradicionales de consultoría con 
                  herramientas digitales innovadoras, incluyendo inteligencia artificial, 
                  para crear soluciones personalizadas que generen impacto real y medible.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-muted/50 rounded-xl">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-muted/50 rounded-2xl p-8 h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-primary-foreground font-bold text-2xl">IA</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Consultora Especializada</h3>
                    <p className="text-muted-foreground text-lg">Transformando la gestión pública</p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {stats.slice(2, 4).map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-background rounded-lg">
                          <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Objectives */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Misión, Visión y Objetivos
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Los pilares fundamentales que definen nuestra identidad y dirección estratégica
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-card border border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-6">
                    <span className="text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Misión</h3>
                  <p className="text-muted-foreground leading-relaxed text-center text-lg">
                    Ofrecer servicios acorde a la necesidad de un mundo en constante dinámica de cada institución, 
                    empresa u organización con la intención de mejorar su desempeño y fortalecer la relación con 
                    la comunidad en el ámbito que se desarrolle.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-card border border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-6">
                    <span className="text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Visión</h3>
                  <p className="text-muted-foreground leading-relaxed text-center text-lg">
                    Adaptarse a un universo en constante cambio en el desarrollo de la comunicación en convergencia 
                    con las distintas herramientas que acompañan la presencia activa en el universo digital presente y futuro.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-card border border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-6">
                    <span className="text-2xl font-bold">O</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Objetivo</h3>
                  <p className="text-muted-foreground leading-relaxed text-center text-lg">
                    Ser una fuente confiable de asesoramiento, consultoría y propositiva en relación a las demandas 
                    del cliente en temas de comunicación, gestión de gobierno y relaciones con la comunidad.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Explanation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  ¿Qué es la misión de una empresa?
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  La misión de una empresa declara el propósito, responde a la pregunta ¿por qué existe la empresa? 
                  Generalmente incluye una descripción general de la organización, su función y objetivos.
                </p>
              </div>
              
              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  ¿Qué es la visión de una empresa?
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  La visión de una empresa describe hacia dónde se dirige la empresa, responde a la pregunta 
                  ¿qué será de la empresa en el futuro?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestros Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y definen nuestra cultura organizacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-border bg-card">
                  <CardContent className="p-0">
                    <div className="flex items-start mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <h4 className="font-semibold text-foreground text-lg">{value.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestra Trayectoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un recorrido de crecimiento, innovación y compromiso con la excelencia
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="p-6 bg-card border border-border hover:shadow-medium transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="text-sm font-semibold text-primary mb-2">{milestone.year}</div>
                          <h4 className="font-bold text-foreground mb-2">{milestone.title}</h4>
                          <p className="text-muted-foreground text-base">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                ¿Listo para transformar tu organización?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Conoce cómo podemos ayudarte a optimizar tu comunicación y gestión pública
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link to="/contacto">
                    Solicita una Consulta
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/servicios">
                    Ver Nuestros Servicios
                  </Link>
                </Button>
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