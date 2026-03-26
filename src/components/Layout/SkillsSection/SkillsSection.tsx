import {useState} from "react";
import styles from "./skills-section.module.css";
import type {Skill, SkillCategory} from "../../../types";
import {getSkills} from "../../../services/informationService.ts";
import SkillCard from "../../UI/Cards/SkillCard/SkillsCard.tsx";

const FILTERS: { label: string; value: SkillCategory | "all" }[] = [
    {label: "Tous", value: "all"},
    {label: "Langages", value: "language"},
    {label: "Librairies", value: "library"},
    {label: "Frameworks", value: "framework"},
    {label: "Outils", value: "tool"},
];

const SkillsSection = () => {
    const skills: Skill[] = getSkills();
    const [activeFilter, setActiveFilter] = useState<SkillCategory | "all">("all");

    const filteredSkills = activeFilter === "all"
        ? skills
        : skills.filter((s) => s.category === activeFilter);

    return (
        <section className={styles.skillsSection}>
            <h2>Mes competences</h2>
            <div className={styles.filters}>
                {FILTERS.map((filter) => (
                    <button
                        key={filter.value}
                        className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.filterBtnActive : ""}`}
                        onClick={() => setActiveFilter(filter.value)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
            <div className={styles.skills}>
                {filteredSkills.map((skill: Skill) => <SkillCard key={skill.name} skill={skill}/>)}
            </div>
        </section>
    );
};

export default SkillsSection;
