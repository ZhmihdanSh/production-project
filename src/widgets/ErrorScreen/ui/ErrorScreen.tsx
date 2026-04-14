import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ErrorScreen.module.scss';

export const ErrorScreen = memo(() => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classes.ErrorScreen}>
            <h3>{t('Ошибка')}</h3>
            <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
});
