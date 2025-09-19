import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Elena Martínez",
      role: "CEO, TechCorp Solutions",
      company: "TechCorp Solutions",
      content: "ConsulPro transformó completamente nuestra organización. Su enfoque estratégico y metodología probada nos ayudó a aumentar nuestra eficiencia en un 40% en solo 6 meses.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Miguel Fernández",
      role: "Director General, InnovaGroup",
      company: "InnovaGroup",
      content: "La experiencia con ConsulPro fue excepcional. Su equipo nos guió através de una transformación digital compleja con resultados que superaron nuestras expectativas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Laura Jiménez",
      role: "Fundadora, StartupXYZ",
      company: "StartupXYZ",
      content: "Como startup, necesitábamos orientación estratégica clara. ConsulPro nos proporcionó las herramientas y conocimientos necesarios para escalar nuestro negocio exitosamente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Conoce sus experiencias trabajando con ConsulPro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Calificación Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Clientes que Repiten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;