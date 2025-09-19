import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Users2, TrendingUp } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Sobre IT ACTIVA
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Somos una consultora especializada en comunicación y gestión pública, 
            liderada por Ignacio Tonelli. Trabajamos con gobiernos locales, 
            organizaciones políticas y empresas que buscan transformar su comunicación 
            y optimizar su gestión pública.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Nuestro enfoque combina estrategias de comunicación tradicionales con 
            herramientas digitales innovadoras, incluyendo inteligencia artificial, 
            para crear soluciones personalizadas que generen impacto real y medible.
          </p>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Misión</h3>
              <p className="text-muted-foreground">
                Impulsar la transformación comunicacional y la excelencia en la gestión pública 
                a través de estrategias innovadoras y personalizadas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visión</h3>
              <p className="text-muted-foreground">
                Ser la consultora de referencia en comunicación y gestión pública, 
                reconocida por nuestra capacidad de transformar realidades a través de la comunicación.
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
                    <h4 className="font-semibold text-foreground">Confianza</h4>
                    <p className="text-sm text-muted-foreground">
                      Construimos relaciones sólidas basadas en la transparencia y honestidad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Claridad</h4>
                    <p className="text-sm text-muted-foreground">
                      Comunicamos de manera clara y directa, facilitando la comprensión.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Compromiso</h4>
                    <p className="text-sm text-muted-foreground">
                      Nos comprometemos al 100% con el éxito de cada proyecto.
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