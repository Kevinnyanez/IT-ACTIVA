import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Estrategia Empresarial",
    "Transformación Organizacional", 
    "Innovación y Digitalización",
    "Optimización de Procesos",
    "Consultoría Financiera",
    "Liderazgo Ejecutivo"
  ];

  const quickLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Equipo", href: "#team" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              ConsulPro
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Transformamos empresas a través de consultoría estratégica 
              de clase mundial, impulsando el crecimiento y la excelencia operacional.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span className="text-background/80 text-sm">
                  Av. Reforma 123, CDMX
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span className="text-background/80 text-sm">
                  +52 55 1234 5678
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span className="text-background/80 text-sm">
                  info@consulpro.com
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-background/80 hover:text-accent transition-smooth text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#services')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-smooth text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Mantente Conectado</h4>
            <p className="text-background/80 text-sm mb-4">
              Suscríbete a nuestro newsletter para recibir insights y 
              tendencias de consultoría empresarial.
            </p>
            
            <div className="flex space-x-1 mb-6">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-md text-background placeholder-background/60 text-sm focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-r-md hover:bg-accent/90 transition-smooth text-sm">
                Suscribir
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/80 hover:bg-accent hover:text-accent-foreground transition-smooth"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © {currentYear} ConsulPro. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-smooth">
                Política de Privacidad
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-smooth">
                Términos de Servicio
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;