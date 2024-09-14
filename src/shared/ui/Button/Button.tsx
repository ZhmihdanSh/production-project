import { ButtonHTMLAttributes, memo, ReactNode, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = useMemo(() => ({
        [classes.square]: square
    }), [square]);

    return (
        <button
            className={classNames(classes.Button, mods, [className, classes[theme], classes[size]])}
            type='button'
            {...otherProps}
        >
            {children}
        </button>
    );
});
