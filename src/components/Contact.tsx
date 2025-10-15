import { MapPin, Phone, Mail, Share2, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {

  const contactInfo: Array<{
    icon: JSX.Element;
    title: string;
    content: string;
    social?: boolean;
  }> = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dirección",
      content: "Coronel Pringles\nBuenos Aires, Argentina"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+54 9 11 2286 6851"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "agenciacc.activa@gmail.com"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "RRSS",
      content: "",
      social: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para transformar tu proyecto? Agendá 
            y descubrí cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Card */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitá tu propuesta
              </CardTitle>
              <p className="text-muted-foreground">
                Completa nuestro formulario de contacto y nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  ¿Qué información necesitamos?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Tu nombre y datos de contacto
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Organización o empresa
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Servicio de interés
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Descripción de tu proyecto o necesidad
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => window.open('https://forms.gle/sZVV2sJtLSSpkNrK8', '_blank')}
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  Completar Formulario
                </button>
                <p className="text-xs text-muted-foreground mt-3">
                  Se abrirá en una nueva pestaña
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">
                  ¿Por qué elegirnos?
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Respuesta en 24 horas</p>
                  <p>✓ Soluciones personalizadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card hover:shadow-soft transition-smooth rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">
                            {info.title}
                          </h4>
                          {info.social ? (
                            <div className="flex flex-col space-y-2">
                              <a 
                                href="https://www.facebook.com/profile.php?id=61582131955493" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                              >
                                <Facebook className="w-4 h-4 mr-2" />
                                Facebook
                              </a>
                              <a 
                                href="https://www.linkedin.com/company/106146305/admin/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                              >
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                              </a>
                              <a 
                                href="https://www.instagram.com/itactiva/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                              >
                                <Instagram className="w-4 h-4 mr-2" />
                                Instagram
                              </a>
                            </div>
                          ) : (
                            <p className="text-muted-foreground text-sm whitespace-pre-line">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;