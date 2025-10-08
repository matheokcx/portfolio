import styles from "./SkillCard.module.css"

// ==============================================


type SkillCardProps = {
    icon: any,
    name: string
};

const SkillCard = ({ icon, name }: SkillCardProps) => {
    return (
        <div className={styles.skillCard}>
            <img src={icon} alt={name} className="w-12 h-12" />
            <h3 className="text-black text-lg font-semibold font-semibold">{name}</h3>
        </div>
    );
};

export default SkillCard;
