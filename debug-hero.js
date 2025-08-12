// Debug complet du Hero Section
const STRAPI_URL = 'https://blessed-amusement-eec40fe5dd.strapiapp.com';

console.log('🔍 Debug complet du Hero Section');
console.log('================================');
console.log('');

async function debugHeroSection() {
  try {
    // Test 1: Connexion directe à l'API
    console.log('📋 Test 1: Connexion directe à l\'API Strapi');
    console.log('URL:', `${STRAPI_URL}/api/hero?populate=*`);
    console.log('');
    
    const response = await fetch(`${STRAPI_URL}/api/hero?populate=*`);
    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    console.log('');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('📊 Données brutes reçues:');
    console.log(JSON.stringify(data, null, 2));
    console.log('');
    
    // Test 2: Vérifier la structure des données
    console.log('📋 Test 2: Structure des données');
    console.log('Data existe:', !!data.data);
    console.log('Data.id:', data.data?.id);
    console.log('Data.subtitle:', data.data?.subtitle);
    console.log('Contient "eeeeeeeeeeeeeeee":', data.data?.subtitle?.includes('eeeeeeeeeeeeeeee'));
    console.log('');
    
    // Test 3: Simuler le service Strapi
    console.log('📋 Test 3: Simulation du service Strapi');
    const heroData = data.data;
    console.log('Données extraites:', heroData);
    console.log('');
    
    // Test 4: Simuler le composant HeroSection
    console.log('📋 Test 4: Simulation du composant HeroSection');
    const defaultData = {
      title: 'Delta Orthopédie - Votre partenaire santé',
      subtitle: 'Solutions orthopédiques personnalisées pour améliorer votre qualité de vie',
      description: 'Nous vous accompagnons dans votre parcours de soins avec des solutions orthopédiques adaptées à vos besoins.',
      primaryButtonText: 'Prendre rendez-vous',
      primaryButtonLink: '#contact',
      secondaryButtonText: 'Découvrir nos services',
      secondaryButtonLink: '#expertise',
      isActive: true
    };
    
    const finalData = heroData || defaultData;
    console.log('Données finales utilisées:');
    console.log('Title:', finalData.title);
    console.log('Subtitle:', finalData.subtitle);
    console.log('Description:', finalData.description);
    console.log('');
    
    // Test 5: Vérifier si les données sont différentes
    console.log('📋 Test 5: Comparaison avec les données par défaut');
    console.log('Subtitle Strapi:', heroData?.subtitle);
    console.log('Subtitle défaut:', defaultData.subtitle);
    console.log('Sont identiques:', heroData?.subtitle === defaultData.subtitle);
    console.log('');
    
    if (heroData?.subtitle?.includes('eeeeeeeeeeeeeeee')) {
      console.log('✅ SUCCÈS: La modification est présente dans Strapi !');
      console.log('💡 Le problème vient probablement de:');
      console.log('   - Cache Next.js/Vercel');
      console.log('   - Variable d\'environnement incorrecte');
      console.log('   - Build Vercel pas à jour');
    } else {
      console.log('❌ ÉCHEC: La modification n\'est pas dans Strapi');
      console.log('💡 Vérifiez que vous avez bien sauvegardé dans le CMS');
    }
    
  } catch (error) {
    console.log('❌ Erreur:', error.message);
  }
}

debugHeroSection(); 