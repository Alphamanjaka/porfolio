// Form submission
function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const currentLang = document
    .querySelector(".lang-btn.active")
    .textContent.toLowerCase();

  // Validation
  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const message = form.message.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert(translations[currentLang]["error-name"]);
    return;
  }
  if (!emailRegex.test(email)) {
    alert(translations[currentLang]["error-email"]);
    return;
  }
  if (!message) {
    alert(translations[currentLang]["error-message"]);
    return;
  }

  const btn = form.querySelector("button");
  const originalText = btn.textContent;

  // Show loading state
  btn.textContent = currentLang === "fr" ? "Envoi..." : "Sending...";
  btn.disabled = true;

  // Remplacer ces valeurs par vos IDs EmailJS
  const serviceID = "service_r39v4ha";
  const templateID = "template_wg9emic";

  emailjs.sendForm(serviceID, templateID, e.target).then(
    () => {
      btn.textContent = originalText;
      btn.disabled = false;
      alert(translations[currentLang]["alert-success"]);
      e.target.reset();
    },
    (err) => {
      btn.textContent = originalText;
      btn.disabled = false;
      alert(translations[currentLang]["alert-error"]);
      console.error("EmailJS Error:", JSON.stringify(err));
    },
  );
}
