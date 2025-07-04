import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Zap, Scissors, Sparkles } from "lucide-react";
import colorService from "@/assets/color-service.jpg";
import straighteningService from "@/assets/straightening-service.jpg";
import cuttingService from "@/assets/cutting-service.jpg";
import treatmentService from "@/assets/treatment-service.jpg";

interface ServicesProps {
  language: "es" | "en";
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    es: {
      title: "Nuestros Servicios",
      subtitle: "Excelencia en cada detalle",
      services: [
        {
          title: "Color",
          description: "Transforma tu cabello con lo mejor en coloración.",
          details: "Utilizamos INOA de L'Oréal, nuestra avanzada tecnología sin amoníaco que asegura un color intenso y sin daño, respetando tu cuero cabelludo y dejando tu cabello increíblemente suave y brillante. Además, contamos con Shades EQ de Redken, el gloss capilar perfecto para un brillo espectacular y un color vibrante, para así crear un color mantra.",
          icon: Palette,
          image: colorService
        },
        {
          title: "Alisados",
          description: "Logra un cabello liso, sedoso y libre de frizz con nuestros alisados profesionales sin formol.",
          details: "Tecnología avanzada para un resultado duradero sin dañar la fibra capilar ni comprometer tu salud.",
          icon: Zap,
          image: straighteningService
        },
        {
          title: "Cortes",
          description: "Creamos cortes actuales y personalizados según tu estilo y tipo de rostro.",
          details: "Desde looks clásicos hasta las últimas tendencias, garantizamos un acabado impecable que realza tu imagen.",
          icon: Scissors,
          image: cuttingService
        },
        {
          title: "Tratamientos",
          description: "Recupera la salud y vitalidad de tu cabello con nuestros tratamientos nutritivos y reparadores.",
          details: "Hidratación profunda, reconstrucción capilar y cuidado intensivo para fortalecer y proteger cada hebra.",
          icon: Sparkles,
          image: treatmentService
        }
      ]
    },
    en: {
      title: "Our Services",
      subtitle: "Excellence in every detail",
      services: [
        {
          title: "Color",
          description: "Transform your hair with the best in coloring.",
          details: "We use L'Oréal INOA, our advanced ammonia-free technology that ensures intense color without damage, respecting your scalp and leaving your hair incredibly soft and shiny. Plus, we feature Redken Shades EQ, the perfect hair gloss for spectacular shine and vibrant color.",
          icon: Palette,
          image: colorService
        },
        {
          title: "Straightening",
          description: "Achieve smooth, silky, frizz-free hair with our professional formaldehyde-free straightening.",
          details: "Advanced technology for lasting results without damaging the hair fiber or compromising your health.",
          icon: Zap,
          image: straighteningService
        },
        {
          title: "Cuts",
          description: "We create current and personalized cuts according to your style and face type.",
          details: "From classic looks to the latest trends, we guarantee an impeccable finish that enhances your image.",
          icon: Scissors,
          image: cuttingService
        },
        {
          title: "Treatments",
          description: "Restore your hair's health and vitality with our nourishing and repairing treatments.",
          details: "Deep hydration, hair reconstruction and intensive care to strengthen and protect every strand.",
          icon: Sparkles,
          image: treatmentService
        }
      ]
    }
  };

  return (
    <section id="servicios" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {content[language].services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden bg-dark-lighter border-dark-border hover:border-primary/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-dark/60 group-hover:bg-gradient-dark/40 transition-all duration-500"></div>
                
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-dark" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {service.details}
                </p>
                
                <Button 
                  variant="gold-outline"
                  className="w-full"
                  onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {language === "es" ? "Consultar" : "Inquire"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;