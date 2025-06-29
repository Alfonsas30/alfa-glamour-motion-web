
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
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

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Susisiekite su <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">mumis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pasiruošę pradėti savo reklamos projektą? Susisiekite su mumis ir gaukite nemokamą konsultaciją
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700/30 backdrop-blur-sm">
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
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="El. paštas"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    name="phone"
                    placeholder="Telefono numeris"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Papasakokite apie savo projektą..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
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
            <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Telefonas</div>
                    <div className="text-gray-300">+41 XX XXX XX XX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">El. paštas</div>
                    <div className="text-gray-300">info@alfareklama.ch</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Adresas</div>
                    <div className="text-gray-300">Šveicarija</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Darbo laikas</div>
                    <div className="text-gray-300">Pr-Pn: 9:00-18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">Nemokama konsultacija</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Gaukite profesionalų vertinimą savo reklamos strategijai
                </p>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Užsisakyti skambutį
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
