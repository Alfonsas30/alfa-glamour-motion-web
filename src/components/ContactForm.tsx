
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `Sveiki,%0D%0A%0D%0AVardas: ${encodeURIComponent(formData.name)}%0D%0AEl. paštas: ${encodeURIComponent(formData.email)}%0D%0ATelefonas: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AŽinutė:%0D%0A${encodeURIComponent(formData.message)}%0D%0A%0D%0AAčiū!`;
    
    const emailSubject = encodeURIComponent("Kontaktinės formos užklausa");
    
    // Open email client with pre-filled data
    window.location.href = `mailto:gmbhinvest333@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Reset form after sending
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Parašykite mums</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Jūsų vardas"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
            />
            <Input
              name="email"
              type="email"
              placeholder="El. paštas"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
            />
          </div>
          <Input
            name="phone"
            placeholder="Telefono numeris"
            value={formData.phone}
            onChange={handleChange}
            className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
          />
          <Textarea
            name="message"
            placeholder="Papasakokite apie savo projektą..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
          />
          <Button 
            type="submit" 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
          >
            Siųsti žinutę
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
