import { ProjectItem } from "@/types/site";

export const projects: ProjectItem[] = [
  {
    id: "small-business-management-system",
    title: {
      es: "Sistema de Gestión PyME",
      en: "Small Business Management System",
    },
    description: {
      es: "Sistema ERP-style para operaciones internas, gestión de procesos y reglas de negocio en entornos reales.",
      en: "ERP-style internal operations system with strong business logic and process management for real environments.",
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    projectUrl: null,
    buttonLabel: {
      es: "En desarrollo",
      en: "In development",
    },
  },
  {
    id: "intercollegiate-sports-management-platform",
    title: {
      es: "Plataforma de Gestión de Intercolegiales",
      en: "Intercollegiate Sports Management Platform",
    },
    description: {
      es: "Plataforma para administrar torneos, inscripciones y resultados con foco en flujo operativo y datos confiables.",
      en: "Platform to manage tournaments, registrations, and results focused on operational workflow and reliable data.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    projectUrl: null,
    buttonLabel: {
      es: "En desarrollo",
      en: "In development",
    },
  },
  {
    id: "truco-tournament-platform",
    title: {
      es: "Plataforma Torneo de Truco",
      en: "Truco Tournament Platform",
    },
    description: {
      es: "Aplicación para organización de partidas, llaves y seguimiento de avance con experiencia simple para usuarios finales.",
      en: "Tournament app for match scheduling, brackets, and progression tracking with a straightforward user experience.",
    },
    stack: ["JavaScript", "Node.js", "React", "CSS"],
    projectUrl: "https://torneodetruco.vercel.app/",
  },
  {
    id: "full-stack-ecommerce-platform",
    title: {
      es: "Plataforma E-commerce Full-Stack",
      en: "Full-Stack E-commerce Platform",
    },
    description: {
      es: "E-commerce de punta a punta con catálogo, gestión de pedidos y arquitectura preparada para escalar.",
      en: "End-to-end e-commerce application with catalog, order workflows, and architecture designed to scale.",
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    projectUrl: "https://github.com/gastonduartem/Challenge-1",
    buttonLabel: {
      es: "Ir al repositorio",
      en: "Go to repository",
    },
  },
  {
    id: "distributed-logging-system",
    title: {
      es: "Sistema de Logging Distribuido",
      en: "Distributed Logging System",
    },
    description: {
      es: "Microservicios para trazabilidad de eventos, centralización de logs y monitoreo técnico en sistemas distribuidos.",
      en: "Microservices for event tracing, centralized logs, and technical monitoring in distributed systems.",
    },
    stack: ["Python", "Node.js", "PostgreSQL", "Docker"],
    projectUrl: "https://github.com/gastonduartem/Logs",
    buttonLabel: {
      es: "Ir al repositorio",
      en: "Go to repository",
    },
  },
  {
    id: "microservices-architecture-platform",
    title: {
      es: "Plataforma de Arquitectura de Microservicios",
      en: "Microservices Architecture Platform",
    },
    description: {
      es: "Implementación orientada a servicios desacoplados con enfoque en comunicación, resiliencia y mantenibilidad.",
      en: "Microservice-oriented implementation focused on service communication, resilience, and maintainability.",
    },
    stack: ["Python", "Node.js", "PostgreSQL", "REST"],
    projectUrl: "https://github.com/gastonduartem/Microservicios",
    buttonLabel: {
      es: "Ir al repositorio",
      en: "Go to repository",
    },
  },
];
