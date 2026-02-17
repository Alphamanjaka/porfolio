# Portfolio Personnel - Manjaka Alpha

Un site web portfolio moderne, réactif et performant, conçu pour présenter des projets de développement web, des compétences techniques et des articles de blog. Ce projet est construit avec des technologies web standards (HTML, CSS, JavaScript) sans dépendance lourde à des frameworks.

## ✨ Fonctionnalités

- **Design Responsive** : S'adapte parfaitement aux mobiles, tablettes et ordinateurs de bureau.
- **Thème Sombre/Clair** : Basculez entre les modes avec persistance des préférences (localStorage).
- **Internationalisation (i18n)** : Support complet Anglais/Français géré dynamiquement en JavaScript.
- **Animations Fluides** :
  - Effet "Machine à écrire" sur la section d'accueil.
  - Apparition des éléments au défilement (Intersection Observer).
  - Barres de compétences animées avec couleurs dynamiques selon le niveau.
- **Blog Intégré** : Système de blog statique avec chargement dynamique des articles via des paramètres d'URL.
- **Formulaire de Contact** : Fonctionnel et intégré avec EmailJS.
- **Navigation** : Menu mobile, barre de progression de lecture et bouton "Retour en haut".

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique.
- **CSS3** : Variables CSS, Flexbox, Grid, Animations.
- **JavaScript (ES6+)** : Logique modulaire (DOM, i18n, Thème, Email).
- **EmailJS** : Service d'envoi d'emails côté client.
- **Devicon** : Bibliothèque d'icônes pour les technologies.

## 📂 Structure du Projet

```text
portfolio/
├── css/
│   ├── base.css        # Styles globaux, reset, variables
│   ├── main.css        # Fichier principal (imports)
│   ├── responsive.css  # Media queries pour mobile/tablette
│   └── sections.css    # Styles spécifiques aux sections (Hero, About, etc.)
├── js/
│   ├── blog.js         # Gestion de la page d'article de blog
│   ├── email.js        # Configuration et envoi via EmailJS
│   ├── languages.js    # Dictionnaire de traduction (EN/FR)
│   ├── main.js         # Logique principale (Scroll, Menu, Animations)
│   ├── theme.js        # Gestion du Dark Mode
│   └── typewriter.js   # Effet de machine à écrire
├── index.html          # Page principale
├── blog-post.html      # Modèle de page pour les articles
└── profile.jpg         # Photo de profil
```

## 🚀 Installation et Utilisation

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/votre-username/portfolio.git
   ```

2. **Lancer le projet** :
   Puisqu'il s'agit d'un site statique, vous pouvez simplement ouvrir le fichier `index.html` dans votre navigateur.
   
   *Recommandé : Utilisez une extension comme "Live Server" sur VS Code pour un rechargement automatique.*

## ⚙️ Personnalisation

### 1. Configurer le Formulaire de Contact (EmailJS)
Pour que le formulaire fonctionne, vous devez créer un compte sur EmailJS.

Ouvrez le fichier `index.html` et `js/email.js` :

1. Dans `index.html` (lignes ~18-20), remplacez la clé publique :
   ```javascript
   emailjs.init("VOTRE_PUBLIC_KEY");
   ```
2. Dans `js/email.js`, remplacez les IDs :
   ```javascript
   const serviceID = "VOTRE_SERVICE_ID";
   const templateID = "VOTRE_TEMPLATE_ID";
   ```

### 2. Modifier les Textes et Traductions
Tout le contenu textuel est centralisé dans `js/languages.js`.
- Modifiez l'objet `translations.en` pour l'anglais.
- Modifiez l'objet `translations.fr` pour le français.

### 3. Ajouter/Modifier des Projets
Les projets sont définis dans le code HTML (`index.html`, section `#projects`).
- Pour ajouter un projet, dupliquez une `div` avec la classe `.project-card`.
- Assurez-vous d'ajouter les attributs `data-i18n` correspondants dans `js/languages.js` pour le titre et la description.

### 4. Ajouter des Articles de Blog
1. Ajoutez une carte dans la section `#blog` de `index.html`.
2. Le lien doit pointer vers `blog-post.html?id=VOTRE-ID-ARTICLE`.
3. Dans `js/languages.js`, ajoutez les clés correspondantes :
   - `VOTRE-ID-ARTICLE-title`
   - `VOTRE-ID-ARTICLE-date`
   - `VOTRE-ID-ARTICLE-content` (Supporte le HTML)
   - `VOTRE-ID-ARTICLE-image`

## 📄 Licence

Ce projet est sous licence Apache 2.0.
