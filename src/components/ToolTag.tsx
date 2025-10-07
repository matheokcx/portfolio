type ToolTagProps = {
    text: string
};

const ToolTag = ({ text }: ToolTagProps) => {
    return (
        <span className="w-fit px-4 py-2 text-xs rounded-2xl bg-[#505050] border-2 border-[#505050] text-white font-bold">
            {text}
        </span>
    );
};

export default ToolTag;
