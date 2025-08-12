const fs = require('fs');
const path = require('path');

// Liste des fichiers à corriger
const files = [
  'src/components/sections/ExpertiseSection.tsx',
  'src/components/sections/TestimonialsSection.tsx',
  'src/components/sections/FAQSection.tsx',
  'src/components/sections/ContactSection.tsx',
  'src/components/sections/PartnersSection.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remplacer item.attributes par item
    content = content.replace(/item\.attributes\./g, 'item.');
    content = content.replace(/data\.attributes\./g, 'data.');
    
    // Remplacer les références aux anciennes interfaces
    content = content.replace(/StrapiData<[^>]+>/g, 'StrapiData<any>');
    
    fs.writeFileSync(file, content);
    console.log(`✅ Corrigé: ${file}`);
  } else {
    console.log(`❌ Fichier non trouvé: ${file}`);
  }
});

console.log('🎉 Correction terminée !'); 