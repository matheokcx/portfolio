import Image from "next/image"

interface props {
    imagePath: string;
    titre: string;
    texte: string;
}

export default function Qualite({ imagePath, titre, texte }: props) {
    return (
        <>
            <div className="w-full lg:w-1/4 border-2 border-gray-400 dark:border-0 flex flex-col items-center justify-center gap-10">
                <Image src={imagePath} alt="Icon qualite" width="80" height="80" />
                <h3 className="font-bold text-lg">{titre}</h3>
                <i className="w-5/6 text-wrap text-sm text-center text-opacity-50">{texte}</i>
            </div>
        </>
    )
}