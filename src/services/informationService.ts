import type {Experience, Project, Skill} from "../types";

export const getSkills = (): Skill[] => {
    return [
        {
            name: "React",
            color: "#61DAFB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
            name: "TypeScript",
            color: "#3178C6",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
            name: "Symfony",
            color: "#000000",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
        },
        {
            name: "PHP",
            color: "#777BB4",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
            name: "PostgreSQL",
            color: "#4169E1",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "Docker",
            color: "#2496ED",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
    ];
};

export const getProjects = (): Project[] => {
    return [
        {
            name: "Kraft",
            description: "Description du projet kraft",
            images: ["/projects/kraft/Logo.svg"],
            tools: [],
            link: "https://github.com/matheokcx/kraft.git",
        },
        {
            name: "Fit-track",
            description: "Description du projet fit-track",
            images: ["/projects/fit-track/Logo.webp"],
            tools: [],
            link: "https://github.com/matheokcx/fit-track.git",
        },
        {
            name: "Renta-car-lens",
            description: "Description du projet renta-car-lens",
            images: ["/projects/fit-track/Logo.webp"],
            tools: [],
            link: "https://github.com/matheokcx/renta-car-lens/tree/main",
        }
    ];
};

export const getExperiences = (): Experience[] => {
    return [
        {
            job: "Développeur FullStack",
            startDate: new Date("02-03-2025"),
            endDate: new Date("08-31-2026"),
            company: "Primever"
        },
        {
            job: "Caissier polyvalent",
            startDate: new Date("10-26-2024"),
            endDate: new Date("10-26-2024"),
            company: "Intérim Lens"
        }
    ];
};
