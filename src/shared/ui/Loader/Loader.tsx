import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo((props: LoaderProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(classes.Loader, {}, [className])} />
    );
});
