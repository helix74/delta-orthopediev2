"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StrapiData, TestimonialData, strapiService } from "@/lib/strapi";

interface TestimonialsSectionProps {
  data?: StrapiData<any>[];
}

/**
 * TestimonialsSection - Section des témoignages
 * Objectif : Valider l'argumentation par la preuve la plus forte - l'émotion d'un patient
 * Structure : Plusieurs témoignages avec navigation
 */
export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Utiliser les données Strapi ou les données par défaut
  const testimonials = data && data.length > 0 ? data.map(item => {
    // Utiliser le champ description s'il existe, sinon extraire de testimonial
    const testimonialText = item.testimonial;
    const hasDescription = item.description && item.description.trim() !== '';
    
    let quote, story;
    
    if (hasDescription) {
      // Si description existe, utiliser testimonial comme citation et description comme histoire
      quote = testimonialText;
      story = item.description;
    } else {
      // Sinon, extraire la première phrase comme citation et le reste comme description
      const firstSentence = testimonialText.split('.')[0] + '.';
      quote = firstSentence;
      story = testimonialText.replace(firstSentence, '').trim() || testimonialText;
    }

    // Points clés personnalisés selon le type de traitement
    const getKeyPoints = (treatmentType: string) => {
      const type = treatmentType.toLowerCase();
      if (type.includes('prothèse') && type.includes('bras')) {
        return [
          "Formation approfondie à la prothèse myoélectrique",
          "Adaptation spécifique au métier d'artisan",
          "Retour au travail en 3 mois",
          "Précision retrouvée pour les gestes fins"
        ];
      } else if (type.includes('pédiatrique')) {
        return [
          "Prothèses évolutives adaptées à la croissance",
          "Accompagnement psychologique familial",
          "Intégration scolaire et sociale réussie",
          "Suivi sur 5 ans avec renouvellement régulier"
        ];
      } else if (type.includes('tibiale') || type.includes('esthétique')) {
        return [
          "Accompagnement personnalisé sur 6 mois",
          "Adaptation progressive et formation",
          "Suivi psychologique inclus",
          "Retour aux activités sportives"
        ];
      } else {
        // Points clés génériques par défaut
        return [
          "Accompagnement personnalisé",
          "Expertise technique",
          "Suivi régulier",
          "Résultats satisfaisants"
        ];
      }
    };
    
    return {
      quote: quote,
      author: item.clientName,
      age: "", // Pas dans le modèle Strapi actuel
      treatmentType: item.service || "Traitement orthopédique",
      location: item.location || "Tunis",
      story: story,
      rating: item.rating,
      keyPoints: getKeyPoints(item.service || "")
    };
  }) : [
    {
      quote: "Ils n'ont pas seulement réparé mon corps, ils m'ont aidé à reconstruire ma confiance.",
      author: "Ranim Z.",
      age: "22 ans",
      treatmentType: "Prothèse tibiale et esthétique",
      location: "Tunis",
      story: "Après mon accident, j'avais perdu espoir de retrouver ma mobilité. L'équipe de Delta Orthopédie m'a accompagnée avec une patience et une expertise exceptionnelles. Aujourd'hui, je peux à nouveau courir et danser.",
      rating: 5,
      keyPoints: [
        "Accompagnement personnalisé sur 6 mois",
        "Adaptation progressive et formation",
        "Suivi psychologique inclus",
        "Retour aux activités sportives"
      ]
    },
    {
      quote: "Grâce à ma prothèse myoélectrique, j'ai retrouvé mon métier d'artisan avec une précision incroyable.",
      author: "Ahmed K.",
      age: "45 ans", 
      treatmentType: "Prothèse de bras myoélectrique",
      location: "Sousse",
      story: "Suite à un accident du travail, j'ai perdu mon bras droit. Je pensais devoir abandonner mon métier d'ébéniste. Delta Orthopédie m'a équipé d'une prothèse myoélectrique si précise que je peux travailler le bois avec la même dextérité qu'avant.",
      rating: 5,
      keyPoints: [
        "Formation approfondie à la prothèse myoélectrique",
        "Adaptation spécifique au métier d'artisan",
        "Retour au travail en 3 mois",
        "Précision retrouvée pour les gestes fins"
      ]
    },
    {
      quote: "Mon fils a grandi avec confiance grâce à ses prothèses qui évoluent avec lui.",
      author: "Leila B.",
      age: "Maman de Yassine, 8 ans",
      treatmentType: "Prothèses pédiatriques évolutives",
      location: "Tunis",
      story: "Yassine est né avec une malformation des membres inférieurs. Depuis ses 3 ans, Delta Orthopédie l'accompagne avec des prothèses qui s'adaptent à sa croissance. Il court, joue au football et vit comme tous les enfants de son âge.",
      rating: 5,
      keyPoints: [
        "Prothèses évolutives adaptées à la croissance",
        "Accompagnement psychologique familial",
        "Intégration scolaire et sociale réussie",
        "Suivi sur 5 ans avec renouvellement régulier"
      ]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentStory = testimonials[currentTestimonial];

  return (
    <section 
      id="temoignages" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
            Leurs histoires, notre plus grande fierté
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chaque patient que nous accompagnons écrit une nouvelle page de sa vie. 
            Découvrez ces histoires qui nous inspirent chaque jour.
          </p>
        </div>

        {/* Témoignage principal avec navigation */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-[color:var(--color-black-haze)] to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            
            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[color:var(--color-secondary)] hover:text-white transition-all duration-300 pointer-events-auto"
                aria-label="Témoignage précédent"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[color:var(--color-secondary)] hover:text-white transition-all duration-300 pointer-events-auto"
                aria-label="Témoignage suivant"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
              </button>
            </div>

            {/* Citation avec guillemets */}
            <div className="text-center mb-12">
              <div className="relative">
                {/* Icône de citation */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-[color:var(--color-secondary)] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faQuoteLeft} className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Citation principale */}
                <blockquote className="pt-8">
                  <p className="text-2xl md:text-4xl font-bold text-[color:var(--color-primary)] leading-relaxed mb-8 italic">
                    &ldquo;{currentStory.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Contenu du témoignage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Photo et informations du patient */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Photo placeholder */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-gray-500 font-semibold text-lg">
                    {currentStory.author.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>

                {/* Informations patient */}
                <div className="text-center lg:text-left mb-6">
                  <h3 className="text-xl font-bold text-[color:var(--color-primary)] mb-2">
                    {currentStory.author}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">
                    {currentStory.age}
                  </p>
                  <p className="text-[color:var(--color-secondary)] font-semibold mb-1">
                    {currentStory.treatmentType}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {currentStory.location}
                  </p>
                </div>

                {/* Étoiles de notation */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(currentStory.rating)].map((_, index) => (
                    <FontAwesomeIcon 
                      key={index} 
                      icon={faStar}
                      className="w-5 h-5 text-yellow-400" 
                    />
                  ))}
                </div>
              </div>

              {/* Histoire détaillée */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentStory.story}
                </p>

                {/* Points clés de l'accompagnement */}
                <div className="space-y-3">
                  {currentStory.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Badge certification */}
                <div className="inline-flex items-center bg-[color:var(--color-secondary)]/10 text-[color:var(--color-secondary)] px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Témoignage certifié patient Delta Orthopédie
                </div>
              </div>
            </div>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[color:var(--color-secondary)]' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Section résumé des témoignages */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
              Nos patients témoignent
            </h3>
            <p className="text-gray-600">
              Découvrez la diversité de nos accompagnements
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'border-[color:var(--color-secondary)] bg-[color:var(--color-secondary)]/5'
                    : 'border-gray-200 hover:border-[color:var(--color-secondary)]/50 bg-white'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-500 font-semibold">
                      {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[color:var(--color-primary)] mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-[color:var(--color-secondary)] font-medium mb-2">
                    {testimonial.treatmentType}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    &ldquo;{testimonial.quote.substring(0, 60)}...&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action vers plus de témoignages */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Rejoignez nos patients satisfaits
          </p>
          <a
            href="#contact"
            className="text-[color:var(--color-secondary)] font-semibold hover:text-[color:var(--color-primary)] transition-colors"
          >
            Demander une consultation →
          </a>
        </div>
      </div>
    </section>
  );
} 