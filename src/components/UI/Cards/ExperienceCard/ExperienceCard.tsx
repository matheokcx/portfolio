import type {Experience} from "../../../../types";
import styles from "./experience-card.module.css";

type ExperienceCardProps = {
    experience: Experience;
    locale?: string;
};

const formatDate = (date: Date, locale: string): string => {
    const loc = locale === "fr" ? "fr-FR" : "en-US";
    return date.toLocaleDateString(loc, {month: "long", year: "numeric"});
};

const ExperienceCard = ({experience, locale = "fr"}: ExperienceCardProps) => {
    const isSameDate = experience.startDate.getTime() === experience.endDate.getTime();

    return (
        <div className={styles.experienceCard}>
            <div className={styles.header}>
                <h3>{experience.job}</h3>
                <span className={styles.company}>{experience.company}</span>
            </div>
            <p className={styles.dates}>
                {isSameDate
                    ? formatDate(experience.startDate, locale)
                    : `${formatDate(experience.startDate, locale)} — ${formatDate(experience.endDate, locale)}`
                }
            </p>
        </div>
    );
};

export default ExperienceCard;
