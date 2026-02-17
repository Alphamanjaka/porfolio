const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
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
    "about-text-1":
      "I'm a passionate web developer with expertise in creating modern, responsive websites and web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean code and intuitive design.",
    "about-text-2":
      "I love solving complex problems and continuously learning new technologies to stay at the forefront of web development.",
    "experience-title": "Professional Experience",
    "exp-1-title": "Web Developer Intern",
    "exp-1-company": "GALANA MADAGASCAR.",
    "exp-1-date": "September 2023 - April 2024",
    "exp-1-desc":
      "Assisted in developing and maintaining web applications. Gained hands-on experience with modern frameworks and agile methodologies.",
    "exp-2-title": "Freelance Designer",
    "exp-2-company": "Self-Employed",
    "exp-2-date": "2022 - Present",
    "exp-2-desc":
      "Designed and built websites for small businesses, focusing on user experience and responsive design.",
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
    "project-1-desc":
      "Implementation of a complete DevOps pipeline with automated tests and continuous deployment. Containerized Django application with GitHub Actions pipeline to ensure quality and reliability at every deployment.",
    "project-2-desc":
      "A productivity app for organizing tasks, setting priorities, and tracking progress with a clean interface.",
    "project-3-desc":
      "A modern, responsive portfolio showcasing creative work with smooth animations and interactive elements.",
    "contact-title": "Get In Touch",
    "contact-btn": "Send Message",
    "footer-text": "© 2024 Manjaka Alpha. All rights reserved.",
  },
  fr: {
    "nav-home": "Accueil",
    "nav-about": "À propos",
    "nav-projects": "Projets",
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
    "about-text-1":
      "Je suis un développeur web passionné, expert dans la création de sites et d'applications web modernes et réactifs. Avec de solides bases en front-end et back-end, je donne vie aux idées grâce à un code propre et un design intuitif.",
    "about-text-2":
      "J'aime résoudre des problèmes complexes et apprendre continuellement de nouvelles technologies pour rester à la pointe du développement web.",
    "experience-title": "Expérience Professionnelle",
    "exp-1-title": "Stagiaire Développeur Web",
    "exp-1-company": "Tech Solutions Inc.",
    "exp-1-date": "Septembre 2023 - Avril 2023",
    "exp-1-desc":
      "Aide au développement et à la maintenance d'applications web. Expérience pratique acquise avec les frameworks modernes et les méthodologies agiles.",
    "exp-2-title": "Designer Freelance",
    "exp-2-company": "Indépendant",
    "exp-2-date": "2022 - Aujourd'hui",
    "exp-2-desc":
      "Conception et création de sites web pour de petites entreprises, en se concentrant sur l'expérience utilisateur et le design réactif.",
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
    "cert-2-title": "Dév Web Full Stack",
    "cert-2-desc": "Udemy - 2022",
    "projects-title": "Mes Projets",
    "project-1-desc":
      "Mise en place d'une chaîne DevOps complète avec tests automatisés et déploiement continu. Application Django conteneurisée avec pipeline GitHub Actions pour garantir la qualité et la fiabilité à chaque déploiement.",
    "project-2-desc":
      "Une application de productivité pour organiser les tâches, définir les priorités et suivre les progrès avec une interface épurée.",
    "project-3-desc":
      "Un portfolio moderne et réactif présentant des travaux créatifs avec des animations fluides et des éléments interactifs.",
    "project-4-desc":
      "Un chatbot intelligent construit avec des technologies d'IA pour un support client automatisé et une interaction fluide.",
    "project-5-desc":
      "Une plateforme e-commerce complète avec double profils:Admin et vendeur, gestion des produits, gestion de stock",
    "contact-title": "Contactez-moi",
    "contact-btn": "Envoyer",
    "footer-text": "© 2024 Manjaka Alpha. Tous droits réservés.",
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
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  for (const [id, text] of Object.entries(placeholders[lang])) {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
  }

  // Update active button state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });
}

        // Initialize with default language (English)
        setLanguage('en');