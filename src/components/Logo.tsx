import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'header' | 'footer' | 'default';
  className?: string;
  linkTo?: string;
}

const Logo = ({ variant = 'default', className = '', linkTo = '/' }: LogoProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'header':
        return 'h-16 sm:h-20 lg:h-24 w-auto max-w-[400px]';
      case 'footer':
        return 'h-14 w-auto max-w-[240px]';
      default:
        return 'h-14 w-auto max-w-[240px]';
    }
  };

  const logoElement = (
    <img 
      src="/ACTIVÁ Logo (1).png" 
      alt="IT ACTIVA Logo" 
      className={`${getVariantClasses()} ${className}`}
      style={{
        objectFit: 'contain',
        maxHeight: '100%'
      }}
    />
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex items-center">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
};

export default Logo;
