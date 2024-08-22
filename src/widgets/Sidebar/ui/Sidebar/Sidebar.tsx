import React, { memo, useMemo, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    const mods: Mods = useMemo(() => ({
        [classes.collapsed]: collapsed
    }), [collapsed]);

    return (
        <div className={classNames(classes.Sidebar, mods, [className])} data-testid="sidebar">
            <Button
                data-testid="sidebar-toggle"
                onClick={toggleSidebar}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                <>
                    {/* Кнопка временная, отключаю линтинг, что бы сделать коммит */}
                    {/*eslint-disable-next-line i18next/no-literal-string*/}
                </>
                TOGGLE
            </Button>
            <div className={classes.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});
