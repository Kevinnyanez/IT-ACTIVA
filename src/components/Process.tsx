import { Card, CardContent } from '@/components/ui/card';
import { Search, Lightbulb, Play, BarChart3 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Diagnóstico",
      number: "01",
      description: "Analizamos la situación actual, identificamos fortalezas, debilidades y oportunidades de mejora en tu gestión."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Estrategia",
      number: "02", 
      description: "Diseñamos un plan de acción personalizado con objetivos claros y estrategias específicas para tu contexto."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Implementación",
      number: "03",
      description: "Ejecutamos las estrategias diseñadas con acompañamiento continuo y ajustes según sea necesario."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Evaluación",
      number: "04",
      description: "Medimos resultados, analizamos el impacto y proponemos mejoras continuas para optimizar la gestión."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Metodología
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card hover:shadow-medium transition-smooth text-center p-6 group h-full rounded-xl">
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
