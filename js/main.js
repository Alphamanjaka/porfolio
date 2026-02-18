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

      // Animate stats counter
      if (entry.target.classList.contains("stat-item")) {
        const counter = entry.target.querySelector(".stat-number");
        if (counter) {
          const rawText = counter.innerText; // ex: "10+"
          const target = parseInt(rawText);
          const suffix = rawText.replace(/[0-9]/g, ""); // Garde le "+"

          let count = 0;
          const duration = 2000; // Durée de l'animation en ms

          const updateCount = () => {
            const increment = target / (duration / 16); // ~60 FPS
            count += increment;

            if (count < target) {
              counter.innerText =
                Math.ceil(count).toString().padStart(2, "0") + suffix;
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target.toString().padStart(2, "0") + suffix;
            }
          };

          // Petit délai pour que l'élément soit bien visible avant de commencer
          setTimeout(updateCount, 200);
        }
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
    ".project-card, .skill-item, section h2, .about-content, .contact-content, .tabs, .skills-category, .experience-item, .study-item, .cert-item, .blog-card, .stat-item",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
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

// Message suggestion chips
document.addEventListener('DOMContentLoaded', () => {
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    const messageTextarea = document.getElementById('input-message');

    if (suggestionChips.length > 0 && messageTextarea) {
        suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                messageTextarea.value = chip.innerText;
                messageTextarea.focus(); // Focus on the textarea for better UX
                // Déclencher manuellement l'événement input pour la validation
                messageTextarea.dispatchEvent(new Event('input'));
            });
        });
    }
});

// Parallax effect for hero shapes
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.hero .shape-wrapper');
        // Calculate position from -1 to 1
        const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        shapes.forEach(shape => {
            const speed = shape.getAttribute('data-speed');
            const moveX = x * speed * 10; // Multiplier for effect strength
            const moveY = y * speed * 10;

            shape.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
    });
}

// Real-time Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    const checkFormValidity = () => {
        let allValid = true;
        inputs.forEach(input => {
            const value = input.value.trim();
            if (input.type === 'email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) allValid = false;
            } else {
                if (value.length === 0) allValid = false;
            }
        });

        if (submitBtn) {
            submitBtn.disabled = !allValid;
        }
    };

    const validate = (input) => {
        const value = input.value.trim();
        let isValid = false;

        if (input.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailPattern.test(value);
        } else {
            isValid = value.length > 0;
        }

        if (value === '') {
            input.classList.remove('valid', 'invalid');
        } else if (isValid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
        
        checkFormValidity();
    };

    // Vérification initiale
    checkFormValidity();

    inputs.forEach(input => {
        input.addEventListener('input', () => validate(input));
        input.addEventListener('blur', () => validate(input));
    });
}
