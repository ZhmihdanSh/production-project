import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
}

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link className={classNames(className, {}, [classes[theme]])} {...otherProps}>
            {children}
        </Link>
    );
});
