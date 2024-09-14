import React, { memo, useMemo, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    const mods: Mods = useMemo(() => ({
        [classes.collapsed]: collapsed
    }), [collapsed]);

    return (
        <div className={classNames(classes.Sidebar, mods, [className])} data-testid="sidebar">
            <Button
                className={classes.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={toggleSidebar}
                size={ButtonSize.L}
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                <AppLink
                    className={classes.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.main}
                >
                    <MainIcon className={classes.icon}/>
                    <span className={classes.link}>{t('Главная страница')}</span>
                </AppLink>
                <AppLink
                    className={classes.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.about}
                >
                    <AboutIcon className={classes.icon}/>
                    <span className={classes.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={classes.langSwitcher} short={collapsed}/>
            </div>
        </div>
    );
});
