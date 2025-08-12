import Image from "next/image";
import { StrapiData, PartnerData, strapiService } from "@/lib/strapi";

interface PartnersSectionProps {
  data?: StrapiData<any>[];
}

/**
 * PartnersSection - Section de preuve sociale
 * Objectif : Établir instantanément la crédibilité et le sérieux
 * de Delta Orthopédie à travers ses partenaires et certifications
 */
export default function PartnersSection({ data }: PartnersSectionProps) {
  // Utiliser les données Strapi ou les données par défaut
  const partners = data && data.length > 0 ? data.map(item => ({
    name: item.name,
    description: item.description || "Partenaire Delta Orthopédie",
    logoPath: strapiService.getImageUrl(item.logo) || "/images/logos/default-partner.png",
    alt: `Logo ${item.name} - ${item.description || "Partenaire Delta Orthopédie"}`
  })) : [
    {
      name: "Ottobock",
      description: "Leader mondial en orthopédie",
      logoPath: "/images/logos/ottobock.png",
      alt: "Logo Ottobock - Leader mondial en orthopédie"
    },
    {
      name: "OSSUR",
      description: "Innovation orthopédique mondiale",
      logoPath: "/images/logos/ossur.png",
      alt: "Logo OSSUR - Innovation orthopédique mondiale"
    },
    {
      name: "ISPO",
      description: "Certification internationale",
      logoPath: "/images/logos/ispo.png",
      alt: "Logo ISPO - Certification internationale en orthopédie"
    },
    {
      name: "Delta Med Plus",
      description: "Notre filiale spécialisée",
      logoPath: "/images/logos/delta-med-plus.svg",
      alt: "Logo Delta Med Plus - Filiale spécialisée"
    },
    {
      name: "Ministère Santé",
      description: "Agréé par les autorités",
      logoPath: "/images/logos/ministere-sante.png",
      alt: "Logo Ministère de la Santé - Agrément officiel"
    },
    {
      name: "CNAM",
      description: "Conventionné sécurité sociale",
      logoPath: "/images/logos/cnam.png",
      alt: "Logo CNAM - Caisse Nationale d'Assurance Maladie"
    }
  ];

  return (
    <section className="py-16 bg-[color:var(--color-black-haze)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre discret */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--color-primary)] mb-4">
            Un savoir-faire reconnu et certifié
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les leaders internationaux de l'orthopédie, 
            les organisations mondiales spécialisées en éducation, formation et recherche 
            dans le domaine de l'appareillage orthopédique, ainsi qu'avec 
            l'ensemble des acteurs du secteur.
          </p>
        </div>

        {/* Grille des logos partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-sm"
            >
              {/* Logo réel */}
              <div className="w-24 h-16 relative mb-3 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={partner.logoPath}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 96px"
                />
              </div>
              
              {/* Nom du partenaire */}
              <h3 className="text-sm font-medium text-[color:var(--color-primary)] text-center mb-1">
                {partner.name}
              </h3>
              
              {/* Description courte */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bande de certifications/accréditations */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[color:var(--color-secondary)] rounded-full"></div>
              <span>Orthoprothésistes certifiés ISPO Cat. II</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[color:var(--color-secondary)] rounded-full"></div>
              <span>Conventionné sécurité sociale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[color:var(--color-secondary)] rounded-full"></div>
              <span>Atelier certifié normes CE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[color:var(--color-secondary)] rounded-full"></div>
              <span>Formations internationales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 