import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'app/providers/router/lib/routesConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="toggle-button"
                onClick={toggleSidebar}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                className={classes.toggleButton}
                square
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={classes.items}>
                <AppLink
                    className={classes.item}
                    to={RoutePaths.MAIN}
                    theme={AppLinkTheme.INVERTED}
                >
                    <MainIcon className={classes.icon} />
                    <span className={classes.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    className={classes.item}
                    to={RoutePaths.ABOUT}
                    theme={AppLinkTheme.INVERTED}
                >
                    <AboutIcon className={classes.icon} />
                    <span className={classes.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
