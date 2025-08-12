@echo off
echo ========================================
echo    DELTA ORTHOPEDIE - DEPLOIEMENT
echo ========================================
echo.

echo 🚀 Preparation du deploiement...
echo.

echo 📋 Verifications pre-deploiement:
echo    - Next.js build test
echo    - Variables d'environnement
echo    - Configuration Vercel
echo.

echo 🔧 Test de build Next.js...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erreur lors du build Next.js
    pause
    exit /b 1
)

echo ✅ Build Next.js reussi!
echo.

echo 📚 Documentation disponible:
echo    - DEPLOIEMENT.md (Guide complet)
echo    - GUIDE_FINAL_CLIENTE.md (Guide client)
echo    - README-CMS.md (Documentation technique)
echo.

echo 🌐 URLs importantes:
echo    - Vercel: https://vercel.com
echo    - Strapi Cloud: https://cloud.strapi.io
echo.

echo 📝 Prochaines etapes:
echo    1. Creer un compte GitHub
echo    2. Pousser le code sur GitHub
echo    3. Deployer Strapi sur Strapi Cloud
echo    4. Deployer Next.js sur Vercel
echo    5. Configurer les variables d'environnement
echo.

echo 💡 Conseil: Suivez le guide DEPLOIEMENT.md
echo    pour un deploiement pas a pas.
echo.

echo ========================================
pause 