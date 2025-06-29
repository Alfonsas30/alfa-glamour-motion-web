
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                ALFA
              </span>
              <span className="text-white ml-1">REKLAMA</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Profesionalios internetinės ir video reklamos sprendimai jūsų verslo augimui. 
              Kuriame kampanijas, kurios atneša realius rezultatus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Paslaugos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Google Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Video gamyba</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Dizainas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Svetainių kūrimas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Kontaktai</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+41 XX XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@alfareklama.ch</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Alfa Reklama. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};
