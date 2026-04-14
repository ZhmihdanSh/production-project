import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ButtonTheme;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props;

    return (
        <button type="button" className={classNames(classes.Button, {}, [classes[theme], className])} {...otherProps}>
            {children}
        </button>
    );
});
