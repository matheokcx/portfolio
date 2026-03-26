import type {Experience, Project, Skill} from "../types";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const getSkills = (): Skill[] => {
    return [
        // Langages
        {
            name: "TypeScript",
            color: "#3178C6",
            icon: `${DEVICON_BASE}/typescript/typescript-original.svg`,
            category: "language",
        },
        {
            name: "PHP",
            color: "#777BB4",
            icon: `${DEVICON_BASE}/php/php-original.svg`,
            category: "language",
        },
        {
            name: "Python",
            color: "#3776AB",
            icon: `${DEVICON_BASE}/python/python-original.svg`,
            category: "language",
        },
        {
            name: "Java",
            color: "#ED8B00",
            icon: `${DEVICON_BASE}/java/java-original.svg`,
            category: "language",
        },
        {
            name: "SQL",
            color: "#4169E1",
            icon: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
            category: "language",
        },
        {
            name: "HTML",
            color: "#E34F26",
            icon: `${DEVICON_BASE}/html5/html5-original.svg`,
            category: "language",
        },
        {
            name: "CSS",
            color: "#1572B6",
            icon: `${DEVICON_BASE}/css3/css3-original.svg`,
            category: "language",
        },
        {
            name: "Bash",
            color: "#4EAA25",
            icon: `${DEVICON_BASE}/bash/bash-original.svg`,
            category: "language",
        },

        // Librairies
        {
            name: "React",
            color: "#61DAFB",
            icon: `${DEVICON_BASE}/react/react-original.svg`,
            category: "library",
        },
        {
            name: "Redux",
            color: "#764ABC",
            icon: `${DEVICON_BASE}/redux/redux-original.svg`,
            category: "library",
        },
        {
            name: "Prisma",
            color: "#2D3748",
            icon: `${DEVICON_BASE}/prisma/prisma-original.svg`,
            category: "library",
        },

        // Frameworks
        {
            name: "Next.js",
            color: "#000000",
            icon: `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
            category: "framework",
        },
        {
            name: "Symfony",
            color: "#000000",
            icon: `${DEVICON_BASE}/symfony/symfony-original.svg`,
            category: "framework",
        },
        {
            name: "Laravel",
            color: "#FF2D20",
            icon: `${DEVICON_BASE}/laravel/laravel-original.svg`,
            category: "framework",
        },
        {
            name: "TailwindCSS",
            color: "#06B6D4",
            icon: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
            category: "framework",
        },
        {
            name: "AdonisJS",
            color: "#220052",
            icon: `${DEVICON_BASE}/adonisjs/adonisjs-original.svg`,
            category: "framework",
        },
        {
            name: "Angular",
            color: "#DD0031",
            icon: `${DEVICON_BASE}/angular/angular-original.svg`,
            category: "framework",
        },
        {
            name: "Flask",
            color: "#000000",
            icon: `${DEVICON_BASE}/flask/flask-original.svg`,
            category: "framework",
        },

        // Outils
        {
            name: "Docker",
            color: "#2496ED",
            icon: `${DEVICON_BASE}/docker/docker-original.svg`,
            category: "tool",
        },
        {
            name: "Git",
            color: "#F05032",
            icon: `${DEVICON_BASE}/git/git-original.svg`,
            category: "tool",
        },
        {
            name: "Figma",
            color: "#F24E1E",
            icon: `${DEVICON_BASE}/figma/figma-original.svg`,
            category: "tool",
        },
        {
            name: "Nomad",
            color: "#00CA8E",
            icon: `${DEVICON_BASE}/nomad/nomad-original.svg`,
            category: "tool",
        },
    ];
};

export const getProjects = (): Project[] => {
    return [
        {
            name: "Kraft",
            description: "Application web complète de gestion de clients et projets (CRM like).",
            images: ["/projects/kraft/Logo.svg"],
            tools: [
                {name: "Next.js", color: "#000000"},
                {name: "TypeScript", color: "#3178C6"},
                {name: "Prisma", color: "#2D3748"},
            ],
            link: "https://github.com/matheokcx/crm-app.git",
        },
        {
            name: "RentaCarLens",
            description: "Application client, serveur API et app mobile pour la location de véhicules.",
            images: ["/projects/fit-track/Logo.webp"],
            tools: [
                {name: "Angular", color: "#DD0031"},
                {name: "Laravel", color: "#FF2D20"},
                {name: "Docker", color: "#2496ED"},
            ],
            link: "https://github.com/renta-car-lens/client",
        },
        {
            name: "Fit-track",
            description: "Application mobile de suivi de séances de sport et de nutrition.",
            images: ["/projects/fit-track/Logo.webp"],
            tools: [
                {name: "Ionic", color: "#3880FF"},
            ],
            link: "https://github.com/matheokcx/fit-track",
        },
    ];
};

export const getExperiences = (): Experience[] => {
    return [
        {
            job: "Alternance développeur FullStack",
            startDate: new Date("2025-02-03"),
            endDate: new Date("2026-08-31"),
            company: "Primever Service"
        },
        {
            job: "Caissier restauration événementiel",
            startDate: new Date("2025-08-03"),
            endDate: new Date("2025-12-14"),
            company: "Agence intérim"
        }
    ];
};
