import {useTranslation} from "react-i18next";
import styles from "./experiences-section.module.css";
import type {Experience} from "../../../types";
import {getExperiences} from "../../../services/informationService.ts";
import ExperienceCard from "../../UI/Cards/ExperienceCard/ExperienceCard.tsx";

const ExperiencesSection = () => {
    const {t, i18n} = useTranslation();
    const experiences: Experience[] = getExperiences(t);

    return (
        <section className={styles.experiencesSection}>
            <h2>{t("experiences.title")}</h2>
            <div className={styles.experiences}>
                {experiences.map((experience: Experience) => (
                    <ExperienceCard key={experience.job}
                                    experience={experience}
                                    locale={i18n.language}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperiencesSection;
