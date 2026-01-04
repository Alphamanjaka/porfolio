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

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  e.target.reset();
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
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card, .skill-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
