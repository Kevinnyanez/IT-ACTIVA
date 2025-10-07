const About = () => {

  return (
    <section id="about" className="py-20 bg-background relative">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            <strong>Consultora en Comunicación y Gestión Pública</strong>
          </h2>
          
          <h3 className="text-xl font-medium text-primary mb-8">IT ACTIVA</h3>

          {/* Descripción principal simplificada */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              IT Activa propone un trabajo colaborativo donde las definiciones se construyan en conjunto, 
              con el objetivo de generar una dinámica de comunicación fluida, transparente y de alto impacto hacia la comunidad.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Proponemos que nuestros servicios desarrollen, impulsen y potencien las capacidades y condiciones de nuestros clientes, 
              para consolidar una visión clara, de impacto positivo en las acciones y en la imagen que proyecta.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              La comunicación produce sentidos, transmite emociones y construye identidad. La gestión transforma la realidad. 
              Juntas, desarrollan historias positivas en la comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;