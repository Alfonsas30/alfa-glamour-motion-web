
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: "500+", label: t('about.stats.clients') },
    { icon: Award, number: "1000+", label: t('about.stats.projects') },
    { icon: Clock, number: "12+", label: t('about.stats.experience') },
    { icon: TrendingUp, number: "300%", label: t('about.stats.roi') }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {t('about.learnMore')}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-blue-600 rounded-xl border border-blue-500 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full w-fit">
                  <stat.icon className="h-6 w-6 text-blue-200" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
