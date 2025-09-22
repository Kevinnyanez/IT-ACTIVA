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
    <section id="methodology" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso estructurado de 5 etapas que garantiza resultados medibles y sostenibles
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.slice(0, 3).map((step, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth rounded-xl border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-primary font-semibold text-base">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-base mb-4">
                  {step.description}
                </p>

                <ul className="space-y-1">
                  {step.details.slice(0, 2).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {steps.slice(3).map((step, index) => (
            <Card key={index + 3} className="bg-card hover:shadow-medium transition-smooth rounded-xl border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-primary font-semibold text-base">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-base mb-4">
                  {step.description}
                </p>

                <ul className="space-y-1">
                  {step.details.slice(0, 2).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compact Timeline */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-3 bg-muted/30 rounded-full px-6 py-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-6 h-0.5 bg-primary/30 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;