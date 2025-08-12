const STRAPI_URL = 'https://blessed-amusement-eec40fe5dd.strapiapp.com';

async function testStrapiConnection() {
  console.log('🔍 Test de connexion Strapi Cloud...');
  console.log(`URL: ${STRAPI_URL}`);
  console.log('');

  try {
    // Test de connexion de base
    const response = await fetch(`${STRAPI_URL}/api/hero?populate=*`);
    console.log(`✅ Statut de connexion: ${response.status}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Connexion réussie !');
      console.log('📊 Données reçues:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Erreur de connexion');
      console.log('📋 Réponse:', await response.text());
    }
  } catch (error) {
    console.log('❌ Erreur de connexion:', error.message);
  }
}

async function testAllEndpoints() {
  const endpoints = [
    '/api/hero?populate=*',
    '/api/expertises?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/testimonials?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/faqs?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/partners?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/contact'
  ];

  console.log('🔍 Test de tous les endpoints...');
  console.log('');

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${STRAPI_URL}${endpoint}`);
      const status = response.status;
      const statusText = response.statusText;
      
      if (status === 200) {
        const data = await response.json();
        const count = data.data ? (Array.isArray(data.data) ? data.data.length : 1) : 0;
        console.log(`✅ ${endpoint} - ${status} (${count} entrées)`);
      } else {
        console.log(`❌ ${endpoint} - ${status} ${statusText}`);
      }
    } catch (error) {
      console.log(`❌ ${endpoint} - Erreur: ${error.message}`);
    }
  }
}

// Exécuter les tests
async function runTests() {
  console.log('🚀 Test de production - Delta Orthopédie');
  console.log('==========================================');
  console.log('');
  
  await testStrapiConnection();
  console.log('');
  await testAllEndpoints();
  
  console.log('');
  console.log('📋 Instructions:');
  console.log('1. Si tous les endpoints retournent 200, la connexion fonctionne');
  console.log('2. Si vous voyez "0 entrées", créez des données dans le CMS');
  console.log('3. Si vous voyez des erreurs 403, vérifiez les permissions');
  console.log('');
  console.log('🌐 CMS Admin: https://blessed-amusement-eec40fe5dd.strapiapp.com/admin');
}

runTests(); 