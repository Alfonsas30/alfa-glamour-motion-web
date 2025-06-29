
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Facebook } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Ačiū už žinutę! Susisieksime su jumis per 24 valandas.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCallRequest = () => {
    toast("Skambučio užklausa išsiųsta! Perskambinsime per 30 minučių.");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Susisiekite su <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">mumis</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Pasiruošę pradėti savo reklamos projektą? Susisiekite su mumis ir gaukite nemokamą konsultaciją
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Parašykite mums</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Jūsų vardas"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="El. paštas"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
                    />
                  </div>
                  <Input
                    name="phone"
                    placeholder="Telefono numeris"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
                  />
                  <Textarea
                    name="message"
                    placeholder="Papasakokite apie savo projektą..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
                  >
                    Siųsti žinutę
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Telefonas</div>
                    <div className="text-white">+375 44 416 66 78</div>
                    <div className="text-blue-200 text-sm">WhatsApp/Signal/Viber</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-white font-medium">El. paštas</div>
                    <div className="text-white">info@alfareklama.ch</div>
                    <div className="text-white">gmbhinvest333@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Facebook className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Facebook</div>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61578020543147" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      Aplankykite mūsų puslapį
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Adresas</div>
                    <div className="text-white">Šveicarija</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Darbo laikas</div>
                    <div className="text-white">Pr-Pn: 9:00-18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">Nemokama konsultacija</h3>
                <p className="text-white text-sm mb-4">
                  Gaukite profesionalų vertinimą savo reklamos strategijai
                </p>
                <Button 
                  size="sm" 
                  onClick={handleCallRequest}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Užsisakyti skambutį
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Facebook Page Plugin */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Sekite mus Facebook</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-4">
                <div 
                  className="fb-page" 
                  data-href="https://www.facebook.com/profile.php?id=61578020543147" 
                  data-tabs="timeline" 
                  data-width="300" 
                  data-height="200" 
                  data-small-header="false" 
                  data-adapt-container-width="true" 
                  data-hide-cover="false" 
                  data-show-facepile="true"
                >
                  <blockquote 
                    cite="https://www.facebook.com/profile.php?id=61578020543147" 
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/profile.php?id=61578020543147" target="_blank" rel="noopener noreferrer">
                      Alfa Reklama Facebook
                    </a>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Facebook SDK */}
      <div id="fb-root"></div>
      <script 
        async 
        defer 
        crossOrigin="anonymous" 
        src="https://connect.facebook.net/lt_LT/sdk.js#xfbml=1&version=v18.0"
      ></script>
    </section>
  );
};
