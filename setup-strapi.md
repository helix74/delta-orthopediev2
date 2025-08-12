# Guide de Configuration Strapi pour Delta Orthopédie

## 🚀 Installation et Configuration

### 1. Démarrer Strapi
```bash
cd delta-cms
npm run develop
```

### 2. Accéder à l'interface d'administration
- Ouvrir http://localhost:1337/admin
- Créer un compte administrateur
- Les données par défaut seront automatiquement créées

### 3. Configuration des permissions
1. Aller dans Settings > Users & Permissions Plugin > Roles
2. Sélectionner "Public"
3. Activer les permissions pour :
   - Hero: find
   - Expertise: find
   - Testimonial: find
   - FAQ: find
   - Partner: find
   - Contact: find

### 4. Variables d'environnement
Créer un fichier `.env.local` dans le projet principal :
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 📝 Gestion du contenu

### Hero Section
- Titre principal
- Sous-titre
- Description
- Boutons d'action
- Vidéo/Image de fond

### Expertise
- Titre du service
- Description
- Icône
- Image
- Ordre d'affichage

### Témoignages
- Nom du client
- Photo
- Témoignage
- Note (1-5)
- Service concerné
- Localisation

### FAQ
- Question
- Réponse
- Catégorie
- Ordre d'affichage
- Marquer comme populaire

### Partenaires
- Nom
- Logo
- Site web
- Description
- Catégorie

### Contact
- Téléphone
- Email
- Adresse
- Horaires d'ouverture
- Réseaux sociaux

## 🔧 Déploiement

### Strapi en production
1. Configurer une base de données PostgreSQL
2. Déployer sur Vercel, Netlify ou serveur dédié
3. Mettre à jour NEXT_PUBLIC_STRAPI_URL

### Variables d'environnement de production
```
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
```

## 📱 Interface d'administration
- Interface intuitive pour votre cliente
- Éditeur WYSIWYG pour le contenu riche
- Upload d'images drag & drop
- Prévisualisation en temps réel
- Gestion des médias intégrée 