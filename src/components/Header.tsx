import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const services = [
    { name: 'Gestión Pública y Gobiernos Locales', href: '/servicios/gestion-publica' },
    { name: 'Comunicación para Gobiernos Locales', href: '/servicios/comunicacion-gobiernos' },
    { name: 'Comunicación Política y Análisis', href: '/servicios/comunicacion-politica' },
    { name: 'Discurso e Imagen Pública', href: '/servicios/discurso-imagen' },
    { name: 'Plan Empresas y Organizaciones', href: '/servicios/empresas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/ACTIVÁ Logo (1).png" 
                alt="IT ACTIVA Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
              {/* Services Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Servicios
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-secondary/50 hover:text-primary transition-smooth"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-soft"
            >
              <Link to="/contacto">
                Consulta Gratuita
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services in mobile */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Servicios:</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth ml-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contacto">
                    Consulta Gratuita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;