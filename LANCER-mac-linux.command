#!/usr/bin/env bash
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js n'est pas installé. Installe la version LTS sur https://nodejs.org puis relance ce fichier."
  read -n 1 -s -r -p "Appuie sur une touche pour fermer..."; exit 1
fi
if [ "$(node -e 'console.log(+process.versions.node.split(".")[0])')" -lt 22 ]; then
  echo "Ta version de Node.js est trop ancienne. Installe la version LTS récente (22 ou plus) sur https://nodejs.org"
  read -n 1 -s -r -p "Appuie sur une touche pour fermer..."; exit 1
fi
[ -d node_modules ] || { echo "Installation des dépendances, quelques minutes la première fois..."; npm install; }
echo "Lancement du site, le navigateur va s'ouvrir..."
npm run dev -- --open
