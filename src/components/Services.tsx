
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Video, Megaphone, Palette, BarChart, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t('services.internetAds.title'),
      description: t('services.internetAds.description')
    },
    {
      icon: Video,
      title: t('services.videoProduction.title'),
      description: t('services.videoProduction.description')
    },
    {
      icon: Megaphone,
      title: t('services.socialMedia.title'),
      description: t('services.socialMedia.description')
    },
    {
      icon: Palette,
      title: t('services.creative.title'),
      description: t('services.creative.description')
    },
    {
      icon: BarChart,
      title: t('services.analytics.title'),
      description: t('services.analytics.description')
    },
    {
      icon: Globe,
      title: t('services.websites.title'),
      description: t('services.websites.description')
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-blue-600 border-blue-500 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-blue-200" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
