import ProjectCard from "../cards/ProjectCard";
import { datas } from "../../utils/datas.ts";
import { Dispatch } from "react";
import { useInView } from "react-intersection-observer";

// ==============================================


export default function ProjectsSection({ setActiveSection }: { setActiveSection: Dispatch<React.SetStateAction<string>> }) {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    if (inView) setActiveSection("projects");

    return (
        <section ref={ref} className="w-full mb-12 p-10 lg:p-20 pb-40 grid gap-20" id="projects">
            <h2 className="text-3xl text-center font-bold">📚 Projets</h2>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-16">
                {datas.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
