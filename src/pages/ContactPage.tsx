import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });

    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dirección",
      content: "Buenos Aires, Argentina",
      details: "Atendemos clientes en toda América Latina"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+54 11 1234 5678",
      details: "Lun - Vie: 9:00 - 18:00 hs"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@itactiva.com",
      details: "Respuesta en 24 horas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios de Atención",
      content: "Lun - Vie: 9:00 - 18:00",
      details: "Sáb: 9:00 - 14:00"
    }
  ];

  const services = [
    "Gestión Pública y Gobiernos Locales",
    "Comunicación para Gobiernos Locales",
    "Comunicación Política y Análisis", 
    "Discurso e Imagen Pública",
    "Estrategias Digitales con IA",
    "Storytelling y Storydoing",
    "Otro (especificar en mensaje)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <PageHero
          title="Contacto"
          subtitle="Nos interesa ayudarte"
          description="Déjanos tus datos para conectar juntos y transformar tu gestión pública. Estamos aquí para escucharte y diseñar la solución perfecta para tu organización."
          ctaText="Enviar Mensaje"
          ctaAction={() => {
            document.querySelector('#contact-form')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        />

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
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
                      Completa el formulario y nos pondremos en contacto contigo
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">Nombre *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre completo"
                            className="border-border focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                            className="border-border focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">Organización</label>
                          <Input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Municipio, gobierno, empresa"
                            className="border-border focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">Teléfono</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+54 11 1234 5678"
                            className="border-border focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Servicio de Interés</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                        >
                          <option value="">Selecciona un servicio</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Mensaje *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Cuéntanos sobre tu proyecto, desafíos actuales y objetivos..."
                          className="border-border focus:ring-primary/20 focus:border-primary resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 shadow-medium"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Consulta
                      </Button>
                    </form>
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
                      <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-border bg-card">
                        <CardContent className="p-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-soft">
                              {info.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {info.title}
                              </h4>
                              <p className="text-foreground font-medium mb-1">
                                {info.content}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                {info.details}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* FAQ Quick Access */}
                <Card className="bg-muted/50 border border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Preguntas Frecuentes</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground">¿Cuánto tiempo toma obtener una respuesta?</p>
                        <p className="text-muted-foreground">Respondemos todas las consultas en un máximo de 24 horas.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">¿Ofrecen consultas gratuitas?</p>
                        <p className="text-muted-foreground">Sí, la primera consulta diagnóstica es completamente gratuita.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">¿Trabajan con organizaciones de toda América Latina?</p>
                        <p className="text-muted-foreground">Sí, atendemos clientes en toda la región, tanto presencial como virtualmente.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action */}
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold mb-3">
                      ¿Necesitas una respuesta inmediata?
                    </h4>
                    <p className="mb-4 opacity-90 text-sm">
                      Para consultas urgentes, contáctanos directamente por teléfono
                    </p>
                    <Button 
                      variant="secondary"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +54 11 1234 5678
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;