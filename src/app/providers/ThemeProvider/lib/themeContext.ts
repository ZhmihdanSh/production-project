import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextProps {
    theme: Theme,
    setTheme: (theme: Theme) => void;
}

export const themeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
