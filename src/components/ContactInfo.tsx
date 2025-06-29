
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
            <Phone className="h-5 w-5 text-blue-200" />
          </div>
          <div>
            <div className="text-white font-medium">{t('contact.info.phone')}</div>
            <div className="text-white">+375 44 416 66 78</div>
            <div className="text-blue-200 text-sm">{t('contact.info.phoneNote')}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
            <Mail className="h-5 w-5 text-blue-200" />
          </div>
          <div>
            <div className="text-white font-medium">{t('contact.info.email')}</div>
            <div className="text-white">info@alfareklama.ch</div>
            <div className="text-white">gmbhinvest333@gmail.com</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
            <Facebook className="h-5 w-5 text-blue-200" />
          </div>
          <div>
            <div className="text-white font-medium">{t('contact.info.facebook')}</div>
            <a 
              href="https://www.facebook.com/profile.php?id=61578020543147" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              {t('contact.info.facebookText')}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
            <MapPin className="h-5 w-5 text-blue-200" />
          </div>
          <div>
            <div className="text-white font-medium">{t('contact.info.address')}</div>
            <div className="text-white">{t('contact.info.addressText')}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-full">
            <Clock className="h-5 w-5 text-blue-200" />
          </div>
          <div>
            <div className="text-white font-medium">{t('contact.info.hours')}</div>
            <div className="text-white">{t('contact.info.hoursText')}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
