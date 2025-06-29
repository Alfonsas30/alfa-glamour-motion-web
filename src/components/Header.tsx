
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  // Track active section with scroll spy
  const sectionIds = ['home', 'services', 'about', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Helper function to get button classes based on active state
  const getButtonClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `transition-all duration-200 px-3 py-2 rounded-md ${
      isActive 
        ? 'bg-blue-500 text-white font-medium' 
        : 'text-white hover:text-blue-400 hover:bg-white/10'
    }`;
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
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('home')} 
              className={getButtonClasses('home')}
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={getButtonClasses('services')}
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={getButtonClasses('about')}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={getButtonClasses('portfolio')}
            >
              {t('nav.portfolio')}
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`ml-2 ${
                activeSection === 'contact'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
              }`}
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
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === 'home'
                  ? 'bg-blue-500 text-white font-medium'
                  : 'text-white hover:text-blue-400 hover:bg-white/10'
              }`}
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === 'services'
                  ? 'bg-blue-500 text-white font-medium'
                  : 'text-white hover:text-blue-400 hover:bg-white/10'
              }`}
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === 'about'
                  ? 'bg-blue-500 text-white font-medium'
                  : 'text-white hover:text-blue-400 hover:bg-white/10'
              }`}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === 'portfolio'
                  ? 'bg-blue-500 text-white font-medium'
                  : 'text-white hover:text-blue-400 hover:bg-white/10'
              }`}
            >
              {t('nav.portfolio')}
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`w-full ${
                activeSection === 'contact'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
              }`}
            >
              {t('nav.contact')}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
