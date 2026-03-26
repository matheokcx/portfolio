import type {Skill} from "../../../../types";
import styles from "./skill-card.module.css";

type SkillCardProps = {
    skill: Skill;
};

const SkillCard = ({skill}: SkillCardProps) => {
    return (
        <div className={styles.skillCard}>
            {skill.icon && (typeof skill.icon === "string" ? (
                <img src={skill.icon}
                     alt={`${skill.name} icon`}
                     className={styles.icon}
                />
            ) : skill.icon)}
            <p className={styles.name}>{skill.name}</p>
        </div>
    );
};

export default SkillCard;
