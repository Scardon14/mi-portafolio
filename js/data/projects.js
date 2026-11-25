// Datos de los proyectos: agrega un objeto más para sumar otro libro a la biblioteca.
// Campos opcionales: team (colaboradores), role (mi aporte) y challenge (reto y solución).
export const projects = [ // Lista de proyectos con textos en español e inglés
  { title: "Barbería O&amp;T", color: "#7C5CFF", kind: "personal", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], // Primer proyecto
    demo: "https://scardon14.github.io/proyecto-barberia/", repo: "https://github.com/Scardon14/proyecto-barberia",
    type: { es: "Sitio web", en: "Website" },
    desc: { es: "Desarrollé el sitio web de una barbería para presentar su identidad visual y facilitar la navegación.", en: "I built a barbershop website to showcase its visual identity and make navigation easy." },
    features: { es: ["Presentación de la identidad visual", "Navegación clara"], en: ["Visual identity showcase", "Clear navigation"] },
    challenge: { es: "Lograr que el sitio se viera bien en celular y en computador; lo resolví con la cuadrícula de Bootstrap y probando distintos tamaños de pantalla.", en: "Making the site look good on phones and desktops; I solved it with Bootstrap's grid and by testing several screen sizes." } },
  { title: "Planificador de Tareas", color: "#3EE6C3", kind: "personal", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], // Segundo proyecto
    demo: "https://scardon14.github.io/planificador-tareas/", repo: "https://github.com/Scardon14/planificador-tareas",
    type: { es: "Aplicación web", en: "Web app" },
    desc: { es: "Creé una aplicación web para organizar tareas y proyectos, con un diseño moderno y funciones intuitivas.", en: "I created a web app to organize tasks and projects, with a modern design and intuitive features." },
    features: { es: ["Gestión de tareas y proyectos", "Diseño moderno e intuitivo"], en: ["Task and project management", "Modern, intuitive design"] },
    challenge: { es: "Mantener el código ordenado a medida que crecían las funciones; lo resolví separando la lógica en JavaScript de la presentación en HTML y CSS.", en: "Keeping the code organized as features grew; I solved it by separating the JavaScript logic from the HTML and CSS presentation." } },
  { title: "Trendy Shop", color: "#FFB86B", kind: "team", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], // Tercer proyecto
    demo: "https://argie-fullstack-java-generation-ch14.github.io/trendy-shop/", repo: "https://github.com/argie-fullstack-java-generation-ch14/trendy-shop",
    type: { es: "Tienda en línea", en: "Online store" },
    desc: { es: "Participé en un proyecto colaborativo del bootcamp de Generation: una tienda en línea de ropa.", en: "I took part in a collaborative project at the Generation bootcamp: an online clothing store." },
    features: { es: ["Tienda de ropa en línea"], en: ["Online clothing store"] },
    challenge: { es: "Coordinar el trabajo en equipo dentro de un mismo repositorio; lo resolví usando ramas de Git y revisando los cambios antes de unirlos.", en: "Coordinating teamwork in a single repository; I solved it using Git branches and reviewing changes before merging them." } },
  { title: "Calculadora Factorial", color: "#FF6B9A", kind: "personal", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], // Cuarto proyecto
    demo: "https://scardon14.github.io/calculadora-factorial/", repo: "https://github.com/Scardon14/calculadora-factorial",
    type: { es: "Aplicación web", en: "Web app" },
    desc: { es: "Programé una aplicación web que calcula el factorial de un número.", en: "I programmed a web app that calculates the factorial of a number." },
    features: { es: ["Cálculo del factorial de un número"], en: ["Factorial calculation"] },
    challenge: { es: "Evitar errores si la persona ingresa un dato no válido; lo resolví validando la entrada en JavaScript y mostrando mensajes claros.", en: "Avoiding errors when a user enters invalid data; I solved it by validating input in JavaScript and showing clear messages." } },
];
export const labels = { // Textos de la interfaz de la biblioteca
  demo: { es: "Ver demo ↗", en: "Live demo ↗" }, code: { es: "Código fuente ↗", en: "Source code ↗" }, volume: { es: "Proyecto", en: "Project" },
  personal: { es: "Proyecto personal", en: "Personal project" }, team: { es: "Proyecto colaborativo", en: "Collaborative project" },
  with: { es: "Colaboradores", en: "Collaborators" }, role: { es: "Mi aporte", en: "My contribution" }, challenge: { es: "Reto", en: "Challenge" },
  prev: { es: "Proyecto anterior", en: "Previous project" }, next: { es: "Proyecto siguiente", en: "Next project" },
};
