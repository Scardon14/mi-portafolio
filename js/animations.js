// Muestra elementos al entrar en el área visible de la pantalla.
export function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  // Si el navegador no soporta IntersectionObserver, mostramos todo el contenido.
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}
