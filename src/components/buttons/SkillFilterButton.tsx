import { Dispatch, SetStateAction } from "react";

// ==============================================

export default function SkillFilterButton({ title, setFilter }: { title: string, setFilter: Dispatch<SetStateAction<string>> }) {
    return (
        <>
            <button className="filter px-4 hover:cursor-pointer" onClick={() => setFilter(title)}>
                <img src={`${import.meta.env.BASE_URL}icons/${title}.svg`} className="w-[28px]" />
                {title}
            </button>
        </>
    )
}