import styles from "./hero-section.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.title}></h1>
            <p></p>
            <div className={styles.ctas}>
                <button className={styles.contactCta}></button>
                <button className={styles.projectsCta}></button>
            </div>
        </section>
    );
};

export default HeroSection;
