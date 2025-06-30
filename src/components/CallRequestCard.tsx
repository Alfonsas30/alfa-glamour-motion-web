
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export const CallRequestCard = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Klaida",
        description: "Prašome užpildyti el. pašto ir telefono laukus",
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
          description: "Jūsų skambučio užklausa sėkmingai išsiųsta. Susisieksime su jumis greitai!",
        });
        
        // Reset form after successful submission
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Klaida",
        description: "Nepavyko išsiųsti užklausos. Bandykite dar kartą.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* FormSubmit.co configuration fields */}
          <input type="hidden" name="_subject" value="Užsakytas skambutis" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.origin + "/?success=true"} />
          
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
            disabled={isSubmitting}
            className="bg-white text-purple-600 hover:bg-gray-100 w-full font-semibold"
          >
            {isSubmitting ? "Siunčiama..." : t('contact.callRequest.button')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
