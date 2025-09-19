import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Lightbulb, BarChart, Target, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Estrategia Empresarial",
      description: "Desarrollamos planes estratégicos integrales que impulsan el crecimiento y la competitividad de tu organización.",
      features: ["Análisis de mercado", "Planificación estratégica", "Modelos de negocio"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Transformación Organizacional",
      description: "Guiamos procesos de cambio organizacional para mejorar la eficiencia y la cultura empresarial.",
      features: ["Gestión del cambio", "Desarrollo organizacional", "Cultura empresarial"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación y Digitalización",
      description: "Implementamos soluciones innovadoras y procesos de transformación digital.",
      features: ["Transformación digital", "Innovación de procesos", "Tecnología aplicada"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Optimización de Procesos",
      description: "Analizamos y optimizamos procesos operativos para maximizar la eficiencia.",
      features: ["Mapeo de procesos", "Lean Six Sigma", "Automatización"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Consultoría Financiera",
      description: "Asesoramiento especializado en gestión financiera y análisis de inversiones.",
      features: ["Planificación financiera", "Análisis de rentabilidad", "Control de gestión"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Liderazgo Ejecutivo",
      description: "Desarrollo de capacidades de liderazgo y coaching ejecutivo personalizado.",
      features: ["Coaching ejecutivo", "Desarrollo de líderes", "Habilidades directivas"]
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
            Ofrecemos soluciones integrales de consultoría empresarial diseñadas 
            para impulsar el crecimiento y la excelencia operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;