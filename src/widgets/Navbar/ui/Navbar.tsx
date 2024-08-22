import React, { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.Navbar__links}>
                <AppLink
                    className={classes.MainLink}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.main}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.about}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
