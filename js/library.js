// Biblioteca de proyectos: libro abierto, estante de lomos, flechas y autoavance.
import { projects, labels } from "./data/projects.js"; // Datos y textos
const DELAY = 6000; // Milisegundos entre proyectos

// Monta la biblioteca dentro del contenedor recibido.
// Cambia sola cada DELAY ms y se pausa cuando la persona interactúa.
export function initLibrary(root) {
  const lang = () => (document.documentElement.lang === "en" ? "en" : "es"); // Idioma activo
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches; // Respeta movimiento reducido
  root.style.setProperty("--delay", `${DELAY}ms`); // Duración de la barra de progreso
  root.innerHTML = `<div class="library-stage"><button class="arrow" data-dir="-1">‹</button><article class="book" aria-live="polite"></article><button class="arrow" data-dir="1">›</button></div>
    <div class="library-progress"><i></i></div>
    <div class="shelf">${projects.map((p, i) => `<button class="spine" data-i="${i}" style="--book-color:${p.color};--h:${120 + ((i * 23) % 45)}px">${p.title}</button>`).join("")}</div>`; // Estructura
  const book = root.querySelector(".book"); // Libro abierto
  const bar = root.querySelector(".library-progress i"); // Barra de progreso
  const spines = root.querySelectorAll(".spine"); // Lomos del estante
  let index = 0; // Proyecto actual
  let timer = 0; // Temporizador del autoavance

  // Muestra el proyecto actual en el libro y marca su lomo.
  // No reinicia el temporizador, así sirve también al cambiar de idioma.
  function render() {
    const p = projects[index]; // Proyecto actual
    const l = lang(); // Idioma actual
    book.style.setProperty("--book-color", p.color); // Color del libro
    book.innerHTML = `<small>${labels.volume[l].toUpperCase()} ${index + 1}/${projects.length} · ${p.type[l]}</small><h3>${p.title}</h3><p>${p.desc[l]}</p><ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul><a href="${p.url}" target="_blank" rel="noopener noreferrer">${labels.view[l]}</a>`; // Contenido
    book.style.animation = "none"; // Quita la animación para reiniciarla
    void book.offsetWidth; // Fuerza un reflow
    book.style.animation = ""; // Reactiva la animación de página
    spines.forEach((s, i) => s.classList.toggle("is-active", i === index)); // Marca el lomo activo
    root.querySelectorAll(".arrow").forEach((a) => a.setAttribute("aria-label", labels[a.dataset.dir > 0 ? "next" : "prev"][l])); // Etiquetas accesibles
  }

  // Programa el siguiente cambio y reinicia la barra de progreso.
  // No hace nada si la persona prefiere movimiento reducido.
  function schedule() {
    clearTimeout(timer); // Cancela el temporizador anterior
    bar.style.animation = "none"; // Detiene la barra
    void bar.offsetWidth; // Fuerza un reflow
    bar.style.animation = ""; // Reinicia la barra
    if (!calm) timer = setTimeout(() => go(index + 1), DELAY); // Avanza solo tras DELAY
  }

  // Va al proyecto indicado (con vuelta al inicio) y reprograma el autoavance.
  // Recibe el índice de destino.
  function go(i) {
    index = (i + projects.length) % projects.length; // Índice circular
    render(); // Muestra el proyecto
    schedule(); // Reinicia el autoavance
  }

  root.addEventListener("click", (e) => { // Clics en flechas y lomos
    const arrow = e.target.closest(".arrow"); // ¿Fue una flecha?
    const spine = e.target.closest(".spine"); // ¿Fue un lomo?
    if (arrow) go(index + Number(arrow.dataset.dir)); // Mueve una posición
    if (spine) go(Number(spine.dataset.i)); // Salta al proyecto elegido
  });
  root.addEventListener("keydown", (e) => { // Flechas del teclado
    if (e.key === "ArrowRight") go(index + 1); // Siguiente
    if (e.key === "ArrowLeft") go(index - 1); // Anterior
  });
  const pause = (on) => { root.classList.toggle("is-paused", on); on ? clearTimeout(timer) : schedule(); }; // Pausa o reanuda
  root.addEventListener("pointerenter", () => pause(true)); // Pausa al pasar el mouse
  root.addEventListener("pointerleave", () => pause(false)); // Reanuda al salir
  root.addEventListener("focusin", () => pause(true)); // Pausa al enfocar con teclado
  root.addEventListener("focusout", () => pause(false)); // Reanuda al salir del foco
  addEventListener("langchange", render); // Actualiza textos al cambiar de idioma
  go(0); // Muestra el primer proyecto y arranca
}
