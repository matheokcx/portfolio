import styles from "./projects-section.module.css";
import type {Project} from "../../../types";
import {getProjects} from "../../../services/informationService.ts";
import ProjectCard from "../../UI/Cards/ProjectCard/ProjectCard.tsx";

const ProjectsSection = () => {
    const projects: Project[] = getProjects();

    return (
        <section className={styles.projectsSection} id="projects">
            <h2>Mes projets</h2>
            <div className={styles.projects}>
                {projects.map((project: Project) => <ProjectCard key={project.name} project={project}/>)}
            </div>
        </section>
    );
};

export default ProjectsSection;
