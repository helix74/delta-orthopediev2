import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - Delta Orthopédie",
  description: "Mentions légales et informations juridiques de Delta Orthopédie, votre spécialiste en prothèses et orthèses en Tunisie.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-[color:var(--color-black-haze)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">
              Mentions Légales
            </h1>
            <p className="text-gray-600">
              Informations légales relatives à Delta Orthopédie
            </p>
          </div>

          {/* Contenu */}
          <div className="prose prose-lg max-w-none text-gray-900">
            
            {/* Identification de l'entreprise */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                1. Identification de l&apos;entreprise
              </h2>
              <div className="bg-[color:var(--color-black-haze)] rounded-lg p-6 text-gray-900">
                <p><strong>Raison sociale :</strong> Delta Orthopédie</p>
                <p><strong>Forme juridique :</strong> [À compléter]</p>
                <p><strong>Capital social :</strong> [À compléter]</p>
                <p><strong>Numéro d&apos;immatriculation :</strong> [À compléter]</p>
                <p><strong>Siège social :</strong> Immeuble Golden Queen, Avenue Habib Bourguiba, Le Bardo, Tunis</p>
                <p><strong>Téléphone :</strong> +216 71 516 033</p>
                <p><strong>Email :</strong> contact@deltaorthopedie.tn</p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                2. Directeur de publication
              </h2>
              <p className="text-gray-900">Le directeur de la publication du site web est [Nom du directeur], en sa qualité de [Fonction].</p>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                3. Hébergement du site
              </h2>
              <p className="text-gray-900">Le site web est hébergé par :</p>
              <div className="bg-[color:var(--color-black-haze)] rounded-lg p-6 mt-4 text-gray-900">
                <p><strong>Nom :</strong> [Hébergeur]</p>
                <p><strong>Adresse :</strong> [Adresse de l&apos;hébergeur]</p>
                <p><strong>Téléphone :</strong> [Téléphone de l&apos;hébergeur]</p>
              </div>
            </section>

            {/* Activité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                4. Activité de l&apos;entreprise
              </h2>
              <p className="text-gray-900">Delta Orthopédie est spécialisée dans :</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-900">
                <li>La conception et fabrication de prothèses sur-mesure</li>
                <li>La création d&apos;orthèses et appareillages orthopédiques</li>
                <li>Les semelles orthopédiques sur-mesure</li>
                <li>L&apos;accompagnement et le suivi des patients</li>
                <li>La maintenance et réparation d&apos;appareillages</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                5. Propriété intellectuelle
              </h2>
              <p className="text-gray-900">
                L&apos;ensemble du contenu de ce site web (textes, images, vidéos, logos, etc.) est protégé par les droits d&apos;auteur et appartient à Delta Orthopédie ou à ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                6. Limitation de responsabilité
              </h2>
              <p className="text-gray-900">
                Les informations présentes sur ce site sont données à titre indicatif et ne sauraient engager la responsabilité de Delta Orthopédie. Les informations médicales ne remplacent en aucun cas l&apos;avis d&apos;un professionnel de santé.
              </p>
            </section>

            {/* Données personnelles */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                7. Protection des données personnelles
              </h2>
              <p className="text-gray-900">
                Pour toute information concernant la collecte et le traitement de vos données personnelles, nous vous invitons à consulter notre{" "}
                <a href="/politique-confidentialite" className="text-[color:var(--color-secondary)] hover:underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                8. Droit applicable
              </h2>
              <p className="text-gray-900">
                Les présentes mentions légales sont régies par le droit tunisien. En cas de litige, les tribunaux tunisiens seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                9. Contact
              </h2>
              <p className="text-gray-900">
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-900">
                <li>Par téléphone : +216 71 516 033</li>
                <li>Par email : contact@deltaorthopedie.tn</li>
                <li>Par courrier : Immeuble Golden Queen, Avenue Habib Bourguiba, Le Bardo, Tunis</li>
              </ul>
            </section>

            {/* Date de mise à jour */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 