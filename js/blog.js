function loadBlogPost() {
  const postContainer = document.getElementById("post-container");
  if (!postContainer) return;

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  if (!postId) {
    postContainer.innerHTML = "<h1>Article not found</h1>";
    return;
  }

  const lang = localStorage.getItem("language") || "en";

  // Check if translations are loaded
  if (typeof translations === "undefined") {
    console.error("Translations not loaded");
    return;
  }

  const titleKey = `${postId}-title`;
  const dateKey = `${postId}-date`;
  const contentKey = `${postId}-content`;
  const imageKey = `${postId}-image`;

  const title = translations[lang][titleKey] || "Title not found";
  const date = translations[lang][dateKey] || "";
  const content = translations[lang][contentKey] || "<p>Content not found.</p>";
  const imageUrl = translations[lang][imageKey];

  const header = document.createElement("div");
  header.className = "post-header";
  header.innerHTML = `
    <h1>${title}</h1>
    <div class="post-meta">${date}</div>
  `;

  const contentDiv = document.createElement("article");
  contentDiv.className = "post-content";
  contentDiv.innerHTML = content;

  // On insère d'abord le contenu (il sera poussé vers le bas par les suivants)
  postContainer.prepend(contentDiv);

  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;
    img.className = "post-featured-image";
    postContainer.prepend(img);
  }

  postContainer.prepend(header);
}

document.addEventListener("DOMContentLoaded", loadBlogPost);
