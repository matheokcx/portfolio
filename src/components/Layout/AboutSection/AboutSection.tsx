import styles from "./about-section.module.css";

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.explanationDiv}>
                <h2>À propos</h2>
                <p>
                    Développeur Fullstack passionné par la conception d'applications web avec une architecture solide,
                    je travaille principalement avec les technologies React et Symfony pour construire des solutions
                    fullstack, du front-end au back-end. Curieux et rigoureux, j'aime comprendre
                    les besoins métier pour les traduire en fonctionnalités concrètes.
                </p>
                <p>
                    Actuellement en Bac+3 en But informatique, je recherche une alternance en développement
                    d'application pour un Bac+5. Mon objectif: combiner ma maîtrise technique avec les compétences en
                    pilotage
                    de projet de ma futur formation afin d'accompagner des équipes et m'investir dans des projets de A à
                    Z.
                </p>
            </div>
            <img src="/images/about-avatar.svg" alt="about-avatar-image"/>
        </section>
    );
};

export default AboutSection;
