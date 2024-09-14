import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.Navbar__links}>
                /
            </div>
        </div>
    );
};
