import { createContext } from 'react';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const themeContext = createContext({} as ThemeContextValue);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
