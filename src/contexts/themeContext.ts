import { createContext } from "react";

export interface ThemeContextType {
    theme: 'light' | 'dark';
    changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    changeTheme: () => console.log(""),
});
