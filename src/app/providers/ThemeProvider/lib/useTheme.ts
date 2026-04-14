import { useCallback, useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext } from './themeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(themeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);

    return { theme, toggleTheme };
}
