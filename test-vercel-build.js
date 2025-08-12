// Test pour vérifier si Vercel utilise la bonne variable d'environnement
console.log('🔍 Test de la variable d\'environnement Vercel');
console.log('============================================');
console.log('');

// Test 1: Variable d'environnement
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
console.log('📋 Variable d\'environnement NEXT_PUBLIC_STRAPI_URL:');
console.log('Valeur:', STRAPI_URL);
console.log('Type:', typeof STRAPI_URL);
console.log('Est définie:', !!STRAPI_URL);
console.log('');

// Test 2: URL par défaut
const DEFAULT_URL = 'https://blessed-amusement-eec40fe5dd.strapiapp.com';
const FINAL_URL = STRAPI_URL || DEFAULT_URL;
console.log('📋 URL finale utilisée:');
console.log('URL:', FINAL_URL);
console.log('Est la bonne URL:', FINAL_URL === DEFAULT_URL);
console.log('');

// Test 3: Test de connexion avec l'URL finale
async function testConnection() {
  try {
    console.log('📋 Test de connexion avec l\'URL finale...');
    const response = await fetch(`${FINAL_URL}/api/hero?populate=*`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Connexion réussie !');
      console.log('📊 Sous-titre reçu:', data.data.subtitle);
      console.log('Contient "eeeeeeeeeeeeeeee":', data.data.subtitle.includes('eeeeeeeeeeeeeeee'));
      console.log('');
      
      if (data.data.subtitle.includes('eeeeeeeeeeeeeeee')) {
        console.log('🎉 SUCCÈS: La modification est présente !');
        console.log('💡 Le problème vient de Vercel qui n\'utilise pas la bonne variable d\'environnement');
        console.log('');
        console.log('📋 Solutions:');
        console.log('1. Vérifier la variable NEXT_PUBLIC_STRAPI_URL dans Vercel');
        console.log('2. Redéployer après avoir mis à jour la variable');
        console.log('3. Vider le cache Vercel');
      } else {
        console.log('❌ La modification n\'est pas présente');
      }
    } else {
      console.log('❌ Erreur de connexion:', response.status);
    }
  } catch (error) {
    console.log('❌ Erreur:', error.message);
  }
}

testConnection(); 