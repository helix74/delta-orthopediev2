"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserShield, 
  faHandshake, 
  faGraduationCap,
  faCertificate,
  faHeart,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

/**
 * ReassuranceSection - Section de réassurance pour patients vulnérables
 * Objectif : Éliminer les barrières psychologiques et rassurer dès la première visite
 */
export default function ReassuranceSection() {
  const reassurancePoints = [
    {
      icon: faUserShield,
      title: "Confidentialité garantie",
      description: "Vos informations médicales sont protégées selon les normes RGPD les plus strictes"
    },
    {
      icon: faGraduationCap,
      title: "Expertise certifiée",
      description: "Équipe diplômée ISPO Cat. II avec 12+ années d'expérience"
    },
    {
      icon: faHandshake,
      title: "Des consultations gratuites",
      description: "Découvrez nos solutions sans engagement financier"
    },
    {
      icon: faCertificate,
      title: "Prise en charge CNAM",
      description: "Conventionné sécurité sociale"
    },
    {
      icon: faHeart,
      title: "Accompagnement familial",
      description: "Soutien psychologique inclus pour vous et vos proches"
    },
    {
      icon: faShieldAlt,
      title: "Garantie satisfaction",
      description: "Ajustements illimités jusqu'à votre satisfaction complète"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Message de réassurance principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
            Votre bien-être, notre priorité absolue
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">
            Un environnement de confiance pour votre parcours
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous comprenons que franchir le pas vers un appareillage orthopédique peut être 
            intimidant. C&apos;est pourquoi nous avons créé un cadre rassurant et bienveillant.
          </p>
        </div>

        {/* Grille des points de réassurance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reassurancePoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={point.icon} className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[color:var(--color-primary)] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action doux */}
        <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-[color:var(--color-primary)] mb-4">
            Prêt(e) à commencer ? Nous sommes là pour vous accompagner.
          </h3>
          <p className="text-gray-600 mb-6">
            Votre première consultation est gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[color:var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-accent)] transition-all duration-300 hover:scale-105"
            >
              Consultation gratuite
            </a>
            <a
              href="https://wa.me/21699224446?text=Bonjour%2C%20j'aimerais%20avoir%20des%20informations%20sur%20vos%20services%20d'orthopédie."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[color:var(--color-secondary)] text-[color:var(--color-secondary)] font-semibold rounded-lg hover:bg-[color:var(--color-secondary)] hover:text-white transition-all duration-300"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 