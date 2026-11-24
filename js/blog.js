// Dibuja la lista de publicaciones del blog como entradas desplegables.
// Recibe el contenedor donde se muestran.
import { posts } from "./data/posts.js"; // Datos de las publicaciones

export function initBlog(root) {
  const draw = () => { // Dibuja las entradas en el idioma activo
    const l = document.documentElement.lang === "en" ? "en" : "es"; // Idioma activo
    root.innerHTML = posts.map((p) => `<details class="post"><summary><span class="post-date">${p.date} · ${p.tag[l]}</span><strong>${p.title[l]}</strong></summary><p>${p.body[l]}</p></details>`).join(""); // Una entrada por publicación
  };
  draw(); // Dibuja al iniciar
  addEventListener("langchange", draw); // Redibuja al cambiar de idioma
}
