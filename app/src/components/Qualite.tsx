interface props {
    imagePath: string;
    titre: string;
    texte: string;
}

export default function Qualite({ imagePath, titre, texte }: props) {
    return (
        <>
            <div className="w-full lg:w-1/4 border-2 border-gray-400 dark:border-0 rounded-xl p-4 flex flex-col items-center justify-center gap-10">
                <img src={imagePath} alt="Icon qualite" className="w-20 h-20" />
                <h3 className="font-bold text-lg">{titre}</h3>
                <i className="w-full lg:w-5/6 text-wrap text-sm text-center text-opacity-50">{texte}</i>
            </div>
        </>
    )
}