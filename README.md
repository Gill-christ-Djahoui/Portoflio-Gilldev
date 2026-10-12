# gdjahoui.com — onepage

Astro + Tailwind, site 100 % statique (aucun serveur).

## Commandes
```bash
npm install
npm run dev       # développement
npm run build     # génère le dossier dist/ (à envoyer sur l'hébergement)
npm run preview   # prévisualise dist/
```

## Où modifier quoi
- **Tous les textes, prix, liens** : `src/data/site.ts`
- **Clé du formulaire** : `SITE.web3formsKey` (créer une clé gratuite sur https://web3forms.com avec gill-christ@gdjahoui.com)
- **Photo pro** : déposer `src/assets/profile.jpg` (ou .png/.webp) — affichée sans recadrage ni retouche
- **Captures de projets** : déposer les images dans `src/assets/projects/` puis renseigner `image: 'nom.webp'` (et `url`) dans `PROJECTS`
- **Avis clients** : remplir `REVIEWS` (tant que vide, un message honnête s'affiche, jamais de faux avis)
- **Avant / après** : section « Le problème » (`src/components/Problem.astro`)
- **Mentions légales** : `LEGAL` dans `src/data/site.ts` (ajouter l'hébergeur)

## Suivi (Plausible, sans cookie)
Créer le site `gdjahoui.com` dans Plausible. Événements envoyés : Devis, WhatsApp, Calendly, Cest-mon-cas, Offre, Projet, Demo, Email, LinkedIn, Formulaire-envoye, Campagne.
Lien par campagne : `gdjahoui.com/?c=tours`. Lien direct vers un métier : `gdjahoui.com/#beaute`.

## Déploiement
Envoyer le contenu de `dist/` à la racine de l'hébergement du domaine gdjahoui.com.

## Lancer en local (le plus simple)
Prérequis : Node.js 22 ou plus récent (https://nodejs.org, version LTS).
- **Windows** : double-clic sur `LANCER-windows.bat`
- **Mac / Linux** : double-clic sur `LANCER-mac-linux.command` (ou `./LANCER-mac-linux.command` dans un terminal)

Le premier lancement installe les dépendances, puis le navigateur s'ouvre sur http://localhost:4321.
Ferme la fenêtre du terminal (ou Ctrl+C) pour arrêter.
