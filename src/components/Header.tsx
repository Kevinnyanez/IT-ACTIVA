import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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

  const services = [
    { name: 'Gestión Pública y Gobiernos Locales', href: '/servicios/gestion-publica' },
    { name: 'Comunicación para Gobiernos Locales', href: '/servicios/comunicacion-gobiernos' },
    { name: 'Comunicación Política y Campañas', href: '/servicios/comunicacion-politica-campanas' },
    { name: 'Plan Empresas y Organizaciones', href: '/servicios/empresas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {/* Inicio */}
              <li>
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Inicio
                </Link>
              </li>
              
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

              {/* Nosotros */}
              <li>
                <Link
                  to="/nosotros"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Nosotros
                </Link>
              </li>

              {/* Contacto */}
              <li>
                <Link
                  to="/contacto"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-soft"
            >
              <Link to="/contacto">
                Consultá acá
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
              {/* Inicio */}
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
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

              {/* Nosotros */}
              <Link
                to="/nosotros"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>

              {/* Contacto */}
              <Link
                to="/contacto"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contacto">
                    Consultá acá
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