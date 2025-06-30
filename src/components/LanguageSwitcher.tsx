
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: 'lt', name: 'Lietuvių', flag: 'LT', bgColor: 'bg-yellow-400' },
  { code: 'en', name: 'English', flag: 'US', bgColor: 'bg-blue-600' },
  { code: 'ru', name: 'Русский', flag: 'RU', bgColor: 'bg-red-600' },
  { code: 'de', name: 'Deutsch', flag: 'DE', bgColor: 'bg-gray-800' }
];

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'lt' | 'en' | 'ru' | 'de');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="text-white hover:text-blue-400 hover:bg-white/10 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline flex items-center gap-2">
          <span className={`${currentLanguage?.bgColor} text-white text-xs font-bold px-1.5 py-0.5 rounded`}>
            {currentLanguage?.flag}
          </span>
          {currentLanguage?.name}
        </span>
        <span className="sm:hidden">
          <span className={`${currentLanguage?.bgColor} text-white text-xs font-bold px-1.5 py-0.5 rounded`}>
            {currentLanguage?.flag}
          </span>
        </span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-blue-800 border border-blue-600 rounded-lg shadow-lg py-2 min-w-[150px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-blue-700 transition-colors flex items-center gap-2 ${
                language === lang.code ? 'bg-blue-700 text-white' : 'text-white'
              }`}
            >
              <span className={`${lang.bgColor} text-white text-xs font-bold px-1.5 py-0.5 rounded`}>
                {lang.flag}
              </span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
