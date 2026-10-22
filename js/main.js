// Punto de entrada: inicializa los módulos de comportamiento de la página.
import { initNavigation } from "./navigation.js";
import { initRevealAnimations } from "./animations.js";

// Esta clase permite activar las animaciones sin ocultar contenido si JS falla.
document.documentElement.classList.add("js-enabled");

initNavigation();
initRevealAnimations();

// Mantiene actualizado el año del pie de página.
const yearElement = document.querySelector("#currentYear");
if (yearElement) yearElement.textContent = new Date().getFullYear();
