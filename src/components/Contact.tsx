import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  language: "es" | "en";
}

const Contact = ({ language }: ContactProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const content = {
    es: {
      title: "Contáctanos",
      subtitle: "Reserva tu cita y transforma tu look",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        phone: "Teléfono",
        service: "Servicio de interés",
        message: "Mensaje",
        submit: "Enviar Consulta"
      },
      services: [
        "Coloración",
        "Alisado",
        "Corte y peinado",
        "Tratamiento capilar",
        "Mechas y highlights",
        "Consultoría de imagen"
      ],
      locations: [
        {
          title: "Buenos Aires",
          address: "Av. Corrientes 1234, CABA",
          phone: "+54 11 1234-5678",
          whatsapp: "5491123456789",
          hours: "Lun-Sáb: 9:00-20:00"
        },
        {
          title: "Punta del Este",
          address: "Av. Roosevelt 567, Punta del Este",
          phone: "+598 42 123-456",
          whatsapp: "59842123456",
          hours: "Lun-Sáb: 10:00-19:00"
        }
      ],
      success: "¡Mensaje enviado! Te contactaremos pronto.",
      error: "Error al enviar el mensaje. Intenta nuevamente."
    },
    en: {
      title: "Contact Us",
      subtitle: "Book your appointment and transform your look",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Phone",
        service: "Service of interest",
        message: "Message",
        submit: "Send Inquiry"
      },
      services: [
        "Coloring",
        "Straightening",
        "Cut and styling",
        "Hair treatment",
        "Highlights and balayage",
        "Image consultation"
      ],
      locations: [
        {
          title: "Buenos Aires",
          address: "Av. Corrientes 1234, CABA",
          phone: "+54 11 1234-5678",
          whatsapp: "5491123456789",
          hours: "Mon-Sat: 9:00-20:00"
        },
        {
          title: "Punta del Este",
          address: "Av. Roosevelt 567, Punta del Este",
          phone: "+598 42 123-456",
          whatsapp: "59842123456",
          hours: "Mon-Sat: 10:00-19:00"
        }
      ],
      success: "Message sent! We'll contact you soon.",
      error: "Error sending message. Please try again."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: content[language].success,
        description: language === "es" 
          ? "Nos pondremos en contacto contigo en las próximas 24 horas."
          : "We'll get in touch with you within the next 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>



        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 bg-dark-lighter border-dark-border">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                {language === "es" ? "Envíanos tu consulta" : "Send us your inquiry"}
              </h3>
              <p className="text-foreground/70">
                {language === "es" 
                  ? "Completa el formulario y nos pondremos en contacto contigo en las próximas 24 horas."
                  : "Fill out the form and we'll get in touch with you within the next 24 hours."
                }
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder={content[language].form.name}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-dark border-dark-border focus:border-primary w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={content[language].form.email}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-dark border-dark-border focus:border-primary w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  placeholder={content[language].form.phone}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-dark border-dark-border focus:border-primary w-full"
                  required
                />
              </div>
              
              <div>
                <Select 
                  value={formData.service} 
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="bg-dark border-dark-border focus:border-primary w-full">
                    <SelectValue placeholder={content[language].form.service} />
                  </SelectTrigger>
                  <SelectContent className="bg-dark border-dark-border">
                    {content[language].services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder={content[language].form.message}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-dark border-dark-border focus:border-primary h-32 resize-none w-full"
                  required
                />
              </div>
              
              <Button type="submit" variant="gold" className="w-full" size="lg">
                {content[language].form.submit}
              </Button>
            </form>
          </Card>

          {/* Enhanced Booking Information */}
          <Card className="p-6 bg-dark-lighter border-dark-border h-fit">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {language === "es" ? "Horarios de Atención" : "Opening Hours"}
              </h3>
              <p className="text-sm text-foreground/70">
                {language === "es" 
                  ? "Visítanos en cualquiera de nuestras ubicaciones"
                  : "Visit us at any of our locations"
                }
              </p>
            </div>
            
            <div className="space-y-6">
              {content[language].locations.map((location) => (
                <div key={location.title} className="border border-dark-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-3 text-center">
                    {location.title}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-foreground/80">
                      <MapPin className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground/80">
                      <Clock className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="gold-outline"
                    size="sm"
                    onClick={() => openWhatsApp(location.whatsapp)}
                    className="w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp {location.title}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;