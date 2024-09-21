import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import AppointmentForm from "./components/AppointmentForm";
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <>
      
      <div className="max-w-7xl mx-auto pt-1 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        
        <div className="text-center mt-16">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            ¿Deseas Agendar?
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Realiza tu solicitud de cita
            <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                completando este formulario
              </span>
          </h2>
        </div>

        <div className="min-h-screen bg-transparent flex items-center justify-center">
          <AppointmentForm />
        </div>

      </div>
      
    </>
  );
};

export default App;