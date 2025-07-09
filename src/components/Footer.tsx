import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  language: "es" | "en";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    es: {
      design: `© Copyright, ${new Date().getFullYear()} | AgaruCorp Design`
    },
    en: {
      design: `© Copyright, ${new Date().getFullYear()} | AgaruCorp Design`
    }
  };

  return (
    <footer className="bg-dark-lighter border-t border-dark-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons */}
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

          {/* Design Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground/70">
              {content[language].design}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 