import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = {
    es: [
      { name: "Inicio", href: "#inicio" },
      { name: "Servicios", href: "#servicios" },
      { name: "Nosotros", href: "#nosotros" },
      { name: "Contacto", href: "#contacto" },
    ],
    en: [
      { name: "Home", href: "#inicio" },
      { name: "Services", href: "#servicios" },
      { name: "About", href: "#nosotros" },
      { name: "Contact", href: "#contacto" },
    ],
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logotr.svg" alt="Tony Ruiz Hair Studio Logo" className="h-7 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="elegant"
              size="sm"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="text-xs"
            >
              <Globe className="w-3 h-3 mr-1" />
              {language.toUpperCase()}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-b border-dark-border animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems[language].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;