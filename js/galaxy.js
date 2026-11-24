// Dibuja un campo de estrellas con paralaje, destellos y estrellas fugaces.
// Recibe el canvas donde dibujar y no devuelve nada.
export function initGalaxy(canvas) {
  const ctx = canvas.getContext("2d"); // Contexto 2D para dibujar
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches; // Detecta si se prefiere menos movimiento
  let colors = []; // Colores de estrellas leídos del tema activo
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 }; // Posición suavizada (x, y) y objetivo (tx, ty)
  let stars = []; // Lista de estrellas
  let comet = null; // Estrella fugaz activa
  let w = 0; // Ancho del canvas
  let h = 0; // Alto del canvas

  // Lee los colores del tema activo desde las variables CSS.
  // Se repite cuando cambia entre modo oscuro y claro.
  function readColors() {
    const css = getComputedStyle(document.documentElement); // Estilos calculados del documento
    colors = ["--color-text", "--color-text", "--color-lavender", "--color-accent", "--color-star"].map((n) => css.getPropertyValue(n).trim()); // Colores de la paleta
  }

  // Ajusta el tamaño del canvas a la ventana y recrea las estrellas.
  // La cantidad depende del área para mantener la misma densidad.
  function resize() {
    w = canvas.width = innerWidth; // Ancho igual al de la ventana
    h = canvas.height = innerHeight; // Alto igual al de la ventana
    stars = Array.from({ length: Math.min(260, Math.floor((w * h) / 5500)) }, () => ({ // Crea las estrellas
      x: Math.random() * w, // Posición horizontal aleatoria
      y: Math.random() * h, // Posición vertical aleatoria
      z: 0.2 + Math.random() * 0.8, // Profundidad: más cerca = más grande y rápida
      phase: Math.random() * 6.28, // Fase inicial del destello
      ci: Math.floor(Math.random() * 5), // Índice de color elegido al azar
    }));
  }

  // Dibuja un fotograma: estrellas con destello y paralaje, más la estrella fugaz.
  // Recibe el tiempo t en milisegundos que entrega requestAnimationFrame.
  function draw(t) {
    ctx.clearRect(0, 0, w, h); // Limpia el fotograma anterior
    mouse.x += (mouse.tx - mouse.x) * 0.05; // Acerca x al objetivo con suavidad
    mouse.y += (mouse.ty - mouse.y) * 0.05; // Acerca y al objetivo con suavidad
    stars.forEach((s) => { // Recorre cada estrella
      s.y = (s.y + s.z * 0.06 + h) % h; // Deriva lenta hacia abajo con rebote circular
      const x = (s.x - mouse.x * s.z * 28 + w) % w; // Desplaza según el mouse (paralaje horizontal)
      const y = (s.y - mouse.y * s.z * 28 + h) % h; // Desplaza según el mouse (paralaje vertical)
      ctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.0008 * s.z + s.phase)); // Opacidad que parpadea
      ctx.fillStyle = colors[s.ci]; // Color de esta estrella
      ctx.beginPath(); // Inicia el trazo
      ctx.arc(x, y, s.z * 1.5, 0, 6.28); // Círculo cuyo radio depende de la profundidad
      ctx.fill(); // Rellena la estrella
    });
    if (!comet && Math.random() < 0.004) comet = { x: Math.random() * w, y: 0, life: 0 }; // De vez en cuando lanza una fugaz
    if (comet) { // Si hay una fugaz activa
      comet.x += 9; // Avanza a la derecha
      comet.y += 5; // Avanza hacia abajo
      comet.life += 1; // Cuenta sus fotogramas de vida
      ctx.globalAlpha = 0.8; // Opacidad de la cola
      ctx.strokeStyle = colors[0]; // Color de la cola según el tema
      ctx.beginPath(); // Inicia el trazo de la cola
      ctx.moveTo(comet.x, comet.y); // Parte de la cabeza
      ctx.lineTo(comet.x - 90, comet.y - 50); // Termina al final de la cola
      ctx.stroke(); // Dibuja la cola
      if (comet.life > 90) comet = null; // Elimina la fugaz al terminar su vida
    }
    if (!still) requestAnimationFrame(draw); // Pide el siguiente fotograma salvo movimiento reducido
  }

  addEventListener("resize", resize); // Recalcula al cambiar el tamaño de la ventana
  addEventListener("pointermove", (e) => { // Escucha el movimiento del puntero
    mouse.tx = e.clientX / innerWidth - 0.5; // Normaliza x entre -0.5 y 0.5
    mouse.ty = e.clientY / innerHeight - 0.5; // Normaliza y entre -0.5 y 0.5
  });
  readColors(); // Lee los colores iniciales
  addEventListener("themechange", readColors); // Actualiza colores al cambiar de tema
  resize(); // Crea las estrellas iniciales
  requestAnimationFrame(draw); // Arranca la animación
}
