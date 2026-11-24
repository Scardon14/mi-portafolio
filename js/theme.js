// Alterna entre modo oscuro y claro y recuerda la elección.
// Recibe el botón que cambia el tema.
export function initTheme(button) {
  const root = document.documentElement; // Elemento raíz donde vive data-theme

  // Aplica un tema, lo guarda y avisa al resto de módulos.
  // Recibe "dark" o "light".
  function apply(theme) {
    root.dataset.theme = theme; // Cambia las variables CSS
    try { localStorage.setItem("theme", theme); } catch {} // Guarda la elección si es posible
    button.textContent = theme === "dark" ? "☀" : "☾"; // Muestra el icono del tema contrario
    button.setAttribute("aria-label", theme === "dark" ? "Modo claro" : "Modo oscuro"); // Etiqueta accesible
    dispatchEvent(new Event("themechange")); // Avisa a la galaxia para recolorear
  }

  button.addEventListener("click", () => apply(root.dataset.theme === "dark" ? "light" : "dark")); // Alterna al hacer clic
  apply(root.dataset.theme || "dark"); // Sincroniza el botón con el tema inicial
}
