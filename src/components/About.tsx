import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Users2, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Años de Experiencia"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      number: "200+",
      label: "Proyectos Exitosos"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "300%",
      label: "ROI Promedio"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre ConsulPro
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos una consultora líder especializada en transformación empresarial 
              y estrategia de negocio. Con más de 15 años de experiencia, hemos ayudado 
              a empresas de todos los tamaños a alcanzar sus objetivos y superar sus desafíos.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro enfoque combina metodologías probadas con innovación tecnológica, 
              garantizando resultados medibles y sostenibles en el tiempo. Creemos en 
              la colaboración estrecha con nuestros clientes para crear soluciones 
              personalizadas que generen valor real.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Misión</h3>
                <p className="text-muted-foreground">
                  Impulsar el crecimiento y la excelencia operacional de nuestros clientes 
                  a través de consultoría estratégica de clase mundial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visión</h3>
                <p className="text-muted-foreground">
                  Ser reconocidos como la consultora líder en transformación empresarial 
                  en América Latina, creando valor sostenible para nuestros clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-medium transition-smooth">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Nuestros Valores
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Excelencia</h4>
                    <p className="text-sm text-muted-foreground">
                      Buscamos la perfección en cada proyecto que emprendemos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Integridad</h4>
                    <p className="text-sm text-muted-foreground">
                      Actuamos con transparencia y honestidad en todas nuestras relaciones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovación</h4>
                    <p className="text-sm text-muted-foreground">
                      Adoptamos las mejores prácticas y tecnologías emergentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;