// Test pour vérifier la variable d'environnement Vercel
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://blessed-amusement-eec40fe5dd.strapiapp.com';

console.log('🔍 Test de la variable d\'environnement Vercel');
console.log('============================================');
console.log('');

console.log(`📋 Variable d'environnement: ${STRAPI_URL}`);
console.log('');

async function testVercelEnvironment() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/hero?populate=*`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Connexion réussie !');
      console.log('📊 Sous-titre actuel:', data.data.subtitle);
      console.log('');
      
      if (data.data.subtitle.includes('eeeeeeeeeeeeeeee')) {
        console.log('🎉 Votre modification est bien présente !');
        console.log('💡 Le problème vient probablement du cache du navigateur.');
        console.log('');
        console.log('📋 Solutions à essayer :');
        console.log('1. Ctrl + F5 pour vider le cache');
        console.log('2. Ouvrir en navigation privée');
        console.log('3. Vider complètement le cache du navigateur');
      } else {
        console.log('❌ La modification n\'est pas visible');
        console.log('💡 Vérifiez que vous avez bien sauvegardé dans Strapi');
      }
    } else {
      console.log('❌ Erreur de connexion:', response.status);
    }
  } catch (error) {
    console.log('❌ Erreur:', error.message);
  }
}

testVercelEnvironment(); 