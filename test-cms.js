const STRAPI_URL = 'http://localhost:1337';

async function testStrapiAPI() {
  console.log('🔍 Test de l\'API Strapi...\n');

  const endpoints = [
    '/api/hero',
    '/api/expertises',
    '/api/testimonials',
    '/api/faqs',
    '/api/partners',
    '/api/contact'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`📡 Test de ${endpoint}...`);
      const response = await fetch(`${STRAPI_URL}${endpoint}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ ${endpoint} - OK (${data.data ? data.data.length || 1 : 0} éléments)`);
      } else {
        console.log(`❌ ${endpoint} - Erreur ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ ${endpoint} - Erreur de connexion: ${error.message}`);
    }
  }

  console.log('\n🎯 Résumé:');
  console.log('- Si vous voyez des ✅, l\'API fonctionne correctement');
  console.log('- Si vous voyez des ❌, vérifiez que Strapi est démarré');
  console.log('- URL Strapi: http://localhost:1337');
  console.log('- URL Admin: http://localhost:1337/admin');
}

// Test de connexion de base
async function testConnection() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/hero`);
    if (response.ok) {
      console.log('🎉 Strapi est connecté et fonctionne !');
      return true;
    }
  } catch (error) {
    console.log('❌ Impossible de se connecter à Strapi');
    console.log('Vérifiez que Strapi est démarré avec: cd delta-cms && npm run develop');
    return false;
  }
}

// Exécuter les tests
async function runTests() {
  console.log('🚀 Test de l\'intégration Strapi - Delta Orthopédie\n');
  
  const isConnected = await testConnection();
  if (isConnected) {
    await testStrapiAPI();
  }
}

// Exécuter si le script est appelé directement
if (typeof window === 'undefined') {
  runTests();
}

module.exports = { testStrapiAPI, testConnection }; 