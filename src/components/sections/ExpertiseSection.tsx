"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faIndustry, faEye, faAward, faClock, faHeart, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { StrapiData, ExpertiseData, TeamEnvironmentData, strapiService } from "@/lib/strapi";

interface ExpertiseSectionProps {
  data?: StrapiData<any>[];
  teamEnvironmentData?: StrapiData<TeamEnvironmentData>[];
}

/**
 * ExpertiseSection - Section Notre Expertise
 * Objectif : Détailler le "Pourquoi nous ?" et donner vie à la promesse de partenariat
 * Structure : Grille 3 points forts + Présentation des fondateurs + Galerie équipe
 */
export default function ExpertiseSection({ data, teamEnvironmentData }: ExpertiseSectionProps) {
  // État pour le filtre des catégories
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Animations optimisées
  const { ref: titleRef } = useScrollReveal({ threshold: 0.2 });
  const { ref: subtitleRef } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef } = useScrollReveal({ threshold: 0.1 });
  const { ref: foundersRef } = useScrollReveal({ threshold: 0.3 });
  const { ref: expertiseGalleryRef } = useScrollReveal({ threshold: 0.1 });

  // Utiliser les données Strapi ou les données par défaut
  const expertisePoints = data && data.length > 0 ? data.map(item => ({
    icon: faUsers, // Icône par défaut, peut être personnalisée
    title: item.title,
    description: item.description,
    features: item.features || ["Certifiés ISPO Cat. II", "Formation continue", "Expertise internationale"]
  })) : [
    {
      icon: faUsers,
      title: "Une Équipe Dédiée",
      description: "Orthoprothésistes diplômés et certifiés ISPO Cat. II, formés par les leaders internationaux comme Ottobock. Notre équipe suit une formation continue pour maîtriser les dernières innovations.",
      features: ["Certifiés ISPO Cat. II", "Formation continue", "Expertise internationale"]
    },
    {
      icon: faIndustry,
      title: "Un Atelier sur Place",
      description: "Fabrication intégrée dans nos locaux avec des équipements de pointe. Contrôle qualité à chaque étape et respect des normes les plus strictes pour garantir sécurité et durabilité.",
      features: ["Fabrication intégrée", "Équipements de pointe", "Normes CE respectées"]
    },
    {
      icon: faEye,
      title: "Une Vision Globale",
      description: "Approche holistique qui va au-delà de l'appareillage. Nous accompagnons chaque patient dans son projet de vie, en collaboration avec les équipes médicales et les proches.",
      features: ["Accompagnement personnalisé", "Collaboration médicale", "Suivi long terme"]
    }
  ];

  // Informations des fondateurs avec photos
  const founders = [
    {
      name: "M. Imed Djebbi",
      title: "Orthoprothésiste diplômé et certifié ISPO Cat. II",
      description: "Expert en prothèses des membres inférieurs et supérieurs, spécialisé dans les solutions myoélectriques et les technologies de pointe.",
      specialties: ["Prothèses myoélectriques", "Membres inférieurs", "Innovation technologique"],
      photo: "/images/team/fondateur-portrait-1.jpg",
      alt: "Portrait de M. Imed Djebbi, orthoprothésiste spécialisé"
    },
    {
      name: "Mme Cherifa Soltani",
      title: "Orthoprothésiste diplômée et certifiée ISPO Cat. II",
      description: "Spécialiste en orthèses et appareillage pédiatrique, reconnue pour son approche bienveillante et sa précision technique.",
      specialties: ["Orthèses sur-mesure", "Appareillage pédiatrique", "Accompagnement patient"],
      photo: "/images/team/fondateur-portrait-2.jpg",
      alt: "Portrait de Mme Cherifa Soltani, orthoprothésiste spécialisée"
    }
  ];

  // Galerie d'images dynamique depuis Strapi ou fallback statique
  const teamGallery = teamEnvironmentData && teamEnvironmentData.length > 0 
    ? teamEnvironmentData.map(item => ({
        src: strapiService.getImageUrl(item.image) || "/images/expertise/placeholder.webp",
        alt: item.image?.alternativeText || item.title,
        title: item.title,
        description: item.description,
        category: item.category
      }))
    : [
        {
          src: "/images/expertise/accueil-entree-principale.webp",
          alt: "Entrée principale Delta Orthopédie",
          title: "Entrée principale",
          description: "Bienvenue chez Delta Orthopédie",
          category: "accueil" as const
        },
        {
          src: "/images/expertise/equipe-complete.webp",
          alt: "Équipe complète Delta Orthopédie",
          title: "Notre équipe",
          description: "L'équipe Delta Orthopédie au complet",
          category: "equipe" as const
        },
        {
          src: "/images/expertise/atelier-moulage-1.webp",
          alt: "Atelier de moulage moderne",
          title: "Atelier de moulage",
          description: "Salle de moulage moderne et équipée",
          category: "atelier" as const
        },
        {
          src: "/images/expertise/consultation-patient.webp",
          alt: "Consultation personnalisée avec un patient",
          title: "Consultation patient",
          description: "Accompagnement personnalisé du patient",
          category: "consultation" as const
        }
      ];

  // Filtrer les images par catégorie
  const filteredGallery = selectedCategory === 'all' 
    ? teamGallery 
    : teamGallery.filter(image => image.category === selectedCategory);

  // Compter les images par catégorie
  const categoryCounts = {
    all: teamGallery.length,
    accueil: teamGallery.filter(img => img.category === 'accueil').length,
    equipe: teamGallery.filter(img => img.category === 'equipe').length,
    atelier: teamGallery.filter(img => img.category === 'atelier').length,
    consultation: teamGallery.filter(img => img.category === 'consultation').length,
    fabrication: teamGallery.filter(img => img.category === 'fabrication').length
  };

  // Catégories de filtre (masquer les catégories vides sauf 'all')
  const filterCategories = [
    { key: 'all', label: 'Tout', count: categoryCounts.all },
    { key: 'accueil', label: 'Accueil', count: categoryCounts.accueil },
    { key: 'equipe', label: 'Équipe', count: categoryCounts.equipe },
    { key: 'atelier', label: 'Atelier', count: categoryCounts.atelier },
    { key: 'consultation', label: 'Consultation', count: categoryCounts.consultation },
    { key: 'fabrication', label: 'Fabrication', count: categoryCounts.fabrication }
  ].filter(category => category.key === 'all' || category.count > 0);

  return (
    <section 
      id="expertise" 
      className="py-20 bg-[color:var(--color-black-haze)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6"
          >
            Votre projet, notre mission commune
          </h2>
          <p 
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Plus qu&apos;une expertise technique, nous apportons une vision humaine et globale 
            à chaque projet d&apos;appareillage. Découvrez ce qui fait notre différence.
          </p>
        </div>

        {/* Grille des 3 points forts */}
        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {expertisePoints.map((point, index) => {
            return (
              <div 
                key={index}
                className="card-interactive smooth-hover bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                {/* Icône */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[color:var(--color-secondary)]/10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={point.icon} className="w-8 h-8 text-[color:var(--color-secondary)]" />
                  </div>
                </div>

                {/* Contenu */}
                <h3 className="text-xl md:text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {point.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {point.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-[color:var(--color-secondary)] rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section fondateurs */}
        <div 
          ref={foundersRef as React.RefObject<HTMLDivElement>}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-primary)] mb-4">
              Une expertise dirigée par la passion
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delta Orthopédie est dirigée par deux orthoprothésistes reconnus, 
              alliant expertise technique et approche humaine exceptionnelle.
            </p>
          </div>

          {/* Grille des fondateurs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                {/* Photo du fondateur */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-[color:var(--color-primary)]/20 to-[color:var(--color-secondary)]/20 flex items-center justify-center">
                    {/* Placeholder temporaire en attendant les vraies photos */}
                    <div className="text-center text-[color:var(--color-primary)]">
                      <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mx-auto mb-1 opacity-50" />
                      <p className="text-xs font-semibold">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Informations */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold text-[color:var(--color-primary)] mb-2">
                    {founder.name}
                  </h4>
                  <p className="text-[color:var(--color-secondary)] font-semibold mb-3">
                    {founder.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {founder.description}
                  </p>
                  
                  {/* Ses spécialités */}
                  <div className="space-y-2">
                    {founder.specialties.map((specialty, sIndex) => (
                      <div key={sIndex} className="flex items-center justify-center md:justify-start text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[color:var(--color-secondary)] rounded-full mr-2"></div>
                        <span className="text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Valeurs communes */}
          <div className="text-center bg-[color:var(--color-black-haze)] rounded-xl p-6">
            <h4 className="text-lg font-bold text-[color:var(--color-primary)] mb-3">
              Nos valeurs partagées
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2 text-[color:var(--color-secondary)]">
                <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
                <span className="text-sm font-semibold">Humanité</span>
              </div>
              <div className="flex items-center gap-2 text-[color:var(--color-secondary)]">
                <FontAwesomeIcon icon={faAward} className="w-4 h-4" />
                <span className="text-sm font-semibold">Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-[color:var(--color-secondary)]">
                <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                <span className="text-sm font-semibold">Engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Galerie équipe et ambiance */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--color-primary)] mb-4">
              Découvrez notre équipe et notre environnement
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée dans un environnement moderne et chaleureux
            </p>
          </div>

          {/* Filtres de catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-[color:var(--color-secondary)] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-[color:var(--color-secondary)]/10 hover:text-[color:var(--color-secondary)]'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
          
          <div 
            ref={expertiseGalleryRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
              {filteredGallery.map((image, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Image réelle ou placeholder */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback en cas d'erreur de chargement d'image
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    
                    {/* Placeholder de fallback */}
                    <div className="w-full h-full bg-gradient-to-br from-[color:var(--color-primary)]/20 to-[color:var(--color-secondary)]/20 flex items-center justify-center" style={{ display: 'none' }}>
                      <div className="text-center text-[color:var(--color-primary)]">
                        <FontAwesomeIcon icon={faCamera} className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-semibold">{image.title}</p>
                        <p className="text-xs opacity-70">Image en cours de chargement</p>
                      </div>
                    </div>
                  </div>

                  {/* Titre sous l'image */}
                  <div className="p-4">
                    <h5 className="font-semibold text-[color:var(--color-primary)] text-center">
                      {image.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
} 