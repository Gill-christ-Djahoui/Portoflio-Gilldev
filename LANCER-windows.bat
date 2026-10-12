@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js n'est pas installe. Installe la version LTS sur https://nodejs.org puis relance ce fichier.
  pause
  exit /b 1
)
node -e "process.exit(+process.versions.node.split('.')[0]<22?1:0)"
if errorlevel 1 (
  echo Ta version de Node.js est trop ancienne. Installe la version LTS recente (22 ou plus) sur https://nodejs.org
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installation des dependances, quelques minutes la premiere fois...
  call npm install
)
echo Lancement du site, le navigateur va s'ouvrir...
call npm run dev -- --open
pause
