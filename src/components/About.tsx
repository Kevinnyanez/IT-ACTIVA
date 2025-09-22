const About = () => {

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 tracking-tight">
            Consultora en Comunicación y Gestión Pública
          </h2>
          
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-8"></div>
          
          <h3 className="text-2xl font-medium text-primary mb-12">IT ACTIVA</h3>

          {/* Descripción principal con mejor diseño */}
          <div className="space-y-8 mb-16">
            <div className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                IT Activa propone un trabajo colaborativo donde las definiciones se construyan en conjunto, 
                con el objetivo de generar una dinámica de comunicación fluida, transparente y de alto impacto hacia la comunidad.
              </p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Proponemos que nuestros servicios desarrollen, impulsen y potencien las capacidades y condiciones de nuestros clientes, 
                para consolidar una visión clara, de impacto positivo en las acciones y en la imagen que proyecta.
              </p>
            </div>
            
            <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                La comunicación produce sentidos, transmite emociones y construye identidad. La gestión transforma la realidad. 
                Juntas, desarrollan historias positivas en la comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;