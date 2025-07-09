import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  language: "es" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    es: {
      title: "Especialistas en",
      subtitle: "coloración y alisados",
      description: "Transformamos tu cabello con técnicas avanzadas y productos de lujo. Experimenta la excelencia en nuestro salón de autor.",
      cta: "Reservar Cita",
      scroll: "Descubrir más"
    },
    en: {
      title: "Specialists in",
      subtitle: "coloring and straightening",
      description: "We transform your hair with advanced techniques and luxury products. Experience excellence in our signature salon.",
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tony Ruiz Hair Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
            {content[language].title}
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              {content[language].subtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {content[language].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="gold"
              className="text-lg px-8 py-4 rounded-full"
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              {content[language].cta}
            </Button>
            
            <Button 
              size="lg" 
              variant="gold-outline"
              className="text-lg px-8 py-4 rounded-full"
              onClick={scrollToServices}
            >
              {content[language].scroll}
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;