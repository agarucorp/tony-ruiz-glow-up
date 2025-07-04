import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";
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
      social: "Síguenos en redes sociales",
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
      social: "Follow us on social media",
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-dark-lighter border-dark-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    placeholder={content[language].form.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-dark border-dark-border focus:border-primary"
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
                    className="bg-dark border-dark-border focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="phone"
                    placeholder={content[language].form.phone}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-dark border-dark-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="service"
                    placeholder={content[language].form.service}
                    value={formData.service}
                    onChange={handleInputChange}
                    className="bg-dark border-dark-border focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder={content[language].form.message}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-dark border-dark-border focus:border-primary h-32 resize-none"
                  required
                />
              </div>
              
              <Button type="submit" variant="gold" className="w-full" size="lg">
                {content[language].form.submit}
              </Button>
            </form>
          </Card>

          {/* Location & Contact Info */}
          <div className="space-y-8">
            {content[language].locations.map((location) => (
              <Card key={location.title} className="p-6 bg-dark-lighter border-dark-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-4">
                  {location.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-foreground/80">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center text-foreground/80">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center text-foreground/80">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <span>{location.hours}</span>
                  </div>
                </div>
                
                <Button
                  variant="gold-outline"
                  onClick={() => openWhatsApp(location.whatsapp)}
                  className="w-full"
                >
                  WhatsApp {location.title}
                </Button>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="p-6 bg-dark-lighter border-dark-border">
              <h3 className="font-semibold text-foreground mb-4">
                {content[language].social}
              </h3>
              
              <div className="flex space-x-4">
                <Button
                  variant="elegant"
                  size="icon"
                  onClick={() => window.open("https://instagram.com/tonyruizhair", "_blank")}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="elegant"
                  size="icon"
                  onClick={() => window.open("https://facebook.com/tonyruizhair", "_blank")}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="elegant"
                  size="icon"
                  onClick={() => window.open("mailto:info@tonyruizhair.com", "_blank")}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;