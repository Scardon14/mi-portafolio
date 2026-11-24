// Dibuja la cinta de tecnologías en movimiento y la lista por capas.
import { groups } from "./data/tech.js"; // Datos de las tecnologías
const lang = () => (document.documentElement.lang === "en" ? "en" : "es"); // Idioma activo

// Crea la pastilla HTML de una tecnología (se reutiliza en cinta y capas).
// Recibe [nombre, icono, invertir] y devuelve un string HTML.
const chip = ([name, icon, invert]) => `<span class="chip">${icon
  ? `<img class="${invert ? "invert" : ""}" src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${icon}/${icon}-original.svg" alt="" loading="lazy" onerror="this.remove()">`
  : `<span class="dot">${name[0]}</span>`}${name}</span>`; // Icono (o inicial) + nombre

// Llena la cinta (dos filas opuestas) y la lista por capas.
// Recibe el contenedor de la cinta y el de las capas.
export function initTechBar(marquee, layers) {
  const all = groups.flatMap((g) => g.items); // Todas las tecnologías en una lista
  const row = (items) => `<div class="track">${[...items, ...items].map(chip).join("")}</div>`; // Duplica para el bucle infinito
  marquee.innerHTML = `<div class="marquee" aria-hidden="true">${row(all)}</div><div class="marquee reverse" aria-hidden="true">${row([...all].reverse())}</div>`; // Dos cintas
  const draw = () => (layers.innerHTML = groups.map((g) => `<div class="layer"><code>${g.code}</code><h3>${g.name[lang()]}</h3><div>${g.items.map(chip).join("")}</div></div>`).join("")); // Capas
  draw(); // Dibuja las capas
  addEventListener("langchange", draw); // Redibuja al cambiar de idioma
}
