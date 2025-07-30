"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronDown,
  faChevronUp,
  faQuestionCircle,
  faEuroSign,
  faClock,
  faShieldAlt,
  faTools,
  faHeartbeat,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";

/**
 * FAQSection - Questions fréquemment posées
 * Objectif : Répondre aux inquiétudes communes des patients en orthopédie
 */
export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Questions financières",
      icon: faMoneyBill,
      faqs: [
        {
          question: "Combien coûte une prothèse sur-mesure ?",
          answer: "Le coût varie selon le type d'appareillage. Nous sommes conventionnés CNAM et vous accompagnons dans les démarches de prise de bon d'achat. Notre consultation est gratuite pour établir un devis personnalisé."
        },
        {
          question: "Ma mutuelle prend-elle en charge les frais ?",
          answer: "Oui, nous travaillons avec toutes les mutuelles. Nos assistantes vous aident à constituer vos dossiers de prise en charge. Le remboursement peut atteindre 100% selon votre couverture."
        },
        {
          question: "Puis-je échelonner les paiements ?",
          answer: "Absolument. Nous proposons des solutions de paiement adaptées à votre situation. Discutons-en ensemble lors de votre consultation gratuite."
        }
      ]
    },
    {
      title: "Délais et processus",
      icon: faClock,
      faqs: [
        {
          question: "Combien de temps pour recevoir ma prothèse ?",
          answer: "Comptez 2 à 4 semaines selon la complexité. Nous vous tenons informé(e) régulièrement de l'avancement et pouvons accélérer en cas d'urgence médicale."
        },
        {
          question: "Combien de rendez-vous sont nécessaires ?",
          answer: "En général : 1 consultation gratuite + 1 prise de mesures + 1 essayage + ajustements si besoin. Nous adaptons selon vos contraintes et votre rythme."
        },
        {
          question: "Que se passe-t-il si l'appareillage ne me convient pas ?",
          answer: "Nous effectuons tous les ajustements nécessaires gratuitement jusqu'à votre satisfaction complète. Votre confort est notre priorité absolue."
        }
      ]
    },
    {
      title: "Qualité et garanties",
      icon: faShieldAlt,
      faqs: [
        {
          question: "Quelle garantie sur mes appareillages ?",
          answer: "Une garantie est accordée selon les composantes de la prothèse, allant de 6 mois à 5 ans. L’entretien et les petites réparations sont offerts gratuitement à vie."
        },
        {
          question: "Vos prothèses sont-elles de qualité médicale ?",
          answer: "Toutes nos prothèses respectent les normes CE médicales. Nous utilisons les mêmes matériaux et composants que les leaders mondiaux (Ottobock, etc.)."
        },
        {
          question: "Puis-je faire du sport avec ma prothèse ?",
          answer: "Oui ! Nous concevons des appareillages adaptés à vos activités. Plusieurs de nos patients ont repris course, natation, vélo, etc. Tout est possible avec l'équipement adapté."
        }
      ]
    },
    {
      title: "Utilisation quotidienne",
      icon: faTools,
      faqs: [
        {
          question: "Comment entretenir ma prothèse ?",
          answer: "Entretien simple : nettoyage quotidien avec nos produits fournis. Nous vous formons complètement et restons disponibles pour toute question."
        },
        {
          question: "Ma prothèse sera-t-elle discrète ?",
          answer: "Nos prothèses esthétiques en silicone sont d'un réalisme saisissant. Pour les autres, nous proposons des revêtements cosmétiques très naturels."
        },
        {
          question: "Que faire en cas de problème technique ?",
          answer: "Hotline technique 7j/7. Dépannage rapide et prêt d'appareillage de secours si nécessaire. Vous n'êtes jamais laissé(e) sans solution."
        }
      ]
    },
    {
      title: "Accompagnement psychologique",
      icon: faHeartbeat,
      faqs: [
        {
          question: "Proposez-vous un soutien psychologique ?",
          answer: "Oui, nous travaillons avec des psychologues spécialisés. L'accompagnement familial est inclus dans notre approche globale de soins."
        },
        {
          question: "Comment gérer l'adaptation psychologique ?",
          answer: "Processus progressif avec notre équipe. Nous organisons aussi des rencontres avec d'autres patients volontaires qui partagent leur expérience positive."
        },
        {
          question: "Mon entourage peut-il être impliqué ?",
          answer: "Bien sûr ! Nous encourageons la participation de vos proches dans le processus. Des séances d'information famille sont organisées."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 1000 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" />
            Toutes vos questions, nos réponses
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
            Questions fréquemment posées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous avons rassemblé les questions les plus courantes de nos patients. 
            Si la vôtre n&apos;y figure pas, n&apos;hésitez pas à nous contacter directement.
          </p>
        </div>

        {/* FAQ par catégories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              
              {/* Titre de catégorie */}
              <div className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] p-6">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={category.icon} className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Questions de la catégorie */}
              <div className="divide-y divide-gray-100">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 1000 + faqIndex;
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <h4 className="text-lg font-semibold text-[color:var(--color-primary)] pr-4">
                          {faq.question}
                        </h4>
                        <FontAwesomeIcon 
                          icon={isOpen ? faChevronUp : faChevronDown} 
                          className="w-5 h-5 text-[color:var(--color-secondary)] flex-shrink-0" 
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[color:var(--color-secondary)]">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action final */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <FontAwesomeIcon icon={faQuestionCircle} className="w-12 h-12 text-[color:var(--color-secondary)] mb-4" />
          <h3 className="text-2xl font-bold text-[color:var(--color-primary)] mb-4">
            Vous avez d&apos;autres questions ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe est là pour vous apporter toutes les réponses personnalisées 
            dont vous avez besoin. N&apos;hésitez pas à nous contacter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[color:var(--color-secondary)] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[color:var(--color-accent)] transition-all duration-300 hover:scale-105"
            >
              Poser ma question
            </a>
            <a
              href="https://wa.me/21698364964?text=Bonjour%2C%20j'aimerais%20demander%20un%20rappel%20pour%20discuter%20de%20mes%20besoins%20en%20orthopédie."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-[color:var(--color-primary)] hover:text-white transition-all duration-300"
            >
              Demander un rappel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 