import type {JSX} from "react";

export type SkillCategory = "language" | "library" | "framework" | "tool";

export type Skill = {
    name: string;
    color?: string;
    icon?: string | JSX.Element;
    category?: SkillCategory;
};

export type Project = {
    name: string;
    description: string;
    images: string[];
    tools: Skill[];
    link: string;
};

export type Experience = {
    job: string;
    startDate: Date;
    endDate: Date;
    company: string;
};
