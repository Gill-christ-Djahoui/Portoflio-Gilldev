// =====================================================================
//  CONFIG & CONTENU — tout ce qui est modifiable est ici.
//  Les valeurs marquées TODO sont des emplacements à compléter.
// =====================================================================

export const SITE = {
  url: 'https://gdjahoui.com',
  name: 'Gill-christ Djahoui',
  email: 'gill-christ@gdjahoui.com',
  calendly: 'https://calendly.com/gillchristdjahoui45/discussion',
  whatsappNumber: '2290153578049', // format international sans + ni espaces
  whatsappMessage: 'Bonjour Gill-christ, je souhaite un devis pour mon site.',
  linkedin: 'https://www.linkedin.com/in/gill-vass/',
  // Formulaire : Web3Forms (gratuit, sans serveur, honeypot intégré).
  // Crée une clé sur https://web3forms.com avec l'email ci-dessus et colle-la ici.
  web3formsKey: 'TODO_WEB3FORMS_ACCESS_KEY',
  // Suivi : Plausible (sans cookie). Domaine déclaré dans ton compte Plausible.
  plausibleDomain: 'gdjahoui.com',
  sitesDelivered: '50+',
  years: '3+',
};

export const whatsappUrl = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { label: 'Pour qui', href: '#pour-qui' },
  { label: 'Offres', href: '#offres' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Avis', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
];

export const MARQUEE = [
  'Site vitrine', 'Refonte', 'Boutique en ligne', 'Réservation en ligne',
  'Visible sur Google', 'Parfait sur mobile', 'Maintenance',
];

export const MARQUEE_INCLUS = [
  'Audit offert', 'Mise en ligne de A à Z', 'Prise en main', 'Support 30 jours', 'Site en règle',
];
export const MARQUEE_SKILLS = [
  'Code', 'Design', 'Marketing', 'IA', 'WordPress', 'WooCommerce', 'Visible sur Google',
];

export const AUDIENCES = [
  {
    id: 'commerces', activite: 'commerce', icon: 'store',
    title: 'Commerces de proximité',
    tags: ['Boulangerie', 'Fleuriste', 'Épicerie', 'Boutique', 'Restaurant'],
    problem: 'Avant de passer, vos clients regardent sur Google. Sans site, ils voient une fiche vide et filent chez le voisin.',
    solution: 'Un site qui montre vos produits, vos horaires et votre adresse, et qui prend les commandes spéciales.',
  },
  {
    id: 'beaute', activite: 'beaute', icon: 'sparkle',
    title: 'Beauté & bien-être',
    tags: ['Institut', 'Coiffure', 'Barbier', 'Massage', 'Praticien'],
    problem: 'Le téléphone sonne pendant vos soins, et les plateformes prennent une commission sur chaque rendez-vous.',
    solution: 'Votre propre site avec réservation en ligne 24h/24. Vos clientes réservent seules, sans commission.',
  },
  {
    id: 'artisans', activite: 'artisan', icon: 'wrench',
    title: 'Artisans & dépannage',
    tags: ['Plombier', 'Serrurier', 'Électricien', 'Couvreur', 'Rénovation'],
    problem: 'En urgence, le client appelle le premier qui inspire confiance. Site lent ou absent : c\'est un concurrent qui décroche.',
    solution: 'Un site rapide, un bouton d\'appel toujours visible, vos chantiers en photos et vos avis Google en avant.',
  },
  {
    id: 'boutiques', activite: 'boutique', icon: 'cart',
    title: 'Boutiques en ligne & PME',
    tags: ['E-commerce', 'Marque', 'Entreprise'],
    problem: 'Une boutique lente, un paiement qui bloque, des fiches produits sans envie : chaque détail coûte une vente.',
    solution: 'Une boutique rapide, paiement par carte sécurisé, que vous gérez seul au quotidien.',
  },
];

export const BENEFITS = [
  { n: '01', title: 'Plus d\'appels et de demandes', text: 'Boutons d\'appel, de réservation et de devis visibles partout. Le visiteur sait quoi faire en 3 secondes.' },
  { n: '02', title: 'Plus de confiance', text: 'Design pro, vos avis clients et vos réalisations en avant. On voit tout de suite que vous êtes sérieux.' },
  { n: '03', title: 'Plus de temps pour votre métier', text: 'Les demandes et les réservations arrivent toutes seules. Moins de téléphone, moins d\'allers-retours.' },
];

export const OFFERS = [
  {
    id: 'vitrine', besoin: 'vitrine', title: 'Site vitrine', hook: 'Être trouvé, rassurer, être contacté.',
    for: 'Vous n\'avez pas encore de site, ou juste une page Facebook.',
    items: [
      'Design sur mesure à votre image (pas un modèle tout fait)',
      'Parfait sur téléphone, là où sont vos clients',
      'Bouton d\'appel, WhatsApp et formulaire de contact',
      'Vos avis Google, vos horaires et votre plan d\'accès',
      'Les bases pour être trouvé sur Google dans votre ville',
      'Livré en 5 jours à partir de la réception de vos infos',
    ],
    price: 'À partir de 230 €', cta: 'Je veux mon site',
  },
  {
    id: 'refonte', besoin: 'refonte', title: 'Refonte de site', hook: 'Transformer un site qui dort en site qui rapporte.',
    for: 'Vous avez déjà un site, mais il ne vous ramène presque rien.',
    items: [
      'Audit offert : je vous montre ce qui fait fuir vos visiteurs',
      'Nouveau design moderne, rapide et rassurant',
      'Textes revus pour donner envie d\'agir',
      'Vos contenus et votre référencement conservés',
      'Sécurité (HTTPS) et vitesse corrigées',
    ],
    price: 'À partir de 299 €', cta: 'Refaire mon site',
  },
  {
    id: 'boutique', besoin: 'boutique', title: 'Boutique en ligne', hook: 'Vendre 24h/24, même quand le magasin est fermé.',
    for: 'Vous voulez vendre en ligne, ou votre boutique actuelle vous fait perdre des ventes.',
    items: [
      'Boutique WooCommerce complète, simple à gérer',
      'Paiement par carte sécurisé (Stripe, PayPal...)',
      'Produits, stock et commandes gérés par vous, sans technicien',
      'Livraison, retrait en magasin ou produits téléchargeables',
      'Pages légales en place (CGV, mentions légales, confidentialité)',
    ],
    price: 'À partir de 599 €', cta: 'Lancer ma boutique',
  },
  {
    id: 'maintenance', besoin: 'maintenance', title: 'Maintenance & visibilité', hook: 'Votre site toujours à jour, toujours en ligne.',
    for: 'Vous voulez un site qui tourne, sans vous en occuper.',
    items: [
      'Mises à jour et sauvegardes régulières',
      'Surveillance : je règle les problèmes avant que vos clients les voient',
      'Petites modifications incluses (horaires, photos, textes)',
      'Suivi de votre visibilité sur Google',
      'Sans engagement',
    ],
    price: '30 € / mois', cta: 'Je veux être tranquille',
  },
];

export const OPTIONS = [
  'Réservation en ligne', 'Commande en ligne / click & collect',
  'Optimisation de votre fiche Google', 'Site en plusieurs langues',
];

export const INCLUDED = [
  { icon: 'search', title: 'Audit offert', text: 'Avant de commencer, je regarde votre présence en ligne et je vous dis ce qui bloque. Même si on ne travaille pas ensemble.' },
  { icon: 'globe', title: 'Mise en ligne de A à Z', text: 'Nom de domaine, hébergement, adresse email pro : je m\'occupe de tout.' },
  { icon: 'video', title: 'Prise en main', text: 'Une courte visio à la livraison pour vous montrer comment modifier votre site seul.' },
  { icon: 'shield', title: 'Support après livraison', text: '30 jours pour ajuster ce qu\'il faut, sans frais.' },
  { icon: 'lock', title: 'Site en règle', text: 'HTTPS, mentions légales, page confidentialité et cookies conformes au RGPD.' },
];

// Projets : ajoute `image: 'nom-fichier.webp'` après avoir déposé la capture dans
// src/assets/projects/. `url` vide = "Projet livré, captures sur demande".
export const PROJECTS = [
  { name: 'ELEKTRO KAZ', tag: 'Boutique en ligne · Allemagne', did: 'Refonte du design d\'une boutique WooCommerce de plus de 1 300 produits, pages légales en allemand.', result: '', url: '', image: '' },
  { name: 'Hi\'Pizza', tag: 'Restaurant · commande en ligne', did: 'Boutique WooCommerce avec commande et paiement en ligne, pensée pour le mobile.', result: '', url: '', image: '' },
  { name: 'digitaladswizardpro', tag: 'Agence digitale', did: 'Site vitrine pour l\'agence de marketing digitale.', result: '', url: '', image: '' },
];

export const DEMOS = [
  { label: 'Serrurier', url: 'https://serrurierlyon.lovable.app' },
  { label: 'Plombier', url: 'https://rhone-express.lovable.app' },
];

export const STEPS = [
  { title: 'Un appel de 20 minutes, gratuit.', text: 'On parle de votre activité, de vos clients et de ce que vous voulez. Sans jargon.' },
  { title: 'Un devis clair sous 24h.', text: 'Prix fixe, délai précis, tout est écrit. Vous validez, vous réglez l\'acompte de 50 %, on démarre.' },
  { title: 'La création.', text: 'Je construis votre site. Vous suivez l\'avancement et vous donnez votre avis avant la mise en ligne. Deux séries de retouches sont incluses.' },
  { title: 'La mise en ligne.', text: 'Votre site est en ligne, je vous montre comment le gérer seul, vous réglez le solde.' },
];

// Avis : à remplir quand tu me les fournis. Tant que la liste est vide, la section
// affiche un message honnête (aucun faux avis).
export const REVIEWS: { text: string; name: string; job: string; place: string }[] = [];

export const SKILLS = [
  { title: 'La technique', text: 'Je code, et je maîtrise WordPress, WooCommerce et les outils modernes.' },
  { title: 'Les outils IA', text: 'Je m\'appuie sur l\'IA pour aller plus vite, tester plus d\'idées et vous livrer plus tôt, sans jamais sacrifier la qualité.' },
  { title: 'Le design', text: 'Des sites qui inspirent confiance au premier coup d\'œil.' },
  { title: 'Le marketing', text: 'Je suis formé au marketing digital, je sais ce qui pousse un visiteur à agir.' },
];

export const FACTS = [
  { big: '50+', small: 'sites livrés' },
  { big: '3+', small: 'ans d\'expérience' },
  { big: 'Bachelor', small: 'en informatique' },
  { big: 'Certifié', small: 'OpenClassrooms : développement web et marketing digital' },
  { big: 'Lead tech', small: 'chez Avoyanto Pro : je pilote l\'équipe de développement mobile et web de l\'écosystème digital' },
  { big: 'JCI', small: 'Directeur de projet à la Jeune Chambre Internationale' },
];

export const PROMISES = [
  'Un prix fixe, écrit avant de commencer. Pas de frais cachés.',
  'Un délai annoncé, et tenu.',
  'Une réponse sous 24h, pendant et après le projet.',
  'Un site qui vous appartient : nom de domaine et contenus à votre nom.',
  'Un site que vous savez modifier seul, sans dépendre de moi.',
  'Un site qui vous définit réellement et qui attire de vrais clients.',
];

export const FAQ = [
  { q: 'Combien coûte un site ?', a: 'Ça dépend de votre besoin. Un site vitrine démarre à 230 €, une refonte à 299 €, une boutique en ligne à 599 €. Après notre appel, vous recevez un devis à prix fixe : c\'est ce prix-là que vous payez, pas un euro de plus.' },
  { q: 'Vous êtes au Bénin : comment ça se passe concrètement ?', a: 'Comme avec n\'importe quel prestataire web : tout se fait à distance. On s\'appelle en visio ou sur WhatsApp, vous suivez l\'avancement en ligne, et vous payez par tranche.' },
  { q: 'En combien de temps mon site est prêt ?', a: 'Un site vitrine : 5 jours après réception de vos infos. Une refonte ou une boutique : le délai exact est écrit dans le devis, et je le tiens.' },
  { q: 'Je n\'ai ni textes ni photos. C\'est un problème ?', a: 'Non. J\'écris les textes à partir de notre échange. Pour les photos : les vôtres ou des images pro libres de droits.' },
  { q: 'Est-ce que je pourrai modifier mon site moi-même ?', a: 'Oui. À la livraison, je vous montre comment changer vos horaires, vos photos ou vos textes. Si vous préférez ne pas y toucher, la maintenance s\'en occupe.' },
  { q: 'Pourquoi ne pas le faire moi-même sur Wix ?', a: 'Vous pouvez. Mais entre les soirées passées, un rendu qui fait amateur et un site que Google ne trouve pas, ça coûte souvent plus cher qu\'il n\'y paraît. Moi, je livre un site pro en quelques jours, pendant que vous faites votre métier.' },
  { q: 'Mon site sera-t-il visible sur Google ?', a: 'Chaque site est préparé pour Google : bonne structure, vitesse, textes pensés pour votre ville et votre métier. Personne d\'honnête ne peut garantir la première place, mais je mets tout en place pour que vous soyez trouvé.' },
  { q: 'J\'ai déjà un site. Vous pouvez l\'améliorer ?', a: 'Oui, c\'est l\'offre Refonte. Je commence par un audit gratuit : je vous montre ce qui fait fuir vos visiteurs, puis vous décidez.' },
  { q: 'Le site m\'appartient-il ?', a: 'Oui : le nom de domaine et les contenus sont à votre nom.' },
  { q: 'Et après la mise en ligne ?', a: 'Vous avez 30 jours de support offerts. Ensuite, vous êtes autonome, ou vous choisissez la maintenance mensuelle, sans engagement.' },
  { q: 'Comment je paie ?', a: '50 % au démarrage, 50 % à la livraison. Rien à payer avant d\'avoir validé le devis.' },
  { q: 'Comment on démarre ?', a: 'Remplissez le formulaire, écrivez-moi sur WhatsApp ou réservez un appel. Je vous réponds sous 24h.' },
];

export const ACTIVITES = [
  { value: 'commerce', label: 'Commerce de proximité' },
  { value: 'beaute', label: 'Beauté & bien-être' },
  { value: 'artisan', label: 'Artisan / dépannage' },
  { value: 'boutique', label: 'Boutique en ligne / PME' },
  { value: 'autre', label: 'Autre' },
];

export const BESOINS = [
  { value: 'vitrine', label: 'Site vitrine' },
  { value: 'refonte', label: 'Refonte' },
  { value: 'boutique', label: 'Boutique en ligne' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'inconnu', label: 'Je ne sais pas encore' },
];

// Mentions légales : renseigne l'hébergeur quand tu le connais (la ligne n'apparaît que si rempli).
export const LEGAL = {
  statut: 'Entrepreneur individuel',
  ville: 'Cotonou, Bénin',
  hebergeur: '',
};
