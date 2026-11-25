// Dibuja la cinta de tecnologías en movimiento y la lista por capas.
import { groups } from "./data/tech.js"; // Datos de las tecnologías
const lang = () => (document.documentElement.lang === "en" ? "en" : "es"); // Idioma activo
const label = (name) => (typeof name === "object" ? name[lang()] : name); // Texto según el idioma (o el mismo texto)

// Crea la pastilla HTML de una tecnología (se reutiliza en cinta y capas).
// Recibe [nombre, icono, invertir] y devuelve un string HTML.
const chip = ([name, icon, invert]) => `<span class="chip">${icon
  ? `<img class="${invert ? "invert" : ""}" src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${icon}/${icon}-original.svg" alt="" loading="lazy" onerror="this.remove()">`
  : icon === null ? `<span class="dot">${label(name)[0]}</span>` : ""}${label(name)}</span>`; // Icono, inicial o solo texto

// Llena la cinta (dos filas opuestas) y la lista por capas.
// Recibe el contenedor de la cinta y el de las capas; se redibuja al cambiar de idioma.
export function initTechBar(marquee, layers) {
  const all = groups.flatMap((g) => g.items); // Todas las tecnologías en una lista
  const row = (items) => `<div class="track">${[...items, ...items].map(chip).join("")}</div>`; // Duplica para el bucle infinito
  const draw = () => { // Dibuja cinta y capas en el idioma activo
    marquee.innerHTML = `<div class="marquee" aria-hidden="true">${row(all)}</div><div class="marquee reverse" aria-hidden="true">${row([...all].reverse())}</div>`; // Dos cintas
    layers.innerHTML = groups.map((g) => `<div class="layer"><code>${g.code}</code><h3>${g.name[lang()]}</h3><div>${g.items.map(chip).join("")}</div></div>`).join(""); // Capas
  };
  draw(); // Dibuja al iniciar
  addEventListener("langchange", draw); // Redibuja al cambiar de idioma
}
