import { Dispatch, SetStateAction } from "react";

// ==============================================

export default function FilterButton ({title, setFilter} : {title: string, setFilter: Dispatch<SetStateAction<string>>}) {
    return (
        <>
            <button className="filter px-4 hover:cursor-pointer" onClick={() => setFilter(title)}>
                <img src={`/icons/${title}.svg`} className="w-[28px]" />
                {title}
            </button>
        </>
    )
}