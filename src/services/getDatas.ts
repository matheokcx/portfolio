import { Projects, Skills } from "../types";

// ==============================================


export type DataType = {
    skills: Skills,
    projects: Projects,
};

export const getDatas = (): DataType => {
    return {
        skills: [
            { name: 'Angular', icon: `${import.meta.env.BASE_URL}competences/frameworks/angular.svg`, category: 'frameworks' },
            { name: 'Flask', icon: `${import.meta.env.BASE_URL}competences/frameworks/flask.svg`, category: 'frameworks' },
            { name: 'Laravel', icon: `${import.meta.env.BASE_URL}competences/frameworks/laravel.svg`, category: 'frameworks' },
            { name: 'NextJS', icon: `${import.meta.env.BASE_URL}competences/frameworks/nextdotjs.svg`, category: 'frameworks' },
            { name: 'Symfony', icon: `${import.meta.env.BASE_URL}competences/frameworks/symfony.svg`, category: 'frameworks' },
            { name: 'TailwindCSS', icon: `${import.meta.env.BASE_URL}competences/frameworks/tailwindcss.svg`, category: 'frameworks' },
            { name: 'CSS', icon: `${import.meta.env.BASE_URL}competences/languages/css.svg`, category: 'languages' },
            { name: 'HTML', icon: `${import.meta.env.BASE_URL}competences/languages/html5.svg`, category: 'languages' },
            { name: 'PHP', icon: `${import.meta.env.BASE_URL}competences/languages/php.svg`, category: 'languages' },
            { name: 'Python', icon: `${import.meta.env.BASE_URL}competences/languages/python.svg`, category: 'languages' },
            { name: 'TypeScript', icon: `${import.meta.env.BASE_URL}competences/languages/typescript.svg`, category: 'languages' },
            { name: 'Reactjs', icon: `${import.meta.env.BASE_URL}competences/librairies/react.svg`, category: 'libraries' },
            { name: 'Redux', icon: `${import.meta.env.BASE_URL}competences/librairies/redux.svg`, category: 'libraries' },
            { name: 'Docker', icon: `${import.meta.env.BASE_URL}competences/tools/docker.svg`, category: 'tools' },
            { name: 'Figma', icon: `${import.meta.env.BASE_URL}competences/tools/figma.svg`, category: 'tools' },
            { name: 'Git', icon: `${import.meta.env.BASE_URL}competences/tools/git.svg`, category: 'tools' },
            { name: 'Jetbrains', icon: `${import.meta.env.BASE_URL}competences/tools/jetbrains.svg`, category: 'tools' },
            { name: 'PostgreSQL', icon: `${import.meta.env.BASE_URL}competences/tools/postgresql.svg`, category: 'tools' },
            { name: 'Postman', icon: `${import.meta.env.BASE_URL}competences/tools/postman.svg`, category: 'tools' },
            { name: 'Prisma', icon: `${import.meta.env.BASE_URL}competences/tools/prisma.svg`, category: 'tools' },
        ],
        projects: [
            {
                title: "Fit-track",
                image: `${import.meta.env.BASE_URL}projets/fitTrack.webp`,
                link: "https://github.com/matheokcx/fit-track",
                stack: ["Ionic", "Angular", "TypeScript"],
            },
            {
                title: "LaTierra",
                image: `${import.meta.env.BASE_URL}projets/latierra.png`,
                link: "https://github.com/matheokcx/marathon-web.git",
                stack: ["Laravel", "Vite"],
            },
            {
                title: "Chatting App",
                image: `${import.meta.env.BASE_URL}projets/chattingapp.png`,
                link: "https://github.com/matheokcx/chatting_app",
                stack: ["JavaScript", "ReactJS"],
            },
            {
                title: "Just Prime",
                image: `${import.meta.env.BASE_URL}projets/justprime.jpg`,
                link: "https://github.com/matheokcx/just-prime",
                stack: ["Flask", "Python", "Sqlite"],
            },
        ]
    };
};
