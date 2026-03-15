import styles from "./about-section.module.css";

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.explanationDiv}>
                <h2>À propos</h2>
                <p>
                    Développeur Fullstack passionné par la conception d'applications web robustes,
                    je travaille principalement avec React et Symfony pour construire des solutions
                    complètes, du front-end au back-end. Curieux et rigoureux, j'aime comprendre
                    les enjeux métier pour traduire un besoin en fonctionnalités concrètes
                    {/* TODO: ajouter un élément différenciant personnel, ex: "et je m'intéresse particulièrement à [domaine/secteur]" */}.
                </p>
                <p>
                    Actuellement en Bac+{/* TODO: niveau actuel, ex: 3 ou 4 */} en {/* TODO: nom de la formation / école actuelle */},
                    je recherche une alternance en gestion de projets informatiques pour un Bac+5.
                    Mon objectif : combiner ma maîtrise technique avec des compétences en pilotage
                    de projet pour accompagner des équipes et mener des projets IT de A à Z.
                </p>
            </div>
            <img src="/images/about-avatar.svg" alt="about-avatar-image"/>
        </section>
    );
};

export default AboutSection;
