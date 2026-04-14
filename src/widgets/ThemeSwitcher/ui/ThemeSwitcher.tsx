import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {
        className,
    } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button aria-label="Сменить тему" className={className} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
});
