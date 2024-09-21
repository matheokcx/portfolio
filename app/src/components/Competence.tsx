import ProgressBar from './ProgressBar'

interface props {
    imagePath: string;
    titre: string;
    progression: string;
}

export default function Competence({ imagePath, titre, progression }: props) {
    return (
        <>
            <div className="w-5/6 lg:w-1/5 flex flex-col items-center pt-4 rounded-xl border-2 border-gray-400 dark:border-0 light: dark:bg-gray-700 p-4 gap-4 transition-transform hover:-translate-y-2">
                <img src={imagePath} alt="Logo competence" className="w-1/3 h-1/2" />
                <h3 className="w-full text-center font-bold">{titre}</h3>
                <ProgressBar progression={progression} />
            </div>
        </>
    );
}