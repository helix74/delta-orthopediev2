"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faComments, 
  faUserMd, 
  faRuler,
  faCog,
  faUserCheck,
  faHandshake,
  faCalendarCheck,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

/**
 * ProcessSection - Processus étape par étape
 * Objectif : Dédramatiser le parcours patient en montrant chaque étape clairement
 */
export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      icon: faComments,
      title: "Premier contact",
      description: "Échange téléphonique pour comprendre vos besoins",
      duration: "15 min",
      details: ["Discussion sur votre situation", "Explication de nos services", "Prise de rendez-vous sans engagement"]
    },
    {
      number: "02", 
      icon: faUserMd,
      title: "Consultation gratuite",
      description: "Rencontre avec notre orthoprothésiste",
      duration: "45 min",
      details: ["Examen de votre situation", "Présentation des solutions", "Réponse à toutes vos questions"]
    },
    {
      number: "03",
      icon: faRuler,
      title: "Prise de mesures",
      description: "Relevé précis et moulage si nécessaire",
      duration: "30 min", 
      details: ["Mesures anatomiques précises", "Moulage en plâtre ou scan 3D", "Choix des matériaux ensemble"]
    },
    {
      number: "04",
      icon: faCog,
      title: "Fabrication sur-mesure",
      description: "Création de votre appareillage dans notre atelier",
      duration: "2-3 semaines",
      details: ["Fabrication artisanale", "Contrôles qualité réguliers", "Communication sur l&apos;avancement"]
    },
    {
      number: "05",
      icon: faUserCheck,
      title: "Essayage et ajustements",
      description: "Test de l&apos;appareillage et modifications si besoin",
      duration: "1 heure",
      details: ["Premier essayage complet", "Ajustements immédiats", "Vérification du confort"]
    },
    {
      number: "06",
      icon: faCalendarCheck,
      title: "Suivi personnalisé",
      description: "Accompagnement sur le long terme",
      duration: "À vie",
      details: ["Rendez-vous de contrôle", "Ajustements gratuits", "Maintenance et réparations"]
    }
  ];

  return (
    <section id="processus" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faHandshake} className="w-4 h-4" />
            Processus transparent et rassurant
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
            Votre parcours étape par étape
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous vous accompagnons à chaque moment de votre parcours. 
            Découvrez ce qui vous attend, sans surprise ni stress.
          </p>
        </div>

        {/* Timeline des étapes */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                
                {/* Connecteur vers l'étape suivante (desktop seulement) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-8 -right-4 z-0">
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="w-6 h-6 text-[color:var(--color-secondary)] opacity-30" 
                    />
                  </div>
                )}

                {/* Carte de l'étape */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  
                  {/* Numéro de l'étape */}
                  <div className="absolute -top-4 -left-4">
                    <div className="w-12 h-12 bg-[color:var(--color-secondary)] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icône principale */}
                  <div className="flex justify-center mb-4 pt-4">
                    <div className="w-16 h-16 bg-[color:var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={step.icon} className="w-8 h-8 text-[color:var(--color-primary)]" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[color:var(--color-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <FontAwesomeIcon icon={faCalendarCheck} className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>

                  {/* Détails de l'étape */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[color:var(--color-secondary)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action final */}
        <div 
          className="mt-16 text-center bg-gradient-to-br from-[color:var(--color-black-haze)] to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-primary)] mb-4">
            Prêt(e) à commencer votre parcours ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Notre équipe d&apos;experts vous accompagne à chaque étape. 
            Commencez dès aujourd&apos;hui par une consultation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[color:var(--color-secondary)] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[color:var(--color-accent)] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 w-5 h-5" />
              Commencer mon parcours
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold px-8 py-4 rounded-lg hover:bg-[color:var(--color-primary)] hover:text-white transition-all duration-300"
            >
              Questions fréquentes
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 