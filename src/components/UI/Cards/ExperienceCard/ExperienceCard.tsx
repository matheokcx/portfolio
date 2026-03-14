import type {Experience} from "../../../../types";
import styles from "./experience-card.module.css";

type ExperienceCardProps = {
    experience: Experience;
};

const ExperienceCard = ({experience}: ExperienceCardProps) => {
    return (
        <div className={styles.experienceCard}>
            <h3>{experience.job}</h3>
            <p>
                <span>{experience.company}</span>
                <span>
                    {experience.startDate.toISOString().split("T")[0]}
                    {" to "}
                    {experience.endDate.toISOString().split("T")[0]}
                </span>
            </p>
        </div>
    );
};

export default ExperienceCard;
