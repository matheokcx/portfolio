import {useTranslation} from "react-i18next";
import styles from "./about-section.module.css";

const AboutSection = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.aboutSection}>
            <div className={styles.explanationDiv}>
                <h2>{t("about.title")}</h2>
                <p>{t("about.paragraph1")}</p>
                <p>{t("about.paragraph2")}</p>
            </div>
            <img src="/images/about-avatar.svg" alt="about-avatar-image"/>
        </section>
    );
};

export default AboutSection;
