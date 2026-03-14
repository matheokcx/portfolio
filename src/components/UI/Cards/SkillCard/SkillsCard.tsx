import type {Skill} from "../../../../types";
import styles from "./skill-card.module.css";

type SkillCardProps = {
    skill: Skill;
};

const SkillCard = ({skill}: SkillCardProps) => {
    return (
        <div className={styles.skillCard} style={{borderColor: skill.color ?? "hsla(0, 0%, 20%, 40%)"}}>
            {skill.icon && (typeof skill.icon === "string" ? (
                <img src={skill.icon}
                     alt={`${skill.name} icon`}
                />
            ) : skill.icon)}
            <p>{skill.name}</p>
        </div>
    );
};

export default SkillCard;
