import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingUrgencyButton from "@/components/FloatingUrgencyButton";
import "@/lib/fontawesome"; // Import FontAwesome configuration

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delta Orthopédie - Solutions Prothétiques de Qualité",
  description: "Votre partenaire de confiance pour des solutions orthopédiques personnalisées. Expertise, précision et accompagnement humain pour votre bien-être.",
  keywords: ["orthopédie", "prothèses", "orthèses", "appareillage", "handicap", "mobilité"],
  authors: [{ name: "Delta Orthopédie" }],
  openGraph: {
    title: "Delta Orthopédie - Solutions Prothétiques de Qualité",
    description: "Votre partenaire de confiance pour des solutions orthopédiques personnalisées.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Header fixe */}
        <Header />
        
        {/* Contenu principal avec marge pour le header fixe */}
        <main className="min-h-screen">
        {children}
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Bouton d'assistance flottant */}
        <FloatingUrgencyButton />
      </body>
    </html>
  );
}
