@echo off
echo ========================================
echo    DELTA ORTHOPEDIE - DEMARRAGE CMS
echo ========================================
echo.

echo 🚀 Demarrage de Strapi CMS...
start "Strapi CMS" cmd /k "cd delta-cms && npm run develop"

echo ⏳ Attente du demarrage de Strapi...
timeout /t 10 /nobreak > nul

echo 🌐 Demarrage de Next.js...
start "Next.js Website" cmd /k "npm run dev"

echo.
echo ========================================
echo    ✅ SERVICES DEMARRES
echo ========================================
echo.
echo 📱 CMS Strapi: http://localhost:1337/admin
echo 🌐 Site Web: http://localhost:3000
echo.
echo 📚 Documentation:
echo    - Guide Client: GUIDE_FINAL_CLIENTE.md
echo    - README CMS: README-CMS.md
echo.
echo 🔧 Pour arreter tous les services:
echo    taskkill /f /im node.exe
echo.
echo ========================================
pause 