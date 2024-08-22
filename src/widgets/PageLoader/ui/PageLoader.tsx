import React, { FC } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(classes.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
