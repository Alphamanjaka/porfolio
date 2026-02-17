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
  console.log("Toggle menu");
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.remove("active");
}

// Scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      observer.unobserve(entry.target);

      // Restore CSS transitions after animation to fix hover effects
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
    ".project-card, .skill-item, section h2, .about-content, .contact-content, .tabs, .skills-category h3, .experience-item, .study-item, .cert-item, .testimonial-card, .blog-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Add staggered delay for skills
document.querySelectorAll(".skills-grid").forEach((grid) => {
  grid.querySelectorAll(".skill-item").forEach((item, index) => {
    item.style.transitionDelay = `${index * 100}ms`;
  });
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const btn = document.querySelector(".theme-switch");
  if (btn) btn.textContent = isDark ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme");
if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.body.classList.add("dark-mode");
  updateThemeIcon(true);
}

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
  document.getElementById("progressBar").style.width = scrolled + "%";
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
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// Testimonials Carousel
const track = document.querySelector(".carousel-track");
if (track) {
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn.next");
  const prevButton = document.querySelector(".carousel-btn.prev");
  let currentSlideIndex = 0;

  const updateSlidePosition = () => {
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  };

  nextButton.addEventListener("click", () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    updateSlidePosition();
  });

  prevButton.addEventListener("click", () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    updateSlidePosition();
  });
}

// Blog Post Page Loader
function loadBlogPost() {
  const postContainer = document.getElementById('post-container');
  if (!postContainer) return; // Only run on the blog post page

  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');
  if (!postId) {
    postContainer.innerHTML = '<h1>Article not found</h1>';
    return;
  }

  const lang = localStorage.getItem('language') || 'en';

  const titleKey = `${postId}-title`;
  const dateKey = `${postId}-date`;
  const contentKey = `${postId}-content`;
  const imageKey = `${postId}-image`;

  const title = translations[lang][titleKey] || 'Title not found';
  const date = translations[lang][dateKey] || '';
  const content = translations[lang][contentKey] || '<p>Content not found.</p>';
  const imageUrl = translations[lang][imageKey];

  const header = document.createElement('div');
  header.className = 'post-header';
  header.innerHTML = `
    <h1>${title}</h1>
    <div class="post-meta">${date}</div>
  `;

  const contentDiv = document.createElement('article');
  contentDiv.className = 'post-content';
  contentDiv.innerHTML = content;

  if (imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.className = 'post-featured-image';
    postContainer.prepend(img);
  }

  postContainer.prepend(contentDiv);
  postContainer.prepend(header);
}

document.addEventListener('DOMContentLoaded', loadBlogPost);
