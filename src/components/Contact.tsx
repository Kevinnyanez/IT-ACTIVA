import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Share2, Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí normalmente enviarías los datos a tu backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
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
          {/* Contact Form */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitá tu propuesta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+54 9 11 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="gestion-publica">Gestión Pública y Gobiernos Locales</option>
                    <option value="comunicacion-gobiernos">Comunicación para Gobiernos Locales</option>
                    <option value="comunicacion-politica">Comunicación Política y Análisis</option>
                    <option value="discurso-imagen">Discurso e Imagen Pública</option>
                    <option value="consultoria-general">Consultoría General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto o desafío empresarial..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft"
                >
                  Enviar Consulta
                </Button>
              </form>
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
                              <div className="flex items-center text-muted-foreground text-sm">
                                <Facebook className="w-4 h-4 mr-2" />
                                Facebook
                              </div>
                              <a 
                                href="https://www.linkedin.com/company/106146305/admin/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                              >
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                              </a>
                              <div className="flex items-center text-muted-foreground text-sm">
                                <Instagram className="w-4 h-4 mr-2" />
                                Instagram
                              </div>
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