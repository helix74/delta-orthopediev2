# 🎯 Guide Final - CMS Delta Orthopédie

## 📋 Vue d'ensemble

Félicitations ! Votre site web Delta Orthopédie est maintenant équipé d'un **CMS Strapi** qui vous permet de gérer facilement tout le contenu sans avoir besoin de connaissances techniques.

## 🚀 Accès au CMS

### **URL d'administration :**
```
http://localhost:1337/admin
```

### **Identifiants :**
- Utilisez les identifiants que vous avez créés lors de la première connexion

## 📱 Sections gérées par le CMS

### **1. 🏠 Section Hero (Page d'accueil)**
**Localisation :** Content Manager > Single Types > Hero

**Champs modifiables :**
- **Titre principal** : Titre de la page d'accueil
- **Sous-titre** : Description courte sous le titre
- **Description** : Texte détaillé (éditeur riche)
- **Bouton principal** : Texte et lien du bouton "Prendre rendez-vous"
- **Bouton secondaire** : Texte et lien du bouton "Découvrir nos services"

**Exemple de modification :**
1. Cliquez sur "Hero" dans le menu
2. Modifiez le titre : "Delta Orthopédie - Votre partenaire santé"
3. Cliquez sur "Save" puis "Publish"

### **2. 🎯 Section Expertises (Nos services)**
**Localisation :** Content Manager > Collection Types > Expertises

**Champs modifiables :**
- **Titre** : Nom du service (ex: "Orthèses sur mesure")
- **Description** : Explication détaillée du service
- **Icône** : Nom de l'icône FontAwesome (ex: "fa-brace")
- **Image** : Photo du service (optionnel)
- **Ordre** : Position d'affichage (1, 2, 3...)
- **Actif** : Cocher pour afficher le service

**Comment ajouter un nouveau service :**
1. Cliquez sur "Create new entry"
2. Remplissez les champs
3. Cliquez sur "Save" puis "Publish"

### **3. 💬 Section Témoignages**
**Localisation :** Content Manager > Collection Types > Témoignages

**Champs modifiables :**
- **Nom du client** : Nom du patient
- **Témoignage** : Citation courte (s'affiche en grand)
- **Description** : Histoire complète (s'affiche en dessous)
- **Note** : Note de 1 à 5 étoiles
- **Service** : Service concerné (ex: "Prothèse tibiale")
- **Localisation** : Ville/région
- **Photo** : Photo du client (optionnel)

**Important :** 
- Le champ "Témoignage" = citation courte
- Le champ "Description" = histoire complète
- Si vous ne remplissez que "Témoignage", le système sépare automatiquement

### **4. ❓ Section FAQ**
**Localisation :** Content Manager > Collection Types > FAQ

**Champs modifiables :**
- **Question** : Question fréquente
- **Réponse** : Réponse détaillée (éditeur riche)
- **Catégorie** : Type de question (général, services, paiement, etc.)
- **Ordre** : Position d'affichage
- **Populaire** : Cocher pour les questions importantes

**Comment organiser les FAQ :**
- Utilisez les catégories pour organiser
- Les questions populaires s'affichent en premier
- L'ordre numérique détermine l'affichage

### **5. 🤝 Section Partenaires**
**Localisation :** Content Manager > Collection Types > Partenaires

**Champs modifiables :**
- **Nom** : Nom du partenaire
- **Logo** : Image du logo (format PNG/JPG recommandé)
- **Site web** : Lien vers le site du partenaire
- **Description** : Description courte
- **Catégorie** : Type de partenaire (fournisseur, assurance, etc.)
- **Ordre** : Position d'affichage

**Conseils pour les logos :**
- Format : PNG ou JPG
- Taille recommandée : 200x100 pixels
- Fond transparent pour les PNG

### **6. 📞 Section Contact**
**Localisation :** Content Manager > Single Types > Contact

**Champs modifiables :**
- **Téléphone** : Numéro principal
- **Email** : Adresse email
- **Adresse** : Adresse complète
- **Horaires d'ouverture** : Horaires par jour
- **Téléphone d'urgence** : Numéro d'urgence
- **Réseaux sociaux** : Liens Facebook, Instagram, LinkedIn

## 🛠️ Fonctionnalités avancées

### **Gestion des médias**
- **Upload** : Glissez-déposez vos images
- **Organisation** : Créez des dossiers pour organiser
- **Optimisation** : Les images sont automatiquement optimisées

### **Éditeur de texte riche**
- **Mise en forme** : Gras, italique, listes
- **Liens** : Ajoutez des liens vers d'autres pages
- **Images** : Insérez des images dans le texte

### **Prévisualisation**
- **Aperçu** : Voir les changements avant publication
- **Brouillon** : Sauvegarder sans publier
- **Publication** : Rendre visible sur le site

## 📋 Checklist de maintenance

### **Quotidien :**
- [ ] Vérifier les nouveaux messages de contact
- [ ] Surveiller les performances du site

### **Hebdomadaire :**
- [ ] Vérifier que toutes les sections s'affichent correctement
- [ ] Mettre à jour les horaires si nécessaire

### **Mensuel :**
- [ ] Ajouter de nouveaux témoignages
- [ ] Mettre à jour les FAQ selon les questions reçues
- [ ] Vérifier les liens des partenaires

## 🔧 Dépannage

### **Problème : Le site ne s'affiche pas**
**Solution :**
1. Vérifiez que Strapi est démarré : http://localhost:1337/admin
2. Vérifiez que Next.js est démarré : http://localhost:3000
3. Redémarrez les services si nécessaire

### **Problème : Les modifications ne s'affichent pas**
**Solution :**
1. Vérifiez que vous avez cliqué sur "Publish"
2. Attendez quelques secondes (cache)
3. Rechargez la page du site

### **Problème : Erreur lors de la sauvegarde**
**Solution :**
1. Vérifiez que tous les champs obligatoires sont remplis
2. Essayez de sauvegarder en plusieurs fois
3. Contactez le développeur si le problème persiste

## 📞 Support

### **En cas de problème :**
1. **Vérifiez d'abord** ce guide
2. **Redémarrez** les services
3. **Contactez** le développeur avec :
   - Description du problème
   - Capture d'écran si possible
   - URL de la page concernée

## 🎉 Félicitations !

Votre CMS est maintenant opérationnel ! Vous pouvez :
- ✅ Modifier tous les textes du site
- ✅ Ajouter/supprimer des services
- ✅ Gérer les témoignages clients
- ✅ Mettre à jour les FAQ
- ✅ Gérer les partenaires
- ✅ Modifier les informations de contact

**Le site est entièrement sous votre contrôle !** 🚀 