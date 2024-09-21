import Image from "next/image"
import ProgressBar from './ProgressBar'

interface props {
    imagePath: string;
    titre: string;
    progression: string;
}

export default function Competence({ imagePath, titre, progression }: props) {
    return (
        <>
            <div className="w-1/5 flex flex-col items-center pt-4 rounded-xl bg-gray-700 p-4 gap-4 transition-transform hover:-translate-y-2">
                <Image src={imagePath} alt="Logo competence" width="100" height="100" className="w-1/3" />
                <h3 className="w-full text-center font-bold">{titre}</h3>
                <ProgressBar progression={progression} />
            </div>
        </>
    );
}