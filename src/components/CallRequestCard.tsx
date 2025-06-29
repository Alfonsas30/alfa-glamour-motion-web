
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CallRequestCard = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `Užsakytas skambutis:%0D%0A%0D%0AVardas: ${encodeURIComponent(formData.name)}%0D%0AEl. paštas: ${encodeURIComponent(formData.email)}%0D%0ATelefonas: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AProšome paskambinti!`;
    
    const emailSubject = encodeURIComponent("Užsakytas skambutis");
    
    // Open email client with pre-filled data
    window.location.href = `mailto:gmbhinvest333@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Reset form after sending
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-purple-500">
      <CardHeader>
        <CardTitle className="text-white text-xl flex items-center gap-2">
          <Phone className="h-5 w-5" />
          {t('contact.callRequest.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder={t('contact.callRequest.name')}
            value={formData.name}
            onChange={handleChange}
            className="bg-purple-700 border-purple-500 text-white placeholder:text-purple-200"
          />
          <Input
            name="email"
            type="email"
            placeholder={t('contact.callRequest.email')}
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-purple-700 border-purple-500 text-white placeholder:text-purple-200"
          />
          <Input
            name="phone"
            placeholder={t('contact.callRequest.phone')}
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-purple-700 border-purple-500 text-white placeholder:text-purple-200"
          />
          <Button 
            type="submit" 
            className="bg-white text-purple-600 hover:bg-gray-100 w-full font-semibold"
          >
            {t('contact.callRequest.button')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
