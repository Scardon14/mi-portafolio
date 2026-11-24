// Controla la pantalla de carga: anima el progreso hasta que la página esté lista.
// Recibe el elemento del loader y devuelve una promesa que se cumple al terminar.
export function runLoader(loader) {
  const count = loader.querySelector("[data-loader-count]"); // Número del porcentaje
  const photo = loader.querySelector("img"); // Foto que se muestra en el loader
  const start = performance.now(); // Momento en que empezó la carga
  const pageLoaded = new Promise((resolve) => { // Promesa: la página terminó de cargar
    if (document.readyState === "complete") resolve(); // Ya estaba cargada
    else addEventListener("load", resolve, { once: true }); // Espera al evento load
  });
  const photoReady = photo.decode().catch(() => {}); // Promesa: la foto está decodificada (ignora errores)
  let ready = false; // Indica si la carga real terminó
  Promise.all([pageLoaded, photoReady]).then(() => (ready = true)); // Marca la carga real como lista

  return new Promise((resolve) => { // Promesa que se cumple al cerrar el loader
    let progress = 0; // Progreso mostrado de 0 a 100

    // Avanza el progreso suavemente: se frena en 90 hasta que todo cargue.
    // Exige un mínimo de 2.2 s para que se aprecie la animación.
    function tick(now) {
      const target = ready && now - start > 2200 ? 100 : 90; // Meta según el estado real de carga
      progress += (target - progress) * 0.05; // Se acerca a la meta con suavidad
      loader.style.setProperty("--p", progress); // Actualiza el anillo vía variable CSS
      count.textContent = Math.round(progress); // Muestra el porcentaje redondeado
      if (progress < 99.5) return requestAnimationFrame(tick); // Sigue animando hasta casi 100
      count.textContent = 100; // Fija el 100 final
      loader.classList.add("is-done"); // Dispara la salida circular
      document.documentElement.classList.remove("is-loading"); // Devuelve el scroll
      setTimeout(resolve, 600); // Avisa cuando la salida casi termina
    }
    requestAnimationFrame(tick); // Inicia el ciclo de animación
  });
}
