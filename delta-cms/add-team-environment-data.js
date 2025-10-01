/**
 * Script pour ajouter les données d'exemple pour Team Environment
 * À exécuter après la configuration des permissions
 */

const addSampleData = async () => {
  try {
    console.log('📝 Ajout des données d\'exemple pour Team Environment...');
    
    const STRAPI_URL = 'http://localhost:1337';
    
    // Données d'exemple à créer
    const sampleData = [
      // Accueil (3 entrées)
      {
        title: "Entrée principale",
        description: "Bienvenue chez Delta Orthopédie",
        category: "accueil",
        order: 1,
        isActive: true
      },
      {
        title: "Réception",
        description: "Un accueil personnalisé et professionnel",
        category: "accueil",
        order: 2,
        isActive: true
      },
      {
        title: "Ambiance accueil",
        description: "Un environnement chaleureux et rassurant",
        category: "accueil",
        order: 3,
        isActive: true
      },
      // Équipe (1 entrée)
      {
        title: "Notre équipe",
        description: "Toute l'équipe Delta Orthopédie réunie",
        category: "equipe",
        order: 4,
        isActive: true
      },
      // Atelier (4 entrées)
      {
        title: "Atelier moulage",
        description: "Salle de moulage équipée des dernières technologies",
        category: "atelier",
        order: 5,
        isActive: true
      },
      {
        title: "Équipements moulage",
        description: "Outils de précision pour un moulage parfait",
        category: "atelier",
        order: 6,
        isActive: true
      },
      {
        title: "Processus moulage",
        description: "Techniques avancées de moulage sur-mesure",
        category: "atelier",
        order: 7,
        isActive: true
      },
      {
        title: "Finition moulage",
        description: "Perfectionnement et contrôle qualité",
        category: "atelier",
        order: 8,
        isActive: true
      },
      // Consultation (1 entrée)
      {
        title: "Consultation",
        description: "Accompagnement personnalisé de chaque patient",
        category: "consultation",
        order: 9,
        isActive: true
      }
    ];
    
    console.log(`📊 Création de ${sampleData.length} entrées...`);
    
    // Créer chaque entrée
    for (const [index, data] of sampleData.entries()) {
      try {
        const response = await fetch(`${STRAPI_URL}/api/team-environments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: data
          })
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log(`✅ ${index + 1}/${sampleData.length} - ${data.title} créé`);
        } else {
          console.log(`❌ ${index + 1}/${sampleData.length} - Erreur pour ${data.title}: ${response.status}`);
        }
      } catch (error) {
        console.log(`❌ ${index + 1}/${sampleData.length} - Erreur pour ${data.title}: ${error.message}`);
      }
    }
    
    console.log('🎉 Données d\'exemple ajoutées !');
    console.log('💡 N\'oubliez pas d\'ajouter les images dans Strapi Admin');
    console.log('📁 Images disponibles dans: public/images/expertise/');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout des données:', error.message);
  }
};

// Exécuter le script si appelé directement
if (require.main === module) {
  addSampleData();
}

module.exports = addSampleData;
