"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

/**
 * Composant Header - Navigation principale du site
 * Features : Responsive, Menu hamburger mobile, Smooth scroll vers sections, Active section highlighting
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  // Navigation items avec ancres pour le smooth scroll - ORDRE CORRIGÉ
  const navigationItems = useMemo(() => [
    { href: "/", label: "Accueil", isHome: true, id: "accueil" },
    { href: "/#solutions", label: "Solutions", id: "solutions" },
    { href: "/#processus", label: "Processus", id: "processus" },
    { href: "/#expertise", label: "Expertise", id: "expertise" },
    { href: "/#temoignages", label: "Témoignages", id: "temoignages" },
    { href: "/#faq", label: "FAQ", id: "faq" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ], []);

  // Détection de la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id).filter(id => id !== "accueil");
      const scrollPosition = window.scrollY + 100;

      // Vérifier si on est en haut (Hero)
      if (scrollPosition < 200) {
        setActiveSection("accueil");
        return;
      }

      // Vérifier les autres sections
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    // Fermer le menu mobile lors du clic sur un lien
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={handleLinkClick}
          >
            <div className="relative w-32 h-12 md:w-40 md:h-14">
              <Image
                src="/images/logos/delta-orthopedie-logo.png"
                alt="Delta Orthopédie - Solutions orthopédiques de qualité"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
                priority
              />
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-gray-700 hover:text-[color:var(--color-secondary)] transition-colors duration-200 font-medium",
                  item.isHome && "text-[color:var(--color-primary)]",
                  activeSection === item.id && "text-[color:var(--color-primary)] font-bold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-gray-700" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation Mobile */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-2 border-t border-gray-100 max-h-80 overflow-y-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "block px-4 py-2 text-gray-700 hover:text-[color:var(--color-secondary)] hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium",
                  item.isHome && "text-[color:var(--color-primary)]",
                  activeSection === item.id && "text-[color:var(--color-primary)] font-bold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
} 