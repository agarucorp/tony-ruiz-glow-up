import { Card } from "@/components/ui/card";
import { Award, Users, Sparkles, Heart, Gem, Handshake, Star, Brush } from "lucide-react";

interface AboutProps {
  language: "es" | "en";
}

const About = ({ language }: AboutProps) => {
  const content = {
    es: {
      title: "Acerca de Nosotros",
      subtitle: "Pasión por la excelencia capilar",
      description: "Respaldados por una marcada trayectoria y una dedicación continua a la evolución de las técnicas, nuestro salón de autor ofrece un enfoque exclusivo y personalizado. Colaboramos en la definición del color, corte o tratamiento perfecto, asegurando una mejora sofisticada que realmente refleja el estilo y la esencia de un trabajo con sello propio.",
      features: [
        {
          icon: Gem,
          title: "Experiencia Profesional",
          description: "Años de experiencia perfeccionando técnicas avanzadas"
        },
        {
          icon: Handshake,
          title: "Atención Personalizada",
          description: "Cada cliente recibe un tratamiento único y exclusivo"
        },
        {
          icon: Star,
          title: "Productos Premium",
          description: "Solo utilizamos las mejores marcas del mercado"
        },
        {
          icon: Brush,
          title: "Pasión por el Arte",
          description: "Creamos belleza con dedicación y amor por nuestro trabajo"
        }
      ]
    },
    en: {
      title: "About Us",
      subtitle: "Passion for hair excellence",
      description: "Backed by a marked trajectory and continuous dedication to the evolution of techniques, our signature salon offers an exclusive and personalized approach. We collaborate in defining the perfect color, cut or treatment, ensuring a sophisticated improvement that truly reflects the style and essence of work with our own seal.",
      features: [
        {
          icon: Award,
          title: "Professional Experience",
          description: "Years of experience perfecting advanced techniques"
        },
        {
          icon: Users,
          title: "Personalized Attention",
          description: "Each client receives unique and exclusive treatment"
        },
        {
          icon: Sparkles,
          title: "Premium Products",
          description: "We only use the best brands on the market"
        },
        {
          icon: Heart,
          title: "Passion for Art",
          description: "We create beauty with dedication and love for our work"
        }
      ]
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          <div className="animate-slide-in text-center max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {content[language].title}
            </h2>
            <h3 className="text-xl text-primary mb-8 font-medium">
              {content[language].subtitle}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-12">
              {content[language].description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {content[language].features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-8 flex flex-col items-center text-center bg-gradient-gold/20 border-gold shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-gold shadow-gold animate-glow">
                    <feature.icon className="w-8 h-8 text-dark" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h4>
                  <p className="text-base text-foreground/80">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;