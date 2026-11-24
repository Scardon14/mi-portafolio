// Traducciones al inglés: el español vive en el HTML y se restaura desde ahí.
const wa = { es: "Hola Gabriela, vi tu portafolio y me gustaría conversar.", en: "Hi Gabriela, I saw your portfolio and I would like to talk." }; // Mensaje prellenado de WhatsApp
const en = { // Clave data-i18n -> texto en inglés
  home: "Home", about: "About", path: "Path", tech: "Tech", projects: "Projects", contact: "Contact",
  status: "Open to new opportunities", hello: "Hi, I'm", role: "JAVA FULL STACK DEVELOPER",
  heroDesc: "I turn real processes and problems into working software: from banking automation to complete web applications.",
  viewProjects: "View projects", cv: "Download CV",
  aboutTitle: "About me",
  about1: "I'm a Java Full Stack developer with experience automating processes with Power Automate, building internal apps with Power Apps and managing information with SharePoint. I'm passionate about learning new technologies, facing challenges and turning ideas into solutions.", about3: "I started as a programming technician, went through an internship in banking cybersecurity, and today I'm training as a Java Full Stack developer and Software Engineering student. I'm looking for an opportunity as a Java Full Stack developer where I can contribute my automation experience and keep growing within a team.",
  about2: "During my internship at Banco de Bogotá I built solutions for cybersecurity alert management, incident tracking and initiative control. I stand out for my logical thinking, attention to detail and self-directed learning.",
  s1: "less time logging critical alerts", s2: "better incident traceability in the SOC", s3: "initiatives tracked in one place", s4: "fewer manual tasks with Power Automate",
  sNote: "Approximate figures from my 2025 internship at Banco de Bogotá.",
  pathTitle: "My CV and path", blog: "Blog", blogTitle: "Blog", blogNote: "I share what I learn from my internship and my training.", skills: "Skills", soft: "Soft skills", sk1: "Logical thinking", sk2: "Attention to detail", sk3: "Self-directed learning", sk4: "Continuous improvement", langs: "Languages", l1: "Spanish (native)", l2: "English (A2)", e1a: "Strengthening the engineering foundations to grow as a developer.", e2a: "Where I practice Java and web development by building projects like Trendy Shop.", e3a: "I applied programming, testing and documentation in my internship at Banco de Bogotá.", fb: "Do you have feedback on my portfolio? It helps me improve.", fbLink: "Send feedback", exp: "Experience", edu: "Education",
  job: "Intern", jobDate: "Jan 2025 – Nov 2025",
  j1: "Internal Power Apps tools to report phishing and data-leak alerts.", j2: "Incident ticketing app for the cybersecurity SOC and an initiative tracker for Digital Cyberdefense and Anti-fraud.", j3: "Power Automate automations, testing, technical documentation and quality control.",
  e1: "Software Engineering", e1d: "Nov 2026 – present · Semester I", e2: "Java Full Stack Bootcamp", e2d: "Sep 2026 – present", e3: "Software Programming Technician", e3d: "Feb 2026",
  techTitle: "Technologies I use", techNote: "Ordered in layers, from language to automation.",
  projTitle: "My project library", projNote: "Each volume is a project: pick one or let them turn by themselves.",
  contactTitle: "Let's build something together", contactP: "Have an opening, an idea or a project? I'd love to hear about it.", write: "Message me on WhatsApp", email: "Email",
  footer: "Java Full Stack Developer",
};

// Aplica un idioma a todos los textos marcados con data-i18n.
// Recibe "es" o "en" y avisa con el evento langchange.
function apply(lang, button) {
  document.documentElement.lang = lang; // Actualiza el idioma del documento
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = lang === "en" ? en[el.dataset.i18n] : el.dataset.es; }); // Cambia cada texto
  document.querySelectorAll("[data-wa]").forEach((a) => (a.href = `https://wa.me/573202018616?text=${encodeURIComponent(wa[lang])}`)); // Enlace de WhatsApp con mensaje en el idioma activo
  button.textContent = lang === "en" ? "ES" : "EN"; // El botón ofrece el idioma contrario
  try { localStorage.setItem("lang", lang); } catch {} // Recuerda la elección
  dispatchEvent(new Event("langchange")); // Avisa a los módulos con textos dinámicos
}

// Guarda el español original de cada texto y activa el botón de idioma.
// Recibe el botón que alterna ES/EN.
export function initI18n(button) {
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.dataset.es = el.textContent)); // Respalda el español
  button.addEventListener("click", () => apply(document.documentElement.lang === "en" ? "es" : "en", button)); // Alterna al hacer clic
  let saved = "es"; // Idioma por defecto
  try { saved = localStorage.getItem("lang") || "es"; } catch {} // Lee el idioma guardado
  apply(saved, button); // Aplica el idioma inicial
}
