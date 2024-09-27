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
            <div className="w-full lg:w-1/4 transition-transform hover:-translate-y-2 hover:cursor-pointer">
                <img src={imagePath} alt="Image du projet" className="w-full h-[400px] rounded-2xl blur-sm" />
                <span className="w-full flex flex-row justify-around items-center p-2">
                    <h3 className="w-full font-bold text-2xl">{titre}</h3>
                    <a href={lien} target="_blank"><img src="/plus.png" alt="Voir plus" className="w-16 h-12 hover:rotate-3" /></a>
                </span>
            </div>
        </>
    );
}