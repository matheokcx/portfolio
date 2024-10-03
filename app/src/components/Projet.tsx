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
            <a href={lien}>
                <div className="w-full transition-transform hover:-translate-y-2 hover:cursor-pointer">
                    <img src={imagePath} alt="Image du projet" className="w-full h-[400px] rounded-2xl blur-[3px]" />
                    <span className="w-full flex flex-row justify-around items-center p-2">
                        <h3 className="w-full font-semibold text-2xl text-center">{titre}</h3>
                    </span>
                </div>
            </a>
        </>
    );
}