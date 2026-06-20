import {useTheme} from "../../hooks/useTheme.ts";
import {useTranslation} from "react-i18next";
import styles from "../Layout/Footer/footer.module.css";

const ThemeButton = () => {
    const { t } = useTranslation();
    const { theme, changeTheme } = useTheme();

    return (
        <>
            <button onClick={changeTheme} className={styles.langToggle}>
                {t(theme)}
            </button>
        </>
    );
};

export default ThemeButton;
