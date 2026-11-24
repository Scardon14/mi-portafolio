// Reemplaza la flecha por una estrella con anillo y lanza chispas al hacer clic.
// Solo se activa en dispositivos con puntero preciso (no en pantallas táctiles).
export function initCursor() {
  if (!matchMedia("(pointer: fine)").matches) return; // Sale si es un dispositivo táctil
  const root = document.documentElement; // Elemento raíz de la página
  const make = (cls) => { // Crea un elemento flotante con una clase
    const el = document.createElement("div"); // Nuevo div
    el.className = cls; // Le asigna la clase recibida
    document.body.append(el); // Lo agrega al documento
    return el; // Lo devuelve para usarlo
  };
  const dot = make("cursor-dot"); // Estrella que sigue al puntero exacto
  const ring = make("cursor-ring"); // Anillo que sigue con retraso
  const colors = ["--color-text", "--color-accent", "--color-purple", "--color-star"] // Variables CSS para las chispas
    .map((name) => getComputedStyle(root).getPropertyValue(name).trim()); // Las convierte en colores reales
  const pos = { x: 0, y: 0, rx: 0, ry: 0 }; // Posición del puntero (x, y) y del anillo (rx, ry)
  root.classList.add("has-cursor"); // Oculta la flecha del sistema

  // Lanza chispas desde un punto que se dispersan y desaparecen.
  // Recibe las coordenadas x e y donde ocurrió el clic.
  function burst(x, y) {
    for (let i = 0; i < 14; i++) { // Crea 14 chispas
      const spark = make("cursor-spark"); // Nueva chispa
      const angle = (i / 14) * 6.28 + Math.random() * 0.4; // Ángulo repartido en círculo con variación
      const dist = 40 + Math.random() * 50; // Distancia aleatoria de viaje
      spark.style.background = colors[i % colors.length]; // Color rotativo de la paleta
      spark.animate([ // Animación de salida con la Web Animations API
        { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 }, // Inicio: en el clic, visible
        { transform: `translate(${x + Math.cos(angle) * dist}px, ${y + Math.sin(angle) * dist}px) scale(0)`, opacity: 0 }, // Fin: lejos y diminuta
      ], { duration: 700, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }).onfinish = () => spark.remove(); // Se elimina al terminar
    }
  }

  // Actualiza la posición del anillo en cada fotograma con efecto de retraso.
  // No recibe parámetros y se repite sola con requestAnimationFrame.
  function follow() {
    pos.rx += (pos.x - pos.rx) * 0.16; // Acerca el anillo en x
    pos.ry += (pos.y - pos.ry) * 0.16; // Acerca el anillo en y
    ring.style.transform = `translate(${pos.rx}px, ${pos.ry}px)`; // Mueve el anillo
    requestAnimationFrame(follow); // Programa el siguiente fotograma
  }

  addEventListener("pointermove", (e) => { // Al mover el puntero
    pos.x = e.clientX; // Guarda x
    pos.y = e.clientY; // Guarda y
    dot.style.transform = `translate(${pos.x}px, ${pos.y}px)`; // Mueve la estrella al instante
    dot.classList.add("is-visible"); // Muestra la estrella
    ring.classList.add("is-visible"); // Muestra el anillo
    ring.classList.toggle("is-hover", !!e.target.closest("a, button, .project-card")); // Agranda el anillo sobre elementos clicables
  });
  addEventListener("pointerdown", (e) => { // Al presionar
    ring.classList.add("is-down"); // Contrae el anillo
    burst(e.clientX, e.clientY); // Lanza las chispas
  });
  addEventListener("pointerup", () => ring.classList.remove("is-down")); // Al soltar, el anillo vuelve a su tamaño
  follow(); // Arranca el seguimiento del anillo
}
