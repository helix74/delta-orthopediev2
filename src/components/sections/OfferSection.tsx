"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faWrench, 
  faShield,
  faPersonWalkingWithCane,
  faHandHoldingMedical,
  faStar,
  faBaby,
  faShoePrints,
  faPrint,
  faBone,
  faBandAid,
  faMicroscope,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

/**
 * OfferSection - Section des solutions
 * Objectif : Présenter l'offre de manière hiérarchisée avec la stratégie du "Produit Héros"
 * Carte 1 : Prothèses sur-mesure (Produit Héros)
 * Carte 2 : Orthèses & Appareillages (Catalogue d'Expert)
 * + Galerie d'images des solutions
 */
export default function OfferSection() {
  const yearsCounter = useCounterAnimation({ end: 13, suffix: '', duration: 1500 });
  const patientsCounter = useCounterAnimation({ end: 200, suffix: '+', duration: 2000 });
  const satisfactionCounter = useCounterAnimation({ end: 90, suffix: '%', duration: 1800 });

  // Nos spécialités avec icônes FontAwesome
  const specialties = [
    {
      icon: faPersonWalkingWithCane,
      title: "Prothèses membres inférieurs",
      description: "Jambes, genoux, pieds prothétiques sur-mesure"
    },
    {
      icon: faHandHoldingMedical,
      title: "Prothèses membres supérieurs",
      description: "Bras, mains myoélectriques et mécaniques"
    },
    {
      icon: faStar,
      title: "Prothèses esthétiques",
      description: "Solutions silicone réalistes et discrètes"
    },
    {
      icon: faBaby,
      title: "Orthopédie pédiatrique",
      description: "Appareillages spécialisés pour enfants"
    },
    {
      icon: faShoePrints,
      title: "Semelles orthopédiques",
      description: "Correction posturale et soutien plantaire"
    },
    {
      icon: faPrint,
      title: "Impression 3D",
      description: "Technologies de fabrication de pointe"
    },
    {
      icon: faBone,
      title: "Orthèses sur-mesure",
      description: "Soutien et correction personnalisés"
    },
    {
      icon: faBandAid,
      title: "Attelles et contentions",
      description: "Solutions de maintien et protection"
    },
    {
      icon: faMicroscope,
      title: "Recherche & développement",
      description: "Innovation continue en orthopédie"
    },
    {
      icon: faBolt,
      title: "Technologies avancées",
      description: "Matériaux et composants haute performance"
    }
  ];

  return (
    <section 
      id="solutions" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
            Des solutions conçues pour chaque besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos experts combinent savoir-faire traditionnel et technologies de pointe 
            pour vous offrir des solutions personnalisées et durables.
          </p>
        </div>

        {/* Grille des cartes solutions avec animation staggerée */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* Carte 1 - Produit Héros : Prothèses sur-mesure */}
          <div className="group relative bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-jelly-bean)] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl premium-hover">
            
            {/* Badge "Produit Héros" */}
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-[color:var(--color-secondary)] text-white px-3 py-1 rounded-full text-sm font-semibold shimmer-effect">
                Notre Spécialité
              </span>
            </div>

            <div className="relative p-8 h-full flex flex-col">
              
              {/* Icône */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faWrench} className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Contenu */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prothèses sur-mesure
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-8 flex-grow">
                Solutions de haute technologie personnalisées pour retrouver votre mobilité. 
                De la conception 3D à la fabrication en atelier, chaque prothèse est unique 
                et adaptée à votre morphologie et vos besoins spécifiques.
              </p>

              {/* Points clés */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                  <span>Conception assistée par ordinateur</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                  <span>Matériaux haut de gamme (carbone, titane)</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                  <span>Accompagnement personnalisé</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="cta-primary interaction-feedback inline-flex items-center justify-center text-white font-semibold px-6 py-3 rounded-lg"
              >
                En savoir plus
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Carte 2 - Catalogue d'Expert : Orthèses & Appareillages */}
          <div className="group bg-[color:var(--color-black-haze)] border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            
            <div className="p-8 h-full flex flex-col">
              
              {/* Icône */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-[color:var(--color-secondary)]/20 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faShield} className="w-8 h-8 text-[color:var(--color-secondary)]" />
                </div>
              </div>

              {/* Contenu */}
              <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-primary)] mb-4">
                Orthèses & Appareillages
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                Notre gamme complète de solutions de soutien et de correction pour améliorer 
                votre confort au quotidien. Des semelles orthopédiques aux attelles spécialisées, 
                chaque produit est étudié pour votre bien-être.
              </p>

              {/* Points clés */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                  <span>Semelles orthopédiques sur-mesure</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                  <span>Orthèses LECKKO & solutions 3D</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                  <span>Appareillage pédiatrique spécialisé</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold px-6 py-3 rounded-lg hover:bg-[color:var(--color-primary)] hover:text-white transition-all duration-300"
              >
                En savoir plus
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section statistiques/confiance avec compteurs animés */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div 
                ref={yearsCounter.ref}
                className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-2"
              >
                {yearsCounter.value}
              </div>
              <p className="text-gray-600 font-medium">ans d&apos;expérience</p>
            </div>
            <div>
              <div 
                ref={patientsCounter.ref}
                className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-2"
              >
                {patientsCounter.value}
              </div>
              <p className="text-gray-600 font-medium">patients accompagnés / par an</p>
            </div>
            <div>
              <div 
                ref={satisfactionCounter.ref}
                className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-2"
              >
                {satisfactionCounter.value}
              </div>
              <p className="text-gray-600 font-medium">satisfaction patient</p>
            </div>
          </div>
        </div>

        {/* Nouvelle section : Nos spécialités avec icônes FontAwesome */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-primary)] mb-4">
              Nos domaines d&apos;expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l'étendue de nos compétences en orthopédie moderne
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[color:var(--color-secondary)] text-center"
              >
                <div className="w-16 h-16 bg-[color:var(--color-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[color:var(--color-secondary)]/20 transition-colors">
                  <FontAwesomeIcon 
                    icon={specialty.icon} 
                    className="w-8 h-8 text-[color:var(--color-secondary)] group-hover:scale-110 transition-transform" 
                  />
                </div>
                <h4 className="font-semibold text-[color:var(--color-primary)] mb-2 text-sm">
                  {specialty.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 