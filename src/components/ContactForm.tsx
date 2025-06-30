
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
    
    console.log('ContactForm: Starting form submission', formData);
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      console.log('ContactForm: Validation failed - missing required fields');
      toast({
        title: t('contact.form.validation.error'),
        description: t('contact.form.validation.requiredFields'),
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('ContactForm: Validation failed - invalid email format');
      toast({
        title: t('contact.form.validation.error'),
        description: t('contact.form.validation.emailFormat'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Try Netlify Forms first (if available)
      console.log('ContactForm: Attempting Netlify Forms submission');
      
      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'message': formData.message
        }).toString()
      });

      if (netlifyResponse.ok) {
        console.log('ContactForm: Netlify Forms submission successful');
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.message'),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        return;
      }
    } catch (error) {
      console.log('ContactForm: Netlify Forms not available, trying FormSubmit');
    }

    try {
      // Try FormSubmit.co as backup
      console.log('ContactForm: Attempting FormSubmit.co submission');
      
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', t('contact.form.emailSubject'));
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/info@alfareklama.ch', {
        method: 'POST',
        body: formDataToSend
      });

      console.log('ContactForm: FormSubmit.co response status:', response.status);
      
      if (response.ok || response.status === 200) {
        console.log('ContactForm: FormSubmit.co submission successful');
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.message'),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        return;
      }
    } catch (error) {
      console.error('ContactForm: FormSubmit.co failed:', error);
    }

    // Fallback to mailto
    console.log('ContactForm: Using mailto fallback');
    const subject = encodeURIComponent(t('contact.form.emailSubject'));
    const body = encodeURIComponent(
      `${t('contact.form.name')}: ${formData.name}\n` +
      `${t('contact.form.email')}: ${formData.email}\n` +
      `${t('contact.form.phone')}: ${formData.phone}\n\n` +
      `${t('contact.form.message')}:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:info@alfareklama.ch?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
    
    toast({
      title: "El. pašto programa atidaryta",
      description: "Išsiųskite žinutę iš savo el. pašto programos arba nukopijuokite duomenis rankiniu būdu.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
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
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          name="contact"
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          
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
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
