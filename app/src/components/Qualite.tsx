interface props {
    imagePath: string;
    titre: string;
    texte: string;
}

export default function Qualite({ imagePath, titre, texte }: props) {
    return (
        <>
            <div className="w-full lg:w-1/4 lg:h-[450px] bg-white dark:bg-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-10 text-black dark:text-white">
                <img src={imagePath} alt="Icon qualite" className="w-20 h-20" />
                <h3 className="font-bold text-lg">{titre}</h3>
                <p className="w-full lg:w-11/12 text-wrap text-sm text-center text-opacity-50">{texte}</p>
            </div>
        </>
    )
}