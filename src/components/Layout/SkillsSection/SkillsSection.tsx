import {useState} from "react";
import {useTranslation} from "react-i18next";
import styles from "./skills-section.module.css";
import type {Skill, SkillCategory} from "../../../types";
import {getSkills} from "../../../services/informationService.ts";
import SkillCard from "../../UI/Cards/SkillCard/SkillsCard.tsx";

const SkillsSection = () => {
    const {t} = useTranslation();
    const skills: Skill[] = getSkills();
    const [activeFilter, setActiveFilter] = useState<SkillCategory | "all">("all");

    const filters: { label: string; value: SkillCategory | "all" }[] = [
        {label: t("skills.filterAll"), value: "all"},
        {label: t("skills.filterLanguages"), value: "language"},
        {label: t("skills.filterLibraries"), value: "library"},
        {label: t("skills.filterFrameworks"), value: "framework"},
        {label: t("skills.filterTools"), value: "tool"},
    ];

    const filteredSkills = activeFilter === "all"
        ? skills
        : skills.filter((s) => s.category === activeFilter);

    return (
        <section className={styles.skillsSection}>
            <h2>{t("skills.title")}</h2>
            <div className={styles.filters}>
                {filters.map((filter) => (
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
