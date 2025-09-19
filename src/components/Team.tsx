import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, Award, Users, Lightbulb } from 'lucide-react';

const Team = () => {
  const leader = {
    name: "Ignacio Tonelli",
    role: "Fundador y Director",
    description: "Especialista en comunicación política y gestión pública con más de 10 años de experiencia asesorando gobiernos locales y organizaciones políticas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    email: "ignacio@itactiva.com",
    specialties: [
      "Comunicación Política",
      "Gestión Pública", 
      "Estrategias Digitales",
      "Inteligencia Artificial"
    ]
  };

  const expertise = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experiencia Comprobada",
      description: "Más de 10 años asesorando gobiernos locales y organizaciones políticas en estrategias de comunicación y gestión pública."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enfoque Colaborativo", 
      description: "Trabajamos de manera integral con equipos de gobierno, construyendo capacidades internas y generando autonomía."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Incorporamos las últimas tecnologías, incluyendo inteligencia artificial, para optimizar procesos y resultados."
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Liderazgo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IT ACTIVA está liderada por un profesional con amplia experiencia 
            en comunicación política y gestión pública, respaldado por un equipo 
            de especialistas en diferentes áreas.
          </p>
        </div>

        {/* Leader Profile */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card hover:shadow-large transition-smooth">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Photo */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover shadow-medium"
                    />
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 hover:opacity-20 transition-smooth"></div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {leader.name}
                  </h3>
                  
                  <p className="text-accent font-semibold text-xl mb-4">
                    {leader.role}
                  </p>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {leader.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex space-x-4">
                    <a
                      href={leader.linkedin}
                      className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-smooth"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground hover:scale-110 transition-smooth"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expertise Areas */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Nuestro Enfoque
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos experiencia, metodología y tecnología para entregar 
            resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground mx-auto mb-6">
                  {item.icon}
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Querés conocer más sobre nuestro enfoque?
              </h3>
              <p className="mb-6 opacity-90">
                Conversemos sobre cómo podemos ayudarte a transformar 
                tu comunicación y optimizar tu gestión.
              </p>
              <button 
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-smooth"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Solicitar Reunión
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;