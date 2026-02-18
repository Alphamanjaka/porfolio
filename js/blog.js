function loadBlogPost() {
  const postContainer = document.getElementById("post-container");
  if (!postContainer) return;

  // Clear previous dynamic content to allow language switching
  const dynamicElements = postContainer.querySelectorAll(
    ".post-header, .post-content, .post-featured-image, .similar-articles",
  );
  dynamicElements.forEach((el) => el.remove());

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

  // --- NEW FEATURES ---

  // 1. Generate Table of Contents (TOC)
  const tocContainer = contentDiv.querySelector(".toc ul");
  const headings = contentDiv.querySelectorAll("h2");
  if (tocContainer && headings.length > 0) {
    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
      tocContainer.appendChild(listItem);
    });
  } else if (tocContainer) {
    // Hide TOC container if no headings are found
    const tocElement = contentDiv.querySelector(".toc");
    if (tocElement) tocElement.style.display = "none";
  }

  // 2. Initialize Highlight.js for code blocks
  if (typeof hljs !== "undefined") {
    contentDiv.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }

  // 3. Set SEO Metadata
  document.title = `${title} | Manjaka Alpha`;
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  const descKey = `${postId}-desc`;
  const description = translations[lang][descKey] || content.substring(0, 155);
  metaDescription.content = description;

  // --- END OF NEW FEATURES ---

  // Add Similar Articles Section
  const similarDiv = document.createElement("div");
  similarDiv.className = "similar-articles";
  similarDiv.innerHTML = `<h3>${
    translations[lang]["similar-articles"] || "Similar Articles"
  }</h3>`;

  const grid = document.createElement("div");
  grid.className = "projects-grid"; // Reuse grid style for consistency
  grid.style.marginTop = "2rem";

  // Logic to pick other articles (exclude current one)
  const allIds = ["blog-1", "blog-2", "blog-3"];
  const otherIds = allIds.filter((id) => id !== postId);

  otherIds.forEach((id) => {
    const tKey = `${id}-title`;
    const dKey = `${id}-date`;
    const title = translations[lang][tKey];
    const date = translations[lang][dKey];

    if (title) {
      const card = document.createElement("article");
      card.className = "blog-card";
      card.innerHTML = `
            <div class="blog-content">
                <div class="blog-date">${date}</div>
                <h3>${title}</h3>
                <a href="blog-post.html?id=${id}" class="blog-link">${translations[lang]["read-more"]} →</a>
            </div>
          `;
      grid.appendChild(card);
    }
  });

  similarDiv.appendChild(grid);
  postContainer.appendChild(similarDiv);
}

document.addEventListener("DOMContentLoaded", loadBlogPost);
