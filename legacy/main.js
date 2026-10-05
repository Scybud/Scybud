const sidebar = document.getElementById("sidebar");

function togglesidebar() {
  sidebar.classList.toggle("show");
}

const dropdownOpen = document.getElementById("dropdownOpen");
const dropdown = document.querySelector(".dropdown");
if(dropdownOpen && dropdown) {

  dropdownOpen.addEventListener("click", () => {
    dropdown.classList.toggle("drop");
  });
}