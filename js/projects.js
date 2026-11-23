import { fetchProducts } from "./data/productsDb.js";

// First letter of the name, used when there is no logo
const initial = (name) => name.trim().charAt(0).toUpperCase();

// Builds the fallback tile that replaces a missing or broken logo
function fallbackTile(name) {
  const tile = document.createElement("span");
  tile.className = "product-logo fallback";
  tile.setAttribute("aria-hidden", "true");
  tile.textContent = initial(name);
  return tile;
}

function logoHtml(p) {
  return p.logo_url
    ? `<img class="product-logo" src="${p.logo_url}" alt="" width="48" height="48" loading="lazy" />`
    : `<span class="product-logo fallback" aria-hidden="true">${initial(p.name)}</span>`;
}

async function loadProducts() {
  const grid = document.getElementById("productsGrid");
  const dropdown = document.getElementById("projectDropdown");

  const data = await fetchProducts();

  if (!data) {
    console.error("Failed to load products:");
    grid.classList.remove("loading");
    grid.classList.add("error");
    grid.textContent = "Could not load products right now.";
    return;
  }

  grid.classList.remove("loading");
  grid.innerHTML = data
    .map(
      (p) => `
      <div class="product-card" id="${p.slug}">
        <div class="product-head">
          ${logoHtml(p)}
          <h3>${p.name}</h3>
        </div>
        <p>${p.description ?? ""}</p>
        ${p.tech_stack ? `<p class="tech-stack">${p.tech_stack}</p>` : ""}
        <a href="${p.cta_url}" target="_blank" rel="noopener noreferrer">${p.cta_url.replace(/^https?:\/\//, "")}</a>
      </div>
    `,
    )
    .join("");

  // Swap any logo that fails to load for the fallback tile
  grid.querySelectorAll("img.product-logo").forEach((img) => {
    const swap = () => img.replaceWith(fallbackTile(img.closest(".product-card").querySelector("h3").textContent));
    img.addEventListener("error", swap);
    if (img.complete && !img.naturalWidth) swap();
  });

  dropdown.innerHTML =
    '<button type="button" class="dropdownName" id="dropdownOpen">Navigate</button>' +
    data.map((p) => `<a href="#${p.slug}">${p.name}</a>`).join("");

  const dropdownOpen = document.getElementById("dropdownOpen");
  if (dropdownOpen && dropdown) {
    dropdownOpen.addEventListener("click", () => {
      dropdown.classList.toggle("drop");
    });
  }
}

await loadProducts();