import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, theme, to, ...otherProps } = props;

    return (
        <Link
            className={classNames(classes.AppLink, {}, [classes[theme], className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
