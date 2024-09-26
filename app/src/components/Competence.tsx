import ProgressBar from './ProgressBar'

interface props {
    imagePath: string;
    titre: string;
    progression: string;
}

export default function Competence({ imagePath, titre, progression }: props) {
    return (
        <>
            <div className="w-11/12 lg:w-1/5 flex flex-col items-center pt-4 rounded-2xl bg-white dark:bg-gray-700 p-4 gap-4 transition-transform hover:-translate-y-2 text-black dark:text-white">
                <img src={imagePath} alt="Logo competence" className="w-1/3 h-1/2" />
                <h3 className="w-full text-center font-bold">{titre}</h3>
                <ProgressBar progression={progression} />
            </div>
        </>
    );
}