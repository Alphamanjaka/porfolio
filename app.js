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

document.querySelectorAll(".project-card, .skill-item").forEach((el) => {
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
