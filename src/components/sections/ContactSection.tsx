"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faPaperPlane,
  faCheckCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { StrapiData, ContactData, strapiService } from "@/lib/strapi";

interface ContactSectionProps {
  data?: StrapiData<any> | null;
}

/**
 * ContactSection - Section de contact
 * Objectif : Convertir l'intérêt en une prise de contact simple
 * Structure : Formulaire de contact + Informations de contact réelles
 */
export default function ContactSection({ data }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Utiliser les données Strapi ou les données par défaut
  const contactData = data?.attributes || {
    phone: "+216 71 516 033",
    email: "contact@deltaorthopedie.tn",
    address: "Immeuble Golden Queen, Avenue Habib Bourguiba, Le Bardo, Tunis",
    openingHours: {
      lundi: "8h00 à 17h00",
      mardi: "8h00 à 17h00",
      mercredi: "8h00 à 17h00",
      jeudi: "8h00 à 17h00",
      vendredi: "8h00 à 17h00",
      samedi: "8h00 à 13h00",
      dimanche: "Fermé"
    },
    emergencyPhone: "+216 94 800 353",
    socialMedia: {
      facebook: "https://facebook.com/delta-orthopedie",
      instagram: "https://instagram.com/delta-orthopedie",
      linkedin: "https://linkedin.com/company/delta-orthopedie"
    }
  };

  // Informations de contact réelles Delta Orthopédie
  const contactInfo = [
    {
      location: "Tunis",
      address: contactData.address,
      phone: contactData.phone,
      whatsapp: [contactData.emergencyPhone || "+216 94 800 353"],
      email: contactData.email
    }
  ];

  const businessHours = Object.entries(contactData.openingHours).map(([day, hours]) => ({
    days: day.charAt(0).toUpperCase() + day.slice(1),
    hours: hours
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configuration EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Vérifier que les clés sont configurées
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS not configured. Please add environment variables.');
        throw new Error('Configuration EmailJS manquante');
      }

      // Paramètres du template EmailJS
      const templateParams = {
        from_name: formData.nom,
        from_email: formData.email,
        phone: formData.telephone || 'Non fourni',
        message: formData.message,
        to_email: 'contact@deltaorthopedie.tn',
        current_date: new Date().toLocaleString('fr-FR', {
          dateStyle: 'full',
          timeStyle: 'short'
        })
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Succès
      setSubmitStatus('success');
      setFormData({ nom: "", email: "", telephone: "", message: "" });

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus('error');

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-[color:var(--color-black-haze)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
            Commençons à construire votre avenir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prenez rendez-vous pour une consultation personnalisée. Notre équipe d&apos;experts 
            vous accompagne dans votre projet d&apos;appareillage orthopédique.
          </p>
        </div>

        {/* Grille formulaire + informations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Colonne Gauche - Formulaire de contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
                Envoyez-nous un message
              </h3>
              <p className="text-gray-600">
                Remplissez ce formulaire et nous vous recontacterons dans les 24h.
              </p>
            </div>

            {/* Message de succès */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Message envoyé avec succès !</h4>
                  <p className="text-sm text-green-700">
                    Merci pour votre message. Notre équipe vous recontactera dans les 24 heures.
                  </p>
                </div>
              </div>
            )}

            {/* Message d'erreur */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Erreur d'envoi</h4>
                  <p className="text-sm text-red-700">
                    Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom complet */}
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-[color:var(--color-primary)] mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[color:var(--color-secondary)] focus:border-transparent transition-all"
                  placeholder="Votre nom et prénom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[color:var(--color-primary)] mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[color:var(--color-secondary)] focus:border-transparent transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-[color:var(--color-primary)] mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[color:var(--color-secondary)] focus:border-transparent transition-all"
                  placeholder="+216 XX XXX XXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[color:var(--color-primary)] mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[color:var(--color-secondary)] focus:border-transparent transition-all resize-vertical"
                  placeholder="Décrivez votre besoin, vos questions ou demandez un rendez-vous..."
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[color:var(--color-secondary)] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[color:var(--color-accent)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Colonne Droite - Informations de contact */}
          <div className="space-y-8">
            
            {/* Phrase de réassurance */}
            <div className="bg-[color:var(--color-secondary)]/10 rounded-2xl p-6 border border-[color:var(--color-secondary)]/20">
              <h3 className="text-xl font-bold text-[color:var(--color-primary)] mb-3">
                Une consultation personnalisée vous attend
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe d&apos;orthoprothésistes certifiés ISPO vous accueille dans un environnement 
                bienveillant pour évaluer vos besoins et vous présenter les solutions les plus adaptées.
              </p>
            </div>

            {/* Bureaux */}
            {contactInfo.map((office, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-bold text-[color:var(--color-primary)] mb-4">
                  Bureau de {office.location}
                </h4>
                
                <div className="space-y-3">
                  {/* Adresse */}
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-[color:var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{office.address}</span>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[color:var(--color-secondary)] flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-[color:var(--color-secondary)] transition-colors">
                      {office.phone}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-[color:var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-gray-500 mb-1">WhatsApp :</p>
                      {office.whatsapp.map((whatsapp, i) => (
                        <a 
                          key={i}
                          href={`https://wa.me/${whatsapp.replace(/\s+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-600 hover:text-[color:var(--color-secondary)] transition-colors"
                        >
                          {whatsapp}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[color:var(--color-secondary)] flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-[color:var(--color-secondary)] transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Horaires d'ouverture */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-[color:var(--color-primary)] mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[color:var(--color-secondary)]" />
                Horaires d&apos;ouverture
              </h4>
              
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{schedule.days}</span>
                    <span className="font-semibold text-[color:var(--color-primary)]">{String(schedule.hours)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 