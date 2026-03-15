import styles from "./hero-section.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1 style={{textAlign: "center"}}>
                Je conçois des applications web performantes,<br/>
                prêtes à scaler vos projets IT.
            </h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <p className={styles.description}>
                    Actuellement en recherche d'alternance pour un Bac+5 en Gestion de Projets Informatiques.
                    Du code à la coordination d'équipe, j'allie vision technique et pilotage projet
                    pour livrer des solutions qui créent de la valeur.
                </p>
            </div>

            <div className={styles.ctas}>
                <button className={styles.contactCta}><a href="mailto:matheo.deleplanque@gmail.com">Me contacter</a>
                </button>
                <button className={styles.projectsCta}><a href="#projects">Mes projetss</a></button>
            </div>
        </section>
    );
};

export default HeroSection;
