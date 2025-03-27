import ProjectCard from "../cards/ProjectCard";
import { datas } from "../../utils/datas";

// ==============================================


export default function ProjectsSection () {
return (
    <section className="w-full mb-12 p-20 pb-40 grid gap-20" id="projets">
        <h2 className="text-3xl text-center font-bold">📚 Projects</h2>
        <div className="w-full flex flex-wrap justify-center gap-16">
            {datas.projects.map((project, index) => (
            <ProjectCard key={index} image={project.image} name={project.title} link={project.link} />
            ))}
        </div>
    </section>
);
}
  