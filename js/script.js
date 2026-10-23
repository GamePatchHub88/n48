const button = document.getElementById("nav-button");
const nav = document.getElementById("nav");
const links = nav.querySelectorAll("a");

function closeMenu() {
  button.setAttribute("aria-expanded", "false");
}

button.addEventListener("click", () => {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isExpanded));
});

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
    button.focus();
  }
});
window.matchMedia("(min-width: 48em)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});