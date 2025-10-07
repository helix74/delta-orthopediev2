# 📚 Guide Complet - Administration Strapi Delta Orthopédie

**Guide précis basé sur les vraies sections de votre CMS Strapi**

---

## 📋 **Table des matières**

1. [🔐 Connexion à Strapi](#connexion-à-strapi)
2. [🏠 Hero Section (Page d'accueil)](#hero-section)
3. [🎯 Expertise (Services)](#expertise)
4. [🖼️ Team Environment (Galerie d'images)](#team-environment)
5. [👥 Témoignages](#témoignages)
6. [🤝 Partenaires](#partenaires)
7. [❓ FAQ](#faq)
8. [📞 Contact](#contact)
9. [📧 Configuration EmailJS](#configuration-emailjs)

---

## 🔐 **Connexion à Strapi**

### **Accès à l'administration**
- **URL** : `https://blessed-amusement-eec40fe5dd.strapiapp.com/admin`
- **Email** : `[votre-email]`
- **Mot de passe** : `[votre-mot-de-passe]`

### **Interface principale**
Une fois connectée, vous verrez le menu de gauche avec :
- 📊 **Tableau de bord** : Statistiques générales
- 📝 **Gestionnaire de contenu** : Gestion des contenus
- ⚙️ **Paramètres** : Configuration

---

## 🏠 **Hero Section**

**Type** : Single Type (une seule entrée)  
**Nom dans Strapi** : `Hero Section`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `title` | Texte | ✅ Oui | Titre principal (ex: "Delta Orthopédie - Votre partenaire santé") |
| `subtitle` | Texte | ✅ Oui | Sous-titre (ex: "Solutions orthopédiques personnalisées...") |
| `description` | Rich Text | ✅ Oui | Description détaillée avec formatage |
| `primaryButtonText` | Texte | ❌ Non | Texte du bouton principal (défaut: "Prendre rendez-vous") |
| `primaryButtonLink` | Texte | ❌ Non | Lien du bouton principal (défaut: "#contact") |
| `secondaryButtonText` | Texte | ❌ Non | Texte du bouton secondaire (défaut: "Découvrir nos services") |
| `secondaryButtonLink` | Texte | ❌ Non | Lien du bouton secondaire (défaut: "#expertise") |
| `videoUrl` | Média | ❌ Non | Vidéo de fond (format MP4 recommandé) |
| `backgroundImage` | Média | ❌ Non | Image de fond (format JPG/PNG) |
| `isActive` | Case à cocher | ❌ Non | Activer/désactiver la section |

### **Comment modifier** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types uniques` → `Hero Section`
2. **Cliquez sur** l'entrée existante
3. **Modifiez** les champs souhaités
4. **Cliquez sur** `Enregistrer` (en haut à droite)
5. **Cliquez sur** `Publier` pour publier les changements

---

## 🎯 **Expertise**

**Type** : Collection Type (plusieurs entrées)  
**Nom dans Strapi** : `Expertise`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `title` | Texte | ✅ Oui | Titre du service (ex: "Prothèses sur mesure") |
| `description` | Rich Text | ✅ Oui | Description détaillée du service |
| `icon` | Texte | ❌ Non | Nom de l'icône (ex: "fa-user-md") |
| `image` | Média | ❌ Non | Image du service |
| `order` | Nombre | ❌ Non | Ordre d'affichage (0, 1, 2, 3...) |
| `isActive` | Case à cocher | ❌ Non | Activer/désactiver ce service |
| `features` | JSON | ❌ Non | Fonctionnalités avancées (pour développeurs) |
| `slug` | UID | ❌ Non | URL automatique basée sur le titre |

### **Ajouter un nouveau service** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types de collection` → `Expertise`
2. **Cliquez sur** `Créer une nouvelle entrée`
3. **Remplissez** :
   - **Title** : "Orthèses sur mesure"
   - **Description** : Description du service avec formatage
   - **Icon** : "fa-bone" (optionnel)
   - **Order** : 1 (pour l'ordre d'affichage)
   - **Is Active** : ✅ Activé
4. **Cliquez sur** `Enregistrer`
5. **Cliquez sur** `Publier`

### **Modifier un service existant** :
1. **Cliquez sur** le service à modifier
2. **Modifiez** les champs souhaités
3. **Cliquez sur** `Enregistrer`
4. **Cliquez sur** `Publier`

---

## 🖼️ **Team Environment**

**Type** : Collection Type (plusieurs entrées)  
**Nom dans Strapi** : `Team Environment`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `title` | Texte | ✅ Oui | Titre de l'image (ex: "Atelier de fabrication") |
| `description` | Texte | ✅ Oui | Description de l'image |
| `category` | Liste déroulante | ✅ Oui | Catégorie de l'image |
| `image` | Média | ✅ Oui | L'image à afficher |
| `order` | Nombre | ✅ Oui | Ordre d'affichage |
| `isActive` | Case à cocher | ✅ Oui | Activer/désactiver cette image |

### **Catégories disponibles** :
- `accueil` : Images de l'espace d'accueil
- `equipe` : Photos de l'équipe au travail
- `atelier` : Photos de l'atelier
- `consultation` : Photos des salles de consultation
- `fabrication` : Photos du processus de fabrication

### **Ajouter une nouvelle image** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types de collection` → `Team Environment`
2. **Cliquez sur** `Créer une nouvelle entrée`
3. **Remplissez** :
   - **Title** : "Salle de consultation moderne"
   - **Description** : "Notre salle de consultation équipée des dernières technologies"
   - **Category** : Choisissez dans la liste (ex: "consultation")
   - **Image** : Uploadez votre photo (JPG/PNG, max 2MB)
   - **Order** : 1 (pour l'ordre d'affichage)
   - **Is Active** : ✅ Activé
4. **Cliquez sur** `Enregistrer`
5. **Cliquez sur** `Publier`

### **Modifier une image existante** :
1. **Cliquez sur** l'image à modifier
2. **Modifiez** les champs souhaités
3. **Cliquez sur** `Enregistrer`
4. **Cliquez sur** `Publier`

---

## 👥 **Témoignages**

**Type** : Collection Type (plusieurs entrées)  
**Nom dans Strapi** : `Témoignage`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `clientName` | Texte | ✅ Oui | Nom du client |
| `clientPhoto` | Média | ❌ Non | Photo du client |
| `testimonial` | Texte | ✅ Oui | Témoignage du client |
| `description` | Texte | ❌ Non | Description supplémentaire |
| `rating` | Nombre | ❌ Non | Note de 1 à 5 (défaut: 5) |
| `service` | Texte | ❌ Non | Service concerné |
| `location` | Texte | ❌ Non | Localisation du client |
| `isVerified` | Case à cocher | ❌ Non | Témoignage vérifié |
| `order` | Nombre | ❌ Non | Ordre d'affichage |
| `isActive` | Case à cocher | ❌ Non | Activer/désactiver |

### **Ajouter un nouveau témoignage** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types de collection` → `Témoignage`
2. **Cliquez sur** `Créer une nouvelle entrée`
3. **Remplissez** :
   - **Client Name** : "Ahmed Ben Ali"
   - **Testimonial** : "Excellent service, très professionnel..."
   - **Rating** : 5
   - **Service** : "Prothèse de genou"
   - **Is Verified** : ✅ Activé
   - **Is Active** : ✅ Activé
4. **Cliquez sur** `Enregistrer`
5. **Cliquez sur** `Publier`

---

## 🤝 **Partenaires**

**Type** : Collection Type (plusieurs entrées)  
**Nom dans Strapi** : `Partenaire`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `name` | Texte | ✅ Oui | Nom du partenaire |
| `logo` | Média | ✅ Oui | Logo du partenaire |
| `website` | Texte | ❌ Non | Site web du partenaire |
| `description` | Texte | ❌ Non | Description du partenaire |
| `category` | Liste déroulante | ❌ Non | Catégorie du partenaire |
| `order` | Nombre | ❌ Non | Ordre d'affichage |
| `isActive` | Case à cocher | ❌ Non | Activer/désactiver |

### **Catégories disponibles** :
- `assurance` : Compagnies d'assurance
- `fournisseur` : Fournisseurs de matériel
- `clinique` : Cliniques partenaires
- `laboratoire` : Laboratoires d'analyse

### **Ajouter un nouveau partenaire** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types de collection` → `Partenaire`
2. **Cliquez sur** `Créer une nouvelle entrée`
3. **Remplissez** :
   - **Name** : "Clinique La Marsa"
   - **Logo** : Uploadez le logo (PNG avec fond transparent recommandé)
   - **Website** : "https://clinique-lamarsa.tn"
   - **Category** : "clinique"
   - **Is Active** : ✅ Activé
4. **Cliquez sur** `Enregistrer`
5. **Cliquez sur** `Publier`

---

## ❓ **FAQ**

**Type** : Collection Type (plusieurs entrées)  
**Nom dans Strapi** : `FAQ`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `question` | Texte | ✅ Oui | Question du client |
| `answer` | Rich Text | ✅ Oui | Réponse détaillée |
| `category` | Liste déroulante | ❌ Non | Catégorie de la question |
| `order` | Nombre | ❌ Non | Ordre d'affichage |
| `isActive` | Case à cocher | ❌ Non | Activer/désactiver |
| `isPopular` | Case à cocher | ❌ Non | Question populaire |

### **Catégories disponibles** :
- `general` : Questions générales
- `services` : Questions sur les services
- `rendez-vous` : Questions sur les rendez-vous
- `paiement` : Questions sur le paiement
- `assurance` : Questions sur l'assurance

### **Ajouter une nouvelle FAQ** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types de collection` → `FAQ`
2. **Cliquez sur** `Créer une nouvelle entrée`
3. **Remplissez** :
   - **Question** : "Quels sont vos horaires d'ouverture ?"
   - **Answer** : "Nous sommes ouverts du lundi au vendredi de 8h à 18h..."
   - **Category** : "general"
   - **Is Popular** : ✅ Activé (si question fréquente)
   - **Is Active** : ✅ Activé
4. **Cliquez sur** `Enregistrer`
5. **Cliquez sur** `Publier`

---

## 📞 **Contact**

**Type** : Single Type (une seule entrée)  
**Nom dans Strapi** : `Contact`

### **Champs disponibles** :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `phone` | Texte | ✅ Oui | Numéro de téléphone principal |
| `email` | Email | ✅ Oui | Adresse email de contact |
| `address` | Texte | ✅ Oui | Adresse complète |
| `openingHours` | JSON | ✅ Oui | Horaires d'ouverture (format JSON) |
| `emergencyPhone` | Texte | ❌ Non | Numéro d'urgence |
| `socialMedia` | JSON | ❌ Non | Réseaux sociaux (format JSON) |
| `mapEmbed` | Texte | ❌ Non | Code d'intégration de carte |

### **Comment modifier** :
1. **Allez dans** : `Gestionnaire de contenu` → `Types uniques` → `Contact`
2. **Cliquez sur** l'entrée existante
3. **Modifiez** les informations de contact
4. **Cliquez sur** `Enregistrer`
5. **Cliquez sur** `Publier`

---

## 📧 **Gestion des emails reçus**

### **Accès à EmailJS (déjà configuré)**

Votre système d'emails est déjà configuré et fonctionnel. Voici comment gérer les emails reçus :

### **Connexion à EmailJS**

1. **Allez sur** : [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Cliquez sur** : `Sign In`
3. **Connectez-vous** avec vos identifiants

### **Gestion des emails**

#### **Voir les emails reçus**
- **Dans votre boîte email** : `contact@deltaorthopedie.tn`
- **Tous les messages** du formulaire de contact arrivent directement dans cette boîte
- **Format des emails** : 
  - **Objet** : "Nouveau message de [Nom du client] - Site Delta Orthopédie"
  - **Contenu** : Nom, email, téléphone, message du client

#### **Répondre aux clients**
1. **Ouvrez** l'email reçu
2. **Cliquez sur** "Répondre"
3. **L'email de réponse** ira directement au client
4. **Écrivez** votre réponse professionnelle

#### **Organiser les emails**
- **Créez des dossiers** dans votre boîte email :
  - "Demandes urgentes"
  - "Rendez-vous"
  - "Devis"
  - "Informations générales"

### **Vérification du bon fonctionnement**

#### **Tester le formulaire**
1. **Allez sur** votre site : [https://delta-orthopediev2.vercel.app](https://delta-orthopediev2.vercel.app)
2. **Scrollez** jusqu'à la section contact
3. **Remplissez** le formulaire avec vos informations
4. **Cliquez sur** "Envoyer le message"
5. **Vérifiez** que vous recevez l'email

#### **En cas de problème**
- **Vérifiez** votre boîte email (spam aussi)
- **Attendez** 2-3 minutes (délai de traitement)
- **Contactez** votre développeur si nécessaire

### **Conseils pour la gestion**

#### **Réponse rapide**
- **Répondez** dans les 24h maximum
- **Utilisez** un ton professionnel et chaleureux
- **Confirmez** la réception de la demande

#### **Suivi des demandes**
- **Notez** les informations importantes
- **Planifiez** les rendez-vous
- **Archivez** les emails traités

---

## 🔧 **Conseils pratiques**

### **Ordre d'affichage**
- Utilisez le champ `order` pour contrôler l'ordre d'affichage
- Plus le nombre est petit, plus l'élément apparaît en premier
- Exemple : 0, 1, 2, 3... ou 10, 20, 30...

### **Images**
- **Format recommandé** : JPG pour les photos, PNG pour les logos
- **Taille maximale** : 2MB par image
- **Résolution** : 800x600 pixels minimum
- **Nommage** : Utilisez des noms descriptifs

### **Rich Text**
- Utilisez l'éditeur pour formater vos textes
- **Gras** : Pour les titres importants
- **Italique** : Pour les citations
- **Listes** : Pour organiser l'information

### **Publication**
- **Enregistrer** : Sauvegarde les modifications
- **Publier** : Rend les modifications visibles sur le site
- **Dépublier** : Retire du site (mais garde en brouillon)

---

## 🆘 **Dépannage**

### **Les modifications ne s'affichent pas**
1. Vérifiez que vous avez cliqué sur `Publier`
2. Attendez 1-2 minutes (cache)
3. Actualisez la page du site (F5)

### **Erreur d'upload d'image**
1. Vérifiez la taille (max 2MB)
2. Vérifiez le format (JPG, PNG)
3. Réessayez avec une image plus petite

### **Formulaire de contact ne fonctionne pas**
1. Vérifiez votre boîte email (dossier spam aussi)
2. Attendez 2-3 minutes (délai de traitement)
3. Contactez votre développeur si le problème persiste

---

## 📞 **Support**

- **Site web** : [https://delta-orthopediev2.vercel.app](https://delta-orthopediev2.vercel.app)
- **Administration Strapi** : [https://blessed-amusement-eec40fe5dd.strapiapp.com/admin](https://blessed-amusement-eec40fe5dd.strapiapp.com/admin)
- **EmailJS** : [https://www.emailjs.com/](https://www.emailjs.com/)
- **Boîte email** : `contact@deltaorthopedie.tn`

---

**🎉 Vous maîtrisez maintenant l'administration complète de votre site !**

*Ce guide correspond exactement aux sections et champs de votre CMS Strapi.*
