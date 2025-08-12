# 🚀 Guide de Déploiement - Delta Orthopédie

## 📋 Vue d'ensemble

Ce guide vous accompagne pour déployer votre site web Delta Orthopédie en production.

### **Architecture recommandée :**
- **Frontend** : Next.js sur Vercel
- **CMS** : Strapi sur Strapi Cloud
- **Base de données** : PostgreSQL (inclus avec Strapi Cloud)

---

## 🎯 Étape 1 : Déploiement Strapi CMS

### **1.1 Créer un compte Strapi Cloud**
1. Allez sur [cloud.strapi.io](https://cloud.strapi.io)
2. Créez un compte gratuit
3. Choisissez le plan "Starter" (gratuit)

### **1.2 Déployer votre CMS**
1. **Connectez votre repository GitHub :**
   ```bash
   # Dans votre terminal
   cd delta-cms
   git init
   git add .
   git commit -m "Initial commit - Strapi CMS"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/delta-orthopedie-cms.git
   git push -u origin main
   ```

2. **Sur Strapi Cloud :**
   - Cliquez "Create new project"
   - Sélectionnez votre repository
   - Choisissez la branche `main`
   - Sélectionnez le dossier `delta-cms`
   - Cliquez "Deploy"

### **1.3 Configuration post-déploiement**
1. **Créer un compte admin :**
   - Accédez à votre URL Strapi Cloud
   - Créez votre premier utilisateur admin

2. **Configurer les permissions :**
   - Allez dans Settings > Users & Permissions Plugin
   - Cliquez sur "Roles" > "Public"
   - Activez "find" pour tous vos content types :
     - Hero
     - Expertises
     - Testimonials
     - FAQ
     - Partners
     - Contact

3. **Récupérer l'URL de votre CMS :**
   - Notez l'URL : `https://votre-projet.strapiapp.com`

---

## 🌐 Étape 2 : Déploiement Next.js sur Vercel

### **2.1 Préparer l'environnement**
1. **Créer un fichier `.env.production` :**
   ```bash
   NEXT_PUBLIC_STRAPI_URL=https://votre-projet.strapiapp.com
   ```

2. **Mettre à jour la configuration CORS dans Strapi :**
   - Dans votre CMS Strapi Cloud
   - Allez dans Settings > Middlewares
   - Ajoutez votre domaine Vercel à la liste CORS

### **2.2 Déployer sur Vercel**
1. **Allez sur [vercel.com](https://vercel.com)**
2. **Connectez votre compte GitHub**
3. **Importez votre projet :**
   - Cliquez "New Project"
   - Sélectionnez votre repository
   - Framework : Next.js (détecté automatiquement)
   - Root Directory : `/` (racine du projet)

4. **Configuration des variables d'environnement :**
   - Dans les paramètres du projet Vercel
   - Allez dans "Environment Variables"
   - Ajoutez :
     ```
     NEXT_PUBLIC_STRAPI_URL = https://votre-projet.strapiapp.com
     ```

5. **Déployer :**
   - Cliquez "Deploy"
   - Attendez la fin du build

---

## 🔧 Étape 3 : Configuration finale

### **3.1 Vérifier le déploiement**
1. **Testez votre site :**
   - Accédez à votre URL Vercel
   - Vérifiez que toutes les sections s'affichent
   - Testez les images des partenaires

2. **Vérifiez le CMS :**
   - Connectez-vous à votre Strapi Cloud
   - Vérifiez que vous pouvez modifier le contenu

### **3.2 Optimisations**
1. **Performance :**
   - Vercel optimise automatiquement
   - Les images sont optimisées via Next.js

2. **Sécurité :**
   - HTTPS automatique
   - Headers de sécurité configurés

---

## 📱 Étape 4 : Configuration du domaine personnalisé

### **4.1 Ajouter votre domaine**
1. **Sur Vercel :**
   - Allez dans les paramètres du projet
   - Section "Domains"
   - Ajoutez votre domaine : `delta-orthopedie.com`

2. **Configuration DNS :**
   - Ajoutez les enregistrements DNS fournis par Vercel
   - Attendez la propagation (24-48h)

### **4.2 SSL/HTTPS**
- ✅ Automatique avec Vercel
- ✅ Certificat Let's Encrypt gratuit

---

## 🔄 Étape 5 : Workflow de mise à jour

### **5.1 Mise à jour du contenu**
1. **Via Strapi Cloud :**
   - Connectez-vous à votre CMS
   - Modifiez le contenu directement
   - Les changements sont instantanés

### **5.2 Mise à jour du code**
1. **Push sur GitHub :**
   ```bash
   git add .
   git commit -m "Mise à jour du site"
   git push
   ```

2. **Déploiement automatique :**
   - Vercel déploie automatiquement
   - Strapi Cloud se met à jour

---

## 📊 Monitoring et maintenance

### **6.1 Analytics**
- **Vercel Analytics** : Intégré gratuitement
- **Google Analytics** : Ajoutez votre code de suivi

### **6.2 Sauvegarde**
- **Strapi Cloud** : Sauvegarde automatique
- **Vercel** : Versioning automatique

### **6.3 Support**
- **Documentation** : `GUIDE_FINAL_CLIENTE.md`
- **Maintenance** : Mise à jour automatique

---

## 💰 Coûts estimés

### **Plan gratuit (recommandé pour commencer) :**
- **Vercel** : Gratuit (10GB/mois)
- **Strapi Cloud** : Gratuit (1 projet)
- **Total** : 0€/mois

### **Plan professionnel (si nécessaire) :**
- **Vercel Pro** : 20€/mois
- **Strapi Cloud Pro** : 99€/mois
- **Total** : 119€/mois

---

## 🎉 Félicitations !

Votre site Delta Orthopédie est maintenant en ligne et opérationnel !

### **URLs importantes :**
- **Site web** : `https://votre-projet.vercel.app`
- **CMS** : `https://votre-projet.strapiapp.com`
- **Documentation client** : `GUIDE_FINAL_CLIENTE.md`

### **Prochaines étapes :**
1. ✅ Tester toutes les fonctionnalités
2. ✅ Former la cliente à l'utilisation du CMS
3. ✅ Configurer le domaine personnalisé
4. ✅ Mettre en place les analytics

---

**Besoin d'aide ?** Consultez la documentation ou contactez le support technique. 