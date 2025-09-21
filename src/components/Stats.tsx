import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, TrendingUp, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Gobiernos Locales Asesorados",
      description: "Municipios y gobiernos provinciales"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "200+",
      label: "Proyectos Implementados",
      description: "Programas y políticas públicas"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Tasa de Satisfacción",
      description: "Clientes satisfechos con nuestros servicios"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Años de Experiencia",
      description: "En consultoría y gestión pública"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestra Trayectoria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cifras que respaldan nuestro compromiso con la excelencia en consultoría
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth text-center p-6 group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {stat.label}
                </h3>
                <p className="text-base text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
