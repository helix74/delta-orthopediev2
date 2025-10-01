/**
 * Script pour configurer automatiquement les permissions du Content Type Team Environment
 * À exécuter après le démarrage de Strapi
 */

const configurePermissions = async () => {
  try {
    console.log('🔧 Configuration des permissions pour Team Environment...');
    
    // URL de l'API Strapi
    const STRAPI_URL = 'http://localhost:1337';
    
    // Récupérer le rôle Public
    const rolesResponse = await fetch(`${STRAPI_URL}/api/users-permissions/roles`);
    const roles = await rolesResponse.json();
    const publicRole = roles.roles.find(role => role.type === 'public');
    
    if (!publicRole) {
      throw new Error('Rôle Public non trouvé');
    }
    
    console.log(`📋 Rôle Public trouvé: ${publicRole.id}`);
    
    // Permissions à ajouter pour team-environment
    const newPermissions = {
      ...publicRole.permissions,
      'api::team-environment': {
        'team-environment': {
          'find': {
            'enabled': true,
            'policy': ''
          },
          'findOne': {
            'enabled': true,
            'policy': ''
          }
        }
      }
    };
    
    // Mettre à jour les permissions
    const updateResponse = await fetch(`${STRAPI_URL}/api/users-permissions/roles/${publicRole.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...publicRole,
        permissions: newPermissions
      })
    });
    
    if (updateResponse.ok) {
      console.log('✅ Permissions configurées avec succès !');
      console.log('📡 API disponible sur: /api/team-environments');
    } else {
      throw new Error(`Erreur HTTP: ${updateResponse.status}`);
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error.message);
    console.log('💡 Configurez manuellement les permissions dans Strapi Admin:');
    console.log('   Settings > Users & Permissions > Roles > Public');
    console.log('   Activer: team-environment.find et team-environment.findOne');
  }
};

// Exécuter le script si appelé directement
if (require.main === module) {
  configurePermissions();
}

module.exports = configurePermissions;
