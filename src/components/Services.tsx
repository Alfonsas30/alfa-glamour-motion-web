
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Video, Megaphone, Palette, BarChart, Globe } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Internetinė reklama",
    description: "Google Ads, Facebook Ads, LinkedIn kampanijos su aukštu konversijos koeficientu"
  },
  {
    icon: Video,
    title: "Video gamyba",
    description: "Profesionalūs reklaminiai vaizdo įrašai, animacija ir motion graphics"
  },
  {
    icon: Megaphone,
    title: "Socialinių tinklų reklama",
    description: "Instagram, TikTok, YouTube kampanijos jūsų tikslinei auditorijai"
  },
  {
    icon: Palette,
    title: "Kūrybiniai sprendimai",
    description: "Unikalūs dizaino sprendimai, kurie išskiria jūsų prekės ženklą"
  },
  {
    icon: BarChart,
    title: "Analitika ir optimizavimas",
    description: "Duomenimis grindžiamas kampanijų valdymas ir nuolatinis tobulinimas"
  },
  {
    icon: Globe,
    title: "Svetainių kūrimas",
    description: "Modernus, greitai veikiantis ir SEO optimizuotas interneto svetainės"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mūsų <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Paslaugos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siūlome visapusiškas skaitmeninio marketingo paslaugas, 
            padėsiančias jūsų verslui pasiekti naują lygį
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed">
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
