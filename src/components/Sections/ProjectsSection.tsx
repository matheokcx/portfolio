import ProjectCard from "../Cards/ProjectCard";
import { DataType, getDatas } from "../../services/getDatas.ts";
import { useInView } from "react-intersection-observer";
import { Project } from "../../types";

// ==============================================


type ProjectsSectionProps = {
    setActiveSection: (newValue: string) => void
};

const ProjectsSection = ({ setActiveSection }: ProjectsSectionProps) => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });
    const datas: DataType = getDatas();

    if (inView) setActiveSection("projects");

    return (
        <section ref={ref} className="w-full mb-12 p-10 lg:p-20 pb-40 grid gap-20" id="projects">
            <h2 className="text-3xl text-center font-bold">📚 Projets</h2>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-16">
                {datas.projects.map((project: Project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
