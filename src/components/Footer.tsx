import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Gestión Pública y Gobiernos Locales", href: "/servicios/gestion-publica" },
    { name: "Comunicación para Gobiernos Locales", href: "/servicios/comunicacion-gobiernos" }, 
    { name: "Comunicación Política y Campañas", href: "/servicios/comunicacion-politica-campanas" },
    { name: "Plan Empresas y Organizaciones", href: "/servicios/empresas" }
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/106146305/admin/", name: "LinkedIn - IT ACTIVA | Consultora" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="bg-white p-2 rounded-lg inline-block">
                <Logo variant="footer" />
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Consultora de Comunicación y Gestión Pública. 
              Transformamos la realidad a través de estrategias innovadoras y personalizadas.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span className="text-background/80 text-sm">
                  Coronel Pringles, Buenos Aires
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span className="text-background/80 text-sm">
                  +54 9 11 2286 6851
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span className="text-background/80 text-sm">
                  agenciacc.activa@gmail.com
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
                    href={service.href}
                    className="text-background/80 hover:text-accent transition-smooth text-sm"
                  >
                    {service.name}
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
              tendencias de comunicación y gestión pública.
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
              © {currentYear} IT ACTIVA. Todos los derechos reservados.
            </div>
          </div>
          
          {/* Appy Studios Credit */}
          <div className="mt-4 pt-4 border-t border-background/10">
            <div className="text-center">
              <p className="text-background/50 text-xs">
                Sitio web desarrollado por{' '}
                <a 
                  href="https://www.instagram.com/appystudiosweb/?hl=es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-smooth font-medium"
                >
                  Appy Studios
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;