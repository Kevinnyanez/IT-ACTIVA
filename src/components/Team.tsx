import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ana García",
      role: "CEO & Founding Partner",
      description: "MBA de Harvard con 20 años de experiencia en consultoría estratégica. Especialista en transformación organizacional.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "ana.garcia@consulpro.com"
    },
    {
      name: "Carlos Rodriguez",
      role: "Director de Operaciones",
      description: "Ingeniero Industrial con expertise en optimización de procesos y Lean Six Sigma. Más de 15 años de experiencia.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "carlos.rodriguez@consulpro.com"
    },
    {
      name: "María López",
      role: "Directora de Innovación",
      description: "PhD en Administración con especialización en transformación digital e innovación empresarial.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "maria.lopez@consulpro.com"
    },
    {
      name: "Roberto Silva",
      role: "Director Financiero",
      description: "CPA con MBA en Finanzas. Experto en análisis financiero y planificación estratégica empresarial.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "roberto.silva@consulpro.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales altamente calificados con décadas de experiencia 
            combinada en consultoría empresarial y transformación organizacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-smooth"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;