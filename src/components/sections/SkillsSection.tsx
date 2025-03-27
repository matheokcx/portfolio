import SkillCard from "../cards/SkillCard";
import { datas } from "../../utils/datas";
import { useState } from "react";
import FilterButton from "../buttons/FilterButton";

// ==============================================


export default function SkillsSection () {
  const [currentFilter, setCurrentFilter] = useState<string>("language")

  return (
    <section className="w-full mb-12 lg:p-44 grid gap-12" id="skills">
      <h2 className="text-center lg:text-left text-3xl font-bold">💎 Skills</h2>
      <div className="flex gap-10">
        <FilterButton title="language" setFilter={setCurrentFilter}/>
        <FilterButton title="framework" setFilter={setCurrentFilter}/>
        <FilterButton title="tool" setFilter={setCurrentFilter}/>
        <FilterButton title="librairy" setFilter={setCurrentFilter}/>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-10">
        {datas.skills.map((skill, index) => (
          skill.type.localeCompare(currentFilter) === 0 ? <SkillCard key={index} image={skill.image} name={skill.name} /> : null
        ))}
      </div>
    </section>
  );
}
