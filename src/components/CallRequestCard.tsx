
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
    
    console.log('CallRequestCard: Starting call request submission', formData);
    
    // Validate required fields
    if (!formData.email.trim() || !formData.phone.trim()) {
      console.log('CallRequestCard: Validation failed - missing required fields');
      toast({
        title: t('contact.callRequest.validation.error'),
        description: t('contact.callRequest.validation.requiredFields'),
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('CallRequestCard: Validation failed - invalid email format');
      toast({
        title: t('contact.callRequest.validation.error'),
        description: t('contact.callRequest.validation.emailFormat'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Try Netlify Forms first (if available)
      console.log('CallRequestCard: Attempting Netlify Forms submission');
      
      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'call-request',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'request': 'Prašau paskambinti'
        }).toString()
      });

      if (netlifyResponse.ok) {
        console.log('CallRequestCard: Netlify Forms submission successful');
        toast({
          title: t('contact.callRequest.success.title'),
          description: t('contact.callRequest.success.message'),
        });
        setFormData({ name: "", email: "", phone: "" });
        return;
      }
    } catch (error) {
      console.log('CallRequestCard: Netlify Forms not available, trying FormSubmit');
    }

    try {
      // Try FormSubmit.co as backup
      console.log('CallRequestCard: Attempting FormSubmit.co submission');
      
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('request', 'Prašau paskambinti');
      formDataToSend.append('_subject', t('contact.callRequest.emailSubject'));
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/info@alfareklama.ch', {
        method: 'POST',
        body: formDataToSend
      });

      console.log('CallRequestCard: FormSubmit.co response status:', response.status);
      
      if (response.ok || response.status === 200) {
        console.log('CallRequestCard: FormSubmit.co submission successful');
        toast({
          title: t('contact.callRequest.success.title'),
          description: t('contact.callRequest.success.message'),
        });
        setFormData({ name: "", email: "", phone: "" });
        return;
      }
    } catch (error) {
      console.error('CallRequestCard: FormSubmit.co failed:', error);
    }

    // Fallback to mailto
    console.log('CallRequestCard: Using mailto fallback');
    const subject = encodeURIComponent(t('contact.callRequest.emailSubject'));
    const body = encodeURIComponent(
      `${t('contact.callRequest.name')}: ${formData.name}\n` +
      `${t('contact.callRequest.email')}: ${formData.email}\n` +
      `${t('contact.callRequest.phone')}: ${formData.phone}\n\n` +
      `Prašau paskambinti.`
    );
    
    const mailtoUrl = `mailto:info@alfareklama.ch?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
    
    toast({
      title: "El. pašto programa atidaryta",
      description: "Išsiųskite žinutę iš savo el. pašto programos arba nukopijuokite duomenis rankiniu būdu.",
    });
    
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
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
        <form 
          onSubmit={handleSubmit} 
          className="space-y-4"
          name="call-request"
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="call-request" />
          
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
            {isSubmitting ? t('contact.callRequest.sending') : t('contact.callRequest.button')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
