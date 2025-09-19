import { Card, CardContent } from '@/components/ui/card';
import { Search, FileText, Rocket, BarChart4, HandHeart } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      number: "01",
      title: "Diagnóstico Colaborativo",
      description: "Análisis profundo de la situación actual, identificando fortalezas, oportunidades y desafíos específicos de tu organización.",
      details: [
        "Análisis de contexto político y social",
        "Evaluación de canales de comunicación actuales",
        "Identificación de públicos objetivo",
        "Mapeo de stakeholders clave"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      number: "02", 
      title: "Propuesta Personalizada",
      description: "Diseño de estrategias a medida basadas en el diagnóstico, con objetivos claros y metodologías probadas.",
      details: [
        "Estrategia de comunicación integral",
        "Plan de acción detallado",
        "Cronograma de implementación",
        "Definición de KPIs y métricas"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "03",
      title: "Implementación Digital/IA",
      description: "Ejecución de la estrategia utilizando herramientas digitales avanzadas e inteligencia artificial para maximizar el impacto.",
      details: [
        "Desarrollo de contenidos estratégicos",
        "Implementación de herramientas digitales",
        "Automatización con IA",
        "Gestión de canales de comunicación"
      ]
    },
    {
      icon: <BarChart4 className="w-8 h-8" />,
      number: "04",
      title: "Medición con KPIs",
      description: "Monitoreo constante de resultados utilizando indicadores clave de rendimiento para asegurar el cumplimiento de objetivos.",
      details: [
        "Análisis de métricas de comunicación",
        "Informes de gestión periódicos",
        "Evaluación de impacto en audiencias",
        "Optimización continua de estrategias"
      ]
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      number: "05",
      title: "Acompañamiento Continuo",
      description: "Soporte permanente para ajustes, mejoras y nuevos desafíos que puedan surgir en el proceso.",
      details: [
        "Asesoramiento estratégico permanente",
        "Capacitación de equipos internos",
        "Adaptación a cambios del contexto",
        "Desarrollo de nuevas iniciativas"
      ]
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso estructurado de 5 etapas que garantiza resultados medibles 
            y sostenibles en el tiempo, adaptado a las necesidades específicas de cada proyecto.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className={`relative overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex items-center hover:shadow-medium transition-smooth`}>
              {/* Step Number Background */}
              <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} text-8xl font-bold text-secondary/20 z-0`}>
                {step.number}
              </div>
              
              <CardContent className="p-8 lg:w-1/2 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-accent font-bold text-lg mb-1">
                      Etapa {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Visual Element */}
              <div className="lg:w-1/2 p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-accent rounded-full flex items-center justify-center opacity-80">
                  <div className="text-6xl text-accent-foreground">
                    {step.icon}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 overflow-x-auto pb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center min-w-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-2 max-w-20">
                      {step.title.split(' ')[0]}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gradient-primary mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;