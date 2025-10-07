type SkillFilterButtonProps = {
    title: string,
    setFilter: (newValue: string) => void
};

const SkillFilterButton = ({ title, setFilter }: SkillFilterButtonProps) => {
    return (
        <>
            <button className="filter px-4 hover:cursor-pointer" onClick={() => setFilter(title)}>
                <img src={`${import.meta.env.BASE_URL}icons/${title}.svg`} className="w-[28px]" />
                {title}
            </button>
        </>
    );
};

export default SkillFilterButton;
