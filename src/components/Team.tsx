import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Award, Users, Lightbulb, Download } from 'lucide-react';

const Team = () => {
  const leader = {
    name: "Ignacio Tonelli",
    role: "Fundador y Director",
    description: "SOY IGNACIO TONELLI, ME APASIONA LA COMUNICACIÓN Y LA GESTIÓN DE PROYECTOS EN EL ÁMBITO PÚBLICO COMO HERRAMIENTAS TRANSFORMADORAS DE LA REALIDAD. CREO EN EL TRABAJO EN EQUIPO Y EN LA BÚSQUEDA CONSTANTE DE SOLUCIONES A TRAVÉS DE ESTAS HERRAMIENTAS DE PLANIFICACIÓN Y GESTIÓN EN TODO TIPO DE ORGANIZACIONES. SOY LICENCIADO EN COMUNICACIÓN, CONSULTOR Y DOCENTE. DESDE HACE MÁS DE 6 AÑOS QUE ME DESEMPEÑO EN DIFERENTES ROLES TANTO EN ONGS COMO EN GOBIERNOS, EN GESTIÓN Y PLANEAMIENTO DE POLÍTICAS PÚBLICAS EN ÁREAS COMO COMUNICACIÓN, CONTENIDOS, EDUCACIÓN, TERRITORIO, ENTRE OTROS, DESARROLLANDO ALLÍ PROYECTOS DE GESTIÓN Y ACOMPAÑAMIENTO PARA DIFERENTES ORGANISMOS Y EN DIVERSAS TEMÁTICAS.",
    image: "/foto perfil IT (1).jpg",
    linkedin: "#",
    email: "ignacio@itactiva.com.ar",
    cvUrl: "/CV_Ignacio_Tonelli A cf.pdf", // URL del CV
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
      description: "Más de 6 años desempeñándose en diferentes roles tanto en ONGs como en gobiernos, en gestión y planeamiento de políticas públicas."
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
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Photo Section */}
              <div className="lg:col-span-1 bg-gray-50 p-8 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={leader.image}
                    alt="Ignacio Tonelli - Fundador y Director IT ACTIVA - Licenciado en Comunicación, Consultor en gestión pública y gobiernos locales"
                    loading="lazy"
                    width="256"
                    height="320"
                    className="w-64 h-80 object-cover object-center shadow-lg"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-2 p-10">
                <div className="mb-6">
                  <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">
                    {leader.name}
                  </h3>
                  
                  <div className="w-12 h-0.5 bg-gray-400 mb-4"></div>
                  
                  <p className="text-gray-600 font-medium text-lg mb-6">
                    {leader.role}
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {leader.description}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Especialidades</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {leader.specialties.map((specialty, index) => (
                      <div 
                        key={index}
                        className="text-sm text-gray-600 border-l-2 border-gray-300 pl-3 py-1"
                      >
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Contact & CV */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm font-medium"
                    onClick={() => {
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
          </div>
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
                
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {item.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed text-base">
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