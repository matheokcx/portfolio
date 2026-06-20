import { ThemeContext } from "../../../contexts/themeContext.ts";
import { type ReactNode, useEffect, useState } from "react";

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const changeTheme = (): void => {
        const newThemeValue = theme === 'light' ? 'dark' : 'light';
        setTheme(newThemeValue);
        localStorage.setItem('theme', newThemeValue);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            changeTheme: changeTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
