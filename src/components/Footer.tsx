
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-blue-800 backdrop-blur-sm border-t border-blue-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                ALFA
              </span>
              <span className="text-white ml-1">REKLAMA</span>
            </div>
            <p className="text-white mb-6 max-w-md">
              Profesionalios internetinės ir video reklamos sprendimai jūsų verslo augimui. 
              Kuriame kampanijas, kurios atneša realius rezultatus.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61578020543147" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/norvaisasalfonsa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 p-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Paslaugos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors">Google Ads</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors">Video gamyba</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors">Dizainas</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors">Svetainių kūrimas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Kontaktai</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-white">+375 44 416 66 78</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-white">info@alfareklama.ch</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-white">gmbhinvest333@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 text-blue-300" />
                <a 
                  href="https://www.facebook.com/profile.php?id=61578020543147" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-pink-300" />
                <a 
                  href="https://www.instagram.com/norvaisasalfonsa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-300 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-white">
            © 2024 Alfa Reklama. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};
