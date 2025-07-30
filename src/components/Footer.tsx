import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import FoxifyCredit from "./FoxifyCredit";

/**
 * Composant Footer - Pied de page du site
 * Features : Liens légaux, Réseaux sociaux, Copyright automatique, Signature agence
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions Légales" },
    { href: "/politique-confidentialite", label: "Politique de Confidentialité" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/Centre.Deltaorthopedie",
      label: "Facebook",
      icon: faFacebookF,
    },
    {
      href: "https://instagram.com/deltaorthopedie",
      label: "Instagram", 
      icon: faInstagram,
    },
  ];

  return (
    <footer className="bg-[color:var(--color-primary)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative w-32 h-12 mr-4">
                <Image
                  src="/images/logos/delta-orthopedie-logo.png"
                  alt="Delta Orthopédie - Solutions orthopédiques de qualité"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="128px"
                />
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Votre partenaire de confiance pour des solutions orthopédiques de qualité. 
              Précision, humanité et expertise à votre service.
            </p>
          </div>

          {/* Liens légaux */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Informations légales
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-[color:var(--color-secondary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Suivez-nous
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-800/50 hover:bg-[color:var(--color-secondary)] transition-colors duration-200 group"
                  aria-label={`Suivez-nous sur ${social.label}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5 text-blue-200 group-hover:text-white" />
                </Link>
              ))}
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Restez connecté pour nos dernières actualités
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright - À gauche */}
            <p className="text-blue-200 text-sm">
              © {currentYear} Delta Orthopédie. Tous droits réservés.
            </p>

            {/* Signature agence - Au centre */}
            <div className="flex-1 flex justify-center">
              <FoxifyCredit className="text-blue-300 text-xs" />
            </div>

            {/* Espace vide pour équilibrer - À droite */}
            <div className="hidden md:block w-0"></div>
          </div>
        </div>
      </div>
    </footer>
  );
} 