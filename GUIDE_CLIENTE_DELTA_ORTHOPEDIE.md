# 📚 Guide Complet - Gestion du Site Delta Orthopédie

**Bienvenue dans votre espace d'administration !**  
Ce guide vous accompagne dans la gestion de tous les contenus dynamiques de votre site web.

---

## 📋 **Table des matières**

1. [🔐 Connexion à Strapi](#connexion-à-strapi)
2. [🏠 Gestion de la page d'accueil](#gestion-de-la-page-daccueil)
3. [👥 Gestion de l'équipe](#gestion-de-léquipe)
4. [🖼️ Gestion de la galerie d'images](#gestion-de-la-galerie-dimages)
5. [📧 Configuration des emails](#configuration-des-emails)
6. [🔧 Maintenance et dépannage](#maintenance-et-dépannage)

---

## 🔐 **Connexion à Strapi**

### **Étape 1 : Accéder à votre espace d'administration**

1. **Ouvrez votre navigateur** (Chrome, Firefox, Safari...)
2. **Allez à l'adresse** : `https://blessed-amusement-eec40fe5dd.strapiapp.com/admin`
3. **Entrez vos identifiants** :
   - **Email** : `votre-email@deltaorthopedie.tn`
   - **Mot de passe** : `[votre mot de passe]`

### **Étape 2 : Interface principale**

Une fois connectée, vous verrez le **tableau de bord** avec :
- 📊 **Statistiques** : Nombre d'articles, d'images, etc.
- 📝 **Contenus** : Vos sections modifiables
- ⚙️ **Paramètres** : Configuration générale

---

## 🏠 **Gestion de la page d'accueil**

### **1. Section Hero (Bannière principale)**

**Où modifier** : `Contenus` → `Hero`

**Ce que vous pouvez changer** :
- ✅ **Titre principal** : "Votre partenaire en orthopédie"
- ✅ **Sous-titre** : Description courte
- ✅ **Image de fond** : Photo principale
- ✅ **Bouton d'action** : Texte et lien

**Comment faire** :
1. Cliquez sur `Hero` dans le menu
2. Cliquez sur l'élément existant
3. Modifiez les champs souhaités
4. Cliquez sur `Sauvegarder`

### **2. Section Expertise**

**Où modifier** : `Contenus` → `Expertise`

**Ce que vous pouvez changer** :
- ✅ **Titre de section** : "Notre expertise"
- ✅ **Description** : Texte d'introduction
- ✅ **Points d'expertise** : Ajouter/modifier/supprimer

**Pour ajouter un point d'expertise** :
1. Dans `Expertise`, cliquez sur `Ajouter une entrée`
2. Remplissez :
   - **Titre** : "Prothèses sur mesure"
   - **Description** : "Fabrication personnalisée..."
   - **Icône** : Choisissez une icône
3. Cliquez sur `Sauvegarder`

### **3. Section Équipe**

**Où modifier** : `Contenus` → `Team`

**Ce que vous pouvez changer** :
- ✅ **Titre de section** : "Notre équipe"
- ✅ **Description** : Texte d'introduction
- ✅ **Membres de l'équipe** : Ajouter/modifier/supprimer

**Pour ajouter un membre** :
1. Dans `Team`, cliquez sur `Ajouter une entrée`
2. Remplissez :
   - **Nom** : "Dr. Ahmed Ben Ali"
   - **Poste** : "Orthopédiste"
   - **Description** : "Spécialisé en..."
   - **Photo** : Uploadez une photo
3. Cliquez sur `Sauvegarder`

---

## 👥 **Gestion de l'équipe**

### **Ajouter un nouveau membre**

1. **Allez dans** : `Contenus` → `Team`
2. **Cliquez sur** : `Ajouter une entrée`
3. **Remplissez les champs** :
   - **Nom** : Nom complet du membre
   - **Poste** : Fonction dans l'entreprise
   - **Description** : Biographie courte
   - **Photo** : Cliquez sur "Choisir un fichier" et uploadez une photo
   - **Ordre d'affichage** : Numéro pour l'ordre d'apparition

4. **Cliquez sur** : `Sauvegarder`

### **Modifier un membre existant**

1. **Allez dans** : `Contenus` → `Team`
2. **Cliquez sur** le membre à modifier
3. **Modifiez** les informations souhaitées
4. **Cliquez sur** : `Sauvegarder`

### **Supprimer un membre**

1. **Allez dans** : `Contenus` → `Team`
2. **Cliquez sur** le membre à supprimer
3. **Cliquez sur** : `Supprimer` (en bas à droite)
4. **Confirmez** la suppression

---

## 🖼️ **Gestion de la galerie d'images**

### **Comprendre la galerie**

La galerie d'images est divisée en **catégories** :
- 🏠 **Accueil** : Images de l'espace d'accueil
- 👥 **Équipe** : Photos de l'équipe au travail
- 🔧 **Atelier** : Photos de l'atelier de fabrication
- 🩺 **Consultation** : Photos des salles de consultation
- 🏭 **Fabrication** : Photos du processus de fabrication

### **Ajouter une nouvelle image**

1. **Allez dans** : `Contenus` → `Team Environment`
2. **Cliquez sur** : `Ajouter une entrée`
3. **Remplissez les champs** :
   - **Titre** : Nom de l'image (ex: "Atelier de fabrication")
   - **Description** : Description courte
   - **Catégorie** : Choisissez dans la liste déroulante
   - **Image** : Cliquez sur "Choisir un fichier" et uploadez votre photo
   - **Texte alternatif** : Description pour l'accessibilité

4. **Cliquez sur** : `Sauvegarder`

### **Modifier une image existante**

1. **Allez dans** : `Contenus` → `Team Environment`
2. **Cliquez sur** l'image à modifier
3. **Modifiez** les informations souhaitées
4. **Cliquez sur** : `Sauvegarder`

### **Supprimer une image**

1. **Allez dans** : `Contenus` → `Team Environment`
2. **Cliquez sur** l'image à supprimer
3. **Cliquez sur** : `Supprimer`
4. **Confirmez** la suppression

### **Conseils pour les images**

- 📏 **Taille recommandée** : 800x600 pixels minimum
- 📁 **Format** : JPG ou PNG
- 💾 **Poids** : Moins de 2MB par image
- 🎯 **Qualité** : Images nettes et bien éclairées

---

## 📧 **Configuration des emails**

### **Étape 1 : Créer un compte EmailJS**

1. **Allez sur** : [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Cliquez sur** : `Sign Up`
3. **Créez un compte** avec votre email professionnel
4. **Vérifiez** votre email

### **Étape 2 : Configurer le service email**

1. **Dans EmailJS**, allez dans `Email Services`
2. **Cliquez sur** : `Add New Service`
3. **Choisissez** : `Gmail`
4. **Connectez** votre Gmail : `contact@deltaorthopedie.tn`
5. **Copiez** le Service ID (ex: `service_abc123`)

### **Étape 3 : Créer un template d'email**

1. **Allez dans** : `Email Templates`
2. **Cliquez sur** : `Create New Template`
3. **Nom du template** : `contact_form_delta`
4. **Subject** : `Nouveau message de {{from_name}} - Site Delta Orthopédie`
5. **Content** : Copiez ce texte :

```
Bonjour,

Vous avez reçu un nouveau message depuis le formulaire de contact du site Delta Orthopédie.

Détails du contact :
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}

Message :
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Envoyé depuis : deltaorthopedie.tn
Date : {{current_date}}

Cordialement,
Système automatique Delta Orthopédie
```

6. **Dans Settings** :
   - **To Email** : `contact@deltaorthopedie.tn`
   - **From Name** : `Site Delta Orthopédie`
   - **Reply To** : `{{from_email}}`

7. **Cliquez sur** : `Save`
8. **Copiez** le Template ID (ex: `template_xyz789`)

### **Étape 4 : Obtenir votre clé publique**

1. **Allez dans** : `Account` → `General`
2. **Copiez** votre Public Key (ex: `AbCdEf123456`)

### **Étape 5 : Configurer sur Vercel**

1. **Allez sur** : [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. **Sélectionnez** votre projet `delta-orthopediev2`
3. **Allez dans** : `Settings` → `Environment Variables`
4. **Ajoutez ces 3 variables** :

| Nom de la variable | Valeur | Environnements |
|-------------------|--------|----------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_abc123` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_xyz789` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `AbCdEf123456` | Production, Preview, Development |

5. **Cliquez sur** : `Save`
6. **Le site se redéploiera automatiquement**

### **Tester le formulaire**

1. **Attendez 2-3 minutes** que le site se redéploie
2. **Allez sur** votre site : `https://delta-orthopediev2.vercel.app`
3. **Scrollez** jusqu'à la section contact
4. **Remplissez** le formulaire avec vos informations
5. **Cliquez sur** "Envoyer le message"
6. **Vérifiez** que vous recevez l'email

---

## 🔧 **Maintenance et dépannage**

### **Problèmes courants**

#### **"Les images ne s'affichent pas"**
- ✅ Vérifiez que l'image est bien uploadée
- ✅ Vérifiez que la catégorie est correcte
- ✅ Attendez quelques minutes (cache)

#### **"Le formulaire ne fonctionne pas"**
- ✅ Vérifiez que les variables EmailJS sont bien configurées
- ✅ Vérifiez que le template EmailJS est correct
- ✅ Testez avec un autre email

#### **"Les modifications ne s'affichent pas"**
- ✅ Cliquez sur "Sauvegarder" après chaque modification
- ✅ Attendez 1-2 minutes (cache)
- ✅ Actualisez la page (F5)

### **Sauvegarde et sécurité**

#### **Sauvegarde régulière**
- ✅ Strapi sauvegarde automatiquement vos données
- ✅ Vos images sont stockées de manière sécurisée
- ✅ Aucune action manuelle requise

#### **Sécurité**
- ✅ Ne partagez jamais vos identifiants
- ✅ Utilisez un mot de passe fort
- ✅ Déconnectez-vous après utilisation

### **Support technique**

Si vous rencontrez des problèmes :

1. **Vérifiez** ce guide en premier
2. **Notez** le problème exact
3. **Contactez** votre développeur avec :
   - Description du problème
   - Étapes que vous avez suivies
   - Capture d'écran si possible

---

## 📞 **Contacts utiles**

- **Site web** : [https://delta-orthopediev2.vercel.app](https://delta-orthopediev2.vercel.app)
- **Administration Strapi** : [https://blessed-amusement-eec40fe5dd.strapiapp.com/admin](https://blessed-amusement-eec40fe5dd.strapiapp.com/admin)
- **EmailJS** : [https://www.emailjs.com/](https://www.emailjs.com/)
- **Vercel Dashboard** : [https://vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🎯 **Récapitulatif des actions principales**

### **Modifier le contenu du site** :
1. Connectez-vous à Strapi
2. Allez dans la section souhaitée
3. Modifiez les informations
4. Sauvegardez

### **Ajouter des images** :
1. Allez dans "Team Environment"
2. Cliquez sur "Ajouter une entrée"
3. Uploadez votre image
4. Choisissez la catégorie
5. Sauvegardez

### **Configurer les emails** :
1. Créez un compte EmailJS
2. Configurez le service Gmail
3. Créez le template
4. Ajoutez les variables dans Vercel

---

**🎉 Félicitations ! Vous maîtrisez maintenant la gestion de votre site web.**

*Ce guide est votre référence permanente. N'hésitez pas à le consulter à chaque fois que vous souhaitez modifier votre site.*
