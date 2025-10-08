import { useInView } from "react-intersection-observer";
import { DataType, getDatas } from "../../services/getDatas.ts";
import SkillCard from "../Cards/SkillCard";
import { useState } from "react";
import { Codesandbox, FileCode2, PencilRuler, SquareLibrary } from "lucide-react";
import { Skill } from "../../types";
import "./SkillsSection.module.css";

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
        <button onClick={() => setCategoryFilter("languages")}
                style={{"background": categoryFilter === "languages" ? "hsl(0 0% 0%)" : "hsl(0 0% 100%)", "color": categoryFilter === "languages" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)"}}
        >
            <FileCode2 width={16} /> Langages
        </button>
        <button onClick={() => setCategoryFilter("frameworks")}
                style={{"background": categoryFilter === "frameworks" ? "hsl(0 0% 0%)" : "hsl(0 0% 100%)", "color": categoryFilter === "frameworks" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)"}}
        >
            <Codesandbox width={16} /> Frameworks
        </button>
        <button onClick={() => setCategoryFilter("libraries")}
                style={{"background": categoryFilter === "libraries" ? "hsl(0 0% 0%)" : "hsl(0 0% 100%)", "color": categoryFilter === "libraries" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)"}}
        >
            <SquareLibrary width={16} /> Librairies
        </button>
        <button onClick={() => setCategoryFilter("tools")}
                style={{"background": categoryFilter === "tools" ? "hsl(0 0% 0%)" : "hsl(0 0% 100%)", "color": categoryFilter === "tools" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)"}}
        >
            <PencilRuler width={16} /> Outils
        </button>
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
