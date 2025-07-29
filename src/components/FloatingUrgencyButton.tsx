"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus,
  faTimes,
  faPhone,
  faAmbulance,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/**
 * FloatingUrgencyButton - Bouton d'assistance flottant
 * Objectif : Accès rapide pour urgences et assistance immédiate
 */
export default function FloatingUrgencyButton() {
  const [isOpen, setIsOpen] = useState(false);

  const urgencyOptions = [
    {
      icon: faAmbulance,
      label: "Urgence médicale",
      description: "Problème technique urgent",
      action: "tel:+21694800353",
      color: "bg-red-500 hover:bg-red-600",
      textColor: "text-red-600"
    },
    {
      icon: faPhone,
      label: "Appel direct",
      description: "Parler à un expert",
      action: "tel:+21694800353",
      color: "bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/90", 
      textColor: "text-[color:var(--color-primary)]"
    },
    {
      icon: faWhatsapp,
      label: "WhatsApp",
      description: "Message instantané",
      action: "https://wa.me/21699224446",
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-green-600"
    },
    {
      icon: faHeadset,
      label: "Demander un rappel",
      description: "On vous rappelle",
      action: "#contact",
      color: "bg-[color:var(--color-secondary)] hover:bg-[color:var(--color-secondary)]/90",
      textColor: "text-[color:var(--color-secondary)]"
    }
  ];

  const handleOptionClick = (action: string) => {
    if (action.startsWith('tel:')) {
      window.location.href = action;
    } else if (action.startsWith('https://')) {
      window.open(action, '_blank');
    } else if (action.startsWith('#')) {
      document.querySelector(action)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Styles CSS pour l'animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(0.7);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 z-50">
        {/* Options d'urgence (apparaissent quand ouvert) */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3 mb-3">
            {urgencyOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-end group animate-slideIn opacity-0"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Label avec description - TOUJOURS visible sur mobile (pas de md: classes qui cachent) */}
                <div className="bg-white rounded-xl shadow-lg p-3 mr-3 border border-gray-100 transition-all duration-300 min-w-[180px] max-w-[220px] transform opacity-100 scale-100 pointer-events-auto md:opacity-0 md:scale-95 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:scale-105 md:group-hover:pointer-events-auto">
                  <div className={`font-semibold text-sm ${option.textColor} mb-1`}>
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    {option.description}
                  </div>
                </div>

                {/* Bouton d'action - Animation propre */}
                <button
                  onClick={() => handleOptionClick(option.action)}
                  className={`w-14 h-14 ${option.color} text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 transform border-2 border-white flex-shrink-0`}
                  style={{ borderRadius: '50%' }}
                  aria-label={option.label}
                >
                  <FontAwesomeIcon icon={option.icon} className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Bouton principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`guide-attention w-14 h-14 bg-[color:var(--color-secondary)] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          style={{ borderRadius: '50%' }}
          aria-label="Menu d'assistance rapide"
        >
          <FontAwesomeIcon 
            icon={isOpen ? faTimes : faPlus} 
            className="w-6 h-6" 
          />
        </button>

        {/* Badge "Aide" discret */}
        {!isOpen && (
          <div className="absolute -top-2 -left-12 bg-[color:var(--color-primary)] text-white text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
            Aide
          </div>
        )}
      </div>
    </>
  );
} 