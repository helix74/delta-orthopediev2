"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faVolumeUp, 
  faVolumeMute, 
  faExpand, 
  faArrowRight, 
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { StrapiData, HeroData, strapiService } from "@/lib/strapi";

interface HeroSectionProps {
  data?: StrapiData<HeroData> | null;
}

/**
 * HeroSection - Section d'accueil principale avec vidéo en arrière-plan
 * Objectif : Impact visuel maximum avec vidéo immersive + contenu overlay
 * Approche 2 : Vidéo background avec overlay texte et contrôles
 */
export default function HeroSection({ data }: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);

  // Données par défaut si pas de données Strapi
  const heroData = data || {
    title: 'Delta Orthopédie - Votre partenaire santé',
    subtitle: 'Solutions orthopédiques personnalisées pour améliorer votre qualité de vie',
    description: 'Nous vous accompagnons dans votre parcours de soins avec des solutions orthopédiques adaptées à vos besoins.',
    primaryButtonText: 'Prendre rendez-vous',
    primaryButtonLink: '#contact',
    secondaryButtonText: 'Découvrir nos services',
    secondaryButtonLink: '#expertise',
    isActive: true
  };

  const handleFullscreen = () => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        // Styles spéciaux pour le plein écran mobile
        videoElement.style.objectFit = 'contain';
        videoElement.style.width = '100vw';
        videoElement.style.height = '100vh';
        
        videoElement.requestFullscreen().catch((err) => {
          console.log('Erreur plein écran:', err);
        });
      }
    }
  };

  // Réinitialiser les styles quand on sort du plein écran
  const handleFullscreenChange = () => {
    const videoElement = document.querySelector('video');
    if (!document.fullscreenElement && videoElement) {
      videoElement.style.objectFit = 'cover';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
    }
  };

  // Écouter les changements de plein écran
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Conteneur vidéo en arrière-plan - RESPONSIVE */}
      <div className="absolute inset-0 bg-black">
        
        {/* Vraie vidéo de présentation - MOBILE OPTIMISÉE */}
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        >
          <source src="/videos/hero-presentation.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient adaptatif */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)]/80 via-[color:var(--color-primary)]/60 to-[color:var(--color-primary)]/40 md:from-[color:var(--color-primary)]/70 md:via-[color:var(--color-primary)]/50 md:to-[color:var(--color-primary)]/30"></div>
      </div>

      {/* Contrôles vidéo - REPOSITIONNÉS PLUS HAUT SUR MOBILE */}
      <div className="absolute bottom-20 right-4 md:bottom-32 md:right-8 flex items-center gap-3 z-20">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
          title={isMuted ? "Activer le son" : "Couper le son"}
        >
          {isMuted ? (
            <FontAwesomeIcon icon={faVolumeMute} className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>
        
        <button 
          onClick={handleFullscreen}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
          title="Plein écran"
        >
          <FontAwesomeIcon icon={faExpand} className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Contenu principal - CENTRÉ ET RESPONSIVE */}
      <div className="relative z-10 flex items-start justify-center min-h-screen px-4 md:px-8 pt-28 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Titre principal - TAILLE ADAPTATIVE */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {heroData.title}
          </h1>
          
          {/* Sous-titre - LISIBILITÉ OPTIMISÉE */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroData.subtitle}
          </p>
          
          {/* Description - TEXTE PLUS DÉTAILLÉ */}
          <div className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            {heroData.description}
          </div>

          {/* Boutons d'action - ESPACEMENT OPTIMISÉ */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            {/* Bouton principal */}
            <Link 
              href={heroData.primaryButtonLink || '#contact'}
              className="inline-flex items-center gap-2 bg-white text-[color:var(--color-primary)] px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {heroData.primaryButtonText || 'Prendre rendez-vous'}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
            
            {/* Bouton secondaire */}
            <Link 
              href={heroData.secondaryButtonLink || '#expertise'}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-[color:var(--color-primary)] transition-all duration-300"
            >
              {heroData.secondaryButtonText || 'Découvrir nos services'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 