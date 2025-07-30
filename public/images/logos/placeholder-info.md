# Logos des Partenaires - Guide d'Upload

Ce dossier doit contenir les logos suivants :

## Fichiers requis :

### Logos Delta Orthopédie :
1. **delta-orthopedie-logo.png** - Logo principal Delta Orthopédie (pour header et footer)
2. **delta-orthopedie-logo-white.png** - Logo blanc Delta Orthopédie (optionnel, pour footer)
3. **favicon.ico** - Icône du site (16x16, 32x32, 48x48)

### Logos des Partenaires :
4. **ottobock.png** - Logo Ottobock (Leader mondial en orthopédie)
5. **ossur.png** - Logo OSSUR (Innovation orthopédique mondiale)  
6. **ispo.png** - Logo ISPO (Certification internationale)
7. **delta-med-plus.svg** - Logo Delta Med Plus (Filiale spécialisée) - Format SVG
8. **ministere-sante.png** - Logo Ministère de la Santé (Agrément officiel)
9. **cnam.png** - Logo CNAM (Caisse Nationale d'Assurance Maladie)

## Spécifications recommandées :

### Pour les logos Delta Orthopédie :
- **Format** : PNG avec transparence
- **Dimensions** : 
  - Logo principal : 320px × 120px (header et footer)
  - Logo blanc (optionnel) : 320px × 120px (footer uniquement)
- **Résolution** : 72-150 DPI
- **Poids** : < 100KB par logo

### Pour les fichiers PNG (partenaires) :
- **Format** : PNG avec transparence
- **Dimensions** : Largeur max 200px, hauteur max 100px
- **Résolution** : 72-150 DPI
- **Poids** : < 50KB par logo pour des performances optimales

### Pour le fichier SVG (Delta Med Plus) :
- **Format** : SVG vectoriel
- **Dimensions** : Largeur max 200px, hauteur max 100px
- **Optimisation** : SVG nettoyé et optimisé
- **Poids** : < 10KB pour des performances optimales

## Instructions :

1. Placez vos fichiers dans ce dossier
2. Respectez exactement les noms de fichiers listés ci-dessus
3. Assurez-vous que les logos PNG ont un fond transparent
4. Le SVG Delta Med Plus sera automatiquement redimensionné
5. Testez l'affichage sur la page web

## Gestion des erreurs :

- **Header** : Affichage du logo principal avec fallback automatique
- **Footer** : Logo principal avec filtre blanc automatique
- **Logo blanc optionnel** : Le footer utilise le logo principal avec un filtre blanc par défaut
- **Composant LogoImage** : Gestion d'erreur disponible si nécessaire

## Affichage sur le site :

### Logo Delta Orthopédie :
- **Header** : Logo principal avec dimensions adaptatives
- **Footer** : Logo principal avec filtre blanc automatique
- **Fallback** : Gestion d'erreur intégrée dans le composant LogoImage

### Logos partenaires :
- **Section partenaires** : Dimensions d'affichage 96px × 64px (6rem × 4rem)
- **Effet hover** : Agrandissement au survol
- **Responsive design** : Grille adaptative
- **SVG Delta Med Plus** : Vectoriel et s'adapte parfaitement 