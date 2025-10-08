import { useInView } from "react-intersection-observer";

// ==============================================


type StorySectionProps = {
    setActiveSection: (newValue: string) => void
};

const StorySection = ({ setActiveSection }: StorySectionProps) => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    if (inView) setActiveSection("about");

    return (
        <section ref={ref} className="w-full p-10 flex flex-col lg:flex-row justify-around items-center gap-20 lg:gap-0" id="about">
            <img src={`${import.meta.env.BASE_URL}memoji.png`} alt="Illustration" className="w-10/12 lg:w-1/3" />
            <div className="w-11/12 lg:w-1/2 lg:text-left">
                <h2 className="text-4xl font-bold mb-4">Mon histoire</h2>
                <hr className="w-1/3 border-2 mb-10" />
                <p className="text-lg leading-relaxed">
                    Le développement ne s'est pas contenté d'attirer mon attention, il a totalement transformé ma manière d'aborder la résolution de problèmes et l'innovation.
                    Ce qui n'était au départ qu'une simple curiosité est rapidement devenu une passion pour la création d'applications fluides et performantes.
                    <br /><br />
                    Je ne me contente pas d'écrire du code, je construis des solutions qui ont un réel impact et aident les entreprises à évoluer.
                    Qu'il s'agisse de concevoir des designs de page web ou de résoudre des défis techniques complexes,
                    je m'épanouis en transformant les idées en <u>réalité</u>.
                    Chaque projet est une opportunité d'affiner mes compétences, de repousser mes limites et de livrer des expériences exceptionnelles.
                </p>
            </div>
        </section>
    );
}

export default StorySection;
