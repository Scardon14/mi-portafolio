// Tecnologías agrupadas por capa. Cada ítem: [nombre (texto o {es, en}), icono de devicon, invertir en oscuro].
// Icono null = muestra la inicial; sin icono = solo texto.
export const groups = [ // Capas, de los lenguajes a las metodologías
  { code: "LNG", name: { es: "Lenguajes de programación", en: "Programming languages" }, items: [["Java", "java"], ["JavaScript", "javascript"], ["PHP", "php"], ["HTML", "html5"], ["CSS", "css3"]] },
  { code: "FWK", name: { es: "Frameworks y tecnologías de desarrollo", en: "Frameworks and development technologies" }, items: [["Spring Boot", "spring"], ["Spring Data JPA", "spring"], ["Spring WebFlux", "spring"], ["Bootstrap", "bootstrap"]] },
  { code: "DB", name: { es: "Bases de datos", en: "Databases" }, items: [["MySQL", "mysql"]] },
  { code: "VCS", name: { es: "Control de versiones", en: "Version control" }, items: [["Git", "git"], ["GitHub", "github", true]] },
  { code: "QA", name: { es: "Pruebas de software y QA", en: "Software testing and QA" }, items: [
    [{ es: "Pruebas unitarias", en: "Unit testing" }], [{ es: "Pruebas de componentes", en: "Component testing" }], [{ es: "Pruebas funcionales", en: "Functional testing" }],
    [{ es: "Automatización de pruebas", en: "Test automation" }], [{ es: "Validación de APIs", en: "API validation" }]] },
  { code: "AUT", name: { es: "Automatización y productividad", en: "Automation and productivity" }, items: [["Power Automate", null], ["Power Apps", null], ["SharePoint", null]] },
  { code: "OTR", name: { es: "Otras tecnologías y herramientas", en: "Other technologies and tools" }, items: [["Postman", "postman"]] },
  { code: "MET", name: { es: "Metodologías y conceptos", en: "Methodologies and concepts" }, items: [
    [{ es: "Programación orientada a objetos (POO)", en: "Object-oriented programming (OOP)" }], [{ es: "Desarrollo Full Stack", en: "Full Stack development" }], [{ es: "APIs REST", en: "REST APIs" }],
    [{ es: "Documentación técnica", en: "Technical documentation" }], [{ es: "Control de calidad", en: "Quality control" }], [{ es: "Metodologías ágiles", en: "Agile methodologies" }]] },
];
