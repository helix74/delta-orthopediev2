import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import OfferSection from "@/components/sections/OfferSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { strapiService } from "@/lib/strapi";

/**
 * Page d'Accueil - Delta Orthopédie
 * Structure One-Page avec sections à ancres pour smooth scroll
 * UX optimisée pour patients en situation de vulnérabilité
 */
export default async function HomePage() {
  // Récupération des données depuis Strapi
  const [hero, expertises, testimonials, faqs, partners, contact] = await Promise.allSettled([
    strapiService.getHero(),
    strapiService.getExpertises(),
    strapiService.getTestimonials(),
    strapiService.getFAQs(),
    strapiService.getPartners(),
    strapiService.getContact()
  ]);

  return (
    <>
      {/* Section Hero - Accueil */}
      <HeroSection 
        data={hero.status === 'fulfilled' ? hero.value : null}
      />

      {/* Section Partenaires - Preuve sociale */}
      <PartnersSection 
        data={partners.status === 'fulfilled' ? partners.value : []}
      />

      {/* Section Réassurance - Éliminer les barrières psychologiques */}
      <ReassuranceSection />

      {/* Section Solutions/Offre */}
      <OfferSection />

      {/* Section Processus - Parcours patient étape par étape */}
      <ProcessSection />

      {/* Section Notre Expertise */}
      <ExpertiseSection 
        data={expertises.status === 'fulfilled' ? expertises.value : []}
      />

      {/* Section Témoignages - Preuve émotionnelle */}
      <TestimonialsSection 
        data={testimonials.status === 'fulfilled' ? testimonials.value : []}
      />

      {/* Section FAQ - Répondre aux inquiétudes */}
      <FAQSection 
        data={faqs.status === 'fulfilled' ? faqs.value : []}
      />

      {/* Section Contact - Appel à l'action final */}
      <ContactSection 
        data={contact.status === 'fulfilled' ? contact.value : null}
      />
    </>
  );
}
