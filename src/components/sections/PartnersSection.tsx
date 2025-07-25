/**
 * PartnersSection - Section de preuve sociale
 * Objectif : Établir instantanément la crédibilité et le sérieux
 * de Delta Orthopédie à travers ses partenaires et certifications
 */
export default function PartnersSection() {
  // Données des partenaires/certifications avec placeholders
  const partners = [
    {
      name: "Ottobock",
      description: "Leader mondial en orthopédie",
      placeholder: "OTTOBOCK"
    },
    {
      name: "ISPO",
      description: "Certification internationale",
      placeholder: "ISPO"
    },
    {
      name: "Delta Med Plus",
      description: "Notre filiale spécialisée",
      placeholder: "DELTA MED+"
    },
    {
      name: "Ministère Santé",
      description: "Agréé par les autorités",
      placeholder: "MINISTÈRE"
    },
    {
      name: "CNAM",
      description: "Conventionné sécurité sociale",
      placeholder: "CNAM"
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
            Nous collaborons avec les leaders internationaux de l&apos;orthopédie 
            et respectons les plus hautes certifications du secteur.
          </p>
        </div>

        {/* Grille des logos partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-sm"
            >
              {/* Placeholder pour logo */}
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-gray-500 text-center leading-tight">
                  {partner.placeholder}
                </span>
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