import type {Project, Skill} from "../../../../types";
import styles from "./project-card.module.css";
import Chip from "../../Chip/Chip.tsx";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <div className={styles.projectCard}>
            <img src={project.images[0]} alt={`${project.name} project`} />
            <h3>{project.name}</h3>
            <p>{project.description.split("\n")[0]}</p>
            <div className={styles.usedSkills}>
                {project.tools.map((tool: Skill) => (
                    <Chip key={tool.name}
                          text={tool.name}
                          icon={(tool.icon && typeof tool.icon !== "string") ? tool.icon : undefined}
                          color={tool.color ?? undefined}
                    />
                ))}
            </div>
            <a href={project.link} target="_blank"></a>
        </div>
    );
};

export default ProjectCard;
