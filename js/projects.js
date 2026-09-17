import { fetchProducts } from "./data/productsDb.js";

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
        <h3>${p.name}</h3>
        <p>${p.description ?? ""}</p>
        ${p.tech_stack ? `<p class="tech-stack">${p.tech_stack}</p>` : ""}
        <a href="${p.cta_url}" target="_blank" rel="noopener noreferrer">${p.cta_url.replace(/^https?:\/\//, "")}</a>
      </div>
    `,
    )
    .join("");

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