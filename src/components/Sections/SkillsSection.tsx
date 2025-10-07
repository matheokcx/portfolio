import { useInView } from "react-intersection-observer";
import { DataType, getDatas } from "../../services/getDatas.ts";
import SkillCard from "../Cards/SkillCard";
import { useState } from "react";
import { Codesandbox, FileCode2, PencilRuler, SquareLibrary } from "lucide-react";
import { Skill } from "../../types";

// ==============================================


type SkillsSectionProps = {
    setActiveSection: (newValue: string) => void
};

const SkillsSection = ({ setActiveSection }: SkillsSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const datas: DataType = getDatas();

  const [categoryFilter, setCategoryFilter] = useState<string>('languages');

  if (inView) setActiveSection("skills");

  return (
    <section ref={ref} className="w-full mb-12 lg:p-44 grid gap-12" id="skills">
      <h2 className="text-center lg:text-left text-3xl font-bold">Compétences</h2>
      <hr className="w-1/4 border-2 mb-10 hidden lg:inline" />
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row items-start lg:items-center pl-10 lg:pl-0 gap-6">
        <button onClick={() => setCategoryFilter("languages")} className={`w-fit px-4 py-2 flex justify-around items-center gap-2 rounded-xl border-2 border-white ${categoryFilter === "languages" ? "bg-white" : "#ffffff00"} ${categoryFilter === "languages" ? "text-black" : "text-white"} font-bold hover:cursor-pointer`}><FileCode2 className={`w-6 h-6 ${categoryFilter === "languages" ? "text-black" : "text-white"}`} /> Langages</button>
        <button onClick={() => setCategoryFilter("frameworks")} className={`w-fit px-4 py-2 flex justify-around items-center gap-2 rounded-xl border-2 border-white ${categoryFilter === "frameworks" ? "bg-white" : "#ffffff00"} ${categoryFilter === "frameworks" ? "text-black" : "text-white"} font-bold hover:cursor-pointer`}><Codesandbox className={`w-6 h-6 ${categoryFilter === "frameworks" ? "text-black" : "text-white"}`} /> Frameworks</button>
        <button onClick={() => setCategoryFilter("libraries")} className={`w-fit px-4 py-2 flex justify-around items-center gap-2 rounded-xl border-2 border-white ${categoryFilter === "libraries" ? "bg-white" : "#ffffff00"} ${categoryFilter === "libraries" ? "text-black" : "text-white"} font-bold hover:cursor-pointer`}><SquareLibrary className={`w-6 h-6 ${categoryFilter === "libraries" ? "text-black" : "text-white"}`} /> Librairies</button>
        <button onClick={() => setCategoryFilter("tools")} className={`w-fit px-4 py-2 flex justify-around items-center gap-2 rounded-xl border-2 border-white ${categoryFilter === "tools" ? "bg-white" : "#ffffff00"} ${categoryFilter === "tools" ? "text-black" : "text-white"} font-bold hover:cursor-pointer`}><PencilRuler className={`w-6 h-6 ${categoryFilter === "tools" ? "text-black" : "text-white"}`} /> Outils</button>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap items-center justify-center lg:justify-start gap-10">
        {datas.skills.map((skill: Skill, index: number) => {
          return skill.category === categoryFilter ? <SkillCard key={index} name={skill.name} icon={skill.icon} /> : null
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
