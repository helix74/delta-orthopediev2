# 📁 Guide des Médias - Delta Orthopédie

## 🗂️ Structure des Dossiers Créée

```
public/
├── images/
│   ├── protheses/
│   ├── ortheses/
│   ├── logos/
│   └── team/
└── videos/
```

---

## 🎥 VIDÉOS À AJOUTER

### `public/videos/`

**Pour la Hero Section :**
- `hero-presentation.mp4` *(1min 15s - Votre vidéo principale)*
- `hero-presentation.webm` *(Format alternatif pour compatibilité)*

**Vidéos optionnelles :**
- `demo-protheses.mp4` *(Démonstration des prothèses)*
- `temoignage-patient.mp4` *(Témoignage client)*
- `atelier-fabrication.mp4` *(Processus de fabrication)*

---

## 🖼️ IMAGES À AJOUTER

### `public/images/logos/`

- `delta-orthopedie-logo.png` *(Logo principal)*
- `delta-orthopedie-logo.svg` *(Version vectorielle)*
- `delta-orthopedie-logo-white.png` *(Version blanche pour fonds sombres)*
- `favicon.ico` *(Icône du site)*

### `public/images/protheses/`

**Images pour la galerie OfferSection :**
- `membres-inferieurs.jpg` *(Prothèses jambes/pieds)*
- `membres-superieurs.jpg` *(Prothèses bras/mains)*
- `esthetiques-silicone.jpg` *(Prothèses esthétiques)*
- `pediatriques.jpg` *(Prothèses enfants)*

**Images haute résolution recommandées :**
- `prothese-jambe-carbone.jpg`
- `prothese-bras-myoelectrique.jpg`
- `prothese-main-bio.jpg`
- `prothese-pied-sport.jpg`

### `public/images/ortheses/`

**Images pour la galerie OfferSection :**
- `semelles-orthopediques.jpg` *(Semelles sur-mesure)*
- `semelles-3d.jpg` *(Semelles impression 3D)*
- `ortheses-leckko.jpg` *(Système LECKKO)*
- `attelles.jpg` *(Attelles diverses)*
- `appareillage-pediatrique.jpg` *(Solutions enfants)*

**Images supplémentaires :**
- `corset-dorsale.jpg`
- `orthese-genou.jpg`
- `attelle-poignet.jpg`
- `chaussures-orthopediques.jpg`

### `public/images/team/`

**Photos pour la galerie ExpertiseSection :**
- `fondateur-portrait-1.jpg` *(Portrait M. Imed Djebbi)*
- `fondateur-portrait-2.jpg` *(Portrait Mme Cherifa Soltani)*
- `equipe-atelier.jpg` *(Équipe dans l'atelier de fabrication)*
- `consultation-patient.jpg` *(Consultation en cours avec patient)*
- `fabrication-prothese.jpg` *(Processus de fabrication en cours)*
- `ambiance-bureau.jpg` *(Ambiance accueil et bureaux)*
- `equipe-complete.jpg` *(Photo de groupe de toute l'équipe)*

**Images additionnelles recommandées :**
- `atelier-machines.jpg` *(Équipements de fabrication)*
- `formation-equipe.jpg` *(Session de formation)*
- `consultation-enfant.jpg` *(Consultation pédiatrique)*

---

## 📝 Utilisation dans le Code

### Vidéo Hero Section :
```tsx
<video autoPlay muted loop playsInline className="w-full h-full object-cover">
  <source src="/videos/hero-presentation.mp4" type="video/mp4" />
  <source src="/videos/hero-presentation.webm" type="video/webm" />
</video>
```

### Images prothèses :
```tsx
const prothesesImages = [
  { name: "Membres inférieurs", src: "/images/protheses/membres-inferieurs.jpg" },
  { name: "Membres supérieurs", src: "/images/protheses/membres-superieurs.jpg" },
  { name: "Esthétiques silicone", src: "/images/protheses/esthetiques-silicone.jpg" },
  { name: "Pédiatriques", src: "/images/protheses/pediatriques.jpg" }
];
```

### Images orthèses :
```tsx
const orthesesImages = [
  { name: "Semelles orthopédiques", src: "/images/ortheses/semelles-orthopediques.jpg" },
  { name: "Semelles 3D", src: "/images/ortheses/semelles-3d.jpg" },
  { name: "Orthèses LECKKO", src: "/images/ortheses/ortheses-leckko.jpg" },
  { name: "Attelles", src: "/images/ortheses/attelles.jpg" },
  { name: "Appareillage pédiatrique", src: "/images/ortheses/appareillage-pediatrique.jpg" }
];
```

---

## 📏 Recommandations Techniques

### **Formats recommandés :**
- **Images :** JPG (photos), PNG (logos/transparence), WebP (optimisation)
- **Vidéos :** MP4 (principal), WebM (fallback)

### **Tailles optimales :**
- **Hero vidéo :** 1920x1080 (Full HD) minimum
- **Images galerie :** 800x600px ou 1200x900px
- **Logos :** PNG 200x200px + SVG vectoriel
- **Photos équipe :** 400x400px (carré) ou 600x400px (paysage)

### **Optimisation :**
- **Compression :** 85% qualité pour les JPG
- **Taille max :** 500KB par image, 5MB pour vidéos
- **Alt text :** Toujours ajouter des descriptions

---

## 🔄 Étapes d'intégration

1. **Ajoutez vos fichiers** dans les dossiers correspondants
2. **Respectez les noms exacts** listés ci-dessus
3. **Testez l'affichage** sur le site
4. **Optimisez si nécessaire** (compression, redimensionnement)

---

## ⚡ Optimisations Next.js

Utilisez le composant `Image` de Next.js pour l'optimisation automatique :

```tsx
import Image from "next/image";

<Image
  src="/images/protheses/membres-inferieurs.jpg"
  alt="Prothèses membres inférieurs"
  width={800}
  height={600}
  className="rounded-lg"
  priority // Pour les images above-the-fold
/>
```

---

*📧 Pour toute question sur l'intégration des médias, n'hésitez pas à me demander !* 