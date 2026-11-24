// Punto de entrada: inicializa los módulos de comportamiento de la página.
import { initNavigation } from "./navigation.js"; // Cierra el menú móvil al elegir sección
import { initRevealAnimations } from "./animations.js"; // Revela secciones al hacer scroll
import { initGalaxy } from "./galaxy.js"; // Fondo de estrellas
import { initCursor } from "./cursor.js"; // Cursor personalizado
import { runLoader } from "./loader.js"; // Pantalla de carga
import { initTheme } from "./theme.js"; // Modo oscuro y claro
import { initI18n } from "./i18n.js"; // Español / inglés
import { initLibrary } from "./library.js"; // Biblioteca de proyectos
import { initTechBar } from "./techbar.js"; // Cinta y capas de tecnologías
import { initBlog } from "./blog.js"; // Blog
import { initCounters } from "./counters.js"; // Cifras animadas
const $ = (selector) => document.querySelector(selector); // Atajo para buscar elementos

document.documentElement.classList.add("js-enabled"); // Activa las animaciones sin ocultar contenido si JS falla
initTheme($("#themeToggle")); // Tema (antes de la galaxia para leer sus colores)
initGalaxy($("#galaxy")); // Dibuja el fondo galaxia
initCursor(); // Activa el cursor y las chispas
initNavigation(); // Activa la navegación
initI18n($("#langToggle")); // Activa el selector de idioma
initTechBar($("#marquee"), $("#layers")); // Dibuja las tecnologías
initLibrary($("#library")); // Monta la biblioteca de proyectos
initBlog($("#blogList")); // Dibuja las publicaciones del blog
$("#currentYear").textContent = new Date().getFullYear(); // Año del pie de página
runLoader($("#loader")).then(() => { initRevealAnimations(); initCounters(); }); // Al terminar la carga, revela y cuenta
