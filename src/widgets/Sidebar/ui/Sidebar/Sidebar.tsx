import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
    } = props;

    // TODO: добавить setCollapsed
    const [collapsed] = useState(false);

    // const toggleSidebar = () => {
    //     setCollapsed(prev => !prev);
    // };

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});
