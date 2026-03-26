import type {Experience} from "../../../../types";
import styles from "./experience-card.module.css";

type ExperienceCardProps = {
    experience: Experience;
};

const formatDate = (date: Date): string => {
    return date.toLocaleDateString("fr-FR", {month: "long", year: "numeric"});
};

const ExperienceCard = ({experience}: ExperienceCardProps) => {
    const isSameDate = experience.startDate.getTime() === experience.endDate.getTime();

    return (
        <div className={styles.experienceCard}>
            <div className={styles.header}>
                <h3>{experience.job}</h3>
                <span className={styles.company}>{experience.company}</span>
            </div>
            <p className={styles.dates}>
                {isSameDate
                    ? formatDate(experience.startDate)
                    : `${formatDate(experience.startDate)} — ${formatDate(experience.endDate)}`
                }
            </p>
        </div>
    );
};

export default ExperienceCard;
