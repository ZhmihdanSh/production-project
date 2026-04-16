import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Mods } from 'shared/lib/classNames/classNames';

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl',
}

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = useMemo(() => ({
        [classes.square]: square,
    }), [square]);

    return (
        <button
            type="button"
            className={classNames(classes.Button, mods, [classes[theme], className, classes[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
