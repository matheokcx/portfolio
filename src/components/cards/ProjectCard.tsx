import { Link } from "lucide-react";
import ToolTag from "../ToolTag";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="w-full lg:w-1/4 flex flex-col items-center gap-4 bg-white rounded-3xl shadow-lg p-4 duration-1500 hover:-translate-y-4">
      <img src={project.image} alt={project.name} className="w-full h-52 rounded-2xl" />
      <h3 className="mt-4 text-xl text-black font-bold text-center">
        {project.title}
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {project.stack.map((name: string) => <ToolTag text={name} />)}
      </div>
      <a href={project.link} target="_blank" className="w-full flex justify-end mt-6" ><Link className="text-black text-right" /></a>
    </article>
  );
}
