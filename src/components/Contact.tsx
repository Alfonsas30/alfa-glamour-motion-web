
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { CallRequestCard } from "@/components/CallRequestCard";
import { FacebookSection } from "@/components/FacebookSection";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <ContactInfo />
            <CallRequestCard />
          </div>
        </div>

        <FacebookSection />
      </div>
    </section>
  );
};
