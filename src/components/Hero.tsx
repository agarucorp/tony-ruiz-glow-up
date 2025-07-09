

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import colorService from "@/assets/color-service.jpg";
import straighteningService from "@/assets/straightening-service.jpg";

interface HeroProps {
  language: "es" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    es: {
      title: "Especialistas en",
      subtitle: "coloración y alisados",
      cta: "Reservar Cita",
      scroll: "Descubrir más"
    },
    en: {
      title: "Specialists in",
      subtitle: "coloring and straightening",
      cta: "Book Appointment",
      scroll: "Discover more"
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#servicios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {/* Image 1 - Large, top right */}
        <div className="absolute top-10 right-10 w-80 h-96 animate-[float_6s_ease-in-out_infinite] opacity-20">
          <img
            src={heroImage}
            alt="Hair styling"
            className="w-full h-full object-cover rounded-2xl shadow-elegant"
          />
          <div className="absolute inset-0 bg-gradient-overlay rounded-2xl"></div>
        </div>
        
        {/* Image 2 - Medium, left side */}
        <div className="absolute top-32 left-16 w-56 h-72 animate-[float_8s_ease-in-out_infinite_1s] opacity-15">
          <img
            src={colorService}
            alt="Hair coloring"
            className="w-full h-full object-cover rounded-2xl shadow-elegant"
          />
          <div className="absolute inset-0 bg-gradient-overlay rounded-2xl"></div>
        </div>
        
        {/* Image 3 - Small, bottom right */}
        <div className="absolute bottom-20 right-32 w-40 h-52 animate-[float_7s_ease-in-out_infinite_2s] opacity-10">
          <img
            src={straighteningService}
            alt="Hair treatment"
            className="w-full h-full object-cover rounded-2xl shadow-elegant"
          />
          <div className="absolute inset-0 bg-gradient-overlay rounded-2xl"></div>
        </div>
        
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-16 leading-[0.9] tracking-tight">
            {content[language].title}
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              {content[language].subtitle}
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-20">
            <Button 
              size="lg" 
              variant="gold"
              className="text-xl px-12 py-6 rounded-full font-semibold tracking-wide hover:scale-105 transition-all duration-500"
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              {content[language].cta}
            </Button>
            
            <Button 
              size="lg" 
              variant="gold-outline"
              className="text-xl px-12 py-6 rounded-full font-semibold tracking-wide hover:scale-105 transition-all duration-500 group"
              onClick={scrollToServices}
            >
              {content[language].scroll}
              <ArrowDown className="w-6 h-6 ml-3 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

