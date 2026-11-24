// Tecnologías agrupadas por capa. Cada ítem: [nombre, icono de devicon o null, invertir en oscuro].
export const groups = [ // Capas de la más cercana al usuario a la más cercana al proceso
  { code: "LNG", name: { es: "Lenguajes", en: "Languages" }, items: [["Java", "java"], ["JavaScript", "javascript"], ["PHP", "php"], ["HTML", "html5"], ["CSS", "css3"]] },
  { code: "WEB", name: { es: "Frameworks", en: "Frameworks" }, items: [["Spring Boot", "spring"], ["Bootstrap", "bootstrap"]] },
  { code: "DB", name: { es: "Datos", en: "Data" }, items: [["MySQL", "mysql"]] },
  { code: "AUT", name: { es: "Automatización", en: "Automation" }, items: [["Power Apps", null], ["Power Automate", null], ["SharePoint", null]] },
  { code: "VCS", name: { es: "Versiones", en: "Versioning" }, items: [["Git", "git"], ["GitHub", "github", true]] },
];
