
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-400 transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-blue-400 transition-colors">
              {t('nav.portfolio')}
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {t('nav.contact')}
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-white hover:text-blue-400 transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-white hover:text-blue-400 transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-blue-400 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-white hover:text-blue-400 transition-colors">
              {t('nav.portfolio')}
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
            >
              {t('nav.contact')}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
