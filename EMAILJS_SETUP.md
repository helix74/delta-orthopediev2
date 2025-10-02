# 📧 Configuration EmailJS - Delta Orthopédie

## 🎯 Pourquoi EmailJS ?

EmailJS permet de recevoir les messages du formulaire de contact directement par email sans avoir besoin d'un serveur backend.

## 📝 Étapes de configuration (5 minutes)

### 1️⃣ Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"**
3. Créez un compte gratuit (200 emails/mois gratuits)

### 2️⃣ Ajouter un service email

1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez **"Gmail"** (recommandé)
4. Connectez votre Gmail : `contact@deltaorthopedie.tn`
5. Copiez le **Service ID** (exemple : `service_abc123`)

### 3️⃣ Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

**Nom du template** : `contact_form_delta`

**Subject** : `Nouveau message de {{from_name}} - Site Delta Orthopédie`

**Content** :
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

4. Dans les **Settings** du template :
   - **To Email** : `contact@deltaorthopedie.tn`
   - **From Name** : `Site Delta Orthopédie`
   - **Reply To** : `{{from_email}}`

5. Cliquez sur **"Save"**
6. Copiez le **Template ID** (exemple : `template_xyz789`)

### 4️⃣ Obtenir votre Public Key

1. Allez dans **"Account"** > **"General"**
2. Trouvez votre **Public Key** (exemple : `AbCdEf123456`)

### 5️⃣ Ajouter les clés dans Vercel

1. Connectez-vous à **Vercel Dashboard**
2. Sélectionnez votre projet **delta-orthopediev2**
3. Allez dans **Settings > Environment Variables**
4. Ajoutez ces 3 variables :

| Key | Value | Environments |
|-----|-------|--------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_abc123` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_xyz789` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `AbCdEf123456` | Production, Preview, Development |

5. **Redéployez** votre site sur Vercel

### 6️⃣ Tester en local (optionnel)

1. Créez un fichier `.env.local` à la racine du projet :
```env
NEXT_PUBLIC_STRAPI_URL=https://blessed-amusement-eec40fe5dd.strapiapp.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

2. Lancez le serveur local : `npm run dev`
3. Testez le formulaire sur `http://localhost:3000/#contact`

## ✅ Variables du template

Les variables disponibles dans votre template EmailJS :

- `{{from_name}}` : Nom du client
- `{{from_email}}` : Email du client
- `{{phone}}` : Téléphone du client
- `{{message}}` : Message du client
- `{{current_date}}` : Date et heure de l'envoi

## 🎯 Résultat

Une fois configuré, chaque fois qu'un visiteur remplit le formulaire de contact sur votre site :

1. ✅ Le message est envoyé via EmailJS
2. ✅ Vous recevez un email à `contact@deltaorthopedie.tn`
3. ✅ Vous pouvez répondre directement en cliquant sur "Répondre"
4. ✅ Le visiteur voit un message de confirmation sur le site

## 🆘 Support

Si vous avez des questions :
- Documentation EmailJS : https://www.emailjs.com/docs/
- Support : support@emailjs.com

