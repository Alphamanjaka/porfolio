const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-blog": "Blogs",
    "nav-contact": "Contact",
    "nav-resume": "Resume",
    "resume-title": "My Background",
    "tab-experience": "Experience",
    "tab-education": "Education",
    "tab-certifications": "Certifications",
    "hero-greeting": "Hi, I'm Manjaka Alpha",
    "hero-subtitle": "Full Stack Web Developer",
    "hero-desc":
      "I build exceptional digital experiences that combine beautiful design with powerful functionality.",
    "hero-btn": "View My Work",
    "hero-cv": "Download CV",
    "about-title": "About Me",
    "about-headline": "The elegance of design, the strength of architecture.",
    "about-sub-headline":
      "I transform your vision into high-performance digital solutions, where every intuitive interface rests on a robust and scalable technical structure.",
    "about-cta": "Start My Project",
    "stat-projects": "Projects Completed",
    "stat-exp": "Years Experience",
    "stat-clients": "Happy Clients",
    "about-card-1": "Clean Code",
    "about-card-2": "Responsive Design",
    "about-card-3": "Modern UI/UX",
    "about-card-4": "SEO Optimized",
    "skills-title": "Technical Skills",
    "skills-frontend": "Frontend Development",
    "skills-backend": "Backend Development",
    "skills-tools": "DevOps & Tools",
    "experience-title": "Professional Experience",
    "exp-1-title": "Web Developer Intern",
    "exp-1-company": "GALANA GDP MADAGASCAR.",
    "exp-1-date": "September 2023 - April 2024",
    "exp-1-desc":
      "Collaborated on the development of scalable web applications using modern frameworks. Optimized database queries and participated in Agile sprints to deliver features on time.",
    "exp-2-title": "Freelance Designer",
    "exp-2-company": "Self-Employed",
    "exp-2-date": "2022 - Present",
    "exp-2-desc":
      "Delivered custom, high-performance websites for SMB clients. Managed the entire lifecycle from UI/UX design to deployment and SEO optimization.",
    "study-title": "My Education",
    "study-master-title": "Master 2 MBDS",
    "study-master-date": "Current",
    "study-master-desc":
      "Currently pursuing a Master's degree in Computer Methods Applied to Business Management (MBDS). Specializing in Mobility, Big Data, and Systems Integration.",
    "study-license-title": "Bachelor in Web Dev & Design",
    "study-license-date": "Graduated",
    "study-license-desc":
      "Bachelor's degree from IT University. Focused on modern web development, UI/UX design principles, and software engineering.",
    "projects-title": "My Projects",
    "project-1-title": "Django DevOps Pipeline",
    "project-1-desc":
      "Engineered a fully automated CI/CD pipeline for a Django application. Integrated Docker for containerization and GitHub Actions for testing, ensuring zero-downtime deployments on a PostgreSQL/Gunicorn stack.",
    "project-2-title": "Task Manager SPA",
    "project-2-desc":
      "Architected a reactive Single Page Application (SPA) with Vue.js and Firebase. Implemented real-time data synchronization and a drag-and-drop interface for seamless task management.",
    "project-3-title": "Portfolio Website",
    "project-3-desc":
      "Designed a high-performance portfolio with vanilla JavaScript and CSS3. Features include a custom internationalization system (i18n), dark mode, and intersection observer animations for optimal UX.",
    "project-4-title": "AI Chatbot",
    "project-4-desc":
      "Engineered an intelligent chatbot using Python and Natural Language Processing (NLP) technologies. Designed to provide automated, context-aware customer support and facilitate seamless user interactions 24/7.",
    "project-5-title": "E-commerce Platform",
    "project-5-desc":
      "Developed a scalable multi-vendor e-commerce solution using Laravel. Implemented complex role-based access control (RBAC), JWT authentication, and optimized MySQL schemas for high-volume inventory management.",
    "blog-title": "Architecture & Performance",
    "project-6-title": "University Grading System (.NET Core)",
    "project-6-desc":
      "A university grading management web application built as a two-person university project (binôme). It covers the full flow from academic structure setup (diplomas, semesters, UEs, subjects) to student grades, rankings, dashboards, and exports.",
    "project-7-title": "Flight Sim Pro - Aerodynamic Flight Simulator in JS",
    "project-7-desc":
      "Flight Sim Pro is an immersive 2D flight simulator developed entirely in native JavaScript (ES6+), without an external game engine. The core of the project resides in its custom physics engine which simulates complex aerodynamic forces (lift, induced drag, thrust, and gravity) in real-time to offer an authentic piloting experience.",
    "project-8-title": "Secure REST API for a Food Delivery Platform",
    "project-8-desc":
      "Development of a complete and secure RESTful API for a food delivery application. This project integrates robust user management with distinct roles (Customer, Restaurant, Courier, Administrator), JWT-based authentication, and role-based authorization. Key features include end-to-end order management, payment processing, delivery tracking, a review system, and advanced data analysis modules. The API is designed following HATEOAS principles for better discoverability and maintainability.",
    "project-9-title": "Synthetic Data Engine (Syndata Gen)",
    "project-9-desc":
      "A modular backend engine designed to create realistic artificial datasets from complex formal models, incorporating statistical distributions and strict business constraints for rigorous application testing.",
    "blog-1-title":
      "Why Clean Code Architecture is the Best Investment for Your MVP",
    "blog-1-desc":
      "Discover how a solid foundation accelerates development and reduces technical debt in the long run.",
    "blog-1-date": "March 15, 2024",
    "blog-1-tag": "Architecture",
    "blog-1-time": "5 min read",
    "blog-2-title":
      "Security & Scalability: Pillars of a Robust Web App in 2026",
    "blog-2-desc":
      "Best practices for securing your application while ensuring it can handle growth without breaking.",
    "blog-2-date": "February 28, 2024",
    "blog-2-tag": "Security",
    "blog-2-time": "8 min read",
    "blog-3-title": "Optimizing LCP: How I Reduced Load Time by 40%",
    "blog-1-image": "images/blog-1/featured.png",
    "blog-1-content": `
      <div class="toc"><h3>Table of Contents</h3><ul></ul></div>
      <h2>The Challenge: When Your MVP Starts to Feel Like a Liability</h2>
      <p>Every successful project starts as a Minimum Viable Product (MVP). But as features are added and the user base grows, the initial codebase, often built for speed, can become a tangled web of technical debt. In a recent project, we faced this exact issue: development slowed down, bugs became frequent, and onboarding new developers was a nightmare. The diagnosis? A monolithic structure without clear boundaries.</p>
      <img src="images/blog-1/tangled-code.png" alt="Tangled code illustration" class="post-inline-image">
      <h2>The Solution: Hexagonal Architecture with Django</h2>
      <p>To solve this, we decided to refactor towards a Clean/Hexagonal Architecture without abandoning our beloved Django framework. The goal was to decouple the business logic (the "core") from external concerns like the database, web frameworks, and third-party services.</p>
      <h3>Why this stack?</h3>
      <ul><li><strong>Django:</strong> For its robust ecosystem and "batteries-included" philosophy.</li><li><strong>Hexagonal Architecture:</strong> To enforce strict boundaries, making the code testable and maintainable.</li></ul>
      <div class="architecture-schema"><img src="images/blog-1/architecture-diagram.png" alt="Diagram of the hexagonal architecture"><p><em>Our application is structured around a core domain, with infrastructure details plugged in as adapters.</em></p></div>
      <h3>Code in Action: A Service Layer Example</h3>
      <p>Here is a snippet showing how a "service" in our application layer orchestrates a use case, completely unaware of whether the request came from a Django view or a command-line script.</p>
      <pre><code class="language-python">
# domain/services.py
from .repositories import UserRepository
from .models import User

class UserRegistrationService:
    def __init__(self, user_repository: UserRepository):
        self._user_repository = user_repository

    def register_user(self, email: str, password: str) -> User:
        if self._user_repository.find_by_email(email):
            raise ValueError("User with this email already exists.")
        
        hashed_password = self._hash_password(password)
        new_user = User(email=email, password=hashed_password)
        return self._user_repository.save(new_user)
</code></pre>
      <h2>The Results: A Game-Changer for Development</h2>
      <p>The migration wasn't easy, but the benefits were immediate: development velocity increased by 30%, critical bugs in production dropped by 50%, and unit test coverage went from 40% to over 85%.</p>
      <div class="article-cta"><p>Need a solid architecture for your project?</p><a href="#contact" class="btn btn-accent" data-i18n="blog-cta">Let's Talk</a></div>`,
    "blog-2-image": "images/blog-2/featured.png",
    "blog-2-content": `
      <div class="toc"><h3>Table of Contents</h3><ul></ul></div>
      <h2>The Problem: Preparing for Prime Time Traffic</h2>
      <p>A client's e-commerce platform was preparing for a major marketing campaign. Their current infrastructure was untested for high traffic, and a security audit revealed several vulnerabilities. The challenge was twofold: secure the application and ensure it could handle a 10x traffic spike without crashing.</p>
      <h2>The Strategy: A Two-Pronged Approach with Laravel</h2>
      <p>We opted for a robust solution using Laravel, focusing on security hardening and performance tuning.</p>
      <h3>1. Security Hardening</h3>
      <p>We implemented a strict Content Security Policy (CSP), secured API endpoints with JWT and rate limiting, and used Laravel's built-in features to prevent XSS and SQL injection attacks.</p>
      <pre><code class="language-php">
// app/Http/Kernel.php
protected $middlewareGroups = [
    'api' => [
        'throttle:60,1', // Rate limiting
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        \App\Http\Middleware\EncryptCookies::class,
    ],
];
</code></pre>
      <h3>2. Scalability Tuning</h3>
      <p>We introduced a Redis caching layer for frequently accessed data, offloaded jobs to a queue worker, and optimized database queries that were causing bottlenecks.</p>
      <div class="architecture-schema"><img src="images/blog-2/scalable laravel architecture.png" alt="Diagram of scalable Laravel architecture"><p><em>Redis and Queue Workers were added to handle the increased load.</em></p></div>
      <h2>The Outcome: Flawless Performance Under Pressure</h2>
      <p>The application handled the traffic spike without any downtime. The security audit passed with flying colors, and the client saw a 20% increase in conversions due to the improved site speed and reliability.</p>
      <div class="article-cta"><p>Is your application ready to scale securely?</p><a href="#contact" class="btn btn-accent" data-i18n="blog-cta">Let's Talk</a></div>`,
    "blog-3-image": "https://placehold.co/800x400?text=Performance+LCP",
    "blog-3-content": `
      <div class="toc"><h3>Table of Contents</h3><ul></ul></div>
      <h2>The Goal: Sub-2-Second Load Time</h2>
      <p>A content-heavy SPA (Single Page Application) built with Vue.js was suffering from a poor Largest Contentful Paint (LCP) score of over 3.5 seconds, hurting its SEO ranking and user engagement. The goal was clear: get the LCP under 2 seconds.</p>
      <img src="https://placehold.co/800x300?text=Performance+Waterfall+Chart" alt="Performance waterfall chart before optimization" class="post-inline-image">
      <h2>The Tactics: A Multi-faceted Optimization Strategy</h2>
      <p>After analyzing the performance bottlenecks, I implemented several key optimizations:</p>
      <ul>
        <li><strong>Code Splitting:</strong> Using dynamic <code>import()</code> to only load the JavaScript needed for the current view.</li>
        <li><strong>Image Optimization:</strong> Serving next-gen image formats (AVIF/WebP) and implementing lazy loading for off-screen images.</li>
        <li><strong>Critical CSS:</strong> Inlining the most critical CSS to render the above-the-fold content instantly.</li>
      </ul>
      <h3>Code Example: Route-based Code Splitting in Vue</h3>
      <p>This is how we configured the Vue Router to split the code into smaller chunks per route.</p>
      <pre><code class="language-javascript">
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // This route component is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({ history: createWebHistory(), routes });
export default router;
</code></pre>
      <h2>The Result: A 40% LCP Reduction</h2>
      <p>The combination of these techniques brought the LCP down to 1.9 seconds, a 40% improvement. This led to a measurable increase in organic traffic and a lower bounce rate.</p>
      <div class="article-cta"><p>Is your website fast enough for your users?</p><a href="#contact" class="btn btn-accent" data-i18n="blog-cta">Let's Talk</a></div>`,
    "blog-3-desc":
      "A case study on web performance optimization and improving Core Web Vitals for better SEO.",
    "blog-3-date": "January 10, 2024",
    "similar-articles": "Similar Articles",
    "toc-title": "Table of Contents",
    "blog-cta": "Let's Talk",
    "read-more": "Read More",
    "back-to-blog": "Back to Blogs",
    "contact-title": "Get In Touch",
    "contact-avail":
      "Your project deserves dedicated expertise. More than just a provider, I immerse myself in your challenges to build tailored solutions that make a difference. Shall we discuss it?",
    "contact-suggestion-title": "Or start with a suggestion:",
    "contact-suggestion-1": "I have a project idea to discuss.",
    "contact-suggestion-2": "I'd like to know your availability.",
    "contact-suggestion-3": "Can we schedule a quick call?",
    "contact-btn": "Send Message",
    "alert-success": "Message sent successfully! I will get back to you soon.",
    "alert-error": "Failed to send message. Please try again later.",
    "error-name": "Please enter your name.",
    "error-email": "Please enter a valid email address.",
    "error-message": "Please enter a message.",
    "footer-text": "© 2024 Manjaka Alpha. All rights reserved.",
    "show-more": "Show More",
    "show-less": "Show Less",
    "filter-all": "All",
    "filter-frontend": "Frontend",
    "filter-backend": "Backend",
    "filter-devops": "DevOps",
  },
  fr: {
    "nav-home": "Accueil",
    "nav-about": "À propos",
    "nav-skills": "Compétences",
    "nav-projects": "Projets",
    "nav-blog": "Blogs",
    "nav-contact": "Contact",
    "nav-resume": "Parcours",
    "resume-title": "Mon Parcours",
    "tab-experience": "Expérience",
    "tab-education": "Formation",
    "tab-certifications": "Certifications",
    "hero-greeting": "Bonjour, je suis Manjaka Alpha",
    "hero-subtitle": "Développeur Web Full Stack",
    "hero-desc":
      "Je crée des expériences numériques exceptionnelles alliant design soigné et fonctionnalités puissantes.",
    "hero-btn": "Voir mon travail",
    "hero-cv": "Télécharger CV",
    "about-title": "À propos de moi",
    "about-headline": "L'élégance du design, la force de l'architecture.",
    "about-sub-headline":
      "Je transforme votre vision en solutions digitales haute performance, où chaque interface intuitive repose sur une structure technique robuste et évolutive.",
    "about-cta": "Démarrer mon projet",
    "stat-projects": "Projets Terminés",
    "stat-exp": "Années d'Expérience",
    "stat-clients": "Clients Satisfaits",
    "about-card-1": "Code Propre",
    "about-card-2": "Design Réactif",
    "about-card-3": "UI/UX Moderne",
    "about-card-4": "Optimisé SEO",
    "skills-title": "Compétences Techniques",
    "skills-frontend": "Développement Frontend",
    "skills-backend": "Développement Backend",
    "skills-tools": "DevOps & Outils",
    "experience-title": "Expérience Professionnelle",
    "exp-1-title": "Stagiaire Développeur Web",
    "exp-1-company": "Galana GDP Madagascar.",
    "exp-1-date": "Septembre 2023 - Avril 2024",
    "exp-1-desc":
      "Collaboration au développement d'applications web évolutives. Optimisation des requêtes de base de données et participation aux sprints Agile pour la livraison de fonctionnalités.",
    "exp-2-title": "Designer Freelance",
    "exp-2-company": "Indépendant",
    "exp-2-date": "2022 - Aujourd'hui",
    "exp-2-desc":
      "Livraison de sites web performants et sur mesure pour des PME. Gestion du cycle de vie complet, de la conception UI/UX au déploiement et à l'optimisation SEO.",
    "study-title": "Ma Formation",
    "study-master-title": "Master 2 MBDS",
    "study-master-date": "En cours",
    "study-master-desc":
      "Actuellement en Master 2 Méthodes Informatiques Appliquées à la Gestion des Entreprises (MBDS). Spécialisation en Mobilité, Big Data et Intégration de Systèmes.",
    "study-license-title": "Licence en Dev Web & Design",
    "study-license-date": "Diplômé",
    "study-license-desc":
      "Licence obtenue à l'IT University. Formation axée sur le développement web moderne, le design UI/UX et l'ingénierie logicielle.",
    "cert-title": "Certifications",
    "cert-1-title": "Fondamentaux DevOps",
    "cert-1-desc": "LinkedIn Learning - 2023",
    "cert-2-title": "Dev Web Full Stack",
    "cert-2-desc": "IT University - 2022",
    "projects-title": "Mes Projets",
    "project-1-title": "Pipeline DevOps Django",
    "project-1-desc":
      "Ingénierie d'un pipeline CI/CD entièrement automatisé pour une application Django. Intégration de Docker et GitHub Actions pour des tests automatisés et des déploiements sans interruption sur une stack PostgreSQL/Gunicorn.",
    "project-2-title": "Gestionnaire de Tâches SPA",
    "project-2-desc":
      "Architecture d'une Single Page Application (SPA) réactive avec Vue.js et Firebase. Implémentation de la synchronisation des données en temps réel et d'une interface intuitive pour la gestion des tâches.",
    "project-3-title": "Site Portfolio",
    "project-3-desc":
      "Conception d'un portfolio haute performance en JavaScript vanilla et CSS3. Inclut un système d'internationalisation (i18n) personnalisé, un mode sombre et des animations fluides pour une UX optimale.",
    "project-4-title": "Chatbot IA",
    "project-4-desc":
      "Développement d'un chatbot intelligent utilisant Python et le traitement du langage naturel (NLP). Conçu pour offrir un support client automatisé et contextuel 24/7, améliorant ainsi l'interaction et la satisfaction utilisateur.",
    "project-5-title": "Plateforme E-commerce",
    "project-5-desc":
      "Développement d'une solution e-commerce multi-vendeurs évolutive sous Laravel. Implémentation d'un contrôle d'accès basé sur les rôles (RBAC), authentification JWT et optimisation des schémas MySQL pour la gestion de stocks volumineux.",
    "blog-title": "Architecture & Performance",
    "project-6-title": "Système de Notation Universitaire (.NET Core)",
    "project-6-desc":
      "Une application web de gestion des notes universitaires réalisée en binôme dans le cadre d'un projet universitaire. Elle couvre le flux complet, de la configuration de la structure académique (diplômes, semestres, UEs, matières) aux notes des étudiants, classements, tableaux de bord et exports.",
    "project-7-title": "Flight Sim Pro - Simulateur de Vol Aérodynamique en JS",
    "project-7-desc":
      "Flight Sim Pro est un simulateur de vol 2D immersif développé entièrement en JavaScript natif (ES6+), sans moteur de jeu externe. Le cœur du projet réside dans son moteur physique personnalisé qui simule en temps réel les forces aérodynamiques complexes (portance, traînée induite, poussée et gravité) pour offrir une expérience de pilotage authentique.",
    "project-8-title":
      "API REST Sécurisée pour une Plateforme de Livraison de Repas",
    "project-8-desc":
      "Développement d'une API RESTful complète et sécurisée pour une application de livraison de repas. Ce projet intègre une gestion robuste des utilisateurs avec des rôles distincts (Client, Restaurant, Livreur, Administrateur), une authentification basée sur JWT (JSON Web Tokens) et une autorisation par rôles. Les fonctionnalités clés incluent la gestion de bout en bout des commandes, le traitement des paiements, le suivi des livraisons, un système d'avis pour les restaurants, ainsi que des modules d'analyse de données avancés (statistiques sur les restaurants, les clients, la performance des livreurs et des recommandations personnalisées). L'API est conçue en respectant les principes HATEOAS pour une meilleure découvrabilité et maintenabilité, offrant une base solide pour un écosystème de commande de repas dynamique.",
    "project-9-title": "Synthetic Data Engine (Syndata Gen)",
    "project-9-desc":
      "Un moteur backend modulaire conçu pour créer des jeux de données artificiels réalistes à partir de modèles formels complexes, intégrant des distributions statistiques et des contraintes métier strictes pour le test d'applications.",
    "blog-1-title":
      "Pourquoi une architecture clean code est le meilleur investissement pour votre MVP",
    "blog-1-desc":
      "Découvrez comment une base solide accélère le développement et réduit la dette technique sur le long terme.",
    "blog-1-date": "15 Mars 2024",
    "blog-1-tag": "Architecture",
    "blog-1-time": "5 min de lecture",
    "blog-2-title":
      "Sécurité et Scalabilité : Les piliers d'une application web robuste en 2026",
    "blog-2-desc":
      "Les meilleures pratiques pour sécuriser votre application tout en assurant sa croissance sans rupture.",
    "blog-2-date": "28 Février 2024",
    "blog-2-tag": "Sécurité",
    "blog-2-time": "8 min de lecture",
    "blog-3-title":
      "Optimiser le LCP : Comment j'ai réduit le temps de chargement de 40%",
    "blog-1-image": "images/blog-1/featured.png",
    "blog-1-content": `
      <div class="toc"><h3>Table des Matières</h3><ul></ul></div>
      <h2>Le Défi : Quand votre MVP devient un fardeau</h2>
      <p>Chaque projet à succès commence comme un Produit Viable Minimum (MVP). Mais à mesure que les fonctionnalités s'ajoutent, le code initial, souvent conçu pour la vitesse, peut devenir un enchevêtrement de dette technique. Sur un projet récent, nous avons fait face à ce problème : le développement a ralenti, les bugs sont devenus fréquents et l'intégration de nouveaux développeurs était un cauchemar. Le diagnostic ? Une structure monolithique sans frontières claires.</p>
      <img src="images/blog-1/tangled-code.png" alt="Illustration de code complexe" class="post-inline-image">
      <h2>La Solution : Architecture Hexagonale avec Django</h2>
      <p>Pour résoudre ce problème, nous avons décidé de refactoriser vers une Architecture Propre/Hexagonale sans abandonner notre framework Django. L'objectif était de découpler la logique métier (le "cœur") des préoccupations externes comme la base de données, les frameworks web et les services tiers.</p>
      <h3>Pourquoi cette stack ?</h3>
      <ul><li><strong>Django :</strong> Pour son écosystème robuste et sa philosophie "batteries incluses".</li><li><strong>Architecture Hexagonale :</strong> Pour imposer des limites strictes, rendant le code testable et maintenable.</li></ul>
      <div class="architecture-schema"><img src="images/blog-1/architecture-diagram.png" alt="Diagramme de l'architecture hexagonale"><p><em>Notre application est structurée autour d'un domaine central, avec les détails d'infrastructure branchés comme des adaptateurs.</em></p></div>
      <h3>Code en Action : Exemple d'une couche de service</h3>
      <p>Voici un extrait montrant comment un "service" dans notre couche applicative orchestre un cas d'utilisation, sans savoir si la requête provient d'une vue Django ou d'un script.</p>
      <pre><code class="language-python">
# domain/services.py
from .repositories import UserRepository
from .models import User

class UserRegistrationService:
    def __init__(self, user_repository: UserRepository):
        self._user_repository = user_repository

    def register_user(self, email: str, password: str) -> User:
        if self._user_repository.find_by_email(email):
            raise ValueError("Un utilisateur avec cet email existe déjà.")
        
        hashed_password = self._hash_password(password)
        new_user = User(email=email, password=hashed_password)
        return self._user_repository.save(new_user)
</code></pre>
      <h2>Les Résultats : Un tournant pour le développement</h2>
      <p>La migration n'a pas été facile, mais les bénéfices ont été immédiats : la vélocité de développement a augmenté de 30%, les bugs critiques en production ont chuté de 50%, et la couverture de tests unitaires est passée de 40% à plus de 85%.</p>
      <div class="article-cta"><p>Besoin d'une architecture solide pour votre projet ?</p><a href="#contact" class="btn btn-accent" data-i18n="blog-cta">Discutons-en</a></div>`,
    "blog-2-image": "images/blog-2/featured.png",
    "blog-2-content": `
      <div class="toc"><h3>Table des Matières</h3><ul></ul></div>
      <h2>Le Problème : Préparer le pic de trafic</h2>
      <p>La plateforme e-commerce d'un client se préparait pour une campagne marketing majeure. Leur infrastructure actuelle n'était pas testée pour un trafic élevé, et un audit de sécurité a révélé plusieurs vulnérabilités. Le défi était double : sécuriser l'application et s'assurer qu'elle puisse gérer un pic de trafic 10x sans tomber.</p>
      <h2>La Stratégie : Une double approche avec Laravel</h2>
      <p>Nous avons opté pour une solution robuste utilisant Laravel, en nous concentrant sur le durcissement de la sécurité et l'optimisation des performances.</p>
      <h3>1. Durcissement de la Sécurité</h3>
      <p>Nous avons mis en œuvre une politique de sécurité de contenu (CSP) stricte, sécurisé les points de terminaison de l'API avec JWT et une limitation de débit, et utilisé les fonctionnalités intégrées de Laravel pour empêcher les attaques XSS et par injection SQL.</p>
      <pre><code class="language-php">
// app/Http/Kernel.php
protected $middlewareGroups = [
    'api' => [
        'throttle:60,1', // Limitation de débit
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        \App\Http\Middleware\EncryptCookies::class,
    ],
];
</code></pre>
      <h3>2. Optimisation de la Scalabilité</h3>
      <p>Nous avons introduit une couche de cache Redis pour les données fréquemment consultées, déchargé les tâches vers une file d'attente et optimisé les requêtes de base de données qui causaient des goulots d'étranglement.</p>
      <div class="architecture-schema"><img src="images/blog-2/scalable laravel architecture.png" alt="Diagramme d'architecture Laravel scalable"><p><em>Redis et les files d'attente ont été ajoutés pour gérer la charge accrue.</em></p></div>
      <h2>Le Résultat : Performance sans faille sous pression</h2>
      <p>L'application a géré le pic de trafic sans aucune interruption de service. L'audit de sécurité a été passé avec succès, et le client a constaté une augmentation de 20% des conversions grâce à l'amélioration de la vitesse et de la fiabilité du site.</p>
      <div class="article-cta"><p>Votre application est-elle prête à évoluer en toute sécurité ?</p><a href="#contact" class="btn btn-accent" data-i18n="blog-cta">Discutons-en</a></div>`,
    "blog-3-image": "https://placehold.co/800x400?text=Performance+LCP",
    "blog-3-content": `
      <div class="toc"><h3>Table des Matières</h3><ul></ul></div>
      <h2>L'Objectif : Temps de chargement sous les 2 secondes</h2>
      <p>Une SPA (Single Page Application) riche en contenu, construite avec Vue.js, souffrait d'un mauvais score LCP (Largest Contentful Paint) de plus de 3,5 secondes, nuisant à son classement SEO et à l'engagement des utilisateurs. L'objectif était clair : passer sous la barre des 2 secondes.</p>
      <img src="https://placehold.co/800x300?text=Graphique+Performance+Waterfall" alt="Graphique de performance avant optimisation" class="post-inline-image">
      <h2>Les Tactiques : Une stratégie d'optimisation à plusieurs facettes</h2>
      <p>Après avoir analysé les goulots d'étranglement, j'ai mis en œuvre plusieurs optimisations clés :</p>
      <ul>
        <li><strong>Code Splitting :</strong> Utilisation de l'<code>import()</code> dynamique pour ne charger que le JavaScript nécessaire à la vue actuelle.</li>
        <li><strong>Optimisation des images :</strong> Servir des formats d'image de nouvelle génération (AVIF/WebP) et implémenter le lazy loading.</li>
        <li><strong>CSS Critique :</strong> Intégrer en ligne le CSS le plus critique pour un rendu instantané du contenu au-dessus de la ligne de flottaison.</li>
      </ul>
      <h3>Exemple de Code : Code Splitting basé sur les routes dans Vue</h3>
      <p>Voici comment nous avons configuré le routeur Vue pour diviser le code en plus petits morceaux par route.</p>
      <pre><code class="language-javascript">
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // Ce composant est chargé paresseusement lors de la visite de la route.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({ history: createWebHistory(), routes });
export default router;
</code></pre>
      <h2>Le Résultat : Une réduction de 40% du LCP</h2>
      <p>La combinaison de ces techniques a ramené le LCP à 1,9 seconde, soit une amélioration de 40%. Cela a entraîné une augmentation mesurable du trafic organique et une baisse du taux de rebond.</p>
      <div class="article-cta"><p>Votre site web est-il assez rapide pour vos utilisateurs ?</p><a href="#contact" class="btn btn-accent" data-i18n="blog-cta">Discutons-en</a></div>`,
    "blog-3-desc":
      "Une étude de cas sur l'optimisation des performances web et l'amélioration des Core Web Vitals pour un meilleur SEO.",
    "blog-3-date": "10 Janvier 2024",
    "similar-articles": "Articles Similaires",
    "toc-title": "Table des Matières",
    "blog-cta": "Discutons-en",
    "read-more": "Lire la suite",
    "back-to-blog": "Retour au Blogs",
    "contact-title": "Contactez-moi",
    "contact-avail":
      "Votre projet mérite une expertise dédiée. Plus qu'un prestataire, je m'immerge dans vos défis pour bâtir des solutions sur mesure qui font la différence. Et si nous en discutions ?",
    "contact-suggestion-title": "Ou commencez avec une suggestion :",
    "contact-suggestion-1": "J'ai une idée de projet à discuter.",
    "contact-suggestion-2": "J'aimerais connaître vos disponibilités.",
    "contact-suggestion-3": "Pouvons-nous planifier un bref appel ?",
    "contact-btn": "Envoyer",
    "alert-success": "Message envoyé avec succès ! Je vous répondrai bientôt.",
    "alert-error": "Échec de l'envoi du message. Veuillez réessayer plus tard.",
    "error-name": "Veuillez entrer votre nom.",
    "error-email": "Veuillez entrer une adresse email valide.",
    "error-message": "Veuillez entrer un message.",
    "footer-text": "© 2024 Manjaka Alpha. Tous droits réservés.",
    "show-more": "Voir plus",
    "show-less": "Voir moins",
    "filter-all": "Tous",
    "filter-frontend": "Frontend",
    "filter-backend": "Backend",
    "filter-devops": "DevOps",
  },
};

const placeholders = {
  en: {
    "input-name": "Your Name",
    "input-email": "Your Email",
    "input-message": "Your Message",
  },
  fr: {
    "input-name": "Votre Nom",
    "input-email": "Votre Email",
    "input-message": "Votre Message",
  },
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  for (const [id, text] of Object.entries(placeholders[lang])) {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
  }

  // Gestion spéciale pour l'effet machine à écrire sur le titre principal
  // et les animations qui en découlent.
  const heroGreeting = document.querySelector('[data-i18n="hero-greeting"]');
  const subtitle = document.querySelector(".hero .subtitle");
  const desc = document.querySelector('.hero [data-i18n="hero-desc"]');
  const buttons = document.querySelectorAll(".hero .btn");

  // Réinitialiser l'état des animations avant de les relancer
  if (subtitle) subtitle.classList.remove("visible");
  if (desc) desc.classList.remove("visible");
  buttons.forEach((btn) => btn.classList.remove("visible"));

  if (heroGreeting && typeof startTypewriter === "function") {
    // Le texte est déjà défini par la boucle ci-dessus, nous le stockons donc dans data-text
    heroGreeting.setAttribute("data-text", heroGreeting.innerHTML);

    // Démarrer la machine à écrire et fournir un callback pour la suite
    startTypewriter(heroGreeting, 80, () => {
      // Une fois la frappe terminée, faire apparaître les autres éléments en cascade
      if (subtitle) setTimeout(() => subtitle.classList.add("visible"), 100);
      if (desc) setTimeout(() => desc.classList.add("visible"), 300);
      if (buttons.length) {
        setTimeout(
          () => buttons.forEach((btn) => btn.classList.add("visible")),
          500,
        );
      }
    });
  }

  // Update active button state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });

  // Re-render blog post if on blog page
  if (typeof loadBlogPost === "function") {
    loadBlogPost();
  }
}

// Initialize with default language (English)
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);
