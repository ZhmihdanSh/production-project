import React, { useMemo } from 'react';
import classes from './ErrorPage.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
    const mods: Mods = useMemo(() => ({}), []);

    const { t } = useTranslation();

    return (
        <div className={classNames('page', mods, [classes.ErrorPage])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default ErrorPage;
