
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Utility function to sanitize input for email
const sanitizeForEmail = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .trim()
    .slice(0, 100); // Limit length
};

export const CallRequestCard = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email.trim() || !formData.phone.trim()) {
      alert('Prašome užpildyti el. pašto ir telefono laukus');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Prašome įvesti teisingą el. pašto adresą');
      return;
    }
    
    // Sanitize form data
    const sanitizedData = {
      name: sanitizeForEmail(formData.name),
      email: sanitizeForEmail(formData.email),
      phone: sanitizeForEmail(formData.phone)
    };
    
    // Create email body with sanitized form data
    const emailBody = `Užsakytas skambutis:%0D%0A%0D%0AVardas: ${encodeURIComponent(sanitizedData.name)}%0D%0AEl. paštas: ${encodeURIComponent(sanitizedData.email)}%0D%0ATelefonas: ${encodeURIComponent(sanitizedData.phone)}%0D%0A%0D%0AProšome paskambinti!`;
    
    const emailSubject = encodeURIComponent("Užsakytas skambutis");
    
    // Open email client with pre-filled data
    window.location.href = `mailto:gmbhinvest333@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Reset form after sending
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Apply input length limits
    let maxLength = 100;
    if (name === 'phone') maxLength = 20;
    
    const limitedValue = value.slice(0, maxLength);
    
    setFormData(prev => ({
      ...prev,
      [name]: limitedValue
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
            maxLength={100}
            className="bg-purple-700 border-purple-500 text-white placeholder:text-purple-200"
          />
          <Input
            name="email"
            type="email"
            placeholder={t('contact.callRequest.email')}
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={100}
            className="bg-purple-700 border-purple-500 text-white placeholder:text-purple-200"
          />
          <Input
            name="phone"
            placeholder={t('contact.callRequest.phone')}
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={20}
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
