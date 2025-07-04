import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  return (
    <div className="min-h-screen bg-dark">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
};

export default Index;
