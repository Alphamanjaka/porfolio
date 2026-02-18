// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.remove("active");
}

// Scroll animation (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      // Animate skill bar if present
      const bar = entry.target.querySelector(".skill-level");
      if (bar) {
        const level = bar.getAttribute("data-level");
        const percentage = parseInt(level);

        // Couleurs dynamiques selon le niveau
        if (percentage >= 90) {
          bar.style.backgroundColor = "#059669"; // Vert (Expert)
        } else {
          bar.style.backgroundColor = "#3b82f6"; // Bleu (Intermédiaire)
        }

        setTimeout(() => {
          bar.style.width = level;
        }, 200); // Slight delay for better visual effect
      }

      observer.unobserve(entry.target);

      const delayStr = entry.target.style.transitionDelay || "0s";
      const delayMs = delayStr.includes("ms")
        ? parseFloat(delayStr)
        : parseFloat(delayStr) * 1000;

      setTimeout(() => {
        entry.target.style.transition = "";
        entry.target.style.transitionDelay = "";
      }, 600 + delayMs);
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".project-card, .skill-item, section h2, .about-content, .contact-content, .tabs, .skills-category, .experience-item, .study-item, .cert-item, .blog-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Staggered delay for skills
document.querySelectorAll(".skills-grid").forEach((grid) => {
  grid.querySelectorAll(".skill-item").forEach((item, index) => {
    item.style.transitionDelay = `${index * 100}ms`;
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = document.getElementById("progressBar");
  if (progressBar) progressBar.style.width = scrolled + "%";
});

// Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll("nav ul li a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#`) {
      a.classList.add("active");
    }
  });
});

// Preloader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});

// Load More Projects Functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const projects = document.querySelectorAll(".project-card");
  const itemsToShow = 3;

  // Fonction de filtrage
  function filterProjects(category) {
    let visibleCount = 0;

    projects.forEach((project) => {
      const projectCategory = project.getAttribute("data-category");
      // Vérifie si la catégorie correspond ou si on est sur 'all'
      // Utilise includes pour gérer les projets multi-catégories (ex: "backend devops")
      const isMatch =
        category === "all" ||
        (projectCategory && projectCategory.includes(category));

      if (isMatch) {
        // Si on est sur 'all', on applique la pagination (limite à 3)
        if (category === "all" && visibleCount >= itemsToShow) {
          project.classList.add("hidden");
        } else {
          project.classList.remove("hidden");
        }
        visibleCount++;
      } else {
        project.classList.add("hidden");
      }
    });

    // Gestion de la visibilité du bouton Load More
    if (loadMoreBtn) {
      if (category === "all" && visibleCount > itemsToShow) {
        loadMoreBtn.style.display = "inline-block";
        // Réinitialiser l'état du bouton
        loadMoreBtn.setAttribute("data-expanded", "false");
        loadMoreBtn.setAttribute("data-i18n", "show-more");
        const currentLang = localStorage.getItem("language") || "en";
        if (typeof setLanguage === "function") setLanguage(currentLang);
      } else {
        loadMoreBtn.style.display = "none";
      }
    }
  }

  // Initialisation du bouton Load More
  if (loadMoreBtn) {
    // Ajustement de la taille du bouton
    loadMoreBtn.style.padding = "0.6rem 1.5rem";
    loadMoreBtn.style.fontSize = "0.9rem";

    loadMoreBtn.addEventListener("click", () => {
      const isExpanded = loadMoreBtn.getAttribute("data-expanded") === "true";
      const currentLang = localStorage.getItem("language") || "en";

      if (isExpanded) {
        // Voir moins
        projects.forEach((project, index) => {
          if (index >= itemsToShow) project.classList.add("hidden");
        });
        loadMoreBtn.setAttribute("data-expanded", "false");
        loadMoreBtn.setAttribute("data-i18n", "show-more");

        // Scroll fluide vers le début de la section projets
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      } else {
        // Voir plus (Afficher tous les projets)
        projects.forEach((project) => project.classList.remove("hidden"));
        loadMoreBtn.setAttribute("data-expanded", "true");
        loadMoreBtn.setAttribute("data-i18n", "show-less");
      }

      // Mettre à jour le texte du bouton immédiatement
      if (typeof setLanguage === "function") {
        setLanguage(currentLang);
      }
    });
  }

  // Écouteurs d'événements pour les filtres
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Gestion de la classe active
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");
      filterProjects(filterValue);
    });
  });

  // Filtrage initial
  filterProjects("all");
});
