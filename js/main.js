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
  const projects = document.querySelectorAll(".project-card");
  const dotsContainer = document.getElementById("sliderDots");

  // Initialiser les indicateurs de pagination
  function updatePaginationDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    const visibleProjects = Array.from(projects).filter(
      (p) => !p.classList.contains("hidden"),
    );

    visibleProjects.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot-indicator");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        const cardWidth =
          marquee.querySelector(".project-card").offsetWidth + 32;
        marquee.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      });
      dotsContainer.appendChild(dot);
    });
  }

  function syncActiveDot() {
    const cardWidth = marquee.querySelector(".project-card").offsetWidth + 32;
    const activeIndex = Math.round(marquee.scrollLeft / cardWidth);
    const dots = dotsContainer.querySelectorAll(".dot-indicator");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
    });
  }

  // Fonction de filtrage
  function filterProjects(category) {
    projects.forEach((project) => {
      const projectCategory = project.getAttribute("data-category");
      const isMatch =
        category === "all" ||
        (projectCategory && projectCategory.includes(category));

      project.classList.toggle("hidden", !isMatch);
    });
    updatePaginationDots();
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

  const marquee = document.getElementById("projectsMarquee");
  const track = document.getElementById("marqueeTrack");
  const btnNext = document.getElementById("nextBtn");
  const btnPrev = document.getElementById("prevBtn");

  let isDragging = false;
  let startX, scrollLeft;

  // Sync dots on scroll
  marquee.addEventListener("scroll", syncActiveDot);

  // Mouse Drag Logic
  marquee.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - marquee.offsetLeft;
    scrollLeft = marquee.scrollLeft;
  });

  marquee.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marquee.offsetLeft;
    const walk = (x - startX) * 1.5;
    marquee.style.scrollSnapType = "none"; // Désactive le snap pendant le drag
    marquee.scrollLeft = scrollLeft - walk;
  });

  marquee.addEventListener("mouseup", () => {
    isDragging = false;
    marquee.style.scrollSnapType = "x mandatory"; // Réactive le snap
  });
  marquee.addEventListener("mouseleave", () => {
    isDragging = false;
    marquee.style.scrollSnapType = "x mandatory";
  });

  // Manual Navigation
  btnNext.addEventListener("click", () => {
    const firstCard = marquee.querySelector(".project-card");
    const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 300;
    marquee.scrollTo({
      left: marquee.scrollLeft + cardWidth,
      behavior: "smooth",
    });
  });

  btnPrev.addEventListener("click", () => {
    const firstCard = marquee.querySelector(".project-card");
    const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 300;
    marquee.scrollTo({
      left: marquee.scrollLeft - cardWidth,
      behavior: "smooth",
    });
  });
});

// Message suggestion chips
document.addEventListener("DOMContentLoaded", () => {
  const suggestionChips = document.querySelectorAll(".suggestion-chip");
  const messageTextarea = document.getElementById("input-message");

  if (suggestionChips.length > 0 && messageTextarea) {
    suggestionChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        messageTextarea.value = chip.innerText;
        messageTextarea.focus(); // Focus on the textarea for better UX
        // Déclencher manuellement l'événement input pour la validation
        messageTextarea.dispatchEvent(new Event("input"));
      });
    });
  }
});

// Parallax effect for hero shapes
const heroSection = document.querySelector(".hero");
if (heroSection) {
  heroSection.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".hero .shape-wrapper");
    // Calculate position from -1 to 1
    const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    shapes.forEach((shape) => {
      const speed = shape.getAttribute("data-speed");
      const moveX = x * speed * 10; // Multiplier for effect strength
      const moveY = y * speed * 10;

      shape.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
  });
}

// Real-time Form Validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const inputs = contactForm.querySelectorAll("input, textarea");
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  const checkFormValidity = () => {
    let allValid = true;
    inputs.forEach((input) => {
      const value = input.value.trim();
      if (input.type === "email") {
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

    if (input.type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailPattern.test(value);
    } else {
      isValid = value.length > 0;
    }

    if (value === "") {
      input.classList.remove("valid", "invalid");
    } else if (isValid) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }

    checkFormValidity();
  };

  // Vérification initiale
  checkFormValidity();

  inputs.forEach((input) => {
    input.addEventListener("input", () => validate(input));
    input.addEventListener("blur", () => validate(input));
  });
}
