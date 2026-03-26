import styles from "./hero-section.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.title}>
                Je conçois des applications web complètes,<br/>
                prêtes à l'évolution.
            </h1>
            <p className={styles.description}>
                Actuellement en recherche d'alternance pour un Bac+5 en gestion de projets informatiques.
            </p>

            <div className={styles.ctas}>
                <button className={styles.contactCta}>
                    <a href="mailto:matheo.deleplanque@gmail.com">Me contacter</a>
                </button>
                <button className={styles.projectsCta}>
                    <a href="#projects">Mes projets</a>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
