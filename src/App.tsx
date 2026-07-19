import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <ServiceArea />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
