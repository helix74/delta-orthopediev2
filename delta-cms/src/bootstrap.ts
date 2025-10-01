export default ({ strapi }) => {
  // Bootstrap function
  strapi.db.lifecycles.subscribe({
    models: ['admin::user'],
    afterCreate: async (event) => {
      const { result } = event;
      
      // Créer les données par défaut après la création du premier utilisateur admin
      if (result.roles.some(role => role.code === 'strapi-super-admin')) {
        await createDefaultData(strapi);
        await configurePermissions(strapi);
      }
    },
  });
};

async function createDefaultData(strapi) {
  try {
    // Créer les données Hero par défaut
    const heroData = await strapi.entityService.findMany('api::hero.hero');
    if (heroData.length === 0) {
      await strapi.entityService.create('api::hero.hero', {
        data: {
          title: 'Delta Orthopédie - Votre partenaire santé',
          subtitle: 'Solutions orthopédiques personnalisées pour améliorer votre qualité de vie',
          description: 'Nous vous accompagnons dans votre parcours de soins avec des solutions orthopédiques adaptées à vos besoins.',
          primaryButtonText: 'Prendre rendez-vous',
          primaryButtonLink: '#contact',
          secondaryButtonText: 'Découvrir nos services',
          secondaryButtonLink: '#expertise',
          isActive: true,
          publishedAt: new Date()
        }
      });
    }

    // Créer les données Contact par défaut
    const contactData = await strapi.entityService.findMany('api::contact.contact');
    if (contactData.length === 0) {
      await strapi.entityService.create('api::contact.contact', {
        data: {
          phone: '+33 1 23 45 67 89',
          email: 'contact@delta-orthopedie.fr',
          address: '123 Rue de la Santé, 75001 Paris, France',
          openingHours: {
            lundi: '8h00 - 18h00',
            mardi: '8h00 - 18h00',
            mercredi: '8h00 - 18h00',
            jeudi: '8h00 - 18h00',
            vendredi: '8h00 - 18h00',
            samedi: '9h00 - 12h00',
            dimanche: 'Fermé'
          },
          emergencyPhone: '+33 1 23 45 67 90',
          socialMedia: {
            facebook: 'https://facebook.com/delta-orthopedie',
            instagram: 'https://instagram.com/delta-orthopedie',
            linkedin: 'https://linkedin.com/company/delta-orthopedie'
          },
          publishedAt: new Date()
        }
      });
    }

    // Créer quelques expertises par défaut
    const expertiseData = await strapi.entityService.findMany('api::expertise.expertise');
    if (expertiseData.length === 0) {
      const defaultExpertises = [
        {
          title: 'Orthèses plantaires',
          description: 'Solutions personnalisées pour les problèmes de pieds et de posture',
          icon: 'foot',
          order: 1
        },
        {
          title: 'Orthèses de genou',
          description: 'Soutien et stabilisation pour les problèmes articulaires',
          icon: 'knee',
          order: 2
        },
        {
          title: 'Corsets et ceintures',
          description: 'Soutien lombaire et correction posturale',
          icon: 'back',
          order: 3
        }
      ];

      for (const expertise of defaultExpertises) {
        await strapi.entityService.create('api::expertise.expertise', {
          data: {
            ...expertise,
            isActive: true,
            publishedAt: new Date()
          }
        });
      }
    }

    // Créer quelques FAQ par défaut
    const faqData = await strapi.entityService.findMany('api::faq.faq');
    if (faqData.length === 0) {
      const defaultFAQs = [
        {
          question: 'Comment prendre rendez-vous ?',
          answer: 'Vous pouvez prendre rendez-vous par téléphone, email ou via notre formulaire en ligne.',
          category: 'rendez-vous',
          order: 1
        },
        {
          question: 'Les consultations sont-elles remboursées ?',
          answer: 'Oui, les consultations orthopédiques sont généralement remboursées par la sécurité sociale et les mutuelles.',
          category: 'assurance',
          order: 2
        },
        {
          question: 'Combien de temps dure une consultation ?',
          answer: 'Une consultation dure généralement entre 30 minutes et 1 heure selon le type de soin.',
          category: 'general',
          order: 3
        }
      ];

      for (const faq of defaultFAQs) {
        await strapi.entityService.create('api::faq.faq', {
          data: {
            ...faq,
            isActive: true,
            publishedAt: new Date()
          }
        });
      }
    }

    console.log('✅ Données par défaut créées avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la création des données par défaut:', error);
  }
}

async function configurePermissions(strapi) {
  try {
    // Récupérer le rôle public
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      // Configurer les permissions pour tous les modèles
      const permissions = {
        'api::hero.hero': ['find'],
        'api::expertise.expertise': ['find'],
        'api::testimonial.testimonial': ['find'],
        'api::faq.faq': ['find'],
        'api::partner.partner': ['find'],
        'api::contact.contact': ['find']
      };

      // Mettre à jour les permissions
      await strapi.query('plugin::users-permissions.role').update({
        where: { id: publicRole.id },
        data: {
          permissions: {
            ...publicRole.permissions,
            ...permissions
          }
        }
      });

      console.log('✅ Permissions configurées avec succès');
    }
  } catch (error) {
    console.error('❌ Erreur lors de la configuration des permissions:', error);
  }
} 