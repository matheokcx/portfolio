import styles from "./about-section.module.css";

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.explanationDiv}>
                <h2></h2>
                <p></p>
                <p></p>
            </div>
            <img src="/images/about-avatar.svg" alt="about-avatar-image"/>
        </section>
    );
};

export default AboutSection;
