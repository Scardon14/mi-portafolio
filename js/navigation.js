// Cierra el menú desplegable de Bootstrap después de seleccionar una sección.
export function initNavigation() {
  const navMenu = document.querySelector("#navbarNav");
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");

  if (!navMenu || !window.bootstrap) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        window.bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });
}
