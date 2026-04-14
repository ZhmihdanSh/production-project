import { memo, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext } from '../lib/themeContext';
import type { ReactNode } from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

export const ThemeProvider = memo((props: ThemeProviderProps) => {
    const { children, initialTheme } = props;

    const [theme, setTheme] = useState(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.classList.add(theme, 'app');

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    const value = useMemo(() => ({
        theme,
        setTheme,
    }), [theme, setTheme]);

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    );
});
