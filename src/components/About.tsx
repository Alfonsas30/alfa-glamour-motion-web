
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, number: "500+", label: "Patenkintų klientų" },
  { icon: Award, number: "1000+", label: "Sėkmingų projektų" },
  { icon: Clock, number: "5+", label: "Metų patirtis" },
  { icon: TrendingUp, number: "300%", label: "Vidutinis ROI augimas" }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apie <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Alfa Reklama</span>
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              Esame specializuota skaitmeninio marketingo agentūra su daugiau nei 5 metų patirtimi. 
              Mūsų komanda kuria išskirtinę internetinę ir video reklamą, kuri ne tik patraukia dėmesį, 
              bet ir generuoja realius verslo rezultatus.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Mes tikime, kad kiekvienas verslas yra unikalus, todėl kiekvienam klientui kuriame 
              individualų sprendimą, atitinkantį jų tikslus ir biudžetą.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Sužinoti daugiau
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
