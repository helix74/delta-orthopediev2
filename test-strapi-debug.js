const STRAPI_URL = 'http://localhost:1337';

async function testStrapiIntegration() {
  console.log('🚀 Test de débogage Strapi - Delta Orthopédie\n');

  // Test de connexion de base
  try {
    console.log('1️⃣ Test de connexion Strapi...');
    const response = await fetch(`${STRAPI_URL}/api/hero?populate=*`);
    console.log(`   Status: ${response.status}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('   ✅ Connexion réussie');
      console.log('   📊 Données Hero:', JSON.stringify(data, null, 2));
    } else {
      console.log('   ❌ Erreur de connexion');
    }
  } catch (error) {
    console.log('   ❌ Erreur:', error.message);
  }

  // Test de toutes les API
  const endpoints = [
    '/api/hero?populate=*',
    '/api/expertises?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/testimonials?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/faqs?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/partners?populate=*&sort=order:asc&filters[isActive][$eq]=true',
    '/api/contact'
  ];

  console.log('\n2️⃣ Test de tous les endpoints...');
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${STRAPI_URL}${endpoint}`);
      const status = response.status;
      const statusText = response.statusText;
      
      if (response.ok) {
        const data = await response.json();
        const count = Array.isArray(data.data) ? data.data.length : (data.data ? 1 : 0);
        console.log(`   ✅ ${endpoint} - ${status} (${count} entrées)`);
      } else {
        console.log(`   ❌ ${endpoint} - ${status} ${statusText}`);
      }
    } catch (error) {
      console.log(`   ❌ ${endpoint} - Erreur: ${error.message}`);
    }
  }

  // Test de Next.js
  console.log('\n3️⃣ Test de Next.js...');
  try {
    const response = await fetch('http://localhost:3000');
    console.log(`   Status Next.js: ${response.status}`);
    if (response.ok) {
      console.log('   ✅ Next.js fonctionne');
    } else {
      console.log('   ❌ Next.js ne répond pas');
    }
  } catch (error) {
    console.log('   ❌ Next.js erreur:', error.message);
  }

  console.log('\n🏁 Test terminé');
}

testStrapiIntegration(); 