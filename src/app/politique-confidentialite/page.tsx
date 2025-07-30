import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Delta Orthopédie",
  description: "Politique de confidentialité et protection des données personnelles de Delta Orthopédie, conforme au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-[color:var(--color-black-haze)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-600">
              Protection et traitement de vos données personnelles
            </p>
          </div>

          {/* Contenu */}
          <div className="prose prose-lg max-w-none text-gray-900">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                Introduction
              </h2>
              <p className="text-gray-900">
                Delta Orthopédie s&apos;engage à protéger vos données personnelles et à respecter votre vie privée. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles 
                conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation tunisienne.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                1. Responsable du traitement
              </h2>
              <div className="bg-[color:var(--color-black-haze)] rounded-lg p-6">
                <p><strong>Delta Orthopédie</strong></p>
                <p>Immeuble Golden Queen, Avenue Habib Bourguiba, Le Bardo, Tunis</p>
                <p>Téléphone : +216 71 516 033</p>
                <p>Email : contact@deltaorthopedie.tn</p>
              </div>
            </section>

            {/* Données collectées */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                2. Données personnelles collectées
              </h2>
              <p className="text-gray-900">Nous collectons les données suivantes :</p>
              
              <h3 className="text-lg font-semibold text-[color:var(--color-primary)] mt-6 mb-3">
                Données d&apos;identification
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Nom et prénom</li>
                <li>Adresse postale</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
                <li>Date de naissance</li>
              </ul>

              <h3 className="text-lg font-semibold text-[color:var(--color-primary)] mt-6 mb-3">
                Données médicales (avec votre consentement explicite)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Informations sur votre état de santé</li>
                <li>Prescriptions médicales</li>
                <li>Mesures morphologiques</li>
                <li>Photos à des fins de fabrication d&apos;appareillages</li>
              </ul>

              <h3 className="text-lg font-semibold text-[color:var(--color-primary)] mt-6 mb-3">
                Données de navigation
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
              </ul>
            </section>

            {/* Finalités du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                3. Finalités du traitement
              </h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Prestation de soins :</strong> Conception et fabrication d&apos;appareillages sur-mesure</li>
                <li><strong>Suivi patient :</strong> Accompagnement et suivi de vos appareillages</li>
                <li><strong>Communication :</strong> Réponse à vos demandes et prise de rendez-vous</li>
                <li><strong>Gestion administrative :</strong> Facturation et remboursements</li>
                <li><strong>Amélioration des services :</strong> Analyse de la satisfaction client</li>
                <li><strong>Obligations légales :</strong> Conservation des dossiers médicaux</li>
              </ul>
            </section>

            {/* Base légale */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                4. Base légale du traitement
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Exécution d&apos;un contrat :</strong> Prestation de soins orthopédiques</li>
                <li><strong>Consentement :</strong> Traitement des données médicales sensibles</li>
                <li><strong>Intérêt légitime :</strong> Amélioration de nos services</li>
                <li><strong>Obligation légale :</strong> Conservation des dossiers médicaux</li>
              </ul>
            </section>

            {/* Destinataires */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                5. Destinataires des données
              </h2>
              <p>Vos données peuvent être partagées avec :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>L&apos;équipe médicale de Delta Orthopédie</li>
                <li>Les prescripteurs (médecins, kinésithérapeutes) avec votre accord</li>
                <li>Les organismes de remboursement (CNAM, mutuelles)</li>
                <li>Nos sous-traitants techniques (hébergement, maintenance)</li>
                <li>Les autorités compétentes (sur réquisition légale)</li>
              </ul>
            </section>

            {/* Durée de conservation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                6. Durée de conservation
              </h2>
              <div className="bg-[color:var(--color-black-haze)] rounded-lg p-6">
                <ul className="space-y-2">
                  <li><strong>Dossiers médicaux :</strong> 30 ans après la dernière consultation</li>
                  <li><strong>Données de facturation :</strong> 10 ans</li>
                  <li><strong>Données de contact :</strong> 3 ans après la dernière interaction</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            {/* Droits des personnes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                7. Vos droits
              </h2>
              <p>Vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
              </ul>
              
              <div className="bg-blue-50 border-l-4 border-[color:var(--color-secondary)] p-4 mt-6">
                <p><strong>Comment exercer vos droits :</strong></p>
                <p>Contactez-nous par email à <a href="mailto:contact@deltaorthopedie.tn" className="text-[color:var(--color-secondary)] hover:underline">contact@deltaorthopedie.tn</a> ou par courrier à notre adresse.</p>
              </div>
            </section>

            {/* Sécurité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                8. Sécurité des données
              </h2>
              <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Accès limité aux données (principe de minimisation)</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Sauvegarde régulière des données</li>
                <li>Contrôle d&apos;accès physique et logique</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                9. Cookies et technologies similaires
              </h2>
              <p>Notre site utilise des cookies pour :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Améliorer la navigation sur le site</li>
                <li>Mémoriser vos préférences</li>
                <li>Analyser l&apos;audience du site</li>
              </ul>
              <p className="mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté 
                lors de leur dépôt.
              </p>
            </section>

            {/* Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                10. Modifications de la politique
              </h2>
              <p>
                Cette politique peut être mise à jour pour refléter les changements dans nos pratiques 
                ou pour des raisons légales. Nous vous informerons de toute modification importante.
              </p>
            </section>

            {/* Réclamations */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                11. Réclamations
              </h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une 
                réclamation auprès de l&apos;autorité de protection des données compétente en Tunisie.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                12. Contact
              </h2>
              <p>Pour toute question concernant cette politique :</p>
              <div className="bg-[color:var(--color-black-haze)] rounded-lg p-6 mt-4">
                <p><strong>Email :</strong> contact@deltaorthopedie.tn</p>
                <p><strong>Téléphone :</strong> +216 71 516 033</p>
                <p><strong>Courrier :</strong> Delta Orthopédie, Immeuble Golden Queen, Avenue Habib Bourguiba, Le Bardo, Tunis</p>
              </div>
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