import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import About from '@/components/About';
import Methodology from '@/components/Methodology';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Process />
        <About />
        <Methodology />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
