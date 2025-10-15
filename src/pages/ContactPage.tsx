import { MapPin, Phone, Mail, MessageCircle, Share2, Linkedin, Facebook, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dirección",
      content: "Coronel Pringles, Buenos Aires",
      details: "Atendemos clientes en toda Argentina",
      action: null
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+54 9 11 2286 6851",
      details: "Lun - Vie: 9:00 - 18:00 hs",
      action: "tel:+5491122866851"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+54 9 11 2286 6851",
      details: "Respuesta inmediata",
      action: "https://wa.me/5491122866851"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "agenciacc.activa@gmail.com",
      details: "Respuesta en 24 horas",
      action: "mailto:agenciacc.activa@gmail.com"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "RRSS",
      content: "",
      details: "",
      action: null,
      social: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <PageHero
          title="Contacto"
          subtitle=""
          description="Dejanos tu mensaje y diseñemos juntos la estrategia que tu proyecto necesita. Estamos listos para acompañarte en cada paso."
          ctaText="Completar Formulario"
          backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop&crop=center&auto=format"
          ctaAction={() => {
            document.querySelector('#contact-form')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        />

        {/* Contact Form & Info */}
        <section id="contact-form" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="bg-primary-foreground rounded-2xl shadow-large border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Envíanos tu consulta
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Completa nuestro formulario de contacto y nos pondremos en contacto contigo en las próximas 24 horas.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-primary/5 rounded-lg p-8 border-2 border-primary/20">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        ¿Qué información necesitamos?
                      </h3>
                      <ul className="space-y-3 text-base text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-3 text-xl">•</span>
                          <span>Tu nombre y datos de contacto</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 text-xl">•</span>
                          <span>Organización o empresa</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 text-xl">•</span>
                          <span>Servicio de interés</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 text-xl">•</span>
                          <span>Descripción de tu proyecto o necesidad</span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center py-4">
                      <Button
                        size="lg"
                        onClick={() => window.open('https://forms.gle/sZVV2sJtLSSpkNrK8', '_blank')}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-large px-8 py-6 text-lg font-semibold"
                      >
                        Completar Formulario de Contacto
                      </Button>
                      <p className="text-sm text-muted-foreground mt-3">
                        Se abrirá en una nueva pestaña
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        ¿Por qué elegirnos?
                      </h4>
                      <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Respuesta garantizada en 24 horas
                        </div>
                        <div className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Soluciones personalizadas a tu medida
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Información de Contacto
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {contactInfo.map((info, index) => (
                      <Card 
                        key={index} 
                        className={`p-6 hover:shadow-medium transition-all duration-300 border border-border bg-card rounded-xl ${
                          info.action ? 'cursor-pointer hover:border-primary/50' : ''
                        }`}
                        onClick={() => {
                          if (info.action) {
                            window.open(info.action, '_blank');
                          }
                        }}
                      >
                        <CardContent className="p-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-soft">
                              {info.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-1">
                                {info.title}
                              </h4>
                              {info.social ? (
                                <div className="flex flex-col space-y-2 mt-2">
                                  <a 
                                    href="https://www.facebook.com/profile.php?id=61582131955493" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                                  >
                                    <Facebook className="w-4 h-4 mr-2 flex-shrink-0" />
                                    <span>IT ACTIVA | Consultora</span>
                                  </a>
                                  <a 
                                    href="https://www.linkedin.com/company/106146305/admin/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                                  >
                                    <Linkedin className="w-4 h-4 mr-2 flex-shrink-0" />
                                    <span>IT ACTIVA | Consultora</span>
                                  </a>
                                  <a 
                                    href="https://www.instagram.com/itactiva/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                                  >
                                    <Instagram className="w-4 h-4 mr-2 flex-shrink-0" />
                                    <span>@itactiva</span>
                                  </a>
                                </div>
                              ) : (
                                <>
                                  <p className="text-foreground font-medium mb-1">
                                    {info.content}
                                  </p>
                                  <p className="text-muted-foreground text-sm">
                                    {info.details}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* FAQ Quick Access */}
                <Card className="bg-muted/50 border border-border rounded-xl">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Preguntas Frecuentes</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground">¿Cuánto tiempo toma obtener una respuesta?</p>
                        <p className="text-muted-foreground">Respondemos todas las consultas en un máximo de 24 horas.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">¿Trabajan con organizaciones de toda América Latina?</p>
                        <p className="text-muted-foreground">Sí, atendemos clientes en toda la región, tanto presencial como virtualmente.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action */}
                <Card className="bg-primary text-primary-foreground border-0 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold mb-3">
                      ¿Necesitas una respuesta inmediata?
                    </h4>
                    <p className="mb-4 opacity-90 text-sm">
                      Para consultas urgentes, contáctanos directamente
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button 
                        variant="secondary"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        onClick={() => window.open('tel:+5491122866851', '_self')}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Llamar
                      </Button>
                      <Button 
                        variant="secondary"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        onClick={() => window.open('https://wa.me/5491122866851', '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ContactPage;
