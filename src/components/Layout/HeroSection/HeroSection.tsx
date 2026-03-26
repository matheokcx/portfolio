import {useTranslation} from "react-i18next";
import styles from "./hero-section.module.css";

const HeroSection = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.heroSection}>
            <h1 className={styles.title}>
                {t("hero.title1")}<br/>
                {t("hero.title2")}
            </h1>
            <p className={styles.description}>
                {t("hero.description")}
            </p>

            <div className={styles.ctas}>
                <button className={styles.contactCta}>
                    <a href="mailto:matheo.deleplanque@gmail.com">{t("hero.contact")}</a>
                </button>
                <button className={styles.projectsCta}>
                    <a href="#projects">{t("hero.projects")}</a>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
