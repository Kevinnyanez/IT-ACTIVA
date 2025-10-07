import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Users, Lightbulb, Shield, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Enfoque",
      description: "Nos especializamos en gestión pública y comunicación política, garantizando expertise profundo en cada proyecto."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compromiso con Resultados",
      description: "Nos comprometemos a entregar resultados medibles que impacten positivamente en la gestión y la ciudadanía."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Acompañamiento Continuo",
      description: "Brindamos seguimiento y soporte durante todo el proceso de implementación y más allá de la entrega inicial."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Experiencia",
      description: "Más de una década trabajando en gobiernos locales y gestión pública en diferentes dimensiones."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos distinguimos por nuestra experiencia, metodología y compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth group rounded-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-smooth">
                  {reason.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
