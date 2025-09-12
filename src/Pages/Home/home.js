import AboutSection from './AboutSection/about-section';
import Hero1 from './Hero1/hero1';
import ServiceSection from './ServicesSection/services-section';



function Home() {
  return (
    <div className="Home">
      <Hero1/>
      <ServiceSection/>
      <AboutSection/>
    </div>
  );
}

export default Home;