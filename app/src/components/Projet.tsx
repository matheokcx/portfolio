import Image from "next/image"

interface props {
    imagePath: string;
    titre: string;
    techs: string;
    description: string;
}

export default function Projet({ imagePath, titre, techs, description }: props) {
    return (
        <>
            <div className="w-1/4 p-6 bg-gray-700 rounded-xl flex flex-col items-center pt-12 gap-6 transition-transform hover:-translate-y-2 hover:cursor-pointer">
                <Image src={imagePath} alt="Image du projet" width="100" height="100" className="w-5/6 rounded-xl" />
                <h3 className="w-full text-center font-bold text-lg">{titre}</h3>
                <p className="font-bold w-full text-center text-opacity-50">{techs}</p>
                <i className="text-center">{description}</i>
            </div>
        </>
    );
}