import React, { FC } from 'react';
import classes from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={classNames(classes.Loader, {}, [className])} />
    );
};
