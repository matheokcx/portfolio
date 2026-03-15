import styles from "./experiences-section.module.css";
import type {Experience} from "../../../types";
import {getExperiences} from "../../../services/informationService.ts";
import ExperienceCard from "../../UI/Cards/ExperienceCard/ExperienceCard.tsx";

const ExperiencesSection = () => {
    const experiences: Experience[] = getExperiences();

    return (
        <section className={styles.experiencesSection}>
            <h2>Mes expériences professionnelles</h2>
            <div className={styles.experiences}>
                {experiences.map((experience: Experience) => (
                    <ExperienceCard key={experience.job}
                                    experience={experience}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperiencesSection;
