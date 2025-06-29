
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('portfolio.projects.ecommerce.title'),
      category: t('portfolio.projects.ecommerce.category'),
      description: t('portfolio.projects.ecommerce.description'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "web"
    },
    {
      title: t('portfolio.projects.brandVideo.title'),
      category: t('portfolio.projects.brandVideo.category'),
      description: t('portfolio.projects.brandVideo.description'),
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      type: "video"
    },
    {
      title: t('portfolio.projects.instagram.title'),
      category: t('portfolio.projects.instagram.category'),
      description: t('portfolio.projects.instagram.description'),
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      type: "social"
    },
    {
      title: t('portfolio.projects.animation.title'),
      category: t('portfolio.projects.animation.category'),
      description: t('portfolio.projects.animation.description'),
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=400&fit=crop",
      type: "video"
    },
    {
      title: t('portfolio.projects.linkedin.title'),
      category: t('portfolio.projects.linkedin.category'),
      description: t('portfolio.projects.linkedin.description'),
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      type: "web"
    },
    {
      title: t('portfolio.projects.youtube.title'),
      category: t('portfolio.projects.youtube.category'),
      description: t('portfolio.projects.youtube.description'),
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
      type: "video"
    }
  ];

  const openYouTubeChannel = () => {
    window.open('https://www.youtube.com/@Alfonsas-ir-tiek', '_blank');
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('portfolio.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-blue-600 border-blue-500 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  {project.type === "video" ? (
                    <div className="bg-red-500/80 p-2 rounded-full">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="bg-blue-500/80 p-2 rounded-full">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-blue-200 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={openYouTubeChannel}
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-lg"
          >
            {t('portfolio.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};
