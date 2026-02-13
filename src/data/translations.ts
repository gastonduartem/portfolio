import { Locale, PortfolioCopy } from "@/types/site";

export const translations: Record<Locale, PortfolioCopy> = {
  es: {
    loader: {
      text: "Initializing portfolio...",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      projects: "Proyectos",
      contact: "Contacto",
    },
    controls: {
      dark: "Oscuro",
      light: "Claro",
      language: "Idioma",
    },
    hero: {
      badge: "PORTAFOLIO FULL STACK | REMOTE READY",
      description:
        "Desarrollo soluciones de software productivas, enfocadas en lógica de negocio, escalabilidad y resultados reales.",
      roleLine: "Analista de Desarrollo de Software",
      profileCardText:
        "Full stack developer con foco backend, arquitectura práctica e implementación orientada al negocio.",
      avatarPlaceholder: "Placeholder de foto",
      projectsCta: "Ver Proyectos",
      cvCta: "Descargar CV",
      cvHint:
        "CVs esperados en /public/cv/gaston-duarte-cv-es.pdf y /public/cv/gaston-duarte-cv-en.pdf",
    },
    about: {
      kicker: "Perfil",
      title: "Sobre mí",
      summary:
        "Soy desarrollador de software enfocado en crear soluciones prácticas y escalables para problemas reales de negocio. Trabajo en desarrollo de sistemas internos, reglas de negocio y optimización de bases de datos, con una mirada estructurada desde Análisis de Sistemas y ejecución full stack de punta a punta.",
      full: "Actualmente trabajo como Analista de Desarrollo de Software, donde diseño y mejoro sistemas internos, implemento reglas de negocio, optimizo procesos en bases de datos y traduzco necesidades operativas en soluciones técnicas confiables. He desarrollado sistemas tipo ERP, plataformas de gestión de torneos, aplicaciones e-commerce full-stack, microservicios de logging distribuido y otras soluciones productivas pensadas para entornos reales. Me encuentro en constante aprendizaje, desafiando mis propios límites y buscando crecer para liderar proyectos de mayor impacto.",
      readMore: "Leer más",
      showLess: "Mostrar menos",
    },
    skills: {
      kicker: "Stack",
      title: "Tecnologías",
      description:
        "Herramientas que uso para construir soluciones completas, mantenibles y listas para producción.",
    },
    projects: {
      kicker: "Trabajo",
      title: "Proyectos Destacados",
      description:
        "Seis proyectos seleccionados para mostrar capacidad técnica full stack y foco en sistemas reales.",
      openProject: "Ir al proyecto",
      missingProjectUrl: "Completar URL del proyecto (repo o deploy)",
    },
    contact: {
      kicker: "Red",
      title: "Contacto",
      description:
        "Abierto a oportunidades remotas y colaboraciones donde pueda aportar valor real.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    footer:
      "Gaston Duarte | Full Stack Developer | En construcción constante.",
  },
  en: {
    loader: {
      text: "Initializing portfolio...",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    controls: {
      dark: "Dark",
      light: "Light",
      language: "Language",
    },
    hero: {
      badge: "FULL STACK PORTFOLIO | REMOTE READY",
      description:
        "I build production-minded software focused on business logic, scalability, and practical outcomes.",
      roleLine: "Software Development Analyst",
      profileCardText:
        "Full stack developer with strong backend focus, practical architecture, and business-oriented implementation.",
      avatarPlaceholder: "Photo placeholder",
      projectsCta: "View Projects",
      cvCta: "Download CV",
      cvHint:
        "Expected CV files at /public/cv/gaston-duarte-cv-es.pdf and /public/cv/gaston-duarte-cv-en.pdf",
    },
    about: {
      kicker: "Profile",
      title: "About Me",
      summary:
        "I am a software developer focused on practical and scalable solutions for real business problems. I work on internal systems, business rules, and database optimization with structured systems thinking and end-to-end full stack execution.",
      full: "I currently work as a Software Development Analyst, where I design and improve internal systems, implement business logic, optimize database processes, and translate operational needs into reliable technical solutions. I have built ERP-style systems, tournament management platforms, full-stack e-commerce applications, distributed logging microservices, and other production-ready solutions designed for real use. I am constantly learning, pushing my limits, and aiming to grow into an engineer capable of leading high-impact projects.",
      readMore: "Read more",
      showLess: "Show less",
    },
    skills: {
      kicker: "Stack",
      title: "Technologies",
      description:
        "Tools I use to build complete, maintainable, production-ready software.",
    },
    projects: {
      kicker: "Work",
      title: "Featured Projects",
      description:
        "Six selected projects that show full stack capability and a systems-first mindset.",
      openProject: "Go to project",
      missingProjectUrl: "Add project URL (repo or deployed app)",
    },
    contact: {
      kicker: "Network",
      title: "Contact",
      description:
        "Open to remote opportunities and collaborations where I can create real value.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    footer: "Gaston Duarte | Full Stack Developer | Building with intent.",
  },
};
