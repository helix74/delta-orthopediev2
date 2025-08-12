# 🎯 CMS Strapi - Delta Orthopédie

## 📋 Vue d'ensemble

Ce projet intègre **Strapi** comme CMS headless pour permettre à votre cliente de gérer facilement le contenu du site web Delta Orthopédie.

## 🚀 Installation Rapide

### 1. Démarrer Strapi
```bash
# Windows
start-cms.bat

# Linux/Mac
chmod +x start-cms.sh
./start-cms.sh

# Ou manuellement
cd delta-cms
npm run develop
```

### 2. Configuration initiale
1. Ouvrir http://localhost:1337/admin
2. Créer un compte administrateur
3. Les données par défaut seront automatiquement créées

### 3. Variables d'environnement
Créer un fichier `.env.local` dans le projet principal :
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 📱 Interface d'Administration

### Accès
- **URL** : http://localhost:1337/admin
- **Fonctionnalités** :
  - Éditeur WYSIWYG pour le contenu riche
  - Upload d'images drag & drop
  - Gestion des médias intégrée
  - Prévisualisation en temps réel

### Sections gérées

#### 🏠 Hero Section
- **Titre principal** : Titre de la page d'accueil
- **Sous-titre** : Description courte
- **Description** : Texte détaillé (éditeur riche)
- **Boutons** : Texte et liens des boutons d'action
- **Médias** : Vidéo ou image de fond

#### 🎯 Expertise
- **Titre** : Nom du service
- **Description** : Explication détaillée
- **Icône** : Nom de l'icône FontAwesome
- **Image** : Photo du service
- **Ordre** : Position d'affichage

#### 💬 Témoignages
- **Nom client** : Nom du patient
- **Photo** : Photo du client
- **Témoignage** : Texte du témoignage
- **Note** : Note de 1 à 5 étoiles
- **Service** : Service concerné
- **Localisation** : Ville/région

#### ❓ FAQ
- **Question** : Question fréquente
- **Réponse** : Réponse détaillée (éditeur riche)
- **Catégorie** : Type de question
- **Ordre** : Position d'affichage
- **Populaire** : Marquer comme importante

#### 🤝 Partenaires
- **Nom** : Nom du partenaire
- **Logo** : Logo de l'entreprise
- **Site web** : Lien vers le site
- **Description** : Description du partenariat
- **Catégorie** : Type de partenaire

#### 📞 Contact
- **Téléphone** : Numéro principal
- **Email** : Adresse email
- **Adresse** : Adresse physique
- **Horaires** : Horaires d'ouverture
- **Réseaux sociaux** : Liens sociaux

## 🔧 Configuration Avancée

### Permissions
Les permissions sont automatiquement configurées pour permettre l'accès public aux données.

### Personnalisation
- **Thème** : Interface d'administration personnalisable
- **Workflows** : Flux de publication configurable
- **Rôles** : Gestion des utilisateurs et permissions

## 📊 Déploiement

### Strapi en Production
1. **Base de données** : Configurer PostgreSQL
2. **Hébergement** : Vercel, Netlify, ou serveur dédié
3. **Variables** : Mettre à jour `NEXT_PUBLIC_STRAPI_URL`

### Variables de Production
```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
```

## 🛠️ Maintenance

### Sauvegarde
- **Base de données** : Sauvegarde régulière
- **Médias** : Sauvegarde du dossier `public/uploads`
- **Configuration** : Sauvegarde des fichiers de config

### Mise à jour
```bash
cd delta-cms
npm update
npm run build
```

## 📞 Support

### Problèmes courants
1. **CORS** : Vérifier la configuration dans `config/middlewares.ts`
2. **Permissions** : Vérifier les rôles dans l'admin Strapi
3. **Médias** : Vérifier les permissions du dossier uploads

### Logs
```bash
# Logs Strapi
cd delta-cms
npm run develop

# Logs Next.js
npm run dev
```

## 🎯 Avantages pour votre cliente

### ✅ Simplicité
- Interface intuitive
- Pas de connaissances techniques requises
- Éditeur WYSIWYG

### ✅ Flexibilité
- Modification en temps réel
- Gestion des médias intégrée
- Contenu structuré

### ✅ Sécurité
- Gestion des rôles
- Sauvegarde automatique
- API sécurisée

### ✅ Performance
- Cache intelligent
- Images optimisées
- Chargement rapide

## 📈 Évolutions futures

- **Blog** : Section actualités
- **Galerie** : Photos des réalisations
- **Formulaires** : Contact avancé
- **Multilingue** : Support plusieurs langues
- **E-commerce** : Boutique en ligne 