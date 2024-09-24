interface props {
    imagePath: string;
    titre: string;
    techs: string;
    description: string;
    lien: string;
}

export default function Projet({ imagePath, titre, techs, description, lien }: props) {
    return (
        <>
            <div className="w-full lg:w-1/4 p-6 border-2 border-gray-400 dark:border-0 dark:bg-gray-700 rounded-xl flex flex-col items-center pt-12 gap-6 transition-transform hover:-translate-y-2 hover:cursor-pointer">
                <img src={imagePath} alt="Image du projet" className="w-5/6 h-40 rounded-xl" />
                <h3 className="w-full text-center font-bold text-lg">{titre}</h3>
                <p className="font-bold w-full text-center text-opacity-50">{techs}</p>
                <i className="text-center h-1/3">{description}</i>
                <a href={lien} target="_blank"><img src="/plus.png" alt="Voir plus" className="w-16 h-16 hover:rotate-3" /></a>
            </div>
        </>
    );
}