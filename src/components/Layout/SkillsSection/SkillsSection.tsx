import styles from "./skills-section.module.css";
import type {Skill} from "../../../types";
import {getSkills} from "../../../services/informationService.ts";
import SkillCard from "../../UI/Cards/SkillCard/SkillsCard.tsx";

const SkillsSection = () => {
    const skills: Skill[] = getSkills();

    return (
        <section className={styles.skillsSection}>
            <h2></h2>
            <div className={styles.skills}>
                {skills.map((skill: Skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
        </section>
    );
};

export default SkillsSection;
