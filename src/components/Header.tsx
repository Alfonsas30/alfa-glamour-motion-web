
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              ALFA
            </span>
            <span className="text-white ml-1">REKLAMA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors">
              Pradžia
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-400 transition-colors">
              Paslaugos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors">
              Apie mus
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-blue-400 transition-colors">
              Projektai
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Kontaktai
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-white hover:text-blue-400 transition-colors">
              Pradžia
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-white hover:text-blue-400 transition-colors">
              Paslaugos
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-blue-400 transition-colors">
              Apie mus
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-white hover:text-blue-400 transition-colors">
              Projektai
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
            >
              Kontaktai
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
