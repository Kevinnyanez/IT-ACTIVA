import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Award, Users, Lightbulb, Download } from 'lucide-react';

const Team = () => {
  const leader = {
    name: "Ignacio Tonelli",
    role: "Fundador y Director",
    description: "SOY IGNACIO TONELLI, ME APASIONA LA COMUNICACIÓN Y LA GESTIÓN DE PROYECTOS EN EL ÁMBITO PÚBLICO COMO HERRAMIENTAS TRANSFORMADORAS DE LA REALIDAD. CREO EN EL TRABAJO EN EQUIPO Y EN LA BÚSQUEDA CONSTANTE DE SOLUCIONES A TRAVÉS DE ESTAS HERRAMIENTAS DE PLANIFICACIÓN Y GESTIÓN EN TODO TIPO DE ORGANIZACIONES. SOY LICENCIADO EN COMUNICACIÓN, CONSULTOR Y DOCENTE. DESDE HACE MÁS DE 15 AÑOS QUE ME DESEMPEÑO EN DIFERENTES ROLES TANTO EN ONGS COMO EN GOBIERNOS, EN GESTIÓN Y PLANEAMIENTO DE POLÍTICAS PÚBLICAS EN ÁREAS COMO COMUNICACIÓN, CONTENIDOS, EDUCACIÓN, TERRITORIO, ENTRE OTROS, DESARROLLANDO ALLÍ PROYECTOS DE GESTIÓN Y ACOMPAÑAMIENTO PARA DIFERENTES ORGANISMOS Y EN DIVERSAS TEMÁTICAS.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    email: "ignacio@itactiva.com",
    cvUrl: "/cv-ignacio-tonelli.pdf", // URL del CV
    specialties: [
      "Comunicación Política",
      "Gestión Pública", 
      "Estrategias Digitales",
      "Políticas Públicas",
      "Consultoría",
      "Docencia"
    ]
  };

  const expertise = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experiencia Comprobada",
      description: "Más de 15 años desempeñándose en diferentes roles tanto en ONGs como en gobiernos, en gestión y planeamiento de políticas públicas."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enfoque Multidisciplinario", 
      description: "Licenciado en Comunicación, Consultor y Docente con experiencia en comunicación, contenidos, educación y territorio."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Transformación de Realidades",
      description: "Apasionado por la comunicación y gestión de proyectos como herramientas transformadoras, con búsqueda constante de soluciones."
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
                  
                  <p className="text-muted-foreground text-xl mb-6 leading-relaxed">
                    {leader.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-lg">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-base font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact & CV */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
                    
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        // Crear un enlace temporal para descargar el CV
                        const link = document.createElement('a');
                        link.href = leader.cvUrl;
                        link.download = 'CV-Ignacio-Tonelli.pdf';
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar CV
                    </Button>
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
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;