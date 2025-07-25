import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import OfferSection from "@/components/sections/OfferSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Page d'Accueil - Delta Orthopédie
 * Structure One-Page avec sections à ancres pour smooth scroll
 * UX optimisée pour patients en situation de vulnérabilité
 */
export default function HomePage() {
  return (
    <>
      {/* Section Hero - Accueil */}
      <HeroSection />

      {/* Section Partenaires - Preuve sociale */}
      <PartnersSection />

      {/* Section Réassurance - Éliminer les barrières psychologiques */}
      <ReassuranceSection />

      {/* Section Solutions/Offre */}
      <OfferSection />

      {/* Section Processus - Parcours patient étape par étape */}
      <ProcessSection />

      {/* Section Notre Expertise */}
      <ExpertiseSection />

      {/* Section Témoignages - Preuve émotionnelle */}
      <TestimonialsSection />

      {/* Section FAQ - Répondre aux inquiétudes */}
      <FAQSection />

      {/* Section Contact - Appel à l'action final */}
      <ContactSection />
    </>
  );
}
