
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Klaida",
        description: "Prašome užpildyti visus privaloma laukus",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Klaida",
        description: "Prašome įvesti teisingą el. pašto adresą",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/el/fuwaci', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "Sėkmė!",
          description: "Jūsų žinutė sėkmingai išsiųsta. Susisieksime su jumis greitai!",
        });
        
        // Reset form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Klaida",
        description: "Nepavyko išsiųsti žinutės. Bandykite dar kartą.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* FormSubmit.co configuration fields */}
          <input type="hidden" name="_subject" value="Kontaktinės formos užklausa" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.origin + "/?success=true"} />
          
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
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
          >
            {isSubmitting ? "Siunčiama..." : t('contact.form.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
