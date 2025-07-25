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

/**
 * HeroSection - Section d'accueil principale avec vidéo en arrière-plan
 * Objectif : Impact visuel maximum avec vidéo immersive + contenu overlay
 * Approche 2 : Vidéo background avec overlay texte et contrôles
 */
export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

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

      {/* Contenu principal overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
          <div className="max-w-4xl">
            
            {/* Titre principal H1 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Plus qu&apos;une prothèse.
              <br />
              <span className="text-[color:var(--color-secondary)]">
                Le premier pas
              </span>
              <br />
              vers votre nouvelle vie.
            </h1>
            
            {/* Paragraphe descriptif - Taille normalisée */}
            <p 
              className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-3xl"
            >
              Chez Delta Orthopédie, nous ne fabriquons pas seulement des appareillages. 
              Nous co-construisons avec vous un projet de mobilité et d&apos;autonomie.
            </p>
            
            {/* Call-to-Action - Simple et efficace */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <Link
                href="#solutions"
                className="cta-primary interaction-feedback inline-flex items-center justify-center px-6 py-3 text-white font-semibold text-base rounded-lg shadow-xl"
              >
                Découvrir nos solutions
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                href="#contact"
                className="interaction-feedback inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold text-base rounded-lg hover:bg-white hover:text-[color:var(--color-primary)] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-5 h-5" />
                Prendre RDV
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
} 