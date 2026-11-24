// Anima las cifras (data-count) desde 0 cuando aparecen en pantalla.
// No recibe parámetros: busca los elementos por sí mismo.
export function initCounters() {
  const observer = new IntersectionObserver((entries) => { // Observa cuándo se ven las cifras
    entries.filter((e) => e.isIntersecting).forEach(({ target }) => { // Solo las visibles
      observer.unobserve(target); // Anima una única vez
      const end = Number(target.dataset.count); // Valor final
      const start = performance.now(); // Inicio de la animación
      const step = (now) => { // Un fotograma de la animación
        const t = Math.min((now - start) / 1200, 1); // Progreso de 0 a 1 en 1.2 s
        target.textContent = Math.round(end * (1 - (1 - t) ** 3)) + target.dataset.suffix; // Curva suave + sufijo
        if (t < 1) requestAnimationFrame(step); // Continúa hasta terminar
      };
      requestAnimationFrame(step); // Arranca
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => observer.observe(el)); // Observa cada cifra
}
