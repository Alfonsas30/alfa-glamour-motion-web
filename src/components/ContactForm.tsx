
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

// Utility function to sanitize input for email
const sanitizeForEmail = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .trim()
    .slice(0, 500); // Limit length
};

export const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Prašome užpildyti visus privaloma laukus');
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
      phone: sanitizeForEmail(formData.phone),
      message: sanitizeForEmail(formData.message)
    };
    
    // Create email body with sanitized form data
    const emailBody = `Sveiki,%0D%0A%0D%0AVardas: ${encodeURIComponent(sanitizedData.name)}%0D%0AEl. paštas: ${encodeURIComponent(sanitizedData.email)}%0D%0ATelefonas: ${encodeURIComponent(sanitizedData.phone)}%0D%0A%0D%0AŽinutė:%0D%0A${encodeURIComponent(sanitizedData.message)}%0D%0A%0D%0AAčiū!`;
    
    const emailSubject = encodeURIComponent("Kontaktinės formos užklausa");
    
    // Open email client with pre-filled data
    window.location.href = `mailto:gmbhinvest333@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Reset form after sending
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Apply input length limits
    let maxLength = 100;
    if (name === 'message') maxLength = 1000;
    if (name === 'email') maxLength = 100;
    if (name === 'phone') maxLength = 20;
    
    const limitedValue = value.slice(0, maxLength);
    
    setFormData(prev => ({
      ...prev,
      [name]: limitedValue
    }));
  };

  return (
    <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white text-2xl">{t('contact.form.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder={t('contact.form.name')}
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
            />
            <Input
              name="email"
              type="email"
              placeholder={t('contact.form.email')}
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={100}
              className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
            />
          </div>
          <Input
            name="phone"
            placeholder={t('contact.form.phone')}
            value={formData.phone}
            onChange={handleChange}
            maxLength={20}
            className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
          />
          <Textarea
            name="message"
            placeholder={t('contact.form.message')}
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            maxLength={1000}
            className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
          />
          <Button 
            type="submit" 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
          >
            {t('contact.form.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
