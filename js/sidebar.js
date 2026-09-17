const nav = document.querySelector(".nav");
const menuToggleBtn = document.getElementById("menuIcon");

if(menuToggleBtn) {
    menuToggleBtn.addEventListener("click", () => togglesidebar())
}

function togglesidebar() {
  nav.classList.toggle("show");
}
